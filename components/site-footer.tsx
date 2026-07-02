import { WikiLink } from './wiki-link'

const footerLinks = [
  'O TreloPedji',
  'Zastrzeżenia',
  'Kontakt',
  'Kodeks postępowania',
  'Polityka prywatności',
  'Warunki korzystania',
  'Wersja mobilna',
]

export function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-wiki-border-light bg-wiki-bg py-6 text-[12px] text-wiki-muted">
      <div className="mx-auto max-w-[1300px] px-4">
        <p className="mb-1">
          Tę stronę ostatnio edytowano dzisiaj, chwilę po tym, jak ktoś sobie
          przypomniał, że Przemek ma urodziny.
        </p>
        <p className="mb-4">
          Tekst napisany z miłością i wątpliwą dokładnością. TreloPedja nie jest
          powiązana z żadną prawdziwą encyklopedią, a jedynym zweryfikowanym tu
          faktem jest to, że Przemek kończy dziś 18 lat.
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1">
          {footerLinks.map((link) => (
            <li
              key={link}
              className="border-r border-wiki-border-light pr-3 last:border-r-0 last:pr-0"
            >
              <WikiLink>{link}</WikiLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
