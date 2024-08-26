"use client";
import React from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
//import netflix from "../Images/logos/netflix";
type Props = {};

export default function Projects() {
  const work = [
    {
      role: "Junior Software Engineer",
      company: "Haber, Pune",
      pic: "https://github.com/akiayu13/portfolio/assets/29685463/67674b2b-2655-4861-bffb-8ab9921baee4",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
        "https://user-images.githubusercontent.com/29685463/215034516-095feb28-0dab-4528-aca5-92067d3a9f49.png",
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
      ],
      date: "June 2024 - Present",
      points: [
        "Developed screens for Advanced Planning and Scheduling (APS) to assist in the planning and scheduling of reels and job cards using React, React DND, and styled components.",
        "Implemented a user-friendly drag-and-drop interface allowing users to easily manage and organize run blocks, improving operational efficiency.",
        "Integrated dynamic scheduling functionalities to accommodate real-time changes and updates in job planning.",
      ],
      repo: {
        live: "https://www.haberwater.com/",
      },
    },
    {
      role: "Software Engineer Intern",
      company: "Haber, Pune",
      pic: "https://github.com/akiayu13/portfolio/assets/29685463/67674b2b-2655-4861-bffb-8ab9921baee4",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
        "https://user-images.githubusercontent.com/29685463/215034516-095feb28-0dab-4528-aca5-92067d3a9f49.png",
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
      ],
      date: "July 2023 - May 2024",
      points: [
        "Developed dashboard pages for Elixa’s DigitalTwin UI using React, ANT Design, and styled components based on Figma.",
        "Implemented functional Conversational AI pages with real-time typewriting effects and responsive table creation.",
        "Integrated Multi-Dia APIs into job card pages and ensured responsiveness of the cylinder UI for Kaiznn.",
      ],
      repo: {
        live: "https://www.haberwater.com/",
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden  flex-col text-center md:flex-row max-w-full px-2 md:px-10 justify-center mx-auto items-center "
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl">
        Work Experience
      </h3>
      <div
        className="w-full flex justify-start md:justify-center space-x-5 p-4 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll"
      >
        {work.map((item) => (
          <WorkCard key={item.company} work={item} tech={item.technologies} />
        ))}
      </div>
    </motion.div>
  );
}
