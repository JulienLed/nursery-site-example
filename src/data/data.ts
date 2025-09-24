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
    title: "Projet",
    path: "/projet-pedagogique",
    img: { src: "/projet.png", width: 1024, height: 1024 },
    content: [
      {
        title: "Accueil",
        path: "/projet-pedagogique/accueil",
        description:
          "L'accueil constitue un moment essentiel pour sécuriser l'enfant et instaurer un climat de confiance avec les parents. Nous veillons à créer une transition douce entre le milieu familial et la crèche.",
        details: [
          "Chaque enfant est accueilli personnellement pour favoriser un lien de confiance dès le premier instant.",
          "Un petit rituel quotidien (chant ou comptine) crée un environnement rassurant et joyeux.",
          "Les éducateurs observent l'humeur et le comportement pour offrir un accompagnement personnalisé.",
        ],
        img: {
          src: "/projet1.png",
          width: 1024,
          height: 1024,
          alt: "Accueil",
        },
      },
      {
        title: "Besoins spécifiques",
        path: "/projet-pedagogique/besoins",
        description:
          "Chaque enfant est unique. Nous adaptons notre accompagnement pour répondre aux besoins spécifiques liés au rythme, au sommeil, à l'alimentation ou aux particularités de santé.",
        details: [
          "Chaque enfant bénéficie d'un repos adapté à son âge et à son rythme.",
          "L'alimentation est soigneusement ajustée pour la santé et le bien-être de chacun.",
          "Communication constante avec les familles et les professionnels de santé pour assurer une attention complète aux besoins particuliers de l'enfant.",
        ],
        img: {
          src: "/projet2.png",
          width: 1024,
          height: 1024,
          alt: "Besoins spécifiques",
        },
      },
      {
        title: "Rituels",
        path: "/projet-pedagogique/rituels",
        description:
          "Les rituels structurent la journée et rassurent les enfants. Ils permettent de donner des repères clairs et stables favorisant leur sentiment de sécurité.",
        details: [
          "Une routine chaleureuse le matin qui prépare les enfants à la journée et les rassure.",
          "Apprentissage simple des bonnes pratiques d'hygiène (lavage des mains avant les repas).",
          "Chants et histoires régulières pour créer un rythme quotidien et favoriser le sentiment de sécurité.",
        ],
        img: {
          src: "/projet3.png",
          width: 1024,
          height: 1024,
          alt: "Rituels",
        },
      },
      {
        title: "Activités",
        path: "/projet-pedagogique/activites",
        description:
          "Les activités proposées stimulent la créativité, la motricité et l'éveil des sens. Elles sont adaptées à l'âge et au développement de chaque enfant.",
        details: [
          "Ateliers créatifs : peinture, pâte à modeler, collage pour développer l'imagination.",
          "Jeux de motricité fine et globale pour améliorer coordination et équilibre.",
          "Activités sensorielles variées pour découvrir textures, sons et odeurs.",
        ],
        img: {
          src: "/projet4.png",
          width: 1024,
          height: 1024,
          alt: "Activités",
        },
      },
      {
        title: "Éveil",
        path: "/projet-pedagogique/eveil",
        description:
          "Nous encourageons l'exploration et la curiosité naturelle des enfants en leur offrant un environnement riche et varié pour favoriser leur éveil global.",
        details: [
          "Coin lecture pour initier les enfants à la découverte des livres dès le plus jeune âge.",
          "Exploration de la nature, jardinage et observation des saisons pour développer la curiosité.",
          "Petites expériences scientifiques et jeux sensoriels pour éveiller la logique et la créativité.",
        ],
        img: {
          src: "/projet5.png",
          width: 1024,
          height: 1024,
          alt: "Eveil",
        },
      },
      {
        title: "Développement",
        path: "/projet-pedagogique/developpement",
        description:
          "Le suivi attentif du développement psychomoteur, affectif et social de l'enfant nous permet de l'accompagner dans ses apprentissages à son rythme.",
        details: [
          "Observations quotidiennes et fiches de suivi pour chaque enfant.",
          "Encouragement à l'autonomie (habillage, rangement, choix d'activités).",
          "Jeux coopératifs pour développer les compétences sociales et le respect des autres.",
        ],
        img: {
          src: "/projet6.png",
          width: 1024,
          height: 1024,
          alt: "Développement",
        },
      },
      {
        title: "Observation",
        path: "/projet-pedagogique/observation",
        description:
          "L'observation quotidienne des enfants nous aide à mieux comprendre leurs besoins, leurs émotions et leurs progrès, afin d'adapter notre pédagogie.",
        details: [
          "Carnets d'observation pour noter le développement, les préférences et le comportement.",
          "Réunions pédagogiques pour ajuster les activités en fonction des besoins de chaque enfant.",
          "Communication ouverte avec les parents sur les progrès, difficultés et moments importants.",
        ],
        img: {
          src: "/projet7.png",
          width: 1024,
          height: 1024,
          alt: "Observation",
        },
      },
      {
        title: "Transitions et départ",
        path: "/projet-pedagogique/transitions-depart",
        description:
          "Le départ de la crèche est une étape importante. Nous préparons l'enfant en douceur à la transition vers l'école maternelle ou une autre structure.",
        details: [
          "Visites de l'école maternelle pour familiariser les enfants à leur futur environnement.",
          "Rituels de séparation progressifs pour que l'enfant se sente en confiance.",
          "Entretiens réguliers avec les familles pour assurer un passage serein et bien préparé.",
        ],
        img: {
          src: "/projet8.png",
          width: 1024,
          height: 1024,
          alt: "Transitions et départ",
        },
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    img: { src: "/services.png", width: 1024, height: 1024 },
    content: [
      {
        title: "Soins et hygiène",
        path: "/services/soins-hygiene",
        description: `Le service "Soins et hygiène" est dédié à assurer le bien-être complet des enfants tout au long de la journée. 
Il comprend la surveillance et l'accompagnement des routines de propreté, comme le lavage des mains et l'apprentissage de l'autonomie dans la toilette. 
Nous veillons également à l'hygiène vestimentaire et corporelle de chaque enfant, en changeant les vêtements et les couches si nécessaire. 
Les soins incluent l'application des produits adaptés à la peau fragile des enfants et la prévention des irritations ou allergies. 
Les repas et collations sont préparés et servis dans des conditions strictes d'hygiène. 
Chaque enfant est suivi individuellement pour détecter les besoins spécifiques en matière de santé et de confort. 
Nous collaborons avec les parents pour garantir une continuité entre le domicile et la crèche. 
Des routines régulières de nettoyage et de désinfection des espaces de vie sont effectuées. 
L'objectif est de créer un environnement sûr, propre et stimulant, favorisant le développement physique et émotionnel. 
Enfin, nos professionnels sont formés pour intervenir rapidement en cas de petit bobo ou de malaise.`,
        img: {
          src: "/projet1.png",
          width: 1024,
          height: 1024,
          alt: "Soins et hygiène",
        },
      },
      {
        title: "Activités",
        path: "/services/activites",
        description: `Le service "Activités" propose un large éventail d'animations visant le développement global de l'enfant. 
Les activités sont planifiées en fonction de l'âge, des capacités et des centres d'intérêt de chaque enfant. 
Elles incluent des ateliers créatifs, artistiques, sensoriels et moteurs pour stimuler l'imagination et la motricité fine et globale. 
Des jeux collectifs favorisent la socialisation et l'apprentissage du partage et de la coopération. 
Les activités linguistiques et musicales enrichissent le vocabulaire et éveillent les sens. 
Chaque session est encadrée par des professionnels formés à observer et accompagner le développement individuel. 
L'objectif est de créer un environnement ludique et éducatif où chaque enfant peut s'exprimer et progresser à son rythme. 
Les activités en extérieur permettent de découvrir la nature et d'encourager la curiosité. 
Des moments calmes et de relaxation sont également intégrés pour équilibrer l'énergie des enfants. 
L'approche globale favorise le développement cognitif, émotionnel et social de manière harmonieuse.`,
        img: {
          src: "/projet2.png",
          width: 1024,
          height: 1024,
          alt: "Activités",
        },
      },
      {
        title: "Rituels",
        path: "/services/rituels",
        description: `Le service "Rituels" vise à instaurer des routines sécurisantes et prévisibles pour les enfants. 
Ces rituels quotidiens aident à structurer la journée et à réduire l'anxiété liée aux transitions. 
Ils incluent les moments de repas, de sieste, de jeux et d'activités éducatives. 
Les rituels favorisent l'autonomie et la responsabilisation de l'enfant dans ses gestes quotidiens. 
Nous encourageons également les rituels sociaux, comme les salutations et les échanges verbaux, pour renforcer le sentiment d'appartenance au groupe. 
Les histoires, chants et comptines font partie des rituels favorisant le langage et l'écoute. 
Chaque enfant est accompagné individuellement pour intégrer les routines selon son rythme. 
Les transitions entre les activités sont encadrées pour réduire le stress et maintenir la concentration. 
Des rituels saisonniers et festifs viennent enrichir la vie quotidienne et développer la curiosité culturelle. 
Le respect de ces routines contribue au bien-être émotionnel et à la stabilité affective des enfants.`,
        img: {
          src: "/projet3.png",
          width: 1024,
          height: 1024,
          alt: "Rituels",
        },
      },
      {
        title: "Sécurité",
        path: "/services/securite",
        description: `Le service "Sécurité" assure que tous les enfants évoluent dans un environnement sûr et protégé. 
Les locaux sont conçus pour minimiser les risques, avec des protections, des zones adaptées et des dispositifs de surveillance. 
Chaque activité est encadrée par des professionnels formés à prévenir les accidents. 
Les procédures d'urgence, comme l'évacuation et les premiers secours, sont régulièrement mises à jour et pratiquées. 
La surveillance des enfants est constante, en intérieur comme en extérieur, pour garantir leur sécurité physique et émotionnelle. 
Le matériel et les jouets sont contrôlés et entretenus pour éviter tout danger. 
Nous collaborons étroitement avec les parents pour signaler tout problème de sécurité et appliquer les recommandations médicales. 
Des formations continues sont suivies par le personnel pour rester à jour sur les normes de sécurité et les bonnes pratiques. 
Les enfants sont initiés progressivement à la sécurité et aux comportements prudents. 
L'objectif est de créer un cadre protecteur où les enfants peuvent explorer, apprendre et grandir en toute confiance.`,
        img: {
          src: "/projet4.png",
          width: 1024,
          height: 1024,
          alt: "Secutite",
        },
      },
    ],
  },
  {
    title: "Tarifs",
    path: "/tarif",
    img: { src: "/tarif.png", width: 1024, height: 1024 },
    tarifs: [
      {
        jour: 2,
        price: 600,
      },
      {
        jour: 3,
        price: 700,
      },
      {
        jour: 4,
        price: 800,
      },
      {
        jour: 5,
        price: 900,
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    img: { src: "/contact.png", width: 1024, height: 1024 },
  },
];
