import Image from 'next/image'
import { WikiLink } from './wiki-link'

type Row = {
  label: string
  value: React.ReactNode
}

const rows: Row[] = [
  {
    label: 'Data urodzenia',
    value: '7 lipca 2008',
  },
  {
    label: 'Miejsce urodzenia',
    value: (
      <>
        <WikiLink>Ujazd</WikiLink>, województwo{' '}
        <WikiLink>łódzkie</WikiLink>, <WikiLink>Polska</WikiLink>
      </>
    ),
  },
  { label: 'Narodowość', value: <WikiLink>polska</WikiLink> },
  {
    label: 'Inne imiona',
    value: 'Przemuś, Zakolak, Kozak, Kulturysta, CWL (Cudowny Wyboisty Ludek)',
  },
  {
    label: 'Zawód',
    value: (
      <>
        Samozwańczy mistrz <WikiLink>kulturystyki</WikiLink>, zawodnik{' '}
        <WikiLink>e-sportu</WikiLink>
      </>
    ),
  },
  {
    label: 'Drużyna',
    value: <WikiLink red>ujazd.pro</WikiLink>,
  },
  { label: 'Dyscyplina', value: <WikiLink>Counter-Strike 2</WikiLink> },
  { label: 'Aktywny od', value: '2008–obecnie' },
  {
    label: 'Znany z',
    value: 'Bicepsów, headshotów, zakoli i tekstu „ostatnia seria”',
  },
  { label: 'Największy wróg', value: 'Dzień nóg i linia włosów' },
]

export function Infobox() {
  return (
    <aside
      aria-label="Infobox"
      className="mb-4 w-full border border-wiki-border bg-wiki-panel text-[13px] leading-normal text-wiki-text md:float-right md:ml-6 md:w-[300px]"
    >
      <div className="border-b border-wiki-border bg-[#cedff2] px-2 py-1.5 text-center font-serif text-base font-bold">
        Przemek Trela
      </div>

      <figure className="m-0 border-b border-wiki-border p-2 text-center">
        <Image
          src="/przemek.png"
          alt="Przemek prezentujący biceps w koszulce drużyny e-sportowej"
          width={280}
          height={340}
          className="mx-auto h-auto w-full max-w-[260px] border border-wiki-border bg-white"
          priority
        />
        <figcaption className="mt-1 text-[12px] text-wiki-muted">
          Przemek prezentujący formę w barwach ujazd.pro
        </figcaption>
      </figure>

      <table className="w-full border-collapse">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-wiki-border-light">
              <th
                scope="row"
                className="w-[110px] bg-wiki-panel px-2 py-1.5 text-left align-top font-bold"
              >
                {row.label}
              </th>
              <td className="px-2 py-1.5 align-top">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <figure className="m-0 p-2 text-center">
        <Image
          src="/przemek-birthplace-map.png"
          alt="Mapa przedstawiająca przybliżone miejsce urodzenia Przemka w Polsce"
          width={280}
          height={200}
          className="mx-auto h-auto w-full max-w-[260px] border border-wiki-border"
        />
        <figcaption className="mt-1 text-[12px] text-wiki-muted">
          Ujazd (województwo łódzkie) – przybliżone miejsce, gdzie zaczęła się
          legenda
        </figcaption>
      </figure>
    </aside>
  )
}
