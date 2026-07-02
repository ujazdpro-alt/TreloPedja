export type InfoboxRow = {
  label: string
  value: string
}

export type ArticleSection = {
  id: string
  heading: string
  /** Optional sub-sections rendered as h3 headings. */
  subsections?: { id: string; heading: string; paragraphs: string[] }[]
  paragraphs?: string[]
  /** Optional bullet list rendered under the paragraphs. */
  list?: string[]
  /** Optional highlighted quote block. */
  quote?: { text: string; source?: string }
}

export type Person = {
  slug: string
  name: string
  /** One line shown on the home page card. */
  tagline: string
  /** Photo used in the infobox. Falls back to a placeholder if empty. */
  image: string
  imageCaption: string
  /** The italic hatnote under the title. Optional. */
  hatnote?: string
  /** Set to true to list this person in the "Nie zdali" section on the home page. */
  failed?: boolean
  infobox: InfoboxRow[]
  /** Lead paragraphs shown before the table of contents. */
  lead: string[]
  sections: ArticleSection[]
  categories: string[]
}

/**
 * How to edit:
 * - Every person below is one entry in this array.
 * - Text supports simple wiki links: wrap words in [[double brackets]] to make
 *   them look like blue Wikipedia links, e.g. "gra w [[Counter-Strike 2]]".
 * - Use [[!red link]] (an exclamation mark right after the brackets) for the
 *   red "page does not exist yet" style.
 * - Change any text freely — the layout updates automatically.
 */
