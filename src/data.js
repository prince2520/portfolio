import AnimeSuper from "./assests/images/projects/AnimeSuper.png";
import ChitChat from "./assests/images/projects/ChitChat.png";
import Ghostmail from "./assests/images/projects/GhostMail.png";

// My Socials 
export const mySocials = [
  {
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/prince-04273a1a2/"
  },
  {
    icon: "bi:github",
    link: "https://github.com/prince2520"
  },
  {
    icon: "mingcute:twitter-fill",
    link: "https://twitter.com/dev_prince123"
  },
  {
    icon: "material-symbols:mail",
    link: "mailto:prince2520p@gmail.com"
  },
  {
    icon: "tabler:brand-linktree",
    link: "https://linktr.ee/dev.prince"
  }
]

/* Component - Projects  */
export const myProjects = [
  {
    title: "Animesuper",
    imageUrl: AnimeSuper,
    description: `AnimeSuper: ultimate hub for anime fans, seamless platform to organize favorites, and stay updated on trends.😊        `,
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Django",
      "SQLite",
      "Figma",
      "Firebase Storage",
      "Redux ToolKit",
    ],
    links: [
      {
        title: "Website",
        link: "https://animesuper.vercel.app/",
        icon: "mdi:web",
      },
      {
        title: "Github",
        link: "https://github.com/prince2520/animesuper",
        icon: "mdi:github",
      },
      {
        title: "Youtube",
        link: "https://youtu.be/0NogpVVX1H4",
        icon: "mdi:youtube",
      },
      {
        title: "Figma",
        link: "https://www.figma.com/file/HVnROhqnB55YlNtuJKuyDy/Anime-Project?type=design&node-id=3%3A75&mode=design&t=QVytotlyazcxi008-1",
        icon: "solar:figma-bold-duotone",
      }
    ],
    reverse: false,
  },
  {
    title: "ChitChat",
    imageUrl: ChitChat,
    description: `ChitChat: Your vibrant hub for forging connections, fostering friendships, and seamlessly exchanging media through video calls and messages.
        `,
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Simple Peer",
      "Firebase Storage",
      "Redux ToolKit",
      "Socket.IO",
      "Express",
      "Figma"
    ],
    links: [
      {
        title: "Website",
        link: "https://chiitchat.vercel.app/auth/login",
        icon: "mdi:web",
      },
      {
        title: "Github",
        link: "https://github.com/prince2520/chitchat",
        icon: "mdi:github",
      },
      {
        title: "Youtube",
        link: "https://www.youtube.com/watch?v=Dq76QVwMyxc",
        icon: "mdi:youtube",
      },
      {
        title: "Figma",
        link: "https://www.figma.com/file/bd0paKNg49My3fX5vHR9r4/ChitChat?type=design&node-id=0%3A1&mode=design&t=33lYqE1rsVVEVnTk-1",
        icon: "solar:figma-bold-duotone",
      },
    ],
    reverse: true,
  },
  {
    title: "Ghostmail",
    imageUrl: Ghostmail,
    description: `Ghostmail: Say goodbye to spam, ads, and hackers. Ghostmail offers a free, secure, and anonymous disposable email address to keep your inbox clean and safe. `,
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "TypeScript",
      "React",
      "Redux",
      "Redux ToolKit",
      
      "Node.js",
      "Express",
      "Socket.IO",

      "MySQL",
      "SMTP",
      "Supabase",
      "Google Authentication",
      "Shadcn",
      
      "Figma"
    ],
    links: [
      {
        title: "Website",
        link: "https://ghostmail-1.onrender.com",
        icon: "mdi:web",
      },
      {
        title: "Github",
        link: "https://github.com/prince2520/ghostmail",
        icon: "mdi:github",
      },
      {
        title: "Youtube",
        link: "https://www.youtube.com/watch?v=rkjIEatycIw",
        icon: "mdi:youtube",
      },
      {
        title: "Figma",
        link: "https://www.figma.com/design/EkxXdxsvDlXKSoGhVVzZiW/Ghostmail?node-id=5-3&t=yNlgJxOTxcbEpg49-1",
        icon: "solar:figma-bold-duotone",
      },
    ],
    reverse: false,
  }
];

/* Component - Education  */
export const educations = [
  {
    institute: "GB Pant Govt. Engineering College",
    designation: "Bachelor of Technology",
    marks: "8.64 CGPA",
  },
  {
    institute: "Sarvodaya CoEd S S S F/U Blk Pitampura",
    designation: "12th , Science",
    marks: "79.00 %",
  },
  {
    institute: "Mata SukhDevi Public School Nangli Poona",
    designation: "10th",
    marks: "9.20 CGPA",
  },
];

/* Component - CodingProfiles  */
export const codingProfiles = [
  {
    title: "CodeChef",
    icon: "simple-icons:codechef",
    link: "",
  },
  {
    title: "CodeForces",
    icon: "simple-icons:codeforces",
    link: "",
  },
  {
    title: "LeetCode",
    icon: "simple-icons:leetcode",
    link: "",
  },
  {
    title: "GeeksForGeeks",
    icon: "simple-icons:geeksforgeeks",
    link: "",
  },
];

/* Component - MySkills  */
export const mySkills = [
  {
    name: "C++",
    logo: "logos:c-plusplus",
  },
  {
    name: "HTML",
    logo: "logos:html-5",
  },
  {
    name: "CSS",
    logo: "vscode-icons:file-type-css",
  },
  {
    name: "JavaScript",
    logo: "logos:javascript",
  },
  {
    name: "TypeScript",
    logo: "devicon:typescript",
  },
  {
    name: "React",
    logo: "skill-icons:react-dark",
  },
  {
    name: "Node.js",
    logo: "vscode-icons:file-type-node",
  },
  {
    name: "MongoDB",
    logo: "devicon:mongodb-wordmark",
  },
  {
    name: "Figma",
    logo: "logos:figma",
  },
];
