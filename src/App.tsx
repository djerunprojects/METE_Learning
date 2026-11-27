import { useEffect, useRef, useState } from 'react'
import { nodes } from './content'
import type { Question } from './content'
import { buildLesson } from './game/lesson'
import { levelInfo } from './game/levels'
import { applyLesson, currentStreak, loadProgress, parseProgress, saveProgress } from './game/progress'
import type { Progress } from './game/progress'
import { lessonOutcome } from './game/scoring'
import type { LessonOutcome } from './game/scoring'
import { Lesson } from './screens/Lesson'
import { Results } from './screens/Results'
import { TreeScreen } from './screens/TreeScreen'

type Screen =
  | { name: 'tree' }
  | { name: 'lesson'; nodeId: string; questions: Question[]; run: number }
  | { name: 'results'; nodeId: string; outcome: LessonOutcome; levelBefore: number; levelAfter: number }

let runCounter = 0

function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'tree' })
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const [saveFailed, setSaveFailed] = useState(false)

  const updateProgress = (next: Progress) => {
    setProgress(next)
    setSaveFailed(!saveProgress(next))
  }

  // Keep the tree's scroll position when coming back from a lesson.
  const treeScroll = useRef(0)
  useEffect(() => {
    window.scrollTo(0, screen.name === 'tree' ? treeScroll.current : 0)
  }, [screen])

  const start = (nodeId: string) => {
    if (screen.name === 'tree') treeScroll.current = window.scrollY
    setScreen({ name: 'lesson', nodeId, questions: buildLesson(nodeId), run: ++runCounter })
  }
  const toTree = () => setScreen({ name: 'tree' })

  if (screen.name === 'lesson') {
    const node = nodes.find((n) => n.id === screen.nodeId)!
    return (
      <Lesson
        key={screen.run}
        node={node}
        questions={screen.questions}
        onQuit={toTree}
        onFinish={(answers) => {
          const correct = answers.filter(Boolean).length
          const outcome = lessonOutcome(correct, answers.length, progress.ranks[node.id] ?? 0)
          const next = applyLesson(progress, node.id, outcome, answers)
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

  if (screen.name === 'results') {
    const node = nodes.find((n) => n.id === screen.nodeId)!
    return (
      <Results
        node={node}
        outcome={screen.outcome}
        levelUp={screen.levelAfter > screen.levelBefore ? screen.levelAfter : null}
        onRetry={() => start(node.id)}
        onHome={toTree}
      />
    )
  }

  return (
    <TreeScreen
      progress={progress}
      streak={currentStreak(progress)}
      saveFailed={saveFailed}
      onStart={start}
      onImport={(json) => {
        try {
          updateProgress(parseProgress(json))
          return null
        } catch (e) {
          return e instanceof SyntaxError ? 'That file is not valid JSON.' : (e as Error).message
        }
      }}
    />
  )
}

export default App