export const people: Person[] = [
  {
    slug: 'przemek-trela',
    name: 'Przemek Trela',
    tagline:
      'Samozwańczy mistrz kulturystyki i zawodnik e-sportowy drużyny ujazd.pro.',
    image: '/przemek.png',
    imageCaption: 'Przemek prezentujący formę w barwach ujazd.pro',
    hatnote:
      'Ten artykuł dotyczy legendarnego kulturysty i gracza. Zobacz też [[!Przemek (ujednoznacznienie)]].',
    infobox: [
      { label: 'Data urodzenia', value: '7 lipca 2008' },
      {
        label: 'Miejsce urodzenia',
        value: '[[Ujazd]], województwo [[łódzkie]], [[Polska]]',
      },
      { label: 'Narodowość', value: '[[polska]]' },
      {
        label: 'Inne imiona',
        value: 'Przemuś, Zakolak, Kozak, Kulturysta, CWL (Cudowny Wyboisty Ludek)',
      },
      {
        label: 'Zawód',
        value: 'Samozwańczy mistrz [[kulturystyki]], zawodnik [[e-sportu]]',
      },
      { label: 'Drużyna', value: '[[!ujazd.pro]]' },
      { label: 'Dyscyplina', value: '[[Counter-Strike 2]]' },
      { label: 'Aktywny od', value: '2008–obecnie' },
      {
        label: 'Znany z',
        value: 'Bicepsów, headshotów, zakoli i tekstu „ostatnia seria”',
      },
      { label: 'Największy wróg', value: 'Dzień nóg i linia włosów' },
    ],
    lead: [
      '**Przemek Trela** (ur. [[7 lipca 2008]] w [[Ujeździe]] w województwie [[łódzkim]]) – samozwańczy mistrz [[kulturystyki]], zawodnik [[e-sportowy]] oraz niekwestionowany specjalista od przekonywania znajomych, że „następna runda będzie wygrana”. Występuje w drużynie [[!ujazd.pro]], gdzie według legend pełni funkcję głównego strzelca, motywatora i okazjonalnego testera cierpliwości swoich kolegów z zespołu.',
      'Znany również jako *Przemuś*, *Zakolak*, *Kozak*, *Kulturysta* oraz *CWL* (Cudowny Wyboisty Ludek). Według uczonych stanowi niebezpieczną ilość mocy jak na jednego człowieka.',
    ],
    sections: [
      {
        id: 'early-life',
        heading: 'Wczesne życie',
        paragraphs: [
          'Od najmłodszych lat interesował się sportem, jednak z czasem jego pasja rozdzieliła się na dwa kierunki: podnoszenie ciężarów oraz podnoszenie rankingu w [[Counter-Strike 2]]. Twierdzi, że biceps rośnie od treningu, a refleks od grania do trzeciej nad ranem.',
        ],
        subsections: [
          {
            id: 'fryzura',
            heading: 'Charakterystyczny wygląd',
            paragraphs: [
              'Znany jest z charakterystycznej fryzury, której największym rywalem pozostaje... [[!linia włosów]]. Wśród znajomych krążą żarty, że jego zakola mają lepszą mapę niż większość graczy CS2, choć sam Przemek podchodzi do tego z dużym dystansem i poczuciem humoru.',
            ],
          },
        ],
      },
      {
        id: 'career',
        heading: 'Kariera e-sportowa',
        paragraphs: [
          'W środowisku e-sportowym uchodzi za zawodnika, który potrafi jednocześnie trafić spektakularnego [[headshota]] i chwilę później rzucić [[granat]] pod własne nogi. Według niepotwierdzonych doniesień jego ulubioną taktyką jest „wejdziemy szybko i zobaczymy, co się stanie”.',
        ],
        quote: {
          text: 'Następna runda będzie wygrana',
          source: 'Przemek, przed każdą kolejną przegraną rundą',
        },
      },
      {
        id: 'kulturystyka',
        heading: 'Kulturystyka',
        paragraphs: [
          'Poza komputerem większość czasu spędza na [[siłowni]], gdzie konsekwentnie przekonuje wszystkich, że „to już ostatnia seria”, po czym wykonuje jeszcze cztery. Jego [[dieta]] składa się głównie z kurczaka, ryżu i [[kreatyny]], a największym przeciwnikiem pozostaje [[!dzień nóg]].',
        ],
      },
      {
        id: 'przydomki',
        heading: 'Przydomki',
        paragraphs: [
          'W ciągu lat Przemek dorobił się bogatej kolekcji przydomków, z których każdy opowiada osobną historię:',
        ],
        list: [
          '**Przemuś** – wersja czuła, używana głównie przez znajomych',
          '**Zakolak** – hołd dla jego legendarnej linii włosów',
          '**Kozak** – za brawurowe wejścia (zarówno na siłowni, jak i na bombsite)',
          '**Kulturysta** – tytuł samozwańczy, ale zasłużony',
          '**CWL** – *Cudowny Wyboisty Ludek*, przydomek owiany tajemnicą',
        ],
      },
      {
        id: 'quotes',
        heading: 'Znane cytaty',
        list: [
          '„To już ostatnia seria.” (wykonuje jeszcze cztery)',
          '„Następna runda będzie wygrana.”',
          '„Wejdziemy szybko i zobaczymy, co się stanie.”',
          '„To na pewno nie była moja wina.”',
        ],
      },
    ],
    categories: [
      '[[Kulturyści]]',
      '[[Zawodnicy e-sportu]]',
      '[[!Legendy ujazd.pro]]',
      '[[Polscy gracze CS2]]',
    ],
  },
  {
    slug: 'antek-lipinski',
    name: 'Antek Lipiński',
    tagline: 'Klasowy strateg, mistrz ciętej riposty i wiecznego „zaraz przyjdę”.',
    image: '/antek-lipinski.png',
    imageCaption: 'Antek w swoim naturalnym środowisku – ostatnia ławka',
    infobox: [
      { label: 'Data urodzenia', value: '(uzupełnij)' },
      { label: 'Miejsce urodzenia', value: '[[Polska]]' },
      { label: 'Narodowość', value: '[[polska]]' },
      { label: 'Inne imiona', value: 'Antoś, Lipa' },
      { label: 'Znany z', value: 'Ciętego humoru i legendarnych wymówek' },
      { label: 'Ulubione powiedzenie', value: '„Zaraz przyjdę”' },
    ],
    lead: [
      '**Antek Lipiński** (znany też jako *Antoś* lub *Lipa*) – jeden z filarów klasy, człowiek, którego riposty krążą po korytarzach szybciej niż plotki. Słynie z niezachwianego spokoju oraz umiejętności znikania dokładnie wtedy, gdy trzeba coś zrobić.',
      'Według relacji świadków potrafi rozbawić całą salę jednym zdaniem, po czym udawać, że nic się nie stało.',
    ],
    sections: [
      {
        id: 'early-life',
        heading: 'Wczesne życie',
        paragraphs: [
          'Od najmłodszych lat wykazywał talent do znajdowania najwygodniejszego miejsca w każdej sali. (Tu dopisz prawdziwą historię — ta sekcja jest do edycji.)',
        ],
      },
      {
        id: 'legenda',
        heading: 'Klasowa legenda',
        paragraphs: [
          'W klasie znany z niezliczonych momentów, które przeszły do historii. [[!Anegdoty]] o Antku są przekazywane z ławki do ławki.',
        ],
        quote: {
          text: 'Zaraz przyjdę',
          source: 'Antek, na pięć minut przed końcem lekcji',
        },
      },
      {
        id: 'zainteresowania',
        heading: 'Zainteresowania',
        paragraphs: [
          'Poza szkołą interesuje się (uzupełnij). Jego pasje obejmują między innymi [[!wolny czas]] i sztukę unikania [[!pracy domowej]].',
        ],
      },
    ],
    categories: ['[[Klasa]]', '[[!Legendy szkolne]]'],
  },
  {
    slug: 'gniewomir-nowak',
    name: 'Gniewomir Nowak',
    tagline: 'Właściciel najbardziej epickiego imienia w całej klasie.',
    image: '/gniewomir-nowak.png',
    imageCaption: 'Gniewomir – imię zobowiązuje',
    infobox: [
      { label: 'Data urodzenia', value: '(uzupełnij)' },
      { label: 'Miejsce urodzenia', value: '[[Polska]]' },
      { label: 'Narodowość', value: '[[polska]]' },
      { label: 'Inne imiona', value: 'Gniewko, Gniewuś' },
      { label: 'Znany z', value: 'Legendarnego imienia i spokojnej natury' },
    ],
    lead: [
      '**Gniewomir Nowak** (znany też jako *Gniewko*) – posiadacz jednego z najbardziej zapadających w pamięć imion w historii klasy. Wbrew temu, co sugeruje imię, słynie z opanowania i pogody ducha.',
      'Jego imię regularnie wywołuje uśmiech na twarzy każdego nowego nauczyciela sprawdzającego listę obecności.',
    ],
    sections: [
      {
        id: 'imie',
        heading: 'Sprawa imienia',
        paragraphs: [
          'Imię „Gniewomir” pochodzi ze staropolszczyzny i oznacza kogoś, kto niesie [[!gniew]] i [[!pokój]] jednocześnie. Sam Gniewomir traktuje to z klasą. (Uzupełnij prawdziwą historię.)',
        ],
      },
      {
        id: 'charakter',
        heading: 'Charakter',
        paragraphs: [
          'Mimo groźnie brzmiącego imienia uchodzi za jednego z najspokojniejszych ludzi w klasie. (Tu dopisz szczegóły.)',
        ],
      },
    ],
    categories: ['[[Klasa]]', '[[!Epickie imiona]]'],
  },
  {
    slug: 'michal-hajzer',
    name: 'Michał Hajzer',
    tagline: 'Klasowa dusza towarzystwa z niewyczerpanym zapasem energii.',
    image: '/michal-hajzer.png',
    imageCaption: 'Michał w akcji – zawsze w centrum wydarzeń',
    infobox: [
      { label: 'Data urodzenia', value: '(uzupełnij)' },
      { label: 'Miejsce urodzenia', value: '[[Polska]]' },
      { label: 'Narodowość', value: '[[polska]]' },
      { label: 'Inne imiona', value: 'Michu, Hajzer' },
      { label: 'Znany z', value: 'Energii i pozytywnego nastawienia' },
    ],
    lead: [
      '**Michał Hajzer** (znany też jako *Michu*) – klasowa dusza towarzystwa, człowiek, wokół którego zawsze coś się dzieje. Słynie z niewyczerpanego zapasu energii i umiejętności rozkręcenia każdej przerwy.',
      'Gdziekolwiek się pojawia, robi się głośniej i weselej.',
    ],
    sections: [
      {
        id: 'early-life',
        heading: 'Wczesne życie',
        paragraphs: [
          'Od dziecka pełen energii i pomysłów. (Uzupełnij prawdziwą historię — ta sekcja jest do edycji.)',
        ],
      },
      {
        id: 'osiagniecia',
        heading: 'Osiągnięcia',
        paragraphs: [
          'Wśród najważniejszych dokonań wymienia się [[!niezliczone żarty]] oraz umiejętność poprawiania humoru całej klasie.',
        ],
      },
    ],
    categories: ['[[Klasa]]', '[[!Dusze towarzystwa]]'],
  },
  {
    slug: 'mateusz-figlewicz',
    name: 'Mateusz Figlewicz',
    tagline:
      'Legendarny nieobecny — człowiek widmo, który zarabiał „stuwencje” zamiast chodzić do szkoły.',
    image: '/mateusz-figlewicz.png',
    imageCaption:
      'Jedno z niewielu potwierdzonych zdjęć Mateusza w budynku szkoły',
    failed: true,
    hatnote:
      'Ten artykuł jest hołdem dla klasowej legendy. Wszystkie „fakty” należy traktować z ogromnym przymrużeniem oka. Zobacz też [[!Nieobecność (rekord)]].',
    infobox: [
      { label: 'Data urodzenia', value: '(uzupełnij)' },
      { label: 'Miejsce urodzenia', value: '[[Polska]]' },
      { label: 'Narodowość', value: '[[polska]]' },
      { label: 'Inne imiona', value: 'Mati, Figiel, Człowiek Widmo, Stuwencjarz' },
      {
        label: 'Status',
        value: 'Nie zdał (rekordowa liczba nieobecności)',
      },
      {
        label: 'Zawód',
        value: 'Etatowiec [[!pracy dorywczej]] w godzinach lekcyjnych',
      },
      { label: 'Zarobki', value: 'Legendarne „stuwencje”' },
      {
        label: 'Znany z',
        value: 'Ciągłego „zaraz będę”, znikania i nieoddawania pieniędzy',
      },
      { label: 'Frekwencja', value: 'Teoretyczna' },
    ],
    lead: [
      '**Mateusz Figlewicz** (znany też jako *Mati*, *Figiel*, a przede wszystkim *Człowiek Widmo*) – klasowa legenda i najbardziej tajemnicza postać w historii szkoły. Słynny z tego, że codziennie zapowiadał swoją obecność, po czym konsekwentnie się nie pojawiał, budując wokół siebie kult godny [[!Wielkiej Stopy]].',
      'Jego istnienie w szkole potwierdzają głównie relacje świadków oraz nieliczne, rozmazane fotografie. Naukowcy do dziś spierają się, czy Mateusz kiedykolwiek naprawdę wszedł na lekcję, czy tylko *twierdził*, że wszedł.',
    ],
    sections: [
      {
        id: 'legenda-nieobecnosci',
        heading: 'Legenda nieobecności',
        paragraphs: [
          'Każdego ranka Mateusz z pełnym przekonaniem deklarował: „Będę dzisiaj w szkole”. Deklaracja ta stała się w klasie jednostką miary optymizmu — im ktoś bardziej wierzył w przyjście Matiego, tym większym był marzycielem. Mimo setek zapowiedzi liczba faktycznych pojawień pozostaje [[!wartością ujemną]].',
        ],
        quote: {
          text: 'Spokojnie, będę na drugiej lekcji.',
          source: 'Mateusz, każdego dnia, na żadnej lekcji',
        },
      },
      {
        id: 'juz-przyszedlem',
        heading: 'Fenomen „już przyszedłem”',
        paragraphs: [
          'Absolutnym majstersztykiem w wykonaniu Mateusza była technika ogłaszania przybycia dokładnie na pięć minut przed dzwonkiem kończącym lekcje. Wpadał wtedy z triumfalnym „No jestem, przyszedłem!”, jak gdyby cały dzień spędził w ławce. Zjawisko to weszło do klasowego kanonu jako [[!paradoks Figlewicza]] — obecność zadeklarowana dokładnie wtedy, gdy przestaje mieć znaczenie.',
        ],
        list: [
          'Etap 1: poranna zapowiedź „będę”',
          'Etap 2: cisza radiowa przez całe lekcje',
          'Etap 3: wejście na finiszu z okrzykiem „już przyszedłem”',
          'Etap 4: natychmiastowe zniknięcie',
        ],
      },
      {
        id: 'stuwencje',
        heading: 'Kariera zawodowa i „stuwencje”',
        paragraphs: [
          'Zamiast marnować czas na [[!edukację]], Mateusz obrał drogę przedsiębiorcy. W godzinach lekcyjnych sumiennie stawiał się w [[!pracy]], gdzie — jak sam twierdził — zarabiał legendarne **„stuwencje”**. Do dziś nikt nie ustalił oficjalnego kursu stuwencji względem złotówki, wiadomo jednak, że Mati zawsze miał ich „w tym tygodniu akurat mało”.',
        ],
        quote: {
          text: 'Nie mam teraz, dostałem stuwencje dopiero w piątek.',
          source: 'Mateusz, unikając tematu długów',
        },
      },
      {
        id: 'dlugi',
        heading: 'Kwestia niezwróconych pożyczek',
        paragraphs: [
          'Mimo imponujących zarobków w stuwencjach, Mateusz zapisał się w pamięci klasy jako człowiek, który pożyczał chętnie, a oddawał [[!nigdy]]. Zwrot pieniędzy od Matiego stał się miejskim mitem — podobnie jak jednorożec czy terminowe oddanie [[!pracy domowej]].',
        ],
        list: [
          '„Oddam jutro” — nie oddał',
          '„Mam u kogoś, zaraz odbiorę” — nie odebrał',
          '„Przelewem ci wyślę” — konto do dziś nieznane',
        ],
      },
      {
        id: 'zapach',
        heading: 'Aura i wyczuwalna obecność',
        paragraphs: [
          'Ciekawostką jest, że choć Mateusza rzadko było *widać*, to często dawał o sobie znać na inne sposoby. Koledzy z przymrużeniem oka twierdzą, że jego obecność potrafiła być... wyczuwalna z daleka, na długo zanim wszedł do sali. Naukowcy nazywają to zjawisko [[!efektem Figlewicza]] — rzadkim przypadkiem, gdy legenda dociera na miejsce szybciej niż jej właściciel.',
        ],
      },
      {
        id: 'dziedzictwo',
        heading: 'Dziedzictwo',
        paragraphs: [
          'Mimo wszystkich żartów Mateusz pozostaje jedną z najbardziej lubianych postaci klasy. Ten artykuł to hołd, który — mamy nadzieję — rozbawi go do łez. Bo klasa bez Matiego i jego „stuwencji” po prostu nie byłaby tą samą klasą.',
        ],
      },
    ],
    categories: [
      '[[Klasa]]',
      '[[!Nie zdali]]',
      '[[!Legendy nieobecności]]',
      '[[!Posiadacze stuwencji]]',
    ],
  },
]

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug)
}
