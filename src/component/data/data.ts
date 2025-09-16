export const menu = [
  { title: "Accueil", path: "/" },
  {
    title: "Equipe",
    path: "/equipe",
    img: { src: "/equipe.png", width: 1024, height: 1024 },
  },
  {
    title: "Projet Pédagogique",
    path: "/projet-pedagogique",
    img: { src: "/projet.png", width: 1024, height: 1024 },
    content: [
      {
        title: "Accueil",
        path: "/projet-pedagogique/accueil",
      },
      {
        title: "Besoins spécifiques",
        path: "/projet-pedagogique/besoins",
      },
      {
        title: "Rituels",
        path: "/projet-pedagogique/rituels",
      },
      {
        title: "Activités",
        path: "/projet-pedagogique/activites",
      },
      {
        title: "Éveil",
        path: "/projet-pedagogique/eveil",
      },
      {
        title: "Développement",
        path: "/projet-pedagogique/developpement",
      },
      {
        title: "Observation",
        path: "/projet-pedagogique/observation",
      },
      {
        title: "Départ",
        path: "/projet-pedagogique/transitions-depart",
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
