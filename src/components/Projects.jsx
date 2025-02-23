import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Dr. Lal Pathlabs",
    description:
      "The DrLalPathLabs project is designed to provide a seamless and efficient experience for patients, doctors, and partners. It offers features such as online test bookings, report downloads, and access to detailed information about diagnostic tests and health programs.",
    technologies: ["HTML", "CSS"],
    link: "https://dr-lal-pathlabs-re-mct-m3-18-12-2024-rajat75-techs-projects.vercel.app/",
  },
  {
    image: image2,
    title: "Truecaller",
    description:
      "This project is a clone of the popular Truecaller application UI, developed as part of the Geekathon event. The goal of this project was to create a fully responsive and functional user interface that mimics the features of Truecaller using HTML,CSS and JavaScript. A team project made with 3 team members and one leader with a mentor.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://truecaller-clone.netlify.app/",
  },
  {
    image: image3,
    title: "TED Talks",
    description:
      "The TEDtalks UI project recreates a user interface similar to the TED Talks homepage. It features a grid layout for videos, header and navigation sections, and a footer for additional links. ",
    technologies: ["HTML", "CSS"],
    link: "https://ted-talks-rajat75-techs-projects.vercel.app/"
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col justify-center items-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
