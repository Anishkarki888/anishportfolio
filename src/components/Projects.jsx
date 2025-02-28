// import { motion } from "framer-motion";

// const projectsData = [
//   {
//     image: null, // Add your image later (e.g., "/public/smart-irrigation.png")
//     title: "Smart Irrigation System",
//     description:
//       "I developed an intelligent irrigation system using Arduino technology to automatically supply water based on soil moisture levels and temperature, optimizing water usage and enhancing agricultural efficiency.",
//     technologies: ["Arduino", "Python", "Hardware", "IoT"],
//     link: "https://github.com/Anishkarki888/smart-irrigation",
//   },
//   {
//     image: null, // Add your image later (e.g., "/public/ecommerce-site.png")
//     title: "E-commerce Website for Flying Objects",
//     description:
//       "I designed and developed a responsive e-commerce website using HTML and CSS to showcase and sell futuristic flying objects like airships, drones, and upcoming aircars, focusing on user-friendly navigation and modern aesthetics.",
//     technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
//     link: "https://anishkarki888.github.io/newton/",
//   },
//   {
//     image: null, // Add your image later (e.g., "/public/hospital-system.png")
//     title: "Hospital Management System",
//     description:
//       "I created a comprehensive hospital management system using Python and Tkinter, enabling patient admissions, doctor assignments, appointment scheduling, and administrative tasks, improving healthcare operational efficiency.",
//     technologies: ["Python", "Tkinter", "SQLite", "GUI Development"],
//     link: "https://github.com/Anishkarki888/",
//   },
//   {
//     image: null, // Add your image later (e.g., "/public/walmart-sales.png")
//     title: "Walmart Sales Prediction",
//     description:
//       "This project focused on predicting Walmart sales using machine learning, analyzing various influencing factors. I utilized Matplotlib for data visualization and applied a RandomForestRegressor model, evaluating performance with metrics like MAE, MSE, and RMAE to optimize sales forecasting.",
//     technologies: ["Python", "Matplotlib", "Scikit-learn", "RandomForestRegressor", "Pandas"],
//     link: "https://www.kaggle.com/code/anishkarki8/notebook5e81451ff4",
//   },
//   {
//     image: null, // Add your image later (e.g., "/public/dream-weaver.png")
//     title: "Dream Weaver (Tech Consultancy) - Ongoing",
//     description:
//       "I’m developing a tech consultancy platform, Dream Weaver, to assist students in finding colleges and job seekers in securing international opportunities. It features a recommendation system, job applications, and educational courses, built with React for the frontend and Python/Django/Flask for the backend.",
//     technologies: ["React", "Python", "Django", "Flask", "Machine Learning"],
//     link: "https://github.com/Anishkarki888",
//   },
// ];

// const ScrollReveal = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const ProjectCard = ({ project }) => {
//   return (
//     <ScrollReveal>
//       <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 w-full max-w-[1000px] mx-auto">
//         {project.image ? (
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full max-w-[300px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105"
//           />
//         ) : (
//           <div className="w-full max-w-[300px] h-[200px] bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400">
//             Image Coming Soon
//           </div>
//         )}
//         <div className="flex flex-col flex-1 gap-5">
//           <div className="flex flex-col gap-3">
//             <div className="text-xl font-semibold text-white">{project.title}</div>
//             <p className="text-gray-400 max-w-[500px] text-pretty leading-relaxed">
//               {project.description}
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             {project.technologies.map((tech, index) => (
//               <span
//                 key={index}
//                 className="rounded-lg bg-gray-800 p-3 text-white text-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-400 hover:text-blue-300 underline text-sm mt-2"
//           >
//             View Project
//           </a>
//         </div>
//       </div>
//     </ScrollReveal>
//   );
// };

// const Projects = () => {
//   return (
//     <div
//       id="projects"
//       className="flex min-h-screen w-full flex-col justify-center items-center gap-16 p-4 md:p-14 bg-black dark:bg-black"
//     >
//       <ScrollReveal>
//         <h1 className="text-4xl font-light text-white md:text-6xl">
//           My Projects
//         </h1>
//       </ScrollReveal>

//       <div className="flex w-full flex-col gap-16 text-white">
//         {projectsData.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
import { motion } from "framer-motion";

const projectsData = [
  {
    image: "public/smartirrigationpic.png",
    title: "Smart Irrigation System",
    description:
      "I developed a system that automates irrigation by monitoring soil moisture and temperature, optimizing water usage with Arduino.",
    technologies: ["Arduino", "Python", "Hardware"],
    link: "https://github.com/Anishkarki888/smart-irrigation",
  },
  {
    image: "public/airship_port.png",
    title: "E-commerce Website for Flying Objects",
    description:
      "Designed an e-commerce site using HTML and CSS to sell futuristic flying objects like airships and drones.",
    technologies: ["HTML", "CSS"],
    link: "https://anishkarki888.github.io/newton/",
  },
  {
    image: "public/hospitalmanagement.png",
    title: "Hospital Management System",
    description:
      "A system for managing hospital operations, including patient admissions, appointments, and doctor assignments using Python and Tkinter.",
    technologies: ["Python", "Tkinter"],
    link: "https://github.com/Anishkarki888/",
  },
  {
    image: "public/salesprediction.png",
    title: "Walmart Sales Prediction",
    description:
      "Used machine learning to predict Walmart sales trends. Applied data visualization and RandomForestRegressor for accuracy evaluation.",
    technologies: ["Python", "Matplotlib", "Scikit-learn"],
    link: "https://www.kaggle.com/code/anishkarki8/notebook5e81451ff4",
  },
  {
    image: "public/hospitalmanagement.png",
    title: "Dream Weaver (Tech Consultancy) - Ongoing",
    description:
      "A platform helping students find suitable colleges and job seekers explore opportunities abroad through AI-driven recommendations.",
    technologies: ["React", "Python", "Django", "Flask"],
    link: "https://github.com/Anishkarki888",
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
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[200px] md:w-[300px] rounded-2xl object-cover cursor-pointer transition-all duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-[200px] md:w-[300px] bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400">
            Image Coming Soon
          </div>
        )}
        <div className="flex flex-col gap-5 max-w-md">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400 h-[80px] overflow-hidden">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-2 text-sm">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            View Project
          </a>
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
