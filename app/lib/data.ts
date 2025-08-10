export const writeup = `I’m Tiffany Sia Chong, a final year Computer Science undergraduate at National University of Singapore with a passion for software development and computer graphics.



Coding
I have always loved solving math problems and puzzles, as well as building and creating things, so I naturally loved coding. Coding is an opportunity for me to contribute to the society while doing what I love most. Check out my work experience and software projects.

Game development
Inspired by the book Invent Your Own Computer Games in Python by Al Sweigart, I began coding in 2013 and have since then developed several games.


Graphic Design
Vibrant colors and bouncy animations of cartoons have always inspired me, and I strive to emulate this in the graphics I design. I have worked on many projects and several clients including volunteer welfare organisations.



Contact Me
I am always up to work on projects that will impact the community, and am always up for a challenge. Get in touch at hello@sciffany.com`;

export const description = `
- Loves making [apps](/projects), [artworks](/design) and people smile
- Pescatarian, [cruciverbalist](https://crosshare.org/crosswords/vfN5qIXXAUb6rluYdGPH/break-a-leg) and [ornithophile](https://www.youtube.com/shorts/u-1EousPvG8)
- Excited to work on impactful projects and go the extra mile
- Get in touch at [hello@sciffany.com](mailto:hello@sciffany.com)
`;

export const experiences = [
  {
    title: "Take App",
    role: "Software Engineer",
    date: "May 2023 - Present",
    link: "https://take.app/",
    description: [
      "Led product decisions with the team",
      "Built core e-commerce features end to end",
      "Integrated multiple payment methods",
      "Launched map-based delivery",
      "Implemented scheduling features",
      "Shipped an analytics dashboard",
    ],
    tech: ["Next.js", "TypeScript"],
  },
  {
    title: "Apple",
    role: "Web Engineer, Reliability Engineering Team",
    date: "July 2020 - August 2020",
    description: ["Built web tools to improve reliability"],
    tech: ["Ember.js", "Ruby on Rails", "PostgreSQL"],
    link: "https://www.apple.com/",
  },
  {
    title: "Runners Planet",
    role: "Software Engineer Intern",
    date: "May 2021 - August 2021",
    description: [
      "Implemented map features for runners",
      "Developed a social network for sports",
    ],
    tech: ["React Native", "GraphQL", "Mapbox", "Getstream"],
  },
  {
    title: "National University of Singapore",
    role: "Student Researcher",
    date: "May 2020 - July 2020",
    description: [
      "Built a visual-novel engine to teach introductory programming",
    ],
    tech: ["Phaser", "React"],
  },
  {
    title: "StaffAny Pte Ltd",
    role: "Fullstack Software Engineer",
    date: "November 2019 - January 2020",
    description: [
      "Developed a web timeclock used by thousands across the country",
    ],
    tech: ["Node.js", "React", "TypeScript"],
  },
  {
    title: "StaffAny Pte Ltd",
    role: "Data Engineering Consultant",
    date: "May 2019 - October 2019",
    description: [
      "Built a BigQuery data warehouse and marts on GCP",
      "Created SQL dashboards for business metrics",
      "Analyzed data with Segment.js library",
      "Informed product decisions with data insights",
    ],
    tech: ["GCP", "BigQuery", "SQL", "Segment.js"],
  },
  {
    title: "Transcelestial Technologies",
    role: "Computer Vision Intern",
    date: "May 2018 - August 2018",
    description: [
      "Wrote a low-latency C++ camera API that raised frame rate from under 100 fps to 2000 fps",
      "Used in a point-and-track laser system for ground-to-satellite communication",
    ],
    tech: ["C++", "Camera API", "Firmware", "Hardware Graphics"],
  },
  {
    title: "Sanfo Intl Trading Inc",
    role: "Computer Programmer",
    date: "August 2017 - February 2019",
    description: [
      "Streamlined inventory and payroll workflows and data",
      "Cut operating time by 16 hours per week",
    ],
    tech: ["Google Apps Script", "FileMaker", "Relational database"],
  },
  {
    title: "Agency for Science and Technology Research",
    role: "Student Researcher",
    date: "June 2015 - February 2016",
    description: ["Researched EEG trends during affective picture viewing"],
    tech: ["MATLAB", "EEG", "Signal processing"],
  },
  {
    title: "National University of Singapore",
    role: "Teaching Assistant",
    date: "August 2018 - December 2018",
    description: [
      "Led tutorials and guided class discussions",
      "Produced teaching materials",
      "Received the Best Tutor Award",
    ],
    tech: ["SICP", "Functional programming"],
  },
];

