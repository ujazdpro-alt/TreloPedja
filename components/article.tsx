import { Infobox } from './infobox'
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

export function Article() {
  return (
    <article className="min-w-0 flex-1 font-[family-name:var(--font-wiki-body)] text-[15px] leading-[1.6] text-wiki-text">
      {/* Tytuł */}
      <h1 className="mb-1 font-serif text-[28px] font-normal text-wiki-heading">
        Przemek Trela
      </h1>
      <div className="mb-4 border-b border-wiki-border pb-1 text-[13px] text-wiki-muted">
        Z TreloPedji, wolnej encyklopedii
      </div>

      <Infobox />

      {/* Hatnote */}
      <p className="mb-3 ml-4 text-[13px] italic text-wiki-muted">
        Ten artykuł dotyczy legendarnego kulturysty i gracza. Zobacz też{' '}
        <WikiLink red>Przemek (ujednoznacznienie)</WikiLink>.
      </p>

      {/* Lead */}
      <p className="mb-3">
        <b>Przemek Trela</b> (ur.{' '}
        <WikiLink>7 lipca 2008</WikiLink> w{' '}
        <WikiLink>Ujeździe</WikiLink> w województwie{' '}
        <WikiLink>łódzkim</WikiLink>) – samozwańczy mistrz{' '}
        <WikiLink>kulturystyki</WikiLink>, zawodnik{' '}
        <WikiLink>e-sportowy</WikiLink> niesamowity i jeden z lepszyc przemków
        na świecie, oraz niekwestionowany specjalista od przekonywania znajomych,
        że „następna runda będzie wygrana”. Występuje w
        drużynie <WikiLink red>ujazd.pro</WikiLink>, gdzie według legend pełni
        funkcję głównego strzelca, motywatora i okazjonalnego testera
        cierpliwości swoich kolegów z zespołu.
        <sup className="text-[11px]">
          [<WikiLink href="#references">1</WikiLink>]
        </sup>
      </p>
      <p className="mb-3">
        Znany również jako <i>Przemuś</i>, <i>Zakolak</i>, <i>Kozak</i>,{' '}
        <i>Kulturysta</i> oraz <i>CWL</i> (Cudowny Wyboisty Ludek). Przemek pomimo różnych
        pseudonimów, dalej jest po prostu przemkiem.
        <sup className="text-[11px]">
          [<WikiLink href="#references">2</WikiLink>]
        </sup>
      </p>

      <TableOfContents />

      {/* Sekcje */}
      <SectionHeading id="early-life">Wczesne życie</SectionHeading>
      <p className="mb-3">
        Od najmłodszych lat interesował się sportem, jednak z czasem jego pasja
        rozdzieliła się na dwa kierunki: podnoszenie ciężarów oraz podnoszenie
        rankingu w <WikiLink>Counter-Strike 2</WikiLink>. Twierdzi, że biceps
        rośnie od treningu, a refleks od grania do trzeciej nad ranem.
        <sup className="text-[11px]">
          [<WikiLink href="#references">3</WikiLink>]
        </sup>
      </p>

      <SubHeading id="fryzura">Charakterystyczny wygląd</SubHeading>
      <p className="mb-3">
        Znany jest z charakterystycznej fryzury, której największym rywalem
        pozostaje... <WikiLink red>linia włosów</WikiLink>. Wśród znajomych krążą
        żarty, że jego zakola mają lepszą mapę niż większość graczy CS2, choć sam
        Przemek podchodzi do tego z dużym dystansem i poczuciem humoru. To
        właśnie dzięki temu zyskał jeden ze swoich przydomków –{' '}
        <i>Zakolak</i>.
      </p>

      <SectionHeading id="career">Kariera e-sportowa</SectionHeading>
      <p className="mb-3">
        W środowisku e-sportowym uchodzi za zawodnika, który potrafi jednocześnie
        trafić spektakularnego <WikiLink>headshota</WikiLink> i chwilę później
        rzucić <WikiLink>granat</WikiLink> pod własne nogi. Według
        niepotwierdzonych doniesień jego ulubioną taktyką jest{' '}
        <i>„wejdziemy szybko i zobaczymy, co się stanie”</i>.
        <sup className="text-[11px]">
          [<WikiLink href="#references">4</WikiLink>]
        </sup>
      </p>
      <blockquote className="mb-3 border-l-4 border-wiki-border-light bg-wiki-panel px-4 py-2 italic">
        „Następna runda będzie wygrana” — Przemek, przed każdą kolejną
        przegraną rundą.
      </blockquote>

      <SectionHeading id="kulturystyka">Kulturystyka</SectionHeading>
      <p className="mb-3">
        Poza komputerem większość czasu spędza na{' '}
        <WikiLink>siłowni</WikiLink>, gdzie konsekwentnie przekonuje wszystkich,
        że „to już ostatnia seria”, po czym wykonuje jeszcze cztery. Jego{' '}
        <WikiLink>dieta</WikiLink> składa się głównie z kurczaka, ryżu i{' '}
        <WikiLink>kreatyny</WikiLink>, a największym przeciwnikiem pozostaje{' '}
        <WikiLink red>dzień nóg</WikiLink>.
      </p>

      <SectionHeading id="personal-life">Życie prywatne</SectionHeading>
      <p className="mb-3">
        Mimo licznych żartów i memów na swój temat, Przemek cieszy się opinią
        dobrego kolegi, który zawsze znajdzie czas na wspólną grę, trening lub
        dyskusję o tym, dlaczego tym razem to na pewno nie była jego wina.
      </p>
      <p className="mb-3">
        Jest biegły w języku <WikiLink>polskim</WikiLink>, sarkazmie oraz w
        starożytnej sztuce ignorowania budzika przed treningiem.
      </p>

      <SectionHeading id="przydomki">Przydomki</SectionHeading>
      <p className="mb-3">
        W ciągu lat Przemek dorobił się bogatej kolekcji przydomków, z których
        każdy opowiada osobną historię:
      </p>
      <ul className="mb-3 ml-8 list-disc [&>li]:mb-1">
        <li>
          <b>Przemuś</b> – wersja czuła, używana głównie przez znajomych
        </li>
        <li>
          <b>Zakolak</b> – hołd dla jego legendarnej linii włosów
        </li>
        <li>
          <b>Kozak</b> – za brawurowe wejścia (zarówno na siłowni, jak i na
          bombsite)
        </li>
        <li>
          <b>Kulturysta</b> – tytuł samozwańczy, ale zasłużony
        </li>
        <li>
          <b>CWL</b> – <i>Cudowny Wyboisty Ludek</i>, przydomek owiany tajemnicą
        </li>
      </ul>

      <SectionHeading id="quotes">Znane cytaty</SectionHeading>
      <ul className="mb-3 ml-8 list-disc [&>li]:mb-2">
        <li>„To już ostatnia seria.” (wykonuje jeszcze cztery)</li>
        <li>„Następna runda będzie wygrana.”</li>
        <li>„Wejdziemy szybko i zobaczymy, co się stanie.”</li>
        <li>„To na pewno nie była moja wina.”</li>
        <li>„Biceps rośnie od treningu, a refleks od grania do trzeciej nad ranem.”</li>
      </ul>

      <SectionHeading id="see-also">Zobacz też</SectionHeading>
      <ul className="mb-3 ml-8 list-disc [&>li]:mb-1">
        <li>
          <WikiLink red>ujazd.pro</WikiLink>
        </li>
        <li>
          <WikiLink>Counter-Strike 2</WikiLink>
        </li>
        <li>
          <WikiLink>Kulturystyka</WikiLink>
        </li>
        <li>
          <WikiLink red>Dzień nóg</WikiLink>
        </li>
      </ul>

      <SectionHeading id="references">Przypisy</SectionHeading>
      <ol className="mb-6 ml-8 list-decimal text-[13px] text-wiki-muted [&>li]:mb-1">
        <li id="ref-1">
          <i>„Przemek Trela: portret legendy”</i>. Kurier Drużynowy. Dostęp
          dzisiaj.
        </li>
        <li id="ref-2">
          <i>„18 i niebezpieczny”</i>. Rocznik Wątpliwych Decyzji, tom 18.
        </li>
        <li id="ref-3">
          „Biceps kontra refleks: studium przypadku”. Kwartalnik Siłowniany.
        </li>
        <li id="ref-4">
          „Wejdziemy szybko: analiza taktyczna”. Magazyn ujazd.pro.
        </li>
      </ol>

      <div className="mt-6 border-t border-wiki-border-light pt-3 text-[13px] text-wiki-muted">
        <p>
          <b>Kategorie</b>: <WikiLink>Kulturyści</WikiLink> ·{' '}
          <WikiLink>Zawodnicy e-sportu</WikiLink> ·{' '}
          <WikiLink>Osoby, które kończą dziś 18 lat</WikiLink> ·{' '}
          <WikiLink red>Legendy ujazd.pro</WikiLink> ·{' '}
          <WikiLink>Polscy gracze CS2</WikiLink>
        </p>
      </div>
    </article>
  )
}
