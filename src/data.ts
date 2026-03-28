import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Thomas Male",
  role: "Lead XR Developer",
  introduction: "Virtual Reality (VR) enthusiast and a driven Game Programmer. I have experience designing and developing applications using a variety of programming languages, including C++, C#, and OpenGL. ",
  description: "Hi, I'm Thomas, a passionate Game Programmer with a strong background in Virtual Reality (VR) development. I have experience designing and developing applications using a variety of programming languages, including C++, C#, and OpenGL. I am always eager to learn new technologies and techniques to create immersive and engaging gaming experiences. With 8 current years of experience in C# programming and development, I have created and worked on a number of projects, including VR Tutorials, Mobile AR Apps, R&D projects around new technologies and more. Right now im looking to join a company and team of passionate developers to create fun and engaging games and experiences.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/Tommytron55",
    itchIO: "https://tommytron55.itch.io/",
    linkedIn: "https://www.linkedin.com/in/thomas-male-7720821ba/",
  }
};

export const games: Game[] = [
  {
    name: "ByteEd",
    description: "Augmented Reality (AR) app that brings to life the physical STEM kit, also developed by ByteEd. This uses the mobile device's camera and Unity's XR system to track AR Anchors and place digital objects into a physical space. \n \n Created to facilitate and aid young learners in understanding the fundamentals of digital technologies and literacy. This app uses many different systems, such as: Online Database and authentication, AR Tracking and model technology, Account / Licence-based access, and in-app coding and simulation.",
    genres: ["Education", "Augmented Reality", "Mobile App", "STEM"],
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [],
    media: [
      { source: "/images/games/ByteEd/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/0fESgTywXXs?si=LyKVqp2fQiNLatkg", type: MediaType.YouTube },
      { source: "/images/games/ByteEd/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/ByteEd/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/ByteEd/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/ByteEd/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/ByteEd/Screenshot_6.png", type: MediaType.Image },
      { source: "/images/games/ByteEd/Screenshot_7.png", type: MediaType.Image },
      { source: "/images/games/ByteEd/Screenshot_8.png", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];