export enum DesignCategory {
  Design = "Design",
  Animation = "Animation",
  Drawings = "Drawings",
  Physical = "Physical",
  All = "All",
}

export const DESIGN_CATEGORIES: readonly DesignCategory[] = [
  DesignCategory.All,
  DesignCategory.Design,
  DesignCategory.Animation,
  DesignCategory.Drawings,
  DesignCategory.Physical,
];

export const designs = [
  {
    title: "Tran(scent)dence",
    image: "1.png",
    slug: "transcentdence",
  },
  {
    title: "Young Students' Recital",
    image: "fin1.png",
    slug: "young-students-recital",
  },
  {
    title: "Design 3",
    description: "Description 3",
    image: "newsad_large.png",
  },
  {
    title: "Design 4",
    description: "Description 4",
    image: "hope.jpeg",
  },
  {
    title: "Design 5",
    description: "Description 5",
    image: "3.png",
  },
  {
    title: "Design 6",
    description: "Description 6",
    image: "5.png",
  },
  {
    title: "Design 7",
    description: "Description 7",
    image: "7.png",
  },
  {
    title: "Design 8",
    description: "Description 8",
    image: "tess.png",
  },
  {
    title: "Design 9",
    description: "Description 9",
    image: "chopin-1-1.png",
  },
  {
    title: "Design 10",
    description: "Description 10",
    image: "bipc.png",
  },
  {
    title: "Design 11",
    description: "Description 11",
    image: "shine.jpeg",
  },
  {
    title: "Design 12",
    description: "Description 12",
    image: "2.png",
  },
  {
    title: "Design 13",
    description: "Description 13",
    image: "4.png",
  },
  {
    title: "Design 14",
    description: "Description 14",
    image: "6.png",
  },
];

export enum ProjectCategory {
  Games = "Games",
  Utilities = "Utilities",
  SchoolProjects = "School Projects",
  NonTech = "Non-Tech",
}

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  ProjectCategory.Games,
  ProjectCategory.Utilities,
  ProjectCategory.SchoolProjects,
  ProjectCategory.NonTech,
];

