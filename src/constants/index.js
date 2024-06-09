import project1 from "../assets/summer.jpg";
import project2 from "../assets/toy.jpg";
import project3 from "../assets/cafa.jpg";


export const HERO_CONTENT = `I am a passionate MERN stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile MERN stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior MERN Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "MERN Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Summer Camp Learning School",
    live: "https://summer-school-5cdc6.web.app/",
    image: project1,
    description:
      "MERN web application using Firebase authentication system.Dashboard for Instructor(Instructor able to add & delete his class),Student(able to select class and can do payment through stripe) and  Admin(control Instructor & student) Dashboard will be hidden when user login then onlydashboard will be visible ",
    technologies: ["HTML", "Tailwind CSS", "React",  "MongoDB","ExpressJS","Node.js","Dotenv","JavaScript(ES6)"],
  },
  {
    title: "Toy-market",
    live: "https://toy-market-client-ab5e0.web.app/category/1",
    image: project2,
    description:
      "MERN web application using Firebase authentication system(Login & Registration). Authenticate user can add toy with details. For security JWT & Private routing utilized",
    technologies: ["HTML", "Tailwind CSS", "React",  "MongoDB","ExpressJS","Node.js","Dotenv","JavaScript(ES6)"],
  },
  {
    title: "Cafe chef's web application",
    live: "https://cafe-chefs.web.app/",
    image: project3,
    description:
      "Interactive design (build from sketched) having Firebase Authentication (3 different sign-up options). Chef's and category-wise food showing and dynamic showing chef's and food info. Private routing enabled for getting private access",
    technologies: ["HTML", "Bootstrap", "React","ExpressJS","Node.js","Dotenv","JavaScript(ES6)"],
  },
 
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
