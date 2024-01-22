"use client";
import React from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
//import netflix from "../Images/logos/netflix";
type Props = {};

export default function Projects() {
  const work = [
    {
      role: "Software Engineer Intern",
      company: "Haberwater, Pune",
      pic:
        "https://github.com/akiayu13/portfolio/assets/29685463/67674b2b-2655-4861-bffb-8ab9921baee4",
      technologies: [
        "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
        "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
        "https://user-images.githubusercontent.com/29685463/215034516-095feb28-0dab-4528-aca5-92067d3a9f49.png",
        "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
      ],
      date: "July 2023 - Present",
      points: [
        "Developed key dashboard pages for Elixa’s DigitalTwin UI using React, ANT Design and styled components as per Figma.",
        "Created functional Conversational AI pages with real-time typewriting effects, dynamic image generation, and responsive table creation.",
        "Implemented interactive data visualizations for actionable insights into digital twin data.",
        "Ensured responsiveness of the cylinder UI for Kaiznn and integrated Multi-Dia APIs into job card pages.",
      ],
      repo: {
        // git: "https://github.com/akiayu13/netflix-clone-react",
        live: "https://www.haberwater.com/",
      },
    },
    // {
    //   name: "Ecommerce App",
    //   pic:
    //     "https://user-images.githubusercontent.com/29685463/215044939-afd7d756-05a7-4718-b8df-098f40bfb9cc.png",
    //   technologies: [
    //     "https://user-images.githubusercontent.com/29685463/215034546-ced8629f-af35-46b9-8f1e-3b66fb93bc72.png",
    //     "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
    //     "https://user-images.githubusercontent.com/29685463/215034514-1a9c7e9a-dcf1-486b-bd58-fb607ba31c9f.png",
    //     "https://user-images.githubusercontent.com/29685463/215034529-52e81f99-f1c5-4653-9c9b-28d28c0c59a8.png",
    //     "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
    //   ],
    //   date: "July 2022 - December 2022",
    //   points: [
    //     "A full stack MERN Project",
    //     "Uses React and Redux at FrontEnd.",
    //     "Uses NodeJs and MongoDB at the BackEnd",
    //     "Has full CRUD functonality i.e., Create, Read, Update and Delete.",
    //     "Functional Cart to add and remove products",
    //     "Validations wherever required.",
    //   ],
    //   repo: {
    //     git: "https://github.com/akiayu13/mern-stack-ecom-project",
    //     live: "https://mern-ecom-project.herokuapp.com/",
    //   },
    // },
    // {
    //   name: "Portfolio Webpage",
    //   pic:
    //     "https://user-images.githubusercontent.com/29685463/215061450-dad96437-cc13-4121-84c9-3e3fa1682cca.png",
    //   technologies: [
    //     "https://user-images.githubusercontent.com/29685463/215058305-c6a71893-bbaa-4cce-ba39-44f16d82f405.png",
    //     "https://user-images.githubusercontent.com/29685463/215057483-e230ab14-dd65-4bb2-8954-208e17765784.png",
    //     "https://user-images.githubusercontent.com/29685463/215034549-6f57bf5d-6c0a-4613-bdee-88138b830b62.png",
    //     "https://user-images.githubusercontent.com/29685463/215034519-a6b207a8-ee89-43df-bdf8-d7af74f28f62.png",
    //   ],
    //   date: "July 2022 - December 2022",
    //   points: [
    //     "A Portfolio webpage made using NextJS and TypeScript",
    //     "Uses Framer-motion for all the animations and transitions ",
    //     "All the CSS part is done using Tailwind CSS.",
    //     "Detailed information about the projects, skills and personal background",
    //     "A working Contact Me section which redirects to the native email app.",
    //   ],
    //   repo: {
    //     git: "https://github.com/akiayu13/portfolio",
    //     live: "https://portfolio-n3ts.vercel.app/",
    //   },
    // },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[900px] flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-2 md:px-10 justify-center mx-auto items-center "
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl">
        Work Experience
      </h3>
      <div
        className="w-full flex justify-center space-x-5 p-4 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll"
      >
        {work.map((item) => (
          <WorkCard key={item.company} work={item} tech={item.technologies} />
        ))} 
      </div>
    </motion.div>
  );
}