export const projects = [
  {
    emoji: "🦕",
    title: "Lingosaurus",
    description: "Learn Tagalog and Korean",
    tech: ["Nextjs", "TypeScript"],
    link: "https://lingosaurus.vercel.app/",
    category: ProjectCategory.Utilities,
    image: "/lingosaurus.png",
    slug: "lingosaurus",
    longDescription:
      "Lingosaurus is an incremental and immersive language learning app that allows you to learn Tagalog and Korean.",
    why: "I made this to supplement my Korean language learning and to share Tagalog language with my friends.",
    different:
      "This app generates many sentences for each sentence structure, allowing you to learn through audio repetition. It introduces new vocabulary for each sentence structure.",
  },
  {
    emoji: "😎",
    title: "samevibes",
    description: "Game of friendly similarities",
    tech: ["Nextjs", "TypeScript"],
    link: "https://samevibes.vercel.app/",
    category: ProjectCategory.Games,
    image: "/samevibes2.png",
    slug: "samevibes",
  },
  {
    emoji: "🧶",
    title: "Amigurumi Counter",
    description: "Count crochet stitches",
    tech: ["React Native"],
    link: "https://play.google.com/store/apps/details?id=com.sciffany.AmigurumiCounter",
    category: ProjectCategory.Utilities,
    image: "/amigurumi2.png",
    slug: "amigurumi-counter",
  },
  {
    emoji: "🌿",
    title: "Sparky Nature",
    description: "Farming RPG",
    tech: ["Phaser", "React"],
    link: "https://sparkynature.vercel.app/game",
    category: ProjectCategory.Games,
    image: "/demo.png",
    slug: "sparky-nature",
  },
  {
    emoji: "🏠",
    title: "Rent Bills",
    description: "Rent management app",
    tech: ["React", "TypeScript"],
    link: "https://github.com/sciffany/rent-bills",
    category: ProjectCategory.Utilities,
    image: "/rent-bills.png",
    slug: "rent-bills",
  },
  {
    emoji: "🔍",
    title: "Static Program Analyser",
    description: "Code parser",
    tech: ["C++"],
    category: ProjectCategory.SchoolProjects,
    slug: "static-program-analyser",
  },
  {
    emoji: "🧩",
    title: "Tell Me a Story",
    description: "Puzzle hunt game",
    tech: ["Django"],
    link: "https://sciffany.pythonanywhere.com/puzzle/tell-me-a-story",
    category: ProjectCategory.Games,
    slug: "tell-me-a-story",
  },
  {
    emoji: "🎤",
    title: "Audio Stenography",
    description: "Conceal messages in audio",
    tech: ["MATLAB"],
    category: ProjectCategory.SchoolProjects,
    slug: "audio-stenography",
  },
  {
    emoji: "🎓",
    title: "PYPagao",
    description: "Crowdsourced exam answers",
    tech: ["Ruby on Rails"],
    link: "https://github.com/turbocharged-potato/pypagao-fullstack",
    category: ProjectCategory.SchoolProjects,
    slug: "pypagao",
  },
  {
    emoji: "🪐",
    title: "NeatQuiz",
    description: "Nerdy trivia bot",
    tech: ["Telegram Bot", "Typescript"],
    link: "https://t.me/neatquizbot",
    category: ProjectCategory.Games,
    slug: "neatquiz",
  },
  {
    emoji: "🧊",
    title: "IcyBreaker",
    description: "Icebreaker bot",
    tech: ["Telegram Bot", "Typescript"],
    link: "https://t.me/icybreakerbot",
    category: ProjectCategory.Games,
    slug: "icybreaker",
  },
  {
    emoji: "🔒",
    title: "Password",
    description: "Password guessing game",
    tech: ["Nextjs"],
    link: "https://pword.vercel.app/",
    category: ProjectCategory.Games,
    slug: "password",
  },
  {
    emoji: "🔤",
    title: "Passwordle",
    description: "Word guessing game",
    tech: ["Nextjs"],
    link: "https://pword.vercel.app/2",
    category: ProjectCategory.Games,
    slug: "passwordle",
  },
  {
    emoji: "🔤",
    title: "Entropius Anagram",
    description: "Anagram word game",
    tech: ["Nextjs"],
    link: "/anagram",
    category: ProjectCategory.Games,
    slug: "entropius-anagram",
  },
  {
    emoji: "🌳",
    title: "Forest Duel",
    description: "Flashcards made fun",
    tech: ["Nextjs"],
    link: "https://forest-duel.vercel.app/",
    category: ProjectCategory.Games,
    slug: "forest-duel",
  },
  {
    emoji: "🧠",
    title: "Brain research",
    description: "EEG analysis",
    tech: ["MATLAB"],
    link: "https://github.com/sciffany/brain-research",
    category: ProjectCategory.SchoolProjects,
    slug: "brain-research",
  },
  {
    emoji: "🔔",
    title: "NotifBuddy",
    description: "AI assistant scheduler",
    tech: ["Telegram Bot", "Typescript"],
    link: "https://t.me/notifbuddybot",
    category: ProjectCategory.Utilities,
    slug: "notifbuddy",
  },
  {
    emoji: "🐶",
    title: "Powerpets Games",
    description: "Minigames for virtual pet site",
    tech: ["Phaser"],
    link: "/powerpets-games",
    category: ProjectCategory.Games,
    slug: "powerpets-games",
  },
  {
    emoji: "🎮",
    title: "Adobe Flash Games",
    description: "Adobe Flash games",
    tech: ["Flash", "ActionScript"],
    link: "/flash-games",
    category: ProjectCategory.Games,
    slug: "flash-games",
  },
  {
    emoji: "🔒",
    title: "Masterseal Corporation",
    description: "Security seals website",
    tech: ["Nextjs", "SEO"],
    link: "https://www.mastersealcorporation.com/",
    category: ProjectCategory.NonTech,
    image: "/masterseal.png",
    slug: "masterseal-corporation",
  },
  {
    emoji: "🎤",
    title: "Compositions",
    description: "Music compositions",
    link: "https://musescore.com/user/18234171",
    category: ProjectCategory.NonTech,
    slug: "compositions",
  },
  {
    emoji: "👾",
    title: "Gevardonn",
    description: "Orignal character creations",
    category: ProjectCategory.NonTech,
    slug: "gevardonn",
  },
  {
    emoji: "🎮",
    title: "Powerpoint Games",
    description: "Powerpoint games",
    link: "/powerpoint-games",
    category: ProjectCategory.Games,
    slug: "powerpoint-games",
  },
  {
    emoji: "🎨",
    title: "Redbubble",
    description: "Nerdy t-shirt designs",
    link: "https://www.redbubble.com/people/sciffany/shop",
    category: ProjectCategory.NonTech,
    slug: "redbubble",
  },
  {
    emoji: "🧶",
    title: "Tiff Crochets",
    description: "Crochet artworks",
    link: "https://take.app/tiffcrochets/search",
    category: ProjectCategory.NonTech,
    slug: "tiff-crochets",
  },
  {
    emoji: "💣",
    title: "Minesweeper",
    description: "Minesweeper game",
    link: "https://github.com/sciffany/minesweeper",
    category: ProjectCategory.Games,
    slug: "minesweeper",
  },
];
