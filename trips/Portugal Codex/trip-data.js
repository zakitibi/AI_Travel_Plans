const tripData = {
  title: "🗺 🇵🇹 Portugália Útiterv – 2026. április 3–10.",
  subtitle: "8 nap · Lisszabon · Sintra · Óbidos · Nazaré · Coimbra · Pinhão · Douro · Porto",
  updatedAt: "2026.04.02",
  route: [
    { label: "BUD", cls: "flight" },
    { separator: "→✈→" },
    { label: "Lisszabon", cls: "lisbon" },
    { separator: "→🚆→" },
    { label: "Sintra", cls: "sintra" },
    { separator: "→🚗→" },
    { label: "Óbidos", cls: "sintra" },
    { separator: "→🚗→" },
    { label: "Nazaré", cls: "sintra" },
    { separator: "→🚗→" },
    { label: "Coimbra", cls: "sintra" },
    { separator: "→🚗→" },
    { label: "Pinhão", cls: "douro" },
    { separator: "→🚗→" },
    { label: "Porto", cls: "porto" },
    { separator: "→✈→" },
    { label: "BUD", cls: "flight" }
  ],
  flights: [
    {
      title: "✈ Ryanair · K8UZMB",
      body: "BUD → LIS · Ápr. 3 (este)",
      links: [
        { label: "FlightStats", url: "https://www.flightstats.com/v2/flight-tracker/FR/" },
        { label: "Trip.com", url: "https://www.trip.com/flights/" }
      ]
    },
    {
      title: "✈ Wizz Air W6 · YPJP7Q",
      body: "LIS → BUD · Ápr. 10 · ~08:30 indulás",
      links: [
        { label: "FlightStats", url: "https://www.flightstats.com/v2/flight-tracker/W6/" },
        { label: "Trip.com", url: "https://www.trip.com/flights/" }
      ]
    }
  ],
  overview: {
    urgent: [
      "Jerónimos és Pena jegy előre, időpontra.",
      "Autóbérlés csak április 7 reggeltől kell.",
      "Pinhão szállás és egy douro-i borászat foglalása időben.",
      "DOP és MUU vacsora foglalás Porto napokra."
    ],
    notes: [
      "Április 6 teljes puffernap Lisszabonban, ezért kevésbé feszes az út eleje.",
      "Április 7 a hosszú autós nap, itt Coimbra-t fókuszáltan kell kezelni.",
      "Április 8 optimalizált: rövid Douro reggel, Porto délután és este.",
      "A visszaút jelenlegi repülési logikája továbbra is feszített, ezt külön érdemes még validálni."
    ]
  },
  days: [
    {
      id: "d1",
      tabLabel: "Ápr. 3 · Indulás",
      dayLabel: "1. nap",
      dateLabel: "2026. április 3., péntek",
      title: "✈ Indulás – Budapest → Lisszabon",
      subtitle: "Késő esti érkezés, csak transzfer és pihenés.",
      stay: "Lisszabon szállás (4 éj)",
      note: "LIS reptérről éjjel is működik taxi, Uber és Bolt. Nem érdemes erre az estére semmit tervezni.",
      bullets: [
        "Ryanair · PNR: K8UZMB",
        "Érkezés ~23:15 Lisszabon",
        "Taxi/Uber a belvárosba ~20 perc"
      ],
      schedule: [
        { time: "este", title: "✈ Ryanair BUD → LIS", detail: "Kb. 4 órás repülés." },
        { time: "~23:15", title: "🛬 Megérkezés Lisszabonba", detail: "Csomagfelvétel és kijutás a reptérről." },
        { time: "23:30", title: "🚕 Transzfer a szállásra", detail: "Taxi vagy Uber, rövid út a belvárosba." },
        { time: "00:00", title: "🛏 Bejelentkezés és alvás", detail: "Másnap már teljes lisszaboni nap indul." }
      ]
    },
    {
      id: "d2",
      tabLabel: "Ápr. 4 · Lisszabon",
      dayLabel: "2. nap",
      dateLabel: "2026. április 4., szombat",
      title: "🏛 Lisszabon – Belém + Alfama + Baixa",
      subtitle: "A klasszikus első teljes lisszaboni nap.",
      stay: "Lisszabon",
      note: "Belém és Alfama együtt is működik, de a Jerónimos jegyet tényleg időpontra vedd meg előre.",
      bullets: [
        "Pastéis de Belém reggel",
        "Jerónimos + Belém-torony",
        "Alfama és Baixa gyalog"
      ],
      schedule: [
        { time: "09:00", title: "☕ Pastéis de Belém", detail: "Ikonikus pastel de nata, reggel a legrövidebb a sor." },
        { time: "09:30", title: "🏛 Jerónimos kolostor", detail: "UNESCO látnivaló, online jegy kötelezően ajánlott." },
        { time: "11:00", title: "🗼 Belém-torony", detail: "Folyóparti séta és rövid fotóblokk." },
        { time: "13:00", title: "🍽 Ebéd: Solar dos Presuntos", detail: "Klasszikus portugál húsos hely a belvárosban." },
        { time: "15:00", title: "🏘 Alfama negyed", detail: "São Jorge vár környéke és kilátók." },
        { time: "17:30", title: "🚶 Baixa–Chiado séta", detail: "Praça do Comércio és Rua Augusta." },
        { time: "20:00", title: "🍽 Vacsora: Taberna Sal Grosso", detail: "Autentikus alfamai vacsora, foglalással." }
      ]
    },
    {
      id: "d3",
      tabLabel: "Ápr. 5 · Sintra",
      dayLabel: "3. nap",
      dateLabel: "2026. április 5., vasárnap",
      title: "🏰 Sintra nap – Pena + Regaleira",
      subtitle: "Erős, de jól működő egynapos Sintra-kör.",
      stay: "Lisszabon",
      note: "Vasárnap Sintra zsúfolt, ezért a korai indulás itt tényleg számít.",
      bullets: [
        "Rossio → Sintra vonat",
        "Pena kastély korai idősáv",
        "Regaleira + Cabo da Roca opció"
      ],
      schedule: [
        { time: "08:00", title: "🚆 Rossio → Sintra", detail: "Kb. 40 perc vonat, reggeli indulással." },
        { time: "09:30", title: "🏰 Palácio Nacional da Pena", detail: "A nap legfontosabb pontja, online időponttal." },
        { time: "12:00", title: "🌳 Quinta da Regaleira", detail: "Iniciatikus kút és kert." },
        { time: "13:30", title: "🍽 Ebéd Sintra központban", detail: "Rövid, könnyű ebéd." },
        { time: "15:00", title: "🌊 Cabo da Roca opció", detail: "Ha a tempó bírja, beleférhet." },
        { time: "17:30", title: "🚆 Vissza Lisszabonba", detail: "Este már pihenős lezárás." }
      ]
    },
    {
      id: "d4",
      tabLabel: "Ápr. 6 · Lisszabon",
      dayLabel: "4. nap",
      dateLabel: "2026. április 6., hétfő",
      title: "☀️ Lisszabon – extra, laza városi nap",
      subtitle: "Teljes puffernap indulás előtt, kimaradt pontoknak és nyugodtabb ritmusnak.",
      stay: "Lisszabon",
      note: "Ez a szerkezetileg legjobb változtatás az egész útban: megszűnik a túlfeszített április 6.",
      bullets: [
        "LX Factory vagy nyugodt parkos reggel",
        "Bica, Bairro Alto, Time Out Market opció",
        "Pakolás és autós nap előkészítése"
      ],
      schedule: [
        { time: "09:30", title: "🌿 LX Factory vagy Jardim da Estrela", detail: "Laza reggel, kávéval." },
        { time: "11:30", title: "🚶 Bica + kilátóblokk", detail: "Miradouro São Pedro de Alcântara környéke." },
        { time: "13:00", title: "🍽 Ebéd Chiado / Bairro Alto környékén", detail: "Nyugodt, nem túlvállalt ebéd." },
        { time: "15:00", title: "🛍 Szabad blokk", detail: "Time Out Market, vásárlás vagy pihenés." },
        { time: "17:30", title: "🧳 Pakolás + autós nap előkészítése", detail: "Bérlés, útvonal, parkolás, jegyek." },
        { time: "20:00", title: "🍽 Korai vacsora Lisszabonban", detail: "Másnap hosszú északi autóút jön." }
      ]
    },
    {
      id: "d5",
      tabLabel: "Ápr. 7 · Óbidos–Nazaré–Coimbra",
      dayLabel: "5. nap",
      dateLabel: "2026. április 7., kedd",
      title: "🚗 Autóút: Lisszabon → Óbidos → Nazaré → Coimbra → Pinhão",
      subtitle: "A hosszú nap átköltözött ide, ettől lett kezelhetőbb az itinerary.",
      stay: "Pinhão szállás (1 éj)",
      note: "Coimbrában fókuszáltan kell maradni: egy fő látnivaló és egy gyors ebéd a jó stratégia.",
      bullets: [
        "Autófelvétel csak ma reggel",
        "Óbidos és Nazaré rövid megállók",
        "Coimbra rövidítve, este Pinhão"
      ],
      schedule: [
        { time: "08:00", title: "🚗 Autó átvétele Lisszabonban", detail: "Indulás észak felé az A8-on." },
        { time: "09:00", title: "🏰 Óbidos", detail: "45–60 perces középkori városblokk." },
        { time: "10:15", title: "🚗 Óbidos → Nazaré", detail: "Kb. 45 perc." },
        { time: "11:00", title: "🌊 Nazaré", detail: "Sítio kilátó és rövid óceánparti megálló." },
        { time: "12:15", title: "🚗 Nazaré → Coimbra", detail: "Kb. 1.5 óra." },
        { time: "14:00", title: "🍽 Ebéd Coimbrában", detail: "Zé Manel dos Ossos vagy gyors központi opció." },
        { time: "15:00", title: "🏛 Universidade de Coimbra", detail: "Joanina Könyvtár, ha van jó időslot." },
        { time: "17:00", title: "🚗 Coimbra → Pinhão", detail: "Kb. 2 óra, estére érkezés." },
        { time: "19:15", title: "🏨 Check-in Pinhãóban", detail: "Vacsora és pihenés a Douro-völgyben." }
      ]
    },
    {
      id: "d6",
      tabLabel: "Ápr. 8 · Douro–Porto",
      dayLabel: "6. nap",
      dateLabel: "2026. április 8., szerda",
      title: "🍷 Douro reggel + Porto délután és este",
      subtitle: "A korábbi két napból összerántott, de még reális nap.",
      stay: "Porto szállás (2 éj)",
      note: "Itt az optimalizálás lényege az, hogy csak egy borászat férjen bele, különben Porto este szétesik.",
      bullets: [
        "Casal de Loivos reggel",
        "Egyetlen borászat vagy rövid kóstoló",
        "Portóban Ribeira + híd + Serra do Pilar"
      ],
      schedule: [
        { time: "09:00", title: "🌅 Casal de Loivos kilátó", detail: "Rövid reggeli panoráma." },
        { time: "10:00", title: "🍷 Egy borászat", detail: "Quinta do Crasto vagy hasonló, rövid verzióban." },
        { time: "12:00", title: "🍽 Könnyű ebéd Peso da Réguában", detail: "Gyors ebéd indulás előtt." },
        { time: "13:00", title: "🚗 N222 + A4 Porto felé", detail: "1-2 rövid fotómegálló belefér." },
        { time: "15:30", title: "🏨 Porto check-in + autóleadás", detail: "Hotelbe érkezés és váltás gyalogos tempóra." },
        { time: "17:00", title: "🌉 Ribeira + D. Luís I híd + Serra do Pilar", detail: "A legerősebb késő délutáni Porto-blokk." },
        { time: "20:00", title: "🍽 Vacsora: DOP", detail: "Rui Paula étterme, foglalással." }
      ]
    },
    {
      id: "d7",
      tabLabel: "Ápr. 9 · Porto",
      dayLabel: "7. nap",
      dateLabel: "2026. április 9., csütörtök",
      title: "📚 Porto – teljes belvárosi nap",
      subtitle: "A korábbi laza Porto-nap most tisztább, fókuszált nap lett.",
      stay: "Porto",
      note: "A városi Porto-látványosságok így már nem szorulnak be a Douro-nap végére.",
      bullets: [
        "Livraria Lello",
        "Clérigos + Bolhão",
        "Majestic + MUU búcsúvacsora"
      ],
      schedule: [
        { time: "10:00", title: "📚 Livraria Lello", detail: "Időpontos jeggyel érdemes menni." },
        { time: "11:30", title: "🍽 Brunch / ebéd: Conga", detail: "Bifana, klasszikus porto-i szendvics." },
        { time: "13:00", title: "🏛 Clérigos torony", detail: "Panoráma és rövid belvárosi séta." },
        { time: "14:30", title: "🛒 Bolhão piac", detail: "Felújított piaci blokk." },
        { time: "16:00", title: "☕ Café Majestic", detail: "Kávé és pihenő." },
        { time: "19:30", title: "🍽 Búcsúvacsora: MUU Steakhouse", detail: "Foglalás javasolt." }
      ]
    },
    {
      id: "d8",
      tabLabel: "Ápr. 10 · Visszaút",
      dayLabel: "8. nap",
      dateLabel: "2026. április 10., péntek",
      title: "✈ Visszaút: Porto → Lisszabon reptér → Budapest",
      subtitle: "Jelenleg ez a terv legfeszítettebb része.",
      stay: "Hazautazás",
      note: "A nap logikája továbbra is szoros, főleg ha a repülés valóban kora reggeli. Ezt külön érdemes még egyszer ellenőrizni.",
      bullets: [
        "Porto → LIS autóval",
        "Coimbra csak opcionális megálló",
        "Wizz Air · YPJP7Q"
      ],
      schedule: [
        { time: "08:30", title: "🚗 Indulás Portóból", detail: "Közvetlenül a reptérre, ha szoros az idő." },
        { time: "10:00", title: "🏛 Coimbra opció", detail: "Csak ha április 7-én kimaradt és a timing engedi." },
        { time: "13:00", title: "🚗 Lisszabon reptér", detail: "Autóvisszaadás és check-in." },
        { time: "~08:30", title: "✈ Wizz Air LIS → BUD", detail: "A jelenlegi repülési adatot külön validálni kell." }
      ]
    }
  ],
  restaurants: [
    {
      city: "Lisszabon",
      items: [
        {
          name: "Solar dos Presuntos",
          type: "Ebéd · Baixa · klasszikus portugál húsételek",
          description: "Stabil, megbízható lisszaboni húsos választás a belvárosban.",
          tags: ["🐷 sertés", "🥩 marha", "🍗 csirke"],
          meta: "R. das Portas de Santo Antão 150",
          url: "https://www.google.com/maps/search/Solar+dos+Presuntos+Lisboa"
        },
        {
          name: "Taberna Sal Grosso",
          type: "Vacsora · Alfama · foglalós hely",
          description: "Kis, autentikus, erős vacsorahely Alfamában.",
          tags: ["🐷 sertés", "🥩 marha", "❌ hal nincs"],
          meta: "Beco do Açúcar 9",
          url: "https://www.google.com/maps/search/Taberna+Sal+Grosso+Alfama+Lisboa"
        },
        {
          name: "Pastéis de Belém",
          type: "Reggeli / kávé · ikonikus",
          description: "A kötelező nata megálló Belémben.",
          tags: ["☕ kávé", "🥮 sütemény"],
          meta: "R. de Belém 84-92",
          url: "https://www.google.com/maps/search/Pasteis+de+Belem+Lisboa"
        }
      ]
    },
    {
      city: "Coimbra",
      items: [
        {
          name: "Zé Manel dos Ossos",
          type: "Ebéd · Coimbra centrum",
          description: "Jó rövid megálló az autós nap közepén.",
          tags: ["🐷 sertés", "🥩 marha"],
          meta: "Beco do Forno 12",
          url: "https://www.google.com/maps/search/Ze+Manel+dos+Ossos+Coimbra"
        }
      ]
    },
    {
      city: "Porto",
      items: [
        {
          name: "DOP by Rui Paula",
          type: "Vacsora · finomabb porto-i este",
          description: "A Douro/Porto átmeneti nap legjobb vacsorája.",
          tags: ["🐷 sertés", "🥩 marha"],
          meta: "Largo de S. Domingos 18",
          url: "https://www.google.com/maps/search/DOP+Restaurant+Rui+Paula+Porto"
        },
        {
          name: "Conga – Casa das Bifanas",
          type: "Brunch / ebéd · Aliados",
          description: "Bifana, gyors és klasszikus porto-i ebéd.",
          tags: ["🐷 sertés"],
          meta: "R. do Bonjardim 318",
          url: "https://www.google.com/maps/search/Conga+Casa+das+Bifanas+Porto"
        },
        {
          name: "MUU Steakhouse",
          type: "Búcsúvacsora · Aliados",
          description: "A legjobb hely a záró porto-i vacsorára.",
          tags: ["🥩 marha"],
          meta: "R. do Almada 149A",
          url: "https://www.google.com/maps/search/MUU+Steakhouse+Porto"
        },
        {
          name: "Café Majestic",
          type: "Kávézó · Santa Catarina",
          description: "A legszebb porto-i kávés pihenőpont.",
          tags: ["☕ kávé", "🥐 pastry"],
          meta: "R. de Santa Catarina 112",
          url: "https://www.google.com/maps/search/Cafe+Majestic+Porto+Rua+Santa+Catarina"
        }
      ]
    }
  ],
  sights: [
    { name: "Jerónimos kolostor", when: "2. nap · Ápr. 4", rating: "⭐ 4.7", price: "10€/fő", detail: "Belém, UNESCO" },
    { name: "Belém-torony", when: "2. nap · Ápr. 4", rating: "⭐ 4.6", price: "8€/fő", detail: "Belém, folyóparti erőd" },
    { name: "Pena kastély", when: "3. nap · Ápr. 5", rating: "⭐ 4.7", price: "20€/fő", detail: "Sintra, UNESCO" },
    { name: "Quinta da Regaleira", when: "3. nap · Ápr. 5", rating: "⭐ 4.7", price: "8€/fő", detail: "Sintra, kert és iniciatikus kút" },
    { name: "Universidade de Coimbra / Joanina", when: "5. nap · Ápr. 7", rating: "⭐ 4.7", price: "12.5€/fő", detail: "Coimbra, rövidített látogatás" },
    { name: "Douro-völgy", when: "6. nap · Ápr. 8", rating: "⭐ 4.9", price: "borászat ~20€", detail: "Pinhão, Casal de Loivos, N222" },
    { name: "Ribeira + D. Luís I híd", when: "6. nap · Ápr. 8", rating: "⭐ 4.7", price: "Ingyenes", detail: "Porto esti blokk" },
    { name: "Livraria Lello", when: "7. nap · Ápr. 9", rating: "⭐ 4.5", price: "8€/fő", detail: "Porto belváros" },
    { name: "Clérigos torony", when: "7. nap · Ápr. 9", rating: "⭐ 4.6", price: "8€/fő", detail: "Porto panoráma" }
  ],
  practical: [
    {
      title: "⚠️ Foglalások",
      items: [
        "Jerónimos és Pena időpontra foglalva a legjobb.",
        "Autóbérlés csak április 7 reggeltől kell.",
        "Pinhão szállás és 1 douro-i borkóstoló előre.",
        "DOP és MUU vacsora foglalás."
      ]
    },
    {
      title: "🚗 Autó",
      items: [
        "Felvétel Lisszabonban április 7 reggel.",
        "Leadás LIS reptérnél április 10-én.",
        "N222-re hagyj időt, ne csak átrobogj rajta.",
        "Coimbra csak röviden fér bele a hosszú napon."
      ]
    },
    {
      title: "💶 Pénz és appok",
      items: [
        "EUR, kártya szinte mindenhol működik.",
        "TheFork sok helyen segít foglalásnál és kedvezménynél.",
        "Google Maps offline és CP vonat app hasznos.",
        "Pastéis de Belémnél készpénz jól jöhet."
      ]
    }
  ]
};
