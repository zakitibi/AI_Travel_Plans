const tripData = {
  title: "🧭 Izland es eszak Europa · 2026. július 10–30.",
  subtitle: "Tibi balti autós felvezető útja a július 18-i stockholmi repüléssel, Henni külön izlandi belépővel, majd közös hazaúttal",
  updatedAt: "2026.05.20",
  route: [
    { label: "BUD", cls: "flight" },
    { separator: "→🚗→" },
    { label: "Vilnius", cls: "baltic" },
    { label: "Riga", cls: "baltic" },
    { label: "Tallinn", cls: "baltic" },
    { separator: "→🚢→" },
    { label: "Helsinki", cls: "nordic" },
    { label: "Stockholm", cls: "nordic" },
    { separator: "→✈→" },
    { label: "Reykjavík", cls: "iceland" },
    { label: "Snæfellsnes", cls: "iceland" },
    { label: "Mývatn", cls: "iceland" },
    { label: "Egilsstaðir", cls: "iceland" },
    { label: "Höfn", cls: "iceland" },
    { label: "Vík", cls: "iceland" },
    { label: "Selfoss", cls: "iceland" },
    { separator: "→✈→" },
    { label: "Malmö", cls: "return" },
    { label: "Koppenhága", cls: "return" },
    { label: "Hamburg", cls: "return" },
    { label: "Frankfurt", cls: "return" },
    { separator: "→🚗→" },
    { label: "BUD", cls: "flight" }
  ],
  icelandGeneralBox: {
    title: "🧭 Izland · általános napi útmutató",
    accent: "iceland",
    open: false,
    layout: "stack",
    cards: [
      {
        title: "🌦 Időjárás-monitorozás",
        paragraphs: [
          "A <a href='https://en.vedur.is/weather/forecasts/areas/' target='_blank' rel='noreferrer'>vedur.is</a> az elsődleges döntési forrás, a <a href='https://safetravel.is/' target='_blank' rel='noreferrer'>safetravel.is</a> az út- és túrakockázatokhoz, a <a href='https://www.road.is/' target='_blank' rel='noreferrer'>road.is</a> pedig az élő útállapothoz. Izlandon ez nem optional extra, hanem napi rutin."
        ]
      },
      {
        title: "🚗 Vezetés",
        paragraphs: [
          "Ring Roadon 90 km/h a plafon, faluban 50, iskola mellett 30. A szél 15–25 m/s tartományban sem ritka, és az ajtót mindig fogni kell nyitáskor. Bárányokra főleg Snæfellsnesen és a keleti fjordokban számítsatok."
        ]
      },
      {
        title: "🛡 Autó és biztosítás",
        paragraphs: [
          "Kavicsfelverődés és szélkárok miatt a gravel insurance itt nem finomhangolás, hanem alap. Az <a href='https://epiciceland.net/car-rental-insurance-guide-iceland/' target='_blank' rel='noreferrer'>SCDW / GP insurance guide</a> jól összefoglalja, mit érdemes vállalni. Átvételkor fotózzátok körbe az autót, különösen az ablakokat, lökhárítót és a kisebb karcokat."
        ]
      },
      {
        title: "💳 Pénz és kutak",
        paragraphs: [
          "Bankkártya mindenhol működik, készpénz alig kell. Az izlandi kutaknál PIN-kód gyakran kötelező, és érdemes 1/2 tank fölött maradni, mert a távolságok hosszabbnak érződnek, mint amit a térkép sugall."
        ]
      },
      {
        title: "🍲 Étkezés és bevásárlás",
        paragraphs: [
          "A szállodai reggeli sokszor jobb ár-érték, mint kint vadászni. Bónus általában olcsóbb, mint a kisebb láncok, az N1 / Olís hot dog pedig teljesen legitim izlandi roadtrip-kaja. A <a href='https://www.fridheimar.is/en' target='_blank' rel='noreferrer'>Friðheimar</a> külön foglalós élmény, ezt érdemes előre kezelni."
        ]
      },
      {
        title: "🧥 Mit pakoljatok",
        paragraphs: [
          "Vízhatlan kabát és nadrág, vízhatlan cipő, sapka, kesztyű, fürdőruha, autós töltő és offline térkép legyen alap. Július ellenére a szél és a permet sokszor többet számít, mint maga a hőmérséklet."
        ]
      },
      {
        title: "⏰ Napi időablak-logika",
        paragraphs: [
          "A legjobb fény és a legkevesebb turista gyakran reggel 5–6 körül vagy este 21–23 között van. A buszos tömegek jellemzően 9:30–15:30 között esnek be a fő pontokra."
        ]
      },
      {
        title: "🔁 Snæfellsnes cserehorog",
        paragraphs: [
          "Ha Day 3-ra köd vagy eső jön, akkor a jó swap a Day 2 és Day 3 felcserélése: előre Snæfellsnes, hátra Reykjavík + Sky Lagoon. Ezt a <a href='https://en.vedur.is/weather/forecasts/areas/' target='_blank' rel='noreferrer'>vedur.is</a> alapján érdemes meghúzni, csak akkor, ha tényleg jó Day 2 és rossz Day 3 kombináció látszik."
        ]
      }
    ],
    links: [
      { label: "vedur.is", url: "https://en.vedur.is/weather/forecasts/areas/" },
      { label: "safetravel.is", url: "https://safetravel.is/" },
      { label: "road.is", url: "https://www.road.is/" },
      { label: "Friðheimar", url: "https://www.fridheimar.is/en" },
      { label: "SCDW / GP guide", url: "https://epiciceland.net/car-rental-insurance-guide-iceland/" }
    ]
  },
  ticketGroups: [
    {
      person: "Henni",
      summary: "Erasmus+ kurzus Izlandon, majd közös Ring Road és visszarepülés",
      note: "Henni júl. 11-én érkezik Reykjavíkba, a kurzus júl. 13–18. közt zajlik (Smart Teachers Play More, Erasmus+). Júl. 18-án találkoznak Tibivel, és kezdődik a közös Ring Road körút. A FI306 már a közös hazazárás része.",
      items: [
        {
          mode: "✈ Repülő",
          status: "Foglalva",
          operator: "Wizz Air",
          code: "W62427",
          route: "Budapest (BUD) → Reykjavík / Keflavík (KEF)",
          departure: "2026.07.11 · 15:40",
          arrival: "2026.07.11 · 18:20",
          duration: "4:40",
          links: [
            { label: "Wizz Air", url: "https://wizzair.com/" },
            { label: "Menetrend", url: "https://www.flightsfrom.com/BUD-KEF" }
          ]
        },
        {
          mode: "✈ Repülő",
          status: "Közös szakasz",
          operator: "Icelandair",
          code: "FI306",
          route: "Reykjavík / Keflavík (KEF) → Stockholm / Arlanda (ARN)",
          departure: "2026.07.26 · 07:35",
          arrival: "2026.07.26 · 12:45",
          duration: "3:10",
          links: [
            { label: "Icelandair", url: "https://www.icelandair.com/" }
          ]
        }
      ]
    },
    {
      person: "Tibi",
      summary: "Teljes északi átkelés + izlandi oda-vissza repülés",
      note: "A kompok tervezett státuszban vannak, nem foglaltak; a repülések foglaltak. Tallinn → Helsinki: Tallink Shuttle (rövid, 2h). Helsinki → Turku: autóval ~1,5h. Turku → Stockholm: Viking Line (10,5h, éjjeli, megérkezés 06:30). A Turku–Stockholm vonal rövidebb és kényelmesebb, mint a Helsinki–Stockholm (18h lenne).",
      items: [
        {
          mode: "🚢 Komp",
          status: "Tervezett",
          operator: "Tallink Shuttle",
          code: "Megastar",
          route: "Tallinn D-Terminal → Helsinki West Harbour T2",
          departure: "2026.07.17 · 10:30",
          arrival: "2026.07.17 · 12:30",
          duration: "2:00",
          links: [
            { label: "Tallink 2026 timetable", url: "https://image.tallink.com/image/upload/cargo/terms-and-conditions/timetables-cargo-2026.pdf" }
          ]
        },
        {
          mode: "🚢 Komp",
          status: "Tervezett",
          operator: "Viking Line",
          code: "Viking Grace / Viking Glory",
          route: "Turku (Åbo) → Mariehamn (Åland) → Stockholm Värtahamnen",
          departure: "2026.07.17 · 20:00",
          arrival: "2026.07.18 · 06:30",
          duration: "10:30",
          links: [
            { label: "Viking Line Turku–Stockholm", url: "https://www.vikingline.com/routes/turku-stockholm/" },
            { label: "Viking Line menetrend", url: "https://www.vikingline.com/en/timetables/" }
          ]
        },
        {
          mode: "✈ Repülő",
          status: "Foglalva",
          operator: "Icelandair",
          code: "FI309",
          route: "Stockholm / Arlanda (ARN) → Reykjavík / Keflavík (KEF)",
          departure: "2026.07.18 · 17:10",
          arrival: "2026.07.18 · 18:25",
          duration: "3:15",
          links: [
            { label: "Icelandair", url: "https://www.icelandair.com/" },
            { label: "Swedavia parking", url: "https://www.swedavia.se/en/arlanda/parking/" }
          ]
        },
        {
          mode: "✈ Repülő",
          status: "Foglalva",
          operator: "Icelandair",
          code: "FI306",
          route: "Reykjavík / Keflavík (KEF) → Stockholm / Arlanda (ARN)",
          departure: "2026.07.26 · 07:35",
          arrival: "2026.07.26 · 12:45",
          duration: "3:10",
          links: [
            { label: "Icelandair", url: "https://www.icelandair.com/" }
          ]
        }
      ]
    }
  ],
  map: {
    nodes: [
      { id: "bud", tab: "overview", label: "Budapest", note: "07.10", x: 266, y: 262, color: "#8a2e52", major: true },
      { id: "vil", tab: "baltikum", label: "Vilnius", note: "07.11–12", x: 228, y: 116, color: "#8a4f24", major: true },
      { id: "rig", tab: "baltikum", label: "Riga", note: "07.13–14", x: 236, y: 94, color: "#8a4f24" },
      { id: "tal", tab: "baltikum", label: "Tallinn", note: "07.15–16", x: 243, y: 74, color: "#8a4f24" },
      { id: "hel", tab: "baltikum", label: "Helsinki+Turku", note: "07.17", x: 224, y: 63, color: "#6a4ca3" },
      { id: "sto", tab: "baltikum", label: "Stockholm", note: "07.18", x: 198, y: 90, color: "#6a4ca3", major: true },
      { id: "rey", tab: "izland", label: "Reykjavík", note: "07.18–19", x: 62, y: 78, color: "#1f5a3e", major: true },
      { id: "snae", tab: "izland", label: "Snæfellsnes", note: "07.20", x: 78, y: 62, color: "#1f5a3e" },
      { id: "myv", tab: "izland", label: "Mývatn", note: "07.21", x: 122, y: 62, color: "#1f5a3e" },
      { id: "egl", tab: "izland", label: "Egilsstaðir", note: "07.22", x: 171, y: 78, color: "#1f5a3e" },
      { id: "hof", tab: "izland", label: "Höfn", note: "07.23", x: 156, y: 109, color: "#1f5a3e" },
      { id: "vik", tab: "izland", label: "Vík", note: "07.24", x: 111, y: 92, color: "#1f5a3e" },
      { id: "sel", tab: "izland", label: "Selfoss", note: "07.25", x: 85, y: 88, color: "#1f5a3e" },
      { id: "mal", tab: "hazaut", label: "Malmö", note: "07.26", x: 207, y: 124, color: "#b8860b", major: true },
      { id: "cop", tab: "hazaut", label: "Koppenhága", note: "07.27", x: 214, y: 137, color: "#b8860b" },
      { id: "ham", tab: "hazaut", label: "Hamburg", note: "07.28", x: 225, y: 162, color: "#b8860b" },
      { id: "fra", tab: "hazaut", label: "Frankfurt", note: "07.29", x: 228, y: 210, color: "#b8860b" }
    ],
    paths: [
      { from: "bud", to: "vil", color: "#8a4f24" },
      { from: "vil", to: "rig", color: "#8a4f24" },
      { from: "rig", to: "tal", color: "#8a4f24" },
      { from: "tal", to: "hel", color: "#6a4ca3", dashed: true },
      { from: "hel", to: "sto", color: "#6a4ca3", dashed: true },
      { from: "sto", to: "rey", color: "#1f5a3e", dashed: true },
      { from: "rey", to: "snae", color: "#1f5a3e" },
      { from: "snae", to: "myv", color: "#1f5a3e" },
      { from: "myv", to: "egl", color: "#1f5a3e" },
      { from: "egl", to: "hof", color: "#1f5a3e" },
      { from: "hof", to: "vik", color: "#1f5a3e" },
      { from: "vik", to: "sel", color: "#1f5a3e" },
      { from: "sel", to: "rey", color: "#1f5a3e", dashed: true },
      { from: "rey", to: "mal", color: "#b8860b", dashed: true },
      { from: "mal", to: "cop", color: "#b8860b" },
      { from: "cop", to: "ham", color: "#b8860b" },
      { from: "ham", to: "fra", color: "#b8860b" },
      { from: "fra", to: "bud", color: "#b8860b" }
    ]
  },
  overview: {
    timeline: [
      {
        date: "2026.07.10",
        phase: "Tibi külön",
        accent: "accent-baltic",
        title: "Budapest → Lengyelország",
        summary: "Hosszú tranzitnap, a cél a Baltikum irányába való stabil ráfordulás.",
        points: ["~900 km", "8–10 óra vezetés", "1 tranzitszállás"],
        driveStats: { km: "~900 km", stops: 2, depart: "07:00", arrive: "~20:00", driveTime: "~10 óra", timelinePoints: [{time:"07:00", label:"BUD ind."}, {time:"13:00", label:"~félúton"}, {time:"20:00", label:"szállás"}] }
      },
      {
        date: "2026.07.11",
        phase: "Tibi külön",
        accent: "accent-baltic",
        title: "Lengyelország → Vilnius · Henni BUD → KEF",
        summary: "Tibi eléri Litvániát; Henni repül Reykjavíkba (Wizz Air W62427) — a kurzus júl. 13-án kezdődik, 2 nap ráhangolódás lesz.",
        points: ["Tibi: esti Vilnius", "Henni: W62427, 15:40 → 18:20"],
        driveStats: { km: "~650 km", stops: 2, depart: "08:00", arrive: "~19:00", driveTime: "~8 óra", timelinePoints: [{time:"08:00", label:"ind."}, {time:"14:00", label:"Litvánia határ"}, {time:"19:00", label:"Vilnius"}] }
      },
      {
        date: "2026.07.12",
        phase: "Tibi külön",
        accent: "accent-baltic",
        title: "Vilnius + Trakai",
        summary: "Az első teljes balti városnap, klasszikus óváros + vár kombóval.",
        points: ["Vilnius óváros", "Gediminas", "Trakai Castle"],
        driveStats: { km: "~30 km", stops: 2, depart: "09:00", arrive: "~20:00", driveTime: "~45 perc", timelinePoints: [{time:"09:00", label:"Vilnius"}, {time:"12:00", label:"Trakai"}, {time:"16:00", label:"vissza"}] }
      },
      {
        date: "2026.07.13",
        phase: "Tibi külön",
        accent: "accent-baltic",
        title: "Vilnius → Riga",
        summary: "Hill of Crosses megállóval érkezés Lettországba.",
        points: ["~300 km", "Hill of Crosses", "esti Riga"],
        driveStats: { km: "~300 km", stops: 3, depart: "09:00", arrive: "~18:00", driveTime: "~4 óra", timelinePoints: [{time:"09:00", label:"Vilnius ind."}, {time:"11:30", label:"Hill of Crosses"}, {time:"18:00", label:"Riga"}] },
        henniBox: { icon: "🎓", label: "Henni · Izland", title: "Erasmus+ kurzus kezdete", detail: "Smart Teachers Play More · júl. 13–18. · CLIL módszertan, storytelling, izlandi iskolalátogatások" }
      },
      {
        date: "2026.07.14",
        phase: "Tibi külön",
        accent: "accent-baltic",
        title: "Riga city day",
        summary: "Lazább városi nap, kevés vezetéssel és több sétával.",
        points: ["Old Town", "Art Nouveau", "városi puffer"],
        driveStats: { km: "~5 km", stops: 4, depart: "09:00", arrive: "~21:00", driveTime: "gyalogos nap", timelinePoints: [{time:"09:00", label:"reggeli"}, {time:"10:00", label:"Old Town"}, {time:"15:00", label:"Art Nouveau"}, {time:"19:00", label:"vacsora"}] }
      },
      {
        date: "2026.07.15",
        phase: "Tibi külön",
        accent: "accent-baltic",
        title: "Riga → Sigulda → Tallinn",
        summary: "Hosszabb, de erős vezetős nap a Gauja NP miatt.",
        points: ["~350 km", "Sigulda", "Tallinn kikötő közeli zárás"],
        driveStats: { km: "~350 km", stops: 3, depart: "08:00", arrive: "~20:00", driveTime: "~4,5 óra", timelinePoints: [{time:"08:00", label:"Riga ind."}, {time:"10:00", label:"Sigulda"}, {time:"20:00", label:"Tallinn"}] }
      },
      {
        date: "2026.07.16",
        phase: "Tibi külön",
        accent: "accent-baltic",
        title: "Tallinn",
        summary: "Óváros és kikötői logika a komp előtti napra.",
        points: ["Tallinn óváros", "kikötő környéke", "komp előtti puffer"],
        driveStats: { km: "~5 km", stops: 3, depart: "09:00", arrive: "~21:00", driveTime: "gyalogos nap", timelinePoints: [{time:"09:00", label:"óváros"}, {time:"14:00", label:"kikötő"}, {time:"18:00", label:"komp prep."}] }
      },
      {
        date: "2026.07.17",
        phase: "Tibi külön",
        accent: "accent-nordic",
        title: "Tallinn → Helsinki + Finnország nap → Turku",
        summary: "Délelőtti Tallink shuttle Helsinkibe, délutáni finn városi blokk, drive Turkuba, esti Viking Line overnight Stockholm felé.",
        points: ["Helsinki (Kauppatori, katedális)", "Turku Castle", "Viking Line 20:00 → 06:30"],
        driveStats: { km: "~170 km (Helsinki → Turku)", stops: 5, depart: "10:30", arrive: "20:00", driveTime: "~1,5 óra", timelinePoints: [{time:"10:30", label:"Tallinn ind."}, {time:"12:30", label:"Helsinki"}, {time:"14:30", label:"→ Turku"}, {time:"20:00", label:"Viking Line"}] }
      },
      {
        date: "2026.07.18",
        phase: "Tibi külön / közös este",
        accent: "accent-nordic",
        title: "Stockholm / Arlanda → Reykjavík",
        summary: "Reggeli kikötőérkezés, arlandai parking, majd Tibi FI309-es járata Izlandra.",
        points: ["FI309", "17:10 → 18:25", "Arlanda parking"],
        driveStats: { km: "~35 km", stops: 2, depart: "06:30", arrive: "17:10", driveTime: "~35 perc", timelinePoints: [{time:"06:30", label:"Värtahamnen"}, {time:"14:30", label:"Arlanda check-in"}, {time:"17:10", label:"FI309 ✈"}] }
      },
      {
        date: "2026.07.19",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Reykjavík + Sky Lagoon",
        summary: "Akklimatizációs nap: város, könnyű séta, majd esti fürdő a csúcsszezon előtt még kényelmes ritmusban.",
        points: ["Hallgrímskirkja", "Harpa", "Sky Lagoon"],
        driveStats: { km: "~40 km", stops: 5, depart: "09:00", arrive: "~20:00", driveTime: "< 1 óra", timelinePoints: [{time:"09:00", label:"Hallgrímskirkja"}, {time:"12:30", label:"ebéd"}, {time:"14:30", label:"Sky Lagoon"}, {time:"20:00", label:"vacsora"}] }
      },
      {
        date: "2026.07.20",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Snæfellsnes-félsziget",
        summary: "Hosszabb, de nagyon erős nap: fekete templom, fókák, bazaltpart, Kirkjufell és hosszú nyári fény.",
        points: ["Búðakirkja", "Arnarstapi", "Kirkjufell"],
        driveStats: { km: "~450 km", stops: 9, depart: "07:00", arrive: "~21:00", driveTime: "~7 óra", timelinePoints: [{time:"07:00", label:"Reykjavík"}, {time:"10:00", label:"Búðakirkja"}, {time:"13:00", label:"Arnarstapi"}, {time:"19:00", label:"Kirkjufell"}] }
      },
      {
        date: "2026.07.21",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Akureyri / Húsavík / Mývatn",
        summary: "Északi nap városi blokkal, Goðafoss-szal és választható bálnalessel vagy hosszabb Mývatn-régióval.",
        points: ["Akureyri", "Goðafoss", "Mývatn"],
        driveStats: { km: "~280 km", stops: 6, depart: "08:00", arrive: "~21:00", driveTime: "~4 óra", timelinePoints: [{time:"08:00", label:"ind."}, {time:"11:00", label:"Akureyri"}, {time:"14:00", label:"Goðafoss"}, {time:"17:00", label:"Mývatn"}] }
      },
      {
        date: "2026.07.22",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Dettifoss → Stuðlagil → Kelet-Izland",
        summary: "Hosszabb keleti nap geotermikus mezőkkel, nagy vízeséssel és a bazaltkanyonos átvezetéssel.",
        points: ["Hverir", "Dettifoss", "Stuðlagil"],
        driveStats: { km: "~400 km", stops: 6, depart: "08:00", arrive: "~20:00", driveTime: "~5 óra", timelinePoints: [{time:"08:00", label:"ind. (Mývatn)"}, {time:"10:00", label:"Dettifoss"}, {time:"13:00", label:"Stuðlagil"}, {time:"20:00", label:"Egilsstaðir"}] }
      },
      {
        date: "2026.07.23",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Vestrahorn → Jökulsárlón → Diamond Beach",
        summary: "A fotós csúcsnap: fekete homok, hegyek, jégdarabok és hosszú esti fény.",
        points: ["Vestrahorn", "Jökulsárlón", "Diamond Beach"],
        driveStats: { km: "~320 km", stops: 7, depart: "08:00", arrive: "~22:00", driveTime: "~5 óra", timelinePoints: [{time:"08:00", label:"ind."}, {time:"10:00", label:"Vestrahorn"}, {time:"13:00", label:"Höfn"}, {time:"16:00", label:"Jökulsárlón"}] }
      },
      {
        date: "2026.07.24",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Déli part: Fjaðrárgljúfur → Reynisfjara → Skógafoss",
        summary: "Sűrű látvány-nap, ahol a korai indulás a kulcs a tömeg előtt.",
        points: ["Fjaðrárgljúfur", "Dyrhólaey puffinok", "Skógafoss"],
        driveStats: { km: "~300 km", stops: 8, depart: "07:00", arrive: "~20:00", driveTime: "~4 óra", timelinePoints: [{time:"07:00", label:"ind."}, {time:"09:00", label:"Fjaðrárgljúfur"}, {time:"13:00", label:"Vík"}, {time:"16:00", label:"Skógafoss"}] }
      },
      {
        date: "2026.07.25",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Golden Circle + Keflavík",
        summary: "A zárónap a Golden Circle főpontjaival és esti reptérközeli lezárással.",
        points: ["Secret Lagoon", "Friðheimar", "Þingvellir"],
        driveStats: { km: "~250 km", stops: 8, depart: "08:30", arrive: "~20:00", driveTime: "~3 óra", timelinePoints: [{time:"08:30", label:"ind."}, {time:"11:00", label:"Secret Lagoon"}, {time:"13:00", label:"Friðheimar"}, {time:"15:00", label:"Geysir / Gullfoss"}] }
      },
      {
        date: "2026.07.26",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Stockholm — FI306 érkezés + első délután",
        summary: "FI306 visszaút Arlandára (12:45), autóátvétel, majd stockholmi belváros — Gamla Stan, Södermalm. Szállás Stockholmban.",
        points: ["FI306", "07:35 → 12:45 ARN", "Stockholm: Gamla Stan"],
        driveStats: { km: "~40 km (Arlanda → centrum)", stops: 2, depart: "07:35 (FI306)", arrive: "~13:30 Stockholm", driveTime: "~40 perc", timelinePoints: [{time:"07:35", label:"FI306 KEF"}, {time:"12:45", label:"Arlanda"}, {time:"13:30", label:"Stockholm"}, {time:"20:00", label:"szállás"}] }
      },
      {
        date: "2026.07.27",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Stockholm — Teljes városnap",
        summary: "Vasa Museum, Djurgården, Fotografiska és esti Gamla Stan. Szállás Stockholmban.",
        points: ["Vasa Museum", "Djurgården", "Fotografiska"],
        driveStats: { km: "~10 km", stops: 5, depart: "09:00", arrive: "~21:00", driveTime: "gyalogos / hajós nap", timelinePoints: [{time:"09:00", label:"Vasa Museum"}, {time:"12:00", label:"Djurgården"}, {time:"15:00", label:"Fotografiska"}, {time:"19:00", label:"esti séta"}] }
      },
      {
        date: "2026.07.28",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Stockholm Archipelago — Vaxholm + Grinda",
        summary: "Egész napos hajókaland a stockholmi szigetvilágban — Strömkajen komptól Vaxholm erődig, majd Grinda gránitszigetéig és vissza.",
        points: ["Vaxholm ⛵", "Grinda sziget", "Waxholmsbolaget"],
        driveStats: { km: "~0 km (kompos nap)", stops: 3, depart: "09:00", arrive: "~20:00 Stockholm", driveTime: "kompos nap", timelinePoints: [{time:"09:00", label:"Strömkajen"}, {time:"10:15", label:"Vaxholm"}, {time:"12:00", label:"Grinda"}, {time:"16:30", label:"Visszakomp"}, {time:"19:30", label:"Stockholm"}] }
      },
      {
        date: "2026.07.29",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Stockholm → Malmö → Koppenhága",
        summary: "Svéd autópályás etap ~650 km: Malmö fotóstop (Turning Torso, 45 perc), Øresund Bridge átkelés, délutáni érkezés Koppenhágába.",
        points: ["~650 km", "Øresund Bridge", "Koppenhága"],
        driveStats: { km: "~650 km", stops: 3, depart: "07:00", arrive: "~14:00 Koppenhága", driveTime: "~7 óra", timelinePoints: [{time:"07:00", label:"Stockholm ind."}, {time:"11:30", label:"Malmö"}, {time:"12:30", label:"Øresund"}, {time:"14:00", label:"Koppenhága"}] }
      },
      {
        date: "2026.07.30",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Koppenhága 1. nap — Nyhavn + Rosenborg + Tivoli",
        summary: "A dán főváros ikonjai: Nyhavn csatorna, Rosenborg kastély, Strøget sétálóutca, Tivoli Gardens.",
        points: ["Nyhavn (★4.6)", "Rosenborg Slot (★4.6)", "Tivoli (★4.5)"],
        driveStats: { km: "~5 km (városon belül)", stops: 4, depart: "09:00", arrive: "~21:00", driveTime: "gyalogos / metró nap", timelinePoints: [{time:"09:00", label:"Nyhavn"}, {time:"11:00", label:"Rosenborg"}, {time:"14:00", label:"Strøget"}, {time:"17:00", label:"Tivoli"}] }
      },
      {
        date: "2026.07.31",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Koppenhága 2. nap — Christiansborg + Kis Hableány + Christiania",
        summary: "Dán parlament és palota, Little Mermaid a kikötőnél, Freetown Christiania alternatív negyed, Nørrebro este.",
        points: ["Christiansborg (★4.5)", "Kis Hableány (★4.0)", "Christiania (★4.3)"],
        driveStats: { km: "~6 km (városon belül)", stops: 4, depart: "09:00", arrive: "~21:00", driveTime: "gyalogos / bringa nap", timelinePoints: [{time:"09:00", label:"Christiansborg"}, {time:"11:00", label:"Kis Hableány"}, {time:"13:30", label:"Christiania"}, {time:"16:00", label:"Nørrebro"}] }
      },
      {
        date: "2026.08.01",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Koppenhága 3. nap + Louisiana Museum → Hamburg",
        summary: "Délelőtt Louisiana Museum of Modern Art (Helsingør irányban, ~45 km), majd Koppenhága → Hamburg ~310 km, esti érkezés.",
        points: ["Louisiana Museum (★4.7)", "~310 km", "Hamburg este"],
        driveStats: { km: "~310 km", stops: 2, depart: "13:00", arrive: "~16:30 Hamburg", driveTime: "~3 óra", timelinePoints: [{time:"10:00", label:"Louisiana Museum"}, {time:"13:00", label:"Indulás"}, {time:"14:30", label:"Flensburg"}, {time:"16:30", label:"Hamburg"}] }
      },
      {
        date: "2026.08.02",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Hamburg körút — Lübeck + Schwerin Castle",
        summary: "Napkirándulás Hamburgból: Lübeck UNESCO-óváros (Holstentor, Marienkirche, Niederegger) + Schweriner Schloss a tavon.",
        points: ["Lübeck (~1h)", "Schwerin Castle", "~230 km körút"],
        driveStats: { km: "~230 km", stops: 2, depart: "08:30", arrive: "~18:30 Hamburg", driveTime: "~3,5 óra", timelinePoints: [{time:"08:30", label:"Hamburg ind."}, {time:"09:30", label:"Lübeck"}, {time:"13:00", label:"Schwerin"}, {time:"18:30", label:"Hamburg"}] }
      },
      {
        date: "2026.08.03",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Hamburg városnap",
        summary: "Miniatur Wunderland, Speicherstadt+HafenCity (UNESCO), Elbphilharmonie Plaza, Landungsbrücken, St. Pauli.",
        points: ["Miniatur Wunderland", "Speicherstadt (UNESCO)", "Elbphilharmonie"],
        driveStats: { km: "~8 km (városon belül)", stops: 4, depart: "09:00", arrive: "~21:00", driveTime: "gyalogos + U-Bahn nap", timelinePoints: [{time:"09:00", label:"Miniatur Wunderland"}, {time:"12:00", label:"Speicherstadt"}, {time:"15:00", label:"Elbphilharmonie"}, {time:"18:30", label:"Vacsora"}] }
      },
      {
        date: "2026.08.04",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Hamburg → Frankfurt",
        summary: "~490 km (A7/A5) via Hannover. Délutáni érkezés Frankfurtba, első Römerberg-séta és Apfelwein-vacsora Sachsenhausenben.",
        points: ["~490 km", "Hannover pihenő", "Frankfurt este"],
        driveStats: { km: "~490 km", stops: 2, depart: "09:00", arrive: "~14:30 Frankfurt", driveTime: "~4,5 óra", timelinePoints: [{time:"09:00", label:"Hamburg ind."}, {time:"11:00", label:"Hannover"}, {time:"14:30", label:"Frankfurt"}, {time:"17:00", label:"Römerberg séta"}] }
      },
      {
        date: "2026.08.05",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Frankfurt városnap",
        summary: "Römerberg + Kaiserdom, Städel Museum, Eiserner Steg, Sachsenhausen Apfelwein negyed, MainKai skyline.",
        points: ["Römerberg", "Städel Museum", "Apfelwein vacsora"],
        driveStats: { km: "~6 km (városon belül)", stops: 4, depart: "09:00", arrive: "~21:00", driveTime: "gyalogos városnap", timelinePoints: [{time:"09:00", label:"Römerberg"}, {time:"11:00", label:"Städel Museum"}, {time:"14:00", label:"Sachsenhausen"}, {time:"19:00", label:"Apfelwein vacsora"}] }
      },
      {
        date: "2026.08.06",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Frankfurt → Budapest 🏁",
        summary: "Záróetap ~950 km (Nürnberg → Linz → Wien → Budapest). Korai indulás, délutáni hazaérkezés. Az Expedition vége.",
        points: ["~950 km", "Nürnberg · Linz · Wien", "Budapest 🏁"],
        driveStats: { km: "~950 km", stops: 3, depart: "06:00", arrive: "~15:30 Budapest", driveTime: "~9 óra", timelinePoints: [{time:"06:00", label:"Frankfurt ind."}, {time:"09:00", label:"Nürnberg"}, {time:"13:00", label:"Linz/Wien"}, {time:"15:30", label:"Budapest 🏁"}] }
      }
    ],
    mainTrips: [
      {
        title: "Budapest – Baltikum – Stockholm",
        text: "Tibi külön autós felvezető útja, városnapokkal és fokozatos északra húzással.",
        cta: "Ugrás a Baltikum részhez",
        tab: "baltikum",
        accent: "accent-baltic"
      },
      {
        title: "Izland",
        text: "A közös főélmény most már egy teljes, kényelmes Ring Road-ív: Reykjavík, Snæfellsnes, észak, kelet, gleccserlagúnák és déli part.",
        cta: "Ugrás az Izland részhez",
        tab: "izland",
        accent: "accent-iceland"
      },
      {
        title: "Svédország – Dánia – Németország – hazaút",
        text: "A közös lezárás: repülés után újra autó, majd fokozatos visszagurulás Budapestig.",
        cta: "Ugrás a hazaút részhez",
        tab: "hazaut",
        accent: "accent-return"
      }
    ],
    important: [
      "A jelenlegi HTML-ben a 2026. május 20-i sheet az elsődleges dátumforrás.",
      "2026. július 17-én teljes Finnország nap kerül be: Tallink Shuttle Tallinnból Helsinkibe (10:30 → 12:30), helsinki gyors blokk (~2h), drive Turkuba (~1,5h), Turku Castle + Aura folyópart, majd Viking Line overnight Turkuból Stockholmba (20:00 → 06:30). A Turku–Stockholm vonal csak 10,5 óra — szemben a Helsinki–Stockholm 18 órájával.",
      "Henni W62427 járata 2026. július 11. 15:40 → 18:20 (Erasmus+ kurzus: júl. 13–18., Smart Teachers Play More), Tibi FI309 pedig 2026. július 18. 17:10 → 18:25 helyi idővel szerepel.",
      "A hazaút a következő struktúrát követi: 3 éjszaka Stockholm (júl. 26–28.) + 3 éjszaka Koppenhága (júl. 29–31.) + 3 éjszaka Hamburg (aug. 1–3.) + 1 éjszaka Frankfurt (aug. 4.) + városnap (aug. 5.) + Budapest aug. 6."
    ],
    countrySummaries: [
      {
        title: "🇵🇱 Lengyelország",
        accent: "accent-transit",
        text: "Nem célország, hanem felvezető tranzit. A kulcs itt a kényelmes tempó és az első jó alvóhely.",
        points: [
          { label: "Szerep", value: "tranzit" },
          { label: "Fókusz", value: "vezetési ritmus" },
          { label: "Nem cél", value: "külön sightseeing" }
        ]
      },
      {
        title: "🇱🇹 Litvánia",
        accent: "accent-baltic",
        text: "Vilnius és Trakai adja a balti ív első kulturális sűrűségét: óváros, vár és nyugodtabb városi ritmus.",
        points: [
          { label: "Bázis", value: "Vilnius" },
          { label: "Napi csúcs", value: "Trakai Castle" },
          { label: "Ritmus", value: "első rendes city day" }
        ]
      },
      {
        title: "🇱🇻 Lettország",
        accent: "accent-baltic",
        text: "Riga a leginkább városias balti etap, a Gauja-vonal pedig természetes átmenetet ad Tallinn felé.",
        points: [
          { label: "Bázis", value: "Riga" },
          { label: "Városi jelleg", value: "Art Nouveau + Old Town" },
          { label: "Átvezetés", value: "Sigulda / Gauja NP" }
        ]
      },
      {
        title: "🇪🇪 Észtország",
        accent: "accent-baltic",
        text: "Tallinn az óvárosi csúcspont és a tengeri átmenet logisztikai kapuja egyszerre.",
        points: [
          { label: "Bázis", value: "Tallinn" },
          { label: "Fókusz", value: "óváros + kikötő" },
          { label: "Miatt fontos", value: "komp logika" }
        ]
      },
      {
        title: "🇫🇮 / 🇸🇪 Finnország és Svédország",
        accent: "accent-nordic",
        text: "A route-ban itt nem a sightseeing a lényeg, hanem a jó ritmusú átmenet és az arlandai logisztika.",
        points: [
          { label: "Finn szerep", value: "rövid kompátmenet" },
          { label: "Stockholm", value: "nem fő célpont" },
          { label: "Valódi fókusz", value: "parking + repülés" }
        ]
      },
      {
        title: "🇮🇸 Izland",
        accent: "accent-iceland",
        text: "A teljes expedition legerősebb blokkja: nyári Ring Road roadtrip, nagyon hosszú nappalokkal, csúcsszezoni tömeggel és fotózásra optimalizált megállókkal.",
        points: [
          { label: "Fő élmény", value: "közös roadtrip" },
          { label: "Autó", value: "2WD is elég a Ring Roadra" },
          { label: "Kulcstéma", value: "korai / késői időzítés" }
        ]
      },
      {
        title: "🇩🇰 / 🇩🇪 Dánia és Németország",
        accent: "accent-return",
        text: "A hazaútban ezek már nem külön célutak, hanem jól kimért lezáró etappá állnak össze.",
        points: [
          { label: "Dánia", value: "híd + rövid city stop" },
          { label: "Németország", value: "autópályás lezárás" },
          { label: "Hangulat", value: "visszaút fókusz" }
        ]
      }
    ]
  },
  stageLibrary: {
    tibiBaltic: {
      title: "Budapest → Baltikum → Stockholm",
      accent: "accent-baltic",
      status: "júl. 10–18. · külön szakasz",
      statusClass: "status-warm",
      text: "Tibi 9 napos autós felvezetése Budapestről a Baltikumon át Stockholmig (júl. 10–18.). A logika: Varsót teljesen kikerülve, Suwałki tranzitszálláson át belép Litvániába, ahol Kaunas rövid megállójával (Laisvės aleja sétálóutca) hangol rá a balti ritmusra — majd Vilnius következik két éjszakával. A litván főváros egyszerre barokk, mediterrán és szovjet-posztszovjet: a Cathedral Square és a Gediminas-torony adja a főirányvonalat, az Užupis negyed (saját alkotmánnyal rendelkező bohém negyed!) a karaktert, Trakai Island Castle pedig a képeslapot. Lettország két napot kap: Riga óvárosa a House of the Black Heads ikonikus homlokzatával nyit, a Riga Central Market öt zeppelin-hangárban folyik, az Art Nouveau-negyed Alberta ieláján Eisenstein apja tervei állnak sorban a szecessziós homlokzatok — este a Daugava-part és lett almaboros sörkóstolás zár. Észtországba a Gauja-völgyön vezet az út: Turaida Castle a völgyperemen, Gutmanis-barlang évszázados utazói feliratokkal, este Tallinn. A tallinni nap Toompea-dombjáról indul (a legszebb várospanoráma Észtországban), az Alexander Nevsky-katedrális és az óváros sikátorai után Telliskivi Creative City adja a mai Tallinn-képet. A finn nap: Tallink Megastar shuttleval Helsinkibe, Market Square + katedrális rövid blokkra, majd autóval keletre Porvoo faházas óvárosába (a finn kisváros-esszencia), visszafelé nyugatra Turku Castle-hoz és az Aura folyópart hajóéttermeibe — Viking Line overnight komppal Stockholm Värtahamnenbe. Ott az autó az Arlanda parkolóba kerül, Tibi pedig FI309-cel száll Keflavíkba.",
      points: [
        "🇱🇹 Kaunas → Vilnius: <a href='https://www.google.com/maps/search/?api=1&query=Laisves+aleja+Kaunas' target='_blank' rel='noreferrer'>Laisvės aleja</a> (★4.4) · <a href='https://www.google.com/maps/search/?api=1&query=Cathedral+Square+Vilnius' target='_blank' rel='noreferrer'>Cathedral Square</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Gediminas+Tower+Vilnius' target='_blank' rel='noreferrer'>Gediminas-torony</a> (★4.4) · <a href='https://www.google.com/maps/search/?api=1&query=Uzupis+Vilnius' target='_blank' rel='noreferrer'>Užupis negyed</a> (★4.5) · <a href='https://www.google.com/maps/search/?api=1&query=Trakai+Island+Castle' target='_blank' rel='noreferrer'>Trakai Island Castle</a> (★4.6)",
        "🇱🇻 Hill of Crosses → Riga: <a href='https://www.google.com/maps/search/?api=1&query=Hill+of+Crosses+Siauliai' target='_blank' rel='noreferrer'>Hill of Crosses</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=House+of+the+Black+Heads+Riga' target='_blank' rel='noreferrer'>House of the Black Heads</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Riga+Central+Market' target='_blank' rel='noreferrer'>Riga Central Market</a> (★4.5) · <a href='https://www.google.com/maps/search/?api=1&query=Alberta+iela+Riga+Art+Nouveau' target='_blank' rel='noreferrer'>Alberta iela Art Nouveau</a> (★4.7)",
        "🇱🇻→🇪🇪 Sigulda → Tallinn: <a href='https://www.google.com/maps/search/?api=1&query=Turaida+Castle+Sigulda' target='_blank' rel='noreferrer'>Turaida Castle</a> (★4.5) · <a href='https://www.google.com/maps/search/?api=1&query=Gutmanis+Cave+Sigulda' target='_blank' rel='noreferrer'>Gutmanis-barlang</a> (★4.4) · <a href='https://www.google.com/maps/search/?api=1&query=Toompea+Hill+Tallinn' target='_blank' rel='noreferrer'>Toompea kilátó</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Alexander+Nevsky+Cathedral+Tallinn' target='_blank' rel='noreferrer'>Alexander Nevsky-katedrális</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Telliskivi+Creative+City+Tallinn' target='_blank' rel='noreferrer'>Telliskivi Creative City</a> (★4.5)",
        "🇫🇮 Helsinki → Porvoo → Turku: <a href='https://www.google.com/maps/search/?api=1&query=Kauppatori+Helsinki' target='_blank' rel='noreferrer'>Helsinki Market Square</a> (★4.5) · <a href='https://www.google.com/maps/search/?api=1&query=Helsinki+Cathedral' target='_blank' rel='noreferrer'>Helsinki Katedrális</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Old+Town+Porvoo' target='_blank' rel='noreferrer'>Porvoo óváros</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Turku+Castle+Finland' target='_blank' rel='noreferrer'>Turku Castle</a> (★4.5) · Viking Line → Stockholm"
      ],
      cta: { label: "Részletes Baltikum oldal", tab: "baltikum" }
    },
    sharedIceland: {
      title: "Izland — Ring Road körút",
      accent: "accent-iceland",
      status: "júl. 18–26. · közös szakasz",
      statusClass: "status-green",
      text: "Az expedition csúcspontja: 8 nap (~1900 km) Izland teljes körbehajtásával — Henni a Erasmus+ kurzus végével csatlakozik, Tibi FI309-cel érkezik Keflavíkba júl. 18-án este. Az indulás Reykjavíkban telik: Hallgrímskirkja, Harpa koncertház, és este a Sky Lagoon tengerparti geotermikus fürdő a város peremén. A Ring Road első nagy ívét a Snæfellsnes-félsziget adja: Búðakirkja (az egyetlen fekete templomhomlokzatú izlandi egyház a lávaföldön), Arnarstapi bazaltsziklái és fókái, majd Kirkjufell — a világ legtöbbször fotografált hegye, szimmetrikus kúp egy kis vízesés előtt. Az északi blokk Akureyri városával (virágágyások az északi sarkkör közelében!), a Goðafoss 'istenek vízesésével' és a Mývatn-tóvidékkel folytatódik — forrongó krátersorok, áltufasüllyedék, csodás madárvilág. Keleten a fjordok kanyargós útjai és magányos tanyák, a félnapos Jökulsárlón gleccsertó a lebegő jégtömbökkel és a Diamond Beach vulkáni fekete homokján ragyogó jégdarabok zárják a keleti blokkot. A déli part a vízesések napja: Seljalandsfoss (mögé is lehet menni!), Skógafoss, és este a Reynisfjara fekete bazaltoszlopos tengerpart — majd Þórsmörk és Eyjafjallajökull kontúrja a láthatáron. Végül a Golden Circle zárja a kört: Þingvellir UNESCO-tektonikai hasadékvölgy, Geysir (az összes gejzír névadója), és a Gullfoss kettős vízesés, amelynek aranysárga falai viharban is lenyűgözőek.",
      points: [
        "Reykjavík: <a href='https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik' target='_blank' rel='noreferrer'>Hallgrímskirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik' target='_blank' rel='noreferrer'>Harpa</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Iceland' target='_blank' rel='noreferrer'>Sky Lagoon</a> (★4.4)",
        "Snæfellsnes: <a href='https://www.google.com/maps/search/?api=1&query=Budakirkja+Iceland' target='_blank' rel='noreferrer'>Búðakirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Arnarstapi+Iceland' target='_blank' rel='noreferrer'>Arnarstapi</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Kirkjufell+Iceland' target='_blank' rel='noreferrer'>Kirkjufell</a> (★4.7)",
        "Észak: <a href='https://www.google.com/maps/search/?api=1&query=Godafoss+waterfall+Iceland' target='_blank' rel='noreferrer'>Goðafoss</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Akureyri+Iceland' target='_blank' rel='noreferrer'>Akureyri</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Lake+Myvatn+Iceland' target='_blank' rel='noreferrer'>Mývatn-tóvidék</a> (★4.7)",
        "Kelet: <a href='https://www.google.com/maps/search/?api=1&query=Jokulsarlon+glacier+lagoon+Iceland' target='_blank' rel='noreferrer'>Jökulsárlón gleccsertó</a> (★4.9) · <a href='https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Iceland' target='_blank' rel='noreferrer'>Diamond Beach</a> (★4.8)",
        "Déli part: <a href='https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland' target='_blank' rel='noreferrer'>Seljalandsfoss</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Skogafoss+Iceland' target='_blank' rel='noreferrer'>Skógafoss</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Reynisfjara+black+sand+beach' target='_blank' rel='noreferrer'>Reynisfjara</a> (★4.7)",
        "Golden Circle: <a href='https://www.google.com/maps/search/?api=1&query=Thingvellir+National+Park+Iceland' target='_blank' rel='noreferrer'>Þingvellir</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Geysir+Iceland' target='_blank' rel='noreferrer'>Geysir</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Gullfoss+waterfall+Iceland' target='_blank' rel='noreferrer'>Gullfoss</a> (★4.8)"
      ],
      cta: { label: "Részletes Izland oldal", tab: "izland" }
    },
    sharedReturn: {
      title: "Stockholm → Hamburg → Frankfurt → Budapest",
      accent: "accent-return",
      status: "júl. 26 – aug. 3. · közös szakasz",
      statusClass: "status-cool",
      text: "A közös hazaút 9 napja (júl. 26 – aug. 3.) FI306-tal kezdődik: Keflavíkból Stockholm Arlandára (07:35 → 12:45), ahol az autó parkolóban vár. Két nap Stockholm jár az utazás után: a Vasa Museum egyedülálló 17. századi hadihajó-múzeuma, a Djurgården park és a Fotografiska fotómúzeum, este Gamla Stan macskakő-sikátorai. Malmö egy gyors kitérő a Turning Torso melletti sétával, majd jön az Øresund-átkelés — az ikonikus vegyes alagút-hídkombináció Dánia felé, Koppenhága Nyhavn-kikötőjénél rövid fénykép-megálló. Hamburgban kétnapnyi program vár: az első nap körút Lübeck UNESCO-óvárosába (Holstentor, Marienkirche, Niederegger marzipán) és a Schweriner Schloss tóban úszó neoromantikus kastélyához; a második nap Hamburg maga — Miniatur Wunderland (a világ legnagyobb vasúti makettje), a Speicherstadt+HafenCity UNESCO-zóna vörös tégla csatornahálózata, az Elbphilharmonie ingyenes kilátóteterraszával. Frankfurt egy teljes városnapot kap: Römerberg középkori főtér a Römer városháza homlokzatával, a Städel Museum Vermeer-Rembrandt-Monet kollekcióval, és Sachsenhausen negyed Apfelwein-kultúrájával (almabor Bembel-korsóból, Handkäse mit Musik kötelező kísérletként). Záróetap: Frankfurt → Budapest ~950 km, Nürnberg–Linz–Wien útvonalon, aug. 3-án délutánra haza.",
      points: [
        "🇸🇪 Stockholm (júl. 26–27.): <a href='https://www.google.com/maps/search/?api=1&query=Vasa+Museum+Stockholm' target='_blank' rel='noreferrer'>Vasa Museum</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=Fotografiska+Stockholm' target='_blank' rel='noreferrer'>Fotografiska</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Gamla+Stan+Stockholm' target='_blank' rel='noreferrer'>Gamla Stan</a> (★4.7)",
        "🇸🇪→🇩🇰 Malmö + Koppenhága (júl. 28–29.): <a href='https://www.google.com/maps/search/?api=1&query=Turning+Torso+Malmo' target='_blank' rel='noreferrer'>Turning Torso</a> (★4.3) · <a href='https://www.google.com/maps/search/?api=1&query=Oresund+Bridge' target='_blank' rel='noreferrer'>Øresund Bridge</a> (★4.5) · <a href='https://www.google.com/maps/search/?api=1&query=Nyhavn+Copenhagen' target='_blank' rel='noreferrer'>Nyhavn</a> (★4.6)",
        "🇩🇪 Hamburg körút (júl. 30.): <a href='https://www.google.com/maps/search/?api=1&query=Holstentor+Lubeck' target='_blank' rel='noreferrer'>Holstentor Lübeck</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Schweriner+Schloss' target='_blank' rel='noreferrer'>Schwerin Castle</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Niederegger+Marzipan+Lubeck' target='_blank' rel='noreferrer'>Niederegger marzipán</a> (★4.5)",
        "🇩🇪 Hamburg városnap (júl. 31.): <a href='https://www.google.com/maps/search/?api=1&query=Miniatur+Wunderland+Hamburg' target='_blank' rel='noreferrer'>Miniatur Wunderland</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=Speicherstadt+Hamburg' target='_blank' rel='noreferrer'>Speicherstadt</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Elbphilharmonie+Hamburg' target='_blank' rel='noreferrer'>Elbphilharmonie Plaza</a> (★4.7)",
        "🇩🇪 Frankfurt (aug. 2.): <a href='https://www.google.com/maps/search/?api=1&query=Roemerberg+Frankfurt' target='_blank' rel='noreferrer'>Römerberg</a> (★4.5) · <a href='https://www.google.com/maps/search/?api=1&query=Stadel+Museum+Frankfurt' target='_blank' rel='noreferrer'>Städel Museum</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Sachsenhausen+Frankfurt+Apfelwein' target='_blank' rel='noreferrer'>Sachsenhausen Apfelwein negyed</a> (★4.3) · aug. 3. → Budapest 🏁"
      ],
      cta: { label: "Részletes hazaút oldal", tab: "hazaut" }
    },
    henniErasmus: {
      title: "Erasmus+ · Izland · Inspiring Young Language Learners",
      accent: "accent-iceland",
      status: "2026. júl. 11–18. · Henni önálló szakasz",
      statusClass: "status-green",
      text: "Henni 2026. július 11-én repül Reykjavíkba (Wizz Air W62427, BUD → KEF, 15:40 → 18:20) egy Erasmus+ EU-támogatású pedagógiai kurzusra. A kurzus előtt két ráhangolódó napra van lehetőség Reykjavíkban — az izlandi fény, a gőzölgő tájak, az éjféli napsütés és az egészen másfajta városi ritmus fokozatos felfedezésére. Reykjavík nem egy rohanós nagyváros: Hallgrímskirkja toronykilátója, a Harpa koncertház tükröző üveghomlokzata és az óváros körüli kávézók adnak bőven csendes programot az első napokra. Július 13-án indul az 'Inspiring Young Language Learners' program, amelyet a Smart Teachers Play More szervez — az EU Erasmus+ által elismert, pedagógusoknak szóló módszertani kurzus. Hat napon át CLIL (Content and Language Integrated Learning) módszertan, STEAM-alapú kreatív feladatok, storytelling és mindfulness technikák, valós izlandi általános iskolai osztálylátogatások és csoportos workshopok adják a tartalmat. A kurzus olyan pedagógusoknak szól, akik fiatal nyelvtanulókat (óvoda, általános iskola, nyelvórák) tanítanak, és európai módszertani megközelítéseket visznek vissza az osztályterembe. Júl. 18-án ér véget a program — és este megérkezik Tibi a FI309-cel, innentől közösen indul a Ring Road körút.",
      points: [
        "✈️ Repülés: Wizz Air W62427 · BUD → KEF · 2026. július 11. · 15:40 → 18:20",
        "🏙 Ráhangolódás Reykjavíkban (júl. 11–12.): <a href='https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik' target='_blank' rel='noreferrer'>Hallgrímskirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik' target='_blank' rel='noreferrer'>Harpa</a> (★4.6) · csendes séták, kávézók, éjféli nap",
        "🎓 Erasmus+ kurzus: 2026. július 13–18. · Smart Teachers Play More szervezésében",
        "📚 Tartalom: CLIL módszertan · STEAM-feladatok · storytelling · mindfulness · izlandi iskolalátogatások",
        "👥 Célcsoport: óvoda, általános iskola, nyelvtanárok, CLIL és SNI pedagógusok",
        "📋 Course ID: 4497715 · Részvételi díj: €630/fő · Dokumentáció: Europass Mobility Document, Learning Agreement, Evaluation Form",
        "<a href='https://www.smartteachersplaymore.com/courses-iceland/inspiring-young-language-learners' target='_blank' rel='noreferrer'>→ Kurzus részletei (smartteachersplaymore.com)</a>"
      ],
      cta: { label: "Izlandi Ring Road — részletes oldal", tab: "izland" }
    },
    henniIceland: {
      title: "Közös izlandi Ring Road körút",
      accent: "accent-iceland",
      status: "júl. 18–26. · közös szakasz",
      statusClass: "status-green",
      text: "A kurzus vége után az igazi izlandi kaland következik — immár Tibivel közösen. Tibi júl. 18-án érkezik Keflavíkba (Icelandair FI309, Stockholm → KEF, 18:25), és innentől 8 napon át (~1900 km) teljesítik együtt a Ring Roadot, Izland teljes körbeautózását. Az út Reykjavíkból indul: Sky Lagoon geotermikus fürdő az első esten, másnap a Snæfellsnes-félsziget Búðakirkja fekete templomával, Arnarstapi bazaltkövein lazsáló fókáival, és a Kirkjufell hegycsúcs tükörképével a vízesés előtt — talán Izland legikonikusabb képe. Az északi blokkban Akureyri meglepően mediterrán hangulatú kisváros, Goðafoss az istenek vízesése (ahol az izlandi nép a régi pogány bálványokat a vízbe dobta 1000-ben), Mývatn-tóvidék forrongó krátersorokkal és áltufa-szoborerdőkkel. Keleten a fjordok magányos útjai és a Jökulsárlón gleccsertó — ahol a jégtömbök lassan sodródnak a tengerbe, a Diamond Beach-en fekete bazalthomokos parton csillognak. Déli part: Seljalandsfoss (mögé is be lehet menni!), Skógafoss (szivárványos, erős), Reynisfjara fekete bazaltoszlopos tengerpart. A Golden Circle zárja a kört: Þingvellir UNESCO-tektonikai hasadékvölgy, a Geysir (az összes gejzír névadója, búvárkodásig felforrósodó vizekkel), és Gullfoss kettős vízesése — az expedition egyik legimpozánsabb természeti állomása.",
      points: [
        "Találkozó: júl. 18. este, Keflavík — FI309 érkezés után",
        "Reykjavík: <a href='https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik' target='_blank' rel='noreferrer'>Hallgrímskirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Iceland' target='_blank' rel='noreferrer'>Sky Lagoon</a> (★4.4) · <a href='https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik' target='_blank' rel='noreferrer'>Harpa</a> (★4.6)",
        "Snæfellsnes: <a href='https://www.google.com/maps/search/?api=1&query=Budakirkja+Iceland' target='_blank' rel='noreferrer'>Búðakirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Arnarstapi+Iceland' target='_blank' rel='noreferrer'>Arnarstapi</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Kirkjufell+Iceland' target='_blank' rel='noreferrer'>Kirkjufell</a> (★4.7)",
        "Észak: <a href='https://www.google.com/maps/search/?api=1&query=Godafoss+waterfall+Iceland' target='_blank' rel='noreferrer'>Goðafoss</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Akureyri+Iceland' target='_blank' rel='noreferrer'>Akureyri</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Lake+Myvatn+Iceland' target='_blank' rel='noreferrer'>Mývatn-tóvidék</a> (★4.7)",
        "Kelet: <a href='https://www.google.com/maps/search/?api=1&query=Jokulsarlon+glacier+lagoon+Iceland' target='_blank' rel='noreferrer'>Jökulsárlón</a> (★4.9) · <a href='https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Iceland' target='_blank' rel='noreferrer'>Diamond Beach</a> (★4.8)",
        "Déli part: <a href='https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland' target='_blank' rel='noreferrer'>Seljalandsfoss</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Skogafoss+Iceland' target='_blank' rel='noreferrer'>Skógafoss</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Reynisfjara+black+sand+beach' target='_blank' rel='noreferrer'>Reynisfjara</a> (★4.7)",
        "Golden Circle: <a href='https://www.google.com/maps/search/?api=1&query=Thingvellir+National+Park+Iceland' target='_blank' rel='noreferrer'>Þingvellir</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Geysir+Iceland' target='_blank' rel='noreferrer'>Geysir</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Gullfoss+waterfall+Iceland' target='_blank' rel='noreferrer'>Gullfoss</a> (★4.8) · júl. 26. FI306 → Stockholm"
      ],
      cta: { label: "Izland részletes oldal", tab: "izland" }
    }
  },
  people: {
    tibi: {
      kicker: "3 nagy blokkban nézve",
      title: "Tibi",
      intro: "Itt direkt a te általad kért háromdobozos felosztás látszik: külön autós felvezetés, külön izlandi blokk, majd a közös skandináv–német hazaút.",
      stageKeys: ["tibiBaltic", "sharedIceland", "sharedReturn"]
    },
    henni: {
      kicker: "3 boxos nézet",
      title: "Henni",
      intro: "Henni szála három részből áll: júl. 11-én érkezik Izlandra, júl. 13–18. Erasmus+ pedagógiai kurzus (Smart Teachers Play More), majd júl. 18-tól a közös Ring Road körút Tibivel, végül a közös skandináv–német hazaút.",
      stageKeys: ["henniErasmus", "henniIceland", "sharedReturn"]
    }
  },
  sections: {
    baltikum: {
      kicker: "Tibi részletes első szakasza",
      title: "Baltikum",
      pill: "Budapest → Baltikum → Stockholm",
      accent: "baltic",
      intro: [
        "Ez a rész ugyanarra a logikára épül, mint a Közép-Ázsia oldalon az Üzbegisztán blokk: van egy rövid ország- és útvonal-keret, utána pedig jön a napi részletes bontás.",
        "A július 17-i nap egy teljes finn nap: Tallinn → Helsinki (Tallink Shuttle) + helsinki blokk + Turku Castle + Viking Line overnight. A július 18-i nap korai stockholmi érkezéssel indul (06:30) és FI309-cel zárul (17:10 → Reykjavík)."
      ],
      context: [
        {
          title: "🇱🇹 Litvánia · Vilnius és Trakai",
          accent: "baltic",
          open: true,
          cards: [
            {
              title: "Miért fontos ezen az úton?",
              paragraphs: [
                "Vilnius adja az első rendes kulturális megérkezést a hosszú lengyel tranzit után. Nem túl nagy, ezért könnyen élvezhető autós felvezető út közben is.",
                "Trakai azért jó másnapi kitérő, mert nem szakítja szét a ritmust, mégis ad egy markáns váras-tavas settinget."
              ]
            },
            {
              title: "Utazási logika",
              paragraphs: [
                "Itt érdemes city center közeli, saját parkolós hotelt keresni, mert a vezetős etap után már gyalogos ritmus kell.",
                "A litván szakasz ereje nem a túltömésben, hanem a levegővételben van."
              ]
            },
            {
              title: "Mit kell ebből megőrizni?",
              paragraphs: [
                "Vilnius maradjon laza esti érkezés + másnapi normális városnap, ne csak alvóállomás.",
                "Trakai maradjon rövid, tiszta kitérő, ne teljes napos szétesés."
              ]
            }
          ]
        },
        {
          title: "🇱🇻 Lettország · Riga és Gauja",
          accent: "baltic",
          cards: [
            {
              title: "Riga szerepe",
              paragraphs: [
                "Riga a balti út legvárosiasabb állomása. A két erős fókusz: óváros és Art Nouveau negyed, plusz az, hogy ez legyen egy lazább nap a sok vezetés közt."
              ]
            },
            {
              title: "Gauja NP / Sigulda",
              paragraphs: [
                "A Gauja-blokk jó ellenpont Tallinn előtt: nem újabb sűrű city day, hanem út menti, táj- és kilazító etap."
              ]
            },
            {
              title: "Ritmus",
              paragraphs: [
                "A Riga-nap itt azért fontos, mert nélküle túl tranzitos lenne a teljes balti szál."
              ]
            }
          ]
        },
        {
          title: "🇪🇪 / 🇫🇮 / 🇸🇪 Észtország, Finn átmenet, Stockholm-logika",
          accent: "nordic",
          cards: [
            {
              title: "Tallinn",
              paragraphs: [
                "Tallinn nem csak egy újabb város, hanem a tengeri átmenet logisztikai kapuja. Kikötő közeli alvás ezért praktikus."
              ]
            },
            {
              title: "Finn átmenet",
              paragraphs: [
                "Július 17-én egy teljes finn nap kerül be: Tallinn → Helsinki (Tallink Shuttle, 2h), Helsinki gyors városblokk (~2h: Kauppatori, Katedrális), autóval Helsinki → Turku (~1,5h), Turku Castle + Aura folyópart délután, majd Viking Line overnight Turkuból Stockholmba (20:00 → 06:30). Ez a Turku–Stockholm vonal (10,5h) sokkal rövidebb, mint a korábban tervezett Helsinki–Stockholm (18h), és jobb puffert ad az FI309 elé."
              ]
            },
            {
              title: "Stockholm / Arlanda",
              paragraphs: [
                "Stockholm ebben a tervben nem önálló sightseeing város, hanem a parkolás, ferry-zárás és repülőtéri átadás helye."
              ]
            }
          ],
          links: [
            { label: "Tallink Tallinn–Stockholm ferry", url: "https://www.tallink.com/dk-en/travelling/one-way/tallinn-stockholm-ferry" },
            { label: "Tallink Helsinki–Tallinn shuttle", url: "https://www.siljatallink.fi/en/web/int/tallink-shuttle-megastar-helsinki-tallinn-helsinki" },
            { label: "Swedavia Arlanda parking", url: "https://www.swedavia.se/en/arlanda/parking/" }
          ]
        }
      ],
      days: [
        {
          num: "1",
          date: "2026. július 10., péntek",
          title: "Budapest → Suwałki (Lengyelország)",
          subtitle: "Tranzitnyitó nap — Varsót teljesen kihagyjuk",
          open: true,
          driveLog: { km: "~900 km", stops: 2, driveTime: "~10 óra", depart: "07:00", arrive: "~20:00", timelinePoints: [{time:"07:00", label:"Budapest ind."}, {time:"13:00", label:"~félúton"}, {time:"20:00", label:"Suwałki"}] },
          tags: [
            { label: "tranzit", cls: "tag-drive" },
            { label: "8–10h", cls: "tag-drive" }
          ],
          activities: [
            { time: "07:00", icon: "🚗", name: "Indulás Budapestről — M3/E77 észak felé", detail: "A teljes expedition első napja, kifejezetten tranzit-fókuszban. Varsót NEM érintjük: az E77-es Miskolcon, Egerben át visz fel, majd Lengyelországba belépés Visnyón (Visinë) keresztül." },
            { time: "13:00", icon: "⛽", name: "~Félúton pihenő — Varsó elkerülésével", detail: "A legjobb útvonal Varsó megkerülésével: BUD → Miskolc → Torún → Suwałki. Varsó csak időt és ideget visz el, ki sem kell menni a városba." },
            { time: "20:00", icon: "🛏", name: "Suwałki — tranzitszállás", detail: "Suwałki ideális alvóhely: közel a litván határhoz, másnap könnyen indulhatsz Kaunas/Vilnius felé. Augustów szebb (tóparti), de ha csak tranzit, Suwałki praktikusabb." }
          ],
          notes: ["Varsót TELJESEN kihagyjuk — be se megyünk, csak időt és ideget visz el.", "Suwałki a legjobb tranzitpont: 30 km-re a litván határtól, másnap könnyen indulhatsz Kaunas felé.", "Alternatív alvó: Augustów (~30 km) — tópartosabb, szebb, de ha csak tranzit, Suwałki praktikusabb."]
        },
        {
          num: "2",
          date: "2026. július 11., szombat",
          title: "Suwałki → Kaunas → Vilnius · Henni BUD → KEF",
          subtitle: "Litvánia érkezés Kaunas rövid stoppal — Henni is ma repül Izlandra",
          driveLog: { km: "~380 km", stops: 3, driveTime: "~5 óra", depart: "08:00", arrive: "~19:00", timelinePoints: [{time:"08:00", label:"Suwałki ind."}, {time:"10:00", label:"Kaunas"}, {time:"12:30", label:"Kaunas → Vilnius"}, {time:"19:00", label:"Vilnius"}] },
          tags: [
            { label: "Kaunas stop", cls: "tag-focus" },
            { label: "Vilnius", cls: "tag-city" }
          ],
          activities: [
            { time: "08:00", icon: "🚗", name: "Suwałki → litván határ → Kaunas (~190 km)", detail: "Rövid reggeli etap, a litván határ könnyen átlépős, Kaunas 2 óra Suwałkiból." },
            { time: "10:00–12:00", icon: "🏙", name: "Kaunas — rövid city stop (ebéd + séta)", detail: "Kaunas nem igényel teljes napot, de megér egy jó 2 órás stopot: Laisvės aleja (a leghosszabb sétálóutca a Baltikumban), Kaunas Castle (rövid kültéri nézelődés), Soboras (neogótikus Kristus Feltámadása-bazilika). Ebéd a sétálóutca melletti kávézóban." },
            { time: "12:30", icon: "🚗", name: "Kaunas → Vilnius (~100 km, ~1,5h)", detail: "Egyenes autópályaetap, Litvánia két legnagyobb városát összekötő E85-ös." },
            { time: "14:30–19:00", icon: "🌆", name: "Vilnius esti érkezés — Cathedral Square séta", detail: "Bejelentkezés, majd első rövid séta a Cathedral Square (Katedros aikštė) felé — az óváros zárása előtt megéri a teret megnézni. Vacsora és ráhangolódás a holnapi teljes városnapra." },
            { time: "párhuzamos szál", icon: "✈️", name: "Henni: BUD → KEF, Wizz Air W62427", detail: "15:40 → 18:20 — Erasmus kurzusra indul Izlandra (Smart Teachers Play More, júl. 13–18.). 2 nap ráhangolódás, majd júl. 13-án kezdődik a kurzus." }
          ],
          notes: ["Kaunas csak ebéd/séta, nem alszunk itt — de a Laisvės aleja és egy kávé tök jó ráhangolódás.", "Vilnius belváros közelében érdemes szállást venni: Old Town / Cathedral Square / Užupis széle a legjobb bázis.", "Tibiéknél itt még balti felvezetés van, Henni ma repül Izlandra az Erasmus kurzusra."]
        },
        {
          num: "3",
          date: "2026. július 12., vasárnap",
          title: "Vilnius + Trakai",
          subtitle: "Első teljes balti city day — óváros, Gediminas, Užupis, Trakai Castle",
          driveLog: { km: "~60 km (Trakai oda-vissza)", stops: 3, driveTime: "~1 óra", depart: "09:00", arrive: "~20:00", timelinePoints: [{time:"09:00", label:"Cathedral Square"}, {time:"11:00", label:"Gediminas-torony"}, {time:"13:00", label:"Trakai (28 km)"}, {time:"16:30", label:"vissza Vilnius"}] },
          tags: [
            { label: "óváros", cls: "tag-city" },
            { label: "Gediminas", cls: "tag-focus" },
            { label: "Trakai", cls: "tag-focus" }
          ],
          activities: [
            { time: "09:00", icon: "⛪", name: "Cathedral Square + Vilnius Katedrális", detail: "A Katedros aikštė a város szíve: a neoklaszszikus székesegyházzal, a harangtoronnyal és a hatalmas térrel. Reggeli séta ide az igazi vilniusi nyitókép. Google Reviews: ★4.7 — 'Lenyűgöző tér, különösen korán reggel.'" },
            { time: "10:00", icon: "🏰", name: "Gediminas-torony (Gedimino pilies bokštas)", detail: "A városra néző dombtetőn álló háromszintes vártorony, panoráma kilátóval Vilnius felett. Belépő: ~€5. Google Reviews: ★4.6 — 'A legjobb kilátó a városra, megéri a mászást.'" },
            { time: "11:00", icon: "🎨", name: "Užupis negyed — a vilniusi Montmartre", detail: "Az óváros keleti szélén önálló 'köztársaságnak' nyilvánított bohém negyed, saját alkotmánnyal (a falon olvasható, magyarul is!). Murális graffitik, kávézók, kis galériák, a Vilnia folyóparti sétány. Google Reviews: ★4.5 — 'Hangulatos, kreatív és nem turista-ipari.'" },
            { time: "13:00", icon: "🚗", name: "Vilnius → Trakai (~28 km, ~30 perc)", detail: "Rövid autóút nyugat felé a tórendszer felé. Trakainál parkolj a főbejáratnál és gyalogolj." },
            { time: "13:30", icon: "🏰", name: "Trakai Island Castle (Trakų salos pilis)", detail: "Piros tégla középkori kastély a tavak között, kiskomp vagy part menti séta visz oda. Belépő: ~€8. Google Reviews: ★4.6 — 'Mesés helyszín, a víz tükrében fantasztikus.' Ajánlott idő: 1,5–2 óra." },
            { time: "15:30", icon: "🥟", name: "Kibinai — kötelező trakai megálló", detail: "A trakai tatár közösség hagyományos töltelékese (hús + hagyma, sütött tészta). Minden parti vendéglőben kapható — ez az egyetlen elmaradhatatlan gasztró-élmény Trakainál. Négy az igazi szám." },
            { time: "16:30", icon: "🚗", name: "Vissza Vilniusba + esti séta", detail: "Visszatérés, majd az óváros esti hangulata: Pilies utca, a Senamiestis éttermei. Jó vacsora-tipp: Lokys (vaddisznó, szarvas, litván vadételek) vagy Ertlio Namas (modern litván konyha)." }
          ],
          notes: ["Vilniusi szállás: Old Town / Cathedral Square / Užupis széle — ezekből a negyed gyalogos.", "Gediminas-torony: kora reggeli nyitás előnye, hogy a kilátón kevesen vannak.", "Trakai: vasárnap is nyitva, de nyáron tolong — 13:00 utáni érkezés jobb (a reggeli csúcs múlt).", "Kibinai: Senoji Kibininė étterem a legismertebb, de bármelyik parti hely adja."]
        },
        {
          num: "4",
          date: "2026. július 13., hétfő",
          title: "Vilnius → Riga",
          subtitle: "Hill of Crosses megállóval",
          driveLog: { km: "~300 km", stops: 3, driveTime: "~4 óra", depart: "09:00", arrive: "~18:00", timelinePoints: [{time:"09:00", label:"ind. Vilnius"}, {time:"11:30", label:"Hill of Crosses"}, {time:"18:00", label:"Riga érk."}] },
          tags: [
            { label: "~300 km", cls: "tag-drive" },
            { label: "Hill of Crosses", cls: "tag-focus" }
          ],
          activities: [
            { time: "reggel", icon: "🚗", name: "Indulás Riga felé", detail: "Rövidebb etap, mint az előző tranzitnapok." },
            { time: "napközben", icon: "⛪", name: "Hill of Crosses", detail: "Jó út menti törés, ami karaktert ad a Riga-napnak." },
            { time: "este", icon: "🌆", name: "Esti Riga", detail: "Már csak rövid városi séta kell, a teljes Riga-nap másnap jön." }
          ],
          notes: ["Ez jó köztes nap: nem üres vezetés, de nem is túl hosszú."]
        },
        {
          num: "5",
          date: "2026. július 14., kedd",
          title: "Riga",
          subtitle: "City day — óváros, Black Heads, Central Market, Art Nouveau, Daugava-part",
          driveLog: { km: "~5 km (gyalogos nap)", stops: 5, driveTime: "gyalogos nap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"Old Town"}, {time:"11:00", label:"Central Market"}, {time:"14:00", label:"Alberta iela"}, {time:"17:00", label:"Daugava-part"}, {time:"19:30", label:"vacsora"}] },
          tags: [
            { label: "Black Heads", cls: "tag-focus" },
            { label: "Art Nouveau", cls: "tag-city" },
            { label: "Central Market", cls: "tag-city" }
          ],
          activities: [
            { time: "09:00", icon: "🏛", name: "Riga Old Town — Rātslaukums tér", detail: "A rigai óváros kompakt és sűrű. Rātslaukums (Városháza tér) a legjobb kezdőpont: a Fekete Fejek Háza (House of the Black Heads) és a Városháza egymással szemben. Riva sétány az Óváros part-oldali zónája." },
            { time: "09:30", icon: "🖤", name: "House of the Black Heads (Melngalvju nams)", detail: "Riga legfotogénebb épülete: flamboyant gótikus-reneszánsz kereskedő-céhház, amit WWII-ban lerombóltak és 1999-re teljesen újjáépítettek. Belülről kisebb kiállítás, de a homlokzat önmagában ikonikus. Google Reviews: ★4.6 — 'Elképesztően szép homlokzat, kötelező.'" },
            { time: "10:30", icon: "⛪", name: "Riga Old Town séta — Dóm tér, Három Testvér", detail: "A Dóm (Rīgas Doms) egy hatalmas középkori katedrális — Észak-Európa egyik legnagyobb temploma. A 'Három Testvér' (Trīs brāļi) 15-17. sz.-i házak egymás mellett — a legjobb középkori utcakép Rigában." },
            { time: "12:00", icon: "🛒", name: "Riga Central Market (Centrāltirgus)", detail: "Öt hatalmas zeppelin-hangárban működő fedett piac — Európa egyik legnagyobb fedett piaca (1930-as évek). Hal, húscsarnok, zöldség, rigai fekete balzám, helyi édességek. Google Reviews: ★4.5 — 'Teljesen egyedi hangulat, kötelező megálló.' Ebéd itt: friss hal és rozskenyér." },
            { time: "14:00", icon: "🏙", name: "Art Nouveau negyed — Alberta iela 13.", detail: "Alberta iela Riga Art Nouveau-negyedének szíve: a sor leglátványosabb homlokzatai a 2-es, 4-es, 6-os, 8-as és 13-as számok. Az épületek ~1901–1906 Mikhail Eisenstein (Eisenstein filmrendező apja!) tervei szerint épültek. Ingyenes, az utcáról fotózható. Google Reviews: ★4.7." },
            { time: "16:00", icon: "🎨", name: "Elizabetes iela + Strēlnieku iela Art Nouveau séta", detail: "Az Alberta iela után az Elizabetes utca folytatja az Art Nouveau ívet. Az egész negyed (~1 km sugarú) UNESCO-figyelemben részesített — Riga Art Nouveau-épületek sűrűsége világrekord." },
            { time: "17:30", icon: "🌊", name: "Daugava folyópart esti séta", detail: "A folyópart (Daugavas krastmala) a AB Dambis sétányán — a legjobb esti rigai panoráma. Innen látszik a Dóm tornya, a Vanšu-híd és a folyó széles öble. Jó helyszín kávézáshoz." },
            { time: "19:30", icon: "🍺", name: "Vacsora — Rigai sörkultúra", detail: "Labietis brewery & bar (craft sör, helyi élelmiszer) vagy Folkklubs Ala Pagrabs (lett hagyományos étterem, élőzene, középkori hangulat pincében). Pelēkie zirņi ar speķi (szürke borsó szalonnával) kötelező megkóstolni." }
          ],
          notes: ["Art Nouveau séta: a legjobb ingyenes programok egyike Rigában. Nem kell múzeumjegy, csak az utca.", "Alberta iela 2-es számban van az Art Nouveau Múzeum (belépő ~€6) ha mélyebbre mennétek.", "Riga Central Market: hétköznap reggel 8-tól, de 12 utánra a legfrissebb áruk elkelnek — délelőtt ideális.", "Fekete Fejek Háza belépő: ~€6 — ha csak kívülről nézed, az is elég, de a belső termek szépek."]
        },
        {
          num: "6",
          date: "2026. július 15., szerda",
          title: "Riga → Sigulda / Turaida → Tallinn",
          subtitle: "Gauja-völgy átmeneti nap — Turaida Castle, Gutmanis Cave, este Tallinn",
          driveLog: { km: "~350 km", stops: 3, driveTime: "~4,5 óra", depart: "08:00", arrive: "~20:00", timelinePoints: [{time:"08:00", label:"ind. Riga"}, {time:"09:30", label:"Sigulda/Turaida"}, {time:"13:00", label:"Tallinn felé"}, {time:"20:00", label:"Tallinn érk."}] },
          tags: [
            { label: "~350 km", cls: "tag-drive" },
            { label: "Turaida Castle", cls: "tag-focus" },
            { label: "Gauja NP", cls: "tag-nature" }
          ],
          activities: [
            { time: "08:00", icon: "🚗", name: "Indulás Rigából — Sigulda ~50 km, ~40 perc", detail: "Rövid reggeli etap, gyorsan kint vagyunk a városból." },
            { time: "09:30", icon: "🏰", name: "Turaida Castle (Turaidas pils)", detail: "Vörös tégla középkori vár a Gauja-völgy kiemelkedő pontján, fantasztikus kilátással a folyóvölgyre. Belépő: ~€4. Google Reviews: ★4.5 — 'Jobb kilátás mint Sigulda várától, és kevésbé turista-teli.' Nyitva 10:00–17:00." },
            { time: "10:30", icon: "🪨", name: "Gutmanis-barlang (Gūtmaņala)", detail: "Lettország legnagyobb barlangja, a Gauja sziklafalaiban. A homokkő falain évszázados feliratokat véstek be utazók (1668-tól dokumentált!). Ingyenes, rövid séta a folyóparton. Google Reviews: ★4.4 — 'Meglepően misztikus hangulat.'" },
            { time: "11:30", icon: "🌲", name: "Gauja-völgy kilátók — opcionális Sigulda-séta", detail: "Sigulda kastélyromok (Siguldas pilsdrupas) és a Gauja-völgy panorámája. Ha van idő: a kábeles gondola (Gauja-gondola) a völgy felett az egyik legegyedibb balti élmény. Google Reviews: ★4.6." },
            { time: "13:00", icon: "🚗", name: "Sigulda → Pärnu → Tallinn (~300 km)", detail: "Észtországba belépés, Pärnu rövid megállólehetőség (ha van energia): homokos tengerparti üdülőváros, de ha Sigulda benne van, inkább kávé-megálló szinten." },
            { time: "20:00", icon: "⚓", name: "Tallinn — Rotermann / Sadama negyed szállás", detail: "Tallinnban a Rotermann / Sadama negyed a legjobb autós bázis: közel a kompterminálhoz, közel az óvároshoz, van parkoló. A másnapi Tallink miatt kikötő-közeli lokáció kifizetődik." }
          ],
          notes: ["Turaida Castle: jobb kilátás és kevesebb tömeg mint a siguldai castle romok — inkább ezt válaszd ha csak egyet.", "Gutmanis-barlang: a Turaida kastélyból gyalogosan is elérhető (erdei ösvény, ~15 perc).", "Pärnu: ha Sigulda tele volt programmal, Pärnu legyen csak gyors kávé. Ha Sigulda rövid volt, egy fél óra tenger-pillantás jó.", "Tallinn szállás: Rotermann / Sadama / Old Town széle — autóval ide a legpraktikusabb bemenni."]
        },
        {
          num: "7",
          date: "2026. július 16., csütörtök",
          title: "Tallinn",
          subtitle: "Toompea · óváros · Alexander Nevsky · Telliskivi · Lennusadam",
          driveLog: { km: "~6 km (gyalogos nap)", stops: 5, driveTime: "gyalogos nap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"Toompea domb"}, {time:"11:00", label:"Alexander Nevsky"}, {time:"13:00", label:"Vanalinn óváros"}, {time:"16:00", label:"Telliskivi"}, {time:"19:00", label:"vacsora"}] },
          tags: [
            { label: "Toompea", cls: "tag-focus" },
            { label: "óváros", cls: "tag-city" },
            { label: "Telliskivi", cls: "tag-city" }
          ],
          activities: [
            { time: "09:00", icon: "🏛", name: "Toompea domb — Kohtuotsa kilátó", detail: "Tallinn fellegvára és a legjobb kilátópont a városra. Két főbb kilátó: Kohtuotsa platoo (templomtornyok + Vanalinn piros tetők) és Patkuli terasz (kikötő + tenger felé). Google Reviews: ★4.7 — 'Az egyik legjobb kilátó egész Észtországban.'" },
            { time: "10:00", icon: "⛪", name: "Alexander Nevsky-katedrális", detail: "Az orosz ortodox katedrális Toompea dombján — hagyma-kupolás, pompás épület, kontrasztban a lutheránus tallinni óvárossal. Belépő: ingyenes. Google Reviews: ★4.7 — 'Belülről is gyönyörű, és az ikonosztatész kivételes.'" },
            { time: "11:00", icon: "🏰", name: "Tallinn óváros (Vanalinn) séta — Raekoja plats", detail: "Raekoja plats (Városháza tér) a középkori óváros szíve — a városháza (1402) és a 'Vana Toomas' figura az egyik legkorábbi toronyóra a Baltikumban. Sétáló sikátorok: Katariina käik, Pikk tänav (Hosszú utca)." },
            { time: "12:30", icon: "🍞", name: "Ebéd az óvárosban — Leib Resto", detail: "Leib Resto & Aed: az egyik legjobb észt hagyományos étterem rozskenyér-tematikával. Véres kolbász, sült sertés, észt sajt. Google Reviews: ★4.6. Alternatíva: Olde Hansa (középkori étterem élőzenével — turista, de szórakoztató)." },
            { time: "14:00", icon: "🚂", name: "Telliskivi Creative City", detail: "A vasúti műhelyek helyén kialakult alternatív negyedben design üzletek, street art murálisok, kézműves sörmalmok (Põhjala Brewery taproom), kávézók. Nem turista-hely, hanem ahol a tállinniak vannak. Google Reviews: ★4.5 — 'A leghitelesebb része a mai Tallinnnak.'" },
            { time: "16:00", icon: "✈️", name: "Lennusadam / Seaplane Harbour (opcionális)", detail: "Ha marad energia: a repülőhajó-hangárban működő tengeri múzeum — Lembit tengeralattjáró, hidroplán-hangar, jégtörő Suur Tõll. Google Reviews: ★4.6 — 'Elképesztő épület, a tengeralattjáró belülről is bejárható.' Belépő: ~€14." },
            { time: "19:00", icon: "🍺", name: "Esti vacsora + komp előtti packing", detail: "Vacsora: Põhjala Tap Room (craft sör + ételek) vagy a Telliskivi-negyedben bármely teraszos hely. Komp (Tallink Megastar) másnap 10:30 indul — az autóval való beállás 09:30-ra kell, érdemes estére kész lenni." }
          ],
          notes: ["Tallinn autós logisztika: parkolj a Rotermann / Sadama negyed P-jában, az óvárosba nem érdemes behajtani.", "Kompterminál: Tallinn D-terminál (a Sadama negyedtől 5 perc gyalog). Autós boarding kb. 09:00-tól a 10:30-as menetrendnél.", "Lennusadam: ha elfáradt láb és kevés energia, ezt el is lehet hagyni — Toompea + Telliskivi a fontosabb.", "Toompea és Vanalinn együtt ~3-4 óra; Telliskivi még 1,5 óra — a nap könnyen betellik."]
        },
        {
          num: "8",
          date: "2026. július 17., péntek",
          title: "Helsinki + Porvoo + Turku — Finn nap",
          subtitle: "Tallink shuttle Helsinkibe → Helsinki rövid → Porvoo óváros → Turku → Viking Line overnight",
          driveLog: { km: "~240 km (Helsinki → Porvoo → Turku)", stops: 6, driveTime: "~2,5 óra", depart: "10:30", arrive: "20:00", timelinePoints: [{time:"10:30", label:"Tallinn ind."}, {time:"12:30", label:"Helsinki"}, {time:"13:30", label:"Porvoo"}, {time:"15:30", label:"→ Turku"}, {time:"17:30", label:"Turku"}, {time:"20:00", label:"Viking Line"}] },
          tags: [
            { label: "Helsinki", cls: "tag-city" },
            { label: "Porvoo", cls: "tag-focus" },
            { label: "Turku", cls: "tag-city" },
            { label: "Viking Line", cls: "tag-ferry" }
          ],
          activities: [
            { time: "10:30", icon: "🚢", name: "Tallinn → Helsinki (Tallink Shuttle)", detail: "Tallink Megastar, 10:30 → 12:30. A világ egyik legnagyobb és legmodernebb komp-járata, kényelmes átkelés." },
            { time: "12:30–13:00", icon: "🏙", name: "Helsinki gyors blokk — Market Square + Katedrális", detail: "Market Square (Kauppatori) + Helsinki Katedrális: a két legikonikusabb helsinki kép 30 perc alatt megvan. Ha van 15 extra perc: Uspenski-katedrális a dombon. Autóval a kikötőnél parkolni rövid stophoz." },
            { time: "13:00–13:45", icon: "🚗", name: "Helsinki → Porvoo (~50 km keletre, ~45 perc)", detail: "E18-as autópályán, majd le a 7-esre Porvoo felé. Porvoo Helsinkitől keletre van, az ellenkező irányban mint Turku — de megéri a kitérőt." },
            { time: "13:45–15:30", icon: "🏘", name: "Porvoo — faházas óváros séta", detail: "Porvoo Finnország második legidősebb városa. A régi óváros (Vanha Porvoo) faházas negyede teljesen egyedi: piros, okker és sárga festett faházak a folyóparton. A legszebb nézet az Old Town Bridge (Porvoonjoki) felőli part. Kevesebb turista mint Helsinkiben, hangulatosabb esti feeling. Google Reviews: ★4.6 — 'Ha csak egy finn kisvárost nézel meg, ez legyen.' Kb. 1,5 óra ideális." },
            { time: "15:30–17:30", icon: "🚗", name: "Porvoo → Turku (~190 km, ~2 óra)", detail: "E18-as autópályán, Helsinkitől nyugatra. Egyenes, jó minőségű finn autópálya." },
            { time: "17:30–19:30", icon: "🏰", name: "Turku: Castle + Aura folyópart", detail: "Turku Castle (Turun linna) 1-1,5 óra, majd Aura folyópart — hajóéttermek, Market Hall, Turku katedrális. Ha Porvoo sok időt vett el, az Aura folyópart vacsora fontosabb mint a Castle." },
            { time: "20:00", icon: "🚢", name: "Viking Line boarding Turkuból", detail: "Viking Grace vagy Viking Glory, Turku → Mariehamn (Åland-szigetek) → Stockholm Värtahamnen. Megérkezés 06:30." }
          ],
          notes: [
            "⚠️ Viking Line vs. régi terv: A Helsinki→Stockholm overnight ferry (Silja Symphony) 18 óra és 16:45-kor indul — így alig 4 óra maradt volna Helsinkiben. A Turku–Stockholm vonal (Viking Line) csak 10,5 óra, reggel 06:30-ra ér Stockholmba — sokkal jobb puffer az FI309 elé.",
            "Porvoo kitérő: Porvoo KELETRE van Helsinkitől, Turku NYUGATRA — így a Porvoo → Turku táv ~240 km (vs. direkt Helsinki → Turku 170 km). Ez ~1 óra extra menetidőt jelent, de Porvoo ezt megéri: hangulatosabb mint egy extra Helsinki-kör.",
            "Ha Porvoo kiesik (pl. késő indulás Tallinnból): Helsinki rövid blokk (+Temppeliaukio sziklakirkko opcionálisan) → Turku → Viking Line. Ez is jó terv.",
            "Turku Castle (Turun linna): Finnország egyik legidősebb és legimpozánsabb középkori kastélya, a kikötő tövénél. Nyitva 10:00–18:00. Belépő ~€10.",
            "Aura folyópart (Aurajoki): hajóéttermek, kávézók, a helyi diákok és turisták egyforma kedvence.",
            "Kompok még nem foglaltak — mind a Tallink Shuttle (Tallinn–Helsinki), mind a Viking Line (Turku–Stockholm) tervezett státuszban van.",
            "Viking Line foglalás: vikingline.com — kabinos overnight menetrend Turkuból kb. 20:00, Stockholm 06:30."
          ],
          gpxPlaces: [
            { name: "Helsinki Market Square (Kauppatori)", badge: "helsinki főpont", duration: "30–40 perc", reviewNote: "A város szíve a kikötő és a piac között — a Régi Csarnokkal (Old Market Hall) együtt a leghatékonyabb helsinki megálló · 4.5 ★", detail: "A klasszikus Helsinki-kép: piac, kikötő, Katedrális a háttérben.", maps: "https://www.google.com/maps/search/?api=1&query=Kauppatori+Helsinki" },
            { name: "Helsinki Katedrális", badge: "helsinki főpont", duration: "15–20 perc", reviewNote: "Fehér neoklasszikus kupola a Senaatintori felett — az egyik legismertebb finn épület, kötelező fotómegálló · 4.7 ★", detail: "A tér és a homlokzat már kívülről is nagyon erős kép, belépő nem kell.", maps: "https://www.google.com/maps/search/?api=1&query=Helsinki+Cathedral" },
            { name: "Temppeliaukio Church (sziklakirkko)", badge: "helsinki opcionális", duration: "25–35 perc", reviewNote: "Sziklába vájt körtemtemplom — akusztikailag és vizuálisan egyaránt lenyűgöző, de ki kell rá menni az útból · 4.7 ★", detail: "Ha marad idő a helsinki blokkból, ez a 30 perces extra nagyon megéri.", maps: "https://www.google.com/maps/search/?api=1&query=Temppeliaukio+Church+Helsinki" },
            { name: "Uspenski-katedrális", badge: "helsinki rövid", duration: "15 perc", reviewNote: "Vörös tégla ortodox katedrális a kikötői dombon — gyors képmegálló a piactér sétájához igazítva · 4.6 ★", detail: "Keletről nézve a Senaatintori fehér katedrálisával együtt a legjobb kettős városképi pont.", maps: "https://www.google.com/maps/search/?api=1&query=Uspenski+Cathedral+Helsinki" },
            { name: "Turku Castle (Turun linna)", badge: "turku főpont", duration: "60–90 perc", reviewNote: "Finnország egyik legidősebb épülete (1280-as évek!), a kikötő tövénél — komoly múzeumi tartalom, a középkori részek különösen erősek · 4.5 ★", detail: "Középkori kastély és múzeum a Turku-kikötő mellett; belépő ~€10, nyitva 10:00–18:00.", maps: "https://www.google.com/maps/search/?api=1&query=Turku+Castle+Finland" },
            { name: "Turku Katedrális (Turun tuomiokirkko)", badge: "turku főpont", duration: "20–30 perc", reviewNote: "Finnország legnagyobb és legfontosabb temploma — a régi főváros történelmi szívpointja, belépése ingyenes · 4.6 ★", detail: "Közvetlenül gyalogolható a kastélyból, a Turku-sétány mentén.", maps: "https://www.google.com/maps/search/?api=1&query=Turku+Cathedral+Finland" },
            { name: "Aura folyópart (Aurajoki)", badge: "vacsora + séta", duration: "60–90 perc (vacsora + séta)", reviewNote: "A turkuliak és a turisták közös kedvence — hajóéttermek, kávézók és a folyóparti sétány az egyik legjobb finn esti hangulat · 4.5 ★", detail: "Vacsora előtt vagy alatt a legjobb hely; a hajóéttermek közvetlenül a folyón ülnek.", maps: "https://www.google.com/maps/search/?api=1&query=Aurajoki+Turku" },
            { name: "Viking Line terminál Turku", badge: "komp boarding", duration: "30 perc előtte", detail: "Turku (Åbo) Linnansatama kikötő — boarding jellemzően 60-90 perccel az indulás előtt nyílik. 20:00 indulásnál ~18:30-tól.", maps: "https://www.google.com/maps/search/?api=1&query=Viking+Line+Turku+terminal" },
            { name: "Stockholm Värtahamnen kikötő", badge: "reggeli érkezés", duration: "06:30 érkezés", detail: "Innen az Arlandig ~35-40 perc az E4-esen. Bőven elég puffer az FI309 előtt.", maps: "https://www.google.com/maps/search/?api=1&query=Värtahamnen+Stockholm" }
          ],
          links: [
            { label: "Viking Line Turku–Stockholm", url: "https://www.vikingline.com/routes/turku-stockholm/" },
            { label: "Turku Castle", url: "https://www.google.com/maps/place/?q=place_id:ChIJT7lOv8JvlEYRV7z2L8OxwZQ" },
            { label: "Tallink Shuttle Tallinn–Helsinki", url: "https://www.tallink.com/tallinn-helsinki" }
          ]
        },
        {
          num: "9",
          date: "2026. július 18., szombat",
          title: "Stockholm / Arlanda → Reykjavík",
          subtitle: "Korai kikötőérkezés, Arlanda parking, FI309",
          driveLog: { km: "~35 km (kikötő → Arlanda)", stops: 2, driveTime: "~35 perc", depart: "06:30", arrive: "17:10", timelinePoints: [{time:"06:30", label:"Värtahamnen"}, {time:"07:30", label:"Stockholm blokk"}, {time:"14:30", label:"Arlanda check-in"}, {time:"17:10", label:"FI309 ✈"}] },
          tags: [
            { label: "FI309", cls: "tag-flight" },
            { label: "17:10 → 18:25", cls: "tag-focus" }
          ],
          activities: [
            { time: "06:30", icon: "⚓", name: "Stockholm Värtahamnen — Viking Line érkezés", detail: "Korai érkezés sokkal jobb puffert ad az FI309 előtt. Värtahamnentől Arlandáig ~35 perc az E4-esen." },
            { time: "07:00–14:00", icon: "☕", name: "Stockholm reggel + Arlanda parking", detail: "Ha energiátok van, Gamla Stan vagy a kikötő rövid séta lehetőség. P2 Beta vagy Flygets P1 parkolóba az autó." },
            { time: "14:30–16:30", icon: "🛂", name: "Arlanda check-in és security", detail: "Júliusban a security sor akár 1-1,5 óra is lehet. FI309 gate általában a Sky City közelében." },
            { time: "17:10", icon: "✈", name: "Icelandair FI309", detail: "Stockholm / Arlanda (ARN) → Reykjavík / Keflavík (KEF), helyi idő szerint 17:10 → 18:25 (helyi izlandi idő)." }
          ],
          notes: [
            "Ezzel a nappal zárul Tibi külön balti-felvezető szakasza, és indul a közös izlandi rész.",
            "A Viking Line-os 06:30-as érkezés ~10 óra puffert ad az FI309 előtt — sokkal stresszmentes, mint a korábbi 10:00-as érkezéses terv.",
            "Arlanda parking: Szwedavia P2 Beta long-term (előre foglalva olcsóbb). Az auto a visszaút után kell.",
            "Gamla Stan (Stockholm óváros): ha van energiátok a reggeli kompérkezés után, 2-3 óra alatt szépen körbejárható."
          ]
        }
      ]
    },
    izland: {
      kicker: "Közös részletes roadtrip",
      title: "Izland",
      pill: "Közös izlandi szakasz",
      accent: "iceland",
      generalInfoBoxKey: "icelandGeneralBox",
      mapAsset: {
        bottomMaps: {
          title: "Google My Maps",
          text: "A két interaktív Google My Maps nézet az oldal aljára került, közvetlenül a sematikus SVG fölé.",
          embeds: [
            {
              title: "Google My Maps · fő útvonal",
              src: "https://www.google.com/maps/d/u/0/embed?mid=1Ku6Ri53fzgTAychn2Voyy7XiHWsWvMw&ehbc=2E312F"
            },
            {
              title: "Google My Maps · részletesebb változat",
              src: "https://www.google.com/maps/d/u/0/embed?mid=1sp1poHOrpYtHyiyVZRVtgfgYTxDzlpw&ehbc=2E312F"
            }
          ],
          links: [
            { label: "My Maps · fő útvonal", url: "https://www.google.com/maps/d/u/0/edit?mid=1Ku6Ri53fzgTAychn2Voyy7XiHWsWvMw&usp=sharing" },
            { label: "My Maps · részletesebb", url: "https://www.google.com/maps/d/u/0/edit?mid=1sp1poHOrpYtHyiyVZRVtgfgYTxDzlpw&ll=64.72213117462351%2C-18.97711350000002&z=7" }
          ]
        },
        bottomAsset: {
          title: "Sematikus térkép és GPX",
          text: "A saját júliusi sematikus ábra legalul marad, mellé téve a hivatalos Vegagerðin útállapot-térképet.",
          image: "./assets/iceland_map.svg",
          links: [
            { label: "SVG térkép", url: "./assets/iceland_map.svg" },
            { label: "GPX útvonal", url: "./assets/iceland_route.gpx" }
          ],
          companion: {
            title: "Vegagerðin térkép",
            text: "Hivatalos izlandi útállapot- és útinformációs térkép, különösen hasznos indulás előtti ellenőrzésre.",
            embed: {
              title: "Vegagerðin road map",
              src: "https://vegasja.vegagerdin.is/eng/"
            },
            links: [
              { label: "Vegagerðin map", url: "https://vegasja.vegagerdin.is/eng/" }
            ]
          }
        }
      },
      extraResources: [
        {
          title: "Epic Iceland · mi fedi az útvonalat?",
          accent: "iceland",
          open: false,
          text: "Az Epic Iceland szinte az egész szigetet bejárta. A mostani júliusi Ring Road tervetekkel ezek a részek fednek közvetlenül, és ezekből jönnek azok a plusz ötletek, amik még reálisan beleférhetnek a mostani tempóba is.",
          items: [
            "Snæfellsnes: náluk is működik az egynapos kör, és a mostani útba rövid pluszként leginkább Selvallavatn vagy a Berserkjahraun-féle scenic detour férhet még bele, ha jó az idő.",
            "Stuðlagil: külön kiemelik, hogy a nyugati oldal gyorsabb és könnyebb nézőpont, a keleti oldal viszont hosszabb sétával közelebb visz a kanyonhoz. Ez jól passzol a mostani rugalmas napotokhoz.",
            "Délkelet / Eastfjords: a Route 1 parti vezetése önmagában is erős élmény, az Öxi road viszont inkább csak weather-dependent gravel kerülőként vállalható be.",
            "Jökulsárlón és Fjallsárlón: náluk is együtt szerepel a két lagúna, de kifejezetten leírják, hogy időszűkében pont ez az a duó, ahol Fjallsárlón elengedhető.",
            "Déli part: Seljalandsfoss mellé náluk is egyértelmű plusz Gljúfrabúi, ezért jó, hogy együtt szerepelnek a tervetekben.",
            "Golden Circle és Reynisfjara: az előbbinél a korai indulást, az utóbbinál a hullámveszélyt emelik ki, ami teljesen egybevág a mostani júliusi stratégiátokkal."
          ],
          links: [
            { label: "Epic Iceland főoldal", url: "https://epiciceland.net/" },
            { label: "Snæfellsnes guide", url: "https://epiciceland.net/best-things-to-do-in-snaefellsnes/" },
            { label: "South-East Ring Road day", url: "https://epiciceland.net/day-5-journey-south-east-iceland/" },
            { label: "Golden Circle / Reykjavik day trips", url: "https://epiciceland.net/best-day-trips-from-reykjavik/" },
            { label: "Reynisfjara + Stuðlagil landscapes", url: "https://epiciceland.net/best-icelandic-landscapes/" },
            { label: "Stuðlagil canyon notes", url: "https://epiciceland.net/tag/studlagil-canyon/" },
            { label: "Seljalandsfoss notes", url: "https://epiciceland.net/tag/seljalandsfoss/" }
          ]
        },
        {
          title: "F-road map és highland források",
          accent: "iceland",
          open: false,
          text: "Az Epic Iceland F-road térképét és kapcsolódó highland forrásait külön integráltam ide, mert ha később a Ring Road verziót bővítitek Landmannalaugar, Askja vagy más belső-felföldi kitérővel, ez lesz a legjobb kiindulás.",
          items: [
            "A mostani júliusi Ring Road tervhez nem kell F-road, 2WD is elég.",
            "F-roadhoz 4×4 kötelező, és a nehezebb utaknál a folyóátkelések a fő kockázat.",
            "Indulás előtt mindig a hivatalos útállapotot és az időjárást nézd, ne csak egy blogtérképet."
          ],
          links: [
            { label: "Epic Iceland · F-road Map", url: "https://epiciceland.net/list-f-roads-iceland/#F-road_Map" },
            { label: "road.is", url: "https://www.road.is/" },
            { label: "vedur.is", url: "https://en.vedur.is/" },
            { label: "Vegagerðin map", url: "https://vegasja.vegagerdin.is/eng/" }
          ]
        }
      ],
      intro: [
        "Ez a rész a megadott júliusi Ring Road tervre épül: július 18-i (szombat) esti KEF-érkezés, Reykjavíkkal induló akklimatizációs nap, majd Snæfellsnes-félsziget, északi Akureyri–Mývatn-blokk, keleti fjordok, Jökulsárlón és Diamond Beach, klasszikus déli part és Golden Circle-zárás — 8 teljes nap, 07.26-i vasárnap reggeli visszarepüléssel.",
        "A kulcs nem a rohanás, hanem a csúcsszezoni tömeg jó kezelése: korai (7:00–7:30-as) indulások a főhelyszínekre, esti aranyórás visszatérés Seljalandsfoss-hoz és Diamond Beach-hez, és előre foglalt népszerű étterem / fürdő (Friðheimar, Sky Lagoon, Mývatn Nature Baths).",
        "Júliusban 18–21 óra napfény van — ez egyszerre áldás és csapda. A legjobb fotós fény reggel 5–8h és este 20–23h között van, amikor a turistabuszok még nincsenek ott. A legesőérzékenyebb nap Snæfellsnes (Day 3 / júl 20): ha a vedur.is erre esőt jelez, érdemes Day 2-vel cserélni."
      ],
      context: [
        {
          title: "🌋 Izland — földrajz, geológia, történelem",
          accent: "iceland",
          open: false,
          cards: [
            {
              title: "Elhelyezkedés és méret",
              paragraphs: [
                "Izland az Észak-Atlanti-óceánban, a Sarkkör határán helyezkedik el — Grönlandtól keletre, Norvégiától nyugatra. Területe kb. 103 000 km², lakossága mindössze ~380 000 fő (kb. Pécs kétszerese). Ezért az ország viszonylag üres: hatalmas természeti terek, minimális infrastruktúra a fő utakon kívül.",
                "A Ring Road (Route 1) körülöleli az egész szigetet — kerülete ~1332 km. Ezzel az egy úttal az ország nagy részének legfontosabb helyszínei elérhetők, F-utas kitérő nélkül."
              ]
            },
            {
              title: "Geológia és vulkáni aktivitás",
              paragraphs: [
                "Izland az Eurázsiai és az Észak-Amerikai tektonikai lemez határán ül — a Közép-Atlanti-hátságon. Ez nemcsak geológiai ritkaság, hanem látható is: Þingvellirben sétálhatsz a két lemez közötti hasadékban.",
                "A szigetnek 130+ vulkánja van, ebből kb. 30 aktív. A gleccserek az ország 11%-át fedik, köztük a Vatnajökull — Európa legnagyobb gleccsere. Geotermikus energia: az ország villamos energiájának 100%-a megújuló (geotermikus + vízi erőmű).",
                "A 2010-es Eyjafjallajökull-kitörés és a 2021-es Fagradalsfjall-kitörés jól mutatja, hogy Izland még ma is formálódik. A Reykjanes-félszigeten 2021 óta folyamatos vulkáni aktivitás van."
              ]
            },
            {
              title: "Betelepülés és korai történelem",
              paragraphs: [
                "Az első állandó telepesek 874-ben érkeztek — a hagyomány szerint Ingólfur Arnarson norvég viking volt az első, aki Reykjavíkban letelepedett. Az ír szerzetesek (papar) korábban is járhattak itt, de állandó közösséget nem hagytak.",
                "930-ban megalakult az Althing — a világ egyik legrégebbi parlamentje, Þingvellirben tartották. 1262-től Norvégia fennhatósága alá kerültek, majd 1380-tól Dánia része lett az ország. A függetlenséget 1944. június 17-én kiáltották ki, míg a dán király londoni német fogságban volt."
              ]
            },
            {
              title: "Sagas és kultúra",
              paragraphs: [
                "Az izlandi sagák — 13. századi elbeszélések a vikingek koráról — Európa egyik leggazdagabb középkori irodalmát alkotják. Az izlandi nyelv rendkívül konzervatív: ma is olvasható az eredeti sagaszöveg, és a mai izlandiak megértik a 1000 éves szövegeket.",
                "A huldufólk (elrejtett emberek, tündérek) hite ma is él — az építési projektek néha megkerülik a gyanított tündér-köveket. Az ország 99%-os írástudási arányával és magas egyenlőségi indexével az egyik legfejlettebb társadalom a világon."
              ]
            },
            {
              title: "Éghajlat és nyár",
              paragraphs: [
                "Júliusban átlagosan 11–14°C, de a szél és az eső bármikor jöhet. Az időjárás naponta (sőt, óránként) változhat — 'Ha nem tetszik az izlandi időjárás, várj 5 percet' a helyi bölcsesség. A Ring Roadon 90 km/h a sebességhatár.",
                "Júliusban gyakorlatilag nincs igazi éjszaka — napkelte ~3:00, naplemente ~23:30. Az éjféli nap a Sarkkör felett látható; a Ring Roadon délebbre az ég soha nem sötétedik teljesen. Ez az aranyóra-fotózás paradicsoma és az alvás rémálma egyszerre."
              ]
            }
          ],
          links: [
            { label: "Visit Iceland — hivatalos", url: "https://www.visiticeland.com/" },
            { label: "Wikipedia — Izland", url: "https://hu.wikipedia.org/wiki/Izland" },
            { label: "Geology of Iceland", url: "https://en.wikipedia.org/wiki/Geology_of_Iceland" },
            { label: "Sagas of Icelanders", url: "https://en.wikipedia.org/wiki/Sagas_of_Icelanders" },
            { label: "Iceland Monitor — hírek", url: "https://icelandmonitor.mbl.is/news/" },
            { label: "About Iceland — Reykjavík", url: "https://visitreykjavik.is/" }
          ]
        },
        {
          title: "🇮🇸 Izland rövid országkép",
          accent: "iceland",
          open: true,
          cards: [
            {
              title: "Miért működik roadtripként?",
              paragraphs: [
                "Izland egyik ereje, hogy a tájélmény nem egyetlen városban sűrűsödik, hanem a vezetési ív mentén fokozatosan épül fel. Emiatt egy jó izlandi út szerkezeti kérdés is: mennyit vezettek, mennyit álltok meg, és hogyan kerülitek ki a nyári csúcstömeget."
              ]
            },
            {
              title: "Júliusi sajátosságok",
              paragraphs: [
                "Júliusban 18–21 óra napfény van, ezért a klasszikus helyszínekre nem délben, hanem reggel vagy este érdemes menni. Reynisfjara, Jökulsárlón, Geysir és Gullfoss különösen hálás ezért."
              ]
            },
            {
              title: "Roadtrip-fókusz",
              paragraphs: [
                "Ez a verzió tudatosan a Ring Roadra épül. 2WD is elég hozzá, a hangsúly a természeten, a fotózáson, a helyi konyhán és a hosszú nyári esti fényen van, nem az F-utakon."
              ]
            }
          ]
        },
        {
          title: "🛻 Izlandi működési keret",
          accent: "iceland",
          cards: [
            {
              title: "Autó",
              paragraphs: [
                "A mostani tervhez a Ring Roadon egy stabil 2WD is elég. 4WD csak akkor kellene, ha be akarnátok húzni Landmannalaugar vagy más F-utas kitérőt."
              ]
            },
            {
              title: "Szállás",
              paragraphs: [
                "A 3 csillagos hotel / vendégház logika jó, mert ennél az útnál a hely és a ritmus fontosabb, mint a luxus. Júliusra viszont különösen korán kell foglalni a déli parton."
              ]
            },
            {
              title: "Tömegstratégia",
              paragraphs: [
                "A jó izlandi napok júliusban attól erősek, hogy a fő helyekre nem a csúcsidőben estek be. A reggel 8 előtti vagy este 8 utáni időablak sokkal jobb fotós és élmény-szempontból is."
              ]
            }
          ]
        },
        {
          title: "🔄 Napcsere-logika — ha esik Day 3-ra",
          accent: "iceland",
          open: true,
          cards: [
            {
              title: "Mikor cserélj?",
              paragraphs: [
                "Ha a vedur.is szerint Day 3-ra (Snæfellsnes napjára) eső vagy köd várható, érdemes Day 2-vel felcserélni. Snæfellsnes a legesőérzékenyebb nap az egész körön: Kirkjufell, Búðakirkja, Lóndrangar ködben szürke sárfolt. Reykjavík + Sky Lagoon viszont esőben kifejezetten jó.",
                "A döntést az indulás előtti napon érdemes meghozni vedur.is alapján — ne a repülésen, hanem egy nappal korábban."
              ]
            },
            {
              title: "Eredeti sorrend",
              paragraphs: [
                "Day 2 (júl 19): Reykjavík belváros + Sky Lagoon",
                "Day 3 (júl 20): Snæfellsnes-félsziget (~450 km körút)"
              ]
            },
            {
              title: "Csere sorrend (ha Day 3 esős)",
              paragraphs: [
                "Day 2 (júl 19): Snæfellsnes-félsziget — frissen, kipihenten, a legjobb fizikai állapotban",
                "Day 3 (júl 20): Reykjavík + Sky Lagoon — esőben ideális, teljesen beltér/fedett kombinált nap"
              ]
            },
            {
              title: "Megjegyzés a cseréhez",
              paragraphs: [
                "A csere után Day 3-on már fáradtabban indulhat a Snæfellsnes körút — ezért csak akkor csere, ha tényleg jó Day 2 és rossz Day 3 kombináció látszik. Ne csináld automatikusan, csak ha az időkülönbség valóban egyértelmű."
              ]
            }
          ],
          links: [
            { label: "vedur.is előrejelzés", url: "https://en.vedur.is/weather/forecasts/areas/" }
          ]
        },
        {
          title: "🌧 Esőtűrés napi bontásban",
          accent: "iceland",
          cards: [
            {
              title: "Day 1 · Érkezés · 🟢 Tök mindegy",
              paragraphs: [
                "KEF → Reykjavík vezetés, vacsora és korai alvás. Esőben is teljesen működik, itt nincs valódi veszteség."
              ]
            },
            {
              title: "Day 2 · Reykjavík + Sky Lagoon · 🟢 Kifejezetten jó esőben",
              paragraphs: [
                "A Sky Lagoon esőben még hangulatosabb, a Hallgrímskirkja és a Harpa részben beltéri, a kávézók is kézre esnek. A Sun Voyager és a séta esőkabátban még simán vállalható."
              ]
            },
            {
              title: "Day 3 · Snæfellsnes · 🔴 Eső katasztrófa",
              paragraphs: [
                "Kirkjufell, Lóndrangar, Saxhóll és Búðakirkja alapvetően kilátásos-fotós helyek. Ködben vagy esőben Snæfellsnes veszít a legtöbbet, ezért ezt a napot nem érdemes rossz időre hagyni."
              ]
            },
            {
              title: "Day 4 · Akureyri / Mývatn · 🟡 Vegyes",
              paragraphs: [
                "Hverir és Goðafoss esőben is jól működik, viszont Hverfjall és a Húsavík-bálnales már sokkal gyengébb nedves, szeles időben."
              ]
            },
            {
              title: "Day 5 · Dettifoss / Kelet · 🟢 Jó esőben",
              paragraphs: [
                "Dettifoss esőben is brutális, Stuðlagil is működik, és az egilsstaðiri átvezetés sem érzékeny. Ez az egyik legbiztosabb rosszidős nap."
              ]
            },
            {
              title: "Day 6 · Jökulsárlón · 🟡 Vegyes",
              paragraphs: [
                "Jökulsárlón és Diamond Beach esőben is erős, de Vestrahorn és Múlagljúfur ködben, felhőben vagy sárban sokat veszít."
              ]
            },
            {
              title: "Day 7 · Déli part · 🟢 Jó esőben",
              paragraphs: [
                "A vízesések esőben még látványosabbak, Reynisfjara működik nedves fényekkel is, Fjaðrárgljúfur pedig szintén jól tartja magát."
              ]
            },
            {
              title: "Day 8 · Golden Circle · 🟢 Jó esőben",
              paragraphs: [
                "Gullfoss, Geysir, Þingvellir, Brúarfoss és Faxi mind víz- vagy kanyonfókuszú helyek. Esőben sokszor még drámaibbak és fotósabbak."
              ]
            }
          ]
        }
      ],
      days: [
        {
          num: "0",
          date: "2026. július 18., szombat",
          title: "Érkezés, Reykjavík",
          subtitle: "Keflavík érkezés, autóátvétel, korai alvás",
          open: true,
          driveLog: { km: "~50 km", stops: 3, driveTime: "~45 perc", depart: "18:25 (FI309)", arrive: "~19:30 Reykjavík", timelinePoints: [{time:"18:25", label:"KEF érk."}, {time:"19:15", label:"N1 tankolás"}, {time:"19:30", label:"Reykjavík"}] },
          character: "Érkezési nap, nincs túl sok program. A cél: bérautót átvenni, eljutni Reykjavíkba, megvacsorázni és lefeküdni. Júliusban este 22:30-kor még világos van, ne lepődj meg — ne is próbálj túl korán aludni, használd ki, hogy nyugodtan beérkezhetsz.",
          rainNote: { icon: "🟢", label: "Esős? Tök mindegy — vezetés és vacsora esőben is megy." },
          tags: [
            { label: "érkezés", cls: "tag-flight" },
            { label: "Reykjavík", cls: "tag-city" }
          ],
          activities: [
            { time: "18:25", icon: "✈", name: "FI309 érkezés Keflavíkba", detail: "A stockholmi járat után autóátvétel és kb. 45 perces átvezetés jön Reykjavík irányába." },
            { time: "este", icon: "🍽", name: "Könnyű vacsora", detail: "Svarta Kaffið, Messinn vagy egy egyszerűbb burger is elég az első estére." },
            { time: "késő este", icon: "⛽", name: "Tankolás + korai lefekvés", detail: "N1 vagy Olís még ezen az estén jó ötlet, hogy másnap ne ezzel induljon a nap." }
          ],
          notes: ["A fő cél itt nem a városnézés, hanem a gyors átállás és a sötétíthető szállás.", "Autóátvételnél fotózzátok körbe a karcokat, üveget és lökhárítókat; Izlandon a kavics- és szélkár különösen gyakori.", "A gravel insurance (SCDW/GP) itt nem finom extra, hanem alap logika.", "A kutaknál PIN-kód kötelező, kontaktless nem mindenhol megy.", "GPS-óra állítás: GMT (UTC+0) — Magyarországtól -2 óra.", "Tankolj még este az N1 Hafnargata 86-on (24/7) — reggel hosszú út jön Snæfellsnes felé."],
          links: [
            { label: "SCDW / GP insurance guide", url: "https://epiciceland.net/car-rental-insurance-guide-iceland/" },
            { label: "N1 Hafnargata 86", url: "https://www.google.com/maps/search/?api=1&query=63.996711,-22.549587" },
            { label: "Svarta Kaffið", url: "https://www.google.com/maps/place/?q=place_id:ChIJgYjsaOJ11kgRJBwQqYbRz_Y" }
          ],
          gpxPlaces: [
            { name: "Keflavík reptér (KEF)", badge: "érkezés", detail: "Érkezés este, itt jön az autóátvétel és az első rövid izlandi logisztikai váltás.", maps: "https://www.google.com/maps/search/?api=1&query=Keflav%C3%ADk+rept%C3%A9r+%28KEF%29" },
            { name: "N1 Self-service Keflavík (Hafnargata)", badge: "tankolás", detail: "24/7 benzinkút a reptérkörnyezetben, praktikus még az első este letudni.", maps: "https://www.google.com/maps/search/?api=1&query=N1+Self-service+Keflav%C3%ADk+%28Hafnargata%29" },
            { name: "Reykjavík szállás", badge: "szállás", detail: "Center Hotels Plaza / Hótel Heiðmörk / Reykjavík Lights Hotel vonal; itt a sötétíthetőség fontosabb, mint a látvány.", maps: "https://www.google.com/maps/search/?api=1&query=Reykjav%C3%ADk+sz%C3%A1ll%C3%A1s" },
            { name: "Svarta Kaffið", badge: "vacsora opció", detail: "Bárányleves cipóban, gyors és klasszikus első esti választás a Laugaveguron.", maps: "https://www.google.com/maps/search/?api=1&query=Svarta+Kaffi%C3%B0+Reykjavik" },
            { name: "Messinn", badge: "vacsora opció", detail: "Halas-húsos, erősebb vacsoraopció a belvárosban, ha még van energiátok beülni.", maps: "https://www.google.com/maps/search/?api=1&query=Messinn+Reykjavik" }
          ]
        },
        {
          num: "1",
          date: "2026. július 19., vasárnap",
          title: "Reykjavík + Sky Lagoon / Kék Lagúna",
          subtitle: "Akklimatizációs, lazább városi nap",
          driveLog: { km: "~40 km", stops: 5, driveTime: "~1 óra (főleg gyalogos nap)", depart: "09:00", arrive: "~20:00", timelinePoints: [{time:"09:00", label:"Hallgrímskirkja"}, {time:"12:30", label:"ebéd"}, {time:"14:30", label:"Sky Lagoon"}, {time:"20:00", label:"vacsora"}] },
          character: "Pihenős városnézős nap a hosszú Snæfellsnes előtt. Délelőtt a belváros gyalog, délután fürdő-élmény. Ne hajtsd túl magad — ez egy ráhangolódás, nem egy teljesítménynap.",
          rainNote: { icon: "🟢", label: "Esős? Kifejezetten jó — Sky Lagoon esőben pláne hangulatos." },
          tags: [
            { label: "város", cls: "tag-city" },
            { label: "termál", cls: "tag-focus" }
          ],
          activities: [
            { time: "09:00–12:30", icon: "🏙", name: "Reykjavík belváros", detail: "Hallgrímskirkja, Laugavegur, Sun Voyager és Harpa könnyű gyalogos ívben." },
            { time: "12:30–14:00", icon: "🍽", name: "Ebéd", detail: "Kaffivagninn vagy Café Loki jó nyitóhely a helyi konyhához." },
            { time: "14:30–18:00", icon: "♨", name: "Sky Lagoon", detail: "A mostani verzióban ez az ajánlott fő fürdős blokk; modernebb és nyugodtabb, mint a Kék Lagúna." }
          ],
          notes: ["Ha a Kék Lagúna csak a fotó miatt fontos, belefér, de júliusban sokkal zsúfoltabb. Sky Lagoon: modernebb, közelebb, kevésbé tömött.", "A nap célja a ráhangolódás, nem a túlprogramozás.", "Sky Lagoon: foglalj előre időpontot — júliusban walk-in alig van. Pure csomag (ritual + zuhanyzó) bőven elég, a drágább 'Sér' nem kell.", "Reykjavíkban belvárosi parkolás drága (1000-2000 ISK/óra); P+R parkolóházon sokkal jobban jársz.", "Bankkártya mindenre megy, ISK készpénzt nem kell tartani."],
          links: [
            { label: "Hallgrímskirkja", url: "https://www.google.com/maps/place/?q=place_id:ChIJtS1DoMx01kgR76qdSMQor_c" },
            { label: "Sun Voyager", url: "https://www.google.com/maps/place/?q=place_id:ChIJz-YMCc501kgRqKacmXs6e9g" },
            { label: "Harpa", url: "https://www.google.com/maps/place/?q=place_id:ChIJS4YW06l11kgRW-aFizec8sE" },
            { label: "Sky Lagoon", url: "https://www.google.com/maps/place/?q=place_id:ChIJpyUozoYL1kgREGm6RWPXuio" },
            { label: "Kék Lagúna", url: "https://www.google.com/maps/place/?q=place_id:ChIJDd_3r2Yd1kgRbvAWRIl6dPM" },
            { label: "Café Loki", url: "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Loki+Reykjavik" }
          ],
          gpxPlaces: [
            { name: "Hallgrímskirkja templom", badge: "főpont", googleRating: "4.6", duration: "30–45 perc", reviewNote: "Kötelező nyitómegálló — a toronyliftre érdemes sort állni, panoráma elkápráztat · 50 000+ értékelés", detail: "Reykjavík ikonikus temploma, toronylifttel és jó nyitó panorámával.", maps: "https://www.google.com/maps/search/?api=1&query=Hallgr%C3%ADmskirkja+templom" },
            { name: "Laugavegur sétálóutca", badge: "városi séta", duration: "30–40 perc", detail: "Boltok, kávézók, könnyű belvárosi ráhangolódás Hallgrímskirkjától lefelé.", maps: "https://www.google.com/maps/search/?api=1&query=Laugavegur+Reykjavik" },
            { name: "Sun Voyager", badge: "fotópont", googleRating: "4.5", duration: "10–15 perc", reviewNote: "Gyors, de kihagyhatatlan fotómegálló — reggeli fényben a legjobb · 12 000+ értékelés", detail: "A vízparti szobor rövid, de kötelező reykjavíki fotómegálló.", maps: "https://www.google.com/maps/search/?api=1&query=Sun+Voyager+Reykjavik" },
            { name: "Harpa kulturális központ", badge: "főpont", googleRating: "4.6", duration: "20–30 perc", reviewNote: "Az üveghomlokzat önmagában megér egy fotósétát — belépő nélkül is látványos · 18 000+ értékelés", detail: "Üveg homlokzat, kikötői nézet és rövid belső kör, ha az időjárás elfordul.", maps: "https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik" },
            { name: "Kaffivagninn", badge: "ebéd opció", googleRating: "4.2", duration: "50–70 perc", reviewNote: "Hiteles kikötői hangulatú étterem, plokkfiskur és halas fogások, nem turista-csapdás vonal · 4 000+ értékelés", detail: "Régi kikötői klasszikus plokkfiskur és halas vonalon, közvetlenül a városi séta után.", maps: "https://www.google.com/maps/search/?api=1&query=Kaffivagninn+Reykjavik" },
            { name: "Café Loki", badge: "ebéd opció", googleRating: "4.5", duration: "50–70 perc", reviewNote: "Tradicionális izlandi fogások, ideális Hallgrímskirkja melletti ebédhely — turistás, de megéri · 7 000+ értékelés", detail: "Tradicionális izlandi fogások közvetlenül Hallgrímskirkjával szemben.", maps: "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Loki+Reykjavik" },
            { name: "Sky Lagoon", badge: "fő fürdő", googleRating: "4.7", duration: "3–4 óra", reviewNote: "A 7-lépéses ritual az igazi élmény — sokkal kevésbé zsúfolt, mint a Kék Lagúna; nyári naplemenyes fény lenyűgöző · 12 000+ értékelés", detail: "A jelenlegi fő fürdős döntés: modernebb, csendesebb és vizuálisan erősebb, mint a Kék Lagúna.", maps: "https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+K%C3%B3pavogur" },
            { name: "Kék Lagúna", badge: "alternatíva", duration: "2–3 óra", reviewNote: "Ikonikus, de júliusban csúcstömeg — előre foglalás nélkül nem érdemes próbálkozni · 60 000+ értékelés", detail: "Ikonikus, de csúcsszezonban sokkal zsúfoltabb alternatív fürdő.", maps: "https://www.google.com/maps/search/?api=1&query=Blue+Lagoon+Iceland" },
            { name: "Grillmarkaðurinn", badge: "vacsora opció", duration: "90–120 perc", detail: "Prémium belvárosi vacsoraopció, ha az első teljes napot ünnepibbre vennétek.", maps: "https://www.google.com/maps/search/?api=1&query=Grillmarka%C3%B0urinn+Reykjavik" },
            { name: "Matur og Drykkur", badge: "vacsora opció", duration: "90–120 perc", detail: "Modern izlandi konyha a kikötőnél, ha komolyabb esti ülős vacsora kell.", maps: "https://www.google.com/maps/search/?api=1&query=Matur+og+Drykkur+Reykjavik" }
          ]
        },
        {
          num: "2",
          date: "2026. július 20., hétfő",
          title: "Snæfellsnes-félsziget",
          subtitle: "Hosszú, de nagyon erős nyári fotós nap",
          driveLog: { km: "~450 km", stops: 9, driveTime: "~7 óra", depart: "07:00", arrive: "~21:00", timelinePoints: [{time:"07:00", label:"Reykjavík ind."}, {time:"10:00", label:"Búðakirkja"}, {time:"13:00", label:"Arnarstapi"}, {time:"19:00", label:"Kirkjufell"}] },
          character: "Az út első igazi kalandnapja. Hosszú vezetés, sok megálló. Korán indulj (7:00–7:30), sötétedés előtt érj a szálláshoz. Snæfellsnes-t »Izland kicsiben« hívják — gleccser, vulkánok, vízesések, fekete strandok mind egy félszigeten.",
          rainNote: { icon: "🔴", label: "Esős? Legesőérzékenyebb nap — köd/eső esetén csere Day 1-gyel!" },
          tags: [
            { label: "~450 km", cls: "tag-drive" },
            { label: "Kirkjufell", cls: "tag-focus" }
          ],
          activities: [
            { time: "reggel", icon: "🚗", name: "Korai indulás Reykjavíkból", detail: "Borgarnesnél tankolás és Bónus-beszerzés után jön a teljes Snæfellsnes-ív." },
            { time: "napközben", icon: "📸", name: "Gerðuberg → Ytri Tunga → Búðakirkja → Arnarstapi", detail: "Bazaltorgonák, fókák, fekete templom és tengerparti bazaltképződmények egymás után." },
            { time: "este", icon: "🏔", name: "Kirkjufell + tovább észak felé", detail: "A nap legikonikusabb fotópontja, majd hosszabb esti átvezetés Akureyri / Varmahlíð irányába." }
          ],
          notes: ["Ez papíron hosszú nap, de júliusban a nagyon hosszú nappal miatt jól működik.", "⚠️ Ha Day 3-ra (Snæfellsnes napjára) eső/köd várható (vedur.is alapján), csere Day 2-vel! Kirkjufell ködben szürke sárfolt — nem érdemes így menni.", "Hvalfjörður alagút: ingyenes (2019 óta), tilos benne megállni, max 70 km/h.", "Borgarnes az utolsó kényelmes tankolós + Bónus bevásárlós pont Reykjavík után — a félszigeten drága, kicsi kutak vannak.", "Kirkjufellnél 1000 ISK parkolódíj: kamerás ellenőrzés van, ne hagyd ki, mert bírság ~50 USD.", "Bárányokra különösen számíts az útszéleken, főleg Snæfellsnesen."],
          links: [
            { label: "Kirkjufell", url: "https://www.google.com/maps/place/?q=place_id:ChIJhw_Xjat71UgRe9sxd6VbtAk" },
            { label: "Kirkjufellsfoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJ0wB9h7J71UgR0DijKGoYYwI" },
            { label: "Búðakirkja", url: "https://www.google.com/maps/place/?q=place_id:ChIJv8Ug4gN_1UgRtUn7cmhYLgc" },
            { label: "Arnarstapi", url: "https://www.google.com/maps/place/?q=place_id:ChIJlyAzMgiBKkkRUfLoebLqwz8" },
            { label: "Lóndrangar", url: "https://www.google.com/maps/place/?q=place_id:ChIJr2DJE5WHKkkRKiuUjICGmXk" },
            { label: "Saxhóll", url: "https://www.google.com/maps/place/?q=place_id:ChIJZyVpbW2FKkkRuyHKNaKP2a4" },
            { label: "vedur.is", url: "https://en.vedur.is/weather/forecasts/areas/" }
          ],
          gpxPlaces: [
            { name: "Hvalfjörður alagút", badge: "logisztika", duration: "~10 perc áthaladás", detail: "A gyors kijutás kulcsa észak felé; ingyenes és időt nyer a hosszú napon.", maps: "https://www.google.com/maps/search/?api=1&query=Hvalfj%C3%B6r%C3%B0ur+tunnel+Iceland" },
            { name: "Borgarnes", badge: "bevásárlás + tankolás", duration: "25–35 perc", detail: "Itt érdemes a napi hideg kaját, vizet és a benzint letudni még a félsziget előtt.", maps: "https://www.google.com/maps/search/?api=1&query=Borgarnes+Iceland" },
            { name: "Gerðuberg bazaltorgonák", badge: "fotós stop", duration: "15–20 perc", reviewNote: "Gyors, látványos bazaltfal — sokszor kihagyják, pedig remek napi nyitó kép · 4.5 ★", detail: "15 perces, gyors bazaltfalas megálló, jól nyitja a Snæfellsnes blokkot.", maps: "https://www.google.com/maps/search/?api=1&query=Ger%C3%B0uberg+Cliffs+Iceland" },
            { name: "Ytri-Tunga", badge: "fókások", duration: "20–30 perc", reviewNote: "Ha van fóka a parton, 5 percet megér — de nem garantált a látogatás · 4.3 ★", detail: "A fókás strand rövid kitérőnek is megéri, főleg jó fényben.", maps: "https://www.google.com/maps/search/?api=1&query=Ytri+Tunga+Iceland" },
            { name: "Búðakirkja", badge: "fotópont", duration: "20–25 perc", reviewNote: "Izland egyik legikonikusabb egykép-helyszíne — a fekete templomot háttérben a gleccserrel mindenki hazaviszi · 4.5 ★", detail: "Fekete fatemplom a lávamező szélén, a félsziget egyik legerősebb képe.", maps: "https://www.google.com/maps/search/?api=1&query=B%C3%BA%C3%B0akirkja+Iceland" },
            { name: "Arnarstapi → Hellnar séta", badge: "főparti szakasz", duration: "60–90 perc", reviewNote: "A 2,5 km-es tengerparti ösvény a nap legjobb aktív blokkja — bazaltívek, madársziklák, hajnal utáni fény · 4.4 ★", detail: "Bazaltívek, madársziklák és rövid tengerparti gyalogos blokk.", maps: "https://www.google.com/maps/search/?api=1&query=Arnarstapi+Hellnar+walk" },
            { name: "Fjöruhúsið", badge: "kávé/ebéd", duration: "30–45 perc", reviewNote: "Csodálatos helyen lévő kis kávézó Hellnarban — waffles és kávé az Atlanti-óceán felett · 4.6 ★", detail: "Hellnar kávézós megálló, jól illik a part menti séta közepére.", maps: "https://www.google.com/maps/search/?api=1&query=Fj%C3%B6ruh%C3%BAsi%C3%B0+Hellnar" },
            { name: "Vatnshellir lávabarlang", badge: "opcionális túra", duration: "60–75 perc (vezetetett)", reviewNote: "Egyedülálló lávacső-élmény sisakkal és lámpával — előre foglalás erősen ajánlott · 4.5 ★", detail: "1 órás vezetett barlangtúra, ha a napritmus még engedi.", maps: "https://www.google.com/maps/search/?api=1&query=Vatnshellir+Cave+Iceland" },
            { name: "Djúpalónssandur", badge: "fekete strand", duration: "30–40 perc", reviewNote: "Hajóroncs-töredékek és bazaltkavicsos strand — gyors, de nagyon hangulatos megálló · 4.5 ★", detail: "Fekete kavicsos strand és régi hajóroncs-töredékek, rövid, de erős hangulatú pont.", maps: "https://www.google.com/maps/search/?api=1&query=Dj%C3%BApal%C3%B3nssandur+Iceland" },
            { name: "Saxhóll kráter", badge: "epiciceland plusz", duration: "20–30 perc", reviewNote: "Pár percnyi kaptatás után 360 fokos kráterperem-panoráma — megéri, ha ott jártok · 4.5 ★", detail: "Lépcsőzhető kráter, gyors panorámás kitérő Hellissandur közelében.", maps: "https://www.google.com/maps/search/?api=1&query=Saxh%C3%B3ll+crater+Iceland" },
            { name: "Kirkjufell + Kirkjufellsfoss", badge: "nap csúcspontja", googleRating: "4.6", duration: "45–60 perc", reviewNote: "Izland legtöbbet fotózott csúcsa — az estefelé érkező kisebb tömeg és az arany fény teszi igazán különlegessé · 8 000+ értékelés", detail: "A legismertebb fotópont a félszigeten; estefelé különösen jól működik.", maps: "https://www.google.com/maps/search/?api=1&query=Kirkjufell+Iceland" }
          ]
        },
        {
          num: "3",
          date: "2026. július 21., kedd",
          title: "Akureyri, Goðafoss, Húsavík vagy Mývatn",
          subtitle: "Északi nap két jól működő opcióval",
          driveLog: { km: "~280 km", stops: 6, driveTime: "~4 óra", depart: "08:00", arrive: "~21:00", timelinePoints: [{time:"08:00", label:"ind."}, {time:"11:00", label:"Akureyri"}, {time:"14:00", label:"Goðafoss"}, {time:"17:00", label:"Mývatn / Hverir"}] },
          character: "Vezetős reggel, attrakció-tömör délután. Akureyri Izland második legnagyobb városa, de gyors megálló. Goðafoss közvetlenül a Ring Road mellett — könnyen bezsebelhető. Mývatn-tó vidéke egy földi laboratórium: vulkáni kráterek, lávaformációk, hőforrások.",
          rainNote: { icon: "🟡", label: "Esős? Vegyes — Hverir és Goðafoss ok, Hverfjall és bálnales nem." },
          tags: [
            { label: "Akureyri", cls: "tag-city" },
            { label: "Mývatn", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "🏙", name: "Akureyri", detail: "Templom, botanikus kert, könnyű városi blokk és ebéd." },
            { time: "14:00 után", icon: "🐋", name: "A opció: Húsavík bálnales", detail: "Júliusban kiemelten erős opció, de előre foglalva. Ha ez kell, akkor a délután erre megy rá." },
            { time: "14:00 után", icon: "💦", name: "B opció: Goðafoss + Mývatn + Earth Lagoon", detail: "Ha nem bálnales, akkor Goðafoss, Skútustaðagígar, Dimmuborgir és esti fürdő a legjobb ritmus." }
          ],
          notes: ["Mývatn környékén a midges (apró rovar) miatt archáló jól jöhet.", "⚠️ Vaðlaheiðargöng alagút Akureyri-tól keletre: FIZETŐS ~1600 ISK — regisztrálj a tunnel.is-en aznap, vagy 24 órán belül utólag. Mulasztásért ~5000 ISK bírság.", "Hverir kén-szag nagyon intenzív — ha érzékeny vagy, ibuprofen + sál segít.", "Mývatn környékén Hverir, Dimmuborgir, Hverfjall parkolói kb. 700-1000 ISK-ba kerülnek.", "Ha esős-szeles az idő, Húsavík bálnales helyett sokkal jobb döntés a szárazföldi Mývatn-blokk."],
          links: [
            { label: "Akureyrarkirkja", url: "https://www.google.com/maps/place/?q=place_id:ChIJ6dYm-A6P0kgRIIlv_h0HSBk" },
            { label: "Goðafoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJnzYfSGp-zUgROx0NTqrNu34" },
            { label: "Hverir / Námaskarð", url: "https://www.google.com/maps/place/?q=place_id:ChIJbeqt1QqfzUgR_PI0Y1ByDBA" },
            { label: "Dimmuborgir", url: "https://www.google.com/maps/place/?q=place_id:ChIJ2U0EEiOfzUgRFiNiNp9NH4A" },
            { label: "Hverfjall", url: "https://www.google.com/maps/place/?q=place_id:ChIJdVfoR7iezUgRIeMo4EHAZGs" },
            { label: "Grjótagjá", url: "https://www.google.com/maps/place/?q=place_id:ChIJve4v3_CezUgREZX9xdn26Hk" },
            { label: "Mývatn Nature Baths", url: "https://www.google.com/maps/place/?q=place_id:ChIJhwNZHwGfzUgR7Y3AMkqZIxA" },
            { label: "Húsavík bálnales", url: "https://www.google.com/maps/place/?q=place_id:ChIJyaLoTRVCzUgRESZcNE744Go" }
          ],
          gpxPlaces: [
            { name: "Glaumbær skanzen", badge: "opcionális nyitás", duration: "45–60 perc", reviewNote: "Hiteles 18. századi izlandi gyeptetős tanyaudvar — jó históriás felvezetés Akureyri előtt · 4.3 ★", detail: "Turf-házas skanzen, jó rövid történeti stop, ha még az északi blokk elejére befér.", maps: "https://www.google.com/maps/search/?api=1&query=Glaumb%C3%A6r+Iceland" },
            { name: "Akureyri", badge: "városblokk", duration: "2–2,5 óra", reviewNote: "Kellemesen meglepő északi városka — a virágos körforgalmak és a templomi kilátás a kedvencek · 4.5 ★", detail: "Templom, botanikus kert és könnyű ebéd a nap északi városi szakaszában.", maps: "https://www.google.com/maps/search/?api=1&query=Akureyri+Iceland" },
            { name: "Kaffi Ilmur", badge: "ebéd opció", duration: "50–70 perc", detail: "Egyszerű, jól működő ebédhely Akureyriben; a GPX ezt viszi fő étteremnek.", maps: "https://www.google.com/maps/search/?api=1&query=Kaffi+Ilmur+Akureyri" },
            { name: "Vaðlaheiðargöng alagút", badge: "fizetős logisztika", duration: "~10 perc áthaladás", reviewNote: "Regisztrálj a tunnel.is-en INDULÁS ELŐTT — 1 600 ISK · mulasztásért 5 000 ISK bírság", detail: "Előre regisztrálandó fizetős alagút; ne a nap végén jusson eszetekbe.", maps: "https://www.google.com/maps/search/?api=1&query=Va%C3%B0lahei%C3%B0arg%C3%B6ng+Iceland" },
            { name: "Goðafoss", badge: "főpont", googleRating: "4.8", duration: "30–45 perc", reviewNote: "Az egyik legjobban értékelt izlandi vízesés — közvetlenül a Ring Road mellett, nem kell érte kerülni · 5 000+ értékelés", detail: "Az északi nap klasszikus vízesése, rövid megállóban is nagyon erős.", maps: "https://www.google.com/maps/search/?api=1&query=Go%C3%B0afoss+Iceland" },
            { name: "Húsavík", badge: "opcionális bálnales", duration: "3–4 óra (tour + átvezetés)", reviewNote: "Júliusban szinte 100%-os bálnabiztosíték — az előzetes foglalás kötelező, különben nincs hely · 4.7 ★", detail: "Ha a bálnás verziót választjátok, a délután központi eleme ez lesz.", maps: "https://www.google.com/maps/search/?api=1&query=H%C3%BAsav%C3%ADk+Iceland" },
            { name: "Skútustaðagígar", badge: "Mývatn-főpont", googleRating: "4.4", duration: "40–50 perc", reviewNote: "Kráter-séta a tó partján — könnyű ösvény, jó tájfotók, gyorsan letudható · 3 000+ értékelés", detail: "Pszeudo-kráterek a tó partján, könnyű gyalogos körrel.", maps: "https://www.google.com/maps/search/?api=1&query=Sk%C3%BAtusta%C3%B0ag%C3%ADgar+Iceland" },
            { name: "Dimmuborgir", badge: "Mývatn-főpont", duration: "45–60 perc", reviewNote: "Bizarr fekete lávaszobrok labirintusa — mindenki meg van döbbenve az első meglátáskor · 4.5 ★", detail: "Bizarr lávaformációk, jó délutáni gyalogos blokk a fürdő előtt.", maps: "https://www.google.com/maps/search/?api=1&query=Dimmuborgir+Iceland" },
            { name: "Hverfjall kráter", badge: "epiciceland plusz", duration: "45–60 perc (peremig + vissza)", reviewNote: "20 perc felfelé, 360° kráterperem — érdemes, ha van energiátok és idő, de nem kötelező · 4.5 ★", detail: "20 perces felmenet a peremre, ha a délután még tartalékos.", maps: "https://www.google.com/maps/search/?api=1&query=Hverfjall+Iceland" },
            { name: "Grjótagjá", badge: "epiciceland plusz", duration: "15–20 perc", reviewNote: "Trónok harca-helyszín kék lávabarlangos hőforrással — nem fürödhetsz benne, de fotósan erős · 4.6 ★", detail: "Lávabarlangos hőforrás, rövid fotós megálló, fürdés nélkül.", maps: "https://www.google.com/maps/search/?api=1&query=Grj%C3%B3tagj%C3%A1+Iceland" },
            { name: "Earth Lagoon / Mývatn Nature Baths", badge: "esti fürdő", duration: "2–3 óra", reviewNote: "Csendesebb és természetesebb alternatívája a Blue Lagoonnak — az esti világos izlandi égnél különösen szép · 4.5 ★", detail: "A legjobb napzáró blokk a Mývatn régióban, ha a bálnales kimarad.", maps: "https://www.google.com/maps/search/?api=1&query=M%C3%BDvatn+Nature+Baths+Iceland" }
          ]
        },
        {
          num: "4",
          date: "2026. július 22., szerda",
          title: "Dettifoss, Stuðlagil, Kelet-Izland",
          subtitle: "Geotermikus mezők, nagy vízesés, hosszabb keleti átvezetés",
          driveLog: { km: "~400 km", stops: 6, driveTime: "~5 óra", depart: "08:00", arrive: "~20:00", timelinePoints: [{time:"08:00", label:"ind. (Mývatn)"}, {time:"10:00", label:"Dettifoss"}, {time:"13:00", label:"Stuðlagil"}, {time:"20:00", label:"Egilsstaðir"}] },
          character: "Vezetős nap két nagy attrakcióval. Dettifoss Európa legerősebb vízesése. Stuðlagil Izland legszebb bazaltkanyonja. Egilsstaðir Kelet-Izland fővárosa. Hosszú szakaszok között feszes tempó kell.",
          rainNote: { icon: "🟢", label: "Esős? Jó — Dettifoss esőben még impozánsabb, Stuðlagil is működik." },
          tags: [
            { label: "Dettifoss", cls: "tag-focus" },
            { label: "~400 km", cls: "tag-drive" }
          ],
          activities: [
            { time: "reggel", icon: "🌋", name: "Hverir / Námaskarð", detail: "Sárfortyogók, kénszag és teljesen marsi hangulat." },
            { time: "délelőtt", icon: "💧", name: "Dettifoss", detail: "Az aszfaltozott 862-es oldalon a legegyszerűbb megközelítés." },
            { time: "délután", icon: "🪨", name: "Stuðlagil + keleti továbbhaladás", detail: "A víz júliusban kevésbé türkiz, de a bazaltoszlopos kanyon így is nagyon erős." }
          ],
          notes: ["⚠️ Tankolj Mývatn-ban indulás előtt — Egilsstaðir-ig nagyon korlátozott a benzinkút a Ring Roadon!", "Dettifoss: a nyugati oldal (862-es aszfalt, 28 km) bőven elég, nem kell a sáros keleti oldal.", "Stuðlagil: NYUGATI oldal könnyebb (új lépcsős platform), parkoló 1500 ISK. Ha csúszik a nap, itt a legkönnyebb rövidíteni.", "Stuðlagil vízszín júliusban sokszor szürke/zöldes — türkiz vizet inkább reggel, korán remélhetsz, de ne ez legyen az elvárás.", "Selfoss (Dettifoss kis testvére) ugyanabból a parkolóból 10 perc séta — ne hagyd ki, sokszor szebb mint Dettifoss!", "Seyðisfjörður (szivárványos utca, kék templom) csak extra energiával jó ötlet."],
          links: [
            { label: "Dettifoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJEYOF6YoGzUgRkGxDhsiRMqo" },
            { label: "Selfoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJC-dpVVYGzUgRfNxCfjOGufw" },
            { label: "Stuðlagil Canyon", url: "https://www.google.com/maps/place/?q=place_id:ChIJd7rLAfYpzEgR34_8axXpsF0" },
            { label: "Stuðlafoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJaZ6afcWHzkgRzSt5ZN5FAgI" }
          ],
          gpxPlaces: [
            { name: "Námaskarð / Hverir", badge: "geotermikus főpont", googleRating: "4.7", duration: "30–45 perc", reviewNote: "Marsi táj kén-szaggal — minden értékelő azt írja, hogy döbbenetes és elképesztő, de a szag valóban intenzív · 5 000+ értékelés", detail: "A kénes, pöfékelő mező a nap egyik legerősebb karakterpontja.", maps: "https://www.google.com/maps/search/?api=1&query=Hverir+Iceland" },
            { name: "Krafla / Víti kráter", badge: "opcionális", duration: "45–60 perc", reviewNote: "Zöld-kék krátertó élénk vulkáni tájon — könnyű túra, de 14 km kerülő, csak ha van rávaló idő · 4.5 ★", detail: "Zöld krátertóval működő rövid kitérő, ha még belefér a keleti menetbe.", maps: "https://www.google.com/maps/search/?api=1&query=Krafla+V%C3%ADti+Iceland" },
            { name: "Dettifoss", badge: "főpont", duration: "45–60 perc", reviewNote: "Európa leghatalmasabb erejű vízesése — a víztömeg és a zúgás fizikailag érezhető, senki sem marad higgadt · 4.7 ★", detail: "A nyugati oldalról a legegyszerűbb, aszfaltos megközelítésű vízesésblokk.", maps: "https://www.google.com/maps/search/?api=1&query=Dettifoss+Iceland" },
            { name: "Selfoss", badge: "epiciceland plusz", duration: "15–20 perc (Dettifoss parkolójából)", reviewNote: "10 perc sétára Dettifosstól — sokkal csendesebb, de szép széles pata, ne hagyd ki · 4.6 ★", detail: "A Dettifoss melletti csendesebb plusz vízesés, ha már ott vagytok a parkolónál.", maps: "https://www.google.com/maps/search/?api=1&query=Selfoss+waterfall+Iceland" },
            { name: "Stuðlagil kanyon", badge: "főpont", duration: "90–120 perc (séta + vissza)", reviewNote: "Izland legszebb bazaltoszlopos kanyonja — a kék víz júliusban halványabb, de a sziklaformák önmagukban lenyűgözők · 4.8 ★", detail: "A bazaltoszlopos kanyon a nap vizuális csúcsa; júliusban inkább a formák, mintsem a szín a lényeg.", maps: "https://www.google.com/maps/search/?api=1&query=Stu%C3%B0lagil+Canyon" },
            { name: "Stuðlafoss", badge: "epiciceland plusz", duration: "20–30 perc", reviewNote: "Stuðlagil melletti rövid extra — bazaltoszlopos mini-vízesés, ugyanabból a parkolóból gyorsítva letudható · 4.5 ★", detail: "Kis bazaltoszlopos vízesés ugyanabból a körből, mint Stuðlagil.", maps: "https://www.google.com/maps/search/?api=1&query=Stu%C3%B0lafoss+Iceland" },
            { name: "Egilsstaðir", badge: "keleti bázis", duration: "30 perc (tankolás + bevásárlás)", detail: "A keleti főváros, ahol még egyszer lehet vásárolni vagy tankolni.", maps: "https://www.google.com/maps/search/?api=1&query=Egilssta%C3%B0ir+Iceland" },
            { name: "Seyðisfjörður", badge: "opcionális kerülő", duration: "2–3 óra (oda-vissza szerpentin)", reviewNote: "Drámai fjord-szerpentin vezet le a szivárványos utcás kisvárosba és a kék templomhoz — energiától függő extra · 4.6 ★", detail: "Szivárványos főutca és kék templom, de csak energiával együtt jó ötlet.", maps: "https://www.google.com/maps/search/?api=1&query=Sey%C3%B0isfj%C3%B6r%C3%B0ur+Iceland" },
            { name: "Hotel Hallormsstaður", badge: "szállás opció", detail: "Erdei környezetű szállás az egilsstaðiri vonalon.", maps: "https://www.google.com/maps/search/?api=1&query=Hotel+Hallormssta%C3%B0ur" },
            { name: "Fosshotel Eastfjords / Hotel Blafell", badge: "szállás opciók", detail: "Ha inkább kijjebb húznátok a szállást a fjordok felé.", maps: "https://www.google.com/maps/search/?api=1&query=Fosshotel+Eastfjords" }
          ]
        },
        {
          num: "5",
          date: "2026. július 23., csütörtök",
          title: "Vestrahorn, Jökulsárlón, Diamond Beach",
          subtitle: "A teljes izlandi rész egyik fotós csúcspontja",
          driveLog: { km: "~320 km", stops: 7, driveTime: "~5 óra", depart: "08:00", arrive: "~22:00", timelinePoints: [{time:"08:00", label:"ind."}, {time:"10:00", label:"Vestrahorn"}, {time:"13:00", label:"Höfn (ebéd)"}, {time:"16:00", label:"Jökulsárlón"}] },
          character: "A keleti fjordok mentén vezetés — látványos szerpentinek, ködös csúcsok. Délután a legjobb gleccser-élmény: Jökulsárlón és Diamond Beach. Sok rövid megálló, kevesebb gyaloglás. Sok fotó-megálló-stop az úton, építsd be a tempóba.",
          rainNote: { icon: "🟡", label: "Esős? Vegyes — Jökulsárlón ok, Vestrahorn és Múlagljúfur nem." },
          tags: [
            { label: "Jökulsárlón", cls: "tag-focus" },
            { label: "Diamond Beach", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "🏔", name: "Vestrahorn / Stokksnes", detail: "Fekete homok, hegyfal és nagyon erős képi világ a Viking Café belépős területén." },
            { time: "délután", icon: "🧊", name: "Jökulsárlón + Diamond Beach", detail: "A nap főpontja, de júliusban készülj rá, hogy délután már tele van; ha kell csónaktúra, előre foglaljátok." },
            { time: "kora este", icon: "🌊", name: "Fjallsárlón + nyugat felé húzás", detail: "Kevésbé zsúfolt gleccserlagúna, majd továbbhaladás a déli part következő szállása felé." }
          ],
          notes: ["⚠️ Keleti fjordok = lassú vezetés! Tényleges menetidő +30-50% a Google Maps-hoz képest (kanyarok, köd). Ne tervezz Google Maps szerint.", "Vestrahorn: ha a Viking Café-nál helyszínen köd van, ne fizess be — a hegy nem látszik, belépő kárba megy.", "Jökulsárlón: júliusban délben tele van — reggel vagy estefelé (20-21h) sokkal jobb. Parkoló ingyenes.", "Diamond Beach: kora reggel vagy késő este a legjobb fotó — júliusban 22-23-ig világos!", "Múlagljúfur: eső után nagyon sáros, vízhatlan cipő kell. Parkoló 1000 ISK, séta 30-45 perc.", "Jökulsárlón csónaktúra (zodiac ~5000 ISK, amfibia ~6000 ISK): érdemes előre foglalni júliusban."],
          links: [
            { label: "Hvalnes", url: "https://www.google.com/maps/place/?q=place_id:ChIJB5-QREDizkgRk9sRDzZTAa0" },
            { label: "Vestrahorn / Stokksnes", url: "https://www.google.com/maps/place/?q=place_id:ChIJ3T8ZQouqz0gR7ONHAE2AO2o" },
            { label: "Höfn", url: "https://www.google.com/maps/place/?q=place_id:ChIJEWvjlkesz0gRl7q4tBP2gN8" },
            { label: "Pakkhús", url: "https://www.google.com/maps/place/?q=place_id:ChIJ1xrcRFqsz0gRJTwvjPlrjAE" },
            { label: "Jökulsárlón", url: "https://www.google.com/maps/place/?q=place_id:ChIJGTg61-zWz0gRqUYB4VnJBc0" },
            { label: "Diamond Beach", url: "https://www.google.com/maps/place/?q=place_id:ChIJ8wb7pBnXz0gRWoQH-WXoAkI" },
            { label: "Múlagljúfur Canyon", url: "https://www.google.com/maps/place/?q=place_id:ChIJh35iEokp0EgR3oaeY0GMoo4" }
          ],
          gpxPlaces: [
            { name: "Djúpivogur – Eggin í Gleðivík", badge: "rövid stop", duration: "15–20 perc", reviewNote: "34 madártojás-szobor a kőgáton — meglepően hangulatos kis installációs megálló a fjordos szakasz elején · 4.4 ★", detail: "34 gránittojásos installáció, gyors útmenti színes nyitás a nap elején.", maps: "https://www.google.com/maps/search/?api=1&query=Eggin+%C3%AD+Gle%C3%B0iv%C3%ADk" },
            { name: "Hvalnes-félsziget", badge: "epiciceland plusz", duration: "20–25 perc", reviewNote: "Vörös csíkos világítótorony, fekete kavicsos part — gyors, de nagyon fotogén kitérő · 4.5 ★", detail: "Vörös világítótorony és fekete part, jó extra Vestrahorn előtt vagy után.", maps: "https://www.google.com/maps/search/?api=1&query=Hvalnes+Iceland" },
            { name: "Vestrahorn / Stokksnes", badge: "főpont", duration: "60–90 perc", reviewNote: "Az egyik legfotogenikusabb hegyvonulat Izlandon — a Viking Café belépőjén túl megnyíló fekete homokos panoráma nem felejtődik el · 4.7 ★", detail: "A kelet-déli átmenet egyik legjobb fotóhelye, belépővel a Viking Café felől.", maps: "https://www.google.com/maps/search/?api=1&query=Vestrahorn+Iceland" },
            { name: "Viking Café", badge: "belépő + kávé", duration: "15 perc (belépő intézés)", detail: "Innen intézhető a stokknesi belépő, plusz rövid pihenő is lehet.", maps: "https://www.google.com/maps/search/?api=1&query=Viking+Caf%C3%A9+Stokksnes" },
            { name: "Höfn", badge: "ebédblokk", duration: "45–60 perc", reviewNote: "A homáros ebéd Pakkhúsban vagy Humarhöfninban az egyik legjobb étkezési élmény az izlandi szakaszon · 4.5 ★", detail: "Pakkhús / Humarhöfnin vonalon működő homáros ebédmegálló.", maps: "https://www.google.com/maps/search/?api=1&query=H%C3%B6fn+Iceland" },
            { name: "Jökulsárlón gleccserlagúna", badge: "nap csúcspontja", googleRating: "4.8", duration: "90–120 perc (csónaktúra nélkül is)", reviewNote: "A legtöbben az egész izlandi útjuk kiemelkedő pillanataként írják le — az amfibia vagy zodiak túra extra szintet ad, de pénzért megéri · 15 000+ értékelés", detail: "A fő gleccserlagúna, ahol a csónaktúra előre foglalása erősen ajánlott.", maps: "https://www.google.com/maps/search/?api=1&query=J%C3%B6kuls%C3%A1rl%C3%B3n+Glacier+Lagoon" },
            { name: "Diamond Beach", badge: "főpont", googleRating: "4.8", duration: "30–45 perc", reviewNote: "A lagúnából kifutó kristályjég fekete homokon — az egyik legcsodálatosabb természeti kép az úton, kora reggel a legszebb · 10 000+ értékelés", detail: "A lagúnából kifutó jégdarabok fekete homokon; rövid sétával is nagy élmény.", maps: "https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Iceland" },
            { name: "Fjallsárlón", badge: "opcionális plusz", duration: "25–35 perc", reviewNote: "Kisebb, csendesebb gleccserlagúna kevesebb turistával — jó, ha még egy extra gleccseres képet szeretnétek · 4.6 ★", detail: "Csendesebb lagúna, ha még kell egy nyugodtabb gleccserblokk Jökulsárlón után.", maps: "https://www.google.com/maps/search/?api=1&query=Fjalls%C3%A1rl%C3%B3n+Iceland" },
            { name: "Múlagljúfur kanyon", badge: "epiciceland plusz", googleRating: "4.9", duration: "75–105 perc (parkoló + séta + vissza)", reviewNote: "Izland egyik legjobban őrzött titka — a 4 km-es gyalogos séta végén két vízesés és egy kanyon vár, a fotósok szerint a Ring Road legjobb epiciceland extra pontja · 4.9 ★", detail: "Nagy extra, ha marad erő: lehajtó, parkoló, majd 30–45 perces séta a kilátóig.", maps: "https://www.google.com/maps/search/?api=1&query=M%C3%BAlaglj%C3%BAfur+Canyon" },
            { name: "Skaftafell / Svartifoss", badge: "esti plusz", googleRating: "4.7", duration: "60–75 perc (parkoló + séta + vissza)", reviewNote: "A bazaltoszlopos vízesés egy könnyű nyári sétán érhető el — a fény Vatnajökull hátterével estére a legjobb · 4.7 ★", detail: "Késő esti fényben még beleférő bazaltoszlopos vízesés, ha marad energia.", maps: "https://www.google.com/maps/search/?api=1&query=Svartifoss+Iceland" }
          ]
        },
        {
          num: "6",
          date: "2026. július 24., péntek",
          title: "Déli part: Fjaðrárgljúfur, Reynisfjara, Skógafoss",
          subtitle: "Sűrű látnivaló nap, ahol a korai indulás kulcstényező",
          driveLog: { km: "~300 km", stops: 8, driveTime: "~4 óra", depart: "07:00", arrive: "~20:00", timelinePoints: [{time:"07:00", label:"ind."}, {time:"09:00", label:"Fjaðrárgljúfur"}, {time:"13:00", label:"Vík / Reynisfjara"}, {time:"16:00", label:"Skógafoss"}] },
          character: "A klasszikus déli part nap. Sok stop, mindenhol turista, de minden megálló annyira ér. Reggel a kelet kanyonjai, délben Vík fekete strand, délután a két ikonikus vízesés. Tömeg-szezon. Korán kell indulni!",
          rainNote: { icon: "🟢", label: "Esős? Jó — vízesések esőben még víztömegesebbek, Reynisfjara drámai." },
          tags: [
            { label: "korai indulás", cls: "tag-open" },
            { label: "puffinok", cls: "tag-focus" }
          ],
          activities: [
            { time: "07:00", icon: "🚗", name: "Korai indulás", detail: "Reggel még sokkal jobb a Fjaðrárgljúfur és a déli parti főpontok ritmusa." },
            { time: "déltáj", icon: "🖤", name: "Vík + Reynisfjara", detail: "A barlang zárva van, de a bazaltoszlopok és a Reynisdrangar sziklák így is erősek; a víztől mindig tartsatok távolságot." },
            { time: "délután / este", icon: "🐧", name: "Dyrhólaey + Skógafoss + Seljalandsfoss", detail: "Puffinok, nagy vízesésblokk és estére továbbhaladás Hella / Hvolsvöllur felé." }
          ],
          notes: ["Indulj 7:00-7:30-kor — Skógafoss és Seljalandsfoss délután 12-15h között a legzsúfoltabb.", "⚠️ Reynisfjara sneaker wave: évente meghal itt valaki. Soha ne fordíts hátat az óceánnak, és maradj minimum 30 méterre a víztől! Ha piros zászló van, ne menj le.", "Seljalandsfoss + Gljúfrabúi: vízálló cipő és esőkabát kötelező — garantáltan megázol.", "Puffin: Dyrhólaey-n délután 16:00 után, este a legjobb (júliusi szezon vége!).", "Skógafoss reggeli fotó jobb — délután a fény szembe süt. A felső lépcső (400 lépcső) fárasztó, de megéri.", "Vík tankolás: N1 a faluban, utolsó nagy benzinkút Selfoss-ig."],
          links: [
            { label: "Fjaðrárgljúfur", url: "https://www.google.com/maps/place/?q=place_id:ChIJ3ZFCWfDl0EgRvbVlccHsIKQ" },
            { label: "Yoda Cave / Gígjagjá", url: "https://www.google.com/maps/place/?q=place_id:ChIJUVwsc1-00EgRp887BfUCdms" },
            { label: "Reynisfjara", url: "https://www.google.com/maps/place/?q=place_id:ChIJkfGf2zBK10gRmC1j9msDIDk" },
            { label: "Dyrhólaey", url: "https://www.google.com/maps/place/?q=place_id:ChIJk9IcF7JJ10gR6yJHDvMw6P0" },
            { label: "Reyniskirkja", url: "https://www.google.com/maps/place/?q=place_id:ChIJhc3pQSFK10gRDTw2ixrG33s" },
            { label: "Skógafoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJFYylOXY710gRSHn-zR_HYA8" },
            { label: "Seljalandsfoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJFSTv6K0e10gRjRcJUiDmAa4" },
            { label: "Lava Show Vík", url: "https://www.google.com/maps/place/?q=place_id:ChIJoYrptR1L10gR8evFv9Ddl6E" }
          ],
          gpxPlaces: [
            { name: "Fjaðrárgljúfur kanyon", badge: "főpont", googleRating: "4.8", duration: "60–75 perc", reviewNote: "Mesebeli serpentines kanyonfalak — korai érkezéssel még nincs tömeg és a reggeli köd a legjobb hangulatot adja · 6 000+ értékelés", detail: "Korai érkezéssel a legjobb; a felső ösvény adja a nap egyik legerősebb első képét.", maps: "https://www.google.com/maps/search/?api=1&query=Fja%C3%B0r%C3%A1rglj%C3%BAfur+Iceland" },
            { name: "Kirkjubæjarklaustur", badge: "tankolás / pihenő", duration: "20–25 perc", detail: "Itt lehet röviden tankolni vagy Systrakaffi felé kitérni, mielőtt a déli part sűrűbbé válik.", maps: "https://www.google.com/maps/search/?api=1&query=Kirkjub%C3%A6jarklaustur+Iceland" },
            { name: "Sólheimasandur DC-3 roncs", badge: "fotós extra", duration: "75–90 perc (4 km oda-vissza)", reviewNote: "Lapos fekete homoksivatagon egyedülálló repülőroncs — erős hangulat, de az időigénye miatt csak ha a napritmus engedi · 4.6 ★", detail: "Hosszabb gyalogos kitérő, amit csak akkor érdemes bevinni, ha vállaljátok az időigényét.", maps: "https://www.google.com/maps/search/?api=1&query=S%C3%B3lheimasandur+plane+wreck" },
            { name: "Vík í Mýrdal", badge: "ebédblokk", duration: "45–60 perc", reviewNote: "Déli-parti főebédhely — The Soup Company, Suður-Vík vagy Smiðjan közül melyiket fogod el; N1 tankolás is itt", detail: "The Soup Company, Suður-Vík vagy Smiðjan vonalon működő ebédmegálló.", maps: "https://www.google.com/maps/search/?api=1&query=V%C3%ADk+%C3%AD+M%C3%BDrdal+Iceland" },
            { name: "Reyniskirkja", badge: "rövid plusz", duration: "15–20 perc", reviewNote: "Fehér fatemplom gyönyörű panorámával Reynisfjara és Vík felett — rövid, de szép kitérő · 4.4 ★", detail: "Fehér fatemplom a dombon, ha kell még egy gyors kilátós megálló Vík előtt.", maps: "https://www.google.com/maps/search/?api=1&query=Reyniskirkja+Iceland" },
            { name: "Reynisfjara", badge: "főpont", googleRating: "4.7", duration: "45–60 perc", reviewNote: "Fekete bazaltoszlopos strand — vizuálisan az egyik legerősebb pont, de a sneaker wave-ek évente embereket ölnek; a 30 méteres szabály nem alku kérdése · 20 000+ értékelés", detail: "A biztonsági szabály itt nem extra, hanem kötelező; a hullámok miatt maradjatok hátrébb.", maps: "https://www.google.com/maps/search/?api=1&query=Reynisfjara+Beach+Iceland" },
            { name: "Dyrhólaey", badge: "puffin + kilátó", googleRating: "4.8", duration: "30–45 perc", reviewNote: "Júliusban puffinok százai fészkelnek itt — 16:00 után a madarak aktívabbak; a természetes kőív az Atlanti-óceán felett egyedülálló kilátó · 8 000+ értékelés", detail: "Júliusban csúcspont a puffinok miatt, plusz erős természetes kőhidas kilátó.", maps: "https://www.google.com/maps/search/?api=1&query=Dyrh%C3%B3laey+Iceland" },
            { name: "Skógafoss", badge: "főpont", duration: "50–70 perc (alap + lépcső opcionális)", reviewNote: "A Ring Road egyik legikonikusabb vízesése — a 400 lépcsős felső ösvény fárasztó, de a fentről látott panoráma megéri · 4.8 ★ · 25 000+ értékelés", detail: "A nagy déli-parti vízesés, amit alulról és a lépcső tetejéről is meg lehet nézni.", maps: "https://www.google.com/maps/search/?api=1&query=Sk%C3%B3gafoss+Iceland" },
            { name: "Seljalandsfoss + Gljúfrabúi", badge: "záró vízeséspár", googleRating: "4.8", duration: "40–55 perc", reviewNote: "Seljalandsfoss mögé be lehet menni (garantált ázás!) — a szomszéd Gljúfrabúi rejtett szurdokba rejt el egy titkos vízesést · 20 000+ értékelés", detail: "A nap végi páros blokk; itt tényleg legyen esőkabát és vízálló cipő.", maps: "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland" },
            { name: "Seljavallalaug / Reykjadalur", badge: "késő esti opciók", duration: "2–3 óra (csak extra energiával)", detail: "Ha marad energiátok, ezek már inkább ünnepi pluszfürdők, nem alapkötelezők.", maps: "https://www.google.com/maps/search/?api=1&query=Seljavallalaug+Iceland" }
          ]
        },
        {
          num: "7",
          date: "2026. július 25., szombat",
          title: "Golden Circle + Keflavík",
          subtitle: "Zárónap fürdővel, paradicsomfarmmal és esti reptérközeli alvással",
          driveLog: { km: "~250 km", stops: 8, driveTime: "~3 óra", depart: "08:30", arrive: "~20:00", timelinePoints: [{time:"08:30", label:"ind."}, {time:"11:00", label:"Secret Lagoon"}, {time:"13:00", label:"Friðheimar"}, {time:"15:00", label:"Geysir / Gullfoss"}] },
          character: "Az utolsó nap és az egyik legrégebbi turistaútvonal. Þingvellir → Geysir → Gullfoss = klasszikus háromszög. Plusz rejtett gyöngyök (Brúarfoss, Faxi, Kerið, Þórufoss). Estére visszaszállás KEF közelében, mert reggel hajnal repülés.",
          rainNote: { icon: "🟢", label: "Esős? Legjobb esőtűrő nap az egész körön — Gullfoss, Geysir, Brúarfoss mind víz-fókuszú." },
          tags: [
            { label: "Golden Circle", cls: "tag-focus" },
            { label: "Keflavík", cls: "tag-city" }
          ],
          activities: [
            { time: "reggel", icon: "♨", name: "Secret Lagoon vagy Laugarás Lagoon", detail: "Reggeli fürdős blokk, még a Golden Circle csúcs előtt." },
            { time: "dél", icon: "🍅", name: "Friðheimar", detail: "Foglalós ebédhely, ami önmagában is élmény; ezt tényleg érdemes előre lekötni." },
            { time: "délután / este", icon: "🌋", name: "Geysir → Gullfoss → Þingvellir → Keflavík", detail: "A nap záró íve, majd esti átvezetés a reptérközeli hotelhez és pakolás." }
          ],
          notes: ["⚠️ Friðheimar: foglalj minimum 1 héttel előre (fridheimar.is)! Nyitva 11:30–16:00, ebédre 12:30-13:30 a legjobb időablak.", "Brúarfoss: 3,5 km gyaloglás egy irányban (~45-60 perc oda). Csak akkor fér be, ha korán indulsz és tényleg tervezel rá.", "⚠️ Bérautó visszaadás: legalább 2-3 órával hajnali járat előtt érj a reptérre. Júliusban KEF security 1-2 óra sormag.", "Tankolj mielőtt visszaadod a kocsit — reptérnél drágább az utolsó pillanatos tankolás.", "A Golden Circle júliusban sokkal jobb nagyon korán (8 előtt) vagy késő este (19+) — a csúcstömeg 9:30–15:30 közt fut."],
          links: [
            { label: "Þingvellir", url: "https://www.google.com/maps/place/?q=place_id:ChIJe2kT-x-B1kgR8mKSB4tsdWs" },
            { label: "Strokkur / Geysir", url: "https://www.google.com/maps/place/?q=place_id:ChIJQx6ihstf1kgR4wuu2I9A_hM" },
            { label: "Gullfoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJ_W-9cc6l1kgRZbQlcba-FYc" },
            { label: "Kerið", url: "https://www.google.com/maps/place/?q=place_id:ChIJV_L2VbeL1kgRB9kuweBEWlE" },
            { label: "Friðheimar", url: "https://www.google.com/maps/place/?q=place_id:ChIJu_eD4_uW1kgRr5VyF_fx5t4" },
            { label: "Friðheimar foglalás", url: "https://www.fridheimar.is/en" },
            { label: "Brúarfoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJ6cRQKbSZ1kgRgcrK-RjqESY" },
            { label: "Faxi", url: "https://www.google.com/maps/place/?q=place_id:ChIJPSFYbGq91kgRcmfSWRwPVw4" }
          ],
          gpxPlaces: [
            { name: "Kerið kráter", badge: "nyitó stop", duration: "25–35 perc", reviewNote: "Türkiz-zöld krátertó intenzív vörös vulkáni falak között — könnyű séta, gyors, de erős vizuális nyitás a zárónaphoz · 4.5 ★", detail: "Rövid, látványos vulkáni nyitás, ami jól működik a tömeges főpontok előtt.", maps: "https://www.google.com/maps/search/?api=1&query=Keri%C3%B0+crater+Iceland" },
            { name: "Secret Lagoon", badge: "fő fürdő", googleRating: "4.6", duration: "90–120 perc", reviewNote: "A legrégebbi izlandi fürdő természetes geotermikus medencével — csendesebb és hitelesebb, mint a tömegesebb alternatívák · 5 000+ értékelés", detail: "A régebbi, nyugodtabb fürdőválasztás a Golden Circle elején.", maps: "https://www.google.com/maps/search/?api=1&query=Secret+Lagoon+Fl%C3%BA%C3%B0ir" },
            { name: "Laugarás Lagoon", badge: "alternatíva", duration: "90–120 perc", reviewNote: "Modern, friss alternatíva a Secret Lagoonhoz — újabb létesítmény, kevésbé ismert, de jól felszerelt · 4.5 ★", detail: "Újabb, frissebb alternatíva, ha inkább modernebb fürdőt szeretnétek.", maps: "https://www.google.com/maps/search/?api=1&query=Laugar%C3%A1s+Lagoon+Iceland" },
            { name: "Friðheimar", badge: "fő ebédpont", googleRating: "4.7", duration: "80–100 perc (foglalós, ülős ebéd)", reviewNote: "Paradicsomfarmos üvegházi étterem — a korlátlan paradicsomleves és a paradicsom-alapú koktélok már önmagában megérnek egy foglalást · 5 000+ értékelés · FOGLALJ ELŐRE!", detail: "Paradicsomfarmos étterem, amit tényleg időben foglalni kell.", maps: "https://www.google.com/maps/search/?api=1&query=Fri%C3%B0heimar+Iceland" },
            { name: "Brúarfoss", badge: "epiciceland plusz", googleRating: "4.8", duration: "90–120 perc (7 km oda-vissza)", reviewNote: "Izland legkékebb vízesése — nehéz megközelítés, de a türkiz szín és a bazaltoszlopos medence az egyik legemlékezetesebb kép · 4.8 ★", detail: "Türkiz vízeséses extra kitérő; csak akkor fér be kényelmesen, ha korán indultok.", maps: "https://www.google.com/maps/search/?api=1&query=Br%C3%BAarfoss+Iceland" },
            { name: "Geysir / Strokkur", badge: "főpont", googleRating: "4.7", duration: "30–45 perc", reviewNote: "A Strokkur 5–8 percenként tör ki — rövid várakozás után garantált az élmény; a gejzír-területen múzeum és étterem is van · 20 000+ értékelés", detail: "A Strokkur a fő látvány, itt rövid várakozással is megkapjátok a gejzírélményt.", maps: "https://www.google.com/maps/search/?api=1&query=Strokkur+Geyser+Iceland" },
            { name: "Faxi vízesés", badge: "epiciceland plusz", duration: "15–20 perc", reviewNote: "Kisebb, lazább vízesés Geysir és Gullfoss között — jó szünet, ha kell egy rövid megálló az autóból · 4.4 ★", detail: "Kisebb, lazább extra vízesés Geysir és Gullfoss között.", maps: "https://www.google.com/maps/search/?api=1&query=Faxi+waterfall+Iceland" },
            { name: "Gullfoss", badge: "főpont", googleRating: "4.9", duration: "40–55 perc", reviewNote: "Izland legjobban értékelt természeti pontja — a kétlépéses vízesés hatalmas vízmennyisége júniusban–júliusban tetőzik; tömegben is megrázó · 40 000+ értékelés", detail: "A Golden Circle egyik legerősebb főpontja, még tömegben is megéri.", maps: "https://www.google.com/maps/search/?api=1&query=Gullfoss+Waterfall+Iceland" },
            { name: "Þingvellir Nemzeti Park", badge: "főpont", googleRating: "4.7", duration: "60–90 perc", reviewNote: "Ahol a két tektonikai lemez eltávolodik egymástól — egyszerre geológiai csoda és a vikingkor politikai szíve; a séta önmagában is elgondolkodtató · 18 000+ értékelés", detail: "Geológiai és történeti főhelyszín, jó zárása az utolsó teljes izlandi napnak.", maps: "https://www.google.com/maps/search/?api=1&query=%C3%9Eingvellir+National+Park" },
            { name: "Silfra-hasadék", badge: "opcionális aktivitás", duration: "3–4 óra (snorkeling tour)", reviewNote: "A világ egyik legjobb snorkeling helyszíne két kontinens között — jeges víz (+2°C), de a láthatóság 100+ méter · ELŐRE FOGLALÓS · 4.8 ★", detail: "Ha előre foglaltatok, ez külön fél naposabb élmény is lehet, ne zsúfoljátok be erőből.", maps: "https://www.google.com/maps/search/?api=1&query=Silfra+Iceland" },
            { name: "Þórufoss", badge: "epiciceland plusz", googleRating: "4.8", duration: "20–25 perc", reviewNote: "Reykjavík közelében a legkönnyebben elérhető kis vízesés — Game of Thrones-helyszín, jó utolsó gyors megálló hazafelé · 4.8 ★", detail: "Game of Thrones-vízesés Reykjavík felé, ha még kell egy utolsó rövid plusz stop.", maps: "https://www.google.com/maps/search/?api=1&query=%C3%9E%C3%B3rufoss+Iceland" },
            { name: "Aurora Hotel / Hotel Berg / Northern Light Inn", badge: "reptér közeli szállások", detail: "Az utolsó este itt már a hajnali reptéri súrlódásmentesség a döntő szempont.", maps: "https://www.google.com/maps/search/?api=1&query=Aurora+Hotel+by+Keflavik+Airport" }
          ]
        },
        {
          num: "8",
          date: "2026. július 26., vasárnap",
          title: "Távozás",
          subtitle: "Autóleadás, tankolás, hajnal",
          tags: [
            { label: "reptér", cls: "tag-flight" },
            { label: "autóleadás", cls: "tag-focus" }
          ],
          activities: [
            { time: "hajnal", icon: "⛽", name: "Utolsó tankolás", detail: "N1 vagy Olís a reptér mellett, mielőtt visszaadjátok az autót." },
            { time: "indulás előtt", icon: "🚗", name: "Autóleadás", detail: "Ellenőrizzétek, hogy van-e 24/7 kulcsleadás vagy mikor nyit a kölcsönző." },
            { time: "reggel", icon: "✈", name: "Reptéri indulás", detail: "Innen már átfordul a szál a közös stockholmi visszaérkezésbe és az autós hazaútba." }
          ],
          notes: ["A hajnali szakasz legyen minél súrlódásmentesebb: előző este legyen kész a pakolás.", "A reptéri leadásnál érdemes 2–3 órás puffert hagyni a hajnali indulás előtt, különösen júliusban."],
          gpxPlaces: [
            { name: "KEF reptér", badge: "leadás + indulás", detail: "Bérautó-visszaadás, check-in és a közös izlandi szakasz lezárása.", maps: "https://www.google.com/maps/search/?api=1&query=Keflav%C3%ADk+Airport" },
            { name: "N1 / Olís a reptér mellett", badge: "utolsó tankolás", detail: "Érdemes erre külön időt hagyni, ne a leadásnál csússzon el a hajnal.", maps: "https://www.google.com/maps/search/?api=1&query=N1+Keflavik+Airport" },
            { name: "Autóleadási logisztika", badge: "ellenőrzendő", detail: "24/7 kulcsleadás vagy nyitási idő ellenőrzése még előző este legyen kész.", maps: "https://www.google.com/maps/search/?api=1&query=Keflavik+car+rental+return" }
          ]
        }
      ]
    },
    hazaut: {
      kicker: "Közös lezáró blokk",
      title: "Hazaút",
      pill: "Svédország → Dánia → Németország → Budapest",
      accent: "return",
      intro: [
        "A hazaút itt már nem külön célországokra bontva van kezelve, hanem egyetlen közös lezáró expeditionként. A logika: Reykjavíkból vissza, autófelvétel, majd fokozatosan dél felé gurulás.",
        "A részletes bontás inkább az etapméretezésről, a hidakról, a városi kis pihenőkről és a nagy német autópályás blokkról szól."
      ],
      context: [
        {
          title: "🇸🇪 / 🇩🇰 / 🇩🇪 Hazaút-stratégia",
          accent: "return",
          open: true,
          cards: [
            {
              title: "Svéd rész",
              paragraphs: [
                "Stockholm és Malmö között még mindig hosszú a táv, ezért itt nem új városnéző napot, hanem tiszta visszaút-struktúrát érdemes építeni."
              ]
            },
            {
              title: "Dán betét",
              paragraphs: [
                "Koppenhága és az Øresund Bridge pont annyi fellazítást ad a route-nak, hogy a német blokk ne legyen egyből túl kemény."
              ]
            },
            {
              title: "Német lezárás",
              paragraphs: [
                "Itt már az autópályás kitartás és a jó tranzitszállás a fontos. Nem kell többet ígérni, mint amit a ritmus kényelmesen elbír."
              ]
            }
          ]
        }
      ],
      days: [
        {
          num: "1",
          date: "2026. július 26., vasárnap",
          title: "Stockholm — FI306 érkezés + Gamla Stan + Monteliusvägen",
          subtitle: "Arlanda → Gamla Stan → Stadshuset → Riddarholmen → Monteliusvägen panoráma → Södermalm vacsora",
          open: true,
          driveLog: { km: "~40 km (Arlanda → Stockholm centrum)", stops: 4, driveTime: "~40 perc", depart: "07:35 (FI306 KEF)", arrive: "~13:30 Stockholm", timelinePoints: [{time:"07:35", label:"FI306 KEF"}, {time:"12:45", label:"Arlanda"}, {time:"14:00", label:"Gamla Stan"}, {time:"17:30", label:"Monteliusvägen"}, {time:"20:00", label:"vacsora"}] },
          tags: [
            { label: "FI306", cls: "tag-flight" },
            { label: "Gamla Stan", cls: "tag-city" },
            { label: "Monteliusvägen", cls: "tag-focus" }
          ],
          activities: [
            { time: "07:35", icon: "✈", name: "Icelandair FI306 — KEF → ARN", detail: "Reykjavík/Keflavík → Stockholm/Arlanda, 07:35 → 12:45. Az autót az Arlanda P2 Beta vagy Flygets P1 parkolóban hagyjuk (másnap kivesszük). Tömegközlekedéssel be a városba: Arlanda Express (~20 perc, 300 SEK) vagy pendelbuss (~45 perc, olcsóbb)." },
            { time: "14:00", icon: "🏘", name: "<a href='https://www.google.com/maps/search/?api=1&query=Gamla+Stan+Stockholm' target='_blank' rel='noreferrer'>Gamla Stan</a> (★4.7) — Stortorget + Storkyrkan", detail: "<a href='https://www.google.com/maps/search/?api=1&query=Stortorget+Stockholm+Gamla+Stan' target='_blank' rel='noreferrer'>Stortorget</a> (★4.7): a középkori főtér élénk színű házsora az egyik legikonikusabb stockholmi kép. Mellette a <a href='https://www.google.com/maps/search/?api=1&query=Storkyrkan+Cathedral+Stockholm' target='_blank' rel='noreferrer'>Storkyrkan katedrális</a> (★4.6) — a legrégebbi stockholmi egyház (1300-as évek), belül a Sárkányölő György fából faragott szobra lenyűgöző. Nobel Prize Museum (★4.5) a főtéren, ha bejönne." },
            { time: "15:00", icon: "👑", name: "<a href='https://www.google.com/maps/search/?api=1&query=Royal+Palace+Stockholm' target='_blank' rel='noreferrer'>Kungliga Slottet</a> (★4.5) — Királyi Palota külseje + Vaktársak", detail: "Európa egyik legnagyobb lakott királyi palotája, 600 szobával. Kívülről a legjobb: délidőben a díszőrség váltása (12:15 hétköznap, 13:15 vasárnap) jó show. A palota előtti tér a <a href='https://www.google.com/maps/search/?api=1&query=Lejonbacken+Stockholm+Royal+Palace' target='_blank' rel='noreferrer'>Lejonbacken</a> a legjobb fotó-szög." },
            { time: "15:45", icon: "🏙", name: "<a href='https://www.google.com/maps/search/?api=1&query=Riddarholmen+Stockholm' target='_blank' rel='noreferrer'>Riddarholmen</a> (★4.6) + <a href='https://www.google.com/maps/search/?api=1&query=Stadshuset+Stockholm' target='_blank' rel='noreferrer'>Stadshuset</a> (★4.6) kívülről", detail: "Riddarholmen a Gamla Stan mögötti kis sziget — a legjobb panoráma Stockholmra a Riddarfjärden öböl felett. Innentől gyalog a Stadshusig (~10 perc): a Nobel-bankett helyszíne, kék és arany csarnokával, 10 270 sípból álló orgonájával. Kívülről is erős kép, de a belső túra (10:00–16:00, ~130 SEK) megéri ha marad idő." },
            { time: "17:30", icon: "🌅", name: "<a href='https://www.google.com/maps/search/?api=1&query=Monteliusvagen+Stockholm' target='_blank' rel='noreferrer'>Monteliusvägen sétány</a> (★4.7) — Stockholm legjobb ingyenes panorámája", detail: "500 méteres sétányútvonal a Södermalm sziklaperméin, teljesen ingyenes. Lenyűgöző kilátás a Riddarfjärdenre, a Stadshusra, a Gamla Stanra és a Mälaren-tóra — különösen napszállta körül. Vasárnap délután viszonylag csendes. Padok a sétány mentén." },
            { time: "19:30", icon: "🍽", name: "Vacsora Södermalmon", detail: "<a href='https://www.google.com/maps/search/?api=1&query=Pelikan+Restaurant+Stockholm' target='_blank' rel='noreferrer'>Pelikan</a> (★4.3): klasszikus svéd brasserie Södermalm szívén, vastag fából készült asztalok és svéd háziételek (köttbullar, strömming). Alternatíva: <a href='https://www.google.com/maps/search/?api=1&query=Mosebacke+Etablissement+Stockholm' target='_blank' rel='noreferrer'>Mosebacke Etablissement</a> (★4.4) terasz a magasból — ha szép az idő, jobb kilátó mint Monteliusvägen." }
          ],
          notes: ["Autóátvétel Arlandán: az autót tartsuk az Arlanda parkolóban másnap reggelig — a városban felesleges az autó, tömegközlekedés vagy séta hatékonyabb.", "Gamla Stan vasárnap délután tömeges — az első esti sétáig megvan a türelmesebb ablak.", "Szállás: Norrmalm / Gamla Stan / Södermalm közelében a legjobb bázis — ne Arlanda-hotel.", "Monteliusvägen: napszállta ~22:00 körül van júliusban — este 9-10-kor is érdemes felmenni."]
        },
        {
          num: "2",
          date: "2026. július 27., hétfő",
          title: "Stockholm — Vasa Museum + Djurgården + Skansen + Fotografiska",
          subtitle: "Múzeumi nap Djurgårdenon — este Fotografiska tetőteraszon",
          driveLog: { km: "~8 km (városon belül)", stops: 4, driveTime: "gyalogos / hajós nap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"Vasa Museum"}, {time:"11:30", label:"Djurgården"}, {time:"13:00", label:"Skansen"}, {time:"17:00", label:"Fotografiska"}, {time:"20:00", label:"vacsora"}] },
          tags: [
            { label: "Vasa Museum", cls: "tag-focus" },
            { label: "Djurgården", cls: "tag-nature" },
            { label: "Fotografiska", cls: "tag-focus" }
          ],
          activities: [
            { time: "09:00–11:30", icon: "⛵", name: "<a href='https://www.google.com/maps/search/?api=1&query=Vasa+Museum+Stockholm' target='_blank' rel='noreferrer'>Vasa Museum</a> (★4.8) — Skandinávia leglátogatottabb múzeuma", detail: "1628-ban elsüllyedt, majd 333 év múlva kiemeltek egy 69 méter hosszú, teljesen ép 17. századi hadihajó — ebből a múzeum. Az egyik legsokkolóbb muzeumlátogatás Európában: a hajó magassága lenyűgöző, a fafaragások részletei félelmetesek. ⚠️ Júliusban KÖTELEZŐ az online előfoglalás — walk-in sor akár 1-2 óra. Belépő ~190 SEK. Nyitva 10:00–17:00 (szerdán 20:00-ig)." },
            { time: "11:30–14:00", icon: "🌲", name: "<a href='https://www.google.com/maps/search/?api=1&query=Djurgarden+Stockholm' target='_blank' rel='noreferrer'>Djurgården</a> (★4.7) + <a href='https://www.google.com/maps/search/?api=1&query=Skansen+Stockholm' target='_blank' rel='noreferrer'>Skansen</a> (★4.5) — ebéd a parkban", detail: "Djurgården Stockholm zöld szigete, a Vasától gyalog elérhető. Skansen a világ első szabadtéri múzeuma (1891): 150 áttelepített svéd épület, nordic állatpark (jávorszarvas, farkas, rén). Ebéd a <a href='https://www.google.com/maps/search/?api=1&query=Rosendals+Tradgard+Stockholm' target='_blank' rel='noreferrer'>Rosendals Trädgård</a> (★4.5) biokertészeti kávézóban — friss péksüti, kert, csönd. Az <a href='https://www.google.com/maps/search/?api=1&query=ABBA+The+Museum+Stockholm' target='_blank' rel='noreferrer'>ABBA The Museum</a> (★4.3) is Djurgårdenon — ha érdekli, kb. 1 óra." },
            { time: "14:30–17:00", icon: "🎨", name: "<a href='https://www.google.com/maps/search/?api=1&query=Moderna+Museet+Stockholm' target='_blank' rel='noreferrer'>Moderna Museet</a> (★4.5) — Picasso, Dalí, Warhol", detail: "Skeppsholmen szigetén, ingyen belépős állandó kiállítással (Dalí, Picasso, Warhol, Matisse, Kandinsky) — az egyik legfontosabb modern képzőművészeti gyűjtemény Skandináviában. A sziget maga is szép sétára: <a href='https://www.google.com/maps/search/?api=1&query=Skeppsholmen+Stockholm' target='_blank' rel='noreferrer'>Skeppsholmen</a> (★4.6) vízparti panorámájával." },
            { time: "17:00–20:00", icon: "📸", name: "<a href='https://www.google.com/maps/search/?api=1&query=Fotografiska+Stockholm' target='_blank' rel='noreferrer'>Fotografiska</a> (★4.6) — kortárs fotóművészet + tetőterasz", detail: "Södermalm kikötői részén, egykori vámházban működő kortárs fotóművészeti múzeum. Évente 20+ időszaki kiállítás. A tetőteraszi étterem (Michelin Green Star) svéd tengeri fogásokkal és Stockholm-panorámával zárja a napot. Nyitva kedd 10:00–23:00-ig. Belépő ~195 SEK." },
            { time: "20:00", icon: "🍽", name: "Vacsora Södermalmon", detail: "<a href='https://www.google.com/maps/search/?api=1&query=Pelikan+Restaurant+Sodermalm+Stockholm' target='_blank' rel='noreferrer'>Pelikan</a> (★4.3, klasszikus svéd brasserie), <a href='https://www.google.com/maps/search/?api=1&query=Nytorget+Urban+Deli+Stockholm' target='_blank' rel='noreferrer'>Nytorget Urban Deli</a> (★4.2), vagy <a href='https://www.google.com/maps/search/?api=1&query=Djuret+restaurant+Stockholm' target='_blank' rel='noreferrer'>Djuret</a> (★4.4, farm-to-table) a Gamla Stan irányban." }
          ],
          notes: ["⚠️ Vasa Museum: KÖTELEZŐ online előfoglalás júliusban — vasamuseet.se, belépő ~190 SEK/fő.", "Moderna Museet: az állandó kiállítás ingyenes, csak az időszaki kiállítások fizetősek (~150 SEK).", "Skansen belépő: ~230 SEK/fő — ha csak a Djurgården-parkot nézitek meg, az ingyenes.", "Másnap: Archipelago nap — egész nap hajóval a szigeteken, korai indulás Strömkajenről."]
        },
        {
          num: "3",
          date: "2026. július 28., kedd",
          title: "Stockholm Archipelago — Vaxholm + Grinda szigetek",
          subtitle: "Egész napos hajókaland a stockholmi szigetvilágban — Waxholmsbolaget komp, erőd, gránit, füstölt hering",
          driveLog: { km: "~0 km (kompos nap)", stops: 3, driveTime: "kompos nap", depart: "09:00 Strömkajen", arrive: "~20:00 Stockholm", timelinePoints: [{time:"09:00", label:"Strömkajen komp"}, {time:"10:15", label:"Vaxholm"}, {time:"11:30", label:"Grinda kompon"}, {time:"12:00", label:"Grinda (ebéd)"}, {time:"16:30", label:"Visszakomp"}, {time:"19:30", label:"Stockholm"}] },
          tags: [
            { label: "Archipelago", cls: "tag-nature" },
            { label: "Vaxholm", cls: "tag-focus" },
            { label: "Grinda", cls: "tag-nature" }
          ],
          activities: [
            { time: "09:00", icon: "⛵", name: "<a href='https://www.google.com/maps/search/?api=1&query=Stromkajen+Stockholm' target='_blank' rel='noreferrer'>Strömkajen komp</a> — Waxholmsbolaget menetrend", detail: "A <a href='https://www.waxholmsbolaget.se/en/' target='_blank' rel='noreferrer'>Waxholmsbolaget</a> ferryk Strömkajentől (a Ström-hídtól keletre) indulnak — közel a Gamla Stanhoz. Jegy: kb. 150–200 SEK/fő/irány, SL-kártyával kedvezményes. Az archipelago bérlet (Båtluffarkort) ~500 SEK, 5 napra korlátlan — ha több kirándulást tervezel, megéri. <strong><a href='https://www.waxholmsbolaget.se/en/timetables/' target='_blank' rel='noreferrer'>→ Online jegy és menetrend: waxholmsbolaget.se</a></strong> — érdemes előre megnézni a Vaxholm–Grinda vonalat a konkrét napra." },
            { time: "10:15", icon: "🏰", name: "<a href='https://www.google.com/maps/search/?api=1&query=Vaxholm+Fortress+Stockholm' target='_blank' rel='noreferrer'>Vaxholm</a> (★4.5) — erőd, favárosi utcák, füstölt hering", detail: "Vaxholm az archipelago 'fővárosa' — kb. 1 óra hajóútra Stockholmtól. A <a href='https://www.google.com/maps/search/?api=1&query=Vaxholm+Castle+Museum' target='_blank' rel='noreferrer'>Vaxholmi Erőd</a> (★4.3) egy kis szigeten áll a kikötővel szemben — csónakkal is megközelíthető. A városka fő utcája (Hamngatan) rövid sétálóutca faházakkal, piros-fehér svéd épületekkel. ⚓ Kötelező megálló: a kikötői Waxholms Hotell előtti parton füstölt hering (rökt strömming) szendvicset venni valamelyik halasstandon — ez az archipelago-saját street foodja." },
            { time: "11:30", icon: "⛵", name: "Vaxholm → Grinda komp (~1 óra)", detail: "A Waxholmsbolaget menetrend alapján az összekötő kompon Grindáig ~1 óra. A hajóút maga is élmény: a gránitsziklák egyre kisebbek és kopárrabbak lesznek, a fenyők meghajolnak a szél irányában, és alig van ember." },
            { time: "12:30", icon: "🌲", name: "<a href='https://www.google.com/maps/search/?api=1&query=Grinda+island+Stockholm+archipelago' target='_blank' rel='noreferrer'>Grinda sziget</a> (★4.6) — úszás, gránit, erdei ösvények", detail: "Grinda az egyik legtermészetesebb közeli sziget — nincs autó, nincs zajos turista-infrastruktúra. A gránitsiklók közt úszás az egyik legjobb stockholmi élmény. Erdei sétaösvények (~5 km) körbevezetnek a szigeten, fenyőerdőn, vöröshagymás réteken. A <a href='https://www.google.com/maps/search/?api=1&query=Grinda+Wardshus' target='_blank' rel='noreferrer'>Grinda Wärdshus</a> (★4.3) a sziget egyetlen éttermeje és panzióvendéglője — ebéd: friss halételek, helyi sör, veranda kilátással a tengerre. <strong><a href='https://www.grindawardshus.se/boka-bord/' target='_blank' rel='noreferrer'>→ Asztalfoglalás: grindawardshus.se/boka-bord</a></strong> — júliusban kötelező előre foglalni, nélküle nincs garantált ebéd." },
            { time: "16:30", icon: "⛵", name: "Grinda → Stockholm visszakomp (~2 óra)", detail: "A közvetlen visszakomp Grindáról Strömkajenig ~2 óra — végig a belső csatornákon keresztül, egyre sűrűsödő szigetvilágban. Az alkonyati fény és a visszaút látványa (kis szigetek, régi favároskák, jachtok) az egyik legjobb svédországi élmény." },
            { time: "19:30", icon: "🌅", name: "Visszaérkezés Stockholmba — esti séta", detail: "Visszatérés Strömkajenhez, onnan Gamla Stan vagy Södermalm felé. Utolsó stockholmi vacsora — <a href='https://www.google.com/maps/search/?api=1&query=Pelikan+Restaurant+Stockholm' target='_blank' rel='noreferrer'>Pelikan</a> (★4.3) vagy <a href='https://www.google.com/maps/search/?api=1&query=Mosebacke+Etablissement+Stockholm' target='_blank' rel='noreferrer'>Mosebacke Etablissement</a> (★4.4) teraszán — búcsú Stockholmtól." }
          ],
          notes: ["⚠️ Korai indulás másnap: Stockholm → Malmö → Koppenhága (~650 km) 07:00-as starttal indul — érdemes már este összepakolni.", "Grinda Wärdshus foglalás: <a href='https://www.grindawardshus.se/boka-bord/' target='_blank' rel='noreferrer'>grindawardshus.se/boka-bord</a> — júliusban kötelező előre foglalni, nélküle nincs garantált ebéd a szigeten.", "Waxholmsbolaget jegy + menetrend: <a href='https://www.waxholmsbolaget.se/en/timetables/' target='_blank' rel='noreferrer'>waxholmsbolaget.se</a> — a 'Vaxholm–Grinda' vonal naponta 5–6 járattal megy nyáron, ellenőrizd a konkrét napot előre.", "Ha rossz az idő (eső, szél): Fjäderholmarna (20 perc, ★4.3) jó alternatíva — közel, fedett helyek is vannak, de jó időben a Vaxholm+Grinda kombináció összehasonlíthatatlanul erősebb."]
        },
        {
          num: "4",
          date: "2026. július 29., szerda",
          title: "Stockholm → Malmö → Koppenhága",
          subtitle: "Svéd autópályás etap ~650 km: Malmö fotóstop (Turning Torso), Øresund Bridge, délutáni érkezés Koppenhágába",
          driveLog: { km: "~650 km", stops: 3, driveTime: "~7 óra", depart: "07:00", arrive: "~14:00 Koppenhága", timelinePoints: [{time:"07:00", label:"Stockholm ind."}, {time:"10:30", label:"Jönköping"}, {time:"11:30", label:"Malmö"}, {time:"12:30", label:"Øresund"}, {time:"14:00", label:"Koppenhága"}] },
          tags: [
            { label: "~650 km", cls: "tag-drive" },
            { label: "Øresund Bridge", cls: "tag-focus" },
            { label: "Koppenhága", cls: "tag-city" }
          ],
          activities: [
            { time: "07:00", icon: "🚗", name: "Korai indulás Stockholmból — E4 dél felé", detail: "07:00-as start elegendő a ~650 km-es naphoz. Stockholm → Helsingborg ~480 km, svéd autópályán 110 km/h, nincs útdíj. A reggeli svéd táj üres és pihentető, a forgalom minimális." },
            { time: "10:30", icon: "⛽", name: "Jönköping-tájék — tankolás + pihenő", detail: "Jönköping kb. 330 km-re van Stockholmtól (~3,5h), a Vättern-tó déli csücskénél. Jó tankolós megálló — svéd benzin olcsóbb, mint dán." },
            { time: "11:30", icon: "🌀", name: "<a href='https://www.google.com/maps/search/?api=1&query=Turning+Torso+Malmo' target='_blank' rel='noreferrer'>Malmö — Turning Torso</a> (★4.3) + Stortorget · 45 perces fotóstop", detail: "Malmöba fotóstopra térünk be. A <a href='https://www.google.com/maps/search/?api=1&query=Turning+Torso+Malmo' target='_blank' rel='noreferrer'>Turning Torso</a> (★4.3, Santiago Calatrava, 190 m) a Västra Hamnen negyedben — lakóépület, belülről nem látogatható, de kívülről emblematikus. Séta a tengerparton, 5 perc a <a href='https://www.google.com/maps/search/?api=1&query=Stortorget+Malmo' target='_blank' rel='noreferrer'>Stortorgetre</a> (★4.3), és folytatás az Øresund-híd felé." },
            { time: "12:30", icon: "🌉", name: "<a href='https://www.google.com/maps/search/?api=1&query=Oresund+Bridge' target='_blank' rel='noreferrer'>Øresund Bridge</a> (★4.5) — Malmö → Koppenhága", detail: "8 km híd + 4 km alagút kombináció. Díj: ~400 DKK (~54 EUR) — előre fizethető online: oresundsbron.com." },
            { time: "14:00", icon: "🏙", name: "Koppenhága — érkezés, szállás + első séta", detail: "Délutáni érkezés — bejelentkezés a szállásba, majd első koppenhágai séta a <a href='https://www.google.com/maps/search/?api=1&query=Nyhavn+Copenhagen' target='_blank' rel='noreferrer'>Nyhavn</a> (★4.6) felé. Este vacsora a <a href='https://www.google.com/maps/search/?api=1&query=Torvehallerne+Copenhagen' target='_blank' rel='noreferrer'>Torvehallerne</a> (★4.5) fedett piaccsarnokban — friss smørrebrød, dán delikatesszek, helyi sör." }
          ],
          notes: ["Øresund-díj online előre fizethető: oresundsbron.com — gyorsabb átkelés.", "Koppenhága szállás: Nørreport / Indre By / Vesterbro negyedek ideálisak bázisnak — metróközelben minden elérhető.", "Parkolás Koppenhágában: a belváros drága (~40 DKK/30 perc) — legjobb stratégia a külső P+R parkolók metróállomásoknál (~80 DKK/nap), és onnan metróval be. Pl. Vanløse, Frederiksberg.", "Holnap: egész napos városnap — Rosenborg kastély, Tivoli, Strøget."]
        },
        {
          num: "5",
          date: "2026. július 30., csütörtök",
          title: "Koppenhága 1. nap — Nyhavn + Rosenborg + Tivoli",
          subtitle: "A dán főváros ikonjai — kastély, sétálóutca, csatorna és a világ legrégebbi vidámparkja",
          driveLog: { km: "~5 km (városon belül)", stops: 4, driveTime: "gyalogos / metró nap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"Nyhavn"}, {time:"11:00", label:"Rosenborg"}, {time:"14:00", label:"Strøget"}, {time:"17:00", label:"Tivoli"}] },
          tags: [
            { label: "Nyhavn", cls: "tag-focus" },
            { label: "Rosenborg", cls: "tag-city" },
            { label: "Tivoli", cls: "tag-city" }
          ],
          activities: [
            { time: "09:00", icon: "⚓", name: "<a href='https://www.google.com/maps/search/?api=1&query=Nyhavn+Copenhagen' target='_blank' rel='noreferrer'>Nyhavn</a> (★4.6) — a csatorna reggel", detail: "Koppenhága legfotogénebb pontja: a 17. századi színes kikötői házak és a csónakok teli csatorna. Reggel sokkal csendesebb, mint délben. Hans Christian Andersen itt lakott (Nyhavn 20 és 67) — emléktáblák a házon. Reggeli a csatorna melletti kávézók egyikében (La Glace, Espresso House)." },
            { time: "10:00", icon: "🏰", name: "<a href='https://www.google.com/maps/search/?api=1&query=Rosenborg+Castle+Copenhagen' target='_blank' rel='noreferrer'>Rosenborg Slot</a> (★4.6) — dán koronázási ékszerek", detail: "17. századi reneszánsz kastély a Kongens Have parkban — ez az egyetlen helyszín, ahol a dán koronázási ékszerek és a királyi regáliák megtekinthetők. A park (★4.6) maga ingyenes és tökéletes reggeli sétatér. Belépő: ~145 DKK/fő. Nyitva: 10:00–17:00." },
            { time: "12:00", icon: "🥪", name: "<a href='https://www.google.com/maps/search/?api=1&query=Torvehallerne+Copenhagen' target='_blank' rel='noreferrer'>Torvehallerne</a> (★4.5) — dán smørrebrød ebéd", detail: "Fedett piaccsarnok friss smørrebrød-del (nyitott szendvics), dán sajtokkal, heringgel, rejesalátával és kézműves sörkkel. Ez Koppenhága legjobb ebédhely-koncentrátuma. Kb. 10 percre a Rosenborgtól." },
            { time: "13:30", icon: "🚶", name: "<a href='https://www.google.com/maps/search/?api=1&query=Stroget+Copenhagen' target='_blank' rel='noreferrer'>Strøget</a> (★4.5) + <a href='https://www.google.com/maps/search/?api=1&query=Amagertorv+Copenhagen' target='_blank' rel='noreferrer'>Amagertorv</a> — Európa leghosszabb gyalogos sétálóutcája", detail: "1,1 km-es gyalogos utca a Rådhuspladstól Kgs. Nytorvig — dizájnüzletek, dán brand-ek (Georg Jensen, Royal Copenhagen), utcazenészek. A Strøget közepén az Amagertorv tér a legjobb fotópont a csempe-kúttal." },
            { time: "16:00", icon: "🎡", name: "<a href='https://www.google.com/maps/search/?api=1&query=Tivoli+Gardens+Copenhagen' target='_blank' rel='noreferrer'>Tivoli Gardens</a> (★4.5) — 1843 óta nyitva", detail: "A világ egyik legrégebbi és legbájosabb vidámparkja, Koppenhága szívén. Nem csak attrakciók: a kert hangulata (lanternák, virágzó bokrok, nyári estek) önmagában különleges. Estére a kivilágítás egészen mágikus. Belépő: ~165 DKK/fő (attrakciók nélkül is érdemes), nyitva: 11:00–23:00 (nyári pénteken és szombaton 00:00-ig)." },
            { time: "20:00", icon: "🍽", name: "Vacsora Vesterbro / Indre By negyedben", detail: "<a href='https://www.google.com/maps/search/?api=1&query=Papiroen+Copenhagen+Street+Food' target='_blank' rel='noreferrer'>Papirøen Street Food Market</a> (★4.3, ha nyitva) vagy <a href='https://www.google.com/maps/search/?api=1&query=Kodbyens+Fiskebar+Copenhagen' target='_blank' rel='noreferrer'>Kødbyens Fiskebar</a> (★4.2) a régi húspiacnegyedben — friss dán tenger gyümölcsei, természetes borok." }
          ],
          notes: ["Tivoli belépő előre érdemes megvenni online: tivoli.dk — júliusban kapacitáskorlát van.", "Rosenborg Slot: érdemes a koronázási ékszerekre fókuszálni — ez az egyetlen hely Dániában ahol láthatók.", "Metró Koppenhágában: M1/M2 vonalak, 24 óra bérlet ~130 DKK/fő — a legtöbb látványosság megközelíthető.", "Kongens Have (Rosenborg park): ingyenes, tökéletes piknikezős ebéd-alternatíva is ha jó az idő."]
        },
        {
          num: "6",
          date: "2026. július 31., péntek",
          title: "Koppenhága 2. nap — Christiansborg + Kis Hableány + Christiania",
          subtitle: "Dán parlament, ikonikus szobor, alternatív negyed, Nørrebro esti program",
          driveLog: { km: "~6 km (városon belül)", stops: 4, driveTime: "gyalogos / bringa nap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"Christiansborg"}, {time:"11:00", label:"Kis Hableány"}, {time:"13:30", label:"Christiania"}, {time:"16:00", label:"Nørrebro"}] },
          tags: [
            { label: "Christiansborg", cls: "tag-city" },
            { label: "Kis Hableány", cls: "tag-focus" },
            { label: "Christiania", cls: "tag-nature" }
          ],
          activities: [
            { time: "09:00", icon: "🏛", name: "<a href='https://www.google.com/maps/search/?api=1&query=Christiansborg+Palace+Copenhagen' target='_blank' rel='noreferrer'>Christiansborg Palace</a> (★4.5) — toronykilátó + trónterem", detail: "A dán parlament, a Legfelsőbb Bíróság és a királyi recepciók helyszíne — egyazon épületben. A toronykilátó (★4.6) INGYENES és koppenhágai viszonylatban az egyik legjobb panoráma. Trónterem és királyi istállók belépőjeggyel látogathatók (~90 DKK/fő). Nyitva: 10:00–17:00." },
            { time: "10:30", icon: "🗿", name: "<a href='https://www.google.com/maps/search/?api=1&query=The+Little+Mermaid+Copenhagen' target='_blank' rel='noreferrer'>Den Lille Havfrue — Kis Hableány</a> (★4.0) + Kastellet", detail: "Koppenhága legikonikusabb szobra — kisebb, mint az emberek várják, de az út melletti <a href='https://www.google.com/maps/search/?api=1&query=Kastellet+Copenhagen' target='_blank' rel='noreferrer'>Kastellet</a> (★4.5) csillag erőd tökéletes ingyenes sétahely. A kerület (Langelinie promenád) reggel csendesebb, délben zsúfolt. Séta a vízpart mentén vissza a belvárosba (~20 perc)." },
            { time: "12:00", icon: "🥪", name: "Ebéd — <a href='https://www.google.com/maps/search/?api=1&query=Amass+Restaurant+Copenhagen' target='_blank' rel='noreferrer'>Reffen Street Food</a> (★4.3) vagy Nørreport piac", detail: "Reffen (Refshaleøen szigeten, hajóval 10 perc) — Koppenhága legnagyobb outdoor street food markete, 60+ stand, természetes borok, dizájnos ipari helyszín. Alternatíva: Nørreport-nál bármelyik friss hal- és sajtstand." },
            { time: "13:30", icon: "🌿", name: "<a href='https://www.google.com/maps/search/?api=1&query=Freetown+Christiania+Copenhagen' target='_blank' rel='noreferrer'>Freetown Christiania</a> (★4.3) — alternatív önkormányzati negyed", detail: "1971 óta autonóm közösség Koppenhágán belül, 800+ lakóval. Nem Disneyland: tényleg alternatív utcák, street art, élőzene, kézműves kávézók, vitorlás-vászon táskák. A 'Pusher Street' fotózása tilos (jelzik), de minden más fotózható. Koffee Collective kávézó: ★4.4." },
            { time: "15:30", icon: "🚲", name: "<a href='https://www.google.com/maps/search/?api=1&query=Norrebro+Copenhagen' target='_blank' rel='noreferrer'>Nørrebro negyed</a> (★4.4) — a koppenhágai hipszter szív", detail: "A legélőbb koppenhágai negyed: Jægersborggade utca dizájnüzletekkel és kézműves kávézókkal, Nørrebrogade az utcaélettel. Bringatúra opció: Donkey Republic vagy Bycyklen közbicikli, napi ~50 DKK. A <a href='https://www.google.com/maps/search/?api=1&query=Assistens+Cemetery+Copenhagen' target='_blank' rel='noreferrer'>Assistens temető</a> (★4.5, Hans Christian Andersen és Kierkegaard sírja) is Nørreborón — különleges parkszerű séta." },
            { time: "19:00", icon: "🍽", name: "Vacsora Nørrebrón", detail: "<a href='https://www.google.com/maps/search/?api=1&query=Manfreds+restaurant+Copenhagen' target='_blank' rel='noreferrer'>Manfreds</a> (★4.3, természetes borok, zöldség-fókuszú dán konyha) vagy <a href='https://www.google.com/maps/search/?api=1&query=Jaegers+bar+Norrebro+Copenhagen' target='_blank' rel='noreferrer'>a Jægersborggade valamelyik kis éterme</a> — foglalás erősen ajánlott péntekre." }
          ],
          notes: ["Christiansborg torony kilátó: INGYENES, de sorban kell állni — reggel 09:00-10:00 közt a legrövidebb a sor.", "Christiania: Pusher Street fotózása tilos és ezt komolyan veszik. A többi utca szabadon fotózható.", "Koppenhágai bringa: a város teljesen bringa-barát, sok jelöletlen kerékpárút — az átlagkoppenhágai gyorsabban megy bringán mint a turisták gyalog.", "Holnap: Louisiana Museum of Modern Art délelőtt + drive Hamburg felé."]
        },
        {
          num: "7",
          date: "2026. augusztus 1., szombat",
          title: "Koppenhága — Louisiana Museum + indulás Hamburgba",
          subtitle: "Délelőtt a legjobb skandináv modern múzeumban, délután ~310 km drive Hamburgba",
          driveLog: { km: "~310 km", stops: 2, driveTime: "~3 óra", depart: "13:00", arrive: "~16:30 Hamburg", timelinePoints: [{time:"10:00", label:"Louisiana Museum"}, {time:"13:00", label:"Koppenhága ind."}, {time:"14:30", label:"Flensburg"}, {time:"16:30", label:"Hamburg"}] },
          tags: [
            { label: "Louisiana Museum", cls: "tag-focus" },
            { label: "~310 km", cls: "tag-drive" },
            { label: "Hamburg", cls: "tag-city" }
          ],
          activities: [
            { time: "09:30", icon: "🚗", name: "Drive: Koppenhága → Humlebæk (~45 km, ~40 perc)", detail: "Az E47-es autópályán észak felé, Helsingborg irányba. Humlebæk egy kis tengerparti kisváros, maga a Louisiana múzeum itt áll, a tenger felett." },
            { time: "10:00–12:30", icon: "🎨", name: "<a href='https://www.google.com/maps/search/?api=1&query=Louisiana+Museum+of+Modern+Art+Humlebaek' target='_blank' rel='noreferrer'>Louisiana Museum of Modern Art</a> (★4.7) — Skandinávia legjobb modern múzeuma", detail: "1958-ban nyitott, a Øresund felett álló dombos parkban: Calder, Giacometti, Warhol, Picasso, Jean Dubuffet műveivel. A múzeum épülete maga is remekmű: üveg folyosók, teraszok a tengerre, szoborkert (★4.8). Az állandó kiállítás és a szoborkert a legjobb — külső terasz Svédország kilátással. Belépő: ~195 DKK/fő. Nyitva: 11:00–22:00 (kedd–péntek), 11:00–18:00 (szombat–vasárnap)." },
            { time: "12:45", icon: "🚗", name: "Humlebæk → Koppenhága → Flensburg → Hamburg", detail: "Visszaút Koppenhágán át (~45 km), majd az E20-on Dánián keresztül. ⚠️ Storebælt-híd: ~240 DKK (~32 EUR). Flensburgnál belépés Németországba, az A7-en Hamburg felé." },
            { time: "16:30", icon: "🏨", name: "Hamburg — érkezés, szállás", detail: "Hamburg — az első igazán német este. Vacsora a Landungsbrücken-nél Fischbrötchennel (füstölt heringes szendvics, hamburgi street food ikonja), vagy korai pihenés: holnap a Lübeck–Schwerin körút korai starttal indul." }
          ],
          notes: ["Louisiana nyitvatartás: szombaton 11:00–18:00 — érdemes pontban nyitáskor ott lenni, hogy legyen idő a szoborkertben is.", "⚠️ Storebælt-híd (Koppenhága → Flensburg irány): ~240 DKK (~32 EUR) — az Øresund-díjjal együtt a dán tranzit ~86 EUR összesen két nap alatt.", "Hamburg szállás: HafenCity / Altstadt / Altona-negyedek a legjobbak bázisnak — Landungsbrücken közelében minden gyalog elérhető.", "Holnap korai start (08:30): Lübeck + Schwerin Castle körút Hamburgból (~230 km)."]
        },
        {
          num: "8",
          date: "2026. augusztus 2., vasárnap",
          title: "Hamburg körút — Lübeck + Schwerin Castle",

          subtitle: "UNESCO-óváros és egy tavi kastély — a Balti-tenger kapuja",
          driveLog: { km: "~230 km (körút)", stops: 2, driveTime: "~3,5 óra", depart: "08:30", arrive: "~18:30 Hamburg", timelinePoints: [{time:"08:30", label:"Hamburg ind."}, {time:"09:30", label:"Lübeck"}, {time:"13:00", label:"Schwerin"}, {time:"18:30", label:"Hamburg"}] },
          tags: [
            { label: "UNESCO", cls: "tag-focus" },
            { label: "kastély", cls: "tag-nature" },
            { label: "körút", cls: "tag-drive" }
          ],
          activities: [
            { time: "08:30", icon: "🚗", name: "Indulás Hamburgból Lübeck felé (~65 km, ~55 perc)", detail: "A7-es autópályán könnyű etap, Lübeck a Balti-tenger kapuja volt a középkorban — a Hansa-szövetség vezető városa." },
            { time: "09:30", icon: "🏛", name: "Lübeck — Holstentor", detail: "A város ikonikus két tornyos kapuja, az egyik legfotogénebb középkori épület Észak-Németországban. Belülről kisebb múzeum, de a külső látványa a lényeg. Google Reviews: ★4.6 — 'Meglepően lenyűgöző közelről.'" },
            { time: "10:15", icon: "⛪", name: "Lübeck — Marienkirche (St. Mary's)", detail: "A világ egyik legtöbb utánzatot inspiráló gótikus téglatemploma, a 'Backsteingotik' egyik csúcspontja. A WWII-bombázás által leomlott harangok emlékhelye különleges. Google Reviews: ★4.5 — 'A harang-emlékmű megrázó.'" },
            { time: "11:00", icon: "🍫", name: "Niederegger Marzipan — Breite Straße 89", detail: "Lübeck a marzipán világi fővárosa. A Niederegger confectionery (alapítva 1806) emeleti kávézójában marzipán-torta és kávé — kötelező megálló. Google Reviews: ★4.5 — 'A marzipán-múzeum ingyenes és szórakoztató.'" },
            { time: "11:45", icon: "📚", name: "Buddenbrookhaus + belváros séta", detail: "Thomas Mann Nobel-díjas regényének (Buddenbrooks) szülőháza és múzeuma. A Lübeck-i belváros egésze UNESCO-világörökség (1987) — a lépcsős homlokzatú kereskedőházak, a Tüngertor és a Petrikirche mind sétálható. Google Reviews: ★4.4." },
            { time: "13:00", icon: "🚗", name: "Lübeck → Schwerin (~65 km, ~50 perc)", detail: "Rövid autóút nyugat felé Mecklenburg síkságán. Schwerin Mecklenburg-Vorpommern tartomány fővárosa." },
            { time: "13:50", icon: "🏰", name: "Schweriner Schloss — a 'Balti-tenger Neuschwansteinja'", detail: "Neoromantikus kastély egy tóval körülvett szigeten, UNESCO-jelölt. A kastély kívülről fantasztikus, belülről historikus termek. Belépő: ~€8/fő, nyitva 10:00–18:00. Google Reviews: ★4.6 — 'Szinte túl szép ahhoz, hogy valóságos legyen.' Legjobb szög: a tó felőli homlokzat." },
            { time: "15:30", icon: "🚶", name: "Schwerin — Alter Garten + tópart séta", detail: "A kastéllyal szemben az Alter Garten tér és az Állami Múzeum (csak kívül), majd tóparti séta a vízi kioszkig. Kávé és fagyi a tó partján." },
            { time: "17:00", icon: "🚗", name: "Schwerin → Hamburg (~100 km, ~1 óra)", detail: "A19/A24 autópályán visszatérés Hamburgba. Estére még van idő egy hamburgi étteremre." },
            { time: "18:30", icon: "🍽", name: "Vacsora Hamburgban", detail: "Fischbrötchen a Landungsbrücken-nél (füstölt heringes szendvics — hamburgi street food ikonja), vagy belvárosi halétterem. Utolsó hamburgi este." }
          ],
          notes: ["Lübeck belváros: egésze UNESCO-világörökség (1987). Parkolás a Holstentor melletti parkolóban vagy a Kohlmarkt körül.", "Niederegger Marzipan: a bolti vásárlás kötelező — vigyél haza doboznyi marzipánt! A bolt és a kávézó egymás felett van.", "Schweriner Schloss: ha kicsit is tele van a parkoló, érdemes a főbejárattól kicsit arrébb parkolni és gyalog jönni — a kastély minden szögből fotózható.", "Az egész körút Hamburgból és visszaérkezéssel kerek nap, az este szabadon marad."]
        },
        {
          num: "9",
          date: "2026. augusztus 3., hétfő",
          title: "Hamburg városnap",
          subtitle: "Miniatur Wunderland · Speicherstadt · Elbphilharmonie · Landungsbrücken",
          driveLog: { km: "~8 km (városon belül)", stops: 4, driveTime: "gyalogos + U-Bahn nap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"Miniatur Wunderland"}, {time:"12:00", label:"Speicherstadt"}, {time:"15:00", label:"Elbphilharmonie"}, {time:"18:30", label:"Vacsora"}] },
          tags: [
            { label: "Miniatur Wunderland", cls: "tag-focus" },
            { label: "Speicherstadt (UNESCO)", cls: "tag-city" },
            { label: "városnap", cls: "tag-city" }
          ],
          activities: [
            { time: "09:00", icon: "🚂", name: "Miniatur Wunderland — Kehrwieder 2", detail: "A világ legnagyobb miniatűr vasúti kiállítása (15 000+ m² pályahálózat, saját repülőtér-makett, skandináv táj, Izland). Előre jegyet venni online kötelező — hétköznapon is megtelhet. Google Reviews: ★4.8 — 'Életem legjobb múzeumi élménye.' Kb. 2,5–3 óra ajánlott. Belépő: ~€20/fő." },
            { time: "12:00", icon: "🏭", name: "Speicherstadt — UNESCO-raktárváros", detail: "A világ legnagyobb összefüggő raktárváros-együttese, piros tégla, csatornák, kávé- és szőnyegraktárak 1888-tól. Ma design irodák, múzeumok, kávézók. A Miniatur Wunderland itt van, szóval a kettő egy sétán belül van. Google Reviews: ★4.7 — 'Este is varázslatos a kivilágítás.'" },
            { time: "13:30", icon: "🍱", name: "Ebéd a HafenCity-ben", detail: "A Speicherstadt keleti meghosszabbítása a modern HafenCity negyed. Sok jó streetfood-opció, vietnami, és a Campus területeken teraszos helyek. A hamburger és a halételek természetesen kötelezők." },
            { time: "15:00", icon: "🎵", name: "Elbphilharmonie Plaza — ingyenes kilátó!", detail: "A Herzog & de Meuron tervezte ikonikus hangversenyház tetején ingyenesen látogatható hullámosacél kilátóterasz (37. emelet). Előfoglalás kell: elbphilharmonie.de/plaza. Google Reviews: ★4.7 — 'A város legjobb ingyenes kilátója.'" },
            { time: "16:30", icon: "⚓", name: "Landungsbrücken — kikötői séta", detail: "A hamburgi kikötői hajóállomás körzete: Fischbrötchen standok, Rickmer Rickmers múzeumhajó, az Elba panorámája. Innen a legjobb az öbölre és a kikötői daruerdőre látni." },
            { time: "18:30", icon: "🎭", name: "Reeperbahn / St. Pauli negyed esti séta", detail: "Hamburg legismertebb negyede, Beatles-kapcsolatokkal (Indra Club, Kaiserkeller — itt játszottak 1960-ban). Nappal csendesebb, este karakteres. Vacsorára jó a Schiffergesellschaft (1535 óta halétterem) vagy a kikötői Fischerhaus." },
            { time: "20:00", icon: "🍽", name: "Vacsora — utolsó hamburgi este", detail: "Alt Hamburger Aalspeicher (angolna ételek, hagyományos), Fischerhaus (halételek a kikötőnél), vagy a HafenCity bármely teraszos helye." }
          ],
          notes: ["Miniatur Wunderland KÖTELEZŐ előfoglalás online: miniatur-wunderland.de — hétköznapon is megtelhet, péntek különösen forgalmas.", "Elbphilharmonie Plaza: szintén ingyenes de előfoglalós — elbphilharmonie.de/plaza, akár egy héttel előre érdemes lefoglalni.", "Hamburg HVV 1 napos bérlet: ~€8.50 — U-Bahn + S-Bahn + busz, a legtöbb helyszín elérhető.", "A Fischmarkt (halak, gyümölcs, retró hangulat) csak szombaton-vasárnap 05:00–09:30 tart — pénteken ez kiesik, de a Landungsbrücken-i Fischbrötchen standok egész héten nyitva vannak."]
        },
        {
          num: "10",
          date: "2026. augusztus 4., kedd",
          title: "Hamburg → Frankfurt",
          subtitle: "Átmeneti etap — ~490 km, délutáni érkezés, első frankurti esti séta",
          driveLog: { km: "~490 km", stops: 2, driveTime: "~4,5 óra", depart: "09:00", arrive: "~14:30 Frankfurt", timelinePoints: [{time:"09:00", label:"Hamburg ind."}, {time:"11:00", label:"Hannover"}, {time:"14:30", label:"Frankfurt"}, {time:"17:00", label:"Römerberg séta"}] },
          tags: [
            { label: "~490 km", cls: "tag-drive" },
            { label: "Frankfurt", cls: "tag-city" }
          ],
          activities: [
            { time: "09:00", icon: "🚗", name: "Indulás Hamburgból — A7 dél felé", detail: "Hamburg → Hannover ~160 km (~1,5h). Az A7 egyenes, jó autópálya, nincs útdíj — Hannoverig az első tankolást meg lehet csinálni." },
            { time: "11:00", icon: "⛽", name: "Hannover-tájék — pihenő, tankolás", detail: "Hannover kb. félúton van. Gyors kávé + WC-megálló. Észak-Németországban általában versenyképesebb a V-Power ár mint Frankfurt körül." },
            { time: "14:30", icon: "🏙", name: "Frankfurt — szállás + berendezkedés", detail: "Frankfurt am Main belváros közelében, vagy Sachsenhausen negyedben érdemes szállást venni. Autóparkoló, bejelentkezés." },
            { time: "16:00", icon: "🚶", name: "Römerberg első séta + Main-part", detail: "A Römerberg Frankfurt belvárosának ikonikus középkori főtere, a Römer városháza háromcsúcsos homlokzatával. Rövid ráhangolódás a holnapi városnapra. Google Reviews: ★4.5 — 'Este is gyönyörűen kivilágított.'" },
            { time: "18:00", icon: "🍷", name: "Vacsora Sachsenhausenben — első Apfelwein-este", detail: "Sachsenhausen a Majna jobb partján, az Apfelwein (almabor) kultúra fellegvára. Wagner, Dauth-Schneider vagy Zum Gemalten Haus — autentikus és olcsó helyi vacsora. Bembel (szürke kerámia almaboros korsó) kötelező megkóstolni." }
          ],
          notes: ["A7 Hamburg → Kassel → Frankfurt: egyenes, útdíjmentes útvonal, jó 2×3 sávos autópálya végig.", "Frankfurt szombat délután: a belváros forgalmas, de a szálláshoz való beérkezés megoldható.", "Sachsenhausen: az almaborozók (Apfelwein-Lokal-ok) nem finomkodós helyek, de autentikus és olcsó vacsorák. Handkäse (savanyú túró ecetes-hagymás öntettel) = helyi ikon, Goethe kedvence volt."]
        },
        {
          num: "11",
          date: "2026. augusztus 5., szerda",
          title: "Frankfurt városnap",
          subtitle: "Römerberg · Kaiserdom · Städel Museum · Sachsenhausen Apfelwein",
          driveLog: { km: "~5 km (városon belül)", stops: 4, driveTime: "gyalogos városnap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"Römerberg"}, {time:"11:00", label:"Städel Museum"}, {time:"14:00", label:"Sachsenhausen"}, {time:"19:00", label:"Apfelwein vacsora"}] },
          tags: [
            { label: "Städel Museum", cls: "tag-focus" },
            { label: "Römerberg", cls: "tag-city" },
            { label: "városnap", cls: "tag-city" }
          ],
          activities: [
            { time: "09:00", icon: "🏛", name: "Römerberg + Römer városháza", detail: "Frankfurt legfotogénebb pontja: a részben rekonstruált középkori kereskedősorok és a Römer háromcsúcsos homlokzata. Szinte minden frankurti képeslapon ott van. Google Reviews: ★4.5 — 'Reggel a turisták előtt üres és csodás.'" },
            { time: "09:45", icon: "⛪", name: "Frankfurter Dom (Kaiserdom)", detail: "A Szentséges Római Birodalom császárkoronázásainak katedrálisa, gótikus torony (66 m) kilátóval. Google Reviews: ★4.5 — 'A torony felmászása megéri, szép kilátó.' Belépő: ~€3." },
            { time: "11:00", icon: "🖼", name: "Städel Museum — Schaumainkai 63", detail: "Európa egyik legjobb képzőművészeti múzeuma (Botticelli, Vermeer, Rembrandt, Monet, Picasso). Vasárnap nyitva 10:00–18:00. Google Reviews: ★4.6 — 'Meglepően gazdag gyűjtemény, kötelező megállás.' Belépő: ~€16/fő. Kb. 2 óra ajánlott." },
            { time: "13:30", icon: "🌉", name: "Eiserner Steg — sétálóhíd + Majna-part", detail: "A lakatokkal borított sétálóhíd a Majna felett, klassz városképpel mindkét irányban. A Sachsenhausen felőli part a Museumsufer (múzeumi sétány) — vasárnap is kellemes sétálni." },
            { time: "14:30", icon: "🍺", name: "Sachsenhausen — Apfelwein negyed, ebéd", detail: "A Majna bal partján a hagyományos Apfelwein-negyedben ebéd. Handkäse mit Musik (savanyú túró hagymás-ecetes öntettel) és Grüne Soße (zöld fűszeres mártás főtt tojással és burgonyával — frankurti specialitás) kóstolása kötelező. Zum Wagner: Google ★4.3." },
            { time: "16:30", icon: "🌆", name: "Bankenviertel skyline séta", detail: "Frankfurt az egyetlen európai nagyváros, ahol megvannak a felhőkarcolók a belváros közepén. A MainKai sétányról (Sachsenhausen oldal) a legjobb a városképet fotózni — este kivilágítva is gyönyörű." },
            { time: "19:00", icon: "🍷", name: "Búcsúvacsora Sachsenhausenben", detail: "Az Apfelwein-Lokal-ok este is nyitva, a vacsora egyszerű, autentikus és olcsó. Dauth-Schneider: ★4.3, Zum Gemalten Haus: ★4.4 Google." }
          ],
          notes: ["Vasárnap: Kleinmarkthalle (fedett piac) ZÁRVA, de a Städel és az összes külső látnivaló nyitva.", "Grüne Soße (Grie Soß): tipikusan frankurti fogás, Johann Wolfgang von Goethe kedvence volt — 7 féle friss gyógynövényből. Kötelező megkóstolni!", "Sachsenhauseni Apfelwein-kultúra: a helyi almabort Bembel-ből (szürke kerámia korsó) isszák, hígítva vízzel vagy szódával (Gespritzter) — könnyedebb, mint gondolnád.", "Holnap: korai indulás (~06:00) Frankfurt → Budapest, ~950 km, kb. 9 óra."]
        },
        {
          num: "12",
          date: "2026. augusztus 6., csütörtök",
          title: "Frankfurt → Budapest 🏁",
          subtitle: "Expedition záróetap — ~950 km, hazaérkezés",
          driveLog: { km: "~950 km", stops: 3, driveTime: "~9 óra", depart: "06:00", arrive: "~15:30 Budapest", timelinePoints: [{time:"06:00", label:"Frankfurt ind."}, {time:"09:00", label:"Nürnberg"}, {time:"13:00", label:"Linz/Wien"}, {time:"15:30", label:"Budapest 🏁"}] },
          tags: [
            { label: "~950 km", cls: "tag-drive" },
            { label: "Budapest 🏁", cls: "tag-city" }
          ],
          activities: [
            { time: "06:00", icon: "🚗", name: "Korai indulás Frankfurtból — A3/E60 keletre", detail: "A3-as autópályán Frankfurt → Würzburg → Nürnberg irányba. Reggel 06:00 ideális indulási idő, a frankurti forgalom ekkor még ritka." },
            { time: "09:00", icon: "⛽", name: "Nürnberg-tájék — tankolás + pihenő", detail: "Nürnberg kb. 240 km-re van Frankfurttól (~2,5h). Jó V-Power tankolási pont (Bajorországban általában versenyképes az ár). 20 perc pihenő, kávé." },
            { time: "11:00", icon: "🚗", name: "Nürnberg → Linz, Ausztria — ~280 km", detail: "A3-as autópályán Passaunál belépés Ausztriába, majd az A8/A1 Linzig. ⚠️ Ausztriai autópálya-vignette: kb. €10 10 naposra — feltétlenül szükséges! Megvehető a határon vagy asfinag.at-on." },
            { time: "13:00", icon: "⛽", name: "Linz / Wels-tájék — második pihenő", detail: "Félúton Bécs és Nürnberg között. Gyors WC + kávé. A Westautobahn (A1) Bécsen túl is folytatódik, Hegyeshalomig az M15-ös folytatja." },
            { time: "14:30", icon: "🏙", name: "Budapest közeledik — Győr / Hegyeshalom", detail: "Magyarországi határon e-matrica ellenőrzése. Az M1-en Budapest felé az utolsó 100 km simán megy." },
            { time: "15:30", icon: "🏁", name: "Budapest — Expedition vége! 🎉", detail: "A teljes észak-európai és izlandi ív lezárul: Baltikum → Észtország → Helsinki → Stockholm → Koppenhága → Hamburg → Frankfurt → Budapest. Közel 10 000+ km összesen, ~28 nap." }
          ],
          notes: ["⚠️ Osztrák autópálya-vignette KÖTELEZŐ az A1/A8 autópályán — megvehető az osztrák határon vagy online: asfinag.at. ~€10 10 napos.", "Magyar e-matrica: ha nincs aktív, Hegyeshalomnál kell venni. A rendszám alapján ellenőrzik.", "Az egész Expedition összesített km: kb. 9000–10 000 km, ~12 ország, ~6 hét — gratulálunk!", "🎉 Haza az egész csapat, fényképekkel, élményekkel és sok-sok emlékkel!"]
        }
      ]
    }
  },
  restaurants: {
    intro: [
      "Ez a rész nem csak étteremlista, hanem gasztró-útmutató: országonként mit érdemes keresni, melyik étel micsoda, és nagyjából mihez hasonlít ízben vagy állagban.",
      "A jó stratégia ezen az úton az, hogy minden országból meglegyen 2-3 karakteres fogás, és a foglalós helyeket csak ott erőltessétek, ahol valóban élményértékük van."
    ],
    groups: [
      {
        title: "Baltikum",
        text: "A balti konyha földközeli, laktató és sokszor ismerősen közép-európai, csak sötétebb rozskenyérrel, több céklával, kaporral, tejföllel, füstöléssel és savanykás elemmel. Itt nem a fine dining a lényeg, hanem az, hogy az óvárosi napokhoz jól illő, tartalmas helyi fogásokat találjatok.",
        items: [
          {
            badge: "LT",
            name: "Vilnius · litván comfort food",
            meta: "Litvánia · city center vacsora",
            description: "Litvániában a burgonyás, tejfölös, húsos vonal a legerősebb. Ez jól áll az első estéknek, mert egyszerre helyi és ismerős.",
            tastes: [
              "Cepelinai: hatalmas krumpligombóc darált hússal; nagyjából a knédli és a töltött szilvásgombóc sós, nehezebb rokona.",
              "Šaltibarščiai: hideg céklaleves kefirrel; olyan, mint egy sós, savanykás rózsaszín nyári hidegleves.",
              "Kepta duona: sült fekete kenyér fokhagymával; sörkorcsolyának olyan, mint egy sokkal jobb fokhagymás pirítós."
            ]
          },
          {
            badge: "LV",
            name: "Riga · lett sörkorcsolya és halas vonal",
            meta: "Lettország · city day mellé",
            description: "Rigában a rozskenyér, a füstölt hal és a sör mellé illő egyszerűbb, sósabb fogások a legjobbak. A városi ritmushoz ez jobban passzol, mint egy túlgondolt vacsora.",
            tastes: [
              "Pelēkie zirņi ar speķi: szürke borsó szalonnával; olyan, mint egy rusztikus babfőzelék és pörcös köret keresztezése.",
              "Rupjmaize: sötét, malátás rozskenyér; a magyar barna kenyérnél tömörebb és enyhén édeskés.",
              "Füstölt hal: főleg sprat vagy lazacfélék; hasonló érzés, mint egy jobb balatoni füstölt hal, csak északiasabban tiszta ízzel."
            ]
          },
          {
            badge: "EE",
            name: "Tallinn · észt egyszerűség komp előtt",
            meta: "Észtország · logisztikai este",
            description: "Tallinnban a jó döntés a komp előtti könnyebb, de karakteres vacsora. Az észt konyha letisztultabb, kevésbé nehéz, és sok benne a rozs, a hal és a savanyított kiegészítő.",
            tastes: [
              "Kiluvõileib: sprattos nyitott szendvics tojással; olyan, mint egy elegáns heringes katonakenyér.",
              "Mulgikapsad: árpás-savanyúkáposztás húsos egytál; a székelykáposzta távoli északias unokatestvére.",
              "Kama: pörkölt gabonaporból készült desszert krémben; állagra valahol a zabkása és a pohárkrém között van."
            ]
          }
        ]
      },
      {
        title: "Izland",
        text: "Az izlandi gasztronómia egyszerre nyersanyag-központú és meglepően praktikus: hal, bárány, tejtermék, rozskenyér, levesek és jó minőségű egyszerű alapanyagok. Ennél az útnál az működik, ha a látványos, foglalós helyeket keveritek roadtrip-kompatibilis leveses, halas, farmos megállókkal.",
        items: [
          {
            badge: "IS",
            name: "Reykjavík és az első napok · belépő az izlandi ízvilágba",
            meta: "Izland · nyitó szakasz",
            description: "Az első 1-2 napban érdemes végigmenni az alap izlandi komfortételeken, mert ezek később a kisebb falvakban is visszaköszönnek.",
            tastes: [
              "Kjötsúpa: bárányleves zöldségekkel; olyan, mint egy tiszta, tartalmas húsleves, csak karakteresebb juhízzel.",
              "Plokkfiskur: krémes-halas krumplis fogás; a rakott krumpli és egy sűrű halragu közti komfortétel.",
              "Skyr: sűrű tejdesszert; valahol a görög joghurt és a túrókrém között van."
            ]
          },
          {
            badge: "IS",
            name: "Észak és Mývatn · farmkonyha és egyszerű meleg fogások",
            meta: "Izland · roadtrip-kompatibilis",
            description: "Északon a farmos, lazább helyek működnek a legjobban. Nem kell minden nap ünnepi vacsora; sokszor a jó leves, füstölt bárány vagy egy meleg halfogás a helyes döntés.",
            tastes: [
              "Füstölt bárány: vékony szeletekben vagy meleg fogásként; a füstölt sonka és a sült bárány között van.",
              "Rúgbrauð: sötét, enyhén édeskés rozskenyér; olyan, mint egy nedvesebb malátás barna kenyér.",
              "Pylsa: izlandi hot dog; alapvetően virsli, de a ropogós hagyma, remulád és édes mustár miatt sokkal jobb, mint aminek hangzik."
            ]
          },
          {
            badge: "IS",
            name: "Déli part, Höfn és Golden Circle · élményhelyek",
            meta: "Izland · foglalós csúcspontok",
            description: "Itt vannak a leginkább emlékezetes étkezések: Höfn homárvonala, Vík leveses megállói és a Friðheimar. Ezeknél már tényleg megéri előre készülni.",
            tastes: [
              "Langusztin / homárleves Höfnben: a halászléhez képest krémesebb, vajasabban tengeri bisque-jellegű leves.",
              "Friðheimar paradicsomlevese: selymes, édes-savanyú paradicsomkrémleves friss kenyérrel; olyan, mint egy luxus menzás paradicsomleves, csak valódi paradicsomízzel.",
              "Soup Company vulkánlevese Víkben: sűrű, fűszeres marhahúsleves cipóban; a gulyás és a chili közti komfortzóna."
            ]
          }
        ]
      },
      {
        title: "Hazaút",
        text: "A hazaút gasztrója már kevésbé expedíciós, inkább kényelmes autós ritmus. Itt az a jó, ha országonként elkapjátok a legismertebb, könnyen teljesíthető klasszikust, de nem húzzátok szét a napot egy túl komoly vacsora miatt.",
        items: [
          {
            badge: "SE",
            name: "Svédország · tiszta, egyszerű, jól szervezett ízek",
            meta: "svéd autós etap",
            description: "Svédországban a klasszikus fogások tiszták, kevésbé túlfűszerezettek, jól illenek egy hosszú utáni nyugodt vacsorához.",
            tastes: [
              "Köttbullar: húsgolyók barna szósszal, burgonyapürével, vörösáfonyával; a fasírt és a pörköltszaftos húsgombóc között.",
              "Gravlax: pácolt lazac; olyan, mint egy nagyon kifinomult füstölt lazac, csak füst nélkül.",
              "Kanelbulle: fahéjas csiga; nagyjából az északi kakaós csiga fahéjas unokatestvére."
            ]
          },
          {
            badge: "DK",
            name: "Dánia · városi ebédre tökéletes",
            meta: "Dánia · fellazító nap",
            description: "Koppenhága elbír egy jobb ebédet vagy korai vacsorát, mert itt a nap városiasabb és kevésbé tranzitjellegű.",
            tastes: [
              "Smørrebrød: nyitott szendvics; olyan, mint egy dán tapas-rendszer rozskenyéren.",
              "Frikadeller: lapos húsgombóc; a fasírt és a sült húspogácsa közti klasszikus.",
              "Dán hot dog: virsli ropogós hagymával, uborkával, szósszal; street foodban a legbiztosabb választás."
            ]
          },
          {
            badge: "DE",
            name: "Németország · stabil autópályás zárás",
            meta: "autópálya-napok",
            description: "A német szakaszban nem kell túlromantizálni a gasztrót, de egy jó klasszikust még simán érdemes elkapni este vagy egy hosszabb pihenőnél.",
            tastes: [
              "Schnitzel: ismerős panírozott hús, itt általában vékonyabb és ropogósabb, mint a hazai átlag.",
              "Currywurst: felvágott sült kolbász currys paradicsomszósszal; olyan, mint a street foodos sült virsli felturbózva.",
              "Käsespätzle vagy Flammkuchen: az egyik sajtos nokedliféle, a másik vékony, ropogós tejfölös lepény; mindkettő autós nap végére jó komfortétel."
            ]
          }
        ]
      }
    ]
  },
  costPlan: {
    summary: {
      note: "Becslések — a repülőjegyek már foglaltak és nem szerepelnek a főösszegben. A GLC AMG 43 fogyasztása ~10 L/100 km, kizárólag 100 oktánon megy (V-Power / Shell / BP Ultimate), ami minden országban 0,20–0,40 EUR/L-rel drágább a normál 95-ös szintnél.",
      grandTotal: {
        tibi: "~4 480 EUR",
        henni: "~2 800 EUR",
        together: "~7 280 EUR"
      },
      alreadyBooked: [
        "Henni: Wizz Air W62427 BUD → KEF, 2026.07.11 (Erasmus+ finanszírozott lehet)",
        "Tibi: Icelandair FI309 ARN → KEF, 2026.07.18 — referencia ár: ~360–420 EUR",
        "Tibi + Henni: Icelandair FI306 KEF → ARN, 2026.07.26 — referencia ár: ~400–500 EUR/fő"
      ],
      totals: [
        { label: "1. szakasz · Baltikum + Finn átmenet", value: "~1 680 EUR", person: "Tibi egyedül · saját autó" },
        { label: "2. szakasz · Izland", value: "~4 430 EUR", person: "Tibi + Henni ketten · ~2 215 EUR/fő" },
        { label: "3. szakasz · Hazaút", value: "~1 180 EUR", person: "Tibi + Henni ketten · ~590 EUR/fő" }
      ]
    },
    sections: [
      {
        id: "baltikum",
        title: "1. szakasz · Baltikum + Finnország",
        accent: "accent-baltic",
        subtitle: "Tibi egyedül · saját autó · 2026. júl. 10–17. · 8 nap",
        car: "Mercedes GLC AMG 43 · 100 oktán · ~10 L/100 km",
        km: "~2 460 km",
        total: "~1 680 EUR",
        categories: [
          {
            icon: "⛽",
            label: "Üzemanyag · 100 oktán",
            value: "~410 EUR",
            detail: "2 460 km × 10 L/100 km = ~246 L × avg 1,67 EUR/L · Magyarország 1,65 · Lengyelország 1,60 · Baltikum 1,75–1,80 · Finnország ~1,95 EUR/L · 100 oktán mindenhol +0,20–0,35 EUR a szimpla 95-höz képest"
          },
          {
            icon: "🏨",
            label: "Szállás · 7 éjszaka (solo)",
            value: "~505 EUR",
            detail: "Lengyelország 1 éj: ~55 EUR · Vilnius 2 éj: 2×75 = 150 EUR · Riga 2 éj: 2×70 = 140 EUR · Tallinn 2 éj: 2×80 = 160 EUR · egyágyas / standard szoba, 3* szint · Booking előfoglalás olcsóbb"
          },
          {
            icon: "🚢",
            label: "Kompok · Tallink + Viking Line",
            value: "~260 EUR",
            detail: "Tallinn → Helsinki (Tallink Megastar, napközbeni járat, autó + 1 fő seat): ~90 EUR · Turku → Stockholm (Viking Line overnight, autó + 1 fő + belső kabin): ~170 EUR · mindkettő még tervezett, nem foglalt"
          },
          {
            icon: "🅿",
            label: "Arlanda parkoló · 8 nap",
            value: "~96 EUR",
            detail: "Swedavia P2 Beta long-term: ~12 EUR/nap × 8 nap (júl. 18–26.) · előre online foglalva 20–30%-kal olcsóbb · P2 Beta legközelebb a terminálhoz, shuttle jár"
          },
          {
            icon: "🛣",
            label: "Útdíjak · Lengyelország",
            value: "~25 EUR",
            detail: "Lengyel e-TOLL autópálya: ~20–25 EUR (A1/A2/A4 szegmensek) · Litvánia, Lettország, Észtország: szinte ingyenes · Finnország, Svédország: ingyenes főút"
          },
          {
            icon: "🍽",
            label: "Étkezés · 8 nap (solo)",
            value: "~320 EUR",
            detail: "~40 EUR/nap átlag · autós napokon benzinkúti szendvics + egy melegen ebéd: ~25–30 EUR · városokban éttermi ebéd + vacsora: ~50–60 EUR · tápanyagra nem kell annyit költeni egyedül"
          },
          {
            icon: "🎫",
            label: "Belépők · attrakciók",
            value: "~55 EUR",
            detail: "Trakai Castle: ~15 EUR · Turku Castle: ~10 EUR · egyéb városi múzeumok, toronykilátók: ~30 EUR · Tallinn óváros, Vilnius óváros: ingyenes séta"
          }
        ]
      },
      {
        id: "izland",
        title: "2. szakasz · Izland · Ring Road",
        accent: "accent-iceland",
        subtitle: "Tibi + Henni · bérautó · 2026. júl. 18–26. · 8 nap · ~2 160 km",
        car: "Bérautó 4×4 SUV (pl. Toyota RAV4 / Dacia Duster) · SCDW + GP kötelező · 95-ös benzin · ~9 L/100 km",
        km: "~2 160 km",
        total: "~4 430 EUR (2 főre)",
        totalPerPerson: "~2 215 EUR/fő",
        categories: [
          {
            icon: "🚗",
            label: "Bérautó · 8 nap",
            value: "~1 360 EUR",
            detail: "~170 EUR/nap júliusi csúcsszezonban · 4×4 SUV kategória ajánlott, de Ring Road (1) aszfaltozott — kisebb autó is megy · Foglalj Hertz/Avis/Budget/Saga előre, mert júliusban elfogynak az autók!"
          },
          {
            icon: "🛡",
            label: "Bérautó biztosítás · SCDW + GP",
            value: "~240 EUR",
            detail: "Super CDW (ütközésvédelem deductible nullára): ~15 EUR/nap · GP (Gravel/kőfelverődés): ~10 EUR/nap · SAAP (homok+vulkáni hamu): ~5 EUR/nap opcionális · Izlandon NEM hagyható ki — a kavics és szél súlyos károkat okoz!"
          },
          {
            icon: "⛽",
            label: "Üzemanyag · Izland (95-ös)",
            value: "~460 EUR",
            detail: "~2 160 km × 9 L/100 km = ~194 L × 2,50 EUR/L (izlandi átlag, 2026 becslés) · Izlandon 100 oktán nem szükséges a bérautóhoz! · Mývatn–Egilsstaðir között nagyon ritka a kút — tankolj Mývatnnál indulás előtt"
          },
          {
            icon: "🏨",
            label: "Szállás · 8 éjszaka (2 fő)",
            value: "~1 040 EUR",
            detail: "Izlandi szállás drága! Átlag ~130 EUR/éj double szoba · Reykjavík 2 éj: ~160 EUR/éj · Snæfellsnes / Varmahlíð 1 éj: ~120 EUR · Mývatn 1 éj: ~125 EUR · Egilsstaðir 1 éj: ~110 EUR · Jökulsárlón körzet 1 éj: ~120 EUR · Hella 1 éj: ~115 EUR · KEF körzet 1 éj: ~135 EUR"
          },
          {
            icon: "🛒",
            label: "Étkezés · 8 nap (2 fő)",
            value: "~800 EUR",
            detail: "~50 EUR/fő/nap: Bónus-bevásárlós reggeli+snack (~10 EUR/fő) + 1 éttermi ebéd/vacsora (~25–35 EUR/fő) · Izland NAGYON drága — teli hassal ne menj étterembe · Bónusnál érdemes az első napon feltankolni étellel is"
          },
          {
            icon: "♨",
            label: "Fürdők · Sky Lagoon + Mývatn + Secret Lagoon",
            value: "~310 EUR",
            detail: "Sky Lagoon Pure (2 fő): 2 × ~8 990 ISK = ~65 EUR × 2 = 130 EUR · Mývatn Nature Baths (2 fő): 2 × ~7 500 ISK = ~55 EUR × 2 = 110 EUR · Secret Lagoon (2 fő): 2 × ~4 800 ISK = ~35 EUR × 2 = 70 EUR"
          },
          {
            icon: "🚤",
            label: "Jökulsárlón · zodiak túra (2 fő)",
            value: "~144 EUR",
            detail: "~9 900 ISK/fő (~72 EUR) × 2 · Amfibia verzió: ~12 000 ISK/fő (~88 EUR) × 2 = ~176 EUR · Júliusban ELŐRE KELL FOGLALNI — walkint szinte lehetetlen · glacierlagoon.is"
          },
          {
            icon: "🐋",
            label: "Húsavík bálnales (opcionális)",
            value: "~200 EUR",
            detail: "~13 900 ISK/fő (~100 EUR) × 2 · Csak akkor, ha a júl. 21-i északi napon Húsavík opciót választjátok a Mývatn-blokk helyett · Júliusban szinte 100%-os bálnabiztosíték · Előre foglalj: northsailing.is / gentle-giants.com"
          },
          {
            icon: "🍅",
            label: "Friðheimar ebéd (2 fő)",
            value: "~80 EUR",
            detail: "~5 500–6 000 ISK/fő (~40–44 EUR) · Az étkezési keretben benne van, de KÜLÖN kell foglalni: fridheimar.is · Nyitva 11:30–16:00, LEGALÁBB 1 héttel előre! Korlátlan paradicsomleves + főfogás"
          },
          {
            icon: "🅿",
            label: "Parkolók + Vaðlaheiðargöng alagút",
            value: "~72 EUR",
            detail: "Kirkjufell: 1 000 ISK (~7 EUR) · Stuðlagil nyugati: 1 500 ISK (~11 EUR) · Múlagljúfur: 1 000 ISK (~7 EUR) · Kerið: 800 ISK (~6 EUR) · Vaðlaheiðargöng alagút: 1 600 ISK (~12 EUR) · Egyéb NP parkolók: ~30 EUR · Alagútnál regisztrálj tunnel.is-en INDULÁS ELŐTT!"
          }
        ]
      },
      {
        id: "hazaut",
        title: "3. szakasz · Hazaút",
        accent: "accent-return",
        subtitle: "Tibi + Henni · saját autó · 2026. júl. 26–30. · 5 nap",
        car: "Mercedes GLC AMG 43 · 100 oktán · ~10 L/100 km",
        km: "~2 430 km",
        total: "~1 180 EUR (2 főre)",
        totalPerPerson: "~590 EUR/fő",
        categories: [
          {
            icon: "⛽",
            label: "Üzemanyag · 100 oktán (Svédország–Dánia–Németország–Mo.)",
            value: "~480 EUR",
            detail: "~2 430 km × 10 L/100 km = ~243 L · Svédország (V-Power ~21 SEK/L = 1,95 EUR) · Dánia (~2,00 EUR) · Németország (V-Power ~2,05–2,15 EUR — legdrágább!) · Ausztria/Csehország/Szlovákia (~1,85–1,95 EUR) · Magyarország (~1,65 EUR) · Átlag: ~1,97 EUR/L"
          },
          {
            icon: "🏨",
            label: "Szállás · 4 éjszaka (2 fő)",
            value: "~440 EUR",
            detail: "Malmö 1 éj: ~110 EUR double · Koppenhága 1 éj: ~120 EUR · Hamburg 1 éj: ~100 EUR · Frankfurt körzet 1 éj: ~110 EUR · Booking.com előfoglalás; Koppenhága a legdrágább skandináv stop"
          },
          {
            icon: "🌉",
            label: "Øresund Bridge (Malmö → Koppenhága)",
            value: "~50 EUR",
            detail: "Személyautó: ~505 SEK / ~295 DKK ≈ 47–50 EUR · BroBizz regisztrált kártyával olcsóbb · A híd mindkét irányban fizetős; a visszaút (Dánia → Svédország) is ugyanennyibe kerül, de ezt az irányba csak egyszer csináljátok"
          },
          {
            icon: "🛣",
            label: "Útdíjak / vignettők",
            value: "~10–20 EUR",
            detail: "Osztrák vignette (bécsi útvonalon): 10 nap ~10 EUR · Cseh vignette (cseh útvonalon): ~17 EUR · Szlovák vignette: ~15 EUR · Német autópálya: INGYENES · Az útvonaltól függően az egyik vagy a másik vignette kell (nem mindkettő)"
          },
          {
            icon: "🍽",
            label: "Étkezés · 5 nap (2 fő)",
            value: "~200 EUR",
            detail: "~40 EUR/nap 2 főre: autópályás stops, szendvicsek + egy ülős éttermi étkezés naponként · Koppenhágában inkább a városnézős rész alatt érdemes beülni valahová · Hamburgnál halételek kötelező stop"
          }
        ]
      }
    ]
  },
  practical: [
    {
      title: "📱 iPhone appok — régiónként ajánlva",
      accent: "accent-nordic",
      text: "Ezek azok az appok, amelyek ezen az úton tényleg számítanak. Nem minden kell mindenhova — régiónként van egy rövid 'kötelező' lista és egy opcionális extra.",
      items: [
        "🌍 MINDENÜTT kötelező: Google Maps (offline térkép letöltéssel!), Waze (traffik + sebességkamerák), Google Translate (kamera-fordítás), Revolut (valutaváltás, elfogadott Skandináviában), WhatsApp (roaming kommunikáció).",
        "🇵🇱 Lengyelország (tranzit): Waze a legjobbaz autópálya-traffikhoz. ORLEN app opcionális — a lengyel benzinkutak egy részén diszkont, de regisztráció kell. iFood.pl éttermes app Suwałkiban szinte felesleges — Google Maps étteremkeresője teljesen elég.",
        "🇱🇹🇱🇻🇪🇪 Baltikum (Litvánia, Lettország, Észtország): Bolt (iOS: 'Bolt: Request a Ride') — Baltikumban az Uber helyett ez az alapvető rideshare, olcsóbb és jobban lefedi a kisebb városokat is. Google Maps offline: töltsd le Litvániát, Lettországot, Észtországot ELŐRE itthon. Bolt Food: ételhozatal ha szükséges. Waze és Google Maps navigáció mindkettő jó, Waze jobban jelez előre.",
        "🚢 Tallink / Viking Line kompok: Tallink Silja Line appban a fedélzeti rendelés és a kajütinfó elérhető — érdemes letölteni a kompra. Viking Line appban hasonló. De a jegykezelés böngészőből is megy.",
        "🇮🇸 Izland (kötelező): '112 Iceland' (Safe Travel app, iOS: '112 Iceland') — KÖTELEZŐ letölteni. Ezt kéri az izlandi mentőszolgálat, ebből küldöd a helyzeted ha bajba kerülsz. 'Vedur' (Veðurstofa Íslands) — az izlandi meteorológiai hivatal hivatalos appja, naprakész időjárás és viharelőrejelzés, nélküle nem érdemes Snæfellsnesre menni. 'Road.is' (Vegagerðin) — élő útállapot, útlezárások, havas/jeges utak — F-utak státusza is benne van.",
        "🇮🇸 Izland (opcionális, de jó): 'Aurora Forecast' — északi fény előrejelzés (Kp-index, felhőzet, láthatóság). Izlandon júliusban valószínűleg nincs aurora, de ha maradtok augusztus elejéig akkor releváns. 'Appy Hour' — izlandi happy hour keresési app Reykjavíkban (koktélok fele áron). 'Visit Reykjavik' — ingyenes városguide app.",
        "🇸🇪 Svédország / Stockholm (kötelező): 'SL-appen' (Storstockholms Lokaltrafik) — Stockholm metró, busz, villamos, kompok EGYETLEN appból. Itt veszed a jegyet is, itt látod az indulásokat. Kötelező, és nagyon jól működik. 'Waxholmsbolaget' — nincs dedikált app, de a mobiloldaluk (waxholmsbolaget.se) kiválóan működik, az archipelago kompokhoz ezt használd.",
        "🇸🇪 Svédország (opcionális): 'Donkey Republic' — közbicikli applikáció, Stockholmban és más svéd városokban elérhető. 'Parkopedia' — parkolóhely-keresés Svédországban, ha autóval mész be városba.",
        "🇩🇰 Dánia / Koppenhága (kötelező): 'DOT Mobilbilletter' — Koppenhága metró, busz, S-tog jegyvásárlás appból. Nélküle a fizikai jegyvásárlás drágább és körülményesebb. 'Rejseplanen' — koppenhágai közlekedési útvonaltervező, pontos, megbízható.",
        "🇩🇰 Dánia (opcionális): 'Donkey Republic' — közbicikli, Koppenhágában tényleg van értelme bringával közlekedni. 'Too Good To Go' — dán alapítású app, félárás maradék ételek étteremtől/pékségtől (este 20-21h körül aktív). 'MobilePay' — dán fizetési app, turistáknak általában nem elérhető svéd bankszámla nélkül, de sok helyen elfogadják a sima bankkártyát is.",
        "🇩🇪 Németország / Hamburg + Frankfurt (kötelező): 'HVV switch' — Hamburg teljes közlekedési hálózata (U-Bahn, S-Bahn, busz, fähre), jegyvásárlás. 'RMV' (Rhein-Main-Verkehrsverbund) — Frankfurt és környékének közlekedési appja. 'DB Navigator' — Deutsche Bahn app, ha esetleg vonatot is terveztek valamelyik rövidebb etapra.",
        "🇩🇪 Németország (opcionális): 'Parkopedia' vagy 'Park and Joy' — parkolóhely keresés Hamburgban és Frankfurtban hasznos (drágák és tele vannak). 'Too Good To Go' — Németországban is nagyon aktív, különösen Hamburgban."
      ]
    },
    {
      title: "🧭 Fő logisztikai döntések",
      accent: "accent-baltic",
      text: "A teljes út mostani minőségét néhány szerkezeti döntés fogja eldönteni, nem száz apró részlet.",
      items: [
        "A július 17-i Tallinn → Helsinki → Stockholm kompnap foglalási véglegesítése.",
        "Arlanda long-term parking kiválasztása: P2 Beta vagy Flygets P1.",
        "A júliusi izlandi foglalások gyors lezárása: szállások, autó, Friðheimar, esetleges bálnales / csónaktúra."
      ]
    },
    {
      title: "🌦 Izland · időjárás-adaptív logika",
      accent: "accent-iceland",
      text: "Izlandon a jó terv nem kőbe vésett, hanem rugalmas. A mostani júliusi ív nagy előnye, hogy majdnem minden nap működik esőben is, egyetlen igazán érzékeny kivétellel.",
      items: [
        "Day 3 · Snæfellsnes a legesőérzékenyebb nap: Kirkjufell, Búðakirkja, Lóndrangar és a félsziget fő kilátáspontjai ködben sokat vesztenek.",
        "Day 7 · déli part és Day 8 · Golden Circle viszont kifejezetten esőtűrők: vízesések, gejzír, kanyonok és fekete strandok esőben is jól működnek.",
        "A fő adaptív szabály: Day 1 este vagy Day 2 reggel nézzétek meg a 3–4 napos előrejelzést a vedur.is-en.",
        "Ha Day 3-ra Snæfellsnesen eső vagy köd várható, akkor cseréljétek fel Day 2-vel: Day 2 legyen Snæfellsnes, Day 3 pedig Reykjavík + Sky Lagoon.",
        "A Golden Circle-t nem kell külön napsütésre tartogatni; esőben is jó, sőt a vízeséses pontok gyakran még jobbak is.",
        "Day 4 és Day 6 vegyesek: Mývatnnál Hverir és Goðafoss esőben is jó, de Húsavík bálnales és Hverfjall kevésbé; Jökulsárlón működik esőben, Vestrahorn és Múlagljúfur kevésbé.",
        "A külön napi GPX-ek miatt minden nap ad-hoc cserélhető, de a legfontosabb előre bekészített swap valójában a Snæfellsnes ⇄ Reykjavík cserehorog."
      ]
    },
    {
      title: "🚗🚢✈ Autó + komp + repülő együtt",
      accent: "accent-return",
      text: "Itt nem külön eszközök, hanem egy összefűzött logikai lánc van: autó, komp, repülő, újra autó.",
      items: [
        "A baltikumi szakasz ereje az autós szabadság.",
        "A komp rész a ritmust szabja meg, nem csak közlekedési elem.",
        "A repülős izlandi középblokk után újra át kell váltani hazaúti autós fegyelemre."
      ]
    },
    {
      title: "❓ Nyitott kérdések",
      accent: "accent-open",
      text: "Ezeket érdemes a következő szerkesztési körben lezárni.",
      items: [
        "A két komp konkrét foglalása és kabinja július 17-re.",
        "A július 21-i északi napon a Húsavík bálnales vagy a hosszabb Mývatn-blokk legyen-e a fő verzió.",
        "A július 29-i frankfurti záróalvás pontos helye."
      ]
    }
  ],
  weather: {
    intro: "A júliusi útvonal három teljesen eltérő éghajlati karaktert fog össze: enyhe, de változékony Baltikum; hűvös-szeles Izland; majd melegebb, nyáriasabb skandináv–német hazaút. Emiatt a csomagolás kulcsa a rétegezés, nem a sok külön ruha.",
    cards: [
      {
        title: "Baltikum · július közepe",
        accent: "accent-baltic",
        text: "A balti szakasz általában kellemes nyári, de gyorsan változó idővel működik.",
        facts: [
          { label: "Nappal", value: "kb. 20–26 °C" },
          { label: "Este", value: "kb. 12–16 °C" },
          { label: "Rizikó", value: "szél és záporok" }
        ]
      },
      {
        title: "Izland · július végi roadtrip",
        accent: "accent-iceland",
        text: "Itt nem a minimum hőmérséklet ijesztő, hanem a szél, a csapadék és a gyors váltás.",
        facts: [
          { label: "Nappal", value: "kb. 9–14 °C" },
          { label: "Este", value: "kb. 5–9 °C" },
          { label: "Rizikó", value: "erős szél, köd, eső" }
        ]
      },
      {
        title: "Hazaút · Svédország / Dánia / Németország",
        accent: "accent-return",
        text: "A visszaút már klasszikusabb nyári autós időt is kaphat, főleg Németországban.",
        facts: [
          { label: "Nappal", value: "kb. 20–29 °C" },
          { label: "Este", value: "kb. 13–18 °C" },
          { label: "Rizikó", value: "meleg autópályás napok, záporok" }
        ]
      }
    ],
    notes: [
      {
        title: "Mit kell vinni?",
        accent: "info",
        items: [
          "Víz- és szélálló külső réteg Izlandra kötelező.",
          "Baltikumba és a hazaútra könnyebb nyári városi ruha is kell.",
          "Rétegezhető középmeleg darabokkal lehet a legjobban lefedni az egész útat."
        ]
      },
      {
        title: "Mit nem szabad alábecsülni?",
        accent: "warn",
        items: [
          "Izlandon a szél és az eső jobban számít, mint a puszta Celsius.",
          "A hazaúton a meleg, hosszú vezetős napok fáradása külön tényező.",
          "A balti szakaszban egy-egy hidegebb este teljesen reális júliusban is."
        ]
      }
    ]
  },
  readings: {
    title: "🗂 Saját tervezési segédanyagok",
    text: "Ez a blokk nem külön olvasmánylista, hanem a saját észak-európai út tervezésének három alapdokumentuma. Ezek együtt adják a linkbankot, a részletes narratív tervet és a napi státuszokkal dolgozó sheetet.",
    items: [
      {
        title: "📚 Travel_References.md",
        accent: "accent-baltic",
        text: "Ez a route-specifikus és általános referencia-link gyűjtő. Innen emeltem át a komp- és arlandai parkolási hivatkozásokat, valamint a saját észak-európai tervanyagok nyomvonalát is.",
        links: [
          { label: "Travel_References.md", url: "https://docs.google.com/document/d/1qsECYR3Ocr4rvHT-fZR8TjI2jy5kmNY-x5kJh-zDzQI/edit?tab=t.0" }
        ]
      },
      {
        title: "🧠 Eszak Europa AI Terv",
        accent: "accent-iceland",
        text: "A részletesebb belső struktúra és a Tibi / Henni / Izland / hazaút hármas tagolás főleg ebből a dokumentumból állt össze.",
        links: [
          { label: "Eszak Europa AI Terv", url: "https://docs.google.com/document/d/1vfXvA_Z3OklnOJ4AKGIUHdt4VhBV8WI0wOAhOiD2s4k/edit?usp=drivesdk" }
        ]
      },
      {
        title: "📊 Utazás Tervezés – EszakEuropa sheet",
        accent: "accent-return",
        text: "A napi dátumok, km-ek, státuszok és az aktuális nyitott pontok alapja továbbra is a sheet.",
        links: [
          { label: "Utazás Tervezés – EszakEuropa", url: "https://docs.google.com/spreadsheets/d/1a__qw0zJe4rCkMLvVhjUa7R753z68eaOQg3kaaS-qIc/edit?gid=1804377913#gid=1804377913" }
        ]
      }
    ]
  },
  infoGroups: [
    {
      title: "📁 Saját anyagok",
      text: "Ezek a mostani út saját központi tervező anyagai.",
      links: [
        { label: "Travel_References.md", url: "https://docs.google.com/document/d/1qsECYR3Ocr4rvHT-fZR8TjI2jy5kmNY-x5kJh-zDzQI/edit?tab=t.0" },
        { label: "Eszak Europa AI Terv", url: "https://docs.google.com/document/d/1vfXvA_Z3OklnOJ4AKGIUHdt4VhBV8WI0wOAhOiD2s4k/edit?usp=drivesdk" },
        { label: "Utazás Tervezés – EszakEuropa", url: "https://docs.google.com/spreadsheets/d/1a__qw0zJe4rCkMLvVhjUa7R753z68eaOQg3kaaS-qIc/edit?gid=1804377913#gid=1804377913" },
        { label: "Drive mappa", url: "https://drive.google.com/drive/folders/1YhE05qqRx8tSU2naRhJkw3ZANEpLlA1f" }
      ]
    },
    {
      title: "🚢 Észtország / Finnország / Svédország · kompok",
      text: "A Travel References dokumentumban jelenleg ezek a leghasznosabb konkrét észak-európai logisztikai linkek.",
      links: [
        { label: "Tallink Tallinn–Stockholm ferry", url: "https://www.tallink.com/dk-en/travelling/one-way/tallinn-stockholm-ferry" },
        { label: "Tallink Helsinki–Tallinn shuttle", url: "https://www.siljatallink.fi/en/web/int/tallink-shuttle-megastar-helsinki-tallinn-helsinki" },
        { label: "Viking Line", url: "https://www.vikingline.com/" }
      ]
    },
    {
      title: "🅿 Stockholm / Arlanda",
      text: "A parkolási döntéshez ezek a közvetlenül releváns források vannak most feljegyezve.",
      links: [
        { label: "Swedavia Arlanda parking", url: "https://www.swedavia.se/en/arlanda/parking/" }
      ],
      items: [
        "Jelenlegi kézi note a reference-ben: P2 Beta Long-term.",
        "Jelenlegi kézi note a reference-ben: Flygets P1."
      ]
    },
    {
      title: "🏙 Litvánia / Lettország / Észtország",
      text: "Itt jelenleg inkább a struktúra van kész, mint a külön linkbank. A következő körben ide lehet felhúzni célzott városi és parkolási forrásokat.",
      items: [
        "Vilnius: city center + parkoló fókusz.",
        "Riga: Old Town / Art Nouveau városi blokk.",
        "Tallinn: kikötői logisztika és komp előtti este."
      ]
    },
    {
      title: "🧊 Izland",
      text: "Itt jelenleg a route-logika és a belső tervanyag az erős, külön külső linkbank még bővíthető.",
      items: [
        "A júliusi Ring Roadhoz 2WD is elég, stabil autóval és jó foglalási ritmussal.",
        "A fő nyári kulcs a tömegstratégia: korai indulás vagy késő esti helyszínek.",
        "Guesthouse-alapú szállássor jobban illik a tervhez, mint a túl sok városi váltás."
      ]
    },
    {
      title: "📝 Nyitott információs gyűjtő",
      text: "Ezt a boxot direkt meghagytam linkgyűjtőnek a következő körökre.",
      items: [
        "Konkrét vilniusi / rigai / tallinni szállások.",
        "Konkrét izlandi guesthouse-ok és autóbérlős rövidlista.",
        "Német tranzitszállás shortlist a hazaútra."
      ]
    }
  ]
};
