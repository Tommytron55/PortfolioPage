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
    description: "Augmented Reality (AR) app that brings to life the PlayCodeLearn physical STEM kit, also developed by ByteEd. This uses the mobile device's camera and Unity's XR system to track AR Anchors and place digital objects into a physical space. \n \n Created to facilitate and aid young learners in understanding the fundamentals of digital technologies and literacy. This app uses many different systems, such as: Online Databases and authentication, AR Tracking technology, Account / Licence-based access, and in-app coding and simulation.",
    genres: ["Education", "Augmented Reality", "Mobile App", "STEM"],
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [],
    media: [
      { source: "/images/games/ByteEd/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/LGDjeMn48Yk?si=mgn_Nr6cyfATkig8", type: MediaType.YouTube },
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
    name: "WriteWhizz",
    description: "Artificial Intelligence (AI) powered app that brings a personal learning assistant and learning activities to each student. WriteWhizz focuses on teaching students how to write the English alphabet. Includes a custom-made grading algorithm to calculate an accuracy score for the written letter, while also being able to detect common mistakes. Connects to an AI-powered pipeline that provides custom and unique verbal feedback to students in the role of a personal assistant, based on the exact letter formation provided by the student.  Included with the App is a website portal that allows teachers to login with their credentials and fetch details about their students. They can view their students progress, assign activities, manage their students credentials, and download custom QR Codes that allow students to quickly log in to their account using an authentication pipeline from the App.",
    genres: ["AR", "Education", "Mobile App", "STEM", "Language Learning"],
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [],
    media: [
      { source: "/images/games/WriteWhizz/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/TWS6a4DuPrs?si=phMl9LKOoU9kev9x", type: MediaType.YouTube },
      { source: "/images/games/WriteWhizz/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/WriteWhizz/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/WriteWhizz/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/WriteWhizz/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/WriteWhizz/Screenshot_6.png", type: MediaType.Image },  
      { source: "/images/games/WriteWhizz/Screenshot_7.png", type: MediaType.Image }  
    ],
  },
  {
    name: "Smith & Squire",
    description: "Smith & Squire is an asymmetric local cooperative virtual reality game where one player creates various weapons in virtual reality while their friend assists them by buying materials and selling the weapons they make on the same PC.",
    genres: ["Virtual Reality", "Cooperative", "Asymmetric"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://floor-27.itch.io/smith-squire-demo" }
    ],
    media: [
      { source: "/images/games/Smith&Squire/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/xlhvmQ6J-Dk?si=X9oAXeB7k8qB6SzU", type: MediaType.YouTube },
      { source: "/images/games/Smith&Squire/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Smith&Squire/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Smith&Squire/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Smith&Squire/Screenshot_5.png", type: MediaType.Image }
    ],
  },
  {
    name: "AlphaBee",
    description: "Augmented Reality (AR) app that brings to life the physical STEM kit, also developed by ByteEd. Created to facilitate and aid young learners in understanding, speaking, and writing in the English language. Aimed at students learning to read and write at schools. ncluded in the App is a number of exercises relating to “Say it”, “Write it”, and “Story it”. As they progress through the App, the activities get harder and more challenging as they progress through each of the phonemes and graphemes of the English language, following the NCEA format.",
    genres: ["AR", "Education", "Mobile App", "STEM", "Language Learning"],
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [],
    media: [
      { source: "/images/games/AlphaBee/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/AlphaBee/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/AlphaBee/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/AlphaBee/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/AlphaBee/Screenshot_5.png", type: MediaType.Image }
    ],
  }
];