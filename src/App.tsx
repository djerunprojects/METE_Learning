import { branches, nodes, questions } from './content'

// Placeholder screen (step 1). The lesson screen arrives in step 2 and the tree screen in step 3.
function App() {
  const layers = ['core', 'discipline', 'application'] as const
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '32px 16px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>METE Learning</h1>
      <p>
        Skill tree: {nodes.length} nodes in {branches.length} branches · {questions.length} sample questions.
      </p>
      {layers.map((layer) => (
        <section key={layer}>
          <h2 style={{ textTransform: 'capitalize' }}>{layer}</h2>
          <ul>
            {branches
              .filter((b) => b.layer === layer)
              .map((b) => (
                <li key={b.id}>
                  <strong>{b.name}</strong>: {nodes.filter((n) => n.branch === b.id).map((n) => n.title).join(' → ')}
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  )
}

export default App
