const associations = [
  {
    name: "Ail",
    slug: "ail",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "23/12"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/ail.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/ail",
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
    enemies: ["Haricot", "Pois"]
  },
  {
    name: "Aneth",
    slug: "aneth",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/aneth.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/aneth",
    desc:
      "L'aneth est une plante de la famille des Apiacées. Nom scientifique : Anethum graveolens L., famille des Apiacées, genre Anethum. ",
    friends: [],
    enemies: ["Carotte"]
  },
  {
    name: "Artichaut",
    slug: "artichaut",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/artichaut.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/artichaut",
    desc:
      "L’artichaut est une plante dicotylédone de la famille des Astéracées appartenant au genre Cynara.",
    friends: ["Haricot", "Laitue", "Oignon", "Pois", "Radis"],
    enemies: []
  },
  {
    name: "Asperge",
    slug: "asperge",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/asperge.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/asperge",
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
    enemies: []
  },
  {
    name: "Aubergine",
    slug: "aubergine",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/aubergine.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/aubergine",
    desc:
      "L’aubergine est une plante potagère annuelle de la famille des Solanacées, cultivée pour son fruit consommé comme légume. Le terme désigne aussi ce légume.",
    friends: ["Haricot"],
    enemies: []
  },
  {
    name: "Bette",
    slug: "bette",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/bette.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/bette",
    desc:
      "La « bette » ou « blette » est le nom vernaculaire d’une plante potagère comestible, appelée aussi (selon les variétés ou les régions) « poirée », « jotte » ou « betterave sauvage », une herbacée dicotylédone dans la sous-famille des Chénopodiacées parmi les Amaranthacées, hermaphrodite et endémique dans ses variétés sauvages des régions maritimes ouest-européennes et méditerranéennes",
    friends: ["Carotte"],
    enemies: []
  },
  {
    name: "Betterave",
    slug: "betterave",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/betterave.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/betterave",
    desc:
      "La betterave, Beta vulgaris subsp. vulgaris, est une sous-espèce de plantes de la famille des Amaranthaceae, cultivées pour leurs racines charnues, et utilisées comme légume dans l'alimentation humaine",
    friends: ["Ail", "Chou", "Concombre", "Haricot", "Navet", "Oignon", "Pois"],
    enemies: ["Mais"]
  },
  {
    name: "Carotte",
    slug: "carotte",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/carotte.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/carotte",
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
    enemies: ["Aneth", "Pomme de terre"]
  },
  {
    name: "Céleri",
    slug: "celeri",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/celeri.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/celeri",
    desc:
      "Le céleri ou ache des marais, persil des marais ou encore cèleri, est une plante herbacée bisannuelle de la famille des Apiacées, cultivée comme plante potagère pour ses feuilles et sa racine tubérisée consommées comme légumes.",
    friends: ["Chou", "Poireau", "Radis", "Tomate"],
    enemies: []
  },
  {
    name: "Cerfeuil",
    slug: "cerfeuil",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/cerfeuil.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/cerfeuil",
    desc:
      "Le Cerfeuil commun est une plante herbacée de la famille des Apiacées, probablement originaire de Russie, cultivée comme plante condimentaire pour ses feuilles au goût légèrement anisé.",
    friends: ["Radis"],
    enemies: []
  },
  {
    name: "Chou",
    slug: "chou",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/chou.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/chou",
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
    enemies: ["Fenouil", "Fraisier", "Radis"]
  },
  {
    name: "Ciboulette",
    slug: "ciboulette",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/ciboulette.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/ciboulette",
    desc:
      "La ciboulette ou civette est une plante aromatique de la famille des Amaryllidacées, cultivée pour ses feuilles souvent utilisées comme condiment. ",
    friends: ["Carotte"],
    enemies: ["Haricot", "Pois"]
  },
  {
    name: "Concombre",
    slug: "concombre",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/concombre.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/concombre",
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
    enemies: ["Pomme de terre", "Tomate"]
  },
  {
    name: "Courge",
    slug: "courge",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/courge.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/courge",
    desc:
      "Le terme courge, ou plus rarement cougourde, désigne plusieurs espèces de plantes de la famille des cucurbitacées. Elles sont généralement cultivées pour leurs fruits comestibles mais il arrive qu'elles le soient pour leurs graines oléagineuses",
    friends: ["Haricot", "Laitue", "Mais", "Navet"],
    enemies: ["Pomme de terre"]
  },
  {
    name: "Potiron",
    slug: "potiron",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/potiron.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/potiron",
    desc:
      "Le potiron est une plante de la famille des Cucurbitacées originaire des régions tropicales d'Amérique du Sud. Le potiron est largement cultivé comme plante potagère pour son fruit comestible à maturité",
    friends: ["Haricot", "Laitue", "Mais", "Navet"],
    enemies: ["Pomme de terre"]
  },
  {
    name: "Courgette",
    slug: "courgette",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/courgette.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/courgette",
    desc:
      "La courgette est une plante de la famille des Cucurbitaceae, c'est aussi le fruit comestible de cette plante. Outre le fruit qui est un légume courant en été, la fleur de courgette est aussi utilisée en cuisine",
    friends: ["Haricot", "Laitue", "Mais", "Navet"],
    enemies: ["Pomme de terre"]
  },
  {
    name: "Epinard",
    slug: "epinard",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/epinard.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/epinard",
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
    enemies: []
  },
  {
    name: "Fenouil",
    slug: "fenouil",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/fenouil.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/fenouil",
    desc:
      "Le fenouil commun (nom scientifique Foeniculum vulgare, syn. Foeniculum officinale) est une variété de fenouil, généralement vivace parfois bisannuelle, cultivée pour le renflement bulbeux et charnu de ses feuilles imbriquées les unes dans les autres utilisée en alimentation. ",
    friends: [],
    enemies: ["Chou", "Tomate"]
  },
  {
    name: "Feve",
    slug: "feve",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/feve.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/feve",
    desc:
      "Les fèves sont des plantes annuelles légumineuses de la famille des Fabaceae, sous-famille des Faboideae, tribu des Fabeae. Comme les féverolles, les fèves cultivées ont comme origine l'espèce botanique Vicia faba.",
    friends: ["Pomme de terre"],
    enemies: []
  },
  {
    name: "Fraisier",
    slug: "fraisier",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/fraisier.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/fraisier",
    desc:
      "Le fraisier cultivé (Fragaria ×ananassa), plus rarement appelé fraisier ananas, est une espèce hybride de fraisiers cultivée pour son fruit qui est la fraise de jardin. Ce fruit n'est en fait pas une baie au sens botanique, mais un faux-fruit.",
    friends: ["Ail", "Oignon"],
    enemies: ["Chou"]
  },
  {
    name: "Haricot",
    slug: "haricot",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/haricot.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/haricot",
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
    enemies: ["Ail", "Ciboulette", "Oignon", "Persil", "Radis", "Tomate"]
  },
  {
    name: "Laitue",
    slug: "laitue",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/laitue.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/laitue",
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
    enemies: []
  },
  {
    name: "Mache",
    slug: "mache",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/laitue.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/mache",
    desc:
      "La mâche (Valerianella locusta), aussi appelée blanchette, boursette, clairette, raiponce, oreillette ou oreille-de-lièvre, valérianelle, valérianelle cultivée, herbe des chanoines, en Belgique, salade de blé, dans le midi de la France, doulcéta, doucette, gallinette, ou en Savoie et en Suisse romande, rampon, ramponnet, est une petite plante herbacée annuelle de la famille des Caprifoliaceae, originaire de l’Afrique, de l’Amérique du Nord et de l’Eurasie.",
    friends: ["Poireau", "Tomate"],
    enemies: []
  },
  {
    name: "Mais",
    slug: "mais",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/mais.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/mais",
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
    enemies: ["Betterave"]
  },
  {
    name: "Navet",
    slug: "navet",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/navet.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/navet",
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
    enemies: []
  },
  {
    name: "Oignon",
    slug: "oignon",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/oignon.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/oignon",
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
    enemies: ["Haricot", "Pois"]
  },
  {
    name: "Persil",
    slug: "persil",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/persil.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/persil",
    desc:
      "e persil est une espèce de plante herbacée de la famille des Apiacées et du genre Petroselinum. Le persil est couramment utilisé en cuisine pour ses feuilles très divisées, et en Europe centrale pour sa racine pivot.",
    friends: ["Asperge", "Tomate"],
    enemies: ["Pois"]
  },
  {
    name: "Poireau",
    slug: "poireau",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/poireau.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/poireau",
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
    enemies: ["Haricot"]
  },
  {
    name: "Pois",
    slug: "pois",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/pois.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/pois",
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
    enemies: ["Ail", "Ciboulette", "Oignon", "Persil"]
  },
  {
    name: "Pomme de terre",
    slug: "pomme_de_terre",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/patate.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/pomme_de_terre",
    desc:
      "La pomme de terre, ou patate, est un tubercule comestible produit par l’espèce Solanum tuberosum, appartenant à la famille des solanacées.",
    friends: ["Chou", "Feve", "Haricot", "Pois", "Radis", "Raifort"],
    enemies: ["Concombre", "Courge", "Potiron", "Courgette", "Tomate"]
  },
  {
    name: "Radis",
    slug: "radis",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/radis.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/radis",
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
    enemies: ["Chou", "Haricot"]
  },
  {
    name: "Raifort",
    slug: "raifort",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/raifort.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/raifort",
    desc:
      "Le Raifort est une plante vivace de la famille des Brassicacées, cultivée pour sa racine à usage condimentaire. Noms scientifiques : Armoracia rusticana G. Gaertn. et al., famille des Brassicacées, sous-famille des Brassicoideae.",
    friends: ["Pomme de terre"],
    enemies: []
  },
  {
    name: "Tomate",
    slug: "tomate",

    sowing_range: ["01/01", "01/04"],
    harvest_range: ["01/06", "01/10"],
    ground: {
      type: [
        {
          title: "Humifère",
          img: "/static/img/terreau.svg"
        },
        {
          title: "Argileux",
          img: "/static/img/argile.svg"
        },
        {
          title: "Sableux",
          img: "/static/img/sable.svg"
        },
        {
          title: "Calcaire",
          img: "/static/img/argile.svg"
        }
      ],
      desc:
        "La plante aime les sols légers, profonds, riches en éléments nutritifs anciens et bien drainés. Les bulbes d'ail pourrissent dans les sols lourds et glaiseux, surtout s'ils restent humides. Il ne faut pas cultiver dans les sols organiques ni utiliser de fumiers frais, cela les fait pourrir."
    },
    composition: {
      Calories: "15",
      Lipides: "0.2mg",
      Cholestérol: "Omg",
      Sodium: "28mg",
      Potassium: "194mg",
      Glucides: "2.9g",
      "Fibres alimentaires": "1.3mg",
      Sucres: "0.8mg",
      Protéines: "1.4mg",
      "Vitamine A": "7 405 IU",
      Calcium: "36mg",
      "Vitamine D": "0 IU",
      "Vitamine B₁₂": "0 µg",
      "Vitamine C": "9.2mg",
      Fer: "0.9mg",
      "Vitamine B6": "0.1mg",
      Magnésium: "13mg"
    },
    img: "/static/img/vegetables/tomate.svg",
    wikiUrl: "http://fr.wikipedia.org/wiki/tomate",
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
    enemies: ["Concombre", "Fenouil", "Haricot", "Pomme de terre"]
  }
];

export default associations;
