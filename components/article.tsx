import type { Person } from '@/lib/people'
import { Infobox } from './infobox'
import { RichText } from './rich-text'
import { TableOfContents } from './table-of-contents'
import { WikiLink } from './wiki-link'

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="mb-3 mt-6 scroll-mt-4 border-b border-wiki-border pb-1 font-serif text-2xl font-normal text-wiki-heading"
    >
      {children}
      <span className="ml-2 align-middle text-[13px] font-normal">
        [<WikiLink>edytuj</WikiLink>]
      </span>
    </h2>
  )
}

function SubHeading({ id, children }: { id: string; children: string }) {
  return (
    <h3
      id={id}
      className="mb-2 mt-4 scroll-mt-4 font-serif text-xl font-bold text-wiki-heading"
    >
      {children}
      <span className="ml-2 align-middle text-[13px] font-normal">
        [<WikiLink>edytuj</WikiLink>]
      </span>
    </h3>
  )
}

export function Article({ person }: { person: Person }) {
  return (
    <article className="min-w-0 flex-1 font-[family-name:var(--font-wiki-body)] text-[15px] leading-[1.6] text-wiki-text">
      {/* Tytuł */}
      <h1 className="mb-1 font-serif text-[28px] font-normal text-wiki-heading">
        {person.name}
      </h1>
      <div className="mb-4 border-b border-wiki-border pb-1 text-[13px] text-wiki-muted">
        Z TreloPedji, wolnej encyklopedii
      </div>

      <Infobox person={person} />

      {person.hatnote && (
        <p className="mb-3 ml-4 text-[13px] italic text-wiki-muted">
          <RichText>{person.hatnote}</RichText>
        </p>
      )}

      {/* Lead */}
      {person.lead.map((para, i) => (
        <p key={i} className="mb-3">
          <RichText>{para}</RichText>
        </p>
      ))}

      <TableOfContents sections={person.sections} />

      {/* Sekcje */}
      {person.sections.map((section) => (
        <section key={section.id}>
          <SectionHeading id={section.id}>{section.heading}</SectionHeading>

          {section.paragraphs?.map((para, i) => (
            <p key={i} className="mb-3">
              <RichText>{para}</RichText>
            </p>
          ))}

          {section.quote && (
            <blockquote className="mb-3 border-l-4 border-wiki-border-light bg-wiki-panel px-4 py-2 italic">
              „{section.quote.text}”
              {section.quote.source ? ` — ${section.quote.source}` : ''}
            </blockquote>
          )}

          {section.list && (
            <ul className="mb-3 ml-8 list-disc [&>li]:mb-1">
              {section.list.map((item, i) => (
                <li key={i}>
                  <RichText>{item}</RichText>
                </li>
              ))}
            </ul>
          )}

          {section.subsections?.map((sub) => (
            <div key={sub.id}>
              <SubHeading id={sub.id}>{sub.heading}</SubHeading>
              {sub.paragraphs.map((para, i) => (
                <p key={i} className="mb-3">
                  <RichText>{para}</RichText>
                </p>
              ))}
            </div>
          ))}
        </section>
      ))}

      {person.categories.length > 0 && (
        <div className="mt-6 border-t border-wiki-border-light pt-3 text-[13px] text-wiki-muted">
          <p>
            <b>Kategorie</b>:{' '}
            {person.categories.map((cat, i) => (
              <span key={i}>
                {i > 0 && ' · '}
                <RichText>{cat}</RichText>
              </span>
            ))}
          </p>
        </div>
      )}
    </article>
  )
}
