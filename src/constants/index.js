import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m Manavi Sharma, currently a graduate student in the MS Computer Science program at the University of Kansas. My journey into the world of technology began early, driven by a deep fascination with how software powers modern innovations and a passion for solving complex problems through programming.`;

export const ABOUT_TEXT = `Welcome to my journey in software development, where I'm exploring the dynamic worlds of front-end and back-end development.

With my past internships and academic experiences, I've had the opportunity to work with a variety of technologies, including React, Node.js, MySQL, MongoDB, and ROS. As I navigate the complexities of coding, I strive to embrace complexity and cultivate simplicity in every project.

Outside of coding, I enjoy playing basketball.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - September 2023",
    role: "Software Intern",
    company: "Arka Aerospace",
    description: `Developed a Swarm Drone System for Foreign Object Detection, utilizing MAVLink protocol and autonomous navigation algorithms for seamless coordination among drones.`,
    technologies: ["Python", "ROS", "MavLink"],
  },
  {
    year: "December 2022 - January 2023",
    role: "Embedded Intern",
    company: "GalaxEye Space",
    description: `Contributed to the development of India's first private drone-based Synthetic Aperture Radar, optimizing data communication using LoRa and MAVLink protocols.`,
    technologies: ["STM32CUBE IDE", "MavLink", "Python"],
  },
  {
    year: "Feb 2024 - July 2024",
    role: "Software Intern",
    company: "Genpact",
    description: `Developed a CPG data integration platform for retail analytics, implementing data cleansing and demand forecasting models to enhance supply chain efficiency`,
    technologies: ["Python", "Apache Airflow", "ETL", "AWS", "Docker"],
  },
  {
    year: "Jan 2021 – Oct 2023",
    role: "Embedded Driver Development Head",
    company: "Parikshit Student Satellite",
    description: `Worked on the development of a 2U class nanosatellite.`,
    technologies: ["STM32CUBE IDE", "Keil", "C++", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "CPG data integration platform",
    image: project1,
    description:
      "Developed a CPG data integration platform, optimizing retail analytics through data cleansing, visualization interfaces, and predictive demand forecasting.",
      technologies: ["Python", "Apache Airflow", "ETL", "AWS", "Docker"]
  },
  {
    title: "Swarm Drone System for Foreign Object Detection.",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Python", "ROS", "MAVLink"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Contact Manager Backend Application",
    image: project4,
    description:
      "Developed a contact manager backend application using Node.js, Express, MongoDB, and JWT.",
    technologies: ["Node.Js", "Express", "MongoDB", "JWT"],
  },
];

export const CONTACT = {
  address: " Lawrence, Kansas ",
  phoneNo: "+1 (785) 917 8760 ",
  email: "manavisharma14@gmail.com",
};
