import Link from 'next/link'
import type { ReactNode } from 'react'

type WikiLinkProps = {
  children: ReactNode
  href?: string
  /** Renders in the "red link" style used for pages that don't exist yet. */
  red?: boolean
  title?: string
}

export function WikiLink({ children, href = '#', red, title }: WikiLinkProps) {
  const className = red
    ? 'text-wiki-link-red hover:underline'
    : 'text-wiki-link visited:text-wiki-link-visited hover:underline'

  // Use the Next.js router for internal navigation, plain anchors otherwise.
  if (href.startsWith('/')) {
    return (
      <Link href={href} title={title} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} title={title} className={className}>
      {children}
    </a>
  )
}
