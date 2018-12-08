const associations = [
  {
    name: "Ail",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/ail.svg",
    desc:
      "L'ail, ail commun ou ail cultivé est une espèce de plante potagère vivace monocotylédone dont les bulbes, à l'odeur et au goût forts, sont souvent employés comme condiment en cuisine",
    friends: [
      "Asperge",
      "Betterave",
      "Concombre",
      "Fraisier",
      "Laitue",
      "Tomate"
    ],
    ennemies: ["Haricot", "Pois"]
  },
  {
    name: "Aneth",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/aneth.svg",
    desc:
      "L'aneth est une plante de la famille des Apiacées. Nom scientifique : Anethum graveolens L., famille des Apiacées, genre Anethum. ",
    friends: [],
    ennemies: ["Carotte"]
  },
  {
    name: "Artichaut",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/artichaut.svg",
    desc:
      "L’artichaut est une plante dicotylédone de la famille des Astéracées appartenant au genre Cynara.",
    friends: ["Haricot", "Laitue", "Oignon", "Pois", "Radis"],
    ennemies: []
  },
  {
    name: "Asperge",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/asperge.svg",
    desc:
      "L'asperge est une plante de la famille des Asparagaceae originaire de l'est du bassin méditerranéen. Connue des Romains, elle est cultivée comme plante potagère en France depuis le XVᵉ siècle.",
    friends: [
      "Ail",
      "Chou",
      "Haricot",
      "Laitue",
      "Navet",
      "Oignon",
      "Persil",
      "Pois",
      "Radis",
      "Tomate"
    ],
    ennemies: []
  },
  {
    name: "Aubergine",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/aubergine.svg",
    desc:
      "L’aubergine est une plante potagère annuelle de la famille des Solanacées, cultivée pour son fruit consommé comme légume. Le terme désigne aussi ce légume.",
    friends: ["Haricot"],
    ennemies: []
  },
  {
    name: "Bette",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/bette.svg",
    desc:
      "La « bette » ou « blette » est le nom vernaculaire d’une plante potagère comestible, appelée aussi (selon les variétés ou les régions) « poirée », « jotte » ou « betterave sauvage », une herbacée dicotylédone dans la sous-famille des Chénopodiacées parmi les Amaranthacées, hermaphrodite et endémique dans ses variétés sauvages des régions maritimes ouest-européennes et méditerranéennes",
    friends: ["Carotte"],
    ennemies: []
  },
  {
    name: "Betterave",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/betterave.svg",
    desc:
      "La betterave, Beta vulgaris subsp. vulgaris, est une sous-espèce de plantes de la famille des Amaranthaceae, cultivées pour leurs racines charnues, et utilisées comme légume dans l'alimentation humaine",
    friends: ["Ail", "Chou", "Concombre", "Haricot", "Navet", "Oignon", "Pois"],
    ennemies: ["Mais"]
  },
  {
    name: "Carotte",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/carotte.svg",
    desc:
      "Daucus carota est une espèce de plantes à fleurs dicotylédones de la famille des Apiaceae, originaire des régions tempérées de l'Ancien monde. Les carottes cultivées appartiennent à la sous-espèce, Daucus carota subsp. sativus.",
    friends: [
      "Bette",
      "Ciboulette",
      "Haricot",
      "Laitue",
      "Navet",
      "Oignon",
      "Poireau",
      "Pois",
      "Radis",
      "Tomate"
    ],
    ennemies: ["Aneth", "Pomme de terre"]
  },
  {
    name: "Céleri",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/celeri.svg",
    desc:
      "Le céleri ou ache des marais, persil des marais ou encore cèleri, est une plante herbacée bisannuelle de la famille des Apiacées, cultivée comme plante potagère pour ses feuilles et sa racine tubérisée consommées comme légumes.",
    friends: ["Chou", "Poireau", "Radis", "Tomate"],
    ennemies: []
  },
  {
    name: "Cerfeuil",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/cerfeuil.svg",
    desc:
      "Le Cerfeuil commun est une plante herbacée de la famille des Apiacées, probablement originaire de Russie, cultivée comme plante condimentaire pour ses feuilles au goût légèrement anisé.",
    friends: ["Radis"],
    ennemies: []
  },
  {
    name: "Chou",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/chou.svg",
    desc:
      "Le chou est une espèce de plantes de la famille des Brassicacées, originaire du sud-ouest de l'Europe. Plantes généralement bisannuelles, leurs feuilles comestibles peuvent ou non former une tête compacte ou « pomme »",
    friends: [
      "Asperge",
      "Betterave",
      "Cerfeuil",
      "Concombre",
      "Epinard",
      "Haricot",
      "Laitue",
      "Pois",
      "Pomme de terre",
      "Tomate"
    ],
    ennemies: ["Fenouil", "Fraisier", "Radis"]
  },
  {
    name: "Ciboulette",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/ciboulette.svg",
    desc:
      "La ciboulette ou civette est une plante aromatique de la famille des Amaryllidacées, cultivée pour ses feuilles souvent utilisées comme condiment. ",
    friends: ["Carotte"],
    ennemies: ["Haricot", "Pois"]
  },
  {
    name: "Concombre",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/concombre.svg",
    desc:
      "Le concombre est une plante potagère herbacée, rampante, de la même famille que la calebasse africaine, le melon ou la courge, il est consommé comme légume.",
    friends: [
      "Ail",
      "Betterave",
      "Chou",
      "Haricot",
      "Mais",
      "Oignon",
      "Pois",
      "Radis"
    ],
    ennemies: ["Pomme de terre", "Tomate"]
  },
  {
    name: "Courge",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/courge.svg",
    desc:
      "Le terme courge, ou plus rarement cougourde, désigne plusieurs espèces de plantes de la famille des cucurbitacées. Elles sont généralement cultivées pour leurs fruits comestibles mais il arrive qu'elles le soient pour leurs graines oléagineuses",
    friends: ["Haricot", "Laitue", "Mais", "Navet"],
    ennemies: ["Pomme de terre"]
  },
  {
    name: "Potiron",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/potiron.svg",
    desc:
      "Le potiron est une plante de la famille des Cucurbitacées originaire des régions tropicales d'Amérique du Sud. Le potiron est largement cultivé comme plante potagère pour son fruit comestible à maturité",
    friends: ["Haricot", "Laitue", "Mais", "Navet"],
    ennemies: ["Pomme de terre"]
  },
  {
    name: "Courgette",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/courgette.svg",
    desc:
      "La courgette est une plante de la famille des Cucurbitaceae, c'est aussi le fruit comestible de cette plante. Outre le fruit qui est un légume courant en été, la fleur de courgette est aussi utilisée en cuisine",
    friends: ["Haricot", "Laitue", "Mais", "Navet"],
    ennemies: ["Pomme de terre"]
  },
  {
    name: "Epinard",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/epinard.svg",
    desc:
      "L'épinard est une plante potagère, annuelle ou bisannuelle, de la famille des chénopodiacées. Originaire de l'Iran, il est aujourd'hui cultivé dans toutes les régions tempérées pour ses qualités nutritionnelles",
    friends: [
      "Chou",
      "Fraisier",
      "Haricot",
      "Oignon",
      "Poireau",
      "Pois",
      "Radis"
    ],
    ennemies: []
  },
  {
    name: "Fenouil",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/fenouil.svg",
    desc:
      "Le fenouil commun (nom scientifique Foeniculum vulgare, syn. Foeniculum officinale) est une variété de fenouil, généralement vivace parfois bisannuelle, cultivée pour le renflement bulbeux et charnu de ses feuilles imbriquées les unes dans les autres utilisée en alimentation. ",
    friends: [],
    ennemies: ["Chou", "Tomate"]
  },
  {
    name: "Feve",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/feve.svg",
    desc:
      "Les fèves sont des plantes annuelles légumineuses de la famille des Fabaceae, sous-famille des Faboideae, tribu des Fabeae. Comme les féverolles, les fèves cultivées ont comme origine l'espèce botanique Vicia faba.",
    friends: ["Pomme de terre"],
    ennemies: []
  },
  {
    name: "Fraisier",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/fraisier.svg",
    desc:
      "Le fraisier cultivé (Fragaria ×ananassa), plus rarement appelé fraisier ananas, est une espèce hybride de fraisiers cultivée pour son fruit qui est la fraise de jardin. Ce fruit n'est en fait pas une baie au sens botanique, mais un faux-fruit.",
    friends: ["Ail", "Oignon"],
    ennemies: ["Chou"]
  },
  {
    name: "Haricot",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/haricot.svg",
    desc:
      "Le Haricot, ou Haricot commun (Phaseolus vulgaris L.), est une espèce de plantes annuelles de la famille des Fabaceae (Papilionacées), du genre Phaseolus, couramment cultivée comme légume. On en consomme soit le fruit (la gousse), haricot vert ou « mange-tout », soit les graines, riches en protéines. Le terme « haricot » désigne aussi ces parties consommées, les graines (haricots secs) ou les gousses.",
    friends: [
      "Artichaut",
      "Asperge",
      "Aubergine",
      "Betterave",
      "Carotte",
      "Chou",
      "Concombre",
      "Courge",
      "Potiron",
      "Courgette",
      "Epinard",
      "Poireau",
      "Pomme de terre"
    ],
    ennemies: ["Ail", "Ciboulette", "Oignon", "Persil", "Radis", "Tomate"]
  },
  {
    name: "Laitue",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/laitue.svg",
    desc:
      "Les laitues, au sens botanique du terme, sont un genre de plantes annuelles de la famille des Astéracées dont certaines espèces sont cultivées pour leurs feuilles tendres consommées comme salade verte. ",
    friends: [
      "Ail",
      "Artichaut",
      "Asperge",
      "Carotte",
      "Chou",
      "Courge",
      "Potiron",
      "Courgette",
      "Mais",
      "Navet",
      "Oignon",
      "Poireau",
      "Radis"
    ],
    ennemies: []
  },
  {
    name: "Mache",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/laitue.svg",
    desc:
      "La mâche (Valerianella locusta), aussi appelée blanchette, boursette, clairette, raiponce, oreillette ou oreille-de-lièvre, valérianelle, valérianelle cultivée, herbe des chanoines, en Belgique, salade de blé, dans le midi de la France, doulcéta, doucette, gallinette, ou en Savoie et en Suisse romande, rampon, ramponnet, est une petite plante herbacée annuelle de la famille des Caprifoliaceae, originaire de l’Afrique, de l’Amérique du Nord et de l’Eurasie.",
    friends: ["Poireau", "Tomate"],
    ennemies: []
  },
  {
    name: "Mais",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/mais.svg",
    desc:
      "Le maïs, ou blé d’Inde au Canada, est une plante herbacée tropicale annuelle de la famille des Poacées, largement cultivée comme céréale pour ses grains riches en amidon, mais aussi comme plante fourragère.",
    friends: [
      "Concombre",
      "Courge",
      "Potiron",
      "Courgette",
      "Laitue",
      "Tomate"
    ],
    ennemies: ["Betterave"]
  },
  {
    name: "Navet",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/navet.svg",
    desc:
      "Le navet, Brassica rapa L. subsp. rapa, est une plante herbacée de la famille des Brassicacées, cultivée comme plante potagère pour sa racine charnue allongée ou arrondie, consommée comme légume.",
    friends: [
      "Asperge",
      "Betterave",
      "Carotte",
      "Courge",
      "Potiron",
      "Courgette",
      "Laitue",
      "Pois"
    ],
    ennemies: []
  },
  {
    name: "Oignon",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/oignon.svg",
    desc:
      "L’oignon, ou ognon, prononcé /ɔ.ɲɔ̃/, est une espèce de plante herbacée bisannuelle de la famille des Amaryllidaceae, largement et depuis longtemps cultivée comme plante potagère pour ses bulbes de saveur et d'odeur fortes et/ou pour ses feuilles.",
    friends: [
      "Artichaut",
      "Asperge",
      "Betterave",
      "Carotte",
      "Concombre",
      "Epinard",
      "Fraisier",
      "Laitue",
      "Poireau",
      "Tomate"
    ],
    ennemies: ["Haricot", "Pois"]
  },
  {
    name: "Persil",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/persil.svg",
    desc:
      "e persil est une espèce de plante herbacée de la famille des Apiacées et du genre Petroselinum. Le persil est couramment utilisé en cuisine pour ses feuilles très divisées, et en Europe centrale pour sa racine pivot.",
    friends: ["Asperge", "Tomate"],
    ennemies: ["Pois"]
  },
  {
    name: "Poireau",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/poireau.svg",
    desc: "blabla bla blabla blalblalbla dsq dqs dqsdzaefdrgfd ",
    friends: [
      "Carotte",
      "Céleri",
      "Epinard",
      "Laitue",
      "Mache",
      "Oignon",
      "Tomate"
    ],
    ennemies: ["Haricot"]
  },
  {
    name: "Pois",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/pois.svg",
    desc:
      "Le Pois cultivé est une espèce de plante annuelle de la famille des légumineuses, largement cultivée pour ses graines, consommée comme légume ou utilisée comme aliment du bétail. ",
    friends: [
      "Artichaut",
      "Asperge",
      "Betterave",
      "Carotte",
      "Chou",
      "Concombre",
      "Epinard",
      "Navet",
      "Pomme de terre",
      "Radis"
    ],
    ennemies: ["Ail", "Ciboulette", "Oignon", "Persil"]
  },
  {
    name: "Pomme de terre",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/patate.svg",
    desc:
      "La pomme de terre, ou patate, est un tubercule comestible produit par l’espèce Solanum tuberosum, appartenant à la famille des solanacées.",
    friends: ["Chou", "Feve", "Haricot", "Pois", "Radis", "Raifort"],
    ennemies: ["Concombre", "Courge", "Potiron", "Courgette", "Tomate"]
  },
  {
    name: "Radis",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/radis.svg",
    desc:
      "Le radis, Raphanus sativus, dit « ravanet » en provençal, est une plante potagère bisannuelle, de la famille des Brassicacées, cultivée pour son hypocotyle charnu, consommé cru, comme légume. Le terme désigne aussi le légume. ",
    friends: [
      "Artichaut",
      "Asperge",
      "Carotte",
      "Céleri",
      "Cerfeuil",
      "Concombre",
      "Epinard",
      "Laitue",
      "Pois",
      "Pomme de terre",
      "Tomate"
    ],
    ennemies: ["Chou", "Haricot"]
  },
  {
    name: "Raifort",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/raifort.svg",
    desc:
      "Le Raifort est une plante vivace de la famille des Brassicacées, cultivée pour sa racine à usage condimentaire. Noms scientifiques : Armoracia rusticana G. Gaertn. et al., famille des Brassicacées, sous-famille des Brassicoideae.",
    friends: ["Pomme de terre"],
    ennemies: []
  },
  {
    name: "Tomate",
    ground_type: ["argile", "sable", "normal"],
    sowing_date: "1er janvier",
    harvest_date: "12 decembre",
    img: "/assets/imgs/svgs/tomate.svg",
    desc:
      "La tomate (Solanum lycopersicum L.) est une espèce de plantes herbacées de la famille des Solanacées, originaire du Nord-Ouest de l'Amérique du Sud, largement cultivée pour son fruit.",
    friends: [
      "Ail",
      "Asperge",
      "Carotte",
      "Céleri",
      "Chou",
      "Mache",
      "Mais",
      "Oignon",
      "Persil",
      "Poireau",
      "Radis"
    ],
    ennemies: ["Concombre", "Fenouil", "Haricot", "Pomme de terre"]
  }
];

export default associations;
