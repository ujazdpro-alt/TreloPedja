const leftTabs = ['Artykuł', 'Dyskusja']
const rightTabs = ['Czytaj', 'Edytuj', 'Historia', 'Narzędzia']

export function ArticleTabs() {
  return (
    <div className="mb-3 flex flex-wrap items-end justify-between gap-2 border-b border-wiki-border text-[13px]">
      <ul className="flex">
        {leftTabs.map((tab, index) => (
          <li key={tab}>
            <a
              href="#"
              className={
                index === 0
                  ? 'inline-block border border-b-0 border-wiki-border bg-wiki-bg px-3 py-1.5 text-wiki-text'
                  : 'inline-block border border-b-0 border-wiki-border bg-wiki-panel px-3 py-1.5 text-wiki-link hover:underline'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex">
        {rightTabs.map((tab, index) => (
          <li key={tab}>
            <a
              href="#"
              className={
                index === 0
                  ? 'inline-block border border-b-0 border-wiki-border bg-wiki-bg px-3 py-1.5 text-wiki-text'
                  : 'inline-block border border-b-0 border-wiki-border bg-wiki-panel px-3 py-1.5 text-wiki-link hover:underline'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
