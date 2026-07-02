import type { ReactNode } from 'react'
import { WikiLink } from './wiki-link'

/**
 * Renders a small subset of markup used in the people data:
 * - [[label]]        -> blue wiki link
 * - [[!label]]       -> red "missing page" wiki link
 * - **bold**         -> bold text
 * - *italic*         -> italic text
 *
 * This keeps the data file easy to edit in plain text while still looking
 * like a real Wikipedia article.
 */
export function RichText({ children }: { children: string }) {
  return <>{parse(children)}</>
}

// Split on the tokens we support while keeping the delimiters.
const TOKEN = /(\[\[!?[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*)/g

function parse(text: string): ReactNode[] {
  const parts = text.split(TOKEN)
  return parts.map((part, i) => {
    if (!part) return null

    // Wiki links
    if (part.startsWith('[[') && part.endsWith(']]')) {
      const inner = part.slice(2, -2)
      const red = inner.startsWith('!')
      const label = red ? inner.slice(1) : inner
      return (
        <WikiLink key={i} red={red}>
          {label}
        </WikiLink>
      )
    }

    // Bold
    if (part.startsWith('**') && part.endsWith('**')) {
      return <b key={i}>{part.slice(2, -2)}</b>
    }

    // Italic
    if (part.startsWith('*') && part.endsWith('*')) {
      return <i key={i}>{part.slice(1, -1)}</i>
    }

    return <span key={i}>{part}</span>
  })
}
