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
        date: "2026.07.13",
        phase: "Henni külön",
        accent: "accent-iceland",
        title: "Erasmus+ kurzus kezdete · Izland",
        summary: "Megkezdődik az Erasmus+ kurzus Izlandon (júl. 13–18.). Henni júl. 11-én érkezett Reykjavíkba (Wizz Air W62427), 2 nap ráhangolódás után indul a kurzus.",
        points: ["Smart Teachers Play More", "CLIL módszertan", "júl. 13–18."]
      },
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
        driveStats: { km: "~300 km", stops: 3, depart: "09:00", arrive: "~18:00", driveTime: "~4 óra", timelinePoints: [{time:"09:00", label:"Vilnius ind."}, {time:"11:30", label:"Hill of Crosses"}, {time:"18:00", label:"Riga"}] }
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
        title: "Reykjavík → Stockholm → Malmö",
        summary: "FI306 visszaút, autófelvétel, majd már ezen a napon indul a szárazföldi zárás.",
        points: ["FI306", "07:35 → 12:45", "Malmö felé vezetés"],
        driveStats: { km: "~600 km (Arlanda → Malmö)", stops: 2, depart: "07:35 (FI306)", arrive: "~20:00 Malmö", driveTime: "~5 óra", timelinePoints: [{time:"07:35", label:"FI306 KEF"}, {time:"12:45", label:"Arlanda"}, {time:"14:00", label:"autó + ind."}, {time:"20:00", label:"Malmö"}] }
      },
      {
        date: "2026.07.27",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Malmö → Koppenhága",
        summary: "Rövid átmeneti nap az Øresund híd fókuszával.",
        points: ["Øresund Bridge", "rövid city stop", "~50 km"],
        driveStats: { km: "~50 km", stops: 2, depart: "10:00", arrive: "~13:00", driveTime: "~40 perc", timelinePoints: [{time:"10:00", label:"Malmö"}, {time:"11:00", label:"Øresund"}, {time:"13:00", label:"Koppenhága"}] }
      },
      {
        date: "2026.07.28",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Koppenhága → Hamburg",
        summary: "Belépés a német szakaszba, még emberi távval.",
        points: ["~350 km", "Hamburg", "rövidebb etap"],
        driveStats: { km: "~350 km", stops: 2, depart: "09:00", arrive: "~17:00", driveTime: "~4 óra", timelinePoints: [{time:"09:00", label:"Koppenhága"}, {time:"13:00", label:"Dán határ"}, {time:"17:00", label:"Hamburg"}] }
      },
      {
        date: "2026.07.29",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Hamburg → Frankfurt",
        summary: "Klasszikus német autópályás zárónap a budapesti visszagurulás előtt.",
        points: ["~500 km", "Frankfurt", "5–6 óra"],
        driveStats: { km: "~500 km", stops: 2, depart: "08:00", arrive: "~17:00", driveTime: "~5 óra", timelinePoints: [{time:"08:00", label:"Hamburg"}, {time:"12:30", label:"félúton"}, {time:"17:00", label:"Frankfurt"}] }
      },
      {
        date: "2026.07.30",
        phase: "Közös hazaút",
        accent: "accent-return",
        title: "Frankfurt → Budapest",
        summary: "Az aktuális főív szerinti lezárás, július 30-i budapesti érkezéssel.",
        points: ["~950 km", "hazautazás", "zárónap"],
        driveStats: { km: "~950 km", stops: 3, depart: "07:00", arrive: "~20:00", driveTime: "~9 óra", timelinePoints: [{time:"07:00", label:"Frankfurt ind."}, {time:"11:00", label:"Ausztria"}, {time:"15:00", label:"Bécs"}, {time:"20:00", label:"Budapest 🏁"}] }
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
      "A hazaút most a július 30-i budapesti érkezésű főívet követi, a 07.31-es duplikált sheet-sort nem."
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
      title: "Budapest - Baltikum - Stockholm",
      accent: "accent-baltic",
      status: "külön szakasz",
      statusClass: "status-warm",
      text: "Tibi teljes első szakasza: autós felvezetés Budapestről Litvánián, Lettországon és Észtországon át, majd július 17-én Helsinki + Turku finn nap és Viking Line overnight, július 18-án korai stockholmi érkezés és FI309 Izlandra.",
      points: [
        "A fő logika a jól vezethető expedition, nem a rohanós pipálgatás.",
        "A legjobb városi napok: Vilnius, Riga és Tallinn.",
        "A 07.17-i nap: Tallinn → Helsinki (Tallink Shuttle) + helsinki gyors blokk + Turku (kastély, folyópart) + Viking Line overnight → Stockholm 06:30."
      ],
      cta: { label: "Részletes Baltikum oldal", tab: "baltikum" }
    },
    sharedIceland: {
      title: "Izland",
      accent: "accent-iceland",
      status: "közös szakasz",
      statusClass: "status-green",
      text: "Ez a közös út gerince. Henni már korábban kinn van, Tibi érkezése után pedig egy teljes júliusi Ring Road-ív jön Reykjavíkból Snæfellsnesen, északon, keleten és a déli parton át vissza Keflavíkig.",
      points: [
        "A főív: Reykjavík + Sky Lagoon, Snæfellsnes, Mývatn, Kelet-Izland, Jökulsárlón, déli part, Golden Circle.",
        "A legfontosabb nyári stratégia a korai / késői helyszínlátogatás a tömeg miatt.",
        "A Ring Roadhoz 2WD is elég, 4WD csak F-utakhoz kellene."
      ],
      cta: { label: "Részletes Izland oldal", tab: "izland" }
    },
    sharedReturn: {
      title: "Svédország - Dánia - Németország - hazaút",
      accent: "accent-return",
      status: "közös szakasz",
      statusClass: "status-cool",
      text: "A Reykjavíkból visszarepülő páros szakasz után indul a közös autós lezárás Malmön, Koppenhágán és Németországon át Budapest felé.",
      points: [
        "Itt már az állóképesség és a jó etapméretezés a fontos, nem az új nagy sightseeingszál.",
        "Malmö és Koppenhága kicsit fellazítja a német autópályás blokkot.",
        "A részletes napi program itt főleg vezetési és városi stop-logika."
      ],
      cta: { label: "Részletes hazaút oldal", tab: "hazaut" }
    },
    henniErasmus: {
      title: "Erasmus+ · Inspiring Young Language Learners",
      accent: "accent-iceland",
      status: "2026. júl. 13–18. · Izland",
      statusClass: "status-green",
      text: "Henni 2026. július 11-én repül Reykjavíkba (Wizz Air W62427) egy Erasmus+ által támogatott pedagógiai kurzusra. Két nap ráhangolódás után a 'Inspiring Young Language Learners' program 2026. július 13–18. közt zajlik, a Smart Teachers Play More szervezésében Izlandon — CLIL módszertanra, STEAM-feladatokra, storytellingre és izlandi iskolalátogatásokra épülve.",
      points: [
        "Kurzus: 2026. július 13–18. | Repülés: Wizz Air W62427, BUD → KEF, 2026.07.11",
        "Szervező: Smart Teachers Play More · Izland",
        "Tartalom: CLIL módszertan, STEAM, storytelling, mindfulness, izlandi iskolalátogatások",
        "Célcsoport: pedagógusok — óvoda, általános iskola, nyelvtanárok, CLIL és SNI szakemberek",
        "Erasmus+ Course ID: 4497715 · Részvételi díj: €630/fő",
        "Dokumentáció: Europass Mobility Document, Learning Agreement, Evaluation Form",
        "<a href='https://www.smartteachersplaymore.com/courses-iceland/inspiring-young-language-learners' target='_blank' rel='noreferrer' style='color:inherit'>→ Kurzus részletei (smartteachersplaymore.com)</a>"
      ],
      cta: { label: "Izlandi roadtrip — Ring Road részletek", tab: "izland" }
    },
    henniIceland: {
      title: "Közös Ring Road körút",
      accent: "accent-iceland",
      status: "júl. 18–26. · 8 nap",
      statusClass: "status-green",
      text: "Tibi július 18-án érkezik Keflavíkba (FI309, Stockholm → KEF, 18:25). Innentől közösen teljesítik a Ring Roadot: Reykjavík akklimatizáció, Snæfellsnes, északi Akureyri–Mývatn-blokk, keleti fjordok, Jökulsárlón, Diamond Beach, déli part és Golden Circle-zárás. Visszarepülés júl. 26-án (FI306, KEF → Stockholm).",
      points: [
        "Júl. 18.: Tibi érkezik KEF-be — találkozás a kurzus után",
        "Júl. 18–26.: teljes Ring Road körút közösen (8 nap, ~1900 km)",
        "A részletes napi bontás és GPX pontok az Izland oldalon vannak."
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
          title: "Budapest → Lengyelország",
          subtitle: "Tranzitnyitó nap",
          open: true,
          driveLog: { km: "~900 km", stops: 2, driveTime: "~10 óra", depart: "07:00", arrive: "~20:00", timelinePoints: [{time:"07:00", label:"Budapest ind."}, {time:"13:00", label:"~félúton"}, {time:"20:00", label:"szállás érk."}] },
          tags: [
            { label: "tranzit", cls: "tag-drive" },
            { label: "8–10h", cls: "tag-drive" }
          ],
          activities: [
            { time: "reggel", icon: "🚗", name: "Indulás Budapestről", detail: "A teljes expedition első napja, még kifejezetten vezetésközpontú fókuszban." },
            { time: "napközben", icon: "🛣", name: "Hosszú autópályás etap", detail: "Lengyelország ezen a terven nem célország, hanem kényelmes tranzit." },
            { time: "este", icon: "🛏", name: "1 tranzitszállás", detail: "Az első nap lényege a jó alvóhely, nem a sightseeing.", note: "Ha ez túl hosszú lenne, itt lehet a legkisebb veszteséggel rövidíteni a napot." }
          ],
          notes: ["Lengyelország maradjon tranzit.", "Nem érdemes erre a napra külön várost ráerőltetni."]
        },
        {
          num: "2",
          date: "2026. július 11., szombat",
          title: "Lengyelország → Vilnius · Henni BUD → KEF",
          subtitle: "Litvánia érkezés — Henni is ma repül Izlandra (Wizz Air W62427)",
          driveLog: { km: "~650 km", stops: 2, driveTime: "~8 óra", depart: "08:00", arrive: "~19:00", timelinePoints: [{time:"08:00", label:"ind."}, {time:"14:00", label:"Litvánia határ"}, {time:"19:00", label:"Vilnius"}] },
          tags: [
            { label: "~650 km", cls: "tag-drive" },
            { label: "Vilnius", cls: "tag-city" }
          ],
          activities: [
            { time: "napközben", icon: "🚗", name: "Etap Litvánia felé", detail: "A második hosszabb vezetős nap végén már valódi városi célpont jön." },
            { time: "este", icon: "🌆", name: "Esti Vilnius", detail: "Első rövid séta, vacsora és ráhangolódás a Baltikum városiasabb részére." },
            { time: "párhuzamos szál", icon: "✈️", name: "Henni: BUD → KEF, Wizz Air W62427", detail: "15:40 → 18:20 — Erasmus kurzusra indul Izlandra (Smart Teachers Play More, júl. 13–18.). 2 nap ráhangolódás, majd júl. 13-án kezdődik a kurzus." }
          ],
          notes: ["Tibiéknél itt még balti felvezetés van, Henni ma repül Izlandra az Erasmus kurzusra."]
        },
        {
          num: "3",
          date: "2026. július 12., vasárnap",
          title: "Vilnius + Trakai",
          subtitle: "Első teljes balti city day",
          driveLog: { km: "~30 km (Trakai kitérő)", stops: 2, driveTime: "~45 perc", depart: "09:00", arrive: "~20:00", timelinePoints: [{time:"09:00", label:"Vilnius óváros"}, {time:"12:00", label:"Trakai (30 km)"}, {time:"16:00", label:"vissza Vilnius"}] },
          tags: [
            { label: "óváros", cls: "tag-city" },
            { label: "Trakai", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "🏙", name: "Vilnius óváros", detail: "Laza tempóban is működő történelmi városi blokk." },
            { time: "kora délután", icon: "🏰", name: "Trakai Castle", detail: "Rövid, erős kitérő, ami nem terheli túl a napot." },
            { time: "este", icon: "🍽", name: "Vissza Vilniusba", detail: "Második éj ugyanazon a bázison, kényelmes parkolási logikával." }
          ],
          notes: ["Vilnius ne csak alvóállomás legyen.", "Trakai maradjon céltudatos, nem teljes napos széthúzás."]
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
          subtitle: "Lazább city day",
          driveLog: { km: "~5 km (gyalogos nap)", stops: 4, driveTime: "gyalogos nap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"reggeli"}, {time:"10:00", label:"Old Town"}, {time:"15:00", label:"Art Nouveau"}, {time:"19:00", label:"vacsora"}] },
          tags: [
            { label: "Old Town", cls: "tag-city" },
            { label: "Art Nouveau", cls: "tag-city" }
          ],
          activities: [
            { time: "délelőtt", icon: "🏛", name: "Old Town", detail: "Sűrű, de könnyen bejárható központi Riga." },
            { time: "délután", icon: "🏙", name: "Art Nouveau negyed", detail: "Ez adja a rigai nap legerősebb külön karakterét." },
            { time: "este", icon: "☕", name: "Laza városi zárás", detail: "Ez a nap pont attól jó, hogy nem akar túl sokat." }
          ],
          notes: ["A rigai puffer fontos a sok vezetés közé.", "Másnap újra hosszabb mozgás jön Tallinn felé."]
        },
        {
          num: "6",
          date: "2026. július 15., szerda",
          title: "Riga → Sigulda → Tallinn",
          subtitle: "Gauja NP átmeneti nap",
          driveLog: { km: "~350 km", stops: 3, driveTime: "~4,5 óra", depart: "08:00", arrive: "~20:00", timelinePoints: [{time:"08:00", label:"ind. Riga"}, {time:"10:00", label:"Sigulda / Gauja"}, {time:"20:00", label:"Tallinn érk."}] },
          tags: [
            { label: "~350 km", cls: "tag-drive" },
            { label: "Gauja NP", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "🌲", name: "Sigulda / Gauja", detail: "A természetes átvezetés itt sokat javít a teljes úton." },
            { time: "napközben", icon: "🚗", name: "Tallinn felé vezetés", detail: "Még mindig hosszabb nap, de már jobb ritmussal." },
            { time: "este", icon: "⚓", name: "Tallinn kikötőközeli hotel", detail: "A másnapi tengeri szál miatt itt a lokáció különösen fontos." }
          ],
          notes: ["Tallinn előtt ez a legjobb hely a tájváltásra.", "A kikötőközeli zárás logisztikailag kifizetődik."]
        },
        {
          num: "7",
          date: "2026. július 16., csütörtök",
          title: "Tallinn",
          subtitle: "Óváros + kikötői ráfordulás",
          driveLog: { km: "~5 km (gyalogos nap)", stops: 3, driveTime: "gyalogos nap", depart: "09:00", arrive: "~21:00", timelinePoints: [{time:"09:00", label:"Tallinn óváros"}, {time:"14:00", label:"kikötő"}, {time:"18:00", label:"komp prep."}] },
          tags: [
            { label: "óváros", cls: "tag-city" },
            { label: "komp előtt", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "🏰", name: "Tallinn óváros", detail: "Kompakt, karakteres, könnyen jó napot ad." },
            { time: "délután", icon: "⚓", name: "Kikötő környéke", detail: "A másnapi átmenet miatt itt praktikus előre ráhangolódni." },
            { time: "este", icon: "🧳", name: "Komp előtti előkészítés", detail: "Másnap már nem tiszta városnap, hanem mozgási nap jön." }
          ],
          notes: ["Tallinn itt csúcsállomás és logisztikai kapu egyszerre."]
        },
        {
          num: "8",
          date: "2026. július 17., péntek",
          title: "Helsinki + Turku — Finnország nap",
          subtitle: "Tallink shuttle Helsinkibe → finn városi blokk → Turku → Viking Line overnight",
          driveLog: { km: "~170 km (Helsinki → Turku)", stops: 5, driveTime: "~1,5 óra", depart: "10:30", arrive: "20:00", timelinePoints: [{time:"10:30", label:"Tallinn ind."}, {time:"12:30", label:"Helsinki"}, {time:"14:30", label:"→ Turku"}, {time:"20:00", label:"Viking Line"}] },
          tags: [
            { label: "Helsinki", cls: "tag-city" },
            { label: "Turku", cls: "tag-city" },
            { label: "Viking Line", cls: "tag-ferry" }
          ],
          activities: [
            { time: "10:30", icon: "🚢", name: "Tallinn → Helsinki (Tallink Shuttle)", detail: "Tallink Megastar, 10:30 → 12:30. A világ egyik legnagyobb és legmodernebb komp-járata, kényelmes átkelés." },
            { time: "12:30–14:30", icon: "🏙", name: "Helsinki gyors blokk", detail: "Market Square (Kauppatori) + Régi Csarnok, Helsinki Katedrális, partséta a kikötő mellett. 2 óra alatt az ikonikus képek megvannak." },
            { time: "14:30–16:00", icon: "🚗", name: "Helsinki → Turku (autóval)", detail: "~170 km, E18 autópálya, 1,5 óra. Turku Finnország nyugat-déli csücskén, a Turku-Stockholm kompok kikötőjével." },
            { time: "16:00–19:30", icon: "🏰", name: "Turku: Kastély + Aura folyópart", detail: "Turku Castle (Turun linna) 1-1,5 óra, majd Aura folyópart — hajóéttermek, Market Hall, Turku katedrális." },
            { time: "20:00", icon: "🚢", name: "Viking Line boarding Turkuból", detail: "Viking Grace vagy Viking Glory, Turku → Mariehamn (Åland-szigetek) → Stockholm Värtahamnen. Megérkezés 06:30." }
          ],
          notes: [
            "⚠️ Viking Line vs. régi terv: A Helsinki→Stockholm overnight ferry (Silja Symphony) 18 óra és 16:45-kor indul — így alig 4 óra maradt volna Helsinkiben. A Turku–Stockholm vonal (Viking Line) csak 10,5 óra, reggel 06:30-ra ér Stockholmba — sokkal jobb puffer az FI309 elé.",
            "Helsinki gyors blokk (2h): Market Square + Katedrális a legjobb kombó. Ha kicsit több idő van: Temppeliaukio sziklakirkko (köve van a legtömörebb 30 percnek) vagy Allas Sea Pool.",
            "Turku Castle (Turun linna): Finnország egyik legidősebb és legimpozánsabb középkori kastélya, a kikötő tövénél. Nyitva 10:00–18:00. Belépő ~€10.",
            "Turku Katedrális: Finnország legnagyobb katedrálisa, a Turku-sétány szívén. Gyalogosan elérhető a castellótól.",
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
          title: "Reykjavík → Stockholm → Malmö",
          subtitle: "Közös repülős visszacsatlakozás és azonnali továbbgurulás",
          open: true,
          driveLog: { km: "~600 km (Arlanda → Malmö)", stops: 2, driveTime: "~5 óra", depart: "07:35 (FI306)", arrive: "~20:00 Malmö", timelinePoints: [{time:"07:35", label:"FI306 KEF"}, {time:"12:45", label:"Arlanda"}, {time:"14:00", label:"autó + ind."}, {time:"20:00", label:"Malmö"}] },
          tags: [
            { label: "FI306", cls: "tag-flight" },
            { label: "Malmö", cls: "tag-city" }
          ],
          activities: [
            { time: "07:35", icon: "✈", name: "Icelandair FI306", detail: "Reykjavík / Keflavík → Stockholm / Arlanda, helyi idő szerint 07:35 → 12:45." },
            { time: "délután", icon: "🚗", name: "Autó felvétele Arlandán", detail: "Itt vált vissza az expedition repülésből szárazföldi zárásba." },
            { time: "később", icon: "🛣", name: "Levezetés Malmö felé", detail: "A sheet aktuális főíve szerint ezen a napon már Malmöig tart a hazaút első szárazföldi szakasza." }
          ],
          notes: ["Ez kulcsváltó nap: még repülős, de már a hosszú közös visszaút része."]
        },
        {
          num: "2",
          date: "2026. július 27., hétfő",
          title: "Malmö → Koppenhága",
          subtitle: "Øresund Bridge + rövid fellazítás",
          driveLog: { km: "~50 km", stops: 2, driveTime: "~40 perc", depart: "10:00", arrive: "~13:00", timelinePoints: [{time:"10:00", label:"Malmö ind."}, {time:"11:00", label:"Øresund"}, {time:"13:00", label:"Koppenhága"}] },
          tags: [
            { label: "Øresund", cls: "tag-focus" },
            { label: "~50 km", cls: "tag-drive" }
          ],
          activities: [
            { time: "délelőtt", icon: "🌉", name: "Øresund Bridge", detail: "Ez a nap legfontosabb karaktereleme." },
            { time: "délután", icon: "🏙", name: "Rövid Koppenhága city stop", detail: "Pont annyi, hogy a route kapjon egy emberibb törést." },
            { time: "este", icon: "🛏", name: "Koppenhága hotel", detail: "Másnap már újra német irányú mozgás jön." }
          ],
          notes: ["Jó ellenpont az előző és a következő hosszabb vezetős blokkok között."]
        },
        {
          num: "3",
          date: "2026. július 28., kedd",
          title: "Koppenhága → Hamburg",
          subtitle: "Belépés a német szakaszba",
          driveLog: { km: "~350 km", stops: 2, driveTime: "~4 óra", depart: "09:00", arrive: "~17:00", timelinePoints: [{time:"09:00", label:"Koppenhága ind."}, {time:"13:00", label:"Dán határ"}, {time:"17:00", label:"Hamburg"}] },
          tags: [
            { label: "~350 km", cls: "tag-drive" },
            { label: "Hamburg", cls: "tag-city" }
          ],
          activities: [
            { time: "napközben", icon: "🚗", name: "Etap Hamburg felé", detail: "Még mindig emberi méretű nap, ami jól átvezet a hosszabb záró blokkokba." },
            { time: "este", icon: "🏨", name: "Hamburg hotel", detail: "Utolsó igazán városi este a hazagurulás előtt." }
          ],
          notes: ["Hamburg itt már inkább jó támaszpont, nem önálló városprojekt."]
        },
        {
          num: "4",
          date: "2026. július 29., szerda",
          title: "Hamburg → Frankfurt",
          subtitle: "Német autópályás záróetap",
          driveLog: { km: "~500 km", stops: 2, driveTime: "~5 óra", depart: "08:00", arrive: "~17:00", timelinePoints: [{time:"08:00", label:"Hamburg ind."}, {time:"12:30", label:"félúton"}, {time:"17:00", label:"Frankfurt"}] },
          tags: [
            { label: "~500 km", cls: "tag-drive" },
            { label: "Frankfurt", cls: "tag-city" }
          ],
          activities: [
            { time: "egész nap", icon: "🛣", name: "Hosszabb német etap", detail: "Ez a route egyik legkevésbé romantikus, de legszükségesebb napja." },
            { time: "este", icon: "🛏", name: "Frankfurt környéki alvás", detail: "A július 30-i budapesti zárást készíti elő." }
          ],
          notes: ["Itt már nem kell többet keresni, mint jó ritmust és kényelmes zárást."]
        },
        {
          num: "5",
          date: "2026. július 30., csütörtök",
          title: "Frankfurt → Budapest",
          subtitle: "Expedition vége",
          driveLog: { km: "~950 km", stops: 3, driveTime: "~9 óra", depart: "07:00", arrive: "~20:00", timelinePoints: [{time:"07:00", label:"Frankfurt ind."}, {time:"11:00", label:"Ausztria"}, {time:"15:00", label:"Bécs"}, {time:"20:00", label:"Budapest 🏁"}] },
          tags: [
            { label: "zárónap", cls: "tag-focus" },
            { label: "Budapest", cls: "tag-city" }
          ],
          activities: [
            { time: "napközben", icon: "🚗", name: "Hazagurulás Budapestre", detail: "Az út utolsó szakasza már a lezárásról szól." },
            { time: "este", icon: "🏁", name: "Expedition vége", detail: "Itt zárul össze a teljes külön + közös északi ív." }
          ],
          notes: ["A részletes napi program helyett itt a kulturált hazaérkezés a cél."]
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
