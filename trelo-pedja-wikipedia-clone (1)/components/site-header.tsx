import { Search } from 'lucide-react'
import { WikiLink } from './wiki-link'

export function SiteHeader() {
  return (
    <header className="border-b border-wiki-border-light bg-wiki-bg">
      <div className="mx-auto flex max-w-[1300px] items-center gap-4 px-3 py-2">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-wiki-border font-serif text-2xl font-bold text-wiki-text"
          >
            T
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-xl text-wiki-text">TreloPedja</span>
            <span className="text-[11px] text-wiki-muted">Wolna encyklopedia</span>
          </span>
        </a>

        {/* Wyszukiwarka */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-[500px] items-stretch">
            <div className="relative flex-1">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-wiki-muted"
              />
              <input
                type="search"
                aria-label="Przeszukaj TreloPedję"
                placeholder="Przeszukaj TreloPedję"
                className="h-8 w-full rounded-l-sm border border-wiki-border bg-wiki-bg pl-8 pr-2 text-sm text-wiki-text outline-none focus:border-wiki-link"
              />
            </div>
            <button
              type="button"
              className="h-8 shrink-0 rounded-r-sm border border-l-0 border-wiki-border bg-wiki-panel px-3 text-sm text-wiki-text hover:bg-wiki-border-light/40"
            >
              Szukaj
            </button>
          </div>
        </div>

        {/* Linki konta */}
        <nav className="hidden items-center gap-3 text-sm md:flex">
          <WikiLink>Wspomóż</WikiLink>
          <WikiLink>Utwórz konto</WikiLink>
          <WikiLink>Zaloguj się</WikiLink>
        </nav>
      </div>
    </header>
  )
}
