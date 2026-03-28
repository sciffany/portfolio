export const description = `
- I love making [apps](/projects), [artworks](/designs) and people smile
- Pescatarian, [cruciverbalist](https://crosshare.org/crosswords/vfN5qIXXAUb6rluYdGPH/break-a-leg) and [ornithophile](https://www.youtube.com/shorts/u-1EousPvG8)
- Excited to work on [impactful projects](#key-projects-heading) and go the extra mile
- Get in touch at [hello@sciffany.com](mailto:hello@sciffany.com)
`;

export enum ExperienceCategory {
  Software_Engineer = "Software Engineer",
  Data_Engineer = "Data Engineer",
  Teaching_Assistant = "Teaching Assistant",
}

export const experiences = [
  {
    title: "Take App",
    role: "Software Engineer",
    date: "May 2023 - Present",
    link: "https://take.app/",
    description: [
      "Built core e-commerce features end-to-end",
      "Integrated multiple payment methods",
      "Implemented delivery and scheduling features",
      "Optimized data transfer across services",
    ],
    tech: ["Next.js", "TypeScript"],
    category: ExperienceCategory.Software_Engineer,
  },
  {
    title: "Apple",
    role: "Web Engineer, Reliability Engineering Team",
    date: "July 2020 - August 2020",
    description: [
      "Built backend and frontend for web tools used by Apple's reliability engineering team",
    ],
    tech: ["Ember.js", "Ruby on Rails", "PostgreSQL"],
    link: "https://www.apple.com/",
    category: ExperienceCategory.Software_Engineer,
  },
  {
    title: "Runners Planet",
    role: "Software Engineer Intern",
    date: "May 2021 - August 2021",
    description: [
      "Built social and map features for a sports social network in React Native",
      "Integrated GraphQL, Mapbox, and Getstream",
    ],
    tech: ["React Native", "GraphQL", "Mapbox", "Getstream"],
    category: ExperienceCategory.Software_Engineer,
  },
  {
    title: "National University of Singapore",
    role: "Student Researcher",
    date: "May 2020 - July 2020",
    description: [
      "Co-architected a visual novel game engine for teaching introductory programming",
      "Shipped the platform for CS1101S for a cohort of 700+ students",
    ],
    tech: ["Phaser", "React"],
    category: ExperienceCategory.Software_Engineer,
  },
  {
    title: "StaffAny Pte Ltd",
    role: "Fullstack Software Engineer",
    date: "November 2019 - January 2020",
    description: [
      "Delivered Web Timeclock (Node.js, React, TypeScript) from prototype through testing to production",
      "Scaled adoption to thousands of customers nationwide",
      "Acted as software lead across design collaboration, technical constraints, architecture, and deployment",
    ],
    tech: ["Node.js", "React", "TypeScript"],
    category: ExperienceCategory.Software_Engineer,
  },
  {
    title: "StaffAny Pte Ltd",
    role: "Data Engineering Consultant",
    date: "May 2019 - October 2019",
    description: [
      "Architected GCP BigQuery warehouse and data marts for millions of rows",
      "Automated scheduled pipelines from AWS, Segment, Firebase, Sheets, and Postgres (Python Spark, Node.js)",
      "Built SQL dashboards used daily across departments",
      "Implemented Segment.js instrumentation for product analytics",
    ],
    tech: [
      "GCP",
      "BigQuery",
      "SQL",
      "Python",
      "Spark",
      "Node.js",
      "Segment.js",
    ],
    category: ExperienceCategory.Data_Engineer,
  },
  {
    title: "Transcelestial Technologies",
    role: "Computer Vision Intern",
    date: "May 2018 - August 2018",
    description: [
      "Built a low-latency C++ camera API via registers, firmware, and hardware graphics abstraction",
      "Raised camera frame rate from under 100 fps to 2000 fps",
      "Supported point-and-track laser systems for ground-to-satellite communications",
    ],
    tech: ["C++", "Camera API", "Firmware", "Hardware Graphics"],
    category: ExperienceCategory.Software_Engineer,
  },
  {
    title: "Sanfo Intl Trading Inc",
    role: "Computer Programmer",
    date: "August 2017 - February 2019",
    description: [
      "Automated inventory and payroll workflows with Google Apps Script and FileMaker",
      "Reduced operating workload by 16 hours per week",
    ],
    tech: ["Google Apps Script", "FileMaker", "Relational database"],
    category: ExperienceCategory.Software_Engineer,
  },
  {
    title: "Agency for Science and Technology Research",
    role: "Student Researcher",
    date: "June 2015 - February 2016",
    description: [
      "Analyzed EEG activity during affective picture viewing with MATLAB signal processing",
      "Computed frequency and power trends (e.g. FFT) and trained models to classify images",
    ],
    tech: ["MATLAB", "EEG", "Signal processing", "Statistics"],
    category: ExperienceCategory.Software_Engineer,
  },
  {
    title: "National University of Singapore",
    role: "Teaching Assistant",
    date: "August 2018 - December 2018",
    description: [
      "Ran tutorials and class discussions on SICP functional programming",
      "Produced teaching materials on higher-order functions, meta-circular evaluators, and streams",
      "Received the Best Tutor Award",
    ],
    tech: ["SICP", "Functional programming"],
    category: ExperienceCategory.Teaching_Assistant,
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

export enum KeyProjectId {
  TakeApp = "take-app",
  StaffAnyWebTimeclock = "staffany-web-timeclock",
  RentBills = "rent-bills",
  NeatQuiz = "neatquiz",
}

export const keyProjects = [
  {
    id: KeyProjectId.TakeApp,
    title: "Take App",
    subtitle: "Software Engineer",
    href: "https://take.app/",
    emoji: "🛍️",
  },
  {
    id: KeyProjectId.StaffAnyWebTimeclock,
    title: "StaffAny",
    subtitle: "Web Timeclock",
    href: "https://www.staffany.com/",
    emoji: "⏰",
  },
  {
    id: KeyProjectId.RentBills,
    title: "Rent Bills",
    subtitle: "Rent management app",
    href: "https://github.com/sciffany/rent-bills",
    emoji: "🏠",
    image: "/rent-bills.png",
  },
  {
    id: KeyProjectId.NeatQuiz,
    title: "NeatQuiz",
    subtitle: "Nerdy trivia bot",
    href: "https://t.me/neatquizbot",
    emoji: "🪐",
    image: "/game-images/neatquiz.png",
  },
] as const;

export enum ProjectCategory {
  Utilities = "Utilities",
  SchoolProjects = "School Projects",
  NonTech = "Non-Tech",
}

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
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
    emoji: "🧶",
    title: "Amigurumi Counter",
    description: "Count crochet stitches",
    tech: ["React Native"],
    link: "https://play.google.com/store/apps/details?id=com.sciffany.AmigurumiCounter",
    category: ProjectCategory.Utilities,
    image: "/amigurumi2.png",
    slug: "amigurumi-counter",
    longDescription:
      "This app helps you count the number of stitches in your crochet projects.",
    why: "I made this to help myself with the difficult chore of counting my amigurumi stitches of course!",
    different:
      "This actually takes into account the different types of stitches (single, double, half) and notes down stitches per row.",
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
    longDescription: "This app helps you manage rent collections.",
    why: "I made this to help my dad manage his rental properties.",
    different:
      "This app uses two-column view to show rent dues and payments, so tenants can pay in whatever schedule, frequency and amount they can.",
  },
  {
    emoji: "🔍",
    title: "Static Program Analyser",
    description: "Code parser",
    tech: ["C++"],
    category: ProjectCategory.SchoolProjects,
    slug: "static-program-analyser",
    image: "/spa.png",
    longDescription:
      "This program parses a made-up coding language, and tells you which line affects which variables",
    why: "It was a school project. Moreover, it was a great way to learn about syntax trees.",
    different:
      "It contains program knowledge base, which is indexed by variables and variable relationships.",
  },
  {
    emoji: "🎤",
    title: "Audio Steganography",
    description: "Conceal messages in audio",
    tech: ["MATLAB"],
    category: ProjectCategory.SchoolProjects,
    slug: "audio-steganography",
    image: "/steganography.png",
    longDescription:
      "This program conceals messages in audio files, and extracts them later.",
    why: "It was a school project. Moreover, it's a fun project to play with audio files.",
    different:
      "It uses binary encoding, and even Fourier transform concepts to hide messages in audio files.",
  },
  {
    emoji: "🎓",
    title: "PYPagao",
    description: "Crowdsourced exam answers",
    tech: ["Ruby on Rails"],
    link: "https://github.com/turbocharged-potato/pypagao-fullstack",
    category: ProjectCategory.SchoolProjects,
    slug: "pypagao",
    image: "/pyp.png",
    longDescription: "This program allows students to crowdsource exam answers",
    why: "It was a school project. Moreover, exam answers are often not given out by schools.",
    different:
      "We classify papers based on semester and school, and have a voting system to determine the correct answers.",
  },

  {
    emoji: "🧠",
    title: "Brain research",
    description: "EEG analysis",
    tech: ["MATLAB"],
    link: "https://github.com/sciffany/brain-research",
    category: ProjectCategory.SchoolProjects,
    slug: "brain-research",
    image: "/eeg.png",
    longDescription:
      "This program analyzes EEG data to study brain activity during affective picture viewing.",
    why: "It was a school project. Moreover, brain research!",
    different:
      "We found out whether or not EEG is a good predictor of affective picture viewing.",
  },
  {
    emoji: "🔔",
    title: "NotifBuddy",
    description: "AI assistant scheduler",
    tech: ["Telegram Bot", "Typescript"],
    link: "https://t.me/notifbuddybot",
    category: ProjectCategory.Utilities,
    slug: "notifbuddy",
    image: "/notifbuddy.png?v=2",
    longDescription:
      "This program allows you to set up reminders and notifications for your tasks.",
    why: "I made this to help myself and my friends with remembering small tasks.",
    different:
      "It is AI-powered, so you can create reminders using natural language.",
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
    longDescription: "This website allows you to browse security seals online.",
    why: "I made this to help my parents' business.",
    different: "It is made completely from scratch, and is SEO-optimized.",
  },
  {
    emoji: "🎤",
    title: "Compositions",
    description: "Music compositions",
    link: "https://musescore.com/user/18234171",
    category: ProjectCategory.NonTech,
    slug: "compositions",
    image: "/music.png",
    longDescription: "This website allows you to browse my music compositions.",
    why: "I wanted to learn more about music theory, so I searched for lessons online.",
    different: "Made by a beginner who knows nothing about music theory.",
    tech: ["Non-tech"],
  },
  {
    emoji: "👾",
    title: "Gevardonn",
    description: "Orignal character creations",
    category: ProjectCategory.NonTech,
    slug: "gevardonn",
    image: "/gevardonn.png",
    longDescription:
      "This website allows you to browse my original character creations.",
    why: "I made this to compile all my character designs in one place.",
    different:
      "It's a world where characters were made by doodling at random times.",
    tech: ["Non-tech"],
  },
  {
    emoji: "🎨",
    title: "Redbubble",
    description: "Nerdy t-shirt designs",
    link: "https://www.redbubble.com/people/sciffany/shop",
    category: ProjectCategory.NonTech,
    slug: "redbubble",
    image: "/research.jpg",
    longDescription:
      "This website allows you to browse my nerdy t-shirt designs.",
    why: "I made this with my sister, Jinger (https://jingerchong.com/), to share our nerdy designs .",
    different: "It's math and science-themed, and not the usual jokes.",
    tech: ["Non-tech"],
  },
  {
    emoji: "🧶",
    title: "Tiff Crochets",
    description: "Crochet artworks",
    link: "https://take.app/tiffcrochets/search",
    category: ProjectCategory.NonTech,
    slug: "tiff-crochets",
    image: "/tiffcrochets.jpg",
    longDescription: "This website allows you to browse my crochet artworks.",
    why: "I made this because I love crocheting.",
    different: "Not very different, just a lot of crochet artworks.",
    tech: ["Non-tech"],
  },
];

