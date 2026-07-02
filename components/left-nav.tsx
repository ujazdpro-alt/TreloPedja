import Link from 'next/link'
import { people } from '@/lib/people'
import { WikiLink } from './wiki-link'

type NavSection = {
  heading: string
  links: string[]
}

const sections: NavSection[] = [
  {
    heading: 'Nawigacja',
    links: [
      'Strona główna',
      'Zawartość',
      'Bieżące wydarzenia',
      'Losowy artykuł',
      'O TreloPedji',
      'Kontakt',
    ],
  },
  {
    heading: 'Współtworzenie',
    links: ['Pomoc', 'Naucz się edytować', 'Portal społeczności', 'Ostatnie zmiany'],
  },
]

export function LeftNav() {
  return (
    <nav
      aria-label="Nawigacja witryny"
      className="hidden w-[160px] shrink-0 text-[13px] lg:block"
    >
      <Link href="/" className="mb-4 flex flex-col items-center">
        <span
          aria-hidden="true"
          className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-wiki-border font-serif text-5xl font-bold text-wiki-text"
        >
          T
        </span>
      </Link>

      {/* Postacie */}
      <div className="mb-4">
        <h3 className="mb-1 border-b border-wiki-border-light pb-0.5 text-[13px] font-normal text-wiki-muted">
          Postacie
        </h3>
        <ul className="flex flex-col gap-1 pl-1">
          <li>
            <WikiLink href="/">Strona główna</WikiLink>
          </li>
          {people.map((person) => (
            <li key={person.slug}>
              <WikiLink href={`/${person.slug}`}>{person.name}</WikiLink>
            </li>
          ))}
        </ul>
      </div>

      {sections.map((section) => (
        <div key={section.heading} className="mb-4">
          <h3 className="mb-1 border-b border-wiki-border-light pb-0.5 text-[13px] font-normal text-wiki-muted">
            {section.heading}
          </h3>
          <ul className="flex flex-col gap-1 pl-1">
            {section.links.map((link) => (
              <li key={link}>
                <WikiLink>{link}</WikiLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
