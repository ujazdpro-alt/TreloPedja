import Image from 'next/image'
import type { Person } from '@/lib/people'
import { RichText } from './rich-text'

export function Infobox({ person }: { person: Person }) {
  return (
    <aside
      aria-label="Infobox"
      className="mb-4 w-full border border-wiki-border bg-wiki-panel text-[13px] leading-normal text-wiki-text md:float-right md:ml-6 md:w-[300px]"
    >
      <div className="border-b border-wiki-border bg-[#cedff2] px-2 py-1.5 text-center font-serif text-base font-bold">
        {person.name}
      </div>

      <figure className="m-0 border-b border-wiki-border p-2 text-center">
        <Image
          src={person.image || '/placeholder-user.jpg'}
          alt={`Zdjęcie: ${person.name}`}
          width={280}
          height={340}
          className="mx-auto h-auto w-full max-w-[260px] border border-wiki-border bg-white"
          priority
        />
        <figcaption className="mt-1 text-[12px] text-wiki-muted">
          {person.imageCaption}
        </figcaption>
      </figure>

      <table className="w-full border-collapse">
        <tbody>
          {person.infobox.map((row) => (
            <tr key={row.label} className="border-b border-wiki-border-light">
              <th
                scope="row"
                className="w-[110px] bg-wiki-panel px-2 py-1.5 text-left align-top font-bold"
              >
                {row.label}
              </th>
              <td className="px-2 py-1.5 align-top">
                <RichText>{row.value}</RichText>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  )
}
