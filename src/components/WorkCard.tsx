import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";
const ProjectsCard = ({ work, tech }) => {
  //const images[] = work.technologies;
  //console.log(proj);
  return (
    <article
      className="mt-24 h-[calc(100vh-160px)] max-h-[600px] flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[400px] md:w-[600px]  snap-center bg-[#292929] p-8
    opacity-80 hover:opacity-100 cursor-pointer hover:ease-in-out transition-opacity duration-200 overflow-hidden "
    >
      <motion.img
        className="h-20 w-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={work.pic}
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
        className="px-4 "
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        //viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-2xl font-semibold w-full">{work.role}</h4>
        <h6 className="text-xl font-base">{work.company}</h6>
        {/* <div className="flex space-x-5 my-2">
          {tech.map((item) => (
            //eslint-disable-next-line @typescript-eslint/no-unused-expressions
            <img className="h-8 w-8 rounded-full" src={item} alt="" />
          ))}
        </div> */}
        <p className="uppercase py-2 text-gray-500">{work.date}</p>
        <ul className="list-disc space-y-1 ml-2 text-sm text-left md:text-base md:space-y-6 ">
          {work.points.map((item) => (
            //eslint-disable-next-line @typescript-eslint/no-unused-expressions
            <li>{item}</li>
          ))}
        </ul>
      </motion.div>
      <div className="flex space-x-5 bottom-0">
        {/* <Link href={work.repo.git}>
          <AiFillGithub className="h-10 w-10" />
        </Link>{" "} */}
        <Link href={work.repo.live}>
          <AiFillChrome className="h-10 w-10" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectsCard;
