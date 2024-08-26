"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
//import netflix from "../Images/logos/netflix";
type Props = {};

export default function Projects() {
  const project = [
    {
      name: "Cosmic Odyssey",
      pic: "https://cdn.dribbble.com/userupload/12455326/file/original-245417398f32b2f6d9bcd5919f807990.jpg?resize=400x300&vertical=center", // Replace with an actual image URL for the project
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png", // Tailwind
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png", // HTML
        "https://user-images.githubusercontent.com/29685463/215034514-1a9c7e9a-dcf1-486b-bd58-fb607ba31c9f.png", // CSS
        "https://user-images.githubusercontent.com/29685463/215058305-c6a71893-bbaa-4cce-ba39-44f16d82f405.png", // NextJS
        "https://user-images.githubusercontent.com/29685463/215057483-e230ab14-dd65-4bb2-8954-208e17765784.png", // TypeScript
      ],
      date: "August 2023 - Present",
      points: [
        "Implemented a responsive UI for displaying and filtering information about various planets.",
        "Integrated Redux Toolkit for state management, enabling efficient handling of search and filter functionalities.",
        "Fetched and displayed planet data from external APIs, allowing users to search, filter by shape, color, and size.",
        "Developed dynamic UI components for a seamless user experience across different devices and screen sizes.",
      ],
      repo: {
        git: "https://github.com/akiayu13/planets",
        live: "https://cosmic-odyssey-main.vercel.app/",
      },
    },
    {
      name: "Music Player",
      pic: "https://i.pinimg.com/originals/11/1b/ac/111bac0e608be170a71e50cc07bd7ad2.jpg",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png", // React
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png", // Tailwind
        "https://user-images.githubusercontent.com/29685463/215034525-9746c1b8-b015-47e0-b5b2-edb70e682c8c.png", // JS
        "data:image/jpeg;base64,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",
      ],
      date: "August 2024 - Present",
      points: [
        "Developed a responsive music player application using React.js and Tailwind CSS.",
        "Implemented state management with Zustand for controlling the player state.",
        "Integrated REST API to load song data and cover images dynamically.",
        "Ensured continuous playback and smooth interface transitions.",
        "Added features like search, music controls, and dynamic background changes based on the album cover.",
      ],
      repo: {
        git: "https://github.com/your-username/music-player",
        live: "https://music-player-akiayu13.vercel.app/",
      },
    },
    {
      name: "Netflix Clone",
      pic: "https://user-images.githubusercontent.com/29685463/215034533-4f2ecb23-653a-4966-aa1a-3b6a9009dc28.png",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
        "https://user-images.githubusercontent.com/29685463/215034516-095feb28-0dab-4528-aca5-92067d3a9f49.png",
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
      ],
      date: "August 2022 - August 2022",
      points: [
        "A complete clone of Netflix.com with identitcal landing, sign-up and homepage.",
        "Uses React, Tailwind CSS, Firebase Auth.",
        "Uses TMDB API at the backend to fetch movie list.",
        "Watch Trailers of the desired movie in the webpage itself.",
        "Add and remove Movies to/from Watch List.",
      ],
      repo: {
        git: "https://github.com/akiayu13/netflix-clone-react",
        live: "https://celebrated-pony-13adf8.netlify.app/new",
      },
    },
    {
      name: "Ecommerce App",
      pic: "https://user-images.githubusercontent.com/29685463/215044939-afd7d756-05a7-4718-b8df-098f40bfb9cc.png",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
        "https://user-images.githubusercontent.com/29685463/215034514-1a9c7e9a-dcf1-486b-bd58-fb607ba31c9f.png",
        "https://user-images.githubusercontent.com/29685463/215034529-52e81f99-f1c5-4653-9c9b-28d28c0c59a8.png",
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
      ],
      date: "July 2022 - December 2022",
      points: [
        "A full stack MERN Project",
        "Uses React and Redux at FrontEnd.",
        "Uses NodeJs and MongoDB at the BackEnd",
        "Has full CRUD functonality i.e., Create, Read, Update and Delete.",
        "Functional Cart to add and remove products",
        "Validations wherever required.",
      ],
      repo: {
        git: "https://github.com/akiayu13/mern-stack-ecom-project",
        live: "https://mern-ecom-project.herokuapp.com/",
      },
    },
    {
      name: "Portfolio Webpage",
      pic: "https://user-images.githubusercontent.com/29685463/215061450-dad96437-cc13-4121-84c9-3e3fa1682cca.png",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215058305-c6a71893-bbaa-4cce-ba39-44f16d82f405.png",
        "https://user-images.githubusercontent.com/29685463/215057483-e230ab14-dd65-4bb2-8954-208e17765784.png",
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
      ],
      date: "July 2022 - December 2022",
      points: [
        "A Portfolio webpage made using NextJS and TypeScript",
        "Uses Framer-motion for all the animations and transitions ",
        "All the CSS part is done using Tailwind CSS.",
        "Detailed information about the projects, skills and personal background",
        "A working Contact Me section which redirects to the native email app.",
      ],
      repo: {
        git: "https://github.com/akiayu13/portfolio",
        live: "https://portfolio-n3ts.vercel.app/",
      },
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[calc(100vh-80px)] pt-10 flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-2 md:px-10 justify-center mx-auto items-center "
    >
      <h3 className="sm:absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="w-full flex space-x-5 p-10 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll"
      >
        {project.map((item) => (
          <ProjectsCard key={item.name} proj={item} tech={item.technologies} />
        ))}
      </div>
    </motion.div>
  );
}
