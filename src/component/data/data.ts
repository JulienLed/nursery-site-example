export const menu = [
  { title: "Accueil", path: "/" },
  {
    title: "Equipe",
    path: "/equipe",
    img: { src: "/equipe.png", width: 1024, height: 1024 },
    members: [
      {
        name: "Sophie Lambert",
        role: "Directrice",
        img: { src: "/travailleuse-1.jpg", width: 640, height: 640 },
        description:
          "Fondatrice de la crèche, Sophie veille au bon fonctionnement de l'équipe et au bien-être des enfants. Elle a plus de 15 ans d'expérience dans le secteur de la petite enfance.",
        funFact: "Adore la randonnée et la pâtisserie maison.",
      },
      {
        name: "Marie Dupont",
        role: "Puéricultrice",
        img: { src: "/travailleuse-2.jpg", width: 640, height: 640 },
        description:
          "Marie accompagne les enfants au quotidien avec douceur et créativité. Formée en stimulation précoce, elle adore organiser des ateliers sensoriels.",
        funFact: "Grande fan de peinture et d'art créatif.",
      },
      {
        name: "Claire Martin",
        role: "Puéricultrice",
        img: { src: "/travailleuse-3.jpg", width: 640, height: 640 },
        description:
          "Claire est passionnée par le développement psychomoteur. Elle apporte une énergie positive et beaucoup de patience au sein de l'équipe.",
        funFact: "Joue du violon pendant son temps libre.",
      },
      {
        name: "Julie Bernard",
        role: "Accueillante",
        img: { src: "/travailleuse-4.jpg", width: 640, height: 640 },
        description:
          "Julie est le premier sourire que voient les enfants et les parents chaque matin. Elle assure un climat chaleureux et rassurant dès l'accueil.",
        funFact: "Amatrice de jardinage et de plantes vertes.",
      },
    ],
  },
  {
    title: "Projet Pédagogique",
    path: "/projet-pedagogique",
    img: { src: "/projet.png", width: 1024, height: 1024 },
    content: [
      {
        title: "Accueil",
        path: "/projet-pedagogique/accueil",
        description:
          "L'accueil constitue un moment essentiel pour sécuriser l'enfant et instaurer un climat de confiance avec les parents. Nous veillons à créer une transition douce entre le milieu familial et la crèche.",
      },
      {
        title: "Besoins spécifiques",
        path: "/projet-pedagogique/besoins",
        description:
          "Chaque enfant est unique. Nous adaptons notre accompagnement pour répondre aux besoins spécifiques liés au rythme, au sommeil, à l'alimentation ou aux particularités de santé.",
      },
      {
        title: "Rituels",
        path: "/projet-pedagogique/rituels",
        description:
          "Les rituels structurent la journée et rassurent les enfants. Ils permettent de donner des repères clairs et stables favorisant leur sentiment de sécurité.",
      },
      {
        title: "Activités",
        path: "/projet-pedagogique/activites",
        description:
          "Les activités proposées stimulent la créativité, la motricité et l'éveil des sens. Elles sont adaptées à l'âge et au développement de chaque enfant.",
      },
      {
        title: "Éveil",
        path: "/projet-pedagogique/eveil",
        description:
          "Nous encourageons l'exploration et la curiosité naturelle des enfants en leur offrant un environnement riche et varié pour favoriser leur éveil global.",
      },
      {
        title: "Développement",
        path: "/projet-pedagogique/developpement",
        description:
          "Le suivi attentif du développement psychomoteur, affectif et social de l'enfant nous permet de l'accompagner dans ses apprentissages à son rythme.",
      },
      {
        title: "Observation",
        path: "/projet-pedagogique/observation",
        description:
          "L'observation quotidienne des enfants nous aide à mieux comprendre leurs besoins, leurs émotions et leurs progrès, afin d'adapter notre pédagogie.",
      },
      {
        title: "Départ",
        path: "/projet-pedagogique/transitions-depart",
        description:
          "Le départ de la crèche est une étape importante. Nous préparons l'enfant en douceur à la transition vers l'école maternelle ou une autre structure.",
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    img: { src: "/services.png", width: 1024, height: 1024 },
    content: [
      { title: "Accueil", path: "/services/accueil" },
      { title: "Soins et hygiène", path: "/services/soins-hygiene" },
      {
        title: "Activités",
        path: "/services/activites",
      },
      {
        title: "Communication avec les parents",
        path: "/services/communication-parents",
      },
      { title: "Rituels", path: "/services/rituels" },
      {
        title: "Sécurité",
        path: "/services/securite",
      },
    ],
  },
  {
    title: "Tarif",
    path: "/tarif",
    img: { src: "/tarif.png", width: 1024, height: 1024 },
  },
  {
    title: "Contact",
    path: "/contact",
    img: { src: "/contact.png", width: 1024, height: 1024 },
  },
];
