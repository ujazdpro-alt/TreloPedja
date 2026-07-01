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
    links: [
      'Pomoc',
      'Naucz się edytować',
      'Portal społeczności',
      'Ostatnie zmiany',
      'Prześlij plik',
    ],
  },
  {
    heading: 'Narzędzia',
    links: [
      'Linkujące',
      'Powiązane zmiany',
      'Strony specjalne',
      'Link do tej wersji',
      'Informacje o stronie',
      'Cytowanie strony',
    ],
  },
]

export function LeftNav() {
  return (
    <nav
      aria-label="Nawigacja witryny"
      className="hidden w-[160px] shrink-0 text-[13px] lg:block"
    >
      <a href="#" className="mb-4 flex flex-col items-center">
        <span
          aria-hidden="true"
          className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-wiki-border font-serif text-5xl font-bold text-wiki-text"
        >
          T
        </span>
      </a>
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
