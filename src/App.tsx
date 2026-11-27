import { useState } from 'react'
import { nodes } from './content'
import type { Question, Rank } from './content'
import { buildLesson } from './game/lesson'
import { lessonOutcome } from './game/scoring'
import type { LessonOutcome } from './game/scoring'
import { Home } from './screens/Home'
import { Lesson } from './screens/Lesson'
import { Results } from './screens/Results'

type Screen =
  | { name: 'home' }
  | { name: 'lesson'; nodeId: string; questions: Question[]; run: number }
  | { name: 'results'; nodeId: string; outcome: LessonOutcome }

let runCounter = 0

// Progress is held in memory for now; saving to the browser comes in step 3.
function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' })
  const [ranks, setRanks] = useState<Record<string, Rank>>({})
  const [xp, setXp] = useState(0)

  const start = (nodeId: string) => setScreen({ name: 'lesson', nodeId, questions: buildLesson(nodeId), run: ++runCounter })
  const home = () => setScreen({ name: 'home' })

  if (screen.name === 'lesson') {
    const node = nodes.find((n) => n.id === screen.nodeId)!
    return (
      <Lesson
        key={screen.run}
        node={node}
        questions={screen.questions}
        onQuit={home}
        onFinish={(correct) => {
          const outcome = lessonOutcome(correct, screen.questions.length, ranks[node.id] ?? 0)
          setRanks((r) => ({ ...r, [node.id]: outcome.newRank }))
          setXp((x) => x + outcome.xp)
          setScreen({ name: 'results', nodeId: node.id, outcome })
        }}
      />
    )
  }

  if (screen.name === 'results') {
    const node = nodes.find((n) => n.id === screen.nodeId)!
    return <Results node={node} outcome={screen.outcome} onRetry={() => start(node.id)} onHome={home} />
  }

  return <Home ranks={ranks} xp={xp} onStart={start} />
}

export default App
