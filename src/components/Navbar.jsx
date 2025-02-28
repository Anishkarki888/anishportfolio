// // import { useState } from "react";
// // import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
// // import { BiX, BiMenu } from "react-icons/bi";


// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const menuOpen = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
// //       <a
// //         href="#home"
// //         className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
// //       >
// //         ANISH
// //       </a>

// //       <ul className="hidden md:flex gap-10">
// //         <a
// //           href="#home"
// //           className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
// //         >
// //           <li>Home</li>
// //         </a>
// //         <a
// //           href="#tech"
// //           className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
// //         >
// //           <li>Tech</li>
// //         </a>
// //         <a
// //           href="#projects"
// //           className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
// //         >
// //           <li>Projects</li>
// //         </a>
// //         <a
// //           href="#contact"
// //           className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
// //         >
// //           <li>Contact</li>
// //         </a>
// //       </ul>

// //       <ul className="hidden md:flex gap-5">
// //   <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
// //     <a href="https://www.linkedin.com/in/rajat-sharma2003/" target="_blank" rel="noopener noreferrer">
// //       <BsLinkedin />
// //     </a>
// //   </li>

// //   <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-700 hover:opacity-100">
// //     <a href="https://www.instagram.com/rajatsharma6973/" target="_blank" rel="noopener noreferrer">
// //       <BsInstagram />
// //     </a>
// //   </li>

// //   <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
// //     <a href="https://github.com/Rajat75-tech" target="_blank" rel="noopener noreferrer">
// //       <BsGithub />
// //     </a>
// //   </li>
// // </ul>

// //       {isOpen ? (
// //         <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
// //       ) : (
// //         <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
// //       )}

// //       {isOpen && (
// //         <div
// //           className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
// //             isOpen ? "block" : "hidden"
// //           }`}
// //         >
// //           <ul className="flex flex-col gap-8">
// //             <a
// //               href="#home"
// //               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
// //             >
// //               <li>Home</li>
// //             </a>
// //             <a
// //               href="#tech"
// //               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
// //             >
// //               <li>Tech</li>
// //             </a>
// //             <a
// //               href="#projects"
// //               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
// //             >
// //               <li>Projects</li>
// //             </a>
// //             <a
// //               href="#contact"
// //               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
// //             >
// //               <li>Contact</li>
// //             </a>
// //           </ul>

// //           <ul className="flex flex-wrap gap-5">
// //             <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
// //               <BsYoutube />
// //             </li>

// //             <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
// //               <BsLinkedin />
// //             </li>

// //             <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
// //               <BsTwitter />
// //             </li>

// //             <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
// //               <BsGithub />
// //             </li>
// //           </ul>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import { useState, useEffect } from "react";
// import { BiLogoGithub, BiLogoLinkedin, BiMenu, BiMoon, BiSun, BiX } from "react-icons/bi";
// import { SiGitlab } from "react-icons/si";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Sync with system preference on mount
//   useEffect(() => {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setIsDarkMode(prefersDark);
//   }, []);

//   // Toggle dark/light mode
//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//     document.documentElement.classList.toggle("dark", !isDarkMode);
//   };

//   const menuOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   const navVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.nav
//       variants={navVariants}
//       initial="hidden"
//       animate="visible"
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly dark:bg-gray-900/80 dark:text-gray-100"
//     >
//       <a
//         href="#home"
//         className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
//       >
//         ANISH
//       </a>

//       <ul className="hidden md:flex gap-10">
//         <a
//           href="#home"
//           className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//         >
//           <li>Home</li>
//         </a>
//         <a
//           href="#tech"
//           className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//         >
//           <li>Technical Skills</li>
//         </a>
//         <a
//           href="#projects"
//           className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//         >
//           <li>Projects</li>
//         </a>
//         <a
//           href="#contact"
//           className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//         >
//           <li>Contact</li>
//         </a>
//       </ul>

//       <div className="hidden md:flex items-center gap-5">
//         {/* Social Links (Gmail removed) */}
//         <a
//           href="https://github.com/Anishkarki888"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
//           aria-label="GitHub"
//         >
//           <BiLogoGithub />
//         </a>
//         <a
//           href="https://gitlab.com/anishkarki989"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100"
//           aria-label="GitLab"
//         >
//           <SiGitlab />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/anishkarki8/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
//           aria-label="LinkedIn"
//         >
//           <BiLogoLinkedin />
//         </a>

//         {/* Theme Toggle */}
//         <button
//           onClick={toggleTheme}
//           className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-yellow-500 hover:opacity-100 p-2 rounded-full"
//           aria-label="Toggle Theme"
//         >
//           {isDarkMode ? <BiSun /> : <BiMoon />}
//         </button>
//       </div>

//       {isOpen ? (
//         <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
//       ) : (
//         <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
//       )}

//       {isOpen && (
//         <div
//           className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
//             isOpen ? "block" : "hidden"
//           } dark:bg-gray-900/80`}
//         >
//           <ul className="flex flex-col gap-8">
//             <a
//               href="#home"
//               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//             >
//               <li>Home</li>
//             </a>
//             <a
//               href="#tech"
//               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//             >
//               <li>Technical Skills</li>
//             </a>
//             <a
//               href="#projects"
//               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//             >
//               <li>Projects</li>
//             </a>
//             <a
//               href="#contact"
//               className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
//             >
//               <li>Contact</li>
//             </a>
//           </ul>

//           <div className="flex flex-col gap-5">
//             {/* Social Links for Mobile (Gmail removed) */}
//             <div className="flex flex-wrap gap-5">
//               <a
//                 href="https://github.com/Anishkarki888"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
//                 aria-label="GitHub"
//               >
//                 <BiLogoGithub />
//               </a>
//               <a
//                 href="https://gitlab.com/anishkarki989"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100"
//                 aria-label="GitLab"
//               >
//                 <SiGitlab />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/anishkarki8/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
//                 aria-label="LinkedIn"
//               >
//                 <BiLogoLinkedin />
//               </a>
//             </div>

//             {/* Theme Toggle for Mobile */}
//             <button
//               onClick={toggleTheme}
//               className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-yellow-500 hover:opacity-100 p-2 rounded-full"
//               aria-label="Toggle Theme"
//             >
//               {isDarkMode ? <BiSun /> : <BiMoon />}
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { BiLogoGithub, BiLogoLinkedin, BiMenu, BiX } from "react-icons/bi";
import { SiGitlab } from "react-icons/si";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly"
    >
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        ANISH
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Technical Skills</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <div className="hidden md:flex items-center gap-5">
        <a
          href="https://github.com/Anishkarki888"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
          aria-label="GitHub"
        >
          <BiLogoGithub />
        </a>
        <a
          href="https://gitlab.com/anishkarki989"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100"
          aria-label="GitLab"
        >
          <SiGitlab />
        </a>
        <a
          href="https://www.linkedin.com/in/anishkarki8/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
          aria-label="LinkedIn"
        >
          <BiLogoLinkedin />
        </a>
      </div>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}
    </motion.nav>
  );
};

export default Navbar;
