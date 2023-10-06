import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    tripguide,
    threejs,
    primereact,
    inovin,
    memoryLand,
    rocket,
    wcsLogo,
    merEtGolfLogo,
    carrefourLogo,
    warnerBrosLogo,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Expérience",
    },
    {
      id: "project",
      title: "Projets",
    },
  ];
  
  const services = [
    {
      title: "Developpeuse web ",
      icon: web,
    },
    {
      title: "Front end (React)",
      icon: mobile,
    },
    {
      title: "Backend (express)",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "primeReact",
      icon: primereact,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Formation développeuse full stack (5 mois)",
      company_name: "wild code school",
      icon: wcsLogo,
      iconBg: "#383E56",
      date: "Fév 2023- Juil 2023",
      points: [
        "Apprendre à développer des application web et web mobile en React, scss et node.js",
        "Faire 3 projets dont un pour un client",
      ],
    },
    {
      title: "Réceptionniste ",
      company_name: "Mer et Golf",
      icon: merEtGolfLogo,
      iconBg: "#E6DEDD",
      date: "Déc. 2021 - Sept. 2022",
      points: [
        "Accueille le client à son arrivée.",
        "Répondre à toutes les demandes ou réclamations des clients, au téléphone ou de visu.",
        "Planifier les réservations arrivées par mail ou téléphone. ",
        "Préparer les factures des clients en fin de séjour et encaisse les paiements.",
      ],
    },
    {
      title: "Assistante fabrication",
      company_name: "Carrefour",
      icon: carrefourLogo,
      iconBg: "#E6DEDD",
      date: "Janv. 2017 - Janv. 2019",
      points: [
        "Service client et résolution de problèmes",
        "Gestion des changements d'horaires de travail",
        "Formation des nouveaux employés",
        "Gestion de l'argent à la caisse",
        "Rotation des produits alimentaires ; inventaire ; gestion du gaspillage alimentaire",
        "Travail en équipe",
      ],
    },
    {
      title: "Commis de cuisine (Australie)",
      company_name: "Warner Bros.",
      icon: warnerBrosLogo,
      iconBg: "#383E56",
      date: "déc. 2014 - sept. 2017",
      points: [
        "Capacité à travailler sous pression ",
        "Respecter les délais",
        "Forte attention aux détails pour assurer la qualité des plats",
        "Gestion du temps et en collaboration en équipe pour assurer une cuisine efficace et harmonieuse.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Inovin",
      description:
        "Créer une application qui accompagne un atelier de vin",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "PrimeReact",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: inovin,
      source_code_link: "https://github.com/WildCodeSchool/2023-02-JS-Bordeaux-project-3-groupe5",
    },
    {
      name: "MemoryLand",
      description:
        " Créer un jeu de memory pour enfants avec un theme pirate.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: memoryLand,
      source_code_link: "https://github.com/Mogwaie/memoryland-WCS",
    },
    {
      name: "WCS-ROKKET",
      description:
        "Créer un quizz avec plusieur difficultés et thèmes",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: rocket,
      source_code_link: "https://github.com/Mogwaie/WCS-ROKKET.git",
    },
  ];
  
  export { services, technologies, experiences, projects };