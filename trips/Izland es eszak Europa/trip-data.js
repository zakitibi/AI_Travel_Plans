const tripData = {
  title: "🌋 Izland es eszak Europa · 2026. július 10 – augusztus 6.",
  subtitle: "Tibi balti autós felvezető útja a július 18-i stockholmi repüléssel, Henni külön izlandi belépővel, majd közös hazaúttal",
  updatedAt: "2026.05.27",
  route: [
    { label: "BUD", cls: "flight" },
    { separator: "→🚗→" },
    { label: "Vilnius", cls: "baltic" },
    { label: "Riga", cls: "baltic" },
    { label: "Tallinn", cls: "baltic" },
    { separator: "→🚢→" },
    { label: "Helsinki", cls: "nordic" },
    { label: "Porvoo", cls: "nordic" },
    { label: "Turku", cls: "nordic" },
    { label: "Stockholm", cls: "nordic" },
    { separator: "→✈→" },
    { label: "Reykjavík", cls: "iceland" },
    { label: "Selfoss", cls: "iceland" },
    { label: "Vík", cls: "iceland" },
    { label: "Höfn", cls: "iceland" },
    { label: "Egilsstaðir", cls: "iceland" },
    { label: "Mývatn", cls: "iceland" },
    { label: "Snæfellsnes", cls: "iceland" },
    { separator: "→✈→" },
    { label: "Stockholm", cls: "return" },
    { label: "Malmö", cls: "return" },
    { label: "Koppenhága", cls: "return" },
    { label: "Hamburg", cls: "return" },
    { label: "Frankfurt", cls: "return" },
    { separator: "→🚗→" },
    { label: "BUD", cls: "flight" }
  ],
  icelandGeneralBox: {
    title: "🧭 Általános útmutató",
    accent: "iceland",
    open: false,
    layout: "stack",
    cards: [
      {
        title: "",
        paragraphs: [
          "<strong>🌦 Időjárás és útállapot:</strong> a <a href='https://en.vedur.is/weather/forecasts/areas/' target='_blank' rel='noreferrer'>vedur.is</a> az elsődleges döntési forrás, a <a href='https://safetravel.is/' target='_blank' rel='noreferrer'>safetravel.is</a> az út- és túrakockázatokhoz, az <a href='https://umferdin.is/en' target='_blank' rel='noreferrer'>umferdin.is</a> az élő útállapothoz és lezárásokhoz, a <a href='https://vegasja.vegagerdin.is/eng/' target='_blank' rel='noreferrer'>vegasja.vegagerdin.is</a> az útállapot-előrejelzéshez. Izlandon ez napi rutin, nem extra.",
          "<strong>🚗 Vezetés, autó és biztosítás:</strong> Ring Roadon 90 km/h a plafon, faluban 50. 2WD elég (4×4 csak F-utakhoz). A szél 15–25 m/s sem ritka — az ajtót fogd nyitáskor; bárányokra főleg Snæfellsnesen és keleten számíts. A gravel insurance (SCDW/GP, <a href='https://epiciceland.net/car-rental-insurance-guide-iceland/' target='_blank' rel='noreferrer'>guide</a>) itt alap; átvételkor fotózd körbe az ablakokat, lökhárítót, karcokat.",
          "<strong>💳 Pénz, tankolás, étkezés:</strong> bankkártya mindenhol megy, készpénz alig kell; a kutaknál PIN-kód kötelező, maradj 1/2 tank fölött. A szállodai reggeli jó ár-érték, a Bónus olcsóbb, az N1/Olís hot dog legitim roadtrip-kaja. A <a href='https://www.google.com/maps/search/?api=1&query=Fri%C3%B0heimar+Iceland' target='_blank' rel='noreferrer'>Friðheimar</a><span class='g-rate'>⭐4.6</span> paradicsomfarm foglalós élmény — kezeld előre.",
          "<strong>🧥 Pakolás:</strong> vízhatlan kabát és nadrág, vízhatlan cipő, sapka, kesztyű, fürdőruha, autós töltő és offline térkép legyen alap. Júliusban is a szél és a permet számít többet, mint a hőmérséklet.",
          "<strong>⏰ Időzítés és tömeg:</strong> a buszos tömegek 9:30–15:30 között esnek be a főpontokra; reggel 7:30 előtt vagy este 20:00 után szinte üres minden, és az aranyóra fénye a legjobb. <a href='https://www.google.com/maps/search/?api=1&query=J%C3%B6kuls%C3%A1rl%C3%B3n+Iceland' target='_blank' rel='noreferrer'>Jökulsárlón</a><span class='g-rate'>⭐4.8</span>, <a href='https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Iceland' target='_blank' rel='noreferrer'>Gyémánt-part</a><span class='g-rate'>⭐4.7</span>, <a href='https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland' target='_blank' rel='noreferrer'>Seljalandsfoss</a><span class='g-rate'>⭐4.7</span> és <a href='https://www.google.com/maps/search/?api=1&query=Reynisfjara+Iceland' target='_blank' rel='noreferrer'>Reynisfjara</a><span class='g-rate'>⭐4.6</span> különösen hálás esti látogatásra.",
          "<strong>🏠 Szállás:</strong> 3 csillagos hotel/vendégház bőven elég — az élmény a tájon van. A déli part (<a href='https://www.google.com/maps/search/?api=1&query=V%C3%ADk+%C3%AD+M%C3%BDrdal+Iceland' target='_blank' rel='noreferrer'>Vík</a><span class='g-rate'>⭐4.6</span>, <a href='https://www.google.com/maps/search/?api=1&query=H%C3%B6fn+Iceland' target='_blank' rel='noreferrer'>Höfn</a>, <a href='https://www.google.com/maps/search/?api=1&query=Kirkjub%C3%A6jarklaustur+Iceland' target='_blank' rel='noreferrer'>Kirkjubæjarklaustur</a>) júliusban gyorsan telik, ezeket kötelező előre foglalni. Főzhető szállással napi 30–50 EUR spórolható étkezésenként.",
          "<strong>🔁 Fordított kör · nyugati zárás:</strong> Snæfellsnes az utolsó teljes napon jön. Ha a <a href='https://en.vedur.is/weather/forecasts/areas/' target='_blank' rel='noreferrer'>vedur.is</a> rossz látást/ködöt jelez júl. 25-re, rövidítsd a félszigetet a <a href='https://www.google.com/maps/search/?api=1&query=B%C3%BA%C3%B0akirkja+Iceland' target='_blank' rel='noreferrer'>Búðakirkja</a><span class='g-rate'>⭐4.6</span> / <a href='https://www.google.com/maps/search/?api=1&query=Arnarstapi+Iceland' target='_blank' rel='noreferrer'>Arnarstapi</a><span class='g-rate'>⭐4.7</span> / <a href='https://www.google.com/maps/search/?api=1&query=Kirkjufell+Iceland' target='_blank' rel='noreferrer'>Kirkjufell</a><span class='g-rate'>⭐4.7</span> magra, és időben zárj vissza Reykjavík/KEF felé.",
          "<strong>♨️ Fürdők és helyi szokások:</strong> a nyilvános fürdőkbe belépés előtt meztelen zuhanyzás kötelező az öltözőben (szigorúan ellenőrzött). Ezüst ékszert vedd le a geotermikus vízbe lépés előtt (a kén elsötétíti). A csapvíz kiváló és iható; orr-fújás mások előtt illetlen. Csúcsszezonban <a href='https://www.google.com/maps/search/?api=1&query=Gullfoss+Iceland' target='_blank' rel='noreferrer'>Gullfoss</a><span class='g-rate'>⭐4.8</span> és <a href='https://www.google.com/maps/search/?api=1&query=Geysir+Iceland' target='_blank' rel='noreferrer'>Geysir</a><span class='g-rate'>⭐4.7</span> körül figyelj a zsebedre.",
          "<strong>🐦 Lundák (puffinok):</strong> június–augusztus a legjobb lunda-hónap — a júliusi körút tökéletes. A madarak 16:00 után a legaktívabbak a sziklapartokon; közel mehetsz, de ne zavarj fészkelőt. Helyszínek az úton: <a href='https://www.google.com/maps/search/?api=1&query=Dyrh%C3%B3laey+Iceland' target='_blank' rel='noreferrer'>Dyrhólaey</a><span class='g-rate'>⭐4.7</span> (3. nap · déli part, százával fészkelnek — a legjobb pont), <a href='https://www.google.com/maps/search/?api=1&query=Ing%C3%B3lfsh%C3%B6f%C3%B0i+Iceland' target='_blank' rel='noreferrer'>Ingólfshöfði</a><span class='g-rate'>⭐4.8</span> (4. nap · Höfn előtt, traktoros túrával — puffinok és nagy halfarkas/skua), <a href='https://www.google.com/maps/search/?api=1&query=L%C3%B3ndrangar+Iceland' target='_blank' rel='noreferrer'>Lóndrangar</a><span class='g-rate'>⭐4.6</span> és <a href='https://www.google.com/maps/search/?api=1&query=Arnarstapi+Iceland' target='_blank' rel='noreferrer'>Arnarstapi–Hellnar</a><span class='g-rate'>⭐4.7</span> (8. nap · Snæfellsnes, tengeri sziklák).",
          "<strong>🛻 F-utak és highland — jövőre?</strong> a mostani tervhez 2WD elég, F-utak nem kellenek. F-roadhoz 4×4 törvény szerint kötelező, a fő kockázat a folyóátkelés (Landmannalaugar, Askja, Kjölur). Bővítéshez az <a href='https://epiciceland.net/list-f-roads-iceland/#F-road_Map' target='_blank' rel='noreferrer'>Epic Iceland F-road térképe</a> a kiindulás; indulás előtt mindig nézd az <a href='https://umferdin.is/en' target='_blank' rel='noreferrer'>umferdin.is</a> / <a href='https://vegasja.vegagerdin.is/eng/' target='_blank' rel='noreferrer'>vegasja</a> útállapotot."
        ]
      }
    ],
    links: [
      { label: "vedur.is", url: "https://en.vedur.is/weather/forecasts/areas/" },
      { label: "safetravel.is", url: "https://safetravel.is/" },
      { label: "umferdin.is", url: "https://umferdin.is/en" },
      { label: "vegasja.vegagerdin.is", url: "https://vegasja.vegagerdin.is/eng/" },
      { label: "Friðheimar", url: "https://www.fridheimar.is/en" },
      { label: "SCDW / GP guide", url: "https://epiciceland.net/car-rental-insurance-guide-iceland/" },
      { label: "Epic Iceland · F-road térkép", url: "https://epiciceland.net/list-f-roads-iceland/#F-road_Map" }
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
          status: "Foglalva",
          operator: "Icelandair",
          code: "FI306",
          route: "Reykjavík / Keflavík (KEF) → Stockholm / Arlanda (ARN)",
          departure: "2026.07.26 · 07:35",
          arrival: "2026.07.26 · 12:45",
          duration: "3:10",
          bookingRef: "ASDBGX",
          bookingCom: "40-962579774 · PIN: 5627",
          baggage: "Kis táska + kézipoggyász (20×40×55 cm, max. 10 kg) · Nincs feladott poggyász",
          links: [
            { label: "Icelandair", url: "https://www.icelandair.com/" },
            { label: "Icelandair check-in", url: "https://www.icelandair.com/travel-info/check-in/" }
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
          bookingRef: "AS4YE9",
          bookingCom: "40-962206664 · PIN: 5695",
          baggage: "Kis táska + kézipoggyász (20×40×55 cm, max. 10 kg) · Nincs feladott poggyász",
          links: [
            { label: "Icelandair", url: "https://www.icelandair.com/" },
            { label: "Swedavia parking", url: "https://www.swedavia.se/en/arlanda/parking/" },
            { label: "Icelandair check-in", url: "https://www.icelandair.com/travel-info/check-in/" }
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
          bookingRef: "AS4YE9",
          bookingCom: "40-962206664 · PIN: 5695",
          baggage: "Kis táska + kézipoggyász (20×40×55 cm, max. 10 kg) · Nincs feladott poggyász",
          links: [
            { label: "Icelandair", url: "https://www.icelandair.com/" },
            { label: "Icelandair check-in", url: "https://www.icelandair.com/travel-info/check-in/" }
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
      { id: "rey", tab: "izland2", label: "Reykjavík", note: "07.18–19", x: 62, y: 78, color: "#1f5a3e", major: true },
      { id: "snae", tab: "izland2", label: "Snæfellsnes", note: "07.25", x: 78, y: 62, color: "#1f5a3e" },
      { id: "myv", tab: "izland2", label: "Mývatn", note: "07.24", x: 122, y: 62, color: "#1f5a3e" },
      { id: "egl", tab: "izland2", label: "Egilsstaðir", note: "07.23", x: 171, y: 78, color: "#1f5a3e" },
      { id: "hof", tab: "izland2", label: "Höfn", note: "07.22", x: 156, y: 109, color: "#1f5a3e" },
      { id: "vik", tab: "izland2", label: "Vík", note: "07.21", x: 111, y: 92, color: "#1f5a3e" },
      { id: "sel", tab: "izland2", label: "Golden Circle", note: "07.20", x: 85, y: 88, color: "#1f5a3e" },
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
      { from: "rey", to: "sel", color: "#1f5a3e" },
      { from: "sel", to: "vik", color: "#1f5a3e" },
      { from: "vik", to: "hof", color: "#1f5a3e" },
      { from: "hof", to: "egl", color: "#1f5a3e" },
      { from: "egl", to: "myv", color: "#1f5a3e" },
      { from: "myv", to: "snae", color: "#1f5a3e" },
      { from: "snae", to: "rey", color: "#1f5a3e", dashed: true },
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
        title: "Golden Circle + déli átvezetés",
        summary: "A fordított kör nyitánya: Secret Lagoon, Friðheimar, Geysir, Gullfoss és Þingvellir, majd esti lehúzás Hella / Hvolsvöllur felé.",
        points: ["Secret Lagoon", "Friðheimar", "Gullfoss"],
        driveStats: { km: "~280 km", stops: 8, depart: "07:30", arrive: "~20:30", driveTime: "~4,5 óra", timelinePoints: [{time:"07:30", label:"Reykjavík"}, {time:"10:00", label:"Secret Lagoon"}, {time:"12:30", label:"Friðheimar"}, {time:"16:00", label:"Gullfoss"}] }
      },
      {
        date: "2026.07.21",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Déli part + Jökulsárlón kihúzás",
        summary: "Vízesések, Reynisfjara és puffinok után a nap a gleccserlagúnás délkeleti blokkal húz ki Höfn / Skaftafell felé.",
        points: ["Seljalandsfoss", "Reynisfjara", "Jökulsárlón"],
        driveStats: { km: "~380 km", stops: 8, depart: "07:00", arrive: "~21:00", driveTime: "~5 óra", timelinePoints: [{time:"07:00", label:"Hella"}, {time:"08:00", label:"Seljalandsfoss"}, {time:"12:30", label:"Vík"}, {time:"17:30", label:"Jökulsárlón"}] }
      },
      {
        date: "2026.07.22",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Höfn / Vestrahorn → Eastfjords → Egilsstaðir",
        summary: "Fotós reggel Vestrahornnal, majd fjordos átvezetés Seyðisfjörður / Egilsstaðir irányába.",
        points: ["Vestrahorn", "Djúpivogur", "Egilsstaðir"],
        driveStats: { km: "~320 km", stops: 6, depart: "08:00", arrive: "~20:00", driveTime: "~5 óra", timelinePoints: [{time:"08:00", label:"Höfn"}, {time:"09:30", label:"Vestrahorn"}, {time:"13:00", label:"Djúpivogur"}, {time:"20:00", label:"Egilsstaðir"}] }
      },
      {
        date: "2026.07.23",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Stuðlagil → Dettifoss → Mývatn",
        summary: "A keleti bazaltkanyon után jön a nagy északi vízesés és a geotermikus Mývatn-régió.",
        points: ["Stuðlagil", "Dettifoss", "Hverir"],
        driveStats: { km: "~300 km", stops: 6, depart: "08:00", arrive: "~20:30", driveTime: "~5 óra", timelinePoints: [{time:"08:00", label:"Egilsstaðir"}, {time:"10:00", label:"Stuðlagil"}, {time:"14:00", label:"Dettifoss"}, {time:"19:00", label:"Mývatn"}] }
      },
      {
        date: "2026.07.24",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Mývatn / Húsavík / Akureyri → nyugat felé",
        summary: "Választható bálnales vagy hosszabb Mývatn-blokk, majd Akureyri és esti lehúzás Varmahlíð / Hvammstangi felé.",
        points: ["Húsavík", "Goðafoss", "Akureyri"],
        driveStats: { km: "~430 km", stops: 7, depart: "08:00", arrive: "~21:30", driveTime: "~6 óra", timelinePoints: [{time:"08:00", label:"Mývatn"}, {time:"10:30", label:"Húsavík / Goðafoss"}, {time:"14:30", label:"Akureyri"}, {time:"21:30", label:"Varmahlíð"}] }
      },
      {
        date: "2026.07.25",
        phase: "Közös Izland",
        accent: "accent-iceland",
        title: "Snæfellsnes + visszazárás Reykjavík / KEF felé",
        summary: "A nyugati nagy finálé: fekete templom, bazaltpart, puffinok és Kirkjufell, majd esti visszazárás a reptérkörnyéki alváshoz.",
        points: ["Búðakirkja", "Arnarstapi", "Kirkjufell"],
        driveStats: { km: "~500 km", stops: 8, depart: "07:00", arrive: "~21:30", driveTime: "~7,5 óra", timelinePoints: [{time:"07:00", label:"Varmahlíð"}, {time:"11:30", label:"Borgarnes"}, {time:"14:00", label:"Arnarstapi"}, {time:"18:30", label:"Kirkjufell"}] }
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
        text: "A közös főélmény most már fordított irányú Ring Road-ív: Golden Circle és déli part után kelet, észak, végül nyugati Snæfellsnes-zárás.",
        cta: "Ugrás az Izland részhez",
        tab: "izland2",
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
      text: "Tibi 9 napos autós útja Budapestről Baltikumon át Stockholmig (júl. 10–18.): Varsót teljesen kihagyva, Suwałki tranzitállomáson át belép Litvániába. Kaunas rövid kávészünettel (Laisvės aleja sétálóutca), majd két éjszaka Vilniusban — a barokk főváros, ahol a Cathedral Square, a Gediminas-torony és az Užupis bohém negyed (saját alkotmánnyal!) adja a ritmust, Trakai Island Castle a képeslapot. Lettország a Hill of Crosses zarándokhelyétől Riga Art Nouveau-negyedéig és Gauja-völgyi kastélyrombokig tart; Észtországba Turaida Castle-lal és az évszázados utazói feliratokkal teli Gutmanis-barlanggal érünk be — Tallinn Toompea-panorámájával és Telliskivi Creative City-vel zár. A finn zárónapon Tallink Shuttleval Helsinki, majd Turku Castle és Viking Line overnight komp visz Stockholmba. Júl. 18. reggel Värtahamnenben kötünk ki — az autó Arlandára kerül, 17:10-kor FI309 repít Keflavíkba.",
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
      text: "Az expedition csúcspontja most fordított irányban fut végig a Ring Roadon: 8 nap (~1900 km) Reykjavíkból először dél felé fordulva. Henni az Erasmus+ kurzus végével csatlakozik, Tibi FI309-cel érkezik Keflavíkba júl. 18-án este. A közös ráhangolódás még Reykjavíkban telik: Hallgrímskirkja, Harpa és Sky Lagoon. Másnap a Golden Circle nyitja a tényleges kört: Þingvellir UNESCO-tektonikai hasadékvölgy, Geysir / Strokkur és Gullfoss, majd lecsúszás a déli partra. Innen jönnek a vízesések, Reynisfjara fekete bazaltos strandja és a Jökulsárlón–Diamond Beach jégvilága, aztán Höfn és az Eastfjords magányos fjordútjai. A középső blokkban Stuðlagil, Dettifoss és a Mývatn-régió veszi át a főszerepet, majd Akureyri és Goðafoss után a nyugati finálé következik: Snæfellsnes, Búðakirkja, Arnarstapi és Kirkjufell. A kör végén már újra Reykjavík / Keflavík közelében zártok, hogy a FI306 hajnala nyugodt legyen.",
      points: [
        "Reykjavík: <a href='https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik' target='_blank' rel='noreferrer'>Hallgrímskirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik' target='_blank' rel='noreferrer'>Harpa</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Iceland' target='_blank' rel='noreferrer'>Sky Lagoon</a> (★4.4)",
        "Golden Circle + dél: <a href='https://www.google.com/maps/search/?api=1&query=Thingvellir+National+Park+Iceland' target='_blank' rel='noreferrer'>Þingvellir</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Geysir+Iceland' target='_blank' rel='noreferrer'>Geysir</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Gullfoss+waterfall+Iceland' target='_blank' rel='noreferrer'>Gullfoss</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland' target='_blank' rel='noreferrer'>Seljalandsfoss</a> (★4.7)",
        "Délkelet / kelet: <a href='https://www.google.com/maps/search/?api=1&query=Reynisfjara+black+sand+beach' target='_blank' rel='noreferrer'>Reynisfjara</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Jokulsarlon+glacier+lagoon+Iceland' target='_blank' rel='noreferrer'>Jökulsárlón</a> (★4.9) · <a href='https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Iceland' target='_blank' rel='noreferrer'>Diamond Beach</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=Egilsstadir+Iceland' target='_blank' rel='noreferrer'>Egilsstaðir</a> (★4.3)",
        "Észak: <a href='https://www.google.com/maps/search/?api=1&query=Studlagil+Canyon+Iceland' target='_blank' rel='noreferrer'>Stuðlagil</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Dettifoss+Iceland' target='_blank' rel='noreferrer'>Dettifoss</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=Lake+Myvatn+Iceland' target='_blank' rel='noreferrer'>Mývatn-tóvidék</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Akureyri+Iceland' target='_blank' rel='noreferrer'>Akureyri</a> (★4.6)",
        "Nyugati finálé: <a href='https://www.google.com/maps/search/?api=1&query=Budakirkja+Iceland' target='_blank' rel='noreferrer'>Búðakirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Arnarstapi+Iceland' target='_blank' rel='noreferrer'>Arnarstapi</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Kirkjufell+Iceland' target='_blank' rel='noreferrer'>Kirkjufell</a> (★4.7)"
      ],
      cta: { label: "Részletes Izland oldal", tab: "izland2" }
    },
    sharedReturn: {
      title: "Stockholm → Koppenhága → Hamburg → Frankfurt → Budapest",
      accent: "accent-return",
      status: "júl. 26 – aug. 6. · közös szakasz",
      statusClass: "status-cool",
      text: "A közös hazaút 12 napja (júl. 26 – aug. 6.) FI306-tal kezdődik: Keflavíkból Stockholm Arlandára (07:35 → 12:45), ahol az autó parkolóban vár, de az első stockholmi napokon nem kell használni. Három stockholmi nap fér bele: Gamla Stan és Monteliusvägen panoráma, a Vasa Museum + Djurgården + Fotografiska kulturális blokkja, majd egy teljes archipelago nap Vaxholm és Grinda kompjaival. Július 29-én Malmö csak fotóstop az Øresund előtt, utána három koppenhágai nap jön: Nyhavn, Rosenborg, Tivoli, Christiansborg, Christiania, majd a Louisiana Museum of Modern Art és az esti továbbindulás Hamburg felé. Hamburg háromnapos blokkot kap: egy teljes Lübeck + Schwerin körutat, egy önálló hamburgi városnapot Miniatur Wunderlanddal, Speicherstadttal és Elbphilharmoniéval, majd innen jön az átmeneti etap Frankfurtba. Frankfurt is külön városnapot kap Römerberggel, Kaiserdommal, Städel Museummal és Sachsenhausen Apfelwein-kultúrájával, mielőtt a záróetap augusztus 6-án ~950 km-rel hazagördül Budapestre.",
      points: [
        "🇸🇪 Stockholm (júl. 26–28.): <a href='https://www.google.com/maps/search/?api=1&query=Vasa+Museum+Stockholm' target='_blank' rel='noreferrer'>Vasa Museum</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=Fotografiska+Stockholm' target='_blank' rel='noreferrer'>Fotografiska</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Gamla+Stan+Stockholm' target='_blank' rel='noreferrer'>Gamla Stan</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Vaxholm+Fortress+Stockholm' target='_blank' rel='noreferrer'>Vaxholm</a> (★4.5)",
        "🇸🇪→🇩🇰 Malmö + Koppenhága (júl. 29. – aug. 1.): <a href='https://www.google.com/maps/search/?api=1&query=Turning+Torso+Malmo' target='_blank' rel='noreferrer'>Turning Torso</a> (★4.3) · <a href='https://www.google.com/maps/search/?api=1&query=Oresund+Bridge' target='_blank' rel='noreferrer'>Øresund Bridge</a> (★4.5) · <a href='https://www.google.com/maps/search/?api=1&query=Nyhavn+Copenhagen' target='_blank' rel='noreferrer'>Nyhavn</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Louisiana+Museum+of+Modern+Art' target='_blank' rel='noreferrer'>Louisiana Museum</a> (★4.7)",
        "🇩🇪 Hamburg blokk (aug. 1–3.): <a href='https://www.google.com/maps/search/?api=1&query=Holstentor+Lubeck' target='_blank' rel='noreferrer'>Holstentor Lübeck</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Schweriner+Schloss' target='_blank' rel='noreferrer'>Schwerin Castle</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Miniatur+Wunderland+Hamburg' target='_blank' rel='noreferrer'>Miniatur Wunderland</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=Elbphilharmonie+Hamburg' target='_blank' rel='noreferrer'>Elbphilharmonie Plaza</a> (★4.7)",
        "🇩🇪 Frankfurt + hazaút (aug. 4–6.): <a href='https://www.google.com/maps/search/?api=1&query=Roemerberg+Frankfurt' target='_blank' rel='noreferrer'>Römerberg</a> (★4.5) · <a href='https://www.google.com/maps/search/?api=1&query=Stadel+Museum+Frankfurt' target='_blank' rel='noreferrer'>Städel Museum</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Sachsenhausen+Frankfurt+Apfelwein' target='_blank' rel='noreferrer'>Sachsenhausen Apfelwein negyed</a> (★4.3) · aug. 6. → Budapest 🏁"
      ],
      cta: { label: "Részletes hazaút oldal", tab: "hazaut" }
    },
    henniErasmus: {
      title: "Erasmus+ · Izland · Inspiring Young Language Learners",
      accent: "accent-iceland",
      status: "2026. júl. 11–18. · Henni önálló szakasz",
      statusClass: "status-green",
      text: "Henni 2026. július 11-én repül Reykjavíkba (Wizz Air W62427, BUD → KEF, 15:40 → 18:20) egy Erasmus+ EU-támogatású pedagógiai kurzusra. A kurzus előtt két ráhangolódó napra van lehetőség Reykjavíkban — az izlandi fény, a gőzölgő tájak, az éjféli napsütés és az egészen másfajta városi ritmus fokozatos felfedezésére. Reykjavík nem egy rohanós nagyváros: Hallgrímskirkja toronykilátója, a Harpa koncertház tükröző üveghomlokzata és az óváros körüli kávézók adnak bőven csendes programot az első napokra. Július 13-án indul az 'Inspiring Young Language Learners' program, amelyet a Smart Teachers Play More szervez — az EU Erasmus+ által elismert, pedagógusoknak szóló módszertani kurzus. A FAQ alapján a reykjavíki kurzusközpont a Laugardalur Valley (Hot Spring Valley) környékén van, vagyis nem a klasszikus óvárosi magban, hanem a sport- és rekreációs zóna felé. Az oldal saját hotelszállás-ajánlata az Oddsson Hotel: kb. 20 perc gyalog a kurzusközponthoz és 30 perc a belvároshoz, reggelivel, plusz közvetlen foglalásnál STPM2026 kedvezménykóddal. Hat napon át CLIL (Content and Language Integrated Learning) módszertan, STEAM-alapú kreatív feladatok, storytelling és mindfulness technikák, valós izlandi általános iskolai osztálylátogatások és csoportos workshopok adják a tartalmat. A kurzus olyan pedagógusoknak szól, akik fiatal nyelvtanulókat (óvoda, általános iskola, nyelvórák) tanítanak, és európai módszertani megközelítéseket visznek vissza az osztályterembe. Júl. 18-án ér véget a program — és este megérkezik Tibi a FI309-cel, innentől közösen indul a Ring Road körút.",
      points: [
        "✈️ Repülés: Wizz Air W62427 · BUD → KEF · 2026. július 11. · 15:40 → 18:20",
        "🏙 Ráhangolódás Reykjavíkban (júl. 11–12.): <a href='https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik' target='_blank' rel='noreferrer'>Hallgrímskirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik' target='_blank' rel='noreferrer'>Harpa</a> (★4.6) · csendes séták, kávézók, éjféli nap",
        "🎓 Erasmus+ kurzus: 2026. július 13–18. · Smart Teachers Play More szervezésében",
        "📍 Oktatási helyszín: Reykjavík · <a href='https://www.google.com/maps/search/?api=1&query=Laugardalur+Valley+Reykjavik' target='_blank' rel='noreferrer'>Laugardalur Valley</a> környéke (Hot Spring Valley) — a szervező FAQ-ja szerint itt és itt körül zajlanak a kurzusnapok",
        "🏨 Oldal által ajánlott hotel: <a href='https://www.smartteachersplaymore.com/hotel-oddsson-2026-offer' target='_blank' rel='noreferrer'>Oddsson Hotel</a> · kb. 20 perc gyalog a kurzusközpontokhoz, 30 perc a belvárosba · reggeli benne · kedvezménykód: <strong>STPM2026</strong>",
        "📚 Tartalom: CLIL módszertan · STEAM-feladatok · storytelling · mindfulness · izlandi iskolalátogatások",
        "👥 Célcsoport: óvoda, általános iskola, nyelvtanárok, CLIL és SNI pedagógusok",
        "📋 Course ID: 4497715 · Részvételi díj: €630/fő · Dokumentáció: Europass Mobility Document, Learning Agreement, Evaluation Form",
        "<a href='https://www.smartteachersplaymore.com/courses-iceland/inspiring-young-language-learners' target='_blank' rel='noreferrer'>→ Kurzus részletei (smartteachersplaymore.com)</a> · <a href='https://www.smartteachersplaymore.com/faq-iceland' target='_blank' rel='noreferrer'>FAQ Iceland</a>"
      ],
      cta: { label: "Izlandi Ring Road — részletes oldal", tab: "izland2" }
    },
    henniIceland: {
      title: "Közös izlandi Ring Road körút",
      accent: "accent-iceland",
      status: "júl. 18–26. · közös szakasz",
      statusClass: "status-green",
      text: "A kurzus vége után az igazi izlandi kaland következik — immár Tibivel közösen, csak most fordított irányban. Tibi júl. 18-án érkezik Keflavíkba (Icelandair FI309, Stockholm → KEF, 18:25), és innentől 8 napon át (~1900 km) teljesítik együtt a Ring Roadot. A ráhangolódó Reykjavík + Sky Lagoon nap után először a Golden Circle és a déli part jön: Þingvellir, Geysir, Gullfoss, Seljalandsfoss, Skógafoss, Reynisfjara és Dyrhólaey puffinok. Utána Jökulsárlón, Diamond Beach, Höfn és a keleti fjordok viszik tovább az ívet, majd Stuðlagil, Dettifoss, Mývatn, Húsavík / Akureyri után a teljes út Snæfellsnessel zár — Búðakirkja, Arnarstapi és Kirkjufell adja a nyugati finálét közvetlenül a KEF előtti estén.",
      points: [
        "Találkozó: júl. 18. este, Keflavík — FI309 érkezés után",
        "Reykjavík: <a href='https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik' target='_blank' rel='noreferrer'>Hallgrímskirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Iceland' target='_blank' rel='noreferrer'>Sky Lagoon</a> (★4.4) · <a href='https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik' target='_blank' rel='noreferrer'>Harpa</a> (★4.6)",
        "Golden Circle + déli part: <a href='https://www.google.com/maps/search/?api=1&query=Thingvellir+National+Park+Iceland' target='_blank' rel='noreferrer'>Þingvellir</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Gullfoss+waterfall+Iceland' target='_blank' rel='noreferrer'>Gullfoss</a> (★4.8) · <a href='https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland' target='_blank' rel='noreferrer'>Seljalandsfoss</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Reynisfjara+black+sand+beach' target='_blank' rel='noreferrer'>Reynisfjara</a> (★4.7)",
        "Kelet + észak: <a href='https://www.google.com/maps/search/?api=1&query=Jokulsarlon+glacier+lagoon+Iceland' target='_blank' rel='noreferrer'>Jökulsárlón</a> (★4.9) · <a href='https://www.google.com/maps/search/?api=1&query=Studlagil+Canyon+Iceland' target='_blank' rel='noreferrer'>Stuðlagil</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Godafoss+waterfall+Iceland' target='_blank' rel='noreferrer'>Goðafoss</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Lake+Myvatn+Iceland' target='_blank' rel='noreferrer'>Mývatn</a> (★4.7)",
        "Nyugati zárás: <a href='https://www.google.com/maps/search/?api=1&query=Budakirkja+Iceland' target='_blank' rel='noreferrer'>Búðakirkja</a> (★4.7) · <a href='https://www.google.com/maps/search/?api=1&query=Arnarstapi+Iceland' target='_blank' rel='noreferrer'>Arnarstapi</a> (★4.6) · <a href='https://www.google.com/maps/search/?api=1&query=Kirkjufell+Iceland' target='_blank' rel='noreferrer'>Kirkjufell</a> (★4.7) · júl. 26. FI306 → Stockholm"
      ],
      cta: { label: "Izland részletes oldal", tab: "izland2" }
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
      mapNote: "Budapest → Vilnius → Riga → Tallinn → Helsinki/Turku → Stockholm. A markerek napszín szerint, az ikon a látnivaló jellegét mutatja (🏰 vár, ⛪ templom, 🏛️ óváros, 🛍️ piac, 🌳 természet…), a 🏨 az éjszakai szállás. A tengeri átkelések (Tallinn–Helsinki, Turku–Stockholm) szaggatott komp-vonalak.",
      mapStops: [
        { name: "Budapest", kind: "city", lat: 47.4979, lng: 19.0402, day: 1, date: "2026-07-10", detail: "Útindulás 07:00 — cél Suwałki, ~900 km" },
        { name: "Suwałki", kind: "stay", lat: 54.099, lng: 22.9305, day: 1, date: "2026-07-10", detail: "~900 km-es tranzit etap, ~10h vezetés. Belépés az EU Baltikum-folyosón." },
        { name: "Kaunas", kind: "city", lat: 54.8985, lng: 23.9036, day: 2, date: "2026-07-11", detail: "Laisvės aleja (Baltikum leghosszabb sétálóutcája), Kaunas Castle, Soboras-bazilika. Kb. 2 óra ebéddel." },
        { name: "Vilnius", kind: "stay", lat: 54.6872, lng: 25.2797, day: 2, date: "2026-07-11", detail: "Litvánia főváros: barokk óváros, Gediminas-torony, Užupis bohém negyed. 2 éjszaka." },
        { name: "Gediminas-torony", kind: "viewpoint", lat: 54.686, lng: 25.2898, day: 3, date: "2026-07-12", detail: "Háromszintes vártorony a városra néző dombtetőn, panoráma kilátóval Vilnius felett. Belépő ~€5." },
        { name: "Trakai", kind: "castle", lat: 54.6387, lng: 24.9342, day: 3, date: "2026-07-12", detail: "Középkori szigetkastély a tóban — Litvánia egyik legikonikusabb látványossága.", reviewNote: "A tó közepén álló téglavár (Trakai-szigetvár) a fő látvány; hajóval/gyalog közelíthető. Próbáld a kibinai-t (litván húsos batyu)." },
        { name: "Užupis negyed", kind: "oldtown", lat: 54.6822, lng: 25.2928, day: 3, date: "2026-07-12", detail: "Saját alkotmányával rendelkező bohém negyed. Murális graffitik, kávézók, galériák, Vilnia folyóparti sétány." },
        { name: "Keresztek Hegye", kind: "church", lat: 56.0158, lng: 23.4168, day: 4, date: "2026-07-13", detail: "Több százezer kereszttel borított zarándokdomb Šiauliai mellett — Litvánia egyik legmegrendítőbb helye.", reviewNote: "Ingyenes, kis parkoló a 12-es út mellett, 5 perc séta. Útba esik Vilnius és Riga között." },
        { name: "Rundāle-palota", kind: "castle", lat: 56.4144, lng: 24.0258, day: 4, date: "2026-07-13", detail: "Lettország barokk »Versailles«-a — Rastrelli tervezte palota pompás termekkel és francia kerttel.", reviewNote: "~40 perc kitérő Bauska felé, Hill of Crosses és Riga között. Belépő ~16 €; a kert önmagában is megér egy sétát." },
        { name: "Riga", kind: "stay", lat: 56.9496, lng: 24.1052, day: 4, date: "2026-07-13", detail: "Lettország főváros: UNESCO Old Town, Art Nouveau negyed (750+ épület), Rigai Centrális Piac. 2 éjszaka." },
        { name: "Art Nouveau negyed", kind: "oldtown", lat: 56.9616, lng: 24.1219, day: 5, date: "2026-07-14", detail: "A rigai Art Nouveau-negyed szíve: homlokzatok ~1901–1906. Eisenstein tervei szerint. Az utcáról ingyenesen fotózható." },
        { name: "Fekete Fejek Háza", kind: "oldtown", lat: 56.9479, lng: 24.1067, day: 5, date: "2026-07-14", detail: "Riga legfotogénebb épülete: flamboyant gótikus-reneszánsz kereskedő-céhház. 1999-re teljesen újjáépítve.", reviewNote: "A rigai óváros ikonikus, gazdagon díszített céhháza a Rátéren — kívülről a fő fotó, belül kis múzeum." },
        { name: "Riga Centrális Piac", kind: "market", lat: 56.9416, lng: 24.1137, day: 5, date: "2026-07-14", detail: "Öt hatalmas zeppelin-hangárban működő fedett piac — Európa egyik legnagyobb fedett piaca (1930-as évek). Hal, húscsarnok, helyi ételek." },
        { name: "Riga — óváros", kind: "oldtown", lat: 56.946, lng: 24.1059, day: 5, date: "2026-07-14", detail: "Dóm tér, Fekete Fejek Háza, Art Nouveau épületek (Alberta és Elizabetes utca), Centrális Piac." },
        { name: "Gūtmanis-barlang", kind: "nature", lat: 57.1769, lng: 24.8478, day: 6, date: "2026-07-15", detail: "Lettország legnagyobb barlangja a Gauja sziklafalaiban. A homokkő falain 1668-tól dokumentált évszázados feliratok. Ingyenes." },
        { name: "Sigulda", kind: "city", lat: 57.1541, lng: 24.8573, day: 6, date: "2026-07-15", detail: "Turaida várkastély, Sigulda-vár romjai, Gauja-kanyon kilátó. A 'Lettország Svájca'." },
        { name: "Tallinn", kind: "stay", lat: 59.437, lng: 24.7536, day: 6, date: "2026-07-15", detail: "Észtország főváros: a legjobban megőrzött középkori városmag a Baltikumban. 2 éjszaka." },
        { name: "Turaida-kastély", kind: "castle", lat: 57.2, lng: 24.8444, day: 6, date: "2026-07-15", detail: "Vörös tégla középkori vár a Gauja-völgy kiemelkedő pontján, fantasztikus kilátással a folyóvölgyre. Belépő ~€4.", reviewNote: "Vörös téglás középkori vár a Gauja-völgy felett, toronnyal és parkkal — a Sigulda–Turaida–Gūtmanis hármas együtt egy fél nap." },
        { name: "Cēsis", kind: "castle", lat: 57.3119, lng: 25.2747, day: 6, date: "2026-07-15", detail: "Középkori városka a Gauja Nemzeti Parkban: lovagvár-rom és hangulatos óváros.", reviewNote: "Sigulda mellé szép kiegészítés, ha van idő — a várromban lámpással vezetett túra is van." },
        { name: "Pärnu", kind: "city", lat: 58.3859, lng: 24.4971, day: 6, date: "2026-07-15", detail: "Észtország nyári fővárosa: homokos strand, fapados villák, sétány a Via Baltica mentén Tallinn felé.", reviewNote: "Jó ebéd- és lábkinyújtó-megálló Riga és Tallinn között (kb. félúton). Nyáron élénk a sétány." },
        { name: "Alexander Nevsky katedrális", kind: "church", lat: 59.4377, lng: 24.7393, day: 7, date: "2026-07-16", detail: "Orosz ortodox katedrális a Toompea dombon (1900). Jellegzetes hagymakupolás homlokzat, a Toompea egyik főlátványossága." },
        { name: "Lennusadam Tengerészeti Múzeum", kind: "museum", lat: 59.4551, lng: 24.7645, day: 7, date: "2026-07-16", detail: "Három art deco betonkupola 1916-ból, ahol a világ egyik legrégebbi tengeralattjárója is megtekinthető. A kikötő közelében, ~2 km-re az óvárostól." },
        { name: "Tallinn — Vanalinn", kind: "oldtown", lat: 59.437, lng: 24.745, day: 7, date: "2026-07-16", detail: "Raekoja plats, Alexander Nevsky katedrális, Katariina käik sikátor, Pikk tänav. Komp prep este." },
        { name: "Telliskivi Creative City", kind: "oldtown", lat: 59.4397, lng: 24.7243, day: 7, date: "2026-07-16", detail: "A vasúti műhelyek helyén kialakult alternatív negyed: design üzletek, street art, kézműves sörmalmok (Põhjala), kávézók." },
        { name: "Toompea — Kohtuotsa kilátó", kind: "viewpoint", lat: 59.4374, lng: 24.7397, day: 7, date: "2026-07-16", detail: "Tallinn fellegvára és legjobb kilátópontja. Kohtuotsa platoo (templomtornyok + Vanalinn piros tetők), Patkuli terasz (kikötő + tenger felé)." },
        { name: "Kadriorg-palota és park", kind: "castle", lat: 59.4382, lng: 24.7906, day: 7, date: "2026-07-16", detail: "Nagy Péter cár barokk palotája és parkja Tallinnban, a KUMU művészeti múzeummal.", reviewNote: "Nyugodt délutáni séta a Vanalinn után; a park ingyenes, a palota/KUMU belépős." },
        { name: "Aura folyópart", kind: "nature", lat: 60.4481, lng: 22.2745, day: 8, date: "2026-07-17", detail: "Turku ikonikus folyópartja: bárcsónakok, teraszos éttermek, hajómuseum. Kellemesen besétálható a katedrális és a kastély között." },
        { name: "Helsinki", kind: "city", lat: 60.1699, lng: 24.9384, day: 8, date: "2026-07-17", detail: "Tallink Megastar: Tallinn D-Terminal → Helsinki West Harbour T2 (2 óra). Majd rövid helsinki városi blokk." },
        { name: "Helsinki Market Square", kind: "market", lat: 60.1671, lng: 24.9521, day: 8, date: "2026-07-17", detail: "A városi komp-blokk két főpontja: piac, kikötő, fehér neoklasszikus katedrális a Senaatintori felett. 30 perc alatt megvan." },
        { name: "Porvoo", kind: "oldtown", lat: 60.3924, lng: 25.665, day: 8, date: "2026-07-17", detail: "Finnország második legidősebb városa. Vanha Porvoo: piros, okker és sárga festett faházak a Porvoonjoki folyóparton. Kb. 1,5 óra.", reviewNote: "Festői piros fapados óváros a folyóparton — Helsinkitől ~50 perc. Tökéletes délelőtti séta + kávé." },
        { name: "Temppeliaukio (Sziklatemplom)", kind: "church", lat: 60.1668, lng: 24.9252, day: 8, date: "2026-07-17", detail: "1969-ben gránitsziklába vájt lutheránus templom, rézkupola tetővel. Természetes fény, csodálatos akusztika. Helsinki különleges építészeti remeke.", reviewNote: "Sziklába vájt templom Helsinkiben — belépő ~8 €, néha sor van; reggel kevésbé zsúfolt." },
        { name: "Turku", kind: "city", lat: 60.4518, lng: 22.2666, day: 8, date: "2026-07-17", detail: "Helsinki → Turku ~1,5h autóval. Turku Castle megtekintés, Aura folyópart, majd Viking Line check-in 20:00." },
        { name: "Turku Castle", kind: "castle", lat: 60.4381, lng: 22.2253, day: 8, date: "2026-07-17", detail: "Finnország egyik legidősebb épülete (1280-as évek!), a kikötő tövénél. Múzeumi tartalom, középkori részek. Belépő ~€10, nyitva 10:00–18:00." },
        { name: "Turku Cathedral", kind: "church", lat: 60.4512, lng: 22.2673, day: 8, date: "2026-07-17", detail: "Finnország nemzeti katedrálisa (13. sz.), a régi óváros szívében. A Turku városi blokk fő pontja a várral együtt." },
        { name: "Stockholm / Arlanda", kind: "flight", lat: 59.6498, lng: 17.9238, day: 9, date: "2026-07-18", detail: "Autó Arlanda P3 hosszú távú parkolóba. FI309 Stockholm → Keflavík, indulás 17:10, érkezés 18:55 (helyi)." },
        { name: "Stockholm — Värtahamnen", kind: "ferry", lat: 59.3665, lng: 18.1156, day: 9, date: "2026-07-18", detail: "Viking Line: Turku → Mariehamn (Åland) → Stockholm Värtahamnen. Érkezés 06:30." }
      ],
      introCollapsible: true,
      intro: [
        "A baltikumi szakasz Tibi 9 napos autós felfedezőútja Budapestről Litvánián, Lettországon és Észtországon át Stockholmig — három kis észak-európai ország jellegzetes városait, középkori erődjeit és természeti tájait fűzi egyetlen összefüggő útvonallá.",
        "Vilnius a barokk főváros az Užupis bohém negyedével és a tóba nyúló Trakai-kastéllyal; Riga az Art Nouveau-homlokzatok, a Riga Central Market zeppelin-hangárjai és a Gauja-völgy természetes kombinációja; Tallinn Toompea-dombjáról mutatja a legszebben megőrzött északi középkori óvárost.",
        "A finn zárónapot (júl. 17.) Helsinki-átkelés, Turku Castle-látogatás és Viking Line overnight komp tölti ki Stockholmba — ez a 10,5 órás tengeri átmenet a baltikumi és izlandi szakasz szimbolikus kapuja.",
        "Júl. 18-án a Viking Line Värtahamnenben köt ki: az autó Arlanda hosszú távú parkolóba kerül, Tibi FI309-cel repül Keflavíkba 17:10-kor — a baltikumi felvezető ezzel adja át a stafétát a közös izlandi körútnak."
      ],
      context: [
        {
          title: "🗺 Baltikum — történelem, geológia, jelenkori helyzet",
          accent: "baltic",
          open: false,
          cards: [
            {
              title: "Földrajz és méret",
              paragraphs: [
                "A három balti állam — Litvánia (65 300 km², ~2,8 millió fő), Lettország (64 589 km², ~1,8 millió fő) és Észtország (45 228 km², ~1,4 millió fő) — összesen alig nagyobb Magyarországnál, mégis teljesen eltérő karaktert képvisel mindhárom. Litvánia a legdélibb és legnépesebb, Észtország a digitálisan legfejlettebb, Lettország a legvárosiasabb hangulatú fővárosával.",
                "A Balti-tenger partján alacsony fekvésű síkságok, mocsaras tőzeglápok és homokos parti dűnék uralják a tájat. A Kurai-spit (Curonian Spit) UNESCO-helyszín — egy 98 km hosszú homokdűne-félsziget Litvánia–Oroszország határán, ahol egyes dűnék a 60 métert is elérik."
              ]
            },
            {
              title: "Geológia — a jégkorszak formálta táj",
              paragraphs: [
                "A Baltikum tájképét az utolsó jégkorszak (kb. 12 000 évvel ezelőtt visszahúzódó jégtakaró) formálta: lapos morénasíkságok, glaciális tavak, homokos partszakaszok. A régió legmagasabb pontja az észt Suur Munamägi, csupán 318 méter — ehhez képest Magyarország Kékese óriás.",
                "A Borostyánpart különlegesség: Lettország és Litvánia tengerpartján 40–50 millió éves fenyőgyanta-maradványok (borostyán) mosódnak partra a Balti-tenger által. Ez az ókori Borostyánút — a Mediterráneumtól a Balti-tengerig tartó kereskedelmi útvonal — alapja is volt."
              ]
            },
            {
              title: "Történelem — a Keresztesektől a szovjet foglalásig",
              paragraphs: [
                "A balti törzseket (lívek, latok, kurok, poroszok, litvánok) a 13. századi német Kardtestvérek Rendje és a Teutón Lovagrend hódította meg, megalapítva a Livóniai Konfederációt. Litvánia kivétel: a Litván Nagyfejedelemség a 14–16. században Európa egyik legnagyobb állama volt, a Fekete-tengertől a Balti-tengerig nyúlva.",
                "A 17–18. századi svéd, majd orosz dominancia után mindhárom ország 1918-ban függetlenné vált — csak az 1940-es szovjet megszállás (a Molotov–Ribbentrop-paktum titkos protokollja alapján) vetett ennek véget. 1991-ben a Szovjetunió felbomlásával az elsők között nyerték vissza szabadságukat — Litvánia 1990. március 11-én elsőként kiáltotta ki az újrafüggetlenséget."
              ]
            },
            {
              title: "Jelenkori helyzet — az EU és NATO keleti flankja",
              paragraphs: [
                "2004-ben mindhárom ország egyszerre csatlakozott az EU-hoz és a NATO-hoz — az egyik legsimább integrációs folyamat Kelet-Közép-Európában. Észtország globális digitális mintaállam lett: e-rezidencia, e-szavazás, teljes online közigazgatás. Tallinn startupkultúrája is kiemelkedő (Skype, TransferWise/Wise innen indult).",
                "A 2022-es orosz–ukrán háború élesítette a biztonságpolitikai helyzetet: mindhárom ország érintkezik Oroszországgal (Észtország közvetlen orosz határral bír, Lettország és Litvánia a Kalinyingrádi exklávéval is határos). A NATO megerősített jelenléte (eForward Presence battlegroups) ellenére a városok teljesen béke- és turistabarát — a helyzetnek semmi hatása a napi utazási élményre."
              ]
            }
          ],
          links: [
            { label: "Wikipedia — Baltikum", url: "https://hu.wikipedia.org/wiki/Baltikum" },
            { label: "UNESCO Curonian Spit", url: "https://whc.unesco.org/en/list/994/" },
            { label: "Estonia e-residency", url: "https://e-resident.gov.ee/" },
            { label: "NATO eFP Baltics", url: "https://www.nato.int/cps/en/natohq/topics_136388.htm" }
          ]
        },
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
      extraResources: [
        {
          title: "📖 Útleírások — Baltikum roadtrip és komp-logisztika",
          accent: "baltic",
          open: false,
          text: "Autós balti körökhöz, fővároslogikához, Gauja / Lahemaa természetblokkokhoz és a Tallinn–Stockholm átkeléshez jól használható háttéranyagok. Ezek közül az első ötöt érdemes kiemelt referenciának tekinteni, mert együtt lefedik az útvonalat, az autós tempót, a természeti kitérőket és a tengeri átmenetet is.",
          subBoxes: [
            {
              title: "⭐ Kiemelt top 5 forrás",
              accent: "baltic",
              open: false,
              items: [
                "🚗 <strong><a href='https://www.sportytravellers.com/europe/the-ultimate-baltic-road-trip-itinerary/' target='_blank' rel='noreferrer'>Sporty Travellers — The Ultimate Baltic Road Trip Itinerary</a></strong> — az egyik legjobb autós Baltikum-alap: Észtország, Lettország, Litvánia, útvonal-logika, megállók és vezetési ritmus.",
                "🧭 <strong><a href='https://www.bruisedpassports.com/baltics/baltic-road-trip-itinerary-latvia-estonia-lithuania' target='_blank' rel='noreferrer'>Bruised Passports — Baltic Road Trip Itinerary</a></strong> — jó gyakorlati roadtrip leírás Jūrmala, Kemeri, Hill of Crosses, Tallinn és Lahemaa szállal; nem csak a fővárosokat sorolja.",
                "🌍 <strong><a href='https://johnnyafrica.com/perfect-baltics-travel-itinerary/' target='_blank' rel='noreferrer'>Johnny Africa — The Perfect Baltics Travel Itinerary</a></strong> — 8–10 napos Baltikum-logikához jó, városfókuszú és jól áttekinthető összefoglaló.",
                "🚢 <strong><a href='https://www.tallink.com/ee-en/travelling/cruises/tallinn-stockholm' target='_blank' rel='noreferrer'>Tallink — Tallinn–Stockholm ferry</a></strong> — elsődleges hivatalos kompforrás, autós fedélzeti információval és check-in logikával.",
                "🌲 <strong><a href='https://visitestonia.com/en/lahemaa-national-park-estonia' target='_blank' rel='noreferrer'>Visit Estonia — Lahemaa National Park</a></strong> — Tallinn környéki természetes extra naphoz a legjobb hivatalos forrás."
              ],
              links: [
                { label: "Sporty Travellers", url: "https://www.sportytravellers.com/europe/the-ultimate-baltic-road-trip-itinerary/" },
                { label: "Bruised Passports", url: "https://www.bruisedpassports.com/baltics/baltic-road-trip-itinerary-latvia-estonia-lithuania" },
                { label: "Johnny Africa", url: "https://johnnyafrica.com/perfect-baltics-travel-itinerary/" },
                { label: "Tallink ferry", url: "https://www.tallink.com/ee-en/travelling/cruises/tallinn-stockholm" },
                { label: "Visit Estonia — Lahemaa", url: "https://visitestonia.com/en/lahemaa-national-park-estonia" }
              ]
            },
            {
              title: "🚗 Általános Baltikum roadtrip-útleírások",
              accent: "baltic",
              open: false,
              items: [
                "🚗 <strong><a href='https://www.sportytravellers.com/europe/the-ultimate-baltic-road-trip-itinerary/' target='_blank' rel='noreferrer'>Sporty Travellers</a></strong> — roadtrip-ritmus, határátlépési egyszerűség, főbb megállók.",
                "🧳 <strong><a href='https://www.bruisedpassports.com/baltics/baltic-road-trip-itinerary-latvia-estonia-lithuania' target='_blank' rel='noreferrer'>Bruised Passports</a></strong> — Jūrmala, Kemeri, Lahemaa és lassabb, élményszerű ütemezés.",
                "🌍 <strong><a href='https://johnnyafrica.com/perfect-baltics-travel-itinerary/' target='_blank' rel='noreferrer'>Johnny Africa</a></strong> — 7–10 napos városi tengely Vilnius–Riga–Tallinn–Helsinki logikával.",
                "🗺 <strong><a href='https://exploremoreco.com/lithuania-latvia-and-estonia-best-of-baltic-states-road-trip/' target='_blank' rel='noreferrer'>ExploreMoreCo</a></strong> — inkább inspirációs, de jól használható háttéranyag Litvánia–Lettország–Észtország sorrendhez.",
                "🌿 <strong><a href='https://wetraveloutdoor.com/baltic-states-travel-itinerary-10-days/' target='_blank' rel='noreferrer'>We Travel Outdoor — Baltic States Travel Itinerary 10 Days</a></strong> — jó alternatíva arra, hogy a mostani 8–9 napos tervet egy lazább 10 napos verzióhoz mérd."
              ],
              links: [
                { label: "ExploreMoreCo", url: "https://exploremoreco.com/lithuania-latvia-and-estonia-best-of-baltic-states-road-trip/" },
                { label: "We Travel Outdoor", url: "https://wetraveloutdoor.com/baltic-states-travel-itinerary-10-days/" }
              ]
            },
            {
              title: "🏛 Hivatalos és helyspecifikus források",
              accent: "baltic",
              open: false,
              items: [
                "🇪🇪 <strong><a href='https://visitestonia.com/en/lahemaa-national-park-estonia' target='_blank' rel='noreferrer'>Visit Estonia — Lahemaa National Park</a></strong> — Tallinn környéki autós / natúr naphoz hivatalos alap.",
                "🇱🇻 <strong><a href='https://www.latvia.travel/en/sight/gauja-national-park' target='_blank' rel='noreferrer'>Latvia Travel — Gauja National Park</a></strong> — Sigulda, Turaida és a Gauja-völgy hivatalos összefoglalója.",
                "🌲 <strong><a href='https://www.entergauja.com/en/news-events/special-offers-news/explore-the-wonders-of-gauja-national-park' target='_blank' rel='noreferrer'>Enter Gauja</a></strong> — konkrét aktivitásokkal, túraötletekkel és programcsomagokkal egészíti ki a hivatalos oldalt.",
                "🚆 <strong><a href='https://www.interrail.eu/en/trip-ideas/recommended-routes/classic-routes/baltic-itinerary' target='_blank' rel='noreferrer'>Interrail — Baltic Itinerary</a></strong> — bár vonatos fókuszú, a Vilnius–Riga–Tallinn tengely útvonal-logikájához jó frissített háttér."
              ],
              links: [
                { label: "Latvia Travel — Gauja", url: "https://www.latvia.travel/en/sight/gauja-national-park" },
                { label: "Enter Gauja", url: "https://www.entergauja.com/en/news-events/special-offers-news/explore-the-wonders-of-gauja-national-park" },
                { label: "Interrail Baltic Itinerary", url: "https://www.interrail.eu/en/trip-ideas/recommended-routes/classic-routes/baltic-itinerary" }
              ]
            },
            {
              title: "🚢 Tallinn–Stockholm komp és logisztika",
              accent: "nordic",
              open: false,
              items: [
                "🚢 <strong><a href='https://www.tallink.com/ee-en/travelling/cruises/tallinn-stockholm' target='_blank' rel='noreferrer'>Tallink</a></strong> — hivatalos hajótársasági oldal, fedélzeti és check-in információkkal.",
                "⛴ <strong><a href='https://www.ferryhopper.com/en/ferry-routes/direct/tallinn-stockholm' target='_blank' rel='noreferrer'>Ferryhopper</a></strong> — jó független összefoglaló menetrendhez, időtartamhoz és árlogikához.",
                "📊 <strong><a href='https://www.directferries.com/tallinn_stockholm_ferry.htm' target='_blank' rel='noreferrer'>Direct Ferries</a></strong> — alternatív összehasonlító oldal ár- és indulás-ellenőrzéshez."
              ],
              links: [
                { label: "Ferryhopper Tallinn–Stockholm", url: "https://www.ferryhopper.com/en/ferry-routes/direct/tallinn-stockholm" },
                { label: "Direct Ferries Tallinn–Stockholm", url: "https://www.directferries.com/tallinn_stockholm_ferry.htm" }
              ]
            },
            {
              title: "📰 Inspiráció és háttér",
              accent: "baltic",
              open: false,
              items: [
                "🗞 <strong><a href='https://www.theguardian.com/travel/article/2024/jul/18/baltic-beauty-exploring-estonias-northern-coast' target='_blank' rel='noreferrer'>The Guardian — Estonia’s northern coast / Lahemaa</a></strong> — jó inspirációs cikk északi parti hangulathoz, Viru Bog és halászfalvak felé.",
                "🍽 <strong><a href='https://www.theguardian.com/travel/article/2024/may/14/why-i-love-baltic-cuisine-restaurants-latvia-riga-estonia-lithuania' target='_blank' rel='noreferrer'>The Guardian — Baltic cuisine</a></strong> — Riga Central Market és a balti konyha karaktere miatt gasztrós háttérnek jó.",
                "🛣 <strong><a href='https://apnews.com/article/7f3870062c5ce077ceb6ee98cc928d7b' target='_blank' rel='noreferrer'>AP — Via Baltica útfejlesztés</a></strong> — jó logisztikai háttér a Varsó–Kaunas–Riga–Tallinn fő autós tengelyhez."
              ],
              links: [
                { label: "The Guardian — Lahemaa", url: "https://www.theguardian.com/travel/article/2024/jul/18/baltic-beauty-exploring-estonias-northern-coast" },
                { label: "The Guardian — Baltic cuisine", url: "https://www.theguardian.com/travel/article/2024/may/14/why-i-love-baltic-cuisine-restaurants-latvia-riga-estonia-lithuania" },
                { label: "AP — Via Baltica", url: "https://apnews.com/article/7f3870062c5ce077ceb6ee98cc928d7b" }
              ]
            }
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
            { label: "tranzit", cls: "tag-drive" }
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
          subtitle: "Hill of Crosses + Rundāle-palota megállóval",
          driveLog: { km: "~330 km", stops: 4, driveTime: "~4,5 óra", depart: "09:00", arrive: "~18:30", timelinePoints: [{time:"09:00", label:"ind. Vilnius"}, {time:"11:30", label:"Hill of Crosses"}, {time:"13:30", label:"Rundāle"}, {time:"18:30", label:"Riga érk."}] },
          tags: [
            { label: "Hill of Crosses", cls: "tag-focus" },
            { label: "Rundāle", cls: "tag-focus" }
          ],
          activities: [
            { time: "reggel", icon: "🚗", name: "Indulás Riga felé", detail: "Rövidebb etap, mint az előző tranzitnapok." },
            { time: "napközben", icon: "⛪", name: "Hill of Crosses", detail: "Jó út menti törés, ami karaktert ad a Riga-napnak." },
            { time: "kora délután", icon: "🏰", name: "Rundāle-palota (opcionális)", detail: "Lettország barokk »Versailles«-a — Rastrelli tervezte palota és francia kert. ~40 perc kitérő Bauska felé, útba esik Riga előtt." },
            { time: "este", icon: "🌆", name: "Esti Riga", detail: "Már csak rövid városi séta kell, a teljes Riga-nap másnap jön." }
          ],
          notes: ["Ez jó köztes nap: nem üres vezetés, de nem is túl hosszú.", "🏰 Rundāle-palota: belépő ~16 €, a kert önmagában is megér egy sétát. Ha szűk az idő, csak a Hill of Crosses marad, Rundāle elhagyható."]
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
          notes: ["Turaida Castle: jobb kilátás és kevesebb tömeg mint a siguldai castle romok — inkább ezt válaszd ha csak egyet.", "Gutmanis-barlang: a Turaida kastélyból gyalogosan is elérhető (erdei ösvény, ~15 perc).", "🏰 Cēsis: ha bőven van idő, ~30 km-re Sigulda mögött egy hangulatos középkori városka lovagvár-rommal (lámpással vezetett túra) — szép kiegészítés a Gauja-naphoz.", "Pärnu: ha Sigulda tele volt programmal, Pärnu legyen csak gyors kávé. Ha Sigulda rövid volt, egy fél óra tenger-pillantás jó.", "Tallinn szállás: Rotermann / Sadama / Old Town széle — autóval ide a legpraktikusabb bemenni."]
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
          notes: ["Tallinn autós logisztika: parkolj a Rotermann / Sadama negyed P-jában, az óvárosba nem érdemes behajtani.", "Kompterminál: Tallinn D-terminál (a Sadama negyedtől 5 perc gyalog). Autós boarding kb. 09:00-tól a 10:30-as menetrendnél.", "Lennusadam: ha elfáradt láb és kevés energia, ezt el is lehet hagyni — Toompea + Telliskivi a fontosabb.", "🏰 Kadriorg: ha marad délután, Nagy Péter cár barokk palotája és parkja (a KUMU művészeti múzeummal) nyugodt zöld séta a Vanalinn után — a park ingyenes.", "Toompea és Vanalinn együtt ~3-4 óra; Telliskivi még 1,5 óra — a nap könnyen betellik."]
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
      extraResources: [
        {
          title: "📖 Útleírások — blogok és útikönyvek",
          accent: "iceland",
          open: false,
          text: "Magyar és külföldi útleírók tapasztalatai az izlandi Ring Road körútról. A leghasznosabb ötleteket az általános útmutatóba és a napi context-boxokba integráltuk — az alábbi forrásokból a részletesebb olvasáshoz.",
          subBoxes: [
            {
              title: "Epic Iceland — mi fedi az útvonalat?",
              accent: "iceland",
              open: false,
              text: "Az Epic Iceland szinte az egész szigetet bejárta. A mostani júliusi Ring Road tervvel ezek a részek fednek közvetlenül, és ezekből jönnek azok a plusz ötletek, amik még reálisan beleférhetnek a tempóba.",
              items: [
                "Snæfellsnes: náluk is működik az egynapos kör — rövid pluszként leginkább Selvallavatn vagy a Berserkjahraun-féle scenic detour fér még bele, ha jó az idő.",
                "Stuðlagil-kanyon: a nyugati oldal gyorsabb és könnyebb nézőpont, a keleti oldal hosszabb sétával, de közelebbi rálátással jár. Ha van idő, a keleti oldalt javasolják.",
                "Délkelet / Eastfjords: a Route 1 parti vezetése önmagában is erős élmény — az Öxi road csak weather-dependent gravel kerülőként vállalható be.",
                "Jökulsárlón és Fjallsárlón: időszűkében Fjallsárlón elengedhető, de a kettő együtt erős.",
                "Déli part: Seljalandsfoss mellé egyértelmű plusz a Gljúfrabúi szurdok (rejtett vízesés mögötte járható).",
                "Golden Circle és Reynisfjara: korai indulás mindkettőhöz — Reynisfjara-nál hullámveszélyre külön felhívnak."
              ],
              links: [
                { label: "Epic Iceland főoldal", url: "https://epiciceland.net/" },
                { label: "Snæfellsnes guide", url: "https://epiciceland.net/best-things-to-do-in-snaefellsnes/" },
                { label: "South-East Ring Road day", url: "https://epiciceland.net/day-5-journey-south-east-iceland/" },
                { label: "Golden Circle / Reykjavik day trips", url: "https://epiciceland.net/best-day-trips-from-reykjavik/" },
                { label: "Stuðlagil canyon notes", url: "https://epiciceland.net/tag/studlagil-canyon/" },
                { label: "Seljalandsfoss notes", url: "https://epiciceland.net/tag/seljalandsfoss/" }
              ]
            },
            {
              title: "Magyar útleírások — blogajánló",
              accent: "iceland",
              open: false,
              text: "Öt magyar útleírás a Ring Roadról — hasonló körúton járt utazók konkrét tapasztalatai, napi ritmusok, rejtett helyszínek és időzítési tanácsok.",
              items: [
                "🌋 <strong><a href='https://helloizland.hu/' target='_blank' rel='noreferrer'>Helloizland.hu</a></strong> — hazai izland-specialista: részletes útmutatók régiónként, Kerið krátertó és geotermikus kenyérsütő tanya (Laugarvatn Fontana) a Golden Circle mellé javasolt pluszként. Korai foglalás a déli parton júliusban kritikus.",
                "🧭 <strong><a href='https://wanderwell.hu/blog/desztinaciok/izland' target='_blank' rel='noreferrer'>Wanderwell.hu</a></strong> — magyar izland-specialista utazási iroda blogja, több cikkes sorozattal: <a href='https://wanderwell.hu/blog/arany-korut-izland-latnivaloi-egy-nap-alatt' target='_blank' rel='noreferrer'>Arany Körút egy nap alatt</a>, <a href='https://wanderwell.hu/blog/a-legjobb-izlandi-termalfurdok' target='_blank' rel='noreferrer'>legjobb termálfürdők</a>, <a href='https://wanderwell.hu/blog/izlandi_utazas_olcson' target='_blank' rel='noreferrer'>budget izland tippek</a>, <a href='https://wanderwell.hu/blog/sarki-feny-a-jegbarlangban-reykjavik-legfontosabb-latnivaloi' target='_blank' rel='noreferrer'>Reykjavík látványosságai</a>.",
                "🎒 <strong><a href='https://netkoffer.hu/izland-utazas/' target='_blank' rel='noreferrer'>Netkoffer.hu</a></strong> — praktikus megközelítés: Blue Lagoon vs. olcsóbb alternatívák, Hallgrímskirkja lift vs. séta, Skaftafell glaciális közelség. Busz Keflavíkból Reykjavíkba ~40 perc, ~22 EUR.",
                "🚐 <strong><a href='https://vandorboy.com/izland-15-nap-teljes-korutazas/' target='_blank' rel='noreferrer'>Vándorboy — 15 napos körút</a></strong> — Stuðlagil keleti oldal (közelebb, de hosszabb séta), Hengifoss (128 m, Izland harmadik legnagyobb vízesése, Eastfjords), Ásbyrgi-kanyon patkolás-alakú sziklafal. Haifoss (122 m) a Golden Circle rejtett extra-opciója.",
                "🚐 <strong><a href='https://vandorboy.com/izland-8-nap-korutazas/' target='_blank' rel='noreferrer'>Vándorboy — 8 napos körút</a></strong> — 8 napos Ring Road-tempó: ~110–134 EUR/nap/fő reális keret, Svartifoss bazalt-vízesés Skaftafellben, Reykjadalur geotermikus folyó. Főzési lehetőséggel rendelkező szállás sokat spórol.",
                "🧭 <strong><a href='https://www.vizzitor.hu/izland-latnivalok-autoval/' target='_blank' rel='noreferrer'>Vizzitor.hu</a></strong> — autós körút cikksorozat: a cikk óramutató járásával megegyező irányt (észak először) ajánl, de a mostani terv ezt tudatosan megfordítja, mert a déli és délkeleti blokkot szeretnétek korábban letudni. Kiemelések: Dettifoss (Európa legnagyobb vízhozamú vízesése — 100 m széles, 45 m magas, szubjektíven erősebb mint Gullfoss), Fjaðrárgljúfur-kanyon (zöld szurdok, Game of Thrones díszlet), Seljavallalaug (Izland legrégebbi úszómedencéje, 1923, ingyenes, infrastruktúra nélkül). Figyelmeztetések: Vadlaheiðargöng alagút (az egyetlen fizetős: regisztrálj a tunnel.is-en előre, különben büntetés), Reynisfjara-nál 30 métert tartsd a víztől."
              ],
              links: [
                { label: "Helloizland.hu", url: "https://helloizland.hu/" },
                { label: "Wanderwell — Izland", url: "https://wanderwell.hu/blog/desztinaciok/izland" },
                { label: "Netkoffer — Izland utazás", url: "https://netkoffer.hu/izland-utazas/" },
                { label: "Vándorboy — 15 napos körút", url: "https://vandorboy.com/izland-15-nap-teljes-korutazas/" },
                { label: "Vándorboy — 8 napos körút", url: "https://vandorboy.com/izland-8-nap-korutazas/" },
                { label: "Vizzitor.hu — látványosságok autóval", url: "https://www.vizzitor.hu/izland-latnivalok-autoval/" }
              ]
            }
          ]
        },
      ],
      intro: [
        "Ez a rész a megfordított júliusi Ring Road tervre épül: július 18-i (szombat) esti KEF-érkezés, Reykjavíkkal induló akklimatizációs nap, majd Golden Circle + déli part, Jökulsárlón és Höfn, keleti fjordok, északi Mývatn–Akureyri-blokk, végül Snæfellsnes-zárás — 8 teljes nap, 07.26-i vasárnap reggeli visszarepüléssel.",
        "A kulcs nem a rohanás, hanem a csúcsszezoni tömeg jó kezelése: korai (7:00–7:30-as) indulások a főhelyszínekre, esti aranyórás visszatérés Seljalandsfoss-hoz és Diamond Beach-hez, és előre foglalt népszerű étterem / fürdő (Friðheimar, Sky Lagoon, Mývatn Nature Baths).",
        "Júliusban 18–21 óra napfény van — ez egyszerre áldás és csapda. A legjobb fotós fény reggel 5–8h és este 20–23h között van, amikor a turistabuszok még nincsenek ott. A legesőérzékenyebb teljes nap most a júl. 25-i Snæfellsnes-zárás: ha a vedur.is erre rossz látást vagy ködöt mutat, érdemes rövidített nyugati kört menni és időben visszazárni Reykjavík / KEF felé."
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
          title: "🔄 Fordított kör · időjárási logika",
          accent: "iceland",
          open: true,
          cards: [
            {
              title: "Mikor cserélj?",
              paragraphs: [
                "A fordított körben a déli és délkeleti első három teljes nap jóval esőtűrőbb, ezért a fő kockázat átkerül a nyugati zárásra. Snæfellsnes továbbra is a legérzékenyebb fotós nap: Kirkjufell, Búðakirkja és Lóndrangar ködben sokat veszít.",
                "A döntést két ponton érdemes meghozni: júl. 20. reggel a déli part indulásához, és júl. 24. este a júl. 25-i Snæfellsnes-blokkhoz."
              ]
            },
            {
              title: "Normál fordított sorrend",
              paragraphs: [
                "Day 3 (júl 20): Golden Circle + Hella / Hvolsvöllur",
                "Day 4–7 (júl 21–24): Déli part → Höfn / Eastfjords → Stuðlagil / Dettifoss / Mývatn → Akureyri / nyugat",
                "Day 8 (júl 25): Snæfellsnes + visszazárás Reykjavík / KEF felé"
              ]
            },
            {
              title: "Mi rövidíthető rossz időben?",
              paragraphs: [
                "Golden Circle és déli part maradhat esőben is — ezek vízeséses, gejzíres, drámai helyszínek.",
                "Ha júl. 25-re rossz a Snæfellsnes-látás, rövidítsd a nyugati kört: Búðakirkja + Arnarstapi + Kirkjufell mag, és hagyd el a hosszabb nyugati peremi kitérőket."
              ]
            },
            {
              title: "Megjegyzés",
              paragraphs: [
                "A korábbi Reykjavík ⇄ Snæfellsnes swap itt már nem tiszta opció. A fordított kör logikája inkább a rövidíthető nyugati zárásról szól, nem a napok cserélgetéséről."
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
              title: "Day 3 · Golden Circle + déli átvezetés · 🟢 Jó esőben",
              paragraphs: [
                "Gullfoss, Geysir, Þingvellir és a fürdős blokk esőben is működik, sőt sokszor még drámaibb is. Ez jó nyitónap akkor is, ha nem tökéletes az idő."
              ]
            },
            {
              title: "Day 4 · Déli part + Jökulsárlón · 🟢 Jó esőben",
              paragraphs: [
                "Seljalandsfoss, Skógafoss, Reynisfjara és még a Jökulsárlón is elbírja az esőt. A látvány sokszor még erősebb, csak a szélre kell jobban figyelni."
              ]
            },
            {
              title: "Day 5 · Höfn / Eastfjords · 🟡 Vegyes",
              paragraphs: [
                "Jökulsárlón / Diamond Beach még tartja magát, de Vestrahorn és az Eastfjords kilátós részei ködben sokat veszítenek. Ez már félig fotós, félig átvezető nap."
              ]
            },
            {
              title: "Day 6 · Stuðlagil / Dettifoss / Mývatn · 🟢 Jó esőben",
              paragraphs: [
                "Dettifoss és Hverir esőben is erős, Stuðlagil is működik, még ha a víz nem is mindig türkiz. Ez az egyik legbiztosabb rosszidős nap."
              ]
            },
            {
              title: "Day 7 · Észak / Akureyri / nyugat felé · 🟡 Vegyes",
              paragraphs: [
                "Goðafoss és a Mývatn-régió nagy része elbírja az esőt, de Húsavík-bálnales szélben és hullámzásban már gyengül. Ez inkább köztes, nem fekete-fehér nap."
              ]
            },
            {
              title: "Day 8 · Snæfellsnes · 🔴 Eső katasztrófa",
              paragraphs: [
                "Kirkjufell, Búðakirkja, Lóndrangar és a teljes félsziget főleg látásból és fényből él. Ködben vagy zárt alacsony felhőben Snæfellsnes veszít a legtöbbet."
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
          driveLog: { km: "~70 km", stops: 5, driveTime: "~1 óra", depart: "18:25 (FI309)", arrive: "~21:30 Reykjavík", timelinePoints: [{time:"18:25", label:"KEF érk."}, {time:"19:15", label:"Gunnuhver"}, {time:"20:00", label:"Brimketill / Bridge"}, {time:"21:30", label:"Reykjavík"}] },
          character: "Érkezési nap, de a Reykjanes-félsziget aprósága nem kifelejthető: az autókölcsönzés után 5 percre van a Gunnuhver geotermikus mező, és 10 percre a Brimketill lávamedence és a két kontinens közötti híd. 18:25-kor érkezel, autót átveszed ~19:10-re, Izlandon este 22:30-kor még teljes napfény van — bőven van idő a három pontot megjárni és Reykjavíkba érni vacsorára. Ha nagyon fáradt vagy, kihagyható, de majd megbánod.",
          rainNote: { icon: "🟢", label: "Esős? Tök mindegy — vezetés és vacsora esőben is megy." },
          tags: [
            { label: "érkezés", cls: "tag-flight" },
            { label: "Reykjanes", cls: "tag-focus" },
            { label: "Reykjavík", cls: "tag-city" }
          ],
          activities: [
            { time: "18:25", icon: "✈", name: "FI309 érkezés Keflavíkba", detail: "A stockholmi járat után autóátvétel — kb. 45 perc az egész folyamat, ~19:10-re kész." },
            { time: "~19:15", icon: "🌋", name: "Gunnuhver geotermikus mező (opcionális)", detail: "5 percre a reptértől: fortyogó sárforrások, gőzoszlopok, intenzív kénszag. 20 perc bőven elég. Ha fáradt vagy, kihagyható — de ez a legkönnyebben megfogható izlandi geotermikus élmény az úton." },
            { time: "~19:45", icon: "🌊", name: "Brimketill lávamedence + Bridge Between Continents (opcionális)", detail: "Brimketill: természetes köralakú lávamedence, ahol az óceán hullámzik — 10 perc gyalogos. Bridge Between Continents: rövid híd az Eurázsiai és Észak-Amerikai tektonikai lemez közötti hasadékon át — 10 perc. Mindkettő 10 percre egymástól." },
            { time: "~21:00", icon: "🍽", name: "Reykjavík — vacsora + szállás", detail: "Svarta Kaffið, Messinn vagy egy egyszerűbb burger is elég az első estére. Júliusban este 22:30-kor még teljes napfény van." },
            { time: "késő este", icon: "⛽", name: "Tankolás + lefekvés", detail: "N1 vagy Olís még ezen az estén jó ötlet, hogy a másnapi Reykjavík + Golden Circle nap már teljesen súrlódásmentesen induljon." }
          ],
          notes: ["A Reykjanes-pontok mind a KEF → Reykjavík útvonalon vannak, nem kerülő — csak 20-30 percet adnak az estéhez.", "Autóátvételnél fotózzátok körbe a karcokat, üveget és lökhárítókat; Izlandon a kavics- és szélkár különösen gyakori.", "A gravel insurance (SCDW/GP) itt nem finom extra, hanem alap logika.", "A kutaknál PIN-kód kötelező, kontaktless nem mindenhol megy.", "GPS-óra állítás: GMT (UTC+0) — Magyarországtól -2 óra.", "Tankolj még este az N1 Hafnargata 86-on (24/7) — így a másnapi városi / Golden Circle nyitás már súrlódásmentes.", "Ha nagyon fáradt a csapat, a Reykjanes-pontok kihagyhatók — ez az este inkább bónusz, mint kötelező blokk."],
          links: [
            { label: "SCDW / GP insurance guide", url: "https://epiciceland.net/car-rental-insurance-guide-iceland/" },
            { label: "N1 Hafnargata 86", url: "https://www.google.com/maps/search/?api=1&query=63.996711,-22.549587" },
            { label: "Svarta Kaffið", url: "https://www.google.com/maps/place/?q=place_id:ChIJgYjsaOJ11kgRJBwQqYbRz_Y" },
            { label: "Gunnuhver", url: "https://www.google.com/maps/search/?api=1&query=Gunnuhver+Iceland" },
            { label: "Brimketill", url: "https://www.google.com/maps/search/?api=1&query=Brimketill+Iceland" },
            { label: "Bridge Between Continents", url: "https://www.google.com/maps/search/?api=1&query=Bridge+Between+Continents+Iceland" }
          ],
          gpxPlaces: [
            { name: "Keflavík reptér (KEF)", badge: "érkezés", detail: "Érkezés este, itt jön az autóátvétel és az első izlandi logisztikai váltás.", maps: "https://www.google.com/maps/search/?api=1&query=Keflav%C3%ADk+rept%C3%A9r+%28KEF%29" },
            { name: "Gunnuhver geotermikus mező", badge: "opcionális este", googleRating: "4.5", duration: "20 perc", reviewNote: "Izland legnagyobb forróiszap-forrása — gőzoszlopok, kénszag, teljesen ingyenes · 5 percre KEF-től", detail: "Fortyogó sárforrások és gőzoszlopok. Az autókölcsönzés után azonnal elérhető, 5 percre a reptértől.", maps: "https://www.google.com/maps/search/?api=1&query=Gunnuhver+Iceland" },
            { name: "Brimketill lávamedence", badge: "opcionális este", googleRating: "4.6", duration: "15–20 perc", reviewNote: "Természetes köralakú lávamedence az Atlanti hullámzásában — egyedülálló, különösen viharos fényben · 4.6 ★", detail: "Természetes kőlavór-alakú lávamedence, ahol az óceán hullámzik be. Erős fotóhely.", maps: "https://www.google.com/maps/search/?api=1&query=Brimketill+Iceland" },
            { name: "Bridge Between Continents", badge: "opcionális este", googleRating: "4.0", duration: "10–15 perc", reviewNote: "Rövid gyalogóhíd az eurázsiai és észak-amerikai tektonikai lemez hasadékán át — szimbolikus, gyors megálló", detail: "Kis gyalogóhíd a két kontinens közötti hasadékon — gyors és szimbolikus megálló Brimketill közelében.", maps: "https://www.google.com/maps/search/?api=1&query=Bridge+Between+Continents+Iceland" },
            { name: "N1 Self-service Keflavík (Hafnargata)", badge: "tankolás", detail: "24/7 benzinkút, praktikus még az első este letudni.", maps: "https://www.google.com/maps/search/?api=1&query=N1+Self-service+Keflav%C3%ADk+%28Hafnargata%29" },
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
          character: "Pihenős városnézős nap az első teljes vezetős izlandi etap előtt. Délelőtt a belváros gyalog, délután fürdő-élmény. Ne hajtsd túl magad — ez egy ráhangolódás, nem egy teljesítménynap.",
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
          title: "Golden Circle + déli átvezetés",
          subtitle: "Fordított körös nyitónap: fürdő, paradicsomfarm, gejzírek, majd Hella / Hvolsvöllur",
          driveLog: { km: "~280 km", stops: 8, driveTime: "~4,5 óra", depart: "07:30", arrive: "~20:30", timelinePoints: [{time:"07:30", label:"Reykjavík ind."}, {time:"09:00", label:"Kerið / Secret Lagoon"}, {time:"12:30", label:"Friðheimar"}, {time:"16:00", label:"Geysir / Gullfoss"}, {time:"20:30", label:"Hella"}] },
          character: "A kör most dél felé indul, ezért a klasszikus Golden Circle nem zárónap, hanem tudatos nyitás. Jól bírja az esőt, és logikusan húz le benneteket a déli partra, miközben a legzsúfoltabb pontokat már az első teljes napon kipipáljátok.",
          rainNote: { icon: "🟢", label: "Esős? Jó — Gullfoss, Strokkur és Þingvellir kifejezetten jól működik esőben is." },
          tags: [
            { label: "Golden Circle", cls: "tag-focus" },
            { label: "dél felé", cls: "tag-open" },
            { label: "Hella / Hvolsvöllur", cls: "tag-city" }
          ],
          activities: [
            { time: "reggel", icon: "♨", name: "Secret Lagoon vagy Laugarás Lagoon", detail: "A fordított körben ez jó nyitás: még a tömeg előtt, lazább ritmusban indul a nap." },
            { time: "déltáj", icon: "🍅", name: "Friðheimar ebéd", detail: "Foglalós paradicsomfarm, amit érdemes az első teljes napra rakni, amikor még van mozgástér." },
            { time: "délután", icon: "🌋", name: "Geysir + Gullfoss + Þingvellir", detail: "A három fő Golden Circle pont egymás után jön, majd estére lehúzás Hella / Hvolsvöllur felé." }
          ],
          notes: ["A Golden Circle júliusban is jól bírja az esőt, ezért jó nyitónap a fordított körre.", "Friðheimar minimum 1-2 héttel előre foglalós.", "Ha belefér, Kerið lehet a gyors nyitó stop; ha csúsztok, ez az első könnyen elhagyható pont.", "Estére Hella / Hvolsvöllur környékén aludjatok, ne menjetek vissza Reykjavíkba, mert másnap a déli part így sokkal jobb ritmust kap."],
          links: [
            { label: "Þingvellir", url: "https://www.google.com/maps/place/?q=place_id:ChIJe2kT-x-B1kgR8mKSB4tsdWs" },
            { label: "Strokkur / Geysir", url: "https://www.google.com/maps/place/?q=place_id:ChIJQx6ihstf1kgR4wuu2I9A_hM" },
            { label: "Gullfoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJ_W-9cc6l1kgRZbQlcba-FYc" },
            { label: "Friðheimar", url: "https://www.google.com/maps/place/?q=place_id:ChIJu_eD4_uW1kgRr5VyF_fx5t4" }
          ],
          gpxPlaces: [
            { name: "Kerið", badge: "nyitó stop", duration: "25–35 perc", detail: "Gyors vulkáni nyitás, ha rögtön képre hangolnátok a napot.", maps: "https://www.google.com/maps/search/?api=1&query=Keri%C3%B0+crater+Iceland" },
            { name: "Secret Lagoon", badge: "fő fürdő", googleRating: "4.6", duration: "90–120 perc", detail: "Nyugodtabb, régebbi fürdő a nap elején, még a csúcs előtt.", maps: "https://www.google.com/maps/search/?api=1&query=Secret+Lagoon+Fl%C3%BA%C3%B0ir" },
            { name: "Friðheimar", badge: "ebéd", googleRating: "4.7", duration: "80–100 perc", detail: "Foglalós paradicsomfarmos ebéd, az első teljes nap egyik legjobb fix pontja.", maps: "https://www.google.com/maps/search/?api=1&query=Fri%C3%B0heimar+Iceland" },
            { name: "Geysir / Strokkur", badge: "főpont", googleRating: "4.7", duration: "30–45 perc", detail: "Garantált gejzírélmény rövid várakozással.", maps: "https://www.google.com/maps/search/?api=1&query=Strokkur+Geyser+Iceland" },
            { name: "Gullfoss", badge: "főpont", googleRating: "4.9", duration: "40–55 perc", detail: "A Golden Circle legnehezebben kihagyható pontja.", maps: "https://www.google.com/maps/search/?api=1&query=Gullfoss+Waterfall+Iceland" },
            { name: "Þingvellir", badge: "főpont", googleRating: "4.7", duration: "60–90 perc", detail: "A két tektonikai lemez közötti sétás zárás, majd lehúzás dél felé.", maps: "https://www.google.com/maps/search/?api=1&query=%C3%9Eingvellir+National+Park" },
            { name: "Hella / Hvolsvöllur szállás", badge: "szállás", detail: "A déli part másnapi indulásához ez a legjobb logikus alvópont.", maps: "https://www.google.com/maps/search/?api=1&query=Hella+Iceland+hotel" }
          ]
        },
        {
          num: "3",
          date: "2026. július 21., kedd",
          title: "Déli part + Jökulsárlón kihúzás",
          subtitle: "Vízesések, fekete strandok és esti gleccserlagúna",
          driveLog: { km: "~380 km", stops: 8, driveTime: "~5 óra", depart: "07:00", arrive: "~21:00", timelinePoints: [{time:"07:00", label:"Hella ind."}, {time:"08:00", label:"Seljalandsfoss"}, {time:"10:30", label:"Skógafoss"}, {time:"13:00", label:"Vík"}, {time:"17:30", label:"Jökulsárlón"}] },
          character: "A fordított kör egyik legerősebb napja. A klasszikus déli parti pontokat most nem zárónapként, hanem friss ritmusban kapjátok meg, és estére már Jökulsárlón / Diamond Beach környékén lehettek.",
          rainNote: { icon: "🟢", label: "Esős? Jó — vízesések, Reynisfjara és még Jökulsárlón is működik nedves időben." },
          tags: [
            { label: "déli part", cls: "tag-focus" },
            { label: "Jökulsárlón", cls: "tag-focus" },
            { label: "korai indulás", cls: "tag-open" }
          ],
          activities: [
            { time: "reggel", icon: "💧", name: "Seljalandsfoss + Skógafoss", detail: "A két nagy vízesés még vállalhatóbb tömegben, ha korán indultok." },
            { time: "déltáj", icon: "🖤", name: "Vík + Reynisfjara + Dyrhólaey", detail: "Fekete strand, bazaltoszlopok és júliusi puffinok — itt a biztonsági távolság kötelező." },
            { time: "késő délután / este", icon: "🧊", name: "Jökulsárlón + Diamond Beach", detail: "A délkeleti blokk estében különösen erős, és jól átvezeti a kört Höfn / Skaftafell felé." }
          ],
          notes: ["Reynisfjara sneaker wave szabály itt is nem alku kérdése: ne fordítsatok hátat a víznek.", "Dyrhólaey délután / késő délután jó a puffinok miatt.", "Ha a nap csúszik, a Sólheimasandur DC-3 roncs legyen az első kihagyható extra.", "A Jökulsárlón blokk este fotósan sokszor jobb, mint délben."],
          links: [
            { label: "Seljalandsfoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJFSTv6K0e10gRjRcJUiDmAa4" },
            { label: "Skógafoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJFYylOXY710gRSHn-zR_HYA8" },
            { label: "Reynisfjara", url: "https://www.google.com/maps/place/?q=place_id:ChIJkfGf2zBK10gRmC1j9msDIDk" },
            { label: "Dyrhólaey", url: "https://www.google.com/maps/place/?q=place_id:ChIJk9IcF7JJ10gR6yJHDvMw6P0" }
          ],
          gpxPlaces: [
            { name: "Seljalandsfoss + Gljúfrabúi", badge: "nyitó vízeséspár", googleRating: "4.8", duration: "40–55 perc", detail: "A fordított körben ez kerül az első nagy déli-parti reggelbe.", maps: "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland" },
            { name: "Skógafoss", badge: "főpont", googleRating: "4.8", duration: "50–70 perc", detail: "A nagy ikon a déli parton, még jó ritmusban elcsípve.", maps: "https://www.google.com/maps/search/?api=1&query=Sk%C3%B3gafoss+Iceland" },
            { name: "Reynisfjara", badge: "főpont", googleRating: "4.7", duration: "45–60 perc", detail: "A fekete strandnál a 30 méteres szabályt itt is tartsátok.", maps: "https://www.google.com/maps/search/?api=1&query=Reynisfjara+Beach+Iceland" },
            { name: "Dyrhólaey", badge: "puffin + kilátó", googleRating: "4.8", duration: "30–45 perc", detail: "Júliusi puffinos megálló a déli part legerősebb peremén.", maps: "https://www.google.com/maps/search/?api=1&query=Dyrh%C3%B3laey+Iceland" },
            { name: "Jökulsárlón", badge: "főpont", googleRating: "4.9", duration: "60–90 perc", detail: "A fordított körben ez már a harmadik teljes napon jön, estefelé nagyon fotós.", maps: "https://www.google.com/maps/search/?api=1&query=J%C3%B6kuls%C3%A1rl%C3%B3n+Iceland" },
            { name: "Diamond Beach", badge: "főpont", googleRating: "4.8", duration: "30–45 perc", detail: "A lagúna után rögtön adja magát a fekete homokos jégmező.", maps: "https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Iceland" },
            { name: "Höfn / Skaftafell szállás", badge: "szállás", detail: "Ezen a napon már délkeleten érdemes aludni, hogy másnap kelet felé nyissanak a fjordok.", maps: "https://www.google.com/maps/search/?api=1&query=H%C3%B6fn+Iceland+hotel" }
          ]
        },
        {
          num: "4",
          date: "2026. július 22., szerda",
          title: "Höfn, Vestrahorn, Eastfjords → Egilsstaðir",
          subtitle: "Fotós reggel a fekete homokos hegyfallal, majd fjordos hosszú ív",
          driveLog: { km: "~320 km", stops: 6, driveTime: "~5 óra", depart: "08:00", arrive: "~20:00", timelinePoints: [{time:"08:00", label:"Höfn ind."}, {time:"09:30", label:"Vestrahorn"}, {time:"13:00", label:"Djúpivogur"}, {time:"18:30", label:"Seyðisfjörður / Egilsstaðir"}] },
          character: "A fotós déli blokk után ez a fjordos átvezető nap. A fő ereje nem a darabszám, hanem a hangulat: Vestrahorn, keleti falvak, hosszú parti ívek és a fokozatos átváltás a sűrű déli partról a ritka keletre.",
          rainNote: { icon: "🟡", label: "Esős? Vegyes — Jökulsárlón-térség bírja, de Vestrahorn és a fjordkilátók sokat veszíthetnek." },
          tags: [
            { label: "Eastfjords", cls: "tag-focus" },
            { label: "Vestrahorn", cls: "tag-focus" },
            { label: "~320 km", cls: "tag-drive" }
          ],
          activities: [
            { time: "reggel", icon: "🏔", name: "Vestrahorn / Stokksnes", detail: "A legjobb fényben érdemes elkapni, mielőtt továbbfordultok északkelet felé." },
            { time: "déltáj", icon: "🥚", name: "Djúpivogur + Eastfjords", detail: "A keleti falvak és fjordívek adják a nap karakterét, nem az erőltetett darabszám." },
            { time: "délután / este", icon: "🚗", name: "Seyðisfjörður vagy közvetlen Egilsstaðir", detail: "Ha marad energia, Seyðisfjörður belefér; ha nem, egyenesen Egilsstaðir a jobb döntés." }
          ],
          notes: ["Vestrahorn ködben vagy alacsony felhőben sokat veszít, ezért ha rossz a látás, ne időzzetek túl sokat ott.", "A keleti fjordokon a távolságok rövidebbnek látszanak a térképen, mint amennyinek érződnek.", "Seyðisfjörður szép plusz, de ez legyen az első elhagyható extra, ha csúsztok.", "A nap végére Egilsstaðir jó logikai bázis a másnapi Stuðlagil / Dettifoss fordulóhoz."],
          links: [
            { label: "Vestrahorn", url: "https://www.google.com/maps/search/?api=1&query=Vestrahorn+Iceland" },
            { label: "Djúpivogur", url: "https://www.google.com/maps/search/?api=1&query=Dj%C3%BApivogur+Iceland" },
            { label: "Seyðisfjörður", url: "https://www.google.com/maps/search/?api=1&query=Sey%C3%B0isfj%C3%B6r%C3%B0ur+Iceland" }
          ],
          gpxPlaces: [
            { name: "Vestrahorn / Stokksnes", badge: "főpont", googleRating: "4.7", duration: "60–90 perc", detail: "A fordított körben ez kerül a reggeli legjobb fénybe.", maps: "https://www.google.com/maps/search/?api=1&query=Vestrahorn+Iceland" },
            { name: "Djúpivogur", badge: "rövid stop", duration: "20–30 perc", detail: "Eggin í Gleðivík vagy egy gyors kikötői pihenő, attól függően mennyire haladtok jól.", maps: "https://www.google.com/maps/search/?api=1&query=Dj%C3%BApivogur+Iceland" },
            { name: "Fáskrúðsfjörður / Reyðarfjörður", badge: "fjordos átvezetés", duration: "rugalmas", detail: "A nap hangulatát főleg ezek az ívek adják, nem az egyes pipálható pontok.", maps: "https://www.google.com/maps/search/?api=1&query=F%C3%A1skr%C3%BA%C3%B0sfj%C3%B6r%C3%B0ur+Iceland" },
            { name: "Seyðisfjörður", badge: "opcionális extra", duration: "45–60 perc", detail: "A szivárványos főutca és a kék templom csak akkor jó ötlet, ha még van rá energiátok.", maps: "https://www.google.com/maps/search/?api=1&query=Sey%C3%B0isfj%C3%B6r%C3%B0ur+Iceland" },
            { name: "Egilsstaðir", badge: "szállásbázis", duration: "esti érkezés", detail: "Innen másnap kényelmesen nyitható a Stuðlagil / Dettifoss nap.", maps: "https://www.google.com/maps/search/?api=1&query=Egilssta%C3%B0ir+Iceland" }
          ]
        },
        {
          num: "5",
          date: "2026. július 23., csütörtök",
          title: "Stuðlagil, Dettifoss, Mývatn",
          subtitle: "Bazaltkanyonból geotermikus északi blokk",
          driveLog: { km: "~300 km", stops: 6, driveTime: "~5 óra", depart: "08:00", arrive: "~20:30", timelinePoints: [{time:"08:00", label:"Egilsstaðir ind."}, {time:"10:00", label:"Stuðlagil"}, {time:"14:00", label:"Dettifoss"}, {time:"18:30", label:"Mývatn / Hverir"}] },
          character: "A fordított kör egyik legerősebb geológiai napja. Reggel Stuðlagil, aztán Dettifoss és Selfoss, végül a Mývatn-régió pöfékelő, fekete-vörös világa. Ez már egyértelműen a keletből az észak felé való átváltás napja.",
          rainNote: { icon: "🟢", label: "Esős? Jó — Dettifoss, Hverir és a Mývatn-régió sokat elbír." },
          tags: [
            { label: "Stuðlagil", cls: "tag-focus" },
            { label: "Dettifoss", cls: "tag-focus" },
            { label: "Mývatn", cls: "tag-focus" }
          ],
          activities: [
            { time: "reggel", icon: "🪨", name: "Stuðlagil", detail: "Nyugati platform vagy hosszabb keleti gyaloglás attól függően, mennyire akarjátok feszesen tartani a napot." },
            { time: "déltáj", icon: "💧", name: "Dettifoss + Selfoss", detail: "A nagy vízesésblokk, amit az aszfaltozott nyugati oldalról a legkényelmesebb megcsinálni." },
            { time: "késő délután / este", icon: "🌋", name: "Hverir / Mývatn", detail: "A geotermikus mezővel és az esti Mývatn-környéki megérkezéssel záródik a nap." }
          ],
          notes: ["Tankolj még Egilsstaðir környékén indulás előtt.", "Stuðlagilnál a nyugati oldal gyorsabb, a keleti látványosabb, de időigényesebb.", "Dettifossnál a nyugati, aszfaltozott oldal a legpraktikusabb.", "Ha csúsztok, Krafla / Víti legyen az első kihagyható extra."],
          links: [
            { label: "Stuðlagil Canyon", url: "https://www.google.com/maps/place/?q=place_id:ChIJd7rLAfYpzEgR34_8axXpsF0" },
            { label: "Dettifoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJEYOF6YoGzUgRkGxDhsiRMqo" },
            { label: "Hverir / Námaskarð", url: "https://www.google.com/maps/place/?q=place_id:ChIJbeqt1QqfzUgR_PI0Y1ByDBA" }
          ],
          gpxPlaces: [
            { name: "Stuðlagil", badge: "főpont", googleRating: "4.7", duration: "60–90 perc", detail: "A fordított körben ez lesz a reggeli első nagy kanyonélmény.", maps: "https://www.google.com/maps/search/?api=1&query=Stu%C3%B0lagil+Canyon+Iceland" },
            { name: "Dettifoss + Selfoss", badge: "főpont", googleRating: "4.8", duration: "60–90 perc", detail: "A két vízesés együtt adja ki igazán a blokk erejét.", maps: "https://www.google.com/maps/search/?api=1&query=Dettifoss+Iceland" },
            { name: "Hverir", badge: "geotermikus főpont", googleRating: "4.7", duration: "30–45 perc", detail: "A nap végén is ütős, még ha már sokat vezettetek is.", maps: "https://www.google.com/maps/search/?api=1&query=Hverir+Iceland" },
            { name: "Dimmuborgir", badge: "opcionális plusz", duration: "45–60 perc", detail: "Ha még marad energiátok a megérkezés után, ez a legjobb esti lávás séta.", maps: "https://www.google.com/maps/search/?api=1&query=Dimmuborgir+Iceland" },
            { name: "Mývatn Nature Baths", badge: "esti fürdő", googleRating: "4.5", duration: "2–3 óra", detail: "A nap méltó lezárása, ha nem csúsztok túl sokat.", maps: "https://www.google.com/maps/search/?api=1&query=M%C3%BDvatn+Nature+Baths+Iceland" }
          ]
        },
        {
          num: "6",
          date: "2026. július 24., péntek",
          title: "Mývatn, Húsavík / Akureyri, nyugat felé",
          subtitle: "Északi zárónap bálnales opcióval, majd hosszabb nyugati átvezetés",
          driveLog: { km: "~430 km", stops: 7, driveTime: "~6 óra", depart: "08:00", arrive: "~21:30", timelinePoints: [{time:"08:00", label:"Mývatn ind."}, {time:"10:30", label:"Húsavík / Goðafoss"}, {time:"14:30", label:"Akureyri"}, {time:"21:30", label:"Varmahlíð / nyugat"}] },
          character: "A fordított kör utolsó nagy északi napja. Itt dől el, hogy a Húsavík-bálnales kap-e elsőbbséget, vagy inkább feszesen nyugat felé húztok, hogy a másnapi Snæfellsnes ne váljon brutális etappá.",
          rainNote: { icon: "🟡", label: "Esős? Vegyes — Goðafoss és Mývatn jó, Húsavík bálnales szélben gyengül." },
          tags: [
            { label: "Akureyri", cls: "tag-city" },
            { label: "Húsavík opció", cls: "tag-open" },
            { label: "nyugat felé", cls: "tag-drive" }
          ],
          activities: [
            { time: "reggel", icon: "🐋", name: "Húsavík bálnales vagy szárazföldi Mývatn-zárás", detail: "Ha a tengeri idő jó és foglaltatok, Húsavík erős opció. Rossz időben inkább maradjon a szárazföld." },
            { time: "déltáj", icon: "💧", name: "Goðafoss + Akureyri", detail: "A Ring Road egyik legjobb kombinációja: rövid vízesés és könnyű városi ebédblokk." },
            { time: "délután / este", icon: "🚗", name: "Nyugat felé húzás", detail: "A cél, hogy a másnapi Snæfellsneshez már ne Mývatn-közeli távolságból induljatok." }
          ],
          notes: ["A bálnales csak jó tengeri időben jó döntés; szélben és esőben sokkal jobb a szárazföldi opció.", "A tunnel.is fizetős alagút-regisztrációra itt már figyeljetek, ha az akureyri oldalon használjátok.", "A cél nem a teljes kimerülés, hanem hogy a nyugati zárónap még élvezhető maradjon.", "Ha csúszik a nap, Akureyri legyen rövidebb, ne a másnapi Snæfellsnes rovására menjen."],
          links: [
            { label: "Goðafoss", url: "https://www.google.com/maps/place/?q=place_id:ChIJnzYfSGp-zUgROx0NTqrNu34" },
            { label: "Akureyrarkirkja", url: "https://www.google.com/maps/place/?q=place_id:ChIJ6dYm-A6P0kgRIIlv_h0HSBk" },
            { label: "Húsavík bálnales", url: "https://www.google.com/maps/place/?q=place_id:ChIJyaLoTRVCzUgRESZcNE744Go" }
          ],
          gpxPlaces: [
            { name: "Húsavík", badge: "opcionális bálnales", googleRating: "4.7", duration: "3–4 óra", detail: "Csak jó idő és előfoglalás esetén ez legyen a fő döntés.", maps: "https://www.google.com/maps/search/?api=1&query=H%C3%BAsav%C3%ADk+Iceland" },
            { name: "Goðafoss", badge: "főpont", googleRating: "4.8", duration: "30–45 perc", detail: "A nyugatra fordulás előtti utolsó nagy északi vízesés.", maps: "https://www.google.com/maps/search/?api=1&query=Go%C3%B0afoss+Iceland" },
            { name: "Akureyri", badge: "városblokk", googleRating: "4.5", duration: "90–150 perc", detail: "Rövid, jól használható északi városi pufferpont ebédhez és tankoláshoz.", maps: "https://www.google.com/maps/search/?api=1&query=Akureyri+Iceland" },
            { name: "Glaumbær", badge: "opcionális plusz", duration: "45–60 perc", detail: "Ha kulturális megálló kell az úton nyugat felé, ez a legjobb rövid jelölt.", maps: "https://www.google.com/maps/search/?api=1&query=Glaumb%C3%A6r+Iceland" },
            { name: "Varmahlíð / Hvammstangi környéki szállás", badge: "szállás", detail: "A Snæfellsnes másnapi zárásához itt érdemes nyugatra húzni az éjszakát.", maps: "https://www.google.com/maps/search/?api=1&query=Varmahl%C3%AD%C3%B0+Iceland+hotel" }
          ]
        },
        {
          num: "7",
          date: "2026. július 25., szombat",
          title: "Snæfellsnes + visszazárás Reykjavík / KEF felé",
          subtitle: "Nyugati finálé Kirkjufell-lel és esti reptérközeli zárással",
          driveLog: { km: "~500 km", stops: 8, driveTime: "~7,5 óra", depart: "07:00", arrive: "~21:30", timelinePoints: [{time:"07:00", label:"Varmahlíð ind."}, {time:"11:30", label:"Borgarnes"}, {time:"14:00", label:"Arnarstapi"}, {time:"18:30", label:"Kirkjufell"}, {time:"21:30", label:"KEF körzet"}] },
          character: "A fordított kör egyik ára, hogy Snæfellsnes a legvégére kerül. Cserébe fotós értelemben gyönyörű nyugati finálé lesz: Búðakirkja, Arnarstapi, Lóndrangar és Kirkjufell egymás után, majd esti visszazárás Reykjavík / Keflavík felé, hogy a másnapi FI306 nyugodt maradjon.",
          rainNote: { icon: "🔴", label: "Esős? Ez a legérzékenyebb teljes nap — ködben rövidítsd a nyugati kört." },
          tags: [
            { label: "Snæfellsnes", cls: "tag-focus" },
            { label: "Kirkjufell", cls: "tag-focus" },
            { label: "KEF zárás", cls: "tag-flight" }
          ],
          activities: [
            { time: "délelőtt", icon: "🚗", name: "Borgarnes → Búðakirkja → Arnarstapi", detail: "A félsziget fő fotós és parti ívét érdemes a nap első felére rakni." },
            { time: "délután", icon: "🐦", name: "Lóndrangar / Djúpalónssandur / Kirkjufell", detail: "Puffinok, bazaltkürtők és a nyugati finálé legismertebb hegye." },
            { time: "este", icon: "✈", name: "Visszazárás Reykjavík / KEF felé", detail: "Az utolsó teljes nap végén már a hajnali autóleadás logikája számít, nem egy újabb city stop." }
          ],
          notes: ["Ha zárt a nyugati idő, rövidítsétek a napot: Búðakirkja + Arnarstapi + Kirkjufell mag és kész.", "Borgarnes az utolsó kényelmes nagy bevásárló / tankoló pont a félsziget előtt és után is.", "A repülés előtti este már ne akarjatok túl sok plusz Reykjanes-kitérőt, az érkezési napon ezeket már megkaptátok.", "A cél az, hogy éjjel ne kelljen már komoly szervezéssel foglalkozni; a másnapi FI306 miatt a súrlódásmentes zárás fontosabb, mint még egy extra megálló."],
          links: [
            { label: "Búðakirkja", url: "https://www.google.com/maps/place/?q=place_id:ChIJv8Ug4gN_1UgRtUn7cmhYLgc" },
            { label: "Arnarstapi", url: "https://www.google.com/maps/place/?q=place_id:ChIJlyAzMgiBKkkRUfLoebLqwz8" },
            { label: "Lóndrangar", url: "https://www.google.com/maps/place/?q=place_id:ChIJr2DJE5WHKkkRKiuUjICGmXk" },
            { label: "Kirkjufell", url: "https://www.google.com/maps/place/?q=place_id:ChIJhw_Xjat71UgRe9sxd6VbtAk" }
          ],
          gpxPlaces: [
            { name: "Borgarnes", badge: "tankolás + tartalék", duration: "25–35 perc", detail: "Itt még lehet korrigálni a napot, mielőtt teljesen ráfordultok a félszigetre.", maps: "https://www.google.com/maps/search/?api=1&query=Borgarnes+Iceland" },
            { name: "Búðakirkja", badge: "fotópont", googleRating: "4.5", duration: "20–25 perc", detail: "A fekete templom a nyugati kör egyik legerősebb képe.", maps: "https://www.google.com/maps/search/?api=1&query=B%C3%BA%C3%B0akirkja+Iceland" },
            { name: "Arnarstapi → Hellnar", badge: "parti séta", googleRating: "4.4", duration: "60–90 perc", detail: "Bazaltpart, puffinok és a nap legjobb aktív szakasza.", maps: "https://www.google.com/maps/search/?api=1&query=Arnarstapi+Hellnar+walk" },
            { name: "Lóndrangar", badge: "puffin + fotó", googleRating: "4.5", duration: "20–30 perc", detail: "A sziklafalakon júliusban még simán lehet lundát találni.", maps: "https://www.google.com/maps/search/?api=1&query=L%C3%B3ndrangar+Iceland" },
            { name: "Kirkjufell + Kirkjufellsfoss", badge: "finálé", googleRating: "4.6", duration: "45–60 perc", detail: "A nyugati kör záró ikonja, lehetőleg jobb esti fényben.", maps: "https://www.google.com/maps/search/?api=1&query=Kirkjufell+Iceland" },
            { name: "Reykjavík / KEF közeli szállás", badge: "utolsó éj", detail: "Az utolsó este már a másnapi autóleadás és FI306 miatt praktikus helyen legyen.", maps: "https://www.google.com/maps/search/?api=1&query=Keflavik+Airport+hotel" }
          ]
        },
        {
          num: "8",
          date: "2026. július 26., vasárnap",
          title: "Távozás",
          subtitle: "Autóleadás, tankolás, hajnal",
          driveLog: { km: "~8–15 km (KEF körzet)", stops: 3, driveTime: "~15–20 perc", depart: "~04:45 hotel", arrive: "07:35 FI306", timelinePoints: [{time:"04:45", label:"hotel ind."}, {time:"04:55", label:"utolsó tankolás"}, {time:"05:10", label:"autóleadás"}, {time:"05:30", label:"KEF terminál"}, {time:"07:35", label:"FI306 ✈"}] },
          tags: [
            { label: "reptér", cls: "tag-flight" },
            { label: "FI306 · 07:35", cls: "tag-flight" },
            { label: "autóleadás", cls: "tag-focus" }
          ],
          activities: [
            { time: "~04:45", icon: "🚗", name: "Indulás a reptérközeli szállásról", detail: "KEF környéki hotelből hajnalban induljatok, hogy a tankolás + leadás + check-in együtt is kényelmes maradjon. A cél az, hogy legkésőbb 05:30 körül már a terminálnál legyetek." },
            { time: "~04:55", icon: "⛽", name: "Utolsó tankolás", detail: "N1 vagy Olís a reptér mellett, mielőtt visszaadjátok az autót. Ezt ne hagyjátok az utolsó 5 percre, mert hajnalban is lehet kisebb sor." },
            { time: "~05:10", icon: "🚗", name: "Autóleadás", detail: "Ellenőrizzétek még előző este, hogy van-e 24/7 kulcsleadás vagy mikor nyit a kölcsönző. Fotózzátok körbe a kocsit leadás előtt is." },
            { time: "~05:30", icon: "🛂", name: "Érkezés a KEF terminálhoz", detail: "A 07:35-ös Icelandair FI306 előtt ez egy jó, biztonságos reptéri érkezési idő. Júliusban a check-in és security együtt simán elvihet 1,5–2 órát." },
            { time: "07:35", icon: "✈", name: "Icelandair FI306 — KEF → ARN", detail: "Reykjavík / Keflavík → Stockholm / Arlanda, 07:35 → 12:45 helyi idő szerint. Innen fordul át az út a stockholmi közös hazaúti szakaszba." }
          ],
          notes: ["A hajnali szakasz legyen minél súrlódásmentesebb: előző este legyen kész a pakolás, a passportok és a bérautós papírok külön kirakva.", "A 07:35-ös FI306-hoz célozzátok meg a kb. 05:30-as terminálérkezést; ezzel marad puffer leadásra, check-inre és securityre is.", "Az autóleadás és a tankolás sorrendje ne cserélődjön fel: előbb tank, utána leadás.", "Ha a kölcsönző shuttle-t használ, annak idejét külön számoljátok bele a hajnalba."],
          gpxPlaces: [
            { name: "KEF reptér", badge: "leadás + indulás", detail: "Bérautó-visszaadás, check-in és a közös izlandi szakasz lezárása.", maps: "https://www.google.com/maps/search/?api=1&query=Keflav%C3%ADk+Airport" },
            { name: "N1 / Olís a reptér mellett", badge: "utolsó tankolás", detail: "Érdemes erre külön időt hagyni, ne a leadásnál csússzon el a hajnal.", maps: "https://www.google.com/maps/search/?api=1&query=N1+Keflavik+Airport" },
            { name: "Autóleadási logisztika", badge: "ellenőrzendő", detail: "24/7 kulcsleadás vagy nyitási idő ellenőrzése még előző este legyen kész.", maps: "https://www.google.com/maps/search/?api=1&query=Keflavik+car+rental+return" }
          ]
        }
      ]
    },
    izland2: {
      kicker: "Közös részletes roadtrip",
      title: "Izland",
      pill: "Fordított Ring Road · 8 nap",
      accent: "iceland",
      intro: [
        "A közös izlandi Ring Road körút: fordított (óramutatóval ellentétes) irányban, ahol már az érkezés utáni első napon a Golden Circle jön, és így minden napra jut egy laza kör, pihenőnap nélkül. 8 éjszaka, ~1950 km (a kitérőkkel), 7 szállás-zóna, 46 megálló.",
        "A térkép valódi úthálózaton (OSRM) rajzolja ki a teljes kört; a megállók napszínnel és látnivaló-ikonnal jelölve, a szállások a hely nevével és 🏨 ikonnal. Lejjebb a napi bontásban minden nap kinyitható a teljes részletért."
      ],
      mapNote: "Óramutatóval ellentétes irány (déli part először). A markerek napszín szerint, az ikon a látnivaló jellegét mutatja (💧 vízesés, 🧊 gleccser, 🏖️ strand, ♨️ geotermikus, 📸 fotópont…), a 🏨 az éjszakai szállás. Szűrj nap vagy típus szerint, a sarokban lévő ⤢ gombbal pedig visszaállhatsz a teljes nézetre.",
      days: [
        {
          num: "1",
          date: "2026. július 18., szombat",
          title: "Érkezés – Keflavík",
          subtitle: "Leszállás, autóátvétel, első éjszaka a reptér mellett",
          mapColor: "#5eead4",
          driveLog: { km: "~40 km", stops: 3, driveTime: "~40 perc", depart: "18:25", arrive: "~22:30", timelinePoints: [{time:"18:25", label:"KEF leszállás"}, {time:"19:15", label:"Gunnuhver"}, {time:"20:00", label:"Brimketill"}, {time:"22:00", label:"Keflavík szállás"}] },
          character: "Rövid logisztikai nap, de a Reykjanes-félsziget pár apró csodája belefér: leszállás 18:25-kor, autóátvétel, és máris ott a Gunnuhver fortyogó geotermikus mezeje és a Brimketill lávamedence — mind 5–10 percre a reptértől. Júliusban éjfélkor is világos van, így nyugodtan belefér az esti kör a Bónus-bevásárlás és a reptér melletti szállás előtt. Ha nagyon fáradtak vagytok, a Reykjanes-pontok kihagyhatók.",
          tags: [
            { label: "érkezés", cls: "tag-flight" },
            { label: "Reykjanes", cls: "tag-focus" },
          ],
          activities: [
            { time: "18:25", icon: "✈", name: "Leszállás Keflavíkon", detail: "Icelandair érkezés után autóátvétel, kb. 45 perc az egész folyamat." },
            { time: "~19:15", icon: "🌋", name: "Reykjanes esti kör (opcionális)", detail: "Gunnuhver geotermikus mező + Brimketill lávamedence — 5–10 percre a reptértől, a nyári világosban kényelmes." },
            { time: "este", icon: "🛒", name: "Bónus + Keflavík szállás", detail: "Bevásárlás indulás előtt (kint drágább), majd reptér melletti, sötétíthető szállás." }
          ],
          notes: ["A Reykjanes-pontok mind a reptér közelében, 5–10 percre vannak — csak fél órát adnak az estéhez, és kihagyhatók, ha fáradtak vagytok.", "Júliusban éjfélkor is világos van — ne feszülj rá a korai alvásra.", "Autóátvételnél fotózd körbe a karcokat, üveget, lökhárítót — a kavics- és szélkár Izlandon gyakori.", "A kutaknál PIN-kód kell, kontaktless nem mindenhol megy."],
          gpxPlaces: [
            { name: "Gunnuhver geotermikus mező", time: "19:15", kind: "geothermal", googleRating: "4.5", badge: "opcionális este", duration: "20 perc", lat: 63.8267, lng: -22.6844, detail: "Izland legnagyobb forróiszap-forrása fa stégekről, 5 percre a reptértől.", reviewNote: "Ingyenes, kis parkoló közvetlenül a stégeknél. A kénszag erős és a gőz eltakarhatja a kilátást — szeles időben állj a szél felőli oldalra.", maps: "https://www.google.com/maps/search/?api=1&query=63.8267,-22.6844" },
            { name: "Brimketill lávamedence", time: "20:00", kind: "photo", googleRating: "4.6", badge: "opcionális este", duration: "15–20 perc", lat: 63.8199, lng: -22.5574, detail: "Természetes lávamedence az óceán hullámaiban, kilátóplatóval.", reviewNote: "Kis ingyenes parkoló a 425-ös út mellett, 5 perc séta a platóra. A korláton túl SOHA ne menj le — a hullámok kiszámíthatatlanok és elsodornak.", maps: "https://www.google.com/maps/search/?api=1&query=63.8199,-22.5574" },
            { name: "Keflavík", time: "22:00", kind: "stay", badge: "szállás-zóna", t: "ov", lat: 63.9997549, lng: -22.5582716, detail: "Leszállás 18:25, autóbérlés, első éjszaka a reptér mellett.", reviewNote: "A reptér körüli szállások csendesek és sötétíthetők. Tankolj az N1 Hafnargata kúton (24/7) — a kör végén ugyaninnen indul majd az autó-leadás is.", maps: "https://www.google.com/maps/search/?api=1&query=63.9997549,-22.5582716" }
          ]
        },
        {
          num: "2",
          date: "2026. július 19., vasárnap",
          title: "Golden Circle",
          subtitle: "Klasszikus nyitónap: Þingvellir, gejzírek, Gullfoss → Hella",
          mapColor: "#60a5fa",
          driveLog: { km: "~250 km", stops: 6, driveTime: "~4 óra", depart: "08:00", arrive: "19:30", timelinePoints: [{time:"08:00", label:"Reykjavík ind."}, {time:"10:30", label:"Þingvellir"}, {time:"12:30", label:"Geysir"}, {time:"14:00", label:"Gullfoss"}, {time:"16:00", label:"Kerið"}, {time:"19:30", label:"Hella"}] },
          character: "A kör nyitónapja a klasszikus Golden Circle: séta a két tektonikai lemez közt Þingvellirben, a Strokkur gejzír kitörése, és a hatalmas kétlépcsős Gullfoss. Estére a déli part kapujába, Hella / Hvolsvöllur környékére érkeztek.",
          tags: [
            { label: "Golden Circle", cls: "tag-focus" }
          ],
          activities: [
            { time: "reggel", icon: "🚗", name: "Indulás Reykjavíkból", detail: "Korai start a klasszikus Golden Circle felé." },
            { time: "délelőtt", icon: "🌋", name: "Þingvellir + Strokkur", detail: "UNESCO hasadékvölgy, majd a gejzír 5–8 percenkénti kitörése." },
            { time: "délután", icon: "💦", name: "Gullfoss → Hella", detail: "A hatalmas vízesés, majd átvezetés a déli part kapujába." }
          ],
          notes: ["Þingvellirben a parkolás fizetős (P1/P2 parkoló).", "Strokkur 5–8 percenként tör ki — türelem, és figyelj a szél irányára.", "Hella / Hvolsvöllur sok farmstay-jel jó kiindulás a déli parthoz — foglalj előre."],
          gpxPlaces: [
            { name: "Þingvellir Nemzeti Park", time: "10:30", kind: "park", googleRating: "4.7", badge: "UNESCO", duration: "60–90 perc", lat: 64.2821725, lng: -21.0764491, detail: "Séta a két kontinens lemeze közt. Parkolás fizetős.", reviewNote: "A P1 parkoló (750 ISK, kártyával) esik legközelebb az Almannagjá-hasadékhoz. Reggel 9 előtt vagy 17 után a legkevésbé zsúfolt; a fő ösvény végig könnyű.", maps: "https://www.google.com/maps/search/?api=1&query=64.2821725,-21.0764491" },
            { name: "Geysir-mező (Strokkur)", time: "12:30", kind: "geothermal", googleRating: "4.7", badge: "gejzírmező", duration: "40–60 perc", lat: 64.3127094, lng: -20.300721, detail: "A Haukadalur geotermikus mezőn több gejzír van egy helyen: a Strokkur 5–8 percenként tör ki 20–30 m-re (a fő látvány), mellette az eredeti Nagy Geysir (innen a »gejzír« szó — ma jórészt szunnyad), a kisebb Litli Geysir és Smiður, valamint a kék Blesi forró forrás. Ingyenes, egyetlen ingyenes gejzír-helyszín a körön.", reviewNote: "Ingyenes parkoló a látogatóközpontnál, onnan 5 perc. Állj a Strokkur szélárnyékos oldalára, hogy a forró permet ne csapjon meg kitöréskor.", maps: "https://www.google.com/maps/search/?api=1&query=64.3127094,-20.300721" },
            { name: "Gullfoss", time: "15:00", kind: "waterfall", googleRating: "4.8", badge: "vízesés", duration: "30–45 perc", lat: 64.3270716, lng: -20.1199478, detail: "Hatalmas kétlépcsős vízesés. Felső + alsó nézőpont.", reviewNote: "Két parkoló: a felső kilátóhoz a felső, a vízközelhez az alsó — mindkettő ingyenes. A felső teraszról van a klasszikus kép, az alsó ösvény permetez, esőkabát jól jön.", maps: "https://www.google.com/maps/search/?api=1&query=64.3270716,-20.1199478" },
            { name: "Kerið krátertó", time: "16:30", kind: "photo", googleRating: "4.6", badge: "krátertó", duration: "30–40 perc", lat: 64.0411, lng: -20.8855, detail: "Vörös vulkáni kráter türkiz tóval, körbejárható peremmel — Gullfoss után, Hella felé útba esik.", reviewNote: "400 ISK belépő a parkolónál (kp/kártya). A peremi kör ~20 perc, a tóhoz is le lehet sétálni — kényelmes cipő elég.", maps: "https://www.google.com/maps/search/?api=1&query=64.0411,-20.8855" },
            { name: "Friðheimar paradicsomfarm", time: "13:30", kind: "town", googleRating: "4.6", badge: "ebéd · foglalós", duration: "60–75 perc", lat: 64.0436, lng: -20.6589, detail: "Paradicsom-üvegház étterem: paradicsomleves korlátlan kenyérrel, mellette izlandi lovak bemutatója.", reviewNote: "KÖTELEZŐ asztalfoglalás (fridheimar.is) — előfoglalás nélkül ritkán van hely. Tökéletes ebédmegálló Geysir és Gullfoss között.", maps: "https://www.google.com/maps/search/?api=1&query=64.0436,-20.6589" },
            { name: "Hella / Hvolsvöllur", time: "19:30", kind: "stay", badge: "szállás-zóna", t: "ov", lat: 63.833, lng: -20.396, detail: "Jó kiindulás a déli parthoz, sok farmstay.", reviewNote: "Sok farmstay és vendégház — júliusra foglalj előre. Jó pozíció: innen 30–40 perc Seljalandsfoss, reggel könnyű indulni a déli partra.", maps: "https://www.google.com/maps/search/?api=1&query=63.833,-20.396" }
          ]
        },
        {
          num: "3",
          date: "2026. július 20., hétfő",
          title: "Déli part – vízesések",
          subtitle: "Seljalandsfoss, Skógafoss, Reynisfjara, Vík → Kirkjubæjarklaustur",
          mapColor: "#a78bfa",
          driveLog: { km: "~175 km", stops: 7, driveTime: "~3 óra", depart: "08:00", arrive: "20:00", timelinePoints: [{time:"08:00", label:"Hella ind."}, {time:"09:30", label:"Seljalandsfoss"}, {time:"11:30", label:"Skógafoss"}, {time:"14:00", label:"Dyrhólaey"}, {time:"15:30", label:"Reynisfjara"}, {time:"20:00", label:"Kirkjubæjarklaustur"}] },
          character: "A déli part vízesés-napja: Seljalandsfoss mögé be lehet sétálni, Skógafoss 60 méteres fala, és a Reynisfjara fekete bazaltstrand. Vík az utolsó nagyobb bolt egy darabig, estére Kirkjubæjarklaustur.",
          tags: [
            { label: "vízesések", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "💧", name: "Seljalandsfoss + Skógafoss", detail: "Mögé sétálható vízesés, majd a 60 méteres Skógafoss a 400 lépcsős panorámával." },
            { time: "délután", icon: "🖤", name: "Reynisfjara + Vík", detail: "Bazaltoszlopos fekete strand, majd tankolás-ebéd Víkben." },
            { time: "este", icon: "🛏", name: "Kirkjubæjarklaustur", detail: "Apró falu, jó pozíció a gleccserekhez — korlátozott szállás." }
          ],
          notes: ["⚠️ Reynisfjara: a »sneaker wave« életveszélyes — NE menj közel a vízhez!", "Seljalandsfoss mögé esőkabát kell; mellette a rejtett Gljúfrabúi is megéri.", "Vík: tankolás, ebéd, utolsó nagyobb bolt — Kirkjubæjarklaustur apró falu, foglalj szállást előre.", "🐦 Dyrhólaey a déli part legjobb puffin-helye júliusban — 16:00 után aktívabbak a madarak; a felső parkolóhoz meredek murvás út visz."],
          gpxPlaces: [
            { name: "Seljalandsfoss", time: "09:30", kind: "waterfall", googleRating: "4.7", badge: "vízesés", duration: "40–60 perc", lat: 63.6156232, lng: -19.9885688, detail: "Mögé lehet sétálni! Esőkabát kell. Mellette a rejtett Gljúfrabúi.", reviewNote: "700 ISK parkoló (kártyával). A mögötte vezető ösvény csúszós és permetez — vízhatlan kabát és cipő kell. A jegy Gljúfrabúira is jó.", maps: "https://www.google.com/maps/search/?api=1&query=63.6156232,-19.9885688" },
            { name: "Gljúfrabúi", time: "10:00", kind: "waterfall", googleRating: "4.7", badge: "rejtett vízesés", duration: "20–30 perc", lat: 63.6217, lng: -19.9889, detail: "Sziklahasadékba rejtett vízesés Seljalandsfosstól ~600 m-re — be lehet gázolni a kapuján.", reviewNote: "Ugyanaz a parkoló, mint Seljalandsfossnál, 10 perc séta. A sziklarésbe belépve bőrig ázol — vízhatlan ruha és tok a telefonra kötelező.", maps: "https://www.google.com/maps/search/?api=1&query=63.6217,-19.9889" },
            { name: "Skógafoss", time: "11:30", kind: "waterfall", googleRating: "4.8", badge: "vízesés", duration: "40–60 perc", lat: 63.5320523, lng: -19.5113706, detail: "60 m magas. 527 lépcső a tetejére a panorámáért.", reviewNote: "Ingyenes parkoló. A tetejére 527 lépcső visz; lent a permetben gyakran szivárvány. Korán vagy késő délután a legkevésbé zsúfolt.", maps: "https://www.google.com/maps/search/?api=1&query=63.5320523,-19.5113706" },
            { name: "Dyrhólaey", time: "14:00", kind: "photo", puffin: true, googleRating: "4.7", badge: "puffin + kilátó", duration: "30–45 perc", lat: 63.4006, lng: -19.1283, detail: "Tengeri kőkapu és világítótorony, fentről a fekete part panorámája. Júliusban puffinok.", reviewNote: "A felső parkolóhoz keskeny, meredek murvás út visz (2WD-vel óvatosan); 16:00 után a puffinok aktívabbak. Fészkelési időszakban néha lezárják — tábla jelzi.", maps: "https://www.google.com/maps/search/?api=1&query=63.4006,-19.1283" },
            { name: "Reynisfjara fekete strand", time: "15:30", kind: "beach", googleRating: "4.6", badge: "fekete strand", duration: "30–45 perc", lat: 63.4142559, lng: -19.0104132, detail: "Bazaltoszlopok. FIGYELEM: a »sneaker wave« életveszélyes, ne menj a vízhez!", reviewNote: "Ingyenes parkoló kávézóval. ⚠️ A »sneaker wave« életveszélyes és évente szed áldozatot — maradj jó messze a víztől, sose fordíts hátat a hullámoknak.", maps: "https://www.google.com/maps/search/?api=1&query=63.4142559,-19.0104132" },
            { name: "Vík í Mýrdal", time: "16:45", kind: "town", googleRating: "4.6", badge: "ebéd + tankolás", duration: "45–60 perc", lat: 63.4176505, lng: -18.9974395, detail: "Tankolás, ebéd, templom. Utolsó nagyobb bolt egy darabig.", reviewNote: "Az utolsó nagy bolt (Krónan) és N1 kút egy darabig — tankolj és vásárolj be itt. A templomtól van a klasszikus kilátás a Reynisdrangar-sziklákra.", maps: "https://www.google.com/maps/search/?api=1&query=63.4176505,-18.9974395" },
            { name: "Kirkjubæjarklaustur", time: "20:00", kind: "stay", badge: "szállás-zóna", t: "ov", lat: 63.789, lng: -18.058, detail: "Apró falu, jó pozíció a gleccserekhez. Korlátozott szállás — foglalj!", reviewNote: "Apró falu, kevés szállás — júliusra foglalj jó előre. Van N1 kút és kis bolt; jó kiindulás reggel a gleccserekhez.", maps: "https://www.google.com/maps/search/?api=1&query=63.789,-18.058" }
          ]
        },
        {
          num: "4",
          date: "2026. július 21., kedd",
          title: "Gleccserek és jéghegyek",
          subtitle: "Skaftafell, Jökulsárlón, Gyémánt-part → Höfn",
          mapColor: "#f472b6",
          driveLog: { km: "~230 km", stops: 7, driveTime: "~3,5 óra", depart: "07:30", arrive: "20:30", timelinePoints: [{time:"07:30", label:"Klaustur ind."}, {time:"08:15", label:"Fjaðrárgljúfur"}, {time:"10:00", label:"Skaftafell"}, {time:"13:00", label:"Jökulsárlón"}, {time:"15:00", label:"Gyémánt-part"}, {time:"20:30", label:"Höfn"}] },
          character: "Az út csúcspontja: a Vatnajökull-gleccser, a Jökulsárlón úszó jéghegyei fókákkal, és a szemközti Gyémánt-part, ahol jégdarabok ragyognak a fekete homokon. Estére Höfn, a langusztafalu.",
          tags: [
            { label: "Jökulsárlón", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "🏔", name: "Skaftafell (Vatnajökull NP)", detail: "Svartifoss-túra (~1,5 ó) a bazaltoszlopos vízeséshez." },
            { time: "délután", icon: "🧊", name: "Jökulsárlón + Gyémánt-part", detail: "Úszó jéghegyek, fókák, csónaktúra — szemben a ragyogó jégdarabok." },
            { time: "este", icon: "🦞", name: "Höfn", detail: "Halászfalu, híres a langusztáról (humar) — vacsorára ajánlott." }
          ],
          notes: ["Skaftafell: a Svartifoss-túra ~1,5 óra a bazaltoszlopos vízeséshez; gleccsertúrák is innen indulnak.", "Jökulsárlón: csónaktúra előre foglalható — az út egyik legerősebb élménye.", "Höfn híres a langusztáról (humar) — vacsorára ajánlott!", "🐦 Ingólfshöfði (Hofsnes-tanyától, opcionális traktoros túra) intim puffin- és skua-élmény — csak előfoglalással, és fél napot elvisz, szóval mérlegeld a gleccsernap mellett."],
          gpxPlaces: [
            { name: "Fjaðrárgljúfur", time: "08:15", kind: "photo", googleRating: "4.7", badge: "kanyon", duration: "45–60 perc", lat: 63.7714, lng: -18.1723, detail: "100 m mély, kígyózó mohás kanyon peremi ösvénnyel — Kirkjubæjarklaustur mellett, jó reggeli nyitókép.", reviewNote: "Ingyenes parkoló, a felső ösvény ~40 perc oda-vissza. Sáros eső után csúszós; a korlátokon belül maradj, a perem omlékony. Korán nincs tömeg.", maps: "https://www.google.com/maps/search/?api=1&query=63.7714,-18.1723" },
            { name: "Skaftafell (Vatnajökull NP)", time: "10:00", kind: "park", googleRating: "4.7", badge: "gleccser + túra", duration: "1,5–2 óra", lat: 64.070414, lng: -16.9751755, detail: "Svartifoss-túra (~1,5 ó) a bazaltoszlopos vízeséshez. Gleccsertúrák is innen.", reviewNote: "750 ISK/nap parkoló a látogatóközpontnál. A Svartifoss-túra ~1,5–2 óra oda-vissza, közepes emelkedő — jó cipő kell. Gleccsertúrák innen, előfoglalással.", maps: "https://www.google.com/maps/search/?api=1&query=64.070414,-16.9751755" },
            { name: "Ingólfshöfði", time: "11:30", kind: "photo", puffin: true, googleRating: "4.8", badge: "puffin · opcionális túra", duration: "2,5–3 óra (traktoros túra)", lat: 63.8083, lng: -16.6356, detail: "Magányos hegyfok-rezervátum a Hofsnes-tanyától traktor-utánfutós túrával — sok puffin és nagy halfarkas (skua) fészkel itt.", reviewNote: "Csak előre foglalt vezetett túrával (~2,5–3 óra, a Hofsnes-tanyától indul). Nem »gyors megálló« — ha a puffin a cél, ez a legintimebb élmény; különben Dyrhólaey gyorsabb. Apály/dagálytól független.", maps: "https://www.google.com/maps/search/?api=1&query=Ing%C3%B3lfsh%C3%B6f%C3%B0i+Iceland" },
            { name: "Jökulsárlón gleccserlagúna", time: "14:00", kind: "glacier", googleRating: "4.8", badge: "fő látnivaló", duration: "60–90 perc", lat: 64.0784458, lng: -16.2305536, detail: "Úszó jéghegyek, fókák. Csónaktúra foglalható. Az út csúcspontja.", reviewNote: "Ingyenes parkoló mindkét oldalon. Csónaktúra (amphibian/zodiac) előfoglalással — júliusban gyorsan betelik. Fókákat a híd környékén keress.", maps: "https://www.google.com/maps/search/?api=1&query=64.0784458,-16.2305536" },
            { name: "Fjallsárlón", time: "15:30", kind: "glacier", googleRating: "4.7", badge: "kisebb lagúna", duration: "30–45 perc", lat: 64.0142, lng: -16.3808, detail: "Jökulsárlón csendesebb kistestvére, közelebbi gleccserfallal.", reviewNote: "Ingyenes parkoló, 5 perc séta a tóhoz. Sokkal kevésbé zsúfolt, mint Jökulsárlón — ha van idő, a kettő együtt a legjobb. A 998-as lehajtón.", maps: "https://www.google.com/maps/search/?api=1&query=64.0142,-16.3808" },
            { name: "Gyémánt-part", time: "16:15", kind: "glacier", googleRating: "4.7", badge: "fotópont", duration: "30–45 perc", lat: 64.041061, lng: -16.1966881, detail: "Jégdarabok a fekete homokon, szemben a lagúnával.", reviewNote: "A Jökulsárlón parkolójából átsétálható. Reggel és naplementekor csillognak legszebben a jégdarabok a fekete homokon; a hullámoktól tartsd a távot.", maps: "https://www.google.com/maps/search/?api=1&query=64.041061,-16.1966881" },
            { name: "Höfn", time: "20:30", kind: "stay", badge: "szállás-zóna", t: "ov", lat: 64.2551913, lng: -15.2088449, detail: "Halászfalu, híres a languszta (humar). Vacsorára ajánlott!", reviewNote: "A langusztáról (humar) híres — vacsorára foglalj asztalt (Pakkhús, Humarhöfnin). Van nagyobb bolt és kút; jó feltöltő-pont a keleti szakasz előtt.", maps: "https://www.google.com/maps/search/?api=1&query=64.2551913,-15.2088449" }
          ]
        },
        {
          num: "5",
          date: "2026. július 22., szerda",
          title: "Keleti fjordok",
          subtitle: "Lassú tengerparti fjordút Djúpivoguron át → Egilsstaðir",
          mapColor: "#fb923c",
          driveLog: { km: "~200 km", stops: 4, driveTime: "~3,5 óra (lassú)", depart: "08:30", arrive: "19:30", timelinePoints: [{time:"08:30", label:"Höfn ind."}, {time:"09:15", label:"Vestrahorn"}, {time:"11:30", label:"Djúpivogur"}, {time:"14:30", label:"Petra (Stöðvarfj.)"}, {time:"19:30", label:"Egilsstaðir"}] },
          character: "Ma maga az út az élmény: kanyargós, csodaszép keleti fjord-szakasz. Kevés megálló, lassú tempó, rénszarvas-esély. Djúpivogur békés halászfalu félúton, estére Egilsstaðir.",
          tags: [
            { label: "fjordok", cls: "tag-focus" }
          ],
          activities: [
            { time: "reggel", icon: "🚗", name: "Indulás Höfnből", detail: "Lassú, panorámás fjordút indul — ma az út maga az élmény." },
            { time: "délben", icon: "⚓", name: "Djúpivogur", detail: "Békés halászfalu, megálló a fjordok közt. Rénszarvas-esély." },
            { time: "este", icon: "🛏", name: "Egilsstaðir", detail: "Kelet-Izland központja — tankolás, bolt, éjszakai megálló." }
          ],
          notes: ["Lassan vezess — a fjordút keskeny és kanyargós, de a panoráma végig fantasztikus.", "Rénszarvasra számíts az útszéleken a keleti országrészben.", "Egilsstaðir Kelet-Izland központja — tankolás, bolt, jó éjszakai megálló."],
          gpxPlaces: [
            { name: "Vestrahorn (Stokksnes)", time: "09:15", kind: "photo", googleRating: "4.8", badge: "hegy + fotó", duration: "45–60 perc", lat: 64.2475, lng: -14.9747, detail: "Ikonikus tüskés hegy fekete homokdűnék felett, tükröződő lagúnával — Höfntől 15 perc.", reviewNote: "Magánterület: a Viking Café-nál ~900 ISK belépő (itt a vécé és kávé is). Apálykor a nedves homok tükröz a legszebben — érkezz reggel, mielőtt jönnek a buszok.", maps: "https://www.google.com/maps/search/?api=1&query=64.2475,-14.9747" },
            { name: "Djúpivogur", time: "11:30", kind: "town", googleRating: "4.5", badge: "halászfalu", duration: "30–45 perc", lat: 64.6585, lng: -14.2839, detail: "Békés halászfalu, megálló a fjordok közt. Rénszarvas-esély.", reviewNote: "Csendes halászfalu félúton — jó kávé- és vécé-megálló. A környéken néha rénszarvas legel; lassíts az útszéleken.", maps: "https://www.google.com/maps/search/?api=1&query=64.6585,-14.2839" },
            { name: "Petra kőgyűjtemény", time: "14:30", kind: "town", googleRating: "4.6", badge: "ásványkert", duration: "40–50 perc", lat: 64.8333, lng: -13.8889, detail: "Petra Sveinsdóttir élethosszig gyűjtött izlandi ásványai egy kertben, Stöðvarfjörðurben.", reviewNote: "Kis belépő (~2.000 ISK), kártyával. Kedves, hangulatos megálló a fjordok közt — esőben is jó program, mert részben fedett.", maps: "https://www.google.com/maps/search/?api=1&query=64.8333,-13.8889" },
            { name: "Egilsstaðir", time: "19:30", kind: "stay", badge: "szállás-zóna", t: "ov", lat: 65.2609232, lng: -14.3994394, detail: "Kanyargós, csodaszép tengerparti szakasz — maga az út az élmény. Lassan vezess.", reviewNote: "Kelet-Izland központja: nagy bolt, kutak, éttermek — tankolj és vásárolj, mert északnyugatra ritkulnak a kutak. Innen 27 km a szivárványos Seyðisfjörður, ha marad esti energia.", maps: "https://www.google.com/maps/search/?api=1&query=65.2609232,-14.3994394" }
          ]
        },
        {
          num: "6",
          date: "2026. július 23., csütörtök",
          title: "Mývatn + lagúna",
          subtitle: "Dettifoss, Hverir, Earth Lagoon, Goðafoss → Akureyri",
          mapColor: "#34d399",
          driveLog: { km: "~310 km", stops: 7, driveTime: "~4,5 óra", depart: "08:00", arrive: "20:30", timelinePoints: [{time:"08:00", label:"Egilsstaðir ind."}, {time:"10:30", label:"Dettifoss"}, {time:"12:30", label:"Hverir"}, {time:"14:00", label:"Earth Lagoon"}, {time:"16:30", label:"Dimmuborgir"}, {time:"17:30", label:"Goðafoss"}, {time:"20:30", label:"Akureyri"}] },
          character: "Geotermikus nap: Európa legerősebb vízesése (Dettifoss), a marsi Hverir sárkráterei, és a csendes Mývatn Nature Baths (Earth Lagoon) — olcsóbb és nyugodtabb, mint a Blue/Sky Lagoon. Záráskor Goðafoss és Akureyri.",
          tags: [
            { label: "Mývatn", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "💥", name: "Dettifoss + Hverir", detail: "Európa legerősebb vízesése (nyugati aszfaltos oldal), majd a marsi sárkráterek." },
            { time: "kora délután", icon: "♨", name: "Earth Lagoon", detail: "Mývatn Nature Baths — a csendesebb, olcsóbb lagúna. Foglalj előre!" },
            { time: "este", icon: "🏙", name: "Goðafoss → Akureyri", detail: "Az »Istenek vízesése«, majd Észak fővárosa éttermekkel." }
          ],
          notes: ["Dettifoss: a NYUGATI oldal aszfaltos — ezt vegyétek, a keleti murvás.", "Earth Lagoon (Mývatn Nature Baths): idősávos, ~7.500 ISK / 3 óra — foglalj előre!", "Akureyri Észak fővárosa: éttermek, kávézók, igazi város — jó hely pihenni."],
          gpxPlaces: [
            { name: "Dettifoss", time: "10:30", kind: "waterfall", googleRating: "4.7", badge: "vízesés", duration: "45–60 perc", lat: 65.8146662, lng: -16.384576, detail: "Európa legerősebb vízesése. Nyugati oldal = aszfalt.", reviewNote: "A NYUGATI oldal (862-es út, aszfalt) a könnyű megközelítés; a keleti murvás és sokszor zárt. Ingyenes parkoló, ~15 perc séta — a permet csúszóssá teszi a sziklát.", maps: "https://www.google.com/maps/search/?api=1&query=65.8146662,-16.384576" },
            { name: "Selfoss vízesés", time: "11:00", kind: "waterfall", googleRating: "4.6", badge: "vízesés", duration: "20–30 perc", lat: 65.8079, lng: -16.3868, detail: "Dettifoss szelídebb, széles testvére ugyanabból a parkolóból, 10 perc sétára felfelé.", reviewNote: "Ugyanaz a parkoló, mint Dettifossnál — kár kihagyni, sokak szerint szebb. Az ösvény köves, jó cipő kell.", maps: "https://www.google.com/maps/search/?api=1&query=65.8079,-16.3868" },
            { name: "Hverir (Námaskarð)", time: "12:30", kind: "geothermal", googleRating: "4.6", badge: "geotermikus", duration: "30–45 perc", lat: 65.6409144, lng: -16.8093111, detail: "Bugyogó sárkráterek, gőzölgő talaj, kénszag. Marsi táj.", reviewNote: "Ingyenes parkoló az 1-es út mellett. Maradj a kijelölt ösvényen — a kéreg vékony és a sár forró. A kénszag intenzív, érzékenyeknek sál segít.", maps: "https://www.google.com/maps/search/?api=1&query=65.6409144,-16.8093111" },
            { name: "Mývatn Nature Baths (Earth Lagoon)", time: "14:00", kind: "bath", googleRating: "4.5", badge: "fürdő", duration: "2–3 óra", lat: 65.6308946, lng: -16.8476117, detail: "A LAGÚNA. Csendesebb és olcsóbb, mint a Blue/Sky Lagoon. Foglalj előre!", reviewNote: "Idősávos jegy (~7.500 ISK/fő), foglalj online előre. Csendesebb és olcsóbb a Blue/Sky Lagoonnál; az esti világos ég itt különösen szép. Ezüst ékszert vedd le.", maps: "https://www.google.com/maps/search/?api=1&query=65.6308946,-16.8476117" },
            { name: "Dimmuborgir", time: "16:30", kind: "photo", googleRating: "4.5", badge: "lávalabirintus", duration: "45–60 perc", lat: 65.5906, lng: -16.9120, detail: "Bizarr fekete lávaoszlopok és -boltívek labirintusa, jelzett ösvényekkel.", reviewNote: "Ingyenes parkoló kávézóval. A »Kirkjan« kör ~30 perc, könnyű. Mývatn környékén júliusban sok a muslica (midge) — archáló jól jöhet.", maps: "https://www.google.com/maps/search/?api=1&query=65.5906,-16.9120" },
            { name: "Goðafoss", time: "17:30", kind: "waterfall", googleRating: "4.8", badge: "vízesés", duration: "30–40 perc", lat: 65.6827782, lng: -17.5501919, detail: "Az »Istenek vízesése«, széles patkó alak. A Ring Road mellett.", reviewNote: "Mindkét partról megnézhető, ingyenes parkolók a híd két oldalán. A nyugati oldal adja a klasszikus patkó-képet; közvetlenül a Ring Road mellett, gyors megálló.", maps: "https://www.google.com/maps/search/?api=1&query=65.6827782,-17.5501919" },
            { name: "Akureyri", time: "20:30", kind: "stay", badge: "szállás-zóna", t: "ov", lat: 65.6825509, lng: -18.0906858, detail: "Észak fővárosa — éttermek, kávézók, igazi város. Jó hely pihenni.", reviewNote: "Észak fővárosa: éttermek, kávézók, uszoda. A belvárosi parkolásnál parkolókorongot kell kirakni — a boltokban ingyen adnak. Jó hely egy nyugodt estére.", maps: "https://www.google.com/maps/search/?api=1&query=65.6825509,-18.0906858" }
          ]
        },
        {
          num: "7",
          date: "2026. július 24., péntek",
          title: "Észak → Snæfellsnes",
          subtitle: "Hosszú nyugati átvezetés Hvítserkurön át a félszigetre",
          mapColor: "#facc15",
          driveLog: { km: "~410 km", stops: 5, driveTime: "~5,5 óra", depart: "07:00", arrive: "21:30", timelinePoints: [{time:"07:00", label:"Akureyri ind."}, {time:"10:00", label:"Kolugljúfur"}, {time:"11:00", label:"Hvítserkur"}, {time:"14:00", label:"Grábrók"}, {time:"19:00", label:"Kirkjufell"}, {time:"21:30", label:"Grundarfjörður"}] },
          character: "A leghosszabb átvezető nap: északról a Snæfellsnes-félszigetre. Útközben Hvítserkur, a 15 méteres »sárkány«-szikla. A hosszú nyári estében már a Kirkjufellt fotózzátok, és Grundarfjörðurben alszotok a félsziget szívében.",
          tags: [
            { label: "Kirkjufell", cls: "tag-focus" }
          ],
          activities: [
            { time: "kora reggel", icon: "🚗", name: "Korai indulás Akureyriből", detail: "Ez a nap a leghosszabb vezetés — érdemes 7:00-kor indulni." },
            { time: "délelőtt", icon: "🐲", name: "Hvítserkur", detail: "15 m magas »sárkány«-szikla a tengerben. Murvás lehajtó." },
            { time: "este", icon: "🏔", name: "Kirkjufell + Grundarfjörður", detail: "Esti fény a leghíresebb csúcson, majd szállás a félsziget szívében." }
          ],
          notes: ["Korai indulás kell — ez a nap a leghosszabb vezetés (~400 km).", "Hvítserkur: murvás lehajtó, az apály-dagály figyelendő a szikla megközelítéséhez.", "Grundarfjörður a félsziget szívében — reggel friss fejjel jön a teljes Snæfellsnes-kör."],
          gpxPlaces: [
            { name: "Kolugljúfur", time: "10:00", kind: "waterfall", googleRating: "4.6", badge: "kanyon + vízesés", duration: "20–30 perc", lat: 65.3548, lng: -20.4530, detail: "Drámai kis kanyon vízeséssel, közvetlenül egy hídról nézhető — alig ismert, jó lábkinyújtó.", reviewNote: "Kis ingyenes parkoló a hídnál, 2 perc séta. Korlát nincs mindenhol — a perem csúszós, gyerekre figyelj. Tökéletes gyors megálló a hosszú napon.", maps: "https://www.google.com/maps/search/?api=1&query=65.3548,-20.4530" },
            { name: "Hvítserkur", time: "11:00", kind: "photo", googleRating: "4.5", badge: "fotópont", duration: "30–45 perc", lat: 65.6063761, lng: -20.6352441, detail: "15 m magas »sárkány«-szikla a tengerben. Murvás lehajtó.", reviewNote: "Murvás lehajtó (711-es út) a parkolóig; onnan meredek ösvény le a partra. Apálykor lehet a szikláig sétálni — dagálytáblázatot nézz előre, különben csak fentről látszik.", maps: "https://www.google.com/maps/search/?api=1&query=65.6063761,-20.6352441" },
            { name: "Grábrók kráter", time: "14:00", kind: "photo", googleRating: "4.6", badge: "kráter", duration: "30–40 perc", lat: 64.7707, lng: -21.5360, detail: "Könnyen megmászható salakkúp-kráter közvetlenül a Ring Road mellett, 360°-os panorámával.", reviewNote: "Ingyenes parkoló az 1-es út mellett; lépcsős ösvény fel ~15 perc. Szeles a tetején — kabát kell. Remek utolsó megálló Snæfellsnes előtt.", maps: "https://www.google.com/maps/search/?api=1&query=64.7707,-21.5360" },
            { name: "Kirkjufell (esti fény)", time: "19:00", kind: "photo", googleRating: "4.7", badge: "fotópont", duration: "45–60 perc", lat: 64.9398701, lng: -23.3064651, detail: "Megérkezel a félszigetre, és a hosszú nyári estében már fotózod a Kirkjufellt.", reviewNote: "A Kirkjufellsfoss parkolója 1.000 ISK (kamerás, ne hagyd ki — a bírság ~50 USD). A klasszikus kép a vízesés felől; estefelé arany fény és kevesebb tömeg.", maps: "https://www.google.com/maps/search/?api=1&query=64.9398701,-23.3064651" },
            { name: "Grundarfjörður", time: "21:30", kind: "stay", badge: "szállás-zóna", t: "ov", lat: 64.922, lng: -23.255, detail: "A félsziget szívében, hogy reggel friss fejjel jöjjön a teljes kör.", reviewNote: "Kis település Kirkjufell tövében — pár vendégház és bolt. Reggel innen frissen indul a teljes Snæfellsnes-kör, nem kell visszafelé autózni.", maps: "https://www.google.com/maps/search/?api=1&query=64.922,-23.255" }
          ]
        },
        {
          num: "8",
          date: "2026. július 25., szombat",
          title: "Snæfellsnes-kör → Reykjavík",
          subtitle: "Félsziget-kör, rövid Reykjavík → Keflavík az utolsó éjszakára",
          mapColor: "#f87171",
          driveLog: { km: "~330 km", stops: 8, driveTime: "~5 óra", depart: "07:30", arrive: "21:00", timelinePoints: [{time:"07:30", label:"Grundarfj. ind."}, {time:"09:00", label:"Djúpalónssandur"}, {time:"10:30", label:"Arnarstapi"}, {time:"12:00", label:"Búðakirkja"}, {time:"13:00", label:"Ytri-Tunga"}, {time:"17:00", label:"Reykjavík"}, {time:"21:00", label:"Keflavík"}] },
          character: "Záró kör a »kis Izland«-on: Djúpalónssandur fekete strand, a Lóndrangar bazalttornyok, Arnarstapi sziklaszínpada és a fekete Búðakirkja. Útban hazafelé rövid reykjavíki ízelítő, majd Keflavík az utolsó éjszakára a hajnali géphez.",
          tags: [
            { label: "Snæfellsnes", cls: "tag-focus" }
          ],
          activities: [
            { time: "délelőtt", icon: "🖤", name: "Snæfellsnes nyugati csúcs", detail: "Djúpalónssandur fekete strand, Lóndrangar tornyok, Arnarstapi sziklaszínpad." },
            { time: "dél", icon: "⛪", name: "Búðakirkja", detail: "A híres fekete fatemplom — utolsó nagy fotópont." },
            { time: "este", icon: "🛏", name: "Reykjavík ízelítő → Keflavík", detail: "Rövid városnézés, majd Keflavík az utolsó éjszakára a 07:35-ös géphez." }
          ],
          notes: ["Snæfellsnes a »kis Izland« — gleccser, vulkán, fekete strandok egy félszigeten.", "Reykjavík csak rövid ízelítő (~1,5–2 óra): Hallgrímskirkja torony + kikötő (Harpa, Sun Voyager).", "Utolsó éjszaka Keflavík: tankolj tele, készítsd elő az autóleadást a júl. 26. 07:35-ös géphez.", "🐦 Lóndrangar és Arnarstapi sziklapartjain júliusban puffinok fészkelnek — 16:00 után érdemes nézni, távcső jól jön."],
          gpxPlaces: [
            { name: "Djúpalónssandur", time: "09:00", kind: "beach", googleRating: "4.6", badge: "fekete strand", duration: "30–45 perc", lat: 64.7522892, lng: -23.9005197, detail: "Fekete kavicsos strand, hajóroncs, bazaltformák. A Snæfellsjökull NP nyugati csúcsa.", reviewNote: "Ingyenes parkoló, ~10 perc séta le a partra. A rozsdás hajóroncs-darabok hadisír — hagyd a helyén. A hullámok itt is erősek, tartsd a távot a víztől.", maps: "https://www.google.com/maps/search/?api=1&query=64.7522892,-23.9005197" },
            { name: "Saxhóll kráter", time: "09:45", kind: "photo", googleRating: "4.5", badge: "kráter", duration: "20–30 perc", lat: 64.8082, lng: -23.8127, detail: "Fémlépcsős salakkráter a Snæfellsjökull NP-ben, gyors 360°-os panorámával.", reviewNote: "Ingyenes parkoló közvetlenül a lépcsőnél; fel ~7 perc. Szeles, de a kilátás a lávamezőre és az óceánra megéri — gyors, hálás megálló.", maps: "https://www.google.com/maps/search/?api=1&query=64.8082,-23.8127" },
            { name: "Lóndrangar", time: "10:30", kind: "photo", puffin: true, googleRating: "4.6", badge: "puffin + fotó", duration: "20–30 perc", lat: 64.732527, lng: -23.7846095, detail: "Két drámai bazalttorony a tengerből. Rövid séta a kilátóhoz. Júliusban puffinok a sziklákon.", reviewNote: "Kis ingyenes parkoló, rövid séta a kilátóhoz. A bazalttornyok alatt júliusban puffinok fészkelnek — 16:00 után aktívabbak; távcső jól jön.", maps: "https://www.google.com/maps/search/?api=1&query=64.732527,-23.7846095" },
            { name: "Arnarstapi", time: "11:15", kind: "photo", puffin: true, googleRating: "4.7", badge: "parti séta + puffin", duration: "45–60 perc", lat: 64.7643097, lng: -23.6248695, detail: "Sziklaszínpad, Bárður szobor, partmenti sétaút Hellnarig. Ebéd a faluban.", reviewNote: "Ingyenes parkoló a falunál. A 2,5 km-es part menti ösvény Hellnarig a nap legszebb sétája (bazaltívek, madársziklák). A Fjöruhúsið kávézó Hellnarban remek megálló.", maps: "https://www.google.com/maps/search/?api=1&query=64.7643097,-23.6248695" },
            { name: "Búðakirkja", time: "12:30", kind: "photo", googleRating: "4.6", badge: "fotópont", duration: "20–30 perc", lat: 64.8216875, lng: -23.3840266, detail: "A híres fekete fatemplom, hósapkás hegyek háttérrel. Utolsó nagy fotópont.", reviewNote: "Kis parkoló a templomnál — ne parkolj a fűre. A fekete fatemplom belül zárt, de kívülről a fő fotó; hósapkás hegyekkel a háttérben a legjobb.", maps: "https://www.google.com/maps/search/?api=1&query=64.8216875,-23.3840266" },
            { name: "Ytri-Tunga (fókás strand)", time: "13:15", kind: "beach", googleRating: "4.3", badge: "fókás strand", duration: "20–30 perc", lat: 64.8003, lng: -23.0589, detail: "Aranyhomokos strand, ahol gyakran fókák napoznak a sziklákon — Búðakirkja után útba esik.", reviewNote: "Ingyenes parkoló, pár perc a partig. A fókák nem garantáltak, de apály körül a legjobb az esély — maradj 30+ m-re, ne zavard őket.", maps: "https://www.google.com/maps/search/?api=1&query=64.8003,-23.0589" },
            { name: "Reykjavík (rövid városnézés)", time: "17:00", kind: "town", googleRating: "4.6", badge: "városnézés", duration: "1,5–2 óra", lat: 64.1420229, lng: -21.9265494, detail: "Hallgrímskirkja torony + kikötő (Harpa, Sun Voyager). Ízelítő hazafelé.", reviewNote: "Belvárosi parkolás zónás és fizetős (P1 a legdrágább) — appal (Parka/EasyPark) fizethető. ~1,5–2 óra elég a Hallgrímskirkja toronyra és a kikötőre hazafelé.", maps: "https://www.google.com/maps/search/?api=1&query=64.1420229,-21.9265494" },
            { name: "Keflavík", time: "21:00", kind: "stay", badge: "szállás-zóna", t: "ov", lat: 63.9997549, lng: -22.5582716, detail: "Reptér mellett a hajnali 07:35-ös géphez. Tankolás, autó-leadás előkészítése.", reviewNote: "Reptér melletti utolsó éjszaka a 07:35-ös géphez. Tankolj tele este (N1 Hafnargata, 24/7), és pakold elő az autó-leadáshoz a papírokat.", maps: "https://www.google.com/maps/search/?api=1&query=63.9997549,-22.5582716" }
          ]
        }
      ],
      practicalBox: {
        title: "🧭 Gyakorlati tudnivalók",
        accent: "iceland",
        open: false,
        cards: [
          { title: "🛏️ Szállásfoglalás", paragraphs: ["Júliusban a déli part, Kirkjubæjarklaustur és Höfn gyorsan betelik, és kevés a hely — foglalj jó előre. Az utolsó éjszaka szándékosan Keflavík, a hajnali géphez."] },
          { title: "✈️ Hajnali indulás", paragraphs: ["Vissza júl. 26. 07:35 Keflavíkból. Onnan reggel 10 perc a reptér (Reykjavíkból 45–50). Előző este tankolj tele, készítsd elő az autó-leadást."] },
          { title: "💧 Lagúna-foglalás", paragraphs: ["A Mývatn Nature Baths (Earth Lagoon, 6. nap) idősávos, ~7.500 ISK / 3 óra — foglalj előre. Alternatíva: Sky Lagoon Reykjavíknál."] },
          { title: "🚗 Útviszonyok", paragraphs: ["A terv végig normál úton járható. Murvás lehajtó: Hvítserkur és a Dettifoss keleti oldala (ezért a nyugati, aszfaltos oldalt vesszük). F-utak nincsenek a tervben."] },
          { title: "⛽ Tankolás & matrica", paragraphs: ["Izlandon nincs autópálya-matrica. Egyetlen fizetős alagút: a Vaðlaheiðargöng Akureyrinél (utólag online fizethető). Tankolj tankkártyával (N1, Olís), a benzinkutak ritkulnak keleten."] }
        ]
      }
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
      "Nem étteremlista, hanem gasztró-kalauz: országonként mi az ikonikus, mi a helyi kedvenc, mi az amit érdemes egyszer megkóstolni — és hol érdemes leülni. A fogások magyarázata mindig valami ismerős ízhez vagy állaghoz köti az újat.",
      "Az út hat gasztro-kultúrán vezet át (balti, izlandi, svéd, dán, hamburgi/észak-német, frankfurti). Mindegyik más logikájú — a baltikumi mélyen közép-európai gyökerű, az izlandi nyersanyag-centrikus, a skandináv letisztult, a dán fine dining forradalmat hozott, a hamburgi kikötős-halas, a frankfurti hesseni borvidéki."
    ],
    groups: [
      {
        title: "🇱🇹🇱🇻🇪🇪 Baltikum",
        text: "A balti konyha földközeli, laktató és sokszor ismerősen közép-európai — sötét rozskenyérrel, céklával, kaporral, tejföllel, füstöléssel és savanykás elemekkel. Nem a fine dining a lényeg, hanem a helyi karakteres fogások megtalálása az óvárosi napokon.",
        history: "A balti konyha évszázadokon át a paraszti és halász hagyományokra épült: a rövid vegetációs időszak miatt tartósítás (füstölés, pácolás, savanyítás) volt az alap. A szovjet korszak erős tipizálást és uniformizálást hozott — a helyi különlegességek csak háztartási szinten éltek tovább. A függetlenség (1990-91) után lassan indult újra a helyi gasztro-identitás keresése. Az elmúlt 15 évben főleg Tallinnban és Vilniusban robbant be az 'újbalti konyha' — helyi alapanyagok, skandináv hatás, farm-to-table szemlélet. Ma Tallinn gasztronómiája a három főváros közül a legelőrehaladottabb: az F-Hoone, a NOA és a Leib Resto olyan szintű éttermi kultúrát képvisel, ami 10 évvel ezelőtt elképzelhetetlen lett volna. Vilnius szintén gyorsan fejlődik (Džiaugsmas, Amandus), Riga valamivel konzervatívabb — de a Lido hálózat a szovjet menza-étkezés helyi újraértelmezéseként mégis kultikus lett.",
        drinks: [
          "Švyturys Ekstra (LT) — Litvánia legnépszerűbb söre, könnyed lager; a Baltika és a Dreher közé esik ízben.",
          "Utenos (LT) — másik litván standard, kicsit gazdagabb ízvilágú.",
          "Aldaris (LV) — lett sörvezető, Riga sajátja; enyhén malátás, könnyű.",
          "Riga Black Balsam (LV) — 45 fokos gyógynövényes bitters, 24 összetevővel; az Unicum rusztikusabb, erősebb, fenyőgyantás rokona. Fekete kávéval vagy tejjel isszák.",
          "Vana Tallinn (EE) — észt rum-alapú likőr, vaníliás-fahéjas, enyhén édes; nagyon ajándéktárgy-szagú, de egyszer érdemes.",
          "Kali / Kvass — erjesztett rozskenyér-ital, alkoholtartalom szinte nulla; sötét, malátás, ismerős a magyarnak."
        ],
        items: [
          {
            badge: "LT",
            name: "Vilnius · litván comfort food",
            meta: "Litvánia · city center vacsora",
            description: "Litvániában a burgonyás, tejfölös, húsos vonal a legerősebb. Ezek jól állnak az első estéknek, mert egyszerre helyi és ismerős.",
            tastes: [
              "Cepelinai (cepelinas): hatalmas burgonyagombóc darált hússal töltve, tejföllel és pörccel tálalva — nagyjából a knédli és a töltött szilvásgombóc sós, nehezebb rokona. Egy adag valószínűleg elég.",
              "Šaltibarščiai: hideg céklaleves kefirrel, főtt tojással, uborkával — sós, savanykás, élénk rózsaszín hidegleves; nyáron kötelező.",
              "Kibinai: karéliai (karaim) félhold alakú tészta hússal, Trakaiban a legautentikusabb — olyan, mint egy tömörebb, ropogósabb húsos derelye.",
              "Kepta duona: sült fekete kenyér fokhagymával — sörkorcsolyának olyan, mint egy sokkal jobb fokhagymás pirítós."
            ]
          },
          {
            badge: "LV",
            name: "Riga · lett sörkorcsolya és halas vonal",
            meta: "Lettország · city day mellé",
            description: "Rigában a rozskenyér, a füstölt hal és a sör mellé illő sósabb fogások a legjobbak. A Lido önkiszolgáló hálózat gagyinak tűnik, de valójában autentikus és megbízható.",
            tastes: [
              "Pelēkie zirņi ar speķi: szürke borsó sült szalonnával — rusztikus babfőzelék és pörcös köret keresztezése, sörrel az igazi.",
              "Rupjmaize: sötét, malátás rozskenyér; a magyar barna kenyérnél tömörebb, enyhén édeskés. Minden étkezés alapja.",
              "Skābeņu zupa: sóska-krémleves főtt tojással — savanykás, tavaszi, könnyű.",
              "Füstölt hal (kūpināta zivs): főleg sprat (briling) vagy lazacfélék — hasonló érzés, mint egy jobb balatoni füstölt hal, csak északiasabban tiszta ízzel. A Rigai Központi Piacon vedd."
            ]
          },
          {
            badge: "EE",
            name: "Tallinn · észt újhullám és komp előtti vacsora",
            meta: "Észtország · logisztikai este",
            description: "Tallinn ma a három balti főváros legjobb gasztro-helyszíne. A komp előtti este megér egy jobb helyet — az észt konyha letisztultabb, kevésbé nehéz, sok benne a rozs, a hal és a savanyított kiegészítő.",
            tastes: [
              "Kiluvõileib: sprattos nyitott szendvics tojással és hagymával — elegáns heringes katonakenyér.",
              "Mulgikapsad: árpás-savanyúkáposztás húsos egytál — a székelykáposzta északi unokatestvére.",
              "Verivorst mustapekonikastmega: véres hurka mustárral és sült szalonnával — karácsony ikonja, de nyáron is megjelenik menükben.",
              "Kama: pörkölt gabonaporból készült desszert joghurtban vagy kefirben — állagra a zabkása és a pohárkrém között, diós-malátás ízzel."
            ]
          }
        ],
        iconicRestaurants: [
          {
            name: "Lokys",
            maps: "https://www.google.com/maps/search/?api=1&query=Lokys+restaurant+Vilnius",
            stars: "★4.3",
            city: "Vilnius · LT",
            note: "Hagyományos litván vadászos étterem kőpincében — medvehús, vaddisznó, szarvas. Turisztikus, de autentikus. A Gediminas-torony közelében."
          },
          {
            name: "Etno Dvaras",
            maps: "https://www.google.com/maps/search/?api=1&query=Etno+Dvaras+Vilnius",
            stars: "★4.4",
            city: "Vilnius · LT",
            note: "A legjobb hely cepelinaire és šaltibarščiaira a belvárosban — fa-enteriőr, népi hangulat, megbízható adagok."
          },
          {
            name: "Lido (hálózat)",
            maps: "https://www.google.com/maps/search/?api=1&query=Lido+restaurant+Riga",
            stars: "★4.2",
            city: "Riga · LV",
            note: "Lett önkiszolgáló lánc — kultikus helyi intézmény. Tele van helyi kaján: borsóleves, savanyú hús, rozskenyér, tejfölös saláták. Nem romantikus, de autentikus és olcsó."
          },
          {
            name: "3 Pavāru restorāns",
            maps: "https://www.google.com/maps/search/?api=1&query=3+Pavaru+restaurant+Riga",
            stars: "★4.5",
            city: "Riga · LV",
            note: "Modern lett konyha — szezonális alapanyagok, letisztult tálalás. Ha egy jobb vacsorát akartok Rigában, ez az egyik legjobb választás."
          },
          {
            name: "Leib Resto ja Aed",
            maps: "https://www.google.com/maps/search/?api=1&query=Leib+Resto+ja+Aed+Tallinn",
            stars: "★4.6",
            city: "Tallinn · EE",
            note: "Az újbalti konyha egyik prémium helyszíne Tallinnban — rozskenyér házilag sütve, helyi hal, észt sajt, kert. Foglalás erősen ajánlott."
          },
          {
            name: "F-Hoone",
            maps: "https://www.google.com/maps/search/?api=1&query=F-Hoone+Tallinn+Telliskivi",
            stars: "★4.4",
            city: "Tallinn · EE · Telliskivi",
            note: "Ipari-kreatív negyed (Telliskivi) ikonikus helye — vegyes menü, jó hamburgerek, helyi sörök, fiatalos légkör. Nem hagyományos észt, de a tallinni városi életbe ez vezet be."
          }
        ]
      },
      {
        title: "🇮🇸 Izland",
        text: "Az izlandi gasztronómia nyersanyag-centrikus és erősen helyhez kötött: bárány, atlanticai hal, tengeri gyümölcsök, tejtermékek, geotermálisan sütött kenyér. A roadtrip logikájához az illik, ha a nagy foglalós helyeket (Friðheimar, Matur og Drykkur) előre kezeled, a napi megállókat pedig a menetrendhez igazítod.",
        history: "Az izlandi gasztronómia hagyományosan a túlélés konyhaművészete volt: a rövid nyár, a nehéz telek és az izolált lét kikényszerítette a tartósítás minden formáját — sózás, füstölés, savanyítás, szárítás, fermentáció. A hákarl (fermentált grönlandi cápa) és a sviðasulta (préselve savanyított birkafej) ma inkább kulturális kuriózum, mint mindennapos étel. A 20. század közepétől a halászat és az exportgazdaság hozta a stabilitást és a modernitást. Az igazi fordulat a 2000-es évek közepén jött: a New Nordic Cuisine mozgalom hatására Reykjavíkban megjelent a minőségi helyi alapanyagokra épülő fine dining. A Dill Restaurant (2009, Gunnar Karl Gíslason) volt az első izlandi Michelin-csillagos hely, és a helyi termelők, halászok, farmerek felértékelődése azóta folyamatos. Ma Reykjavík gasztro-színtere meglepően erős egy ilyen kis ország fővárosához képest — a Fishmarket, a Grillmarket, a Matur og Drykkur, a Slippurinn a világszintű konyhákat idézik, miközben az izlandi identitást erősítik.",
        drinks: [
          "Brennivín — 'Fekete Halál': 40 fokos köményes izlandi schnapps, hagyományosan hákarl mellé isszák. Köményesen keserű, aquavit-szerű.",
          "Egils Appelsin — izlandi narancsszörp; az utazók kedvence, de a helyiek is kedvelik; nonalkoholos klasszikus.",
          "Viking lager — az izlandi sör alapja; 1989-ig tiltva volt az alkohol Izlandon, azóta fejlődik a helyi sörfőzés.",
          "Borg Brewery Úrvalsbjór — helyi kézműves sör, Reykjavíkból; ha sörtengert keresel, ez a legjobb helyi opció.",
          "Skyr (ital verzió) — iható formában gyümölcsízesítéssel; élőflórás, könnyű, roadtrip-re ideális.",
          "Geotermális kávé — több geotermális forrás mellett apró kávézók főznek forrásvízzel; különleges ásványos ízprofil."
        ],
        items: [
          {
            badge: "IS",
            name: "Reykjavík · belépő az izlandi ízvilágba",
            meta: "Izland · 1–2. nap",
            description: "Az első napokban érdemes végigmenni az alap izlandi komfortételeken — ezek később a kisebb falvakban is visszaköszönnek. Reykjavík meglepően jó éttermi szcénával rendelkezik.",
            tastes: [
              "Kjötsúpa: bárányleves zöldségekkel és árpával — tiszta, tartalmas húsleves karakteresebb juhízzel; a magyarhoz képest kevésbé paprikás, inkább gyengéd.",
              "Plokkfiskur: krémes-halas krumplisfogás sütőben sütve — a rakott krumpli és egy sűrű tőkehalalapú halragu közti komfortétel.",
              "Skyr: sűrű, fehérjedús tejdesszert — valahol a görög joghurt és a túrókrém között; natúran enyhén savanykás, gyümölcsösen édes.",
              "Pylsa (N1 hot dog): izlandi hot dog mustárral, remulád szósszal, ropogós és nyers hagymával — Bill Clinton kedvence. Csúcsminőségű street food, az N1 kutakon mindenhol elérhető."
            ]
          },
          {
            badge: "IS",
            name: "Snæfellsnes és Észak · farmkonyha, roadtrip-megállók",
            meta: "Izland · 3–5. nap",
            description: "Snæfellsnesen és északon a farmos, egyszerű helyek működnek a legjobban. Nem kell minden nap ünnepi vacsora — a jó leves, füstölt bárány vagy meleg halfogás a helyes döntés.",
            tastes: [
              "Hangikjöt (füstölt bárány): vékony szeletekben, forrón vagy hidegen tálalva — a füstölt sonka és a sült bárány között; birkaíze van, de a füst megszelídíti.",
              "Rúgbrauð (geotermális rozskenyér): Mývatn és Laugarvatn térségében a kenyeret a földbe ásott edényben sütik a geotermális hővel — sötét, nedves, enyhén édeskés, teljesen egyedi.",
              "Harðfiskur (szárított hal): szárított tőkehal vajas kenyérrel — a rágós, sós, tengeres snack meglepően jó. Benzinkutakon, boltokban mindenhol kapható.",
              "Hákarl (fermentált cápa): opcionális kaland — az izlandi gastro-extrém. Ammóniás-sajtos szag, gumiszerű állag. A Brennivín elmossa az utóízt. Egyszer megéri megkóstolni."
            ]
          },
          {
            badge: "IS",
            name: "Kelet · Höfn, déli part, Golden Circle · foglalós csúcspontok",
            meta: "Izland · 6–8. nap",
            description: "A legemlékezetesebb étkezések: Höfn homárvonala, a Friðheimar üvegházi paradicsomlevese és a Golden Circle-i farmhelyei. Ezeknél előre kell készülni.",
            tastes: [
              "Humarsúpa (homárleves Höfnben): krémesen vajasabb, mint a halászlé — atlantiai langusztin bisque-jellegű leves; Höfn a 'langusztin fővárosa', itt kell enni.",
              "Friðheimar paradicsomlevese: az üvegházi paradicsomból főzött selymes paradicsomleves friss kenyérrel — olyan, mint egy igazán jó paradicsomleves, de a frissessége kategória más. Foglalás kötelező: fridheimar.is.",
              "Lamb soup / báránysült a déli parton: a legtöbb kis bistró és benzinkút-melletti kávézó kínál meleg báránysültet — megbízható, jó, és helyi.",
              "Skyr cake: skyrrel készített sajttorta-szerű desszert — krémes, enyhén savanykás, jobb mint amilyennek hangzik."
            ]
          }
        ],
        iconicRestaurants: [
          {
            name: "Friðheimar",
            maps: "https://www.google.com/maps/search/?api=1&query=Fridheimar+restaurant+Iceland",
            stars: "★4.6",
            city: "Reykholt (Golden Circle) · IS",
            note: "Üvegházi paradicsomos étterem geotermális melegítéssel — a paradicsomokat a vendégek szeme előtt termesztik. Paradicsommártás, -leves, -sör. Kötelező foglalás: fridheimar.is"
          },
          {
            name: "Matur og Drykkur",
            maps: "https://www.google.com/maps/search/?api=1&query=Matur+og+Drykkur+Reykjavik",
            stars: "★4.6",
            city: "Reykjavík · IS",
            note: "Hagyományos izlandi receptek modern értelmezésben — rúgbrauð, harðfiskur, hangikjöt elegáns tálalásban. Ha egy igazán jó izlandi vacsorát akartok Reykjavíkban, ez az."
          },
          {
            name: "Fishmarket (Fiskimarkaðurinn)",
            maps: "https://www.google.com/maps/search/?api=1&query=Fishmarket+restaurant+Reykjavik",
            stars: "★4.5",
            city: "Reykjavík · IS",
            note: "Friss izlandi halfogások sushi-s és ázsiai beütéssel — az egyik legnépszerűbb fine dining hely Reykjavíkban. Sashimi izlandi lazacból és tőkehalbó egyszerre."
          },
          {
            name: "Soup Company",
            maps: "https://www.google.com/maps/search/?api=1&query=Soup+Company+Vik+Iceland",
            stars: "★4.4",
            city: "Vík · IS",
            note: "A déli part legismertebb kis leveses helye — gulyásleves kenyérben, bárányleves, paradicsomleves. Kötelező megálló Reynisfjara előtt vagy után."
          },
          {
            name: "Pakkhús",
            maps: "https://www.google.com/maps/search/?api=1&query=Pakkhus+restaurant+Hofn+Iceland",
            stars: "★4.5",
            city: "Höfn · IS",
            note: "Höfn legjobb langusztin-étterme — homárleves, sült langusztin, friss halételek. Höfnben KÖTELEZŐ megálló a gleccserjéglagúna után."
          }
        ]
      },
      {
        title: "🇸🇪 Svédország · Stockholm",
        text: "A svéd konyha a husmanskost (paraszti házi ételek) és az újhullám között egyensúlyoz. Stockholm éttermi kultúrája az elmúlt 20 évben a világ élmezőnyébe emelkedett — de a legizgalmasabb tapasztalat sokszor nem a fine dining, hanem a fika kultúra és a jó köttbullar.",
        history: "A svéd konyha alapja évszázadokon át a husmanskost volt — egyszerű, laktató, szezonális paraszti ételek: köttbullar (húsgolyók), inlagd sill (pácolt hering), kroppkakor (krumpligombóc), raggmunk (burgonyapalacsinta). A 20. század közepén a svéd jóléti állam a konyhaipari egyformaságot hozta. Az igazi fordulat a 2000-es évek végén jött: a New Nordic Cuisine skandináv hulláma (amelynek dánok, de svédek is motorjai voltak) Stockholmban is gyümölcsöt hozott. A Mathias Dahlgren, az Oaxen Krog, a Frantzen étteremek a 3 Michelin-csillagig jutottak. Emellett nagyon erős a fika kultúra — a napi kávészünet péksüteménnyel (kanelbulle, kardemummabulle, prinsesstårta) a svéd identitás szerves része. A surströmming (savanyított hering, kb. a világ egyik legbüdösebb étele) inkább folklór, mint mindennapos étel — de a neve mindenhol felbukkan.",
        drinks: [
          "Aquavit (Akvavit) — boróka vagy kapormag-ízesítésű gabonaszesz; a svéd ünnepek alapitala. Hering mellé kötelező.",
          "Absolut Vodka — Åhus-ból, svéd búzából; ha vodkát rendeltek Stockholmban, ez az alapvonal.",
          "Rekorderlig cider — svéd kézműves gyümölcssör; nagyon népszerű, friss és könnyű.",
          "Spendrups / Falcon — nagy svéd sörmárkák; megbízható lager, mindenütt elérhető.",
          "Saft (gyümölcsszirup vízzel) — a svéd háztartások nonalkoholos alapja; hűvösen kellemesebb mint hangzik.",
          "Kaffe (fika-kávé) — a svéd filterkávé kultúra erős; Stockholmban rengeteg minőségi specialty kávézó van."
        ],
        items: [
          {
            badge: "SE",
            name: "Stockholm · klasszikus svéd ízek és fika",
            meta: "Svédország · 3 éjszaka",
            description: "Stockholmban van idő és hely a jobb étkezésekre. A klasszikus fogások mellé a fika-kultúra (kávé + péksütemény, általában délelőtt 10 és délután 3 körül) is teljes értékű élmény.",
            tastes: [
              "Köttbullar med gräddsås: húsgolyók tejszínes barna szósszal, burgonyapürével és vörösáfonyás lekvárral — az IKEA-verzió csak halvány árnyéka az igazinak.",
              "Gravlax: nyers lazac sóval, cukorral, kaporral pácolva — füstölés nélkül, frissebb, tisztább ízű mint a füstölt változat.",
              "Inlagd sill: pácolt hering mustáros, kapros vagy hagymás lében — minden svéd ünnep és hétköznapi büfé alapja.",
              "Kanelbulle / Kardemummabulle: fahéjas (vagy kardamommagos) svéd péksütemény — édesebb és puhábbnak tűnik, mint a magyar sütemények, de a kardamom meglep.",
              "Smörgåstårta: szendvicstorta — sós, egyrétegű 'torta' lazaccal, tojással, garnélával; különleges svéd ünnepi fogás."
            ]
          }
        ],
        iconicRestaurants: [
          {
            name: "Pelikan",
            maps: "https://www.google.com/maps/search/?api=1&query=Pelikan+Restaurant+Stockholm",
            stars: "★4.3",
            city: "Stockholm · Södermalm",
            note: "1904 óta nyitva lévő klasszikus svéd brasserie — köttbullar, sill, husmanskost, fából faragott bútorok. Az autentikus stockholmi vacsora-élmény, turisták és helyiek vegyesen."
          },
          {
            name: "Fotografiska Restaurant",
            maps: "https://www.google.com/maps/search/?api=1&query=Fotografiska+restaurant+Stockholm",
            stars: "★4.4",
            city: "Stockholm · Södermalm",
            note: "Michelin Green Star — fenntartható svéd fine dining a Fotografiska fényképészeti múzeum tetején, panorámás kilátással. Vacsora és tetőterasz egyszerre."
          },
          {
            name: "Rosendals Trädgård",
            maps: "https://www.google.com/maps/search/?api=1&query=Rosendals+Tradgard+Stockholm",
            stars: "★4.5",
            city: "Stockholm · Djurgården",
            note: "Biokertészeti kávézó és pékség a Djurgården parkban — friss péksütemény, saláták, levesek, kert. Ideális Vasa Museum utáni ebédre."
          },
          {
            name: "Grinda Wärdshus",
            maps: "https://www.google.com/maps/search/?api=1&query=Grinda+Wardshus",
            stars: "★4.3",
            city: "Grinda sziget · Archipelago",
            note: "A Grinda-sziget egyetlen étterme — friss halételek, helyi sör, veranda kilátással a tengerre. Kötelező foglalás: grindawardshus.se/boka-bord"
          }
        ]
      },
      {
        title: "🇩🇰 Dánia · Koppenhága",
        text: "Koppenhága az elmúlt 20 évben a világ gasztronómiai fővárosává vált — a Noma forradalma nyomán az egész dán konyha megújult. A három nap erre bőven elég, hogy belekóstolj a smørrebrødon és a Torvehallernén át a modern dán fine dining világába is.",
        history: "A hagyományos dán konyha a paraszti és tengerészi hagyományokra épül: smørrebrød (nyitott rozskenyeres szendvics), frikadeller (lapos húsgombóc), flæskesteg (ropogósra sült sertéskaraj), rødgrød med fløde (piros bogyós gyümölcskocsonya tejföllel). A dánok generációkon át a leghitványabb skandináv konyhának számítottak — egészen 2003-ig, amikor René Redzepi és Claus Meyer megnyitotta a Nomát Koppenhágában. A 'New Nordic Cuisine' manifesztuma (2004) forradalmasította nemcsak a dán, hanem az egész skandináv és európai fine dining gondolkodást: helyi és szezonális alapanyagok, fermentáció, vadgyűjtés, minimalista tálalás. A Noma 2010-ben, 2011-ben, 2012-ben és 2014-ben a világ legjobb étterme lett (San Pellegrino lista). Az örökség ma is él: Geranium (3 Michelin-csillag, jelenleg Európa egyik csúcsétterme), Alchemist, AOC, Jordnær — Koppenhága éttermi sűrűsége Párizséhoz és Tokióéhoz mérhető.",
        drinks: [
          "Carlsberg Pilsner — a világ egyik legismertebb söre; a koppenhágai Carlsberg Városból ered (1847), de a prémium Jacobsen kézművessor sokkal jobb.",
          "Tuborg Grøn — a másik dán klasszikus; könnyű, semleges, everywhere.",
          "Gammel Dansk Bitter Dram — 38 fokos gyógynövényes reggeli bitters; hagyományosan reggeli schnappsként isszák reggelire (igen, tényleg). Fűszeres, keserű, aquavit-közeli.",
          "Aquavit (Aalborg) — dán köményes szesz, heringhez és smørrebrødhez; 'skål'-lal köszöntik.",
          "Mikkeller sörök — koppenhágai kézműves sörfőzde, világhíres; a Bar 3 Flasks vagy a Mikkeller Bar a városban mindig frissen csapolt tételt kínál.",
          "Rødgrød med fløde — gyümölcskocsonya tejföllel; nemcsak desszert, hanem a legnehezebben kiejthető dán szó is egyben."
        ],
        items: [
          {
            badge: "DK",
            name: "Koppenhága · smørrebrød, street food és fine dining",
            meta: "Dánia · 3 éjszaka",
            description: "Koppenhágában minden szinten el lehet érni a jó étkezést — a Torvehallerne standoktól a Michelin-csillagos asztalokon át a Papirøen street foodig. Három nap bőven elég rá.",
            tastes: [
              "Smørrebrød: nyitott rozskenyeres szendvics héringgel, lazaccal, tojással, garnélával vagy roastbeeffel — egy tányéron akár 3-4 variáció; a dán tapas-rendszer.",
              "Frikadeller: lapos, sült húsgombóc burgonyasalátával vagy párolt zöldséggel — a fasírt és a sült húspogácsa közti klasszikus.",
              "Flæskesteg: ropogós sertéskaraj piroslökkel és burgonyával — a dán karácsonyi étel, de egész évben kapható.",
              "Leverpostej: dán májas pástétom pirítóson uborkával — a dán irodai ebéd alapja; gazdagabb és zsírosabb mint a magyaros változat.",
              "Dán hot dog (ristet hotdog): ropogós hagymával, uborkával, mustárral és ketchuppal töltött virsli; az utca étele, standokon mindenhol megtalálható."
            ]
          }
        ],
        iconicRestaurants: [
          {
            name: "Torvehallerne",
            maps: "https://www.google.com/maps/search/?api=1&query=Torvehallerne+Copenhagen",
            stars: "★4.5",
            city: "Koppenhága · Nørreport",
            note: "Fedett piaccsarnok friss smørrebrøddel, dán sajtokkal, heringgel, kézműves sörrrel. A legjobb koppenhágai ebédhely-koncentrátum. Reggeli is kiváló."
          },
          {
            name: "Schønnemann",
            maps: "https://www.google.com/maps/search/?api=1&query=Restaurant+Schonnemann+Copenhagen",
            stars: "★4.4",
            city: "Koppenhága · Indre By",
            note: "1877 óta nyitva — a hagyományos smørrebrød és aquavit szentélye. Ebéd-only hely (11-17h), foglalás szükséges. A koppenhágai smørrebrød-élmény csúcsa."
          },
          {
            name: "Reffen Street Food",
            maps: "https://www.google.com/maps/search/?api=1&query=Reffen+Street+Food+Copenhagen",
            stars: "★4.3",
            city: "Koppenhága · Refshaleøen",
            note: "Koppenhága legnagyobb outdoor street food markete ipari helyszínen — 60+ stand, természetes borok, hamburgerek, ázsiai fogások, dán specialitások. Hajóval 10 perc a belvárostól."
          },
          {
            name: "Noma",
            maps: "https://www.google.com/maps/search/?api=1&query=Noma+restaurant+Copenhagen",
            stars: "★4.5",
            city: "Koppenhága · Christianshavn",
            note: "4× a világ legjobb étterme — 2025-ben visszanyitott. René Redzepi New Nordic cuisine forradalma. Árak: ~400–600 EUR/fő. Ha belefértek a büdzsébe és 3+ hónappal előre foglaltok: noma.dk. Egyébként a hatást az összes többi koppenhágai hely hordozza."
          },
          {
            name: "Geranium",
            maps: "https://www.google.com/maps/search/?api=1&query=Geranium+restaurant+Copenhagen",
            stars: "★4.7 · ✦✦✦ Michelin",
            city: "Koppenhága · Parken",
            note: "3 Michelin-csillag, jelenleg Európa legjobb étterme (50 Best lista 2023 #1). Rasmus Kofoed konyhája. Ha életetek egyetlen igazi gasztronómiai élményét keressétek Koppenhágában: geranium.dk"
          }
        ]
      },
      {
        title: "🇩🇪 Hamburgi és Frankfurt",
        text: "A két nagy német állomás két teljesen különböző gasztro-karaktert képvisel: Hamburg a kikötő, a hal, a füstölt hús és a Hanzeáta-büszkeség; Frankfurt a rajnai-hesseni belváros, az almabor kultúra, a Grüne Soße és a Römerberg körüli tradicionális fogadók.",
        history: "A hamburgi konyha a Hanza-szövetség és a kikötőváros örökségéből nőtt ki — a tengerről érkező áruk (fűszerek, halak, kávé, csokoládé, rum) mind formálták a helyi gasztronómiát. A Fischbrötchen (halszendvics) és a Labskaus (matrózok egytálétele) a kikötős lét ikonjai. A 19. századi ipari fejlődés hozta a Speicherstadt kávé- és fűszerraktárait. A hamburgi fine dining a 2000-es évektől erősödött (Haerlin, Jacobs, La Mer — mind Michelin-csillaggal), de az identitás alapja ma is a halpiaci kultúra és a halételek. Frankfurt konyháját a Hesseni tartomány paraszti és borvidéki hagyományai alakítják. Az Apfelwein (almabor, 'Stöffche' helyi nevén) a legkarakteresebb helyi ital — Sachsenhausen negyedében a Bembel-ből (szürke kerámia korsó) isszák. A Grüne Soße (Grie Soß) hét friss gyógynövényből készül és Goethe kedvenc étele volt. A Frankfurter Würstchen (a valódi frankfurti virsli) kizárólag Frankfurt és közvetlen környékéről kapja a megjelölést — ez az első védett eredetmegjelölésű hentesáru Europában.",
        drinks: [
          "Apfelwein (Frankfurt) — helyi almabor, 5-7 fokos, kissé savanykás; hígítva vízzel 'Gespritzter', szódával 'Saurer Gespritzter'. Bembel-ből (szürke korsó) isszák Sachsenhausenben.",
          "Paulaner Weissbier — bajor búzasör; a legjobb általános sörmegoldás a frankfurti estékre.",
          "Ratsherrn Pale Ale (Hamburg) — hamburgi kézműves sör, az egyik legjobb helyi opció a kikötőnegyed bárjaiban.",
          "Astra Rotlicht (Hamburg) — ikonikus hamburgi munkásosztálybeli sörmárka; St. Pauli negyedben mindenhol van.",
          "Lübecker Rum — lübecki matróz-rum hagyomány; 1878 óta a Lübecker Rum Geschichte a várostörténet része.",
          "Schwarzwälder Kirschwasser — feketefenyő-vidéki cseresznyepálinka; Frankfurt-vidéken is kapható, az út végének itala."
        ],
        items: [
          {
            badge: "DE",
            name: "Hamburg · halételek, kikötős street food, Speicherstadt-kávé",
            meta: "Németország · Hamburg",
            description: "Hamburgban a legjobb étkezések a vízhez kapcsolódnak — a Landungsbrücken-nél, a HafenCity teraszain és a Fischmarkt körzetében. A Fischbrötchen nem opcionális.",
            tastes: [
              "Fischbrötchen: füstölt hering (Bismarck-hering, matjes) vagy garnéla szendvics friss zsemlében hagymával és remulád szósszal — a hamburgi street food ikonja, a Landungsbrücken körül és a Fischmarkton kapható.",
              "Labskaus: tengerész-egytál sózott marhahúsból, céklaecetes burgonyából és heringből, tükörtojással és savanyúsággal — nem fotogén, de autentikusan hamburgi.",
              "Aalsuppe: édesgyökeres-gyümölcsös angolnaleves — a tradicionális hamburgi leves, amit ma már csak néhány régi étteremben kínálnak.",
              "Franzbrötchen: ropogós, lapos, fahéjas dán-szerű péksütemény — hamburgi reggeli alapja; közelebb áll egy ropogósabb croissanthoz mint a bécsihez."
            ]
          },
          {
            badge: "DE",
            name: "Frankfurt · Apfelwein, Grüne Soße, Handkäse",
            meta: "Németország · Frankfurt",
            description: "Frankfurtban a gasztronómia Sachsenhausenben él — az almaboros fogadók, a hesseni paraszti konyha és az egyszerű, olcsó, autentikus vacsorák. Nem elegáns, de emlékezetes.",
            tastes: [
              "Grüne Soße (Grie Soß): 7 friss gyógynövényből (borsmenta, medvehagyma, metélőhagyma, petrezselyem, borágó, turbolya, vízitorma) készített hideg mártás főtt tojással és burgonyával — Goethe kedvence, frankurti specialitás.",
              "Handkäse mit Musik: savanyú túrósajt hagymás-ecetes-olajbogyós 'zenekarral' rozskenyéren — erős szagú, savanykás, az Apfelwein tökéletes kísérője.",
              "Frankfurter Würstchen: a valódi frankfurti virsli — vékony, füstölt, mustárral és sós perecczel; az első európai védett eredetmegjelölésű hentesáru.",
              "Bethmännchen: mandulás marcipán-golyó — frankfurti karácsonyi édesség, de év közben is kapható a belvárosban."
            ]
          }
        ],
        iconicRestaurants: [
          {
            name: "Fischerhaus",
            maps: "https://www.google.com/maps/search/?api=1&query=Fischerhaus+restaurant+Hamburg",
            stars: "★4.3",
            city: "Hamburg · Landungsbrücken",
            note: "Hamburgi kikötői halétterem — matjes, angolna, garnéla, Labskaus. Az Elba-panoráma és a halételek kombinációja. Klasszikus hamburgi vacsora."
          },
          {
            name: "Schiffergesellschaft",
            maps: "https://www.google.com/maps/search/?api=1&query=Schiffergesellschaft+restaurant+Lübeck",
            stars: "★4.3",
            city: "Lübeck · DE",
            note: "1535 óta nyitva — tengerész-céh egykori fogadója. Lübeck legikonikusabb étterme: gerendás mennyezet, hajómodellek, halételek és Lübecker Rum."
          },
          {
            name: "Zum Wagner",
            maps: "https://www.google.com/maps/search/?api=1&query=Zum+Wagner+Frankfurt+Sachsenhausen",
            stars: "★4.3",
            city: "Frankfurt · Sachsenhausen",
            note: "A leghíresebb frankfurti Apfelwein-fogadó — Bembel-ből töltik az almabort, Grüne Soße és Handkäse az alap. Zajos, sűrű, autentikus. Foglalás erősen ajánlott estére."
          },
          {
            name: "Dauth-Schneider",
            maps: "https://www.google.com/maps/search/?api=1&query=Dauth-Schneider+Frankfurt",
            stars: "★4.3",
            city: "Frankfurt · Sachsenhausen",
            note: "Másik klasszikus frankfurti almaboros fogadó — Wagner riválisa. Kicsit csendesebb, hasonló ételek, szintén jó Grüne Soße."
          },
          {
            name: "Miniatur Wunderland Café",
            maps: "https://www.google.com/maps/search/?api=1&query=Miniatur+Wunderland+Hamburg+cafe",
            stars: null,
            city: "Hamburg · Speicherstadt",
            note: "A Miniatur Wunderland épületében lévő kávézó — nem csúcsgasztronómia, de a Speicherstadt-körút logisztikájához beépítve praktikus ebédhely."
          }
        ]
      }
    ]
  },
  costPlan: {
    summary: {
      note: "Becslések — a repülőjegyek már foglaltak és nem szerepelnek a főösszegben. A GLC AMG 43 fogyasztása ~10 L/100 km, kizárólag 100 oktánon megy (V-Power / Shell / BP Ultimate), ami minden országban 0,20–0,40 EUR/L-rel drágább a normál 95-ös szintnél.",
      grandTotal: {
        tibi: "~5 430 EUR",
        henni: "~3 750 EUR",
        together: "~9 180 EUR"
      },
      alreadyBooked: [
        "Henni: Wizz Air W62427 BUD → KEF, 2026.07.11 (Erasmus+ finanszírozott lehet)",
        "Tibi: Icelandair FI309 ARN → KEF, 2026.07.18 — referencia ár: ~360–420 EUR",
        "Tibi + Henni: Icelandair FI306 KEF → ARN, 2026.07.26 — referencia ár: ~400–500 EUR/fő"
      ],
      totals: [
        { label: "1. szakasz · Baltikum + Finn átmenet", value: "~1 680 EUR", person: "Tibi egyedül · saját autó" },
        { label: "2. szakasz · Izland", value: "~4 430 EUR", person: "Tibi + Henni ketten · ~2 215 EUR/fő" },
        { label: "3. szakasz · Hazaút", value: "~3 070 EUR", person: "Tibi + Henni ketten · ~1 535 EUR/fő" }
      ]
    },
    sections: [
      {
        id: "baltikum",
        title: "1. szakasz · Baltikum + Finnország",
        accent: "accent-baltic",
        subtitle: "Tibi egyedül · saját autó · 2026. júl. 10–18. · 9 nap",
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
        subtitle: "Tibi + Henni · saját autó · 2026. júl. 26 – aug. 6. · 12 nap",
        car: "Mercedes GLC AMG 43 · 100 oktán · ~10 L/100 km",
        km: "~2 700 km",
        total: "~3 070 EUR (2 főre)",
        totalPerPerson: "~1 535 EUR/fő",
        categories: [
          {
            icon: "⛽",
            label: "Üzemanyag · 100 oktán (Svédország–Dánia–Németország–Mo.)",
            value: "~530 EUR",
            detail: "~2 700 km × 10 L/100 km = ~270 L · Svédország (V-Power ~21 SEK/L = 1,95 EUR) · Dánia (~2,00 EUR) · Németország (V-Power ~2,05–2,15 EUR — legdrágább!) · Ausztria (~1,85–1,95 EUR) · Magyarország (~1,65 EUR) · Átlag: ~1,96 EUR/L"
          },
          {
            icon: "🏨",
            label: "Szállás · 11 éjszaka (2 fő)",
            value: "~1 560 EUR",
            detail: "Stockholm 3 éj: ~3 × 145 = 435 EUR · Koppenhága 3 éj: ~3 × 160 = 480 EUR · Hamburg 3 éj: ~3 × 130 = 390 EUR · Frankfurt 2 éj: ~2 × 125 = 250 EUR · Booking.com előfoglalás; Stockholm és Koppenhága a legdrágább szakasz"
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
            value: "~15 EUR",
            detail: "Osztrák vignette (bécsi útvonalon): 10 nap ~10 EUR · Szlovák vignette: ~15 EUR, ha azon az útvonalon jöttök · Német autópálya: INGYENES · A Nürnberg–Linz–Wien tengelyhez jellemzően az osztrák matricát biztosan érdemes betervezni"
          },
          {
            icon: "🍽",
            label: "Étkezés · 12 nap (2 fő)",
            value: "~720 EUR",
            detail: "~60 EUR/nap átlag 2 főre: városi reggeli + gyors ebéd + egy ülős vacsora · Koppenhágában és Stockholmban inkább 70–80 EUR/nap, Hamburgban és Frankfurtban 45–60 EUR/nap reális"
          },
          {
            icon: "🚇",
            label: "Parkolás + helyi közlekedés",
            value: "~195 EUR",
            detail: "Arlanda long-term parkoló a visszaérkezésig külön soron már bent van a balti blokkban, de a hazaúton számolj városi P-házakkal, stockholmi és koppenhágai tömegközlekedéssel, valamint német belvárosi parkolással · Stockholm/Koppenhága/Hamburg/Frankfurt együtt kb. 180–210 EUR"
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
        "A fordított körben a legesőérzékenyebb nap már a júl. 25-i Snæfellsnes-zárás: Kirkjufell, Búðakirkja és Lóndrangar ködben sokat vesztenek.",
        "A nyitó Golden Circle és a déli part továbbra is kifejezetten esőtűrők: vízesések, gejzír, kanyonok és fekete strandok esőben is jól működnek.",
        "A fő adaptív szabály: Day 1 este vagy Day 2 reggel nézzétek meg a 3–4 napos előrejelzést a vedur.is-en.",
        "A Golden Circle-t nem kell külön napsütésre tartogatni; esőben is jó, sőt a vízeséses pontok gyakran még jobbak is.",
        "A vegyes napok most inkább a Höfn / Eastfjords és a Húsavík / Akureyri átmenetek: Jökulsárlón működik esőben, de Vestrahorn és a fjordpanorámák kevésbé; Húsavík bálnales szélben romlik.",
        "A külön napi GPX-ek miatt minden nap ad-hoc rövidíthető, de a fő előre bekészített döntés már nem csere, hanem a Snæfellsnes-zárás hossza."
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
        "A stockholmi, koppenhágai, hamburgi és frankfurti szállások konkrét foglalási sorrendje a hosszabb hazaúti ívre."
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
  appsData: {
    intro: "Régiónként szűrve — a kötelező appok itthon, utazás előtt töltendők le. Az App Store linkek iPhone-on közvetlenül megnyithatók, az app azonnal letölthető.",
    groups: [
      {
        title: "🌍 Mindenütt — kötelező",
        accent: "accent-return",
        apps: [
          { name: "Google Maps", note: "Offline térképletöltéssel — töltsd le az összes régiót ITTHON előre (Litvánia, Lettország, Észtország, Izland, Svédország, Dánia, Németország)", store: "https://apps.apple.com/app/google-maps/id585027354", home: "https://maps.google.com", rating: "4.8" },
          { name: "Waze", note: "Traffik + sebességkamerák, autópályán pontosabb figyelmeztetések mint Google Maps", store: "https://apps.apple.com/app/waze-navigation-live-traffic/id323229106", home: "https://www.waze.com", rating: "4.8" },
          { name: "Google Translate", note: "Kamera-fordítás étlaphoz, útjelzőkhöz, feliratokhoz — offline nyelvcsomagok letölthetők", store: "https://apps.apple.com/app/google-translate/id414706506", home: "https://translate.google.com", rating: "4.8" },
          { name: "Revolut", note: "Valutaváltás helyi árfolyamon, kártyás fizetés Skandináviában, Izlandon — kötelező az izlandi és svéd kutak PIN-kérdése miatt is", store: "https://apps.apple.com/app/revolut-send-money-spend-save/id917020797", home: "https://www.revolut.com", rating: "4.7" },
          { name: "WhatsApp", note: "Roaming kommunikáció, csoport-koordináció (Tibi–Henni útközbeni egyeztetés)", store: "https://apps.apple.com/app/whatsapp-messenger/id310633997", home: "https://www.whatsapp.com", rating: "4.7" }
        ]
      },
      {
        title: "🇱🇹🇱🇻🇪🇪 Baltikum",
        accent: "accent-baltic",
        apps: [
          { name: "Bolt: Request a Ride", note: "Az Uber helyett ez az alapvető rideshare Baltikumban — olcsóbb, lefedi Vilniust, Rigát, Tallinnot és a kisebb városokat is", store: "https://apps.apple.com/app/bolt-request-a-ride/id675033630", home: "https://bolt.eu", rating: "4.6" },
          { name: "Bolt Food", note: "Ételhozatal baltikumi városokban — ha esti bevásárlás helyett inkább rendelésre megy a sor", store: "https://apps.apple.com/app/bolt-food-deliver-order-food/id1479502381", home: "https://food.bolt.eu", rating: "4.5" }
        ]
      },
      {
        title: "🇮🇸 Izland — kötelező ⚠️",
        accent: "accent-iceland",
        apps: [
          { name: "112 Iceland", note: "⚠️ KÖTELEZŐ — az izlandi mentőszolgálat Safe Travel appja, ebből küldöd a GPS-pozíciód ha bajba kerülsz. Töltsd le MIELŐTT Keflavíkban leszálltok.", store: "https://apps.apple.com/app/112-iceland/id578924912", home: "https://safetravel.is", rating: "4.6" },
          { name: "Veður", note: "Az izlandi meteorológiai hivatal (Veðurstofa Íslands) hivatalos appja — naprakész időjárás, viharelőrejelzés. Snæfellsnes-nap előtt reggeli kötelező ellenőrzés.", store: "https://apps.apple.com/app/veður/id524350026", home: "https://en.vedur.is", rating: "4.4" },
          { name: "Umferðin (Road.is)", note: "Vegagerðin élő útállapot-app — útlezárások, jeges/havas utak, F-utak státusza, Ring Road aktuális állapota", store: "https://apps.apple.com/app/road-is/id396140831", home: "https://umferdin.is/en", rating: "3.7" }
        ]
      },
      {
        title: "🇮🇸 Izland — opcionális",
        accent: "accent-iceland",
        apps: [
          { name: "Aurora Forecast", note: "Északi fény előrejelzés: Kp-index, felhőzet, láthatóság. Júliusban általában nem látható, de augusztus elejétől már releváns lehet.", store: "https://apps.apple.com/app/aurora-forecast/id1439705523", home: "https://www.aurora-service.eu", rating: "4.7" },
          { name: "Visit Reykjavik", note: "Ingyenes városguide app — múzeumok, éttermek, események. Nem kötelező, de Reykjavíkban hasznos kiegészítő.", store: "https://apps.apple.com/app/visit-reykjavik/id370705330", home: "https://visitreykjavik.is", rating: "4.2" }
        ]
      },
      {
        title: "🚢 Kompok",
        accent: "accent-nordic",
        apps: [
          { name: "Tallink & Silja Line", note: "Fedélzeti rendelés, kajütinfó, menetrend — a Tallinn→Helsinki és az esetleges Helsinki→Stockholm úthoz", store: "https://apps.apple.com/app/tallink-silja-line/id511267200", home: "https://www.tallink.com", rating: "4.3" },
          { name: "Viking Line", note: "Jegykezelés, fedélzeti program, kajütinfó a Turku→Stockholm overnight komphoz", store: "https://apps.apple.com/app/viking-line/id577225882", home: "https://www.vikingline.com", rating: "4.4" }
        ]
      },
      {
        title: "🇸🇪 Svédország — Stockholm",
        accent: "accent-nordic",
        apps: [
          { name: "SL-appen", note: "Stockholm teljes közlekedési hálózata (metró, busz, villamos, Djurgården-komp) + JEGYVÁSÁRLÁS egyetlen appból. Kötelező a városi napokhoz.", store: "https://apps.apple.com/app/sl-reseplanerare-och-biljetter/id918418242", home: "https://sl.se", rating: "4.5" },
          { name: "Donkey Republic", note: "Közbicikli app — Stockholmban valós alternatíva a tömegközlekedés mellett, főleg Djurgården és Gamla Stan között", store: "https://apps.apple.com/app/donkey-republic/id904500987", home: "https://www.donkey.bike", rating: "4.5" }
        ]
      },
      {
        title: "🇩🇰 Dánia — Koppenhága",
        accent: "accent-nordic",
        apps: [
          { name: "DOT Mobilbilletter", note: "Koppenhága metró, busz, S-tog jegyvásárlás — nélküle a fizikai jegy drágább és gépnél kell sort állni", store: "https://apps.apple.com/app/mobilbilletter/id458124935", home: "https://dinoffentligetransport.dk", rating: "4.1" },
          { name: "Rejseplanen", note: "Koppenhágai közlekedési útvonaltervező — pontos, megbízható, ingyenes", store: "https://apps.apple.com/app/rejseplanen/id317007942", home: "https://www.rejseplanen.dk", rating: "4.5" },
          { name: "Too Good To Go", note: "Félárás maradék ételek étteremtől és pékségtől — este 20–21h körül aktív. Dán alapítású app, Koppenhágában különösen jól működik.", store: "https://apps.apple.com/app/too-good-to-go-end-food-waste/id1060683933", home: "https://www.toogoodtogo.com", rating: "4.8" },
          { name: "Donkey Republic", note: "Közbicikli — Koppenhágában kerékpárral közlekedni tényleg van értelme, a város erre van tervezve", store: "https://apps.apple.com/app/donkey-republic/id904500987", home: "https://www.donkey.bike", rating: "4.5" }
        ]
      },
      {
        title: "🇩🇪 Németország — Hamburg + Frankfurt",
        accent: "accent-return",
        apps: [
          { name: "HVV switch", note: "Hamburg teljes közlekedési hálózata: U-Bahn, S-Bahn, busz, Alster-fähre + jegyvásárlás egy appból", store: "https://apps.apple.com/app/hvv-switch/id1038345155", home: "https://www.hvv.de", rating: "4.6" },
          { name: "RMV", note: "Frankfurt és a Rajna–Majna régió közlekedési appja — metró, villamos, S-Bahn, busszal együtt", store: "https://apps.apple.com/app/rmv/id428817120", home: "https://www.rmv.de", rating: "4.1" },
          { name: "DB Navigator", note: "Deutsche Bahn — ha vonatot is terveztek (pl. Hamburg→Frankfurt ICE)", store: "https://apps.apple.com/app/db-navigator/id343555245", home: "https://www.bahn.de", rating: "4.2" },
          { name: "Too Good To Go", note: "Hamburgban és Frankfurtban is nagyon aktív — pékségek, éttermek esti maradékai félárban", store: "https://apps.apple.com/app/too-good-to-go-end-food-waste/id1060683933", home: "https://www.toogoodtogo.com", rating: "4.8" }
        ]
      }
    ]
  },
  infoGroups: [
    {
      title: "📁 Saját anyagok",
      text: "A 2026-os észak-európai út három tervezési dokumentuma és a közös Drive-mappájuk:",
      items: [
        "<a href='https://docs.google.com/document/d/1qsECYR3Ocr4rvHT-fZR8TjI2jy5kmNY-x5kJh-zDzQI/edit?tab=t.0' target='_blank' rel='noreferrer'><strong>Travel_References.md</strong></a> — link- és forrásbank: kompok, Arlanda parkoló, logisztikai hivatkozások régiónként",
        "<a href='https://docs.google.com/document/d/1vfXvA_Z3OklnOJ4AKGIUHdt4VhBV8WI0wOAhOiD2s4k/edit?usp=drivesdk' target='_blank' rel='noreferrer'><strong>Eszak Europa AI Terv</strong></a> — az egész út narratív terve: napi bontás, Tibi/Henni/izlandi/hazaút szakaszok, útvonallogika",
        "<a href='https://docs.google.com/spreadsheets/d/1a__qw0zJe4rCkMLvVhjUa7R753z68eaOQg3kaaS-qIc/edit?gid=1804377913#gid=1804377913' target='_blank' rel='noreferrer'><strong>Utazás Tervezés – EszakEuropa sheet</strong></a> — napi dátumok, km-ek, foglalási státuszok és nyitott pontok táblázata",
        "<a href='https://drive.google.com/drive/folders/1-RPJs6Vf4vukny9s1lwDOm9I70p7gPky' target='_blank' rel='noreferrer'><strong>Drive mappa</strong></a> — az összes tervdokumentum közös Google Drive mappája",
        "<a href='https://script.google.com/macros/s/AKfycbx9FuIYukiZr-HZaHTWZgP7JLyqd6mvJcY_44cv3VBxH1DdxFHvozyUmygOSjVsmBaA/exec?trip=EszakEuropa' target='_blank' rel='noreferrer'><strong>Térkép API · Apps Script endpoint</strong></a> — a térkép adatforrása; sheet tab neve: <code>EszakEuropa</code>"
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
      text: "Hosszú távú parkolás Arlandánál — júl. 18. (indulás KEF felé) → júl. 26. (visszaérkezés), 8 nap. Két fő lehetőség: a hivatalos Swedavia saját parkolói és a Flygets külső szolgáltató.",
      links: [
        { label: "Swedavia — hivatalos Arlanda parkolók", url: "https://www.swedavia.se/en/arlanda/parking/" },
        { label: "Swedavia — közvetlen foglalás (júl. 18–26.)", url: "https://www.swedavia.com/arlanda/parking/#/offers?arrivalDateTime=2026-07-18T14:00&returnDateTime=2026-07-26T14:00&terminal=-1&parkingid=1" },
        { label: "Flygets P1 — külső parkoló (júl. 18–26.)", url: "https://www.flygets.se/parkifly/flygets/booking;parking_start=2026-07-18%2014:10;parking_end=2026-07-26%2013:45;discount_code=NONE" }
      ],
      items: [
        "<a href='https://www.flygets.se/parkifly/flygets/booking;parking_start=2026-07-18%2014:10;parking_end=2026-07-26%2013:45;discount_code=NONE' target='_blank' rel='noreferrer'><strong>Flygets P1</strong></a> — külső szolgáltató, shuttle-busz a terminálhoz; általában olcsóbb mint a Swedavia saját parkolói. Előre kitöltött dátumokkal nyílik meg.",
        "<a href='https://www.swedavia.com/arlanda/parking/#/offers?arrivalDateTime=2026-07-18T14:00&returnDateTime=2026-07-26T14:00&terminal=-1&parkingid=1' target='_blank' rel='noreferrer'><strong>Swedavia P2 Beta Long-term</strong></a> — hivatalos reptéri hosszú távú parkoló; drágább de közelebb, nincs shuttle-várakozás.",
        "Mindkét helyen érdemes előre foglalni — júliusban gyorsan telnek, és online olcsóbb az ár."
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
