const tripData = {
  title: "🗺 🇵🇹 Portugália - Liszabon – 2026. április 3–7.",
  subtitle: "4 nap · Lisszabon · Sintra",
  updatedAt: "2026.04.03",
  route: [
    { label: "BUD", cls: "flight" },
    { separator: "→✈→" },
    { label: "Lisszabon", cls: "lisbon" },
    { separator: "→🚆→" },
    { label: "Sintra", cls: "sintra" },
    { label: "Lisszabon", cls: "lisbon" },
    { separator: "→✈→" },
    { label: "LIS", cls: "flight" },
    { separator: "→✈→" },
    { label: "BUD", cls: "flight" }
  ],
  flights: [
    {
      title: "✈ Ryanair · K8UZMB",
      body: "BUD → LIS · Ápr. 3 · 20:15 - 23:15",
      links: [
        { label: "FlightStats", url: "https://www.flightstats.com/v2/flight-tracker/FR/" },
        { label: "Trip.com", url: "https://www.trip.com/flights/" }
      ]
    },
    {
      title: "✈ Wizz Air Hungary · W6 2394",
      body: "LIS → BUD · Ápr. 7 · 20:55 - 01:35",
      links: [
        { label: "FlightStats", url: "https://www.flightstats.com/v2/flight-tracker/W6/" },
        { label: "Trip.com", url: "https://www.trip.com/flights/" }
      ]
    }
  ],
  overview: {
    urgent: [
      "Jerónimos és Pena jegy előre, időpontra.",
      "A hazautas Wizz Air járat adatait és reptéri kijutást rögzítsd.",
      "Április 7-re már ne maradjon feszes program, csak kényelmes lezárás.",
      "A lisszaboni vacsorákra és Pastéis de Belémre továbbra is érdemes előre készülni."
    ],
    notes: [
      "Ez a verzió már tisztán lisszaboni út: a fókusz Belémen, Alfamán, Baixán és Sintrán marad.",
      "Április 6 teljes puffernap Lisszabonban, ezért kényelmesebb az egész út ritmusa.",
      "Április 7 már csak lezáró nap és esti hazautazás, észak-portugál kitérő nélkül."
    ]
  },
  lisbonGuide: {
    title: "🏙 Lisszabon – travel tippek és extra látnivalók",
    context: {
      title: "🏛 Lisszabon háttérkép",
      subtitle: "Kultúra, politika, gazdaság, történelem és földrajzi adottságok egy helyen.",
      stats: [
        "Főváros: Portugália",
        "~575 739 lakos (2024, város)",
        "~3,0 millió lakos (metrórégió)",
        "Terület: 100,05 km²",
        "Főváros 1256 óta",
        "A Tejo északi partján"
      ],
      sections: [
        {
          heading: "🌍 Földrajzi adottságok",
          paragraphs: [
            "Lisszabon a Tejo-torkolat északi oldalán fekszik, közel az Atlanti-óceánhoz. A város egyik alapélménye éppen ebből jön: egyszerre folyóparti és óceáni karakterű, ezért a fény, a szél és a kilátók szerepe sokkal erősebb, mint sok más európai fővárosban.",
            "A városszövet dombokra és teraszokra épül. A klasszikus hét domb mítosza kulturálisan is fontos, mert jól magyarázza, miért ilyen lépcsőzött, miradourókkal teli és fizikailag fárasztóbb a város, mint amit egy sima térképen a távolságok sugallnak.",
            "A Tejo széles tölcsértorkolata stratégiai természetes kikötőt adott Lisszabonnak. Britannica szerint ez volt az egyik oka annak, hogy a város már korán kereskedelmi és tengeri központtá tudott válni, később pedig a portugál felfedezések egyik fő bázisa lett."
          ],
          sources: [
            { label: "Wikipedia Lisbon", url: "https://en.wikipedia.org/wiki/Lisbon", icon: "W" },
            { label: "Britannica Lisbon", url: "https://www.britannica.com/place/Lisbon", icon: "B" }
          ]
        },
        {
          heading: "🏺 Történelem",
          paragraphs: [
            "Lisszabon Európa egyik legrégebbi fővárosa. A város római előzményeiig, sőt még korábbi településrétegekig vezethető vissza; a római korban Olisipo néven ismerték. A késő antikvitás után vizigót, majd mór uralom alá került, ami különösen az Alfama utcavilágán és a városi topográfia régebbi rétegein hagyott nyomot.",
            "1147-ben Afonso Henriques seregei foglalták vissza a várost, és 1256-ban lett Portugália fővárosa. A 15–16. században Lisszabon a felfedezések korának egyik vezető európai kikötő- és kereskedelmi városa lett, innen indultak ki a portugál atlanti és indiai-óceáni tengeri útvonalak.",
            "A város egyik legnagyobb töréspontja az 1755-ös földrengés, szökőár és tűzvész volt. Ez nemcsak hatalmas pusztítást okozott, hanem új városképet is eredményezett: a mai Baixa szabályos, racionális utcahálózata és reprezentatív terei ebből az újjáépítési korszakból származnak."
          ],
          sources: [
            { label: "Wikipedia Lisbon", url: "https://en.wikipedia.org/wiki/Lisbon", icon: "W" },
            { label: "Britannica History of Lisbon", url: "https://www.britannica.com/place/Lisbon/History", icon: "H" },
            { label: "Britannica Modern Lisbon", url: "https://www.britannica.com/place/Lisbon/Evolution-of-the-modern-city", icon: "M" }
          ]
        },
        {
          heading: "🏛 Politika és állami szerep",
          paragraphs: [
            "Lisszabon Portugália politikai központja: itt működik a kormány, az Országgyűlés, a legfontosabb bíróságok és az államfő hivatalos rezidenciája is. Emiatt a város nemcsak turisztikai vagy kulturális értelemben fontos, hanem az ország teljes döntéshozatali rendszerének központja.",
            "A fővárosi szerep a történeti folytonosság miatt is erős. Az állami intézmények, az egyetemek, a diplomáciai képviseletek és a nagy országos médiumok koncentrációja miatt Lisszabon súlya Portugálián belül aránytalanul nagy.",
            "Utazóként ez abban is látszik, hogy a reprezentatív terek, minisztériumi negyedek, nagy közlekedési csomópontok és kulturális intézmények nem különülnek el teljesen a történeti városrészekről: a mindennapi állami-fővárosi funkció és a történeti látvány városszerkezetileg is egymásra épül."
          ],
          sources: [
            { label: "Wikipedia Lisbon", url: "https://en.wikipedia.org/wiki/Lisbon", icon: "W" },
            { label: "Britannica Lisbon", url: "https://www.britannica.com/place/Lisbon", icon: "B" }
          ]
        },
        {
          heading: "💶 Gazdaság",
          paragraphs: [
            "Lisszabon Portugália legfontosabb gazdasági központja. A város és a tágabb metróövezet koncentrálja az ország vállalati, pénzügyi, szolgáltatási és turisztikai aktivitásának jelentős részét. A városi gazdaság súlya ma már elsősorban nem az iparra, hanem a szolgáltatásokra, a kereskedelemre, a pénzügyre, a logisztikára és a turizmusra épül.",
            "Britannica szerint a korábbi halászati és ipari karaktert a 20. század végétől egyre inkább a szolgáltató szektor váltotta fel. Az Expo '98 és a folyóparti rehabilitáció látványosan formálta át a város önképét és gazdasági profilját is: modern infrastruktúra, új városnegyedek és erősebb nemzetközi pozíció alakult ki.",
            "A turizmus különösen fontos tényező, de a város ennél többről szól: a kikötő, a regionális vállalati központok, a technológiai és kreatív szektorok, valamint a nagyvárosi szolgáltatások együtt adják azt a gazdasági sűrűséget, amit a látogató is érez a város ritmusán."
          ],
          sources: [
            { label: "Britannica People & Economy", url: "https://www.britannica.com/place/Lisbon/People", icon: "B" },
            { label: "Wikipedia Lisbon", url: "https://en.wikipedia.org/wiki/Lisbon", icon: "W" },
            { label: "AML municipalities", url: "https://www.aml.pt/en/municipios/", icon: "A" }
          ]
        },
        {
          heading: "🎭 Kultúra és városi karakter",
          paragraphs: [
            "Lisszabon kulturális identitásának egyik kulcsa a fado, a saudade hangulata, a kilátók és a negyedek közti erős karakterkülönbség. Alfama, Bairro Alto, Chiado és Belém teljesen más arcot mutatnak, mégis ugyanannak a városi történetnek a részei.",
            "A város egyszerre nagyon régi és meglepően modern. A kolostorok, manuelin emlékek, a földrengés utáni Baixa, a 19. századi kávéházak, a folyóparti új fejlesztések és a mai kreatív helyek, mint az LX Factory, nem zárják ki egymást, hanem rétegenként rakódnak egymásra.",
            "Gasztronómiailag is erős kulturális központ: a pastel de nata, a bacalhau-fogások, a petiscos, a borbárok és a kisebb tabernák mellett a városnak nagyon erős kávéházi kultúrája is van. Az utazó számára ezért Lisszabon nemcsak látványosságok sora, hanem egy saját ritmusú, erősen atmoszférikus főváros."
          ],
          sources: [
            { label: "Britannica Lisbon", url: "https://www.britannica.com/place/Lisbon", icon: "B" },
            { label: "Wikipedia Lisbon", url: "https://en.wikipedia.org/wiki/Lisbon", icon: "W" }
          ]
        }
      ]
    },
    intro: [
      "A megadott Mindig Úton cikk alapján Lisszabonban az egyik legfontosabb gyakorlati tanulság, hogy a fő látnivalók ugyan nem kezelhetetlenül sokan vannak, de eléggé szétszórva helyezkednek el. Emiatt a napokat érdemes negyedenként és logikai tengelyenként összerakni, nem pusztán földrajzi neveket kipipálni.",
      "A cikk erősen kiemeli, hogy 2 nap alatt a fő pontok ugyan megfoghatók, de a város hangulatához valójában 3–4 nap illik jobban. Ez jól egybevág a te mostani verzióddal: Belém és a történelmi belváros külön teljes napot kap, Sintra külön áll, és marad egy pufferes lisszaboni nap is.",
      "Az Utazzunk Együtt 4 napos útiterve ezt tovább erősíti: az első nap Alfama és a vár, a második Belém és a modern vibrálás, a harmadik Sintra mellé akár Cascais is, a negyedik pedig Chiado, Santa Justa és a kilátók. Ez jól illeszkedik a mostani struktúrához, ezért a még reálisan beleférő pontokat ebből is átemeltem.",
      "A két külső forrás alapján a legfontosabb pluszok a mi tervünkhöz: Castelo de São Jorge, Santa Justa, A Brasileira / Chiado, a 28-as villamos hangulata, az opcionális Cascais és a nagyon praktikus közlekedési tanácsok, például a Viva Viagem kártya. Az Utazzunk Együtt külön jól fogja meg azt is, hogy Lisszabon nem csak nevezetességek listája: a dombos városszövet, a kilátók, a fado-hangulat és a folyóparti terek együtt adják a város igazi karakterét."
    ],
    tips: [
      "Zsebtolvajok: a zsúfolt villamosokon, turistás tereken és közlekedési csomópontokban fokozottan figyelni kell, a táskát érdemes mindig elöl tartani.",
      "Pastel de nata: a Pastéis de Belém nem csak kipipálandó név, hanem valódi minőségi megálló, ezért jó, hogy a reggeli blokk elején van.",
      "Viva Viagem: a cikk alapján ez a legpraktikusabb újratölthető közlekedési kártya, ha több metró-, villamos- és vasúti utat használtok.",
      "Lisboa Card: ha sok kötött látnivalót és tömegközlekedést használtok, a városkártya reális opció lehet.",
      "Közlekedés: a cikk alapján több pontra Uber/Bolt praktikusabb lehet, mert a fő látnivalók nem mindig vannak egymástól kényelmes gyalogtávra.",
      "Sintra-nap: a korai indulás tényleg kritikus, mert később sokkal zsúfoltabb és lassabb lesz minden.",
      "28-as villamos: inkább hangulat-élmény, mint gyors közlekedési eszköz; csúcsidőben zsúfolt és figyelni kell az értékekre.",
      "Santa Justa: a cikk alapján maga a lift gyakran soros attrakció, ezért ha csak a kilátás kell, a gyalogos feljutás vagy a Glória sikló utáni séta sokszor jobb kompromisszum.",
      "Lisszabon dombos és macskaköves: kényelmes cipővel számolj, mert a napi séta fizikailag többet kivesz, mint amit a térképen a rövid távok sugallnak."
    ],
    extraSights: [
      {
        name: "Castelo de São Jorge",
        why: "A cikk külön kiemeli, hogy a várból fantasztikus kilátás nyílik a Tejóra, a Ponte 25 de Abrilra és az egész városra, ezért erős első vagy második napos panorámapont.",
        fit: "Az Alfama-blokkba simán beépíthető, mert történetileg és földrajzilag is oda tartozik.",
        maps: "https://www.google.com/maps/search/Castelo+de+S%C3%A3o+Jorge+Lisbon",
        wiki: "https://en.wikipedia.org/wiki/Castle_of_S%C3%A3o_Jorge"
      },
      {
        name: "Christo Rei",
        why: "A forrásoldal szerint az egyik legerősebb panorámapont a városra és a hídra, viszont külön átjutást igényel a túlpartra.",
        fit: "Csak opcionális április 6-i extra programpontként fér bele, ha nem akarsz teljesen laza napot.",
        maps: "https://www.google.com/maps/search/Christo+Rei+Almada",
        wiki: "https://en.wikipedia.org/wiki/Christ_the_King_(Almada)"
      },
      {
        name: "28-as villamos vonala",
        why: "Nem egyetlen látványosság, hanem egy mozgó városképi élmény: Alfama, Graça és a régi dombos Lisszabon hangulatának esszenciája.",
        fit: "A d2 vagy d4 nap rövid szakaszaként jól használható, de csúcsidőben zsúfolt és zsebtolvajos.",
        maps: "https://www.google.com/maps/search/Tram+28+Lisbon",
        wiki: "https://en.wikipedia.org/wiki/Trams_in_Lisbon"
      },
      {
        name: "Elevador de Santa Justa",
        why: "A Baixa–Chiado tengely egyik legismertebb vizuális eleme, jól illik a belvárosi sétába.",
        fit: "Baixa–Chiado blokkba röviden beleférhet, ha nem túl hosszú a sor.",
        maps: "https://www.google.com/maps/search/Santa+Justa+Lift+Lisbon",
        wiki: "https://en.wikipedia.org/wiki/Santa_Justa_Lift"
      },
      {
        name: "Cascais",
        why: "Az Utazzunk Együtt cikk szerint Sintra után jó tengerparti ellenpont lehet: kikötő, strandok és lazább atlanti hangulat.",
        fit: "Csak akkor fér bele, ha a sintrai nap nagyon korán indul és a fő kastélypontok után még marad energia.",
        maps: "https://www.google.com/maps/search/Cascais+Portugal",
        wiki: "https://en.wikipedia.org/wiki/Cascais"
      },
      {
        name: "A Brasileira és Chiado kávéházi közege",
        why: "A cikk ezt mint klasszikus elegáns, kulturális lisszaboni hangulatot emeli ki, Fernando Pessoa vonalával együtt.",
        fit: "Az április 6-i laza napba tökéletesen illik rövid kávés-blokknak.",
        maps: "https://www.google.com/maps/search/A+Brasileira+Lisbon",
        wiki: "https://en.wikipedia.org/wiki/A_Brasileira"
      }
    ],
    links: [
      { label: "Mindig Úton – Lisszabon látnivalók", url: "https://mindiguton.hu/lisszabon-latnivalok/" },
      { label: "Utazzunk Együtt – 4 napos lisszaboni útiterv", url: "https://utazzunkegyutt.hu/lisszabon-es-kornyeke-4-napos-utiterv-a-portugal-fovarosban/" },
      { label: "Lisboa Card", url: "https://www.lisboacard.org/" },
      { label: "Jerónimos hivatalos jegyek", url: "https://www.patrimoniocultural.gov.pt/" },
      { label: "Parques de Sintra", url: "https://www.parquesdesintra.pt/en/" },
      { label: "Google My Maps – Lisszabon", url: "https://www.google.com/maps/d/u/0/viewer?mid=1LKjnh7CuSdteliDT6VWZ0b7OfRRXYzo&femb=1&ll=38.71702104698881%2C-9.309141899999984&z=11" }
    ],
    sourceMap: {
      title: "🗺 Lisszabon interaktív térkép",
      url: "https://www.google.com/maps/d/u/0/viewer?mid=1LKjnh7CuSdteliDT6VWZ0b7OfRRXYzo&femb=1&ll=38.71702104698881%2C-9.309141899999984&z=11",
      embed: "https://www.google.com/maps/d/embed?mid=1LKjnh7CuSdteliDT6VWZ0b7OfRRXYzo&ehbc=2E312F",
      note: "A lisszaboni látnivalókhoz most ez a Google My Maps térkép van integrálva. Innen gyorsan átlátható Belém, Alfama, Baixa–Chiado és a többi releváns pont."
    }
  },
  sectionIntros: {
    fado: {
      title: "🎶 Fado röviden",
      paragraphs: [
        "A fado Lisszabon egyik legerősebb kulturális élménye: érzelmileg sűrű, intim portugál énekzene, amelyet leginkább a saudade, vagyis a hiány, vágyódás, nosztalgia és sorsszerűség hangulata hat át. A Britannica szerint hagyományosan kocsmákhoz, kávéházakhoz és kisebb városi előadóhelyekhez kötődött, és kifejezetten melankolikus, erősen kifejező karakteréről ismert.",
        "A Wikipédia és az UNESCO anyagai alapján a fado a 19. századi Lisszabon munkás- és kikötőnegyedeihez, főleg Alfamához és Mourariához kapcsolódik, és ma is erősen liszaboni identitásjelenség. 2011-ben felkerült az UNESCO szellemi kulturális örökségi listájára.",
        "A klasszikus esti fadoház-logika általában nem gyors vacsora: a zene és a vacsora váltakozva épül egymásra. A jó élményhez hozzátartozik, hogy érdemes csendben maradni az előadás alatt, nem kapkodni az étkezéssel, és elfogadni, hogy itt a hangulat legalább annyira fontos, mint maga a menü.",
        "Az Eating Europe cikke külön kiemeli, hogy a jó fadoház kiválasztásánál a negyed is számít: Alfama és Mouraria általában tradicionálisabb, Bairro Alto vegyesebb és időnként modernebb, Lapa pedig elegánsabb irány lehet. Ugyanez a forrás hangsúlyozza, hogy a műsorok gyakran csak 21:00–22:00 körül indulnak el igazán, ezért az egész estet érdemes lassabb kulturális programként kezelni."
      ],
      highlights: [
        "Lisbon-style fado: intimebb, városi, érzelmileg közvetlenebb, mint a coimbrai egyetemi hagyomány.",
        "Hangszerek: ének, portugál guitarra és hagyományos gitár a legtipikusabb felállás.",
        "Legjobb negyedek: Alfama, Mouraria, Bairro Alto és Lapa.",
        "Etikett: éneklés közben csend, telefon és beszélgetés visszafogva.",
        "Asztalfoglalás erősen ajánlott, főleg péntek-szombat este.",
        "Tipikus párosítások: bacalhau à brás, grillezett szardínia, caldo verde, petiscos, portói bor vagy Vinho Verde.",
        "Ha intimebb, kevésbé kommersz estét keresel, Alfama és Mouraria általában jobb kiindulás, mint a legforgalmasabb turistasávok."
      ],
      sources: [
        { label: "Portugal Magik – 6 Best Fado Restaurants", url: "https://portugal-magik.com/6-best-fado-restaurants-to-experience-in-lisbon/", icon: "P" },
        { label: "Eating Europe – Fado Restaurants in Lisbon", url: "https://www.eatingeurope.com/blog/fado-restaurants-in-lisbon/", icon: "E" },
        { label: "Britannica – fado", url: "https://www.britannica.com/art/fado", icon: "B" },
        { label: "Wikipedia – Fado", url: "https://en.wikipedia.org/wiki/Fado", icon: "W" },
        { label: "UNESCO – Fado", url: "https://www.unesco.org/archives/multimedia/document-2192", icon: "U" }
      ]
    },
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
            name: "Bacalhau à Brás",
            description: "Tőkehal tojással, hagymával és vékony sült krumplival összeforgatva.",
            flavor: "selymesebb, tojásos, sós, komfortos és nagyon portugál"
          },
          {
            name: "Bacalhau com natas",
            description: "Krémes, sütőben készült tőkehalas fogás tejszínesebb mártással.",
            flavor: "lágyabb, gazdagabb, krémesebb és kevésbé rusztikus"
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
            name: "Cataplana de marisco",
            description: "Fedeles rézedényben főzött tenger gyümölcsei ragu vagy sűrűbb egytálétel.",
            flavor: "intenzíven tengeri, szaftos, fokhagymás, fehérboros"
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
            "Belém: sütis és kávés megállók, egyszerű ikonikus pontokkal.",
            "Sintra: travesseiros, queijadas és könnyebb központi ebéd/kávé.",
            "Lisszabon esti vonala: Alfama és Bairro Alto környéki hangulatosabb tabernák."
          ]
        },
        {
          heading: "Mit kell megkóstolni?",
          items: [
            "Pastel de nata vagy a klasszikus Pastéis de Belém.",
            "Legalább egy bacalhau fogás, ideálisan bacalhau à brás vagy bacalhau com natas formában.",
            "Lisszabonban valamilyen jó petiscos vagy taberna-vacsora is erősen ajánlott.",
            "Caldo verde, sardinhas assadas, arroz de marisco, cataplana de marisco vagy polipétel, ha az adott hely kínálata jó.",
            "Sintrában egy travesseiros vagy queijadas is férjen bele."
          ]
        }
      ],
      paragraphs: [
        "A portugál konyha egyszerre atlanti, mediterrán és birodalmi örökségű: a hal, a tenger gyümölcsei, az olívaolaj, a kenyér, a rizs, a sertés és a lassan főzött, rusztikus fogások adják az alapját. A felfedezések korával együtt rengeteg fűszer, cukor és új alapanyag érkezett be, ezért a portugál étkezés egyszerre tud egyszerű és történetileg meglepően gazdag lenni.",
        "A legismertebb történeti vonal a bacalhau, vagyis a sózott tőkehal kultúrája, amely a tengeri kereskedelemmel és a hosszú tárolhatósággal fonódott össze. A megadott cikk külön is kiemeli, hogy legalább egy jó bacalhau à brás vagy bacalhau com natas verziót érdemes kipróbálni. Ugyanilyen fontos az édességek világa is: sok klasszikus portugál desszert kolostori eredetű, tojássárgájára és cukorra épülő receptekkel.",
        "A forrásoldal gasztróblokkja alapján a lisszaboni rövid úton különösen érdemes figyelni a grillezett szardíniára, a bifanára és a tenger gyümölcseis fogásokra is. Ha a menün van cataplana de marisco vagy arroz de marisco, az jó jel arra, hogy egy hely a tengeri vonalban is erős lehet.",
        "Amit ezen az úton régiónként érdemes kiemelni: Lisszabonban a pastel de nata, a petiscos, a bacalhau-fogások és az egyszerűbb tabernaételek; Belémben az ikonikus sütis megállókat; Sintrában pedig az édességeket és a könnyebb központi étkezéseket."
      ],
      highlights: [
        "Jellegzetes portugál ételek: bacalhau, bacalhau à brás, bacalhau com natas, caldo verde, sardinhas assadas, bifana, cataplana de marisco, arroz de marisco, polvo.",
        "Kötelezően megkóstolandó: pastel de nata, jó kenyér + olívaolaj, legalább egy tőkehalas fogás és egy jó lisszaboni taberna-vacsora.",
        "Desszertvonal: Pastéis de Belém, Sintrában travesseiros vagy queijadas, és általában a portugál tojáskrémes-kolostori édességek világa.",
        "Borfronton a portugál asztali vörös és fehér borok is erősek, még rövid lisszaboni úton is."
      ]
    },
    sights: {
      title: "🏛 Látnivaló-logika",
      paragraphs: [
        "Ez a rövid verzió Lisszabonra és Sintrára szűkít: a portugál főváros történelmi városrészei és a leglátványosabb közeli kirándulás adják az út gerincét.",
        "A legerősebb szerkezeti váltások: Belém császári-felfedezéskori arca, Alfama középkorias hangulata, Baixa–Chiado városi tengelye és Sintra romantikus tája."
      ],
      highlights: [
        "Must-see tengely: Jerónimos, Belém-torony, Alfama, Baixa–Chiado, Pena és Regaleira.",
        "A terv úgy van összerakva, hogy a legerősebb ikonikus pontok férjenek bele, ne a legtöbb név.",
        "A napi oldalaknál az inline boxok ott magyaráznak, ahol a helyszín először tényleg releváns."
      ]
    },
    practical: {
      title: "🧳 Praktikus keret",
      paragraphs: [
        "Ennél a rövid útvonalnál a kulcs a könnyű ritmus: városi napok tömegközlekedéssel, egy külön Sintra-nap, és a végén kényelmes esti reptéri kijutás.",
        "A legfontosabb praktikus döntések: időpontra vett jegyek a zsúfolt helyekre, korai indulás Sintrába, és április 7-re már minimális program."
      ],
      highlights: [
        "Jegyek: Jerónimos és Pena előre.",
        "Közlekedés: Lisszabonban gyalog + tömegközlekedés, Sintrába vonat.",
        "Április 7: könnyű nap, reptéri tartalékkal.",
        "Hazautas járat: W6 2394, LIS 20:55 → BUD 01:35."
      ]
    }
  },
  fadoVenues: [
    {
      name: "Clube de Fado",
      googleRating: "4.4",
      ratingCount: "2.7k",
      neighborhood: "Alfama / Sé",
      priceLevel: "€€€€",
      description: "A Portugal Magik listáján ez az ikonikus, elegáns fadoház a legismertebb liszaboni referencia. A Sé székesegyház közelében van, gyertyafényes, kőboltozatos térrel, és a cikk szerint a zene mellett a konyha is erős: grillezett tőkehal, polipos rizs, lassan sült bárány és komoly borlap.",
      vibe: "A klasszikus, kifinomult nagy estét keresed, nem a legbohémabb verziót.",
      maps: "https://www.google.com/maps/search/Clube+de+Fado+Lisbon",
      sourceLinks: [
        { label: "Portugal Magik", url: "https://portugal-magik.com/6-best-fado-restaurants-to-experience-in-lisbon/", icon: "P" },
        { label: "Wanderlog / Google rating", url: "https://wanderlog.com/place/details/772768/clube-de-fado", icon: "G" }
      ]
    },
    {
      name: "Parreirinha de Alfama",
      googleRating: "4.5",
      ratingCount: "1.9k",
      neighborhood: "Alfama",
      priceLevel: "€€€€",
      description: "Az egyik legrégebbi és legtradicionálisabb liszaboni fadoház, 1950 óta működik. A Portugal Magik szerint ez a hely a nosztalgikus, történeti Alfama-élményt adja: fekete-fehér portrék a falon, klasszikus csempék, bacalhau à brás és pataniscas, nagyon intim hangulattal.",
      vibe: "Ha régi liszaboni, történeti és erősen atmoszférikus estét akarsz.",
      maps: "https://www.google.com/maps/search/Parreirinha+de+Alfama+Lisbon",
      sourceLinks: [
        { label: "Portugal Magik", url: "https://portugal-magik.com/6-best-fado-restaurants-to-experience-in-lisbon/", icon: "P" },
        { label: "Wanderlog / Google rating", url: "https://wanderlog.com/place/details/1431946/parreirinha-de-alfama", icon: "G" }
      ]
    },
    {
      name: "Casa de Linhares",
      googleRating: "4.4",
      ratingCount: "978",
      neighborhood: "Alfama / folyópart",
      priceLevel: "€€€€",
      description: "A Portugal Magik ezt az egyik leghangulatosabb helyszínként írja le: 17. századi palotabelső, boltozott kőterek, gyertyafény és komoly akusztika. A menü is erősebb, ünnepibb irány: malac, vaddisznóragu, sericaia desszert.",
      vibe: "Ha a zene mellett a tér és a történelmi díszlet is fontos.",
      maps: "https://www.google.com/maps/search/Casa+de+Linhares+Lisbon",
      sourceLinks: [
        { label: "Portugal Magik", url: "https://portugal-magik.com/6-best-fado-restaurants-to-experience-in-lisbon/", icon: "P" },
        { label: "Wanderlog / Google rating", url: "https://wanderlog.com/place/details/1420280/casa-de-linhares", icon: "G" }
      ]
    },
    {
      name: "Tasca do Chico",
      googleRating: "4.0",
      ratingCount: "624",
      neighborhood: "Bairro Alto",
      priceLevel: "€€",
      description: "A listában ez a legbohémabb és leglazább választás. A Portugal Magik szerint itt a hangsúly a fado vadio esteken van, vagyis a spontánabb, nyersebb, kevésbé színházi fadoélményen. A kaja egyszerűbb tapas/tasca-vonal, a hangulat viszont nagyon élő és kiszámíthatatlanul jó lehet.",
      vibe: "Ha kevésbé fine dining, inkább nyers, kicsi, zsúfolt és spontán fado estét keresel.",
      maps: "https://www.google.com/maps/search/Tasca+do+Chico+Rua+do+Diario+de+Noticias+39+Lisbon",
      sourceLinks: [
        { label: "Portugal Magik", url: "https://portugal-magik.com/6-best-fado-restaurants-to-experience-in-lisbon/", icon: "P" },
        { label: "Wanderlog / Google rating", url: "https://wanderlog.com/place/details/484118/a-tasca-do-chico", icon: "G" }
      ]
    },
    {
      name: "Sr. Vinho",
      googleRating: "4.3",
      ratingCount: "808",
      neighborhood: "Lapa",
      priceLevel: "€€€€",
      description: "A Portugal Magik ezt a kifinomultabb, elegánsabb vonal egyik legjobb házaként írja le. Maria da Fé alapította, és ma is erős név a fado világában. A hangsúly itt a professzionális előadáson, a jó akusztikán és a regionális portugál fogásokon van.",
      vibe: "Ha letisztult, elegáns és zeneileg komoly estét akarsz, kevésbé turistás alfamai díszlettel.",
      maps: "https://www.google.com/maps/search/Sr.+Vinho+Lisbon",
      sourceLinks: [
        { label: "Portugal Magik", url: "https://portugal-magik.com/6-best-fado-restaurants-to-experience-in-lisbon/", icon: "P" },
        { label: "Wanderlog / Google rating", url: "https://wanderlog.com/place/details/1420264/srvinho", icon: "G" }
      ]
    },
    {
      name: "Adega Machado",
      googleRating: "4.3",
      ratingCount: "1.8k",
      neighborhood: "Bairro Alto",
      priceLevel: "€€€€",
      description: "1937 óta működő klasszikus ház, amelyet a Portugal Magik modernizált, de történeti gyökerű helyszínként emel ki. A structured-set jelleg miatt ez jó kompromisszum annak, aki vacsorázni is szeretne nyugodtan, és közben több fado blokkot hallgatna végig.",
      vibe: "Kényelmesebb, jobban szervezett, modernebb vacsora-show jellegű fado élmény.",
      maps: "https://www.google.com/maps/search/Adega+Machado+Lisbon",
      sourceLinks: [
        { label: "Portugal Magik", url: "https://portugal-magik.com/6-best-fado-restaurants-to-experience-in-lisbon/", icon: "P" },
        { label: "Wanderlog / Google rating", url: "https://wanderlog.com/place/details/102547/adega-machado", icon: "G" }
      ]
    },
    {
      name: "Associação do Fado Casto",
      googleRating: "4.5",
      ratingCount: "222",
      neighborhood: "Alfama",
      priceLevel: "€€€",
      description: "Az Eating Europe ezt klasszikus alfamai választásként emeli ki, a római színház alá rejtett hangulatos helyszínnel, hosszú közös asztalokkal és erős, hagyományos fadohangulattal. A cikk szerint a snack-jellegű kísérők, a cod fritters és a sajtok is jól működnek itt a zenéhez.",
      vibe: "Erősen tradicionális, közösségibb, kevésbé steril fadoélmény.",
      maps: "https://www.google.com/maps/search/Associa%C3%A7%C3%A3o+do+Fado+Casto+Lisbon",
      sourceLinks: [
        { label: "Eating Europe", url: "https://www.eatingeurope.com/blog/fado-restaurants-in-lisbon/", icon: "E" },
        { label: "Wanderlog / Google rating", url: "https://wanderlog.com/place/details/4333534/associa%C3%A7%C3%A3o-do-fado-casto", icon: "G" },
        { label: "Visit Lisboa", url: "https://www.visitlisboa.com/en/places/associacao-do-fado-casto", icon: "V" }
      ]
    },
    {
      name: "Maria da Mouraria",
      googleRating: "4.5",
      ratingCount: "848",
      neighborhood: "Mouraria",
      priceLevel: "€€€",
      description: "Az Eating Europe ezt Mouraria ikonikus házaként ajánlja, meleg, családias környezettel és fix csomagos vacsoraélménnyel. A forrás szerint itt a teljes este egységesebb csomagként működik: zene, fogások és italok összehangolva, erős helyi karakterrel.",
      vibe: "Ha Mouraria-vonalon, családiasabb, komplett vacsora + fado estét keresel.",
      maps: "https://www.google.com/maps/search/Maria+da+Mouraria+Casa+de+Fados+Lisbon",
      sourceLinks: [
        { label: "Eating Europe", url: "https://www.eatingeurope.com/blog/fado-restaurants-in-lisbon/", icon: "E" },
        { label: "Sluurpy / Google rating", url: "https://www.sluurpy.com/pt/lisboa/restaurant/2202914/maria-da-mouraria-casa-de-fados", icon: "G" }
      ]
    },
    {
      name: "O Faia",
      googleRating: "4.6",
      ratingCount: "923",
      neighborhood: "Bairro Alto",
      priceLevel: "€€€€",
      description: "Az Eating Europe ezt a fényűzőbb, kifinomultabb fadoélmény egyik csúcspontjaként írja le. Elegánsabb vacsoracsomagokkal, borpárosításokkal és modernebb tálalással működik, miközben a zenei rész továbbra is mélyen hagyományos marad.",
      vibe: "Ha inkább upscale, nagy esti programot keresel, mint intim kis tavernát.",
      maps: "https://www.google.com/maps/search/O+Faia+Casa+de+Fado+Lisbon",
      sourceLinks: [
        { label: "Eating Europe", url: "https://www.eatingeurope.com/blog/fado-restaurants-in-lisbon/", icon: "E" },
        { label: "Sluurpy / Google rating", url: "https://www.sluurpy.com/en/lisboa/restaurant/2199606/o-faia-casa-de-fados", icon: "G" }
      ]
    }
  ],
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
            "Gasztronómiailag Lisszabon egyszerre tradicionális és könnyen fogyasztható város: a pastel de nata, a tőkehalételek, a grillezett szardínia, a petiscos és a borbárok világa gyorsan érthető. Belémben a Pastéis de Belém a legismertebb ikon, míg Alfamában és Bairro Altóban a kisebb, hangulatos tabernák adják a karakteresebb esti élményt.",
            "A mostani források alapján a város legjobb ritmusa az, ha nem mindent egy napra zsúfolsz: Alfama és a vár lassabb bolyongást kér, Belémben időt vesznek el a sorok, Chiadóban pedig a kávéházi és kilátós megállók adják meg az ízét. Emiatt a 4 napos bontás itt tényleg erősebb, mint egy sűrített weekend-logika."
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
          text: "Belém Lisszabon történelmi folyóparti zónája, amely a portugál felfedezések korának legerősebb emlékhelyeit sűríti össze. Itt koncentrálódik a Jerónimos kolostor, a Belém-torony és a Padrão dos Descobrimentos világa, ezért ez a város egyik legfontosabb történeti negyede. Az Utazzunk Együtt cikk logikája szerint ez külön fél- vagy teljes napot ér, mert a látnivalók nagyok, a sorok hosszúak lehetnek, és a negyed önmagában is erős folyóparti atmoszférát ad.",
          highlights: [
            "monumentális folyóparti történelmi zóna",
            "Jerónimos és Belém-torony ugyanabban a tengelyben",
            "Pastéis de Belém miatt gasztronómiailag is ikonikus",
            "a Tejo-parti séták és a felfedezések kori emlékművek miatt vizuálisan is az egyik legerősebb liszaboni kör"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Bel%C3%A9m,_Lisbon",
          maps: "https://www.google.com/maps/search/Bel%C3%A9m+Lisbon"
        } },
        { time: "09:30", title: "🏛 Jerónimos kolostor", detail: "UNESCO látnivaló, online jegy kötelezően ajánlott; később a sor nagyon meg tud nőni.", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", googleRating: "4.5", price: "10€/fő" },
        { time: "11:00", title: "🗼 Belém-torony", detail: "Folyóparti séta és rövid fotóblokk; belülről kisebb, inkább a külső látványa és a pozíciója erős.", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", googleRating: "4.6", price: "8€/fő" },
        { time: "13:00", title: "🍽 Ebéd: Solar dos Presuntos", detail: "Klasszikus portugál húsos hely a belvárosban." },
        { time: "15:00", title: "🏘 Alfama negyed", detail: "São Jorge vár környéke, kilátók és régi utcák.", placeBox: {
          title: "Alfama",
          text: "Alfama Lisszabon legrégebbi és legkarakteresebb negyede, amely a mór korszakot és a középkori utcahálózatot őrzi a leglátványosabban. Szűk utcák, lépcsők, kis terek, kilátópontok és a fado hangulata miatt ez a város leginkább atmoszférikus része. Az Utazzunk Együtt cikk ezt a történelmi szívet emeli ki az első nap kulcspontjaként: itt érdemes tényleg bolyongni, nem csak egyik pinről a másikra menni, mert az élmény nagy része épp az utcákban és a miradourók közti átmenetekben van.",
          highlights: [
            "középkori, réteges utcaszövet",
            "São Jorge-vár környéke és több miradouro",
            "a fado és a régi lisszaboni hangulat fő terepe",
            "a vár felől a Tejo és a városi tetők látványa különösen erős"
          ],
          wikipedia: "https://hu.wikipedia.org/wiki/Alfama",
          maps: "https://www.google.com/maps/search/Alfama+Lisbon"
        } },
        { time: "16:15", title: "🏰 Castelo de São Jorge", detail: "Ha a tempó jó, ez nagyon erős panorámapont az Alfama fölött; a várfalakról különösen jó a Tejo és a Ponte 25 de Abril iránya.", maps: "https://www.google.com/maps/search/Castelo+de+S%C3%A3o+Jorge+Lisbon", wikipedia: "https://en.wikipedia.org/wiki/Castle_of_S%C3%A3o_Jorge", googleRating: "4.4", price: "15€/fő" },
        { time: "17:45", title: "🚶 Baixa–Chiado séta", detail: "Praça do Comércio, Rua Augusta és Santa Justa tengelye.", placeBox: {
          title: "Baixa–Chiado",
          text: "Baixa a nagy 1755-ös földrengés utáni újjáépített városmag, szabályosabb utcahálózattal, reprezentatív terekkel és kereskedelmi tengelyekkel. Chiado ehhez képest elegánsabb, kulturálisabb és kávéházasabb réteg, így a két negyed együtt mutatja meg a modern nagyvárosi Lisszabon központját. Az Utazzunk Együtt külön kiemeli itt a Santa Justát, A Brasileira környékét és a kilátók felé vezető átmeneteket, ezért ez a blokk nem csak kötelező séta, hanem jó lezárása is egy történelmibb napnak.",
          highlights: [
            "Praça do Comércio mint folyóparti főtér",
            "Rua Augusta és az árkádos, klasszikus belvárosi séta",
            "Chiado: könyves, kávéházas, urbánusabb városi hangulat",
            "Santa Justa mint rövid, ikonikus városi fotópont",
            "A Brasileira és Pessoa-szobor környéke a lazább, kávézós levezetéshez is jó"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Baixa_(Lisbon)",
          maps: "https://www.google.com/maps/search/Baixa+Chiado+Lisbon"
        } },
        { time: "20:00", title: "🍽 Vacsora: Taberna Sal Grosso", detail: "Autentikus alfamai vacsora, foglalással." }
      ],
      daySights: [
        { name: "Jerónimos kolostor", googleRating: "4.5", price: "10€/fő", text: "Belém legfontosabb történelmi pontja, manuelin stílusú UNESCO-helyszín.", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon" },
        { name: "Belém-torony", googleRating: "4.6", price: "8€/fő", text: "Folyóparti erőd és rövid, erős fotós megálló a Jerónimos után.", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon" },
        { name: "Castelo de São Jorge", googleRating: "4.4", price: "15€/fő", text: "Alfama fölötti vár és panorámapont, ha a nap ritmusa engedi.", wikipedia: "https://en.wikipedia.org/wiki/Castle_of_S%C3%A3o_Jorge", maps: "https://www.google.com/maps/search/Castelo+de+S%C3%A3o+Jorge+Lisbon" }
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
        { time: "09:30", title: "🏰 Palácio Nacional da Pena", detail: "A nap legfontosabb pontja, online időponttal; kései indulásnál itt jön a legnagyobb csúszás.", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", googleRating: "4.4", price: "20€/fő", placeBox: {
          title: "Pena-palota",
          text: "A Pena Sintra legismertebb helye, színes romantikus palota és egyben erős panorámapont is. Itt a korai idősáv sokat számít, mert később gyorsan telítődik a környék és a bejutás is lassabb lesz. Az Utazzunk Együtt ezt a nap első, fixen időzített elemének tekinti, és ebben teljesen igaza van: ha Pena elcsúszik, az egész sintrai nap borul.",
          highlights: [
            "a sintrai nap fő programpontja",
            "romantikus 19. századi palota",
            "időpontra vett jeggyel működik a legjobban",
            "a park és a panoráma miatt nem csak gyors fotóstop"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace",
          maps: "https://www.google.com/maps/search/Pena+Palace+Sintra"
        } },
        { time: "12:00", title: "🌳 Quinta da Regaleira", detail: "Iniciatikus kút és kert.", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", googleRating: "4.8", price: "8€/fő", placeBox: {
          title: "Quinta da Regaleira",
          text: "A Regaleira a sintrai nap misztikusabb ellenpontja: kert, villa, föld alatti hangulat és az ikonikus iniciatikus kút együtt adják az élményt. A Penához képest kevésbé monumentális, de sokkal játékosabb és felfedezős hely. A forráscikkek alapján ez az a pont, ahol érdemes lassítani, mert a hely varázsa pont a kertrészletekben, alagutakban és a szimbolikus építészeti elemekben jön ki.",
          highlights: [
            "iniciatikus kút és szimbolikus kert",
            "erős második nagy stop a Pena után",
            "gyalogos bolyongásra ideális",
            "nem csak egy épület, hanem teljes felfedezős parkélmény"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira",
          maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra"
        } },
        { time: "13:30", title: "🍽 Ebéd Sintra központban", detail: "Rövid, könnyű ebéd." },
        { time: "15:00", title: "🌊 Cabo da Roca vagy Cascais opció", detail: "Ha a tempó bírja, rövid atlanti kitérő is beleférhet." },
        { time: "17:30", title: "🚆 Vissza Lisszabonba", detail: "Cascaisból a Cais do Sodré felé menő vonat is kényelmes visszaút lehet." }
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
        { time: "11:30", title: "🚋 Bica + 28-as villamos hangulat", detail: "Miradouro São Pedro de Alcântara környéke és rövid régi villamosos blokk.", placeBox: {
          title: "Bica és a kilátók",
          text: "Bica a meredek, sárga siklóval és szűk utcákkal együtt a fotogén lisszaboni városkép egyik röviden is élvezhető része. A São Pedro de Alcântara kilátó ehhez hozzáad egy könnyen elérhető panorámát a város fölött. A megadott cikk alapján a 28-as villamos vonala is jól illik ehhez a régi, dombos lisszaboni hangulathoz.",
          highlights: [
            "klasszikus lisszaboni siklós utcakép",
            "jó átmenet a laza nap és a városi séta között",
            "kilátóval együtt rövid blokkban is működik",
            "a régi villamosos városkép röviden is átélhető"
          ],
          maps: "https://www.google.com/maps/search/Bica+Lisbon",
          wikipedia: "https://en.wikipedia.org/wiki/Bica_funicular"
        } },
        { time: "13:00", title: "☕ Chiado + A Brasileira", detail: "Kávés és elegáns belvárosi blokk, Fernando Pessoa-hangulattal." },
        { time: "14:00", title: "🍽 Ebéd Chiado / Bairro Alto környékén", detail: "Nyugodt, nem túlvállalt ebéd." },
        { time: "15:30", title: "🛍 Szabad blokk", detail: "Time Out Market, Santa Justa, vásárlás vagy rövid Christo Rei opció jó időben." },
        { time: "17:30", title: "🧳 Pakolás + autós nap előkészítése", detail: "Bérlés, útvonal, parkolás, jegyek." },
        { time: "20:00", title: "🍽 Korai vacsora Lisszabonban", detail: "Másnap hosszú északi autóút jön." }
      ]
    },
    {
      id: "d5",
      tabLabel: "Ápr. 7 · Hazautazás",
      dayLabel: "5. nap",
      dateLabel: "2026. április 7., kedd",
      title: "✈ Lisszabon → Budapest",
      subtitle: "Könnyű lezáró nap, esti reptéri indulással.",
      stay: "Hazautazás",
      note: "Erre a napra már ne tervezz feszes városnézést. Legyen laza reggel, csomagolás, egy utolsó könnyű lisszaboni blokk, majd kényelmes kijutás a reptérre.",
      bullets: [
        "Wizz Air Hungary · W6 2394",
        "LIS indulás: 20:55",
        "BUD érkezés: 01:35 (ápr. 8.)"
      ],
      mapTitle: "Hazautazás",
      mapStops: [
        { label: "Hotel", color: "#1f5a3e" },
        { label: "LIS", note: "20:55", color: "#1f5a3e" },
        { label: "BUD", note: "01:35", color: "#8a2e52" }
      ],
      schedule: [
        { time: "délelőtt", title: "☕ Laza utolsó lisszaboni délelőtt", detail: "Kávé, rövid séta vagy egy utolsó könnyű városi blokk, de már csomagolással együtt." },
        { time: "14:00", title: "🧳 Csomagolás és check-out logika", detail: "Érdemes úgy szervezni a napot, hogy ne maradjon kapkodás a reptéri kijutás előtt." },
        { time: "17:30", title: "🚕 Indulás a reptérre", detail: "Taxi vagy Uber/Bolt a legkényelmesebb esti megoldás." },
        { time: "20:55", title: "✈ Wizz Air Hungary W6 2394", detail: "LIS → BUD közvetlen járat." },
        { time: "01:35", title: "🛬 Érkezés Budapestre", detail: "Érkezés 2026. április 8-án, szerda hajnalban." }
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
          description: "Stabil, megbízható lisszaboni húsos választás a belvárosban. Itt a portugál klasszikusok mellé érdemes figyelni arra is, van-e jó bacalhau vagy szezonális tengeri ajánlat.",
          tags: ["🐷 sertés", "🥩 marha", "🍗 csirke"],
          googleRating: "4.2",
          priceLevel: "€€€",
          meta: "R. das Portas de Santo Antão 150",
          url: "https://www.google.com/maps/search/Solar+dos+Presuntos+Lisboa"
        },
        {
          name: "Taberna Sal Grosso",
          type: "Vacsora · Alfama · foglalós hely",
          description: "Kis, autentikus, erős vacsorahely Alfamában. A cikk gasztrólogikája alapján itt kifejezetten jó irány lehet a bacalhau, a petiscos és a karakteresebb portugál tányérok keresése.",
          tags: ["🐷 sertés", "🥩 marha", "❌ hal nincs"],
          googleRating: "4.6",
          priceLevel: "€€",
          meta: "Beco do Açúcar 9",
          url: "https://www.google.com/maps/search/Taberna+Sal+Grosso+Alfama+Lisboa"
        },
        {
          name: "Pastéis de Belém",
          type: "Reggeli / kávé · ikonikus",
          description: "A kötelező nata megálló Belémben. A külső cikkek alapján is ez a legbiztosabb, klasszikus pastel de nata pont a rövid lisszaboni úton.",
          tags: ["☕ kávé", "🥮 sütemény"],
          googleRating: "4.6",
          priceLevel: "€",
          meta: "R. de Belém 84-92",
          url: "https://www.google.com/maps/search/Pasteis+de+Belem+Lisboa"
        }
      ]
    }
  ],
  sights: [
    { name: "Jerónimos kolostor", group: "Belém", googleRating: "4.5", ratingCount: "58.5K", when: "2. nap · Ápr. 4", price: "10€/fő", detail: "Belém, UNESCO. A lisszaboni nap legerősebb történelmi pontja.", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon" },
    { name: "Belém-torony", group: "Belém", googleRating: "4.6", ratingCount: "74.9K", when: "2. nap · Ápr. 4", price: "8€/fő", detail: "Folyóparti erőd, rövid sétával jól összeköthető a Jerónimosszal.", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon" },
    { name: "Castelo de São Jorge", group: "Történelmi Lisszabon", googleRating: "4.4", ratingCount: "86.4K", when: "2. nap · Ápr. 4", price: "15€/fő", detail: "Lisszabon legmagasabb pontjának vára, erős kilátással a Tejóra és a városra.", wikipedia: "https://en.wikipedia.org/wiki/Castle_of_S%C3%A3o_Jorge", maps: "https://www.google.com/maps/search/Castelo+de+S%C3%A3o+Jorge+Lisbon" },
    { name: "Cristo Rei", group: "Extra / Opcionális", googleRating: "4.6", ratingCount: "43.5K", when: "4. nap · Ápr. 6 opció", price: "8€/fő", detail: "A túlpartról ad különösen erős panorámát a városra és a Ponte 25 de Abril hídra.", wikipedia: "https://en.wikipedia.org/wiki/Christ_the_King_(Almada)", maps: "https://www.google.com/maps/search/Christo+Rei+Almada" },
    { name: "Santa Justa lift", group: "Történelmi Lisszabon", googleRating: "4.0", ratingCount: "53.6K", when: "2. vagy 4. nap", price: "6€/fő", detail: "Ikonikus belvárosi vaslift Baixa és Chiado határán, rövid fotós megállónak jó.", wikipedia: "https://en.wikipedia.org/wiki/Santa_Justa_Lift", maps: "https://www.google.com/maps/search/Santa+Justa+Lift+Lisbon" },
    { name: "Pena kastély", group: "Sintra", googleRating: "4.4", ratingCount: "101K", when: "3. nap · Ápr. 5", price: "20€/fő", detail: "Sintra zászlóshajója, korai idősávval a legjobb.", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra" },
    { name: "Quinta da Regaleira", group: "Sintra", googleRating: "4.8", ratingCount: "43.7K", when: "3. nap · Ápr. 5", price: "8€/fő", detail: "Titokzatos kert, iniciatikus kút, rövid sintrai párosítás a Penával.", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra" }
  ],
  practical: [
    {
      title: "⚠️ Foglalások",
      items: [
        "Jerónimos és Pena időpontra foglalva a legjobb.",
        "A hazautas W6 2394 járat adatait és online check-int rögzítsd.",
        "A lisszaboni vacsoráknál foglalás jól jöhet."
      ]
    },
    {
      title: "🚆 Közlekedés",
      items: [
        "Lisszabonban gyalog + tömegközlekedés bőven elég, de a dombok és a macskakő miatt a rövid szakaszok is fárasztóbbak tudnak lenni.",
        "Viva Viagem kártya az egyik legpraktikusabb megoldás többféle közlekedési eszközhöz; metróra, villamosra és több vasúti vonalra is jól használható.",
        "Sintrába a Rossióból induló vonat a legegyszerűbb.",
        "A reptérre taxi, Uber vagy Bolt a legkényelmesebb esti megoldás.",
        "A 28-as villamos inkább élmény, mint gyors közlekedés.",
        "A Santa Justa liftnél sokszor hosszú a sor; ha csak a kilátás számít, a környező utcák felől gyalog is fel lehet jutni.",
        "Sintra és Cascais egy napba csak korai indulással fér bele kényelmesen."
      ]
    },
    {
      title: "✈ Hazautazás",
      items: [
        "Wizz Air Hungary W6 2394",
        "LIS indulás: 20:55, 2026. április 7., kedd",
        "BUD érkezés: 01:35, 2026. április 8., szerda"
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
