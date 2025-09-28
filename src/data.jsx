import { nanoid } from "nanoid";
import { FaAngular, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-sky-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-sky-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Angular",
    icon: <FaAngular className="h-16 w-16 text-sky-500" />,
    text: "Hands-on professional experience in Angular, developing efficient and interactive front-end applications with a strong emphasis on module-based architecture.",
  },
  {
    id: nanoid(),
    title: "Typescript",
    icon: <BiLogoTypescript className="h-16 w-16 text-sky-500" />,
    text: "Expertise in TypeScript, developing robust and scalable web applications with a strong emphasis on type safety, maintainability, and efficient code structure.",
  },
  {
    id: nanoid(),
    title: "Nodejs",
    icon: <FaNodeJs className="h-16 w-16 text-sky-500" />,
    text: "Proficient in Node.js, creating server-side applications and APIs with a focus on handling data, managing requests, and connecting with databases.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://ik.imagekit.io/mzdgoubts/jobman-1.png?updatedAt=1759041896820",
    url: "https://jobman-react.netlify.app/landing",
    github: "https://github.com/Vishu-hp/jobman-react-ui",
    title: "Jobman",
    text: "Developed a full-stack job management application with secure authentication, CRUD operations, and advanced filtering. Implemented state management with Redux Toolkit, interactive data visualizations with Recharts, and optimized performance using MongoDB aggregation and server-side pagination",
  },
  {
    id: nanoid(),
    img: "https://ik.imagekit.io/mzdgoubts/my-store-1.png?updatedAt=1759042131642",
    url: "https://my-store-react-daisy.netlify.app/",
    github: "https://github.com/Vishu-hp/my-store-react",
    title: "My Store",
    text: "Built a responsive frontend application with a strong focus on user experience, seamless API integration, and interactive design. Implemented state management with Redux Toolkit, multi-theme support with DaisyUI, and advanced pagination for efficient handling of large datasets.",
  },
];
