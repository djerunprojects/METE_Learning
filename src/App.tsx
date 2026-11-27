import { useEffect, useRef, useState } from 'react'
import { lessons, nodes } from './content'
import type { Question } from './content'
import { buildLesson, buildReview } from './game/lesson'
import { levelInfo } from './game/levels'
import { applyLesson, applyReview, currentStreak, loadProgress, parseProgress, saveProgress } from './game/progress'
import type { AnswerRecord, Progress } from './game/progress'
import { lessonOutcome, XP_PER_CORRECT } from './game/scoring'
import type { LessonOutcome } from './game/scoring'
import { Lesson } from './screens/Lesson'
import { LessonReader } from './screens/LessonReader'
import { Results } from './screens/Results'
import { SkillsScreen } from './screens/SkillsScreen'
import { TreeScreen } from './screens/TreeScreen'
import { PlayerBar } from './ui/PlayerBar'
import type { Tab } from './ui/PlayerBar'

type Screen =
  | { name: 'home' }
  | { name: 'lesson'; nodeId: string; questions: Question[]; run: number }
  /** Practicing earlier mistakes from any skills. */
  | { name: 'review'; questions: Question[]; run: number }
  /** Reading a skill's lesson cards. `thenPractice`: continue into the questions afterwards. */
  | { name: 'learn'; nodeId: string; thenPractice: boolean }
  | {
      name: 'results'
      /** Skill node id, or null for a mistake review. */
      nodeId: string | null
      outcome: LessonOutcome
      levelBefore: number
      levelAfter: number
      remaining?: number
    }

let runCounter = 0

function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' })
  const [tab, setTab] = useState<Tab>('tree')
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const [saveFailed, setSaveFailed] = useState(false)

  const updateProgress = (next: Progress) => {
    setProgress(next)
    setSaveFailed(!saveProgress(next))
  }

  // Keep the home scroll position when coming back from a lesson.
  const homeScroll = useRef(0)
  useEffect(() => {
    window.scrollTo(0, screen.name === 'home' ? homeScroll.current : 0)
  }, [screen])

  const switchTab = (t: Tab) => {
    homeScroll.current = 0
    setTab(t)
    window.scrollTo(0, 0)
  }

  const practice = (nodeId: string) =>
    setScreen({ name: 'lesson', nodeId, questions: buildLesson(nodeId), run: ++runCounter })

  /** First time on a skill: read the lesson, then practice. Afterwards: straight to practice. */
  const start = (nodeId: string) => {
    if (screen.name === 'home') homeScroll.current = window.scrollY
    const firstTime = (progress.ranks[nodeId] ?? 0) === 0 && !progress.lastPlayed[nodeId]
    if (firstTime && lessons[nodeId]) setScreen({ name: 'learn', nodeId, thenPractice: true })
    else practice(nodeId)
  }

  const review = () => {
    if (screen.name === 'home') homeScroll.current = window.scrollY
    const qs = buildReview(progress.mistakes)
    if (qs.length) setScreen({ name: 'review', questions: qs, run: ++runCounter })
  }

  const read = (nodeId: string) => {
    if (screen.name === 'home') homeScroll.current = window.scrollY
    setScreen({ name: 'learn', nodeId, thenPractice: false })
  }
  const toHome = () => setScreen({ name: 'home' })

  if (screen.name === 'learn') {
    const node = nodes.find((n) => n.id === screen.nodeId)!
    return (
      <LessonReader
        key={node.id}
        node={node}
        lesson={lessons[node.id]}
        finishLabel={screen.thenPractice ? 'Start practice' : 'Done'}
        onFinish={() => (screen.thenPractice ? practice(node.id) : toHome())}
        onQuit={toHome}
      />
    )
  }

  if (screen.name === 'lesson') {
    const node = nodes.find((n) => n.id === screen.nodeId)!
    return (
      <Lesson
        key={screen.run}
        label={node.title}
        questions={screen.questions}
        onQuit={toHome}
        onFinish={(answers) => {
          const correct = answers.filter(Boolean).length
          const outcome = lessonOutcome(correct, answers.length, progress.ranks[node.id] ?? 0)
          const records: AnswerRecord[] = screen.questions.map((q, i) => ({ questionId: q.id, nodeId: q.nodeId, correct: answers[i] }))
          const next = applyLesson(progress, node.id, outcome, answers, new Date(), records)
          updateProgress(next)
          setScreen({
            name: 'results',
            nodeId: node.id,
            outcome,
            levelBefore: levelInfo(progress.xp).level,
            levelAfter: levelInfo(next.xp).level,
          })
        }}
      />
    )
  }

  if (screen.name === 'review') {
    return (
      <Lesson
        key={screen.run}
        label="Review mistakes"
        questions={screen.questions}
        onQuit={toHome}
        onFinish={(answers) => {
          const records: AnswerRecord[] = screen.questions.map((q, i) => ({ questionId: q.id, nodeId: q.nodeId, correct: answers[i] }))
          const correct = answers.filter(Boolean).length
          // Reviews never change ranks: score them as if already mastered, XP without the perfect bonus.
          const outcome = { ...lessonOutcome(correct, answers.length, 2), xp: correct * XP_PER_CORRECT }
          const next = applyReview(progress, records, outcome.xp)
          updateProgress(next)
          setScreen({
            name: 'results',
            nodeId: null,
            outcome,
            levelBefore: levelInfo(progress.xp).level,
            levelAfter: levelInfo(next.xp).level,
            remaining: next.mistakes.length,
          })
        }}
      />
    )
  }

  if (screen.name === 'results') {
    const node = screen.nodeId ? nodes.find((n) => n.id === screen.nodeId)! : null
    const remaining = screen.remaining ?? 0
    return (
      <Results
        title={node ? node.title : 'Review mistakes'}
        note={
          node
            ? undefined
            : remaining === 0
              ? 'All mistakes cleared. Nice work!'
              : `${remaining} question${remaining === 1 ? '' : 's'} left to review. Correct answers are removed from the list.`
        }
        outcome={screen.outcome}
        levelUp={screen.levelAfter > screen.levelBefore ? screen.levelAfter : null}
        onRetry={node ? () => practice(node.id) : remaining > 0 ? review : undefined}
        onHome={toHome}
        homeLabel={tab === 'tree' ? 'Back to tree' : 'Back to my skills'}
      />
    )
  }

  return (
    <>
      <PlayerBar xp={progress.xp} streak={currentStreak(progress)} tab={tab} onTab={switchTab} />
      {tab === 'tree' ? (
        <TreeScreen
          progress={progress}
          saveFailed={saveFailed}
          onStart={start}
          onRead={read}
          onReview={review}
          onImport={(json) => {
            try {
              updateProgress(parseProgress(json))
              return null
            } catch (e) {
              return e instanceof SyntaxError ? 'That file is not valid JSON.' : (e as Error).message
            }
          }}
        />
      ) : (
        <SkillsScreen progress={progress} onPractice={start} onRead={read} onReview={review} />
      )}
    </>
  )
}

export default App
