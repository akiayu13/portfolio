import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";
const ProjectsCard = ({ proj, tech }) => {
  //const images[] = proj.technologies;
  //console.log(proj);
  return (
    <article
      className=" relative flex flex-col md:justify-start rounded-lg items-center flex-shrink-0 w-full min-w-[400px] max-w-[600px] md:w[600px] xl:w[900px] snap-center bg-[#292929] p-8 h-auto
    opacity-80 hover:opacity-100 cursor-pointer hover:ease-in-out transition-opacity duration-200 overflow-hidden "
    >
      <motion.img
        className="h-20 w-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={proj.pic}
        alt=""
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        //viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="px-4 md:px-10 "
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        //viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-2xl md:text-3xl text-center font-normal">
          {proj.name}
        </h4>
        <div className="flex justify-center space-x-3 my-2">
          {tech.map((item) => (
            //eslint-disable-next-line @typescript-eslint/no-unused-expressions
            <img className="h-8 w-8 rounded-full" src={item} alt="" />
          ))}
        </div>
        <p className="uppercase py-2 text-gray-500">{proj.date}</p>
        <ul className="list-disc space-y-2 ml-0 text-left text-base pb-8 ">
          {proj.points.map((item) => (
            //eslint-disable-next-line @typescript-eslint/no-unused-expressions
            <li>{item}</li>
          ))}
        </ul>
      </motion.div>
      <div className="absolute flex space-x-5 bottom-4">
        <Link href={proj.repo.git}>
          <AiFillGithub className="h-10 w-10" />
        </Link>{" "}
        <Link href={proj.repo.live}>
          <AiFillChrome className="h-10 w-10" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectsCard;
