import type { ArticleSection } from '@/lib/people'

export function TableOfContents({ sections }: { sections: ArticleSection[] }) {
  if (sections.length === 0) return null

  return (
    <nav
      aria-label="Spis treści"
      className="mb-4 inline-block min-w-[280px] border border-wiki-border-light bg-wiki-panel p-3 text-[13px]"
    >
      <div className="mb-2 text-center font-bold">Spis treści</div>
      <ol className="flex flex-col gap-1">
        {sections.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-wiki-link hover:underline">
              <span className="mr-1 text-wiki-text">{index + 1}</span>
              {item.heading}
            </a>
            {item.subsections && item.subsections.length > 0 && (
              <ol className="ml-5 mt-1 flex flex-col gap-1">
                {item.subsections.map((child, childIndex) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      className="text-wiki-link hover:underline"
                    >
                      <span className="mr-1 text-wiki-text">
                        {index + 1}.{childIndex + 1}
                      </span>
                      {child.heading}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
