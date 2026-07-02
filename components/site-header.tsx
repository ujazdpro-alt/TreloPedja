import { Search } from 'lucide-react'
import Link from 'next/link'
import { SearchBox } from './search-box'
import { WikiLink } from './wiki-link'

export function SiteHeader() {
  return (
    <header className="border-b border-wiki-border-light bg-wiki-bg">
      <div className="mx-auto flex max-w-[1300px] items-center gap-4 px-3 py-2">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
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
        </Link>

        {/* Wyszukiwarka */}
        <div className="flex flex-1 items-center justify-center">
          <SearchBox />
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
