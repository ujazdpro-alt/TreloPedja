import Image from 'next/image'
import Link from 'next/link'
import { LeftNav } from '@/components/left-nav'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WikiLink } from '@/components/wiki-link'
import { people } from '@/lib/people'

export default function Page() {
  const featured = people[0]
  const failed = people.filter((person) => person.failed)

  return (
    <div className="min-h-screen bg-wiki-bg text-wiki-text">
      <SiteHeader />
      <div className="mx-auto flex max-w-[1300px] gap-6 px-3 py-4">
        <LeftNav />
        <main className="min-w-0 flex-1 font-[family-name:var(--font-wiki-body)] text-[15px] leading-[1.6]">
          {/* Nagłówek strony głównej */}
          <div className="mb-4 rounded-sm border border-wiki-border bg-wiki-panel px-4 py-3 text-center">
            <h1 className="font-serif text-[28px] font-normal text-wiki-heading">
              Witamy w TreloPedji
            </h1>
            <p className="text-[13px] text-wiki-muted">
              wolnej encyklopedii klasowej, którą każdy może współtworzyć
            </p>
            <p className="mt-1 text-[13px] text-wiki-muted">
              Obecnie liczy sobie{' '}
              <b>
                {people.length}{' '}
                {people.length === 1 ? 'legendę' : 'legend(y)'}
              </b>{' '}
              gotowych do uwiecznienia.
            </p>
          </div>

          {/* Polecany artykuł */}
          <section className="mb-6 border border-wiki-border-light bg-wiki-panel">
            <div className="border-b border-wiki-border-light bg-[#cedff2] px-3 py-1.5 font-serif text-lg font-bold text-wiki-heading">
              Artykuł na medal
            </div>
            <div className="flex flex-col gap-4 p-3 sm:flex-row">
              <Link href={`/${featured.slug}`} className="shrink-0">
                <Image
                  src={featured.image || '/placeholder-user.jpg'}
                  alt={`Zdjęcie: ${featured.name}`}
                  width={140}
                  height={170}
                  className="h-auto w-[140px] border border-wiki-border bg-white"
                />
              </Link>
              <div>
                <h2 className="mb-1 font-serif text-xl font-bold">
                  <WikiLink href={`/${featured.slug}`}>{featured.name}</WikiLink>
                </h2>
                <p className="text-[15px]">
                  {featured.tagline} Kliknij, aby przeczytać pełny, uroczysty
                  życiorys pełen niezaprzeczalnych faktów.
                </p>
              </div>
            </div>
          </section>

          {/* Katalog postaci */}
          <section>
            <h2 className="mb-3 border-b border-wiki-border pb-1 font-serif text-2xl font-normal text-wiki-heading">
              Postacie
            </h2>
            <p className="mb-4 text-[15px]">
              Wybierz osobę, aby przejść do jej artykułu. Każdy wpis to osobna
              strona w stylu encyklopedii — do swobodnej edycji.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {people.map((person) => (
                <li key={person.slug}>
                  <Link
                    href={`/${person.slug}`}
                    className="flex h-full items-start gap-3 border border-wiki-border-light bg-wiki-panel p-3 transition-colors hover:border-wiki-border hover:bg-white"
                  >
                    <Image
                      src={person.image || '/placeholder-user.jpg'}
                      alt=""
                      width={64}
                      height={78}
                      className="h-[78px] w-16 shrink-0 border border-wiki-border bg-white object-cover"
                    />
                    <span className="min-w-0">
                      <span className="block font-serif text-lg text-wiki-link hover:underline">
                        {person.name}
                      </span>
                      <span className="block text-[13px] text-wiki-muted">
                        {person.tagline}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Nie zdali */}
          {failed.length > 0 && (
            <section className="mt-6 border border-wiki-border-light bg-wiki-panel">
              <div className="border-b border-wiki-border-light bg-[#f8e3e3] px-3 py-1.5 font-serif text-lg font-bold text-wiki-heading">
                Nie zdali
              </div>
              <div className="p-3">
                <p className="mb-3 text-[15px]">
                  Osobna galeria sław poświęcona tym, którym nauka jakoś nie po
                  drodze. Kliknij, aby oddać hołd.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {failed.map((person) => (
                    <li key={person.slug}>
                      <Link
                        href={`/${person.slug}`}
                        className="flex h-full items-start gap-3 border border-wiki-border-light bg-white p-3 transition-colors hover:border-wiki-border hover:bg-wiki-panel"
                      >
                        <Image
                          src={person.image || '/placeholder-user.jpg'}
                          alt=""
                          width={64}
                          height={78}
                          className="h-[78px] w-16 shrink-0 border border-wiki-border bg-white object-cover"
                        />
                        <span className="min-w-0">
                          <span className="block font-serif text-lg text-wiki-link hover:underline">
                            {person.name}
                          </span>
                          <span className="block text-[13px] text-wiki-muted">
                            {person.tagline}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
