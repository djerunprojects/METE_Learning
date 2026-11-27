import { Fragment } from 'react'
import { RichText } from './RichText'

/** One line of lesson text: **bold** key terms, with acronym tooltips everywhere. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="key-term">
            <RichText text={part} />
          </strong>
        ) : (
          <Fragment key={i}>
            <RichText text={part} />
          </Fragment>
        ),
      )}
    </>
  )
}

/** Renders lesson paragraphs; consecutive "- " lines become a bullet list. */
export function LessonText({ body }: { body: string[] }) {
  const blocks: (string | string[])[] = []
  for (const line of body) {
    if (line.startsWith('- ')) {
      const last = blocks[blocks.length - 1]
      if (Array.isArray(last)) last.push(line.slice(2))
      else blocks.push([line.slice(2)])
    } else {
      blocks.push(line)
    }
  }
  return (
    <>
      {blocks.map((b, i) =>
        Array.isArray(b) ? (
          <ul key={i} className="lesson-list">
            {b.map((item, j) => (
              <li key={j}>
                <Inline text={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p key={i}>
            <Inline text={b} />
          </p>
        ),
      )}
    </>
  )
}
