'use client'

import { Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { people } from '@/lib/people'

export function SearchBox() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return people.filter((person) => {
      const haystack = [
        person.name,
        person.tagline,
        ...(person.infobox
          ?.filter((row) => row.label === 'Inne imiona')
          .map((row) => row.value) ?? []),
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query])

  // Reset the highlighted item whenever the result set changes.
  useEffect(() => {
    setActiveIndex(0)
  }, [results])

  // Close the dropdown when clicking outside of the search box.
  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function goTo(slug: string) {
    setOpen(false)
    setQuery('')
    router.push(`/${slug}`)
  }

  function handleSubmit() {
    if (results.length > 0) {
      goTo(results[Math.min(activeIndex, results.length - 1)].slug)
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing || event.keyCode === 229) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
      setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      handleSubmit()
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const showDropdown = open && query.trim().length > 0

  return (
    <div ref={containerRef} className="relative w-full max-w-[500px]">
      <div className="flex w-full items-stretch">
        <div className="relative flex-1">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-wiki-muted"
          />
          <input
            type="search"
            role="combobox"
            aria-expanded={showDropdown}
            aria-controls="search-results"
            aria-label="Przeszukaj TreloPedję"
            placeholder="Przeszukaj TreloPedję"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            className="h-8 w-full rounded-l-sm border border-wiki-border bg-wiki-bg pl-8 pr-2 text-sm text-wiki-text outline-none focus:border-wiki-link"
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="h-8 shrink-0 rounded-r-sm border border-l-0 border-wiki-border bg-wiki-panel px-3 text-sm text-wiki-text hover:bg-wiki-border-light/40"
        >
          Szukaj
        </button>
      </div>

      {showDropdown && (
        <ul
          id="search-results"
          role="listbox"
          className="absolute left-0 right-0 top-9 z-50 overflow-hidden rounded-sm border border-wiki-border bg-wiki-bg shadow-lg"
        >
          {results.length === 0 ? (
            <li className="px-3 py-2 text-sm text-wiki-muted">
              Brak wyników dla „{query}”
            </li>
          ) : (
            results.map((person, index) => (
              <li key={person.slug} role="option" aria-selected={index === activeIndex}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => goTo(person.slug)}
                  className={`flex w-full items-center gap-3 px-3 py-2 text-left ${
                    index === activeIndex ? 'bg-[#eaf3ff]' : 'bg-wiki-bg'
                  }`}
                >
                  <Image
                    src={person.image || '/placeholder-user.jpg'}
                    alt=""
                    width={32}
                    height={40}
                    className="h-10 w-8 shrink-0 border border-wiki-border bg-white object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-wiki-link">
                      {person.name}
                    </span>
                    <span className="block truncate text-[12px] text-wiki-muted">
                      {person.tagline}
                    </span>
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}