export enum GameCategory {
  SocialGames = "Social Games",
  Puzzle = "Puzzle",
  RPG = "RPG",
  Powerpet = "Powerpet",
  Flash = "Flash",
  Powerpoint = "Powerpoint",
}

export const games = [
  {
    emoji: "😎",
    title: "samevibes",
    description: "Game of friendly similarities",
    tech: ["Nextjs", "TypeScript"],
    link: "https://samevibes.vercel.app/",
    gh: "https://github.com/sciffany/samevibes",
    category: GameCategory.SocialGames,
    image: "/samevibes2.png",
    slug: "samevibes",
    longDescription: "samevibes is a game of friendly similarities.",
    why: "I made this because I realized that there could be so many permutations of ways to divide my family and friend group based on certain similarities.",
    different:
      "It requires players to think out-of-the-box to find similar traits amongst particular family and friends.",
  },
  {
    emoji: "🌿",
    title: "Sparky Nature",
    description: "Farming RPG",
    tech: ["Phaser", "React"],
    link: "https://sparkynature.vercel.app/game",
    category: GameCategory.RPG,
    image: "/demo.png",
    slug: "sparky-nature",
    longDescription:
      "Sparky Nature is a farming RPG where you grow crops and animals to earn money.",
    why: "I made this because I've always loved playing farming games as well as city builders. I wanted to see if I can design classes and systems for complex games.",
    different:
      "It's not just farming, it also involves building relationships with the townsfolk.",
  },

  {
    emoji: "🪐",
    title: "NeatQuiz",
    description: "Nerdy trivia bot",
    tech: ["Telegram Bot", "Typescript"],
    link: "https://t.me/neatquizbot",
    gh: "https://github.com/sciffany/neatquiz",
    category: GameCategory.Puzzle,
    slug: "neatquiz",
    image: "/game-images/neatquiz.png",
    longDescription:
      "NeatQuiz is a nerdy puzzle bot that tests your ability across different domains.",
    why: "I'm inspired by Telgram's popular Quizarium bot, but wanted it to be more of a puzzle rather than trivia.",
    different: "It's not just trivia, it also involves puzzle-solving.",
    graphics: "joezhuang @ vecteezy",
  },
  {
    emoji: "🧊",
    title: "IcyBreaker",
    description: "Icebreaker bot",
    tech: ["Telegram Bot", "Typescript"],
    link: "https://t.me/icybreakerbot",
    gh: "https://github.com/sciffany/icybreakerbot",
    category: GameCategory.SocialGames,
    slug: "icybreaker",
    image: "/game-images/icy.png",
    longDescription:
      "IcyBreaker is a icebreaker bot that helps you break the ice with your friends.",
    why: "I wanted to get to know my friends, colleagues, band mates, and acquaintances better..",
    different:
      "It asks questions randomly directed at one of the participants in the game, and people get to guess their answers instead of just hearing the answer.",
  },
  {
    emoji: "🔒",
    title: "Password",
    description: "Password guessing game",
    tech: ["Nextjs"],
    link: "https://pword.vercel.app/",
    category: GameCategory.SocialGames,
    slug: "password",
    image: "/game-images/password.png",
    longDescription:
      "Password is a clue-guessing word game where players guess the password based on single word clues provided by their team mate.",
    why: "It's a fun game that I often play with my family during gatherings, and I thought to share it with others.",
    different: "It challenges players to limit their clue-giving to one word",
    challenge: "Implementing API for socket communication",
  },
  {
    emoji: "🔤",
    title: "Passwordle",
    description: "Word guessing game",
    tech: ["Nextjs"],
    link: "https://pword.vercel.app/2",
    category: GameCategory.SocialGames,
    slug: "passwordle",
    image: "/game-images/passwordle.png",
    longDescription:
      "Passwordle is another word-guessing game where players guess subwords inside a long word, as clued by AI",
    why: "This is another game inspired by my family gatherings where we shuffle a long word into shorter sub words.",
    different:
      "It involves both anagramming skills as well as crossword-like skills.",
  },
  {
    emoji: "🔤",
    title: "Entropius Anagram",
    description: "Anagram word game",
    tech: ["Nextjs"],
    link: "/anagram",
    category: GameCategory.Puzzle,
    slug: "entropius-anagram",
    image: "/game-images/anagram.png",
    longDescription:
      "Entropius Anagram is an anagram word game where players unscramble letters into valid words.",
    why: "I used to love Text Twist and Miniclip's Anagram Magic, but I didn't like solving for short words. I only wanted to find the longest word possible.",
    different:
      "It has 50 words at once, and you can toggle between them by pressing 1 and 2.",
    challenge:
      "Webscraping dataset, words chosen based on word frequency in English Language",
    graphics: "HTML 5",
  },
  {
    emoji: "🌳",
    title: "Forest Duel",
    description: "Flashcards made fun",
    tech: ["Nextjs"],
    link: "https://forest-duel.vercel.app/quiz/multiplication",
    category: GameCategory.Puzzle,
    slug: "forest-duel",
    image: "/game-images/forest-duel.png",
    longDescription:
      "Forest Duel is a gamified flashcard where players fight the other animals by answering questions eg multiplication tables.",
    why: "I wanted my nephew to learn multiplication tables in a fun way.",
    different:
      "It gamifies the tedious task of learning multiplication tables.",
  },
  {
    emoji: "🐶",
    title: "Mini Match",
    description: "Match game",
    tech: ["Phaser"],
    link: "/mini-match",
    category: GameCategory.Powerpet,
    slug: "mini-match",
    image: "/game-images/minimatch-image.png",
    longDescription:
      "Mini Match is a match game where players match tiles of the same type by swapping them.",
    why: "Powerpets needed a graphic remake of their most popular game.",
    different:
      "It rewards players score-wise as well as visually and audibly when they match tiles.",
    algo: "Recursive depth-first search to look for connected bubbles",
    challenge:
      "Consecutively popping groups of similar tiles as random tiles are filled downwards",
    graphics: "powerpets.com",
  },
  {
    emoji: "🧱",
    title: "Bubbas' Blocks",
    description: "Block removing game",
    tech: ["Phaser"],
    link: "/bubbas-blocks",
    category: GameCategory.Powerpet,
    slug: "bubbas-blocks",
    image: "/game-images/bubbas-image.png",
    longDescription:
      "Bubbas' Blocks is a block removing game where players remove blocks of the same type",
    why: "Powerpets wanted to make their mahjong solitaire game more engaging and customizable.",
    different:
      "I gave access to the powerpets team to customize the shape formed by the blocks, so they can create new levels and challenges.",
    algo: "Linked list to relate tiles with all neighbouring tiles to update count of free tiles in O(1) time",
    challenge: "Rendering 3D configuration of half-tiles",
    graphics: "powerpets.com",
  },
  {
    emoji: "🎈",
    title: "Mini Bubbles",
    description: "Bubble popping game",
    tech: ["Phaser"],
    link: "/mini-bubbles",
    category: GameCategory.Powerpet,
    slug: "mini-bubbles",
    image: "/game-images/minibubbles-image.png",
    longDescription:
      "Mini Bubbles is a bubble popping game where players pop bubbles of the same color",
    why: "This was one of the more addictive games on Powerpets",
    different:
      "It is your usual matching game but with characters popping out of the bubbles.",
    algo: "Recursive depth-first search to look for connected bubbles",
    challenge:
      "Optimising the calculation of new bubble matrix when group of bubbles are removed",
    graphics: "powerpets.com",
  },
  {
    emoji: "🎲",
    title: "Dicey Mice",
    description: "Dice game",
    tech: ["Phaser"],
    link: "/dicey-mice",
    category: GameCategory.Powerpet,
    slug: "dicey-mice",
    image: "/game-images/dicey-image.png",
    longDescription:
      "Dicey Mice is a dice game where players roll dice and choose the best combination of dice to score points.",
    why: "This is my favorite luck-based and strategy-based game on Powerpets",
    different:
      "It requires strategy to know which dice to store, and which combination to hit to get the highest score.",
    algo: "Hash tables to store repeated score generated",
    challenge:
      "Learning Phaser with little documentation, finding out how to embed HTML inside, create animations from spritesheets",
    graphics: "Adobe Photoshop (flat graphics), powerpets.com (mouse and dice)",
  },
  {
    emoji: "💣",
    title: "Minesweeper",
    description: "Minesweeper game",
    link: "https://github.com/sciffany/minesweeper",
    category: GameCategory.Puzzle,
    slug: "minesweeper",
    image: "/game-images/mines.png",
    longDescription:
      "Minesweeper is a classic minesweeper game where players clear the board by clicking on tiles, avoiding mines.",
    why: "I made this because I wanted to learn more about algorithms and data structures such as BFS. I also wanted to apply a tutorial I saw on C++ SFML.",
    different:
      "I made my own customized minesweeper that can have different skins.",
    creds: "Coding Made Easy",
    credsLink: "https://www.youtube.com/channel/UCas000yWtwjvFzD2zB9Nzmw",
    algo: "Breadth-first search to look for blank tiles",
    challenge:
      "Figuring out the most optimal algorithm before learning Computer Science formally",
    graphics: "MS Paint",
    gh: "https://github.com/sciffany/Minesweeper",
  },
  {
    emoji: "🐘",
    title: "Foof Game",
    description: "Adventure game",
    tech: ["Flash", "ActionScript"],
    link: "/foof",
    category: GameCategory.Flash,
    slug: "foof",
    image: "/game-images/foof.png",
    creds: "kirupa",
    longDescription:
      "Foof Game is an adventure game where players explore the world and collect items.",
    why: "I made this because I wanted to learn more about Flash and ActionScript.",
    different:
      "The main character in the game was doodled in paint by my youngest sister, unknowingly turned into a character in the game.",
    challenge:
      "Camera panning to follow the character depending on where he is on map (near edge or still at center)",
    graphics: "Adobe Photoshop, MS Paint",
  },
  {
    emoji: "🗺️",
    title: "Map Designer",
    description: "Map editor",
    tech: ["Flash", "ActionScript"],
    link: "/map-designer",
    category: GameCategory.Flash,
    slug: "map-designer",
    image: "/game-images/map-design.png",
    longDescription:
      "Map Designer is a map editor where players can design their own maps for the Foof Game.",
    why: "I made this because I wanted my Foof game to be highly customizable.",
    different:
      "It's more of a tool to help game makers create their own maps for the Foof Game.",
    graphics: "Adobe Photoshop, MS Paint",
  },
  {
    emoji: "🏰",
    title: "Tower Defense",
    description: "Tower defense game",
    tech: ["Flash", "ActionScript"],
    link: "/tower-defense",
    category: GameCategory.Flash,
    slug: "tower-defense",
    image: "/game-images/tower-image.png",
    creds: "as3gametuts",
    longDescription:
      "Tower Defense is a tower defense game where players defend their base from enemies.",
    why: "I made this as a gift for my brother on his birthday.",
    different:
      "It combines characters and powers from his two favorite worlds - Pokemon and Kingdom Hearts",
    challenge:
      "Mathematical calculations (pythagorean theorem) to determine if new enemy had entered the zone of a character",
    graphics: "Adobe Flash, MS Paint",
  },
  {
    emoji: "🎄",
    title: "Christmas Game",
    description: "Christmas game",
    link: "/christmas",
    category: GameCategory.Powerpoint,
    slug: "christmas",
    image: "/game-images/christmas.png",
    longDescription:
      "Christmas Game is a mouse-action game where players navigate a maze and avoid obstacles.",
    why: "I made this as a gift for my classmates on Christmas.",
    different:
      "It's made entirely in MS Powerpoint, and uses animations and hyperlinks to create the game.",
    algo: "Create reuseable elements",
    challenge: "Gauging user progress as there are no variables in MS PPT",
    graphics: "MS Powerpoint Custom Animations",
    gh: "/downloads/christmas.ppt",
    created: "December 2010",
  },
  {
    emoji: "🐣",
    title: "Happy Egg Maze",
    description: "Maze game",
    link: "/happy-egg-maze",
    category: GameCategory.Powerpoint,
    slug: "happy-egg-maze",
    image: "/game-images/blueprint.png",
    longDescription:
      "Happy Egg Maze is a maze game where players navigate a maze to find the eggs.",
    why: "I wanted to see if MsPowerpoint could be used to to complex 3D FPS maze",
    different:
      "I planned out all the transitions using a blueprint, and hard coded everything in MS Powerpoint.",
    algo: "Hard code everything!",
    challenge: "I had to place every tile in the map in a separate slide",
    graphics: "MS Paint",
  },
];
