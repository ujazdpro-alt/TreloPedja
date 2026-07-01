type TocItem = {
  id: string
  label: string
  children?: { id: string; label: string }[]
}

const items: TocItem[] = [
  {
    id: 'early-life',
    label: 'Wczesne życie',
    children: [{ id: 'fryzura', label: 'Charakterystyczny wygląd' }],
  },
  { id: 'career', label: 'Kariera e-sportowa' },
  { id: 'kulturystyka', label: 'Kulturystyka' },
  { id: 'personal-life', label: 'Życie prywatne' },
  { id: 'przydomki', label: 'Przydomki' },
  { id: 'quotes', label: 'Znane cytaty' },
  { id: 'see-also', label: 'Zobacz też' },
  { id: 'references', label: 'Przypisy' },
]

export function TableOfContents() {
  return (
    <nav
      aria-label="Spis treści"
      className="mb-4 inline-block min-w-[280px] border border-wiki-border-light bg-wiki-panel p-3 text-[13px]"
    >
      <div className="mb-2 text-center font-bold">Spis treści</div>
      <ol className="flex flex-col gap-1 [counter-reset:section]">
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-wiki-link hover:underline">
              <span className="mr-1 text-wiki-text">{index + 1}</span>
              {item.label}
            </a>
            {item.children && (
              <ol className="ml-5 mt-1 flex flex-col gap-1">
                {item.children.map((child, childIndex) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      className="text-wiki-link hover:underline"
                    >
                      <span className="mr-1 text-wiki-text">
                        {index + 1}.{childIndex + 1}
                      </span>
                      {child.label}
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
