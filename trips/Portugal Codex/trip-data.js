const tripData = {
  title: "🗺 🇵🇹 Portugália Útiterv – 2026. április 3–10.",
  subtitle: "8 nap · Lisszabon · Sintra · Óbidos · Nazaré · Batalha · Fátima · Porto · Régua · Pinhão",
  updatedAt: "2026.04.02",
  route: [
    { label: "BUD", cls: "flight" },
    { separator: "→✈→" },
    { label: "Lisszabon", cls: "lisbon" },
    { separator: "→🚆→" },
    { label: "Sintra", cls: "sintra" },
    { separator: "→🚗→" },
    { label: "Óbidos", cls: "sintra" },
    { label: "Nazaré", cls: "sintra" },
    { label: "Batalha", cls: "sintra" },
    { label: "Fátima", cls: "sintra" },
    { label: "Porto", cls: "porto" },
    { label: "Régua", cls: "douro" },
    { label: "Pinhão", cls: "douro" },
    { separator: "→🚗→" },
    { label: "LIS", cls: "flight" },
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
      body: "LIS → BUD · Ápr. 10 · ~20:30 indulás",
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
      "Livraria Lello időpont, valamint portói parkolási stratégia előre.",
      "Pinhão szállás és egy douro-i kóstoló foglalása időben.",
      "DOP és MUU vacsora foglalás Porto napokra."
    ],
    notes: [
      "Április 6 teljes puffernap Lisszabonban, ezért kevésbé feszes az út eleje.",
      "Április 7 fókuszált megállós tranzitnap: rövid Óbidos, Sítio-Nazaré, Batalha és Fátima, majd esti Porto.",
      "Április 8 teljes Porto gyalogos nap, az autót érdemes egy parkolóban hagyni.",
      "Április 9 sokkal jobb külön Douro-napként, Pinhão alvással, nem oda-vissza rohanva.",
      "Április 10-re a direkt LIS reptéri visszaút a reális, komoly városnézés nélkül."
    ]
  },
  sectionIntros: {
    restaurants: {
      title: "🇵🇹 Portugál kulinária röviden",
      dishBox: {
        title: "🍽 Jellegzetes portugál fogások röviden",
        items: [
          {
            name: "Bacalhau",
            description: "Sózott tőkehalból készülő gyűjtőfogalom, rengeteg verzióval.",
            flavor: "sósabb, karakteres, olívaolajos, gyakran hagymás-fokhagymás"
          },
          {
            name: "Pastel de nata",
            description: "Leveles tésztás, tojáskrémes kis sütemény, kívül karamellizált tetejű.",
            flavor: "édes, krémes, vaníliás, enyhén pörkölt cukros"
          },
          {
            name: "Francesinha",
            description: "Portói, rétegzett melegszendvics sonkával, kolbásszal, hússal, sajttal és sörös-paradicsomos szósszal.",
            flavor: "nehéz, szaftos, húsos, enyhén csípős és gazdag"
          },
          {
            name: "Bifana",
            description: "Vékony sertéshúsos szendvics, fűszeres szafttal vagy páccal.",
            flavor: "sós, húsos, enyhén fokhagymás-fűszeres, gyors street food jelleg"
          },
          {
            name: "Caldo verde",
            description: "Krumplis-kelkáposztás leves, gyakran chouriço kolbásszal.",
            flavor: "lágy, házias, enyhén füstös, komfortétel"
          },
          {
            name: "Sardinhas assadas",
            description: "Grillezett szardínia, főleg nyári és tengerparti vonalon erős.",
            flavor: "intenzíven halas, füstös, sós, egyszerű és nyersanyagra épülő"
          },
          {
            name: "Arroz de marisco",
            description: "Tenger gyümölcseivel főzött szaftos rizses fogás.",
            flavor: "mélyen tengeri, sós-umamis, sűrű és szaftos"
          },
          {
            name: "Polvo",
            description: "Polipos fogások gyűjtőneve, gyakran sütve vagy burgonyával tálalva.",
            flavor: "tengeries, húsos textúrájú, olívaolajos és fokhagymás"
          }
        ]
      },
      sections: [
        {
          heading: "Rövid ételtörténeti háttér",
          items: [
            "A portugál konyha a tengeri kereskedelem, a katolikus böjti hagyományok és a felfedezések korának hatásából épült fel.",
            "A sózott tőkehal, vagyis a bacalhau kultúrája történetileg a hosszú tárolhatósághoz és az atlanti kereskedelemhez kapcsolódik.",
            "Sok klasszikus édesség kolostori eredetű: tojássárgája, cukor és leveles tésztás hagyományok adják az alapot."
          ]
        },
        {
          heading: "A portugál konyha fő karaktere",
          items: [
            "Alapkarakter: halas, olívaolajos, kenyérre és rizsre épülő, mégis rusztikus és laktató.",
            "Egyszerre tud nagyon egyszerű lenni, például grillezett hal vagy bifana, és nagyon rétegzett, például bacalhau vagy tengeri rizses fogások formájában.",
            "Nem a túlfűszerezés a lényeg, hanem a jó alapanyag, a só, a textúra és a lassabb, hagyományos főzési logika."
          ]
        },
        {
          heading: "Régiós fókusz ezen az úton",
          items: [
            "Lisszabon: pastel de nata, petiscos, tőkehalas fogások, kisebb tabernák és városi klasszikusok.",
            "Nazaré / középső partvidék: halas-tengeri karakter, egyszerűbb tengerparti fogások.",
            "Porto: testesebb, húsosabb konyha, francesinha, bifana, gazdagabb szószos fogások.",
            "Douro / Pinhão: borvidéki vacsorák, lassabb ritmus, borpárosítás és tájhoz kötött esti étkezés."
          ]
        },
        {
          heading: "Mit kell megkóstolni?",
          items: [
            "Pastel de nata vagy a klasszikus Pastéis de Belém.",
            "Legalább egy bacalhau fogás, mert ez a portugál konyha egyik alappillére.",
            "Portóban francesinha vagy bifana, ha belefér egy nehezebb, helyi karakterű étkezés.",
            "Caldo verde, sardinhas assadas, arroz de marisco vagy polipétel, ha az adott hely kínálata jó.",
            "A Douro-ban pedig legalább egy rendes boros vacsora vagy kóstolóest."
          ]
        }
      ],
      paragraphs: [
        "A portugál konyha egyszerre atlanti, mediterrán és birodalmi örökségű: a hal, a tenger gyümölcsei, az olívaolaj, a kenyér, a rizs, a sertés és a lassan főzött, rusztikus fogások adják az alapját. A felfedezések korával együtt rengeteg fűszer, cukor és új alapanyag érkezett be, ezért a portugál étkezés egyszerre tud egyszerű és történetileg meglepően gazdag lenni.",
        "A legismertebb történeti vonal a bacalhau, vagyis a sózott tőkehal kultúrája, amely a tengeri kereskedelemmel és a hosszú tárolhatósággal fonódott össze. Ugyanilyen fontos az édességek világa is: sok klasszikus portugál desszert kolostori eredetű, tojássárgájára és cukorra épülő receptekkel.",
        "Amit ezen az úton régiónként érdemes kiemelni: Lisszabonban a pastel de nata, a petiscos és az egyszerűbb tabernaételek; Nazaré környékén a tengeri-halászos karakter; Portóban a testesebb, húsosabb vonal, például francesinha vagy bifana; a Douro-ban pedig a bor, a lassabb vacsora és a borvidéki fogások hangulata a legerősebb."
      ],
      highlights: [
        "Jellegzetes portugál ételek: bacalhau, caldo verde, sardinhas assadas, bifana, francesinha, arroz de marisco, polvo.",
        "Kötelezően megkóstolandó: pastel de nata, jó kenyér + olívaolaj, legalább egy tőkehalas fogás és Portóban valami testesebb húsos étel.",
        "Desszertvonal: Pastéis de Belém, Sintrában travesseiros vagy queijadas, Portóban pedig kávé mellé klasszikus cukrászdai sütemények.",
        "Borfronton a Douro és a portói bor a legfontosabb, de sima asztali vörös és fehér borokból is erős az ország."
      ]
    },
    sights: {
      title: "🏛 Látnivaló-logika",
      paragraphs: [
        "Ez az út nem mindent akar lefedni Portugáliából, hanem egy nagyon tudatos északi ívű válogatást ad: Lisszabon történelmi magja, Sintra romantikus tája, a közép-portugál tranzitállomások, Porto városi csúcspontjai és a Douro borvidéki lezárása együtt állnak össze.",
        "A legerősebb szerkezeti váltások: császári-felfedezéskori Belém, középkorias Alfama, romantikus Sintra, középkori Óbidos, hullámos Nazaré, emlékezethely Batalha, zarándok-Fátima, majd a kereskedő-boros Porto és a lelassuló Douro."
      ],
      highlights: [
        "Must-see tengely: Jerónimos, Pena, Nazaré Sítio, Batalha, São Bento, Ribeira, N222, Pinhão.",
        "A terv úgy van összerakva, hogy a legerősebb ikonikus pontok férjenek bele, ne a legtöbb név.",
        "A napi oldalaknál az inline boxok ott magyaráznak, ahol a helyszín először tényleg releváns."
      ]
    },
    practical: {
      title: "🧳 Praktikus keret",
      paragraphs: [
        "Ennél az útvonalnál a kulcs nem a túltervezés, hanem a ritmus: az elején városi napok tömegközlekedéssel, utána csak akkor autó, amikor tényleg szükséges. Ettől marad kényelmes a lisszaboni szakasz, és ettől lesz értelmes a Porto + Douro lezárás.",
        "A legfontosabb praktikus döntések: időpontra vett jegyek a zsúfolt helyekre, Portóban egyetlen jó parkolóbázis, és a Douro-napon gyors kijutás után panorámaút. A visszaút napjára pedig semmit nem szabad már túlpakolni."
      ],
      highlights: [
        "Jegyek: Jerónimos, Pena, Livraria Lello előre.",
        "Autó: csak április 7-től, Portóban egy helyen letéve.",
        "Douro: előbb gyors út, utána N222, este már autómentes kóstoló.",
        "Visszaút: Pinhão → LIS direkt logikával, nem még egy kitérős nappal."
      ]
    }
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
      mapTitle: "Érkezés",
      mapStops: [
        { label: "BUD", note: "indulás", color: "#8a2e52" },
        { label: "LIS", note: "23:15", color: "#1f5a3e" }
      ],
      schedule: [
        { time: "este", title: "✈ Ryanair BUD → LIS", detail: "Kb. 4 órás repülés." },
        { time: "~23:15", title: "🛬 Megérkezés Lisszabonba", detail: "Csomagfelvétel és kijutás a reptérről." },
        { time: "23:30", title: "🚕 Transzfer a szállásra", detail: "Taxi vagy Uber, rövid út a belvárosba." },
        { time: "00:00", title: "🛏 Bejelentkezés és alvás", detail: "Másnap már teljes lisszaboni nap indul." }
      ],
      citySummaries: [
        {
          title: "🏙 Lisszabon összefoglaló",
          subtitle: "Az ország fővárosa, a Tejo és az Atlanti-óceán találkozási zónájában.",
          stats: ["~576 ezer lakos", "Portugália fővárosa", "1147 óta portugál kézen", "1256 óta főváros"],
          paragraphs: [
            "Lisszabon Európa egyik legrégebbi fővárosa, története a római Olissipótól a mór korszakon át a középkori portugál királyságig húzódik. A város 1147-ben került vissza keresztény uralom alá, majd 1256-ban lett Portugália fővárosa.",
            "A mai város karakterét egyszerre határozza meg a dombos topográfia, a Tejo-part, a felfedezések kora és az 1755-ös nagy földrengés utáni újjáépítés. Baixa rácsos szerkezete, Belém emlékei és Alfama réteges utcavilága ezért ennyire eltérő hangulatú.",
            "A rövid utazó számára Lisszabon legerősebb tengelye általában Belém történelmi zónája, Alfama kilátói és a Baixa–Chiado városi mag. Ezek együtt adják a város történelmi, vallási és mindennapi arcát.",
            "Gasztronómiailag Lisszabon egyszerre tradicionális és könnyen fogyasztható város: a pastel de nata, a tőkehalételek, a grillezett szardínia, a petiscos és a borbárok világa gyorsan érthető. Belémben a Pastéis de Belém a legismertebb ikon, míg Alfamában és Bairro Altóban a kisebb, hangulatos tabernák adják a karakteresebb esti élményt."
          ],
          highlights: [
            "Belém: Jerónimos kolostor, Belém-torony és a Padrão dos Descobrimentos együtt mutatják meg a felfedezések korát.",
            "Alfama: középkori utcaszövet, kilátók és a São Jorge-vár környéke adják a legkarakteresebb régi lisszaboni hangulatot.",
            "Baixa és Chiado: a földrengés utáni újjáépített városmag, elegáns utcákkal, terekkel és erős kávéházi-kereskedelmi múlttal.",
            "Praça do Comércio és Rua Augusta: a reprezentatív folyóparti városi tengely, első lisszaboni sétára tökéletes.",
            "Elevador de Santa Justa és Miradouro São Pedro de Alcântara: gyorsan elérhető klasszikus panorámapontok.",
            "LX Factory és Time Out Market: modernebb, gasztronómiai és urbánus ellenpont a történeti mag mellé.",
            "Cabo da Roca és Cascais: opcionális nagyobb kitérők, ha a liszaboni régió atlanti arcát is látni akarjátok."
          ],
          sources: [
            { label: "Wikipedia Lisbon", url: "https://en.wikipedia.org/wiki/Lisbon", icon: "W" },
            { label: "Wikipedia Jerónimos", url: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", icon: "J" },
            { label: "Wikipedia Belém Tower", url: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", icon: "B" }
          ]
        }
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
      mapTitle: "Belém → Alfama → Baixa",
      mapStops: [
        { label: "Belém", color: "#1f5a3e" },
        { label: "Alfama", color: "#8a4f24" },
        { label: "Baixa", color: "#233d7b" }
      ],
      schedule: [
        { time: "09:00", title: "☕ Pastéis de Belém", detail: "Ikonikus pastel de nata, reggel a legrövidebb a sor.", placeBox: {
          title: "Belém negyed",
          text: "Belém Lisszabon történelmi folyóparti zónája, amely a portugál felfedezések korának legerősebb emlékhelyeit sűríti össze. Itt koncentrálódik a Jerónimos kolostor, a Belém-torony és a Padrão dos Descobrimentos világa, ezért ez a város egyik legfontosabb történeti negyede.",
          highlights: [
            "monumentális folyóparti történelmi zóna",
            "Jerónimos és Belém-torony ugyanabban a tengelyben",
            "Pastéis de Belém miatt gasztronómiailag is ikonikus"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Bel%C3%A9m,_Lisbon",
          maps: "https://www.google.com/maps/search/Bel%C3%A9m+Lisbon"
        } },
        { time: "09:30", title: "🏛 Jerónimos kolostor", detail: "UNESCO látnivaló, online jegy kötelezően ajánlott.", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", googleRating: "4.5", price: "10€/fő" },
        { time: "11:00", title: "🗼 Belém-torony", detail: "Folyóparti séta és rövid fotóblokk.", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", googleRating: "4.6", price: "8€/fő" },
        { time: "13:00", title: "🍽 Ebéd: Solar dos Presuntos", detail: "Klasszikus portugál húsos hely a belvárosban." },
        { time: "15:00", title: "🏘 Alfama negyed", detail: "São Jorge vár környéke és kilátók.", placeBox: {
          title: "Alfama",
          text: "Alfama Lisszabon legrégebbi és legkarakteresebb negyede, amely a mór korszakot és a középkori utcahálózatot őrzi a leglátványosabban. Szűk utcák, lépcsők, kis terek, kilátópontok és a fado hangulata miatt ez a város leginkább atmoszférikus része.",
          highlights: [
            "középkori, réteges utcaszövet",
            "São Jorge-vár környéke és több miradouro",
            "a fado és a régi lisszaboni hangulat fő terepe"
          ],
          wikipedia: "https://hu.wikipedia.org/wiki/Alfama",
          maps: "https://www.google.com/maps/search/Alfama+Lisbon"
        } },
        { time: "17:30", title: "🚶 Baixa–Chiado séta", detail: "Praça do Comércio és Rua Augusta.", placeBox: {
          title: "Baixa–Chiado",
          text: "Baixa a nagy 1755-ös földrengés utáni újjáépített városmag, szabályosabb utcahálózattal, reprezentatív terekkel és kereskedelmi tengelyekkel. Chiado ehhez képest elegánsabb, kulturálisabb és kávéházasabb réteg, így a két negyed együtt mutatja meg a modern nagyvárosi Lisszabon központját.",
          highlights: [
            "Praça do Comércio mint folyóparti főtér",
            "Rua Augusta és az árkádos, klasszikus belvárosi séta",
            "Chiado: könyves, kávéházas, urbánusabb városi hangulat"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Baixa_(Lisbon)",
          maps: "https://www.google.com/maps/search/Baixa+Chiado+Lisbon"
        } },
        { time: "20:00", title: "🍽 Vacsora: Taberna Sal Grosso", detail: "Autentikus alfamai vacsora, foglalással." }
      ],
      daySights: [
        { name: "Jerónimos kolostor", googleRating: "4.5", price: "10€/fő", text: "Belém legfontosabb történelmi pontja, manuelin stílusú UNESCO-helyszín.", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon" },
        { name: "Belém-torony", googleRating: "4.6", price: "8€/fő", text: "Folyóparti erőd és rövid, erős fotós megálló a Jerónimos után.", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon" }
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
      mapTitle: "Sintra kör",
      mapStops: [
        { label: "Rossio", color: "#1f5a3e" },
        { label: "Sintra", color: "#8a4f24" },
        { label: "Pena", color: "#b8860b" },
        { label: "Regaleira", color: "#233d7b" }
      ],
      schedule: [
        { time: "08:00", title: "🚆 Rossio → Sintra", detail: "Kb. 40 perc vonat, reggeli indulással." },
        { time: "09:30", title: "🏰 Palácio Nacional da Pena", detail: "A nap legfontosabb pontja, online időponttal.", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", googleRating: "4.4", price: "20€/fő", placeBox: {
          title: "Pena-palota",
          text: "A Pena Sintra legismertebb helye, színes romantikus palota és egyben erős panorámapont is. Itt a korai idősáv sokat számít, mert később gyorsan telítődik a környék és a bejutás is lassabb lesz.",
          highlights: [
            "a sintrai nap fő programpontja",
            "romantikus 19. századi palota",
            "időpontra vett jeggyel működik a legjobban"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace",
          maps: "https://www.google.com/maps/search/Pena+Palace+Sintra"
        } },
        { time: "12:00", title: "🌳 Quinta da Regaleira", detail: "Iniciatikus kút és kert.", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", googleRating: "4.8", price: "8€/fő", placeBox: {
          title: "Quinta da Regaleira",
          text: "A Regaleira a sintrai nap misztikusabb ellenpontja: kert, villa, föld alatti hangulat és az ikonikus iniciatikus kút együtt adják az élményt. A Penához képest kevésbé monumentális, de sokkal játékosabb és felfedezős hely.",
          highlights: [
            "iniciatikus kút és szimbolikus kert",
            "erős második nagy stop a Pena után",
            "gyalogos bolyongásra ideális"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira",
          maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra"
        } },
        { time: "13:30", title: "🍽 Ebéd Sintra központban", detail: "Rövid, könnyű ebéd." },
        { time: "15:00", title: "🌊 Cabo da Roca opció", detail: "Ha a tempó bírja, beleférhet." },
        { time: "17:30", title: "🚆 Vissza Lisszabonba", detail: "Este már pihenős lezárás." }
      ],
      daySights: [
        { name: "Pena kastély", googleRating: "4.4", price: "20€/fő", text: "Sintra zászlóshajója, erős korai idősávval működik a legjobban.", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra" },
        { name: "Quinta da Regaleira", googleRating: "4.8", price: "8€/fő", text: "Titokzatos kert és iniciatikus kút, tökéletes második nagy stop a Pena után.", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra" }
      ],
      citySummaries: [
        {
          title: "🏰 Sintra összefoglaló",
          subtitle: "UNESCO kulturális táj, palotákkal, hegyekkel és romantikus villákkal.",
          stats: ["UNESCO: 1995", "Lisszabon térsége", "Sintra-hegység", "romantikus paloták"],
          paragraphs: [
            "Sintra a portugál romantikus tájépítészet és rezidenciakultúra egyik csúcspontja, ezért került a világörökségi listára. A városmag és a hegyvidéki környezet együtt alkotják azt a kulturális tájat, amelyben kastélyok, kertek, villák és erdős hegyoldalak fonódnak össze.",
            "A térség már a középkorban is fontos volt, de mai hírnevét főleg a 19. századi romantikus építészeti hullámnak köszönheti. A Pena-palota ennek ikonikus szimbóluma, míg a Quinta da Regaleira a misztikus, szimbolikus kerteivel különösen erős élmény.",
            "Sintrát nem klasszikus városként, hanem egymásra épülő helyszínek rendszerként érdemes nézni: központ, kastélyzóna, kertek és a Cabo da Roca felé nyitó atlanti perem együtt adják a karakterét.",
            "Gasztronómiai szempontból Sintra kisebb léptékű, de erős helyi identitású megálló. A travesseiros és queijadas a legismertebb helyi édességek, ezért a kastélyok közötti napba jól illik egy rövid cukrászdás vagy kávézós pihenő a központban."
          ],
          highlights: [
            "Pena-palota: a térség legikonikusabb helye, romantikus palota és erős panorámapont.",
            "Quinta da Regaleira: kert, villa és iniciatikus kút, a sintrai nap legmisztikusabb helyszíne.",
            "Mór vár: ha több idő lenne, ez adná a leginkább katonai-történeti ellenpontot a romantikus paloták mellé.",
            "Sintra Nemzeti Palota: a városmag királyi rétegét mutatja meg, jellegzetes ikerkéményeivel.",
            "Cabo da Roca: Európa kontinentális nyugati pereme, erős atlanti lezárás egy hosszabb nap végére."
          ],
          sources: [
            { label: "Wikipedia Sintra", url: "https://en.wikipedia.org/wiki/Sintra", icon: "W" },
            { label: "Wikipedia Pena", url: "https://en.wikipedia.org/wiki/Pena_Palace", icon: "P" },
            { label: "Wikipedia Regaleira", url: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", icon: "R" }
          ]
        }
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
      mapTitle: "Laza lisszaboni nap",
      mapStops: [
        { label: "LX", color: "#1f5a3e" },
        { label: "Bica", color: "#8a4f24" },
        { label: "Chiado", color: "#233d7b" },
        { label: "Hotel", color: "#b8860b" }
      ],
      schedule: [
        { time: "09:30", title: "🌿 LX Factory vagy Jardim da Estrela", detail: "Laza reggel, kávéval.", placeBox: {
          title: "LX Factory / Jardim da Estrela",
          text: "Ez a blokk a klasszikus történeti központ ellenpontja: vagy egy lazább, kreatív-urbánus reggel az LX Factoryban, vagy egy nyugodtabb parkos indulás a Jardim da Estrelában. Mindkettő jól működik puffernapként, amikor nem kell mindent kipipálni.",
          highlights: [
            "LX Factory: ipari-urbánus, kávézós hangulat",
            "Jardim da Estrela: zöldebb, lassabb reggeli indulás",
            "jól illik az április 6-i laza nap logikájához"
          ],
          maps: "https://www.google.com/maps/search/LX+Factory+Lisbon",
          wikipedia: "https://en.wikipedia.org/wiki/LX_Factory"
        } },
        { time: "11:30", title: "🚶 Bica + kilátóblokk", detail: "Miradouro São Pedro de Alcântara környéke.", placeBox: {
          title: "Bica és a kilátók",
          text: "Bica a meredek, sárga siklóval és szűk utcákkal együtt a fotogén lisszaboni városkép egyik röviden is élvezhető része. A São Pedro de Alcântara kilátó ehhez hozzáad egy könnyen elérhető panorámát a város fölött.",
          highlights: [
            "klasszikus lisszaboni siklós utcakép",
            "jó átmenet a laza nap és a városi séta között",
            "kilátóval együtt rövid blokkban is működik"
          ],
          maps: "https://www.google.com/maps/search/Bica+Lisbon",
          wikipedia: "https://en.wikipedia.org/wiki/Bica_funicular"
        } },
        { time: "13:00", title: "🍽 Ebéd Chiado / Bairro Alto környékén", detail: "Nyugodt, nem túlvállalt ebéd." },
        { time: "15:00", title: "🛍 Szabad blokk", detail: "Time Out Market, vásárlás vagy pihenés." },
        { time: "17:30", title: "🧳 Pakolás + autós nap előkészítése", detail: "Bérlés, útvonal, parkolás, jegyek." },
        { time: "20:00", title: "🍽 Korai vacsora Lisszabonban", detail: "Másnap hosszú északi autóút jön." }
      ]
    },
    {
      id: "d5",
      tabLabel: "Ápr. 7 · Óbidos–Nazaré–Batalha",
      dayLabel: "5. nap",
      dateLabel: "2026. április 7., kedd",
      title: "🚗 Lisszabon → Óbidos → Nazaré → Batalha → Fátima → Porto",
      subtitle: "09:00 körüli indulással teljesen reális, esti portói érkezéssel.",
      stay: "Porto szállás (2 éj)",
      note: "Ez a nap azért működik jól, mert minden megálló rövid és lényegi. Óbidosban elég egy fókuszált séta, Nazaréban rögtön a Sítióra menj, Batalhában a monostor a lényeg, Fátimában pedig a kegyhely magja.",
      bullets: [
        "Autófelvétel csak ma reggel",
        "Óbidos rövid városfalas megálló",
        "Nazaré fent, a Sítio részen",
        "Batalha + Fátima után esti Porto érkezés"
      ],
      mapTitle: "Autós nap",
      mapStops: [
        { label: "LIS", color: "#1f5a3e" },
        { label: "Óbidos", color: "#8a4f24" },
        { label: "Nazaré", color: "#8a4f24" },
        { label: "Batalha", color: "#8a4f24" },
        { label: "Fátima", color: "#8a4f24" },
        { label: "Porto", color: "#233d7b" }
      ],
      schedule: [
        { time: "09:00", title: "🚗 Indulás Lisszabonból", detail: "Az autót vagy előző este veszed fel, vagy közvetlenül indulás előtt." },
        { time: "10:00", title: "🏰 Óbidos", detail: "Kb. 45–60 perc: Porta da Vila, Rua Direita, rövid fal-szakasz és a kastély külső része.", meta: "A falakon kívüli parkolók a legpraktikusabbak.", maps: "https://www.google.com/maps/search/%C3%93bidos+Portugal", wikipedia: "https://en.wikipedia.org/wiki/%C3%93bidos,_Portugal", googleRating: "4.7", price: "Ingyenes", placeBox: {
          title: "Óbidos – rövid megállós logika",
          text: "Óbidosnál nem érdemes túlbonyolítani a napot: Porta da Vila, Rua Direita, egy rövid várfal-szakasz és a kastély külső része bőven elég. Parkolni a falakon kívüli külső parkolókban a legegyszerűbb, onnan pár perc séta a kapu.",
          highlights: [
            "45–60 percben is teljes élményt ad",
            "a városforma fontosabb, mint a sok külön programpont",
            "külső parkolóból érdemes indulni"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/%C3%93bidos,_Portugal",
          maps: "https://www.google.com/maps/search/%C3%93bidos+Portugal"
        } },
        { time: "11:00", title: "🚗 Óbidos → Nazaré", detail: "Kb. 35–60 perc." },
        { time: "12:00", title: "🌊 Nazaré – Sítio", detail: "Kb. 1.5–2 óra: Miradouro do Suberco, Nossa Senhora da Nazaré és a Forte / világítótorony.", meta: "Érdemes rögtön fent parkolni, nem a lenti strandos résznél.", maps: "https://www.google.com/maps/search/Miradouro+do+Suberco+Nazar%C3%A9", wikipedia: "https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal", googleRating: "4.7", price: "Ingyenes / opcionális", placeBox: {
          title: "Nazaré – merre menjetek?",
          text: "Nazaréban a legerősebb rövid kör a Sítio rész: Miradouro do Suberco, Nossa Senhora da Nazaré szentély, majd a Forte de São Miguel Arcanjo / világítótorony a Praia do Norte hullámaihoz. Inkább fent parkoljatok, ne a lenti strandnál kezdjetek.",
          highlights: [
            "a felső rész a rövid stop legjobb verziója",
            "kilátó + szentély + forte együtt ad teljes kört",
            "nem kell lemenni a klasszikus strandrészhez"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal",
          maps: "https://www.google.com/maps/search/Miradouro+do+Suberco+Nazar%C3%A9"
        } },
        { time: "14:00", title: "🚗 Nazaré → Batalha", detail: "Kb. 32–33 perc." },
        { time: "14:40", title: "⛪ Mosteiro da Batalha", detail: "45–60 perc, rövid megállóra is kiváló UNESCO-helyszín.", meta: "A monostor közeli parkolóiból pár perc séta a bejárat.", maps: "https://www.google.com/maps/search/Batalha+Monastery", wikipedia: "https://hu.wikipedia.org/wiki/Batalhai_kolostor", googleRating: "4.7", price: "helyszíni jegy", placeBox: {
          title: "Batalha – rövid, de súlyos stop",
          text: "Batalhában a Mosteiro da Batalha a fő attrakció, rövid megállóra is kiváló. A monostor miatt a hely történeti súlya sokkal nagyobb, mint amit a kisvárosi méret elsőre sugall.",
          highlights: [
            "UNESCO-helyszín rövid megállóra is",
            "a fő élmény maga a monostor",
            "közeli parkolóval egyszerűen kezelhető"
          ],
          wikipedia: "https://hu.wikipedia.org/wiki/Batalhai_kolostor",
          maps: "https://www.google.com/maps/search/Batalha+Monastery"
        } },
        { time: "15:45", title: "🚗 Batalha → Fátima", detail: "Kb. 24 perc." },
        { time: "16:15", title: "🕊 Fátima szentély", detail: "45–60 perc: Capela das Aparições, a nagy tér és a Basilica of Our Lady of the Rosary.", meta: "A nagy külső parkolók közül a P4/P5/P6/P10/P12/P13 a legismertebb zónák.", maps: "https://www.google.com/maps/search/Sanctuary+of+F%C3%A1tima", wikipedia: "https://hu.wikipedia.org/wiki/F%C3%A1tima_(Portug%C3%A1lia)", googleRating: "4.8", price: "Ingyenes", placeBox: {
          title: "Fátima – kegyhelymag",
          text: "Fátimában rövid körre a kegyhely központi része elég: Capela das Aparições, a nagy tér és a Basilica of Our Lady of the Rosary. A shrine körül több nagy parkolózóna van, ezért logisztikailag is jól működik egy 45–60 perces blokkban.",
          highlights: [
            "a központi kegytér a lényeg",
            "rövid megállóban is erős élmény",
            "a P4/P5/P6/P10/P12/P13 zónák a legismertebbek"
          ],
          wikipedia: "https://hu.wikipedia.org/wiki/F%C3%A1tima_(Portug%C3%A1lia)",
          maps: "https://www.google.com/maps/search/Sanctuary+of+F%C3%A1tima"
        } },
        { time: "17:15", title: "🚗 Fátima → Porto", detail: "Kb. 1 óra 53–54 perc, így a 19:00 körüli portói érkezés reális." },
        { time: "19:15", title: "🏨 Check-in Portóban", detail: "Este már csak vacsora és pihenés." }
      ],
      daySights: [
        { name: "Óbidos óváros", googleRating: "4.7", price: "Ingyenes", text: "Porta da Vila, Rua Direita és rövid várfal-szakasz, pont annyi idővel, amennyi nem feszíti túl a napot.", wikipedia: "https://en.wikipedia.org/wiki/%C3%93bidos,_Portugal", maps: "https://www.google.com/maps/search/%C3%93bidos+Portugal" },
        { name: "Nazaré – Sítio + Forte", googleRating: "4.7", price: "Ingyenes / opcionális", text: "A rövid Nazaré-blokk lényege a felső rész, a kilátó és a hullámnéző pont.", wikipedia: "https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal", maps: "https://www.google.com/maps/search/Miradouro+do+Suberco+Nazar%C3%A9" },
        { name: "Mosteiro da Batalha", googleRating: "4.7", price: "helyszíni jegy", text: "Rövid megállóra is nagy súlyú UNESCO-helyszín, jól működik ezen a tranzitnapon.", wikipedia: "https://hu.wikipedia.org/wiki/Batalhai_kolostor", maps: "https://www.google.com/maps/search/Batalha+Monastery" },
        { name: "Fátima szentély", googleRating: "4.8", price: "Ingyenes", text: "A kegyhely központi része rövid körben is erős és emlékezetes.", wikipedia: "https://hu.wikipedia.org/wiki/F%C3%A1tima_(Portug%C3%A1lia)", maps: "https://www.google.com/maps/search/Sanctuary+of+F%C3%A1tima" }
      ],
      citySummaries: [
        {
          title: "🏰 Óbidos összefoglaló",
          subtitle: "Fallal körülvett középkori város, a portugál királynék városaként is ismert.",
          stats: ["~11.7 ezer lakos", "Leiria körzet", "középkori falváros", "UNESCO City of Literature"],
          paragraphs: [
            "Óbidos neve a latin oppidum szóból ered, és a település már a római korszakban is lakott volt. A mai dombtetőre szervezett erődített városkép a mór és a középkori portugál korszak öröksége.",
            "A várost 1148-ban foglalták vissza a móroktól, majd a portugál királynékhoz kötődő patrónusi hagyomány miatt gyakran a 'királynék városának' is nevezik. Ez a királyi kapcsolat sokáig meghatározta a település rangját és fejlődését.",
            "Utazóként Óbidos legerősebb élménye maga a kompakt városi szövet: kapuk, falak, keskeny utcák és a vár együttese. Rövid megállóként is működik, mert maga a városforma a fő látnivaló.",
            "Gasztronómiai szinten Óbidos legismertebb turistás jelképe a ginjinha csokipohárban, de itt inkább a gyors, hangulati megálló a lényeg. Nem étkezős főállomásként, hanem középkori ráhangolódásként működik igazán jól."
          ],
          highlights: [
            "Porta da Vila és a középkori falrendszer: az érkezés utáni legerősebb első benyomás.",
            "Rua Direita: a fő gyalogos tengely, boltokkal, kőházakkal és gyors városi orientációval.",
            "Óbidos vára és a magaslati városkép: kívülről és belülről is jól működő rövid fotós pont.",
            "Irodalmi és fesztiválváros jelleg: a hely nem csak díszlet, hanem aktív kulturális identitással is bír."
          ],
          sources: [
            { label: "Wikipedia Óbidos", url: "https://en.wikipedia.org/wiki/%C3%93bidos,_Portugal", icon: "W" }
          ]
        },
        {
          title: "🌊 Nazaré összefoglaló",
          subtitle: "Atlanti üdülőváros, világhírű hullámokkal és kettős településszerkezettel.",
          stats: ["~14.9 ezer lakos", "Costa de Prata", "Praia + Sítio", "óriáshullámok"],
          paragraphs: [
            "Nazaré ma egyszerre hagyományos tengerparti város és globálisan ismert szörfhelyszín. A település három fő részből áll, de a látogatók számára a Praia és a magasabban fekvő Sítio a két legfontosabb zóna.",
            "A mai hírnevét a Nazaré-kanyonhoz kötődő óriáshullámok adták, de vallási és helyi identitás szempontjából a Nossa Senhora da Nazaré kultusza és a Sítio magaslati zónája legalább ilyen fontos.",
            "Rövid megállónál érdemes a felső részt választani: innen egyszerre látszik a part, a hullámtörési zóna és a történeti-vallási központ.",
            "Gasztronómiában Nazaré erősen tengeri karakterű hely, klasszikus haltálakkal, grillezett halakkal és egyszerű part menti éttermekkel. Ezen az útvonalon viszont inkább kilátó- és élménystopként működik, nem fő ebédvárosként."
          ],
          highlights: [
            "Sítio és Miradouro do Suberco: a legfontosabb nézőpont, ahonnan a város kettős szerkezete jól érthető.",
            "Nossa Senhora da Nazaré szentély: a hely vallási és identitásbeli középpontja.",
            "Praia do Norte és a nagy hullámok világa: Nazaré globális ismertségének fő oka.",
            "Forte de São Miguel Arcanjo: rövid, erős fotós végpont a hullámnéző körhöz."
          ],
          sources: [
            { label: "Wikipedia Nazaré", url: "https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal", icon: "W" }
          ]
        },
        {
          title: "⛪ Batalha és Fátima összefoglaló",
          subtitle: "Egy történeti emlékezethely és egy globális zarándokközpont ugyanazon napon.",
          stats: ["Batalha: 1385 emlékezete", "UNESCO monostor", "Fátima: 1917 apparíciók", "6–8 millió zarándok/év"],
          paragraphs: [
            "Batalha neve szó szerint 'csatát' jelent, és a település a portugál függetlenség szimbolikus győzelméhez, az 1385-ös aljubarrotai csatához kötődik. A Santa Maria da Vitória kolostort I. János király alapította ennek emlékére, és ez lett a város identitásának magja.",
            "Fátima egészen más korszakhoz és jelentésréteghez tartozik: a város nemzeti és nemzetközi jelentőségét az 1917-es Mária-jelenések története adta meg. A kegyhely mára a katolikus világ egyik legfontosabb zarándokhelye.",
            "A két hely együtt különösen érdekes: Batalha a középkori állam megszilárdulásának emlékezete, Fátima pedig a 20. századi vallási tömegturizmus és zarándoklat egyik fő európai központja.",
            "Gasztronómia szempontból egyik hely sem a trip kulináris csúcspontja, itt inkább a rövid, funkcionális megálló a jó logika. A hangsúly a történeti és spirituális súlyon van, nem a hosszú étkezésen."
          ],
          highlights: [
            "Mosteiro da Batalha: a nap legerősebb középkori emléke, rövid megállóra is nagy súlyú.",
            "UNESCO világörökségi jelentőség: Batalha országos és nem csak regionális jelentőségű hely.",
            "Capela das Aparições és a nagy zarándoktér: Fátima lényegi magja rövid körben is jól érthető.",
            "A bazilikák és a kegyhely központi tengelye: a vallási tér monumentalitása itt a fő élmény."
          ],
          sources: [
            { label: "Wikipedia Batalha", url: "https://en.wikipedia.org/wiki/Batalha,_Portugal", icon: "W" },
            { label: "Wikipedia Fátima", url: "https://en.wikipedia.org/wiki/F%C3%A1tima,_Portugal", icon: "F" }
          ]
        },
        {
          title: "🌉 Porto összefoglaló",
          subtitle: "Portugália második városa, a Douro torkolatánál, történelmi világörökségi maggal.",
          stats: ["~252 ezer lakos", "Portugália 2. legnagyobb városa", "UNESCO: 1996", "Port wine névadó város"],
          paragraphs: [
            "Porto Portugália második legnagyobb városa, és a Douro tölcsértorkolatánál fekvő történeti magja az ország egyik legfontosabb városi örökségterülete. A város római előzményei és a Portus Cale névkapcsolat révén a portugál államnév eredetével is összefüggésbe hozzák.",
            "A mai Porto karakterét a meredek domboldalak, a folyóparti kereskedelmi múlt, a barokk templomok, azulejo-hagyomány és a Gaia felé nyitó boros infrastruktúra együtt határozza meg. A történeti központ, a Luís I híd és a Serra do Pilar együtt kerültek UNESCO-védelem alá.",
            "A rövid városi látogatás legerősebb tengelye a São Bento–Sé–Clérigos–Lello–Ribeira–Gaia vonal. Ez egyszerre mutatja meg Porto történeti, vallási, kereskedelmi és vizuális identitását.",
            "Gasztronómiában Porto sokkal robusztusabb és direktebb, mint Lisszabon: francesinha, bifana, grillezett húsok, gazdag desszertek és természetesen a portói bor a város kulcselemei. Gaia pincéi ezért nem csak turisztikai pontok, hanem a városi identitás részei is."
          ],
          highlights: [
            "UNESCO történelmi központ: sűrű, emelkedőkkel és szűk utcákkal teli városi szövet.",
            "São Bento és az azulejo kultúra: Porto egyik legerősebb rövid belépési pontja.",
            "Sé és Clérigos: a vallási és panorámás Porto két kulcseleme.",
            "Livraria Lello: turisztikus, de vizuálisan még mindig erős állomás.",
            "Ribeira + Dom Luís I híd: az ikonikus képeslap-Porto magja.",
            "Port wine és Gaia pincéi: a város gazdasági és gasztronómiai identitásának lényege."
          ],
          sources: [
            { label: "Wikipedia Porto", url: "https://en.wikipedia.org/wiki/Porto", icon: "W" },
            { label: "Wikipedia São Bento", url: "https://hu.wikipedia.org/wiki/S%C3%A3o_Bento_p%C3%A1lyaudvar_(Porto)", icon: "S" },
            { label: "Wikipedia Luís I Bridge", url: "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge", icon: "B" }
          ]
        }
      ]
    },
    {
      id: "d6",
      tabLabel: "Ápr. 8 · Porto",
      dayLabel: "6. nap",
      dateLabel: "2026. április 8., szerda",
      title: "🏙 Porto egész nap, gyalogos körrel",
      subtitle: "Az autót egyszer leteszed, és a klasszikus Porto-kört végig lehet sétálni.",
      stay: "Porto szállás (2 éj)",
      note: "Ha a felső belváros a fő fókusz, a Saba Cardosas a legpraktikusabb. Ha a folyópart és Gaia fontosabb, a Saba Ribeira jobb választás. Nagy, egyszerű bázisparkolónak a Silo Auto is működik.",
      bullets: [
        "São Bento, Sé, Clérigos, Lello",
        "Ribeira és Dom Luís I híd",
        "Késő délután/este Gaia borospincék"
      ],
      mapTitle: "Porto gyalogos kör",
      mapStops: [
        { label: "São Bento", color: "#233d7b" },
        { label: "Sé", color: "#1f5a3e" },
        { label: "Clérigos", color: "#8a4f24" },
        { label: "Lello", color: "#b8860b" },
        { label: "Ribeira", color: "#233d7b" },
        { label: "Gaia", color: "#b8860b" }
      ],
      schedule: [
        { time: "09:30", title: "🚗 Autó letétele", detail: "Egész napos városi séta indul innen.", meta: "Saba Cardosas / Saba Ribeira / Silo Auto.", placeBox: {
          title: "Porto parkolás – melyik garázs a jó?",
          text: "Ha a felső belvárosi blokk a fontos, a Saba Cardosas a legpraktikusabb, mert közel van São Bentóhoz, a Séhez, Clérigoshoz és a gyalogos központhoz. Ribeira-fókuszhoz a Saba Ribeira jobb, egyszerű nagy bázisnak pedig a Silo Auto működik.",
          highlights: [
            "felső belvároshoz Cardosas",
            "folyóparti fókuszhoz Ribeira",
            "egyszerű bázisnak Silo Auto"
          ],
          maps: "https://www.google.com/maps/search/Saba+Cardosas+Porto"
        } },
        { time: "10:00", title: "🚉 São Bento", detail: "10–15 perc, de kihagyhatatlan azulejo-fal.", maps: "https://www.google.com/maps/search/S%C3%A3o+Bento+Station+Porto", wikipedia: "https://hu.wikipedia.org/wiki/S%C3%A3o_Bento_p%C3%A1lyaudvar_(Porto)", googleRating: "4.7", price: "Ingyenes", placeBox: {
          title: "São Bento pályaudvar",
          text: "A São Bento rövid idővel is erős stop, mert azulejo-falai azonnal megadják Porto vizuális karakterét. Ideális első belépési pont a városba, mert központi helyen van és gyorsan átfordul a séta a környező negyedekbe.",
          highlights: [
            "ikonikus azulejo-falak",
            "nagyon rövid idővel is megéri",
            "jó kiindulópont a belvárosi körhöz"
          ],
          wikipedia: "https://hu.wikipedia.org/wiki/S%C3%A3o_Bento_p%C3%A1lyaudvar_(Porto)",
          maps: "https://www.google.com/maps/search/S%C3%A3o+Bento+Station+Porto"
        } },
        { time: "10:30", title: "⛪ Sé do Porto + kilátás", detail: "30–45 perc a katedrális körül.", maps: "https://www.google.com/maps/search/S%C3%A9+do+Porto", wikipedia: "https://en.wikipedia.org/wiki/Porto_Cathedral", googleRating: "4.6", price: "részben ingyenes" },
        { time: "11:30", title: "🗼 Clérigos", detail: "45–60 perc a toronnyal és a környező utcákkal.", maps: "https://www.google.com/maps/search/Cl%C3%A9rigos+Tower+Porto", wikipedia: "https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church", googleRating: "4.5", price: "8€/fő" },
        { time: "12:45", title: "📚 Livraria Lello", detail: "30–45 perc, előre vett időpontos jeggyel.", meta: "A voucher-rendszer miatt érdemes előre foglalni.", maps: "https://www.google.com/maps/search/Livraria+Lello", wikipedia: "https://en.wikipedia.org/wiki/Livraria_Lello", googleRating: "4.1", price: "jegyes belépés", placeBox: {
          title: "Livraria Lello – miért kell előre nézni?",
          text: "A Lello jegyes, voucher-rendszerű belépéssel működik, ezért időpont nélkül könnyen sorban állós, kellemetlen programpont lesz. A napi Porto-körben sokkal jobban működik fix idősávval, különben szétesik a séta ritmusa.",
          highlights: [
            "időpontra foglalva működik jól",
            "sorban állás nélkül marad kompakt a nap",
            "vizuálisan erős, de túlturistás pont"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Livraria_Lello",
          maps: "https://www.google.com/maps/search/Livraria+Lello"
        } },
        { time: "14:00", title: "🍽 Ebéd a belvárosban", detail: "Rövid szünet a délelőtti blokk után." },
        { time: "15:30", title: "🏘 Ribeira + Dom Luís I híd", detail: "A klasszikus folyóparti Porto-élmény.", maps: "https://www.google.com/maps/search/Dom+Lu%C3%ADs+I+Bridge", wikipedia: "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge", googleRating: "4.8", price: "Ingyenes", placeBox: {
          title: "A porto-i klasszikus kör",
          text: "A legerősebb, klasszikus városi sorrend a São Bento–Sé–Clérigos–Lello után Ribeira és a Dom Luís I híd, majd a túlparton Gaia. Ez a blokk adja meg Porto képeslap-szerű, folyóparti identitását.",
          highlights: [
            "Ribeira a legikonikusabb folyóparti rész",
            "a híd a városkép kulcseleme",
            "innen természetesen vezet át az út Gaiába"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge",
          maps: "https://www.google.com/maps/search/Dom+Lu%C3%ADs+I+Bridge"
        } },
        { time: "17:30", title: "🍷 Gaia borospincék", detail: "Késő délutáni/esti pinceblokk a túlparton.", placeBox: {
          title: "Gaia borospincék",
          text: "Gaia nem külön mellékszereplő, hanem a portói bor identitásának tényleges túlparti bázisa. A nap végére azért jó ide tenni ezt a blokkot, mert addigra már nincs szükség komoly gyalogos tempóra, csak kilátásra, borra és lassabb lezárásra.",
          highlights: [
            "port wine cellar élmény",
            "esti lezárásnak ideális",
            "Porto látképe innen különösen erős"
          ],
          maps: "https://www.google.com/maps/search/Vila+Nova+de+Gaia+wine+cellars"
        } },
        { time: "20:30", title: "🍽 Porto esti vacsora", detail: "A nap lezárása a városban vagy Gaiában." }
      ],
      daySights: [
        { name: "São Bento pályaudvar", googleRating: "4.7", price: "Ingyenes", text: "Rövid idővel is nagy élmény az azulejo-falak miatt.", wikipedia: "https://hu.wikipedia.org/wiki/S%C3%A3o_Bento_p%C3%A1lyaudvar_(Porto)", maps: "https://www.google.com/maps/search/S%C3%A3o+Bento+Station+Porto" },
        { name: "Sé do Porto", googleRating: "4.6", price: "részben ingyenes", text: "A katedrális és a környéki kilátópont együtt adnak jó rövid blokkot.", wikipedia: "https://en.wikipedia.org/wiki/Porto_Cathedral", maps: "https://www.google.com/maps/search/S%C3%A9+do+Porto" },
        { name: "Clérigos torony", googleRating: "4.5", price: "8€/fő", text: "Porto egyik klasszikus panorámapontja, jól beilleszthető a belvárosi körbe.", wikipedia: "https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church", maps: "https://www.google.com/maps/search/Cl%C3%A9rigos+Tower+Porto" },
        { name: "Livraria Lello", googleRating: "4.1", price: "jegyes belépés", text: "Időpontfoglalással működik igazán jól, különben sorban állós pont lesz.", wikipedia: "https://en.wikipedia.org/wiki/Livraria_Lello", maps: "https://www.google.com/maps/search/Livraria+Lello" },
        { name: "Ribeira + Dom Luís I híd + Gaia", googleRating: "4.8", price: "Ingyenes / kóstoló opcionális", text: "A legklasszikusabb Porto-élménycsomag egy blokkban, folyóval és híddal.", wikipedia: "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge", maps: "https://www.google.com/maps/search/Dom+Lu%C3%ADs+I+Bridge" }
      ]
    },
    {
      id: "d7",
      tabLabel: "Ápr. 9 · Douro / Pinhão",
      dayLabel: "7. nap",
      dateLabel: "2026. április 9., csütörtök",
      title: "🍇 Porto → Régua → N222 → Pinhão",
      subtitle: "Sokkal jobb külön Douro-napként, és már ott is alszotok.",
      stay: "Pinhão szállás (1 éj)",
      note: "A gyors kijutás Porto felől A4 → A24 útvonalon megy, a szép részhez pedig a Régua–Pinhão közti N222 a kulcs. A fő kóstolót már Pinhãóban érdemes tartani, amikor az autót leraktátok.",
      bullets: [
        "Gyors kijutás Régua felé",
        "N222 panorámaút és Casal de Loivos",
        "Pinhão alvás és esti kóstoló"
      ],
      mapTitle: "Douro útvonal",
      mapStops: [
        { label: "Porto", color: "#233d7b" },
        { label: "Régua", color: "#b8860b" },
        { label: "N222", color: "#8a4f24" },
        { label: "Loivos", color: "#1f5a3e" },
        { label: "Pinhão", color: "#b8860b" }
      ],
      schedule: [
        { time: "09:00", title: "🚗 Indulás Portóból", detail: "A4 → A24 irányban gyors kijutás a völgy felé.", placeBox: {
          title: "Douro-nap logikája Porto felől",
          text: "A gyors kijutás Porto felől az A4 → A24 útvonalon megy Régua felé. A látványos rész utána kezdődik, a Régua–Pinhão közti N222 szakaszon, ezért az elején nem érdemes romantikusan kerülgetni.",
          highlights: [
            "előbb gyors kijutás, utána panoráma",
            "Régua a belépési kapu",
            "az N222 a nap kulcsszakasza"
          ],
          maps: "https://www.google.com/maps/search/Peso+da+R%C3%A9gua"
        } },
        { time: "10:15", title: "📍 Régua", detail: "Rövid technikai vagy kávés megálló." },
        { time: "11:00", title: "🛣 N222 panorámaút", detail: "A Douro egyik legjobb panorámaútja Régua és Pinhão között.", maps: "https://www.google.com/maps/search/N222+Douro", wikipedia: "https://en.wikipedia.org/wiki/EN222", googleRating: "4.8", price: "Ingyenes", placeBox: {
          title: "N222 – maga az út is látnivaló",
          text: "Az N222 a Douro-nap lényege, nem csak összekötő szakasz. Itt a teraszos szőlők, a folyó és az út ritmusa együtt adják azt a tájélményt, ami miatt külön napot kap a völgy.",
          highlights: [
            "Régua és Pinhão közti kulcsszakasz",
            "autós panorámaélmény",
            "nem érdemes sietve átrohanni rajta"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/EN222",
          maps: "https://www.google.com/maps/search/N222+Douro"
        } },
        { time: "12:00", title: "🌅 Casal de Loivos", detail: "Klasszikus képeslapnézet Pinhão fölött.", maps: "https://www.google.com/maps/search/Casal+de+Loivos+Viewpoint", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o,_Alij%C3%B3", googleRating: "4.8", price: "Ingyenes", placeBox: {
          title: "Casal de Loivos kilátó",
          text: "Ez az egyik legismertebb nézőpont Pinhão fölött, és tényleg a klasszikus képeslapnézetet adja. Rövid megállónak ideális, mert nagy vizuális hatást ad kevés időért.",
          highlights: [
            "rövid stopként is erős",
            "a Douro-völgy ikonikus látképe",
            "Pinhão előtt jó hangulati tetőpont"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o,_Alij%C3%B3",
          maps: "https://www.google.com/maps/search/Casal+de+Loivos+Viewpoint"
        } },
        { time: "13:00", title: "🚉 Pinhão Station", detail: "Rövid fotómegálló az azulejo paneleknél.", maps: "https://www.google.com/maps/search/Pinh%C3%A3o+Station", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o", googleRating: "4.4", price: "Ingyenes", placeBox: {
          title: "Pinhão Station",
          text: "A Pinhão Station rövid fotómegállónak is erős pont, a homlokzatán és belső világában az azulejo-panelek miatt. Jó, gyors helyi identitás-sűrítmény, mielőtt átfordul a nap a szállásra és a borkóstolóra.",
          highlights: [
            "25 azulejo paneles állomás",
            "rövid fotóstopként is működik",
            "jó átmenet a tájélményből a falusi magba"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o",
          maps: "https://www.google.com/maps/search/Pinh%C3%A3o+Station"
        } },
        { time: "14:00", title: "🏨 Check-in Pinhãóban", detail: "The Vintage House, LBV House vagy Quinta de la Rosa." },
        { time: "16:00", title: "🍷 Kóstoló Pinhãóban", detail: "A fő kóstoló már autó nélkül legyen.", meta: "Praktikus: Quinta do Bomfim. All-in-one: Quinta de la Rosa.", placeBox: {
          title: "Borászat és kóstoló – mikor, hol?",
          text: "Útközbeni pincének a Quinta do Vallado jó opció lehet, de ha még vezetni kell, inkább csak rövid nézelődés vagy ebéd legyen. A fő kóstolót sokkal jobb már Pinhãóban, autó nélkül letudni, például a Quinta do Bomfimnél vagy egy all-in-one Quinta de la Rosa estén.",
          highlights: [
            "a fő kóstoló már ne vezetés előtt legyen",
            "praktikus: Quinta do Bomfim",
            "hangulatos all-in-one: Quinta de la Rosa"
          ],
          maps: "https://www.google.com/maps/search/Quinta+do+Bomfim+Pinh%C3%A3o"
        } },
        { time: "19:30", title: "🍽 Vacsora és ott alvás", detail: "Nyugodt esti lezárás a völgyben." }
      ],
      daySights: [
        { name: "N222 panorámaút", googleRating: "4.8", price: "Ingyenes", text: "A Douro egyik legszebb autós szakasza, itt maga az út is látnivaló.", wikipedia: "https://en.wikipedia.org/wiki/EN222", maps: "https://www.google.com/maps/search/N222+Douro" },
        { name: "Casal de Loivos kilátó", googleRating: "4.8", price: "Ingyenes", text: "A klasszikus képeslapnézet Pinhão fölött, rövid stopként is megéri.", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o,_Alij%C3%B3", maps: "https://www.google.com/maps/search/Casal+de+Loivos+Viewpoint" },
        { name: "Pinhão Station", googleRating: "4.4", price: "Ingyenes", text: "Azulejo paneles állomás, rövid fotómegállóra tökéletes.", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o", maps: "https://www.google.com/maps/search/Pinh%C3%A3o+Station" }
      ],
      citySummaries: [
        {
          title: "🍇 Régua és Pinhão összefoglaló",
          subtitle: "A Douro borvidék központi városi kapuja és a portói borkultúra szíve.",
          stats: ["Régua: a Douro központja", "Pinhão: 622 lakos (2021)", "portói borvidék magja", "UNESCO kultúrtáj"],
          paragraphs: [
            "Peso da Régua a Douro demarkált borvidék egyik adminisztratív és kereskedelmi központja lett, különösen azután, hogy a térség 18. századi szabályozása és exportlogikája megerősítette a borvidék központi szerepét. A várost gyakran a szőlő és a bor nemzetközi központjaként is emlegetik.",
            "Pinhão ezzel szemben kisebb léptékű, de a Douro-völgy ikonikus falusi-vasúti-borászati világát testesíti meg. A település a Douro jobb partján fekszik, és a régió legismertebb quintáinak többike is innen könnyen elérhető.",
            "A két hely együtt értelmezhető igazán: Régua a kapu és csomópont, Pinhão pedig a sűrített tájélmény. A vasútállomás azulejo-paneljei, a folyópart, a kilátók és a teraszos szőlők együtt adják a Douro leginkább 'képeslapszerű' arcát.",
            "Gasztronómiailag ez már egyértelműen borvidéki tér: a borkóstoló, a folyóparti vacsora, a quinták és a helyi alapanyagokra épülő nyugodtabb étkezés a lényeg. Itt kevésbé a sok látnivaló, inkább a táj, a bor és az esti lelassulás a fő élmény."
          ],
          highlights: [
            "Régua mint a borvidék központi városi bázisa és belépési pontja.",
            "Pinhão mint a portói borkultúra szíve, kisebb léptékű, de ikonikus környezettel.",
            "N222 és a panorámaút-logika: itt maga az út is a program része.",
            "Azulejo állomás, quinták és kilátók: a Douro-völgy leginkább emlékezetes elemei egy blokkban."
          ],
          sources: [
            { label: "Wikipedia Régua", url: "https://en.wikipedia.org/wiki/Peso_da_R%C3%A9gua", icon: "W" },
            { label: "Wikipedia Pinhão (pt)", url: "https://pt.wikipedia.org/wiki/Pinh%C3%A3o_%28Alij%C3%B3%29", icon: "P" },
            { label: "Wikipedia Pinhão Station", url: "https://en.wikipedia.org/wiki/Pinh%C3%A3o_railway_station", icon: "T" }
          ]
        }
      ]
    },
    {
      id: "d8",
      tabLabel: "Ápr. 10 · Visszaút",
      dayLabel: "8. nap",
      dateLabel: "2026. április 10., péntek",
      title: "✈ Pinhão → Lisszabon repülőtér",
      subtitle: "Direkt, gyors visszaút, valódi városnézés nélkül.",
      stay: "Hazautazás",
      note: "Erre a napra nem érdemes már komoly látnivalót tervezni. A jó logika az, hogy a gyors úton mentek vissza LIS felé, és legfeljebb egy rövid állomásfotó fér bele indulás előtt, ha az előző nap kimaradt.",
      bullets: [
        "Pinhão → LIS kb. 367 km / 4 óra körül",
        "12:30 körüli indulás kényelmes esti járathoz",
        "Wizz Air · YPJP7Q"
      ],
      mapTitle: "Hazautazás",
      mapStops: [
        { label: "Pinhão", color: "#b8860b" },
        { label: "LIS", color: "#1f5a3e" },
        { label: "BUD", color: "#8a2e52" }
      ],
      guides: [
        {
          title: "Visszaút – mire számíts?",
          text: "A gyors logika szerint Pinhão → LIS kb. 367 km és nagyjából 4 óra körüli nettó út. Ha 18:00 körül már a reptéren akartok lenni, a 12:30 körüli indulás kényelmes, tartalékos verzió.",
          linkLabel: "Pinhão → LIS útvonal",
          url: "https://www.rome2rio.com/s/Pinh%C3%A3o-Vila-Real-Portugal/Lisbon-Airport-LIS"
        },
        {
          title: "Mit ne tervezz erre a napra?",
          text: "Erre a napra már nem érdemes komoly városnézést vagy panorámautas kitérőt tenni. Legfeljebb egy 15–20 perces Pinhão Station fotó fér bele indulás előtt, ha előző nap kimaradt.",
          linkLabel: "Pinhão Station újra",
          url: "https://www.visitportugal.com/en/NR/exeres/7620ADD3-6D40-4E9F-9712-6B1DD244C2C4"
        }
      ],
      schedule: [
        { time: "délelőtt", title: "☕ Nyugodt reggel Pinhãóban", detail: "Legfeljebb 15–20 perces állomás- vagy folyóparti fotómegálló." },
        { time: "12:30", title: "🚗 Indulás Pinhãóból", detail: "Gyors főút/autópálya logikával LIS felé, nem a panorámautat erőltetve." },
        { time: "16:30", title: "🛬 Érkezés LIS környékére", detail: "Kb. 4 óra nettó út, tartalékkal számolva." },
        { time: "18:00", title: "🚗 Autóleadás + reptéri buffer", detail: "Kényelmes tartalék az átadásra és a check-inre." },
        { time: "20:30", title: "✈ Wizz Air LIS → BUD", detail: "A mostani terv szerint esti járatlogikával." }
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
          googleRating: "4.2",
          priceLevel: "€€€",
          meta: "R. das Portas de Santo Antão 150",
          url: "https://www.google.com/maps/search/Solar+dos+Presuntos+Lisboa"
        },
        {
          name: "Taberna Sal Grosso",
          type: "Vacsora · Alfama · foglalós hely",
          description: "Kis, autentikus, erős vacsorahely Alfamában.",
          tags: ["🐷 sertés", "🥩 marha", "❌ hal nincs"],
          googleRating: "4.6",
          priceLevel: "€€",
          meta: "Beco do Açúcar 9",
          url: "https://www.google.com/maps/search/Taberna+Sal+Grosso+Alfama+Lisboa"
        },
        {
          name: "Pastéis de Belém",
          type: "Reggeli / kávé · ikonikus",
          description: "A kötelező nata megálló Belémben.",
          tags: ["☕ kávé", "🥮 sütemény"],
          googleRating: "4.6",
          priceLevel: "€",
          meta: "R. de Belém 84-92",
          url: "https://www.google.com/maps/search/Pasteis+de+Belem+Lisboa"
        }
      ]
    },
    {
      city: "Porto",
      items: [
        {
          name: "DOP by Rui Paula",
          type: "Vacsora · finomabb porto-i este",
          description: "Erős választás a teljes Porto-nap vagy az esti megérkezés után.",
          tags: ["🐷 sertés", "🥩 marha"],
          googleRating: "4.6",
          priceLevel: "€€€€",
          meta: "Largo de S. Domingos 18",
          url: "https://www.google.com/maps/search/DOP+Restaurant+Rui+Paula+Porto"
        },
        {
          name: "Conga – Casa das Bifanas",
          type: "Brunch / ebéd · Aliados",
          description: "Bifana, gyors és klasszikus porto-i ebéd.",
          tags: ["🐷 sertés"],
          googleRating: "4.5",
          priceLevel: "€",
          meta: "R. do Bonjardim 318",
          url: "https://www.google.com/maps/search/Conga+Casa+das+Bifanas+Porto"
        },
        {
          name: "MUU Steakhouse",
          type: "Búcsúvacsora · Aliados",
          description: "Jó húsos zárás a portói nap végére.",
          tags: ["🥩 marha"],
          googleRating: "4.9",
          priceLevel: "€€€€",
          meta: "R. do Almada 149A",
          url: "https://www.google.com/maps/search/MUU+Steakhouse+Porto"
        },
        {
          name: "Café Majestic",
          type: "Kávézó · Santa Catarina",
          description: "A legszebb porto-i kávés pihenőpont.",
          tags: ["☕ kávé", "🥐 pastry"],
          googleRating: "4.2",
          priceLevel: "€€€",
          meta: "R. de Santa Catarina 112",
          url: "https://www.google.com/maps/search/Cafe+Majestic+Porto+Rua+Santa+Catarina"
        }
      ]
    },
    {
      city: "Pinhão / Douro",
      items: [
        {
          name: "Quinta do Bomfim",
          type: "Kóstoló · praktikus, közeli választás",
          description: "A fő kóstolóhoz erős opció, ha már nem akartok vezetni.",
          tags: ["🍷 kóstoló", "🌊 river view"],
          googleRating: "4.7",
          priceLevel: "€€€",
          meta: "Pinhão, Douro-part",
          url: "https://www.symington.com/visitar/quinta-do-bomfim/"
        },
        {
          name: "Quinta de la Rosa",
          type: "Borászat + szállás + vacsora",
          description: "Ha mindent egy helyen akartok megoldani, ez az egyik legjobb verzió.",
          tags: ["🍷 borászat", "🛏 szállás"],
          googleRating: "4.7",
          priceLevel: "€€€€",
          meta: "Pinhão környéke",
          url: "https://www.quintadelarosa.com/"
        }
      ]
    }
  ],
  sights: [
    { name: "Jerónimos kolostor", googleRating: "4.5", when: "2. nap · Ápr. 4", price: "10€/fő", detail: "Belém, UNESCO. A lisszaboni nap legerősebb történelmi pontja.", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon" },
    { name: "Belém-torony", googleRating: "4.6", when: "2. nap · Ápr. 4", price: "8€/fő", detail: "Folyóparti erőd, rövid sétával jól összeköthető a Jerónimosszal.", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon" },
    { name: "Pena kastély", googleRating: "4.4", when: "3. nap · Ápr. 5", price: "20€/fő", detail: "Sintra zászlóshajója, korai idősávval a legjobb.", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra" },
    { name: "Quinta da Regaleira", googleRating: "4.8", when: "3. nap · Ápr. 5", price: "8€/fő", detail: "Titokzatos kert, iniciatikus kút, rövid sintrai párosítás a Penával.", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra" },
    { name: "Óbidos óváros", googleRating: "4.7", when: "5. nap · Ápr. 7", price: "Ingyenes", detail: "Porta da Vila, Rua Direita és rövid várfal-szakasz 45–60 percben.", wikipedia: "https://en.wikipedia.org/wiki/%C3%93bidos,_Portugal", maps: "https://www.google.com/maps/search/%C3%93bidos+Portugal" },
    { name: "Nazaré – Sítio + Forte", googleRating: "4.7", when: "5. nap · Ápr. 7", price: "Ingyenes / opcionális", detail: "Miradouro do Suberco, szentély és a híres hullámnéző pont.", wikipedia: "https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal", maps: "https://www.google.com/maps/search/Miradouro+do+Suberco+Nazar%C3%A9" },
    { name: "Mosteiro da Batalha", googleRating: "4.7", when: "5. nap · Ápr. 7", price: "helyszíni jegy", detail: "UNESCO monostor, rövid megállóra is kiváló.", wikipedia: "https://hu.wikipedia.org/wiki/Batalhai_kolostor", maps: "https://www.google.com/maps/search/Batalha+Monastery" },
    { name: "Fátima szentély", googleRating: "4.8", when: "5. nap · Ápr. 7", price: "Ingyenes", detail: "Capela das Aparições, a nagy tér és a bazilika a lényegi rövid kör.", wikipedia: "https://hu.wikipedia.org/wiki/F%C3%A1tima_(Portug%C3%A1lia)", maps: "https://www.google.com/maps/search/Sanctuary+of+F%C3%A1tima" },
    { name: "São Bento pályaudvar", googleRating: "4.7", when: "6. nap · Ápr. 8", price: "Ingyenes", detail: "20 000 azulejo csempe, röviden is nagy élmény.", wikipedia: "https://hu.wikipedia.org/wiki/S%C3%A3o_Bento_p%C3%A1lyaudvar_(Porto)", maps: "https://www.google.com/maps/search/S%C3%A3o+Bento+Station+Porto" },
    { name: "Sé do Porto", googleRating: "4.6", when: "6. nap · Ápr. 8", price: "részben ingyenes", detail: "Katedrális és kilátópont együtt működik a belvárosi körben.", wikipedia: "https://en.wikipedia.org/wiki/Porto_Cathedral", maps: "https://www.google.com/maps/search/S%C3%A9+do+Porto" },
    { name: "Clérigos torony", googleRating: "4.5", when: "6. nap · Ápr. 8", price: "8€/fő", detail: "Porto egyik klasszikus panorámapontja.", wikipedia: "https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church", maps: "https://www.google.com/maps/search/Cl%C3%A9rigos+Tower+Porto" },
    { name: "Livraria Lello", googleRating: "4.1", when: "6. nap · Ápr. 8", price: "jegyes belépés", detail: "Előre időponttal érdemes, különben sorban állós.", wikipedia: "https://en.wikipedia.org/wiki/Livraria_Lello", maps: "https://www.google.com/maps/search/Livraria+Lello" },
    { name: "Ribeira + Dom Luís I híd + Gaia", googleRating: "4.8", when: "6. nap · Ápr. 8", price: "Ingyenes / kóstoló opcionális", detail: "A legklasszikusabb Porto-élménycsomag egy blokkban.", wikipedia: "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge", maps: "https://www.google.com/maps/search/Dom+Lu%C3%ADs+I+Bridge" },
    { name: "N222 panorámaút", googleRating: "4.8", when: "7. nap · Ápr. 9", price: "Ingyenes", detail: "A Douro egyik legszebb autós szakasza Régua és Pinhão között.", wikipedia: "https://en.wikipedia.org/wiki/EN222", maps: "https://www.google.com/maps/search/N222+Douro" },
    { name: "Casal de Loivos kilátó", googleRating: "4.8", when: "7. nap · Ápr. 9", price: "Ingyenes", detail: "Klasszikus képeslapnézet Pinhão fölött.", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o,_Alij%C3%B3", maps: "https://www.google.com/maps/search/Casal+de+Loivos+Viewpoint" },
    { name: "Pinhão Station", googleRating: "4.4", when: "7. nap · Ápr. 9", price: "Ingyenes", detail: "25 azulejo panellel az egyik leghangulatosabb állomás a régióban.", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o", maps: "https://www.google.com/maps/search/Pinh%C3%A3o+Station" }
  ],
  practical: [
    {
      title: "⚠️ Foglalások",
      items: [
        "Jerónimos és Pena időpontra foglalva a legjobb.",
        "Autóbérlés csak április 7 reggeltől kell.",
        "Livraria Lello időpontfoglalás erősen ajánlott.",
        "Pinhão szállás és 1 douro-i borkóstoló előre.",
        "DOP és MUU vacsora foglalás."
      ]
    },
    {
      title: "🚗 Autó",
      items: [
        "Felvétel Lisszabonban április 7 reggel.",
        "04.08-ra Portóban egyszer leteszed, utána gyalogos nap legyen.",
        "Felső belvároshoz Saba Cardosas, folyóparthoz Saba Ribeira a praktikusabb.",
        "A Douro-napon a gyors kijutás Porto felől A4/A24, a szép rész pedig a Régua–Pinhão N222.",
        "Leadás LIS reptérnél április 10-én.",
        "A visszaútnál már ne a panorámautat erőltesd újra."
      ]
    },
    {
      title: "🛏 Douro / Pinhão",
      items: [
        "Praktikus kombináció: The Vintage House + Quinta do Bomfim kóstoló.",
        "Hangulatos all-in-one verzió: Quinta de la Rosa.",
        "LBV House modernebb, panorámásabb alternatíva.",
        "Pinhãóban az esti kóstoló már autó nélkül legyen."
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
