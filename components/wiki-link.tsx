import type { ReactNode } from 'react'

type WikiLinkProps = {
  children: ReactNode
  href?: string
  /** Renders in the "red link" style used for pages that don't exist yet. */
  red?: boolean
  title?: string
}

export function WikiLink({ children, href = '#', red, title }: WikiLinkProps) {
  return (
    <a
      href={href}
      title={title}
      className={
        red
          ? 'text-wiki-link-red hover:underline'
          : 'text-wiki-link visited:text-wiki-link-visited hover:underline'
      }
    >
      {children}
    </a>
  )
}
