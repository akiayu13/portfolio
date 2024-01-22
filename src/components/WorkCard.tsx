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
      className="top-24 flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[500px] md:w[600px] xl:w[900px] snap-center bg-[#292929] p-8 h-auto
    opacity-80 hover:opacity-100 cursor-pointer hover:ease-in-out transition-opacity duration-200 overflow-hidden "
    >
      <motion.img
        className="h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
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
        className="px-10 md:px-10 "
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        //viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-3xl font-normal">{work.role}</h4>
        <h6 className="text-xl font-normal">{work.company}</h6>
        {/* <div className="flex space-x-5 my-2">
          {tech.map((item) => (
            //eslint-disable-next-line @typescript-eslint/no-unused-expressions
            <img className="h-8 w-8 rounded-full" src={item} alt="" />
          ))}
        </div> */}
        <p className="uppercase py-5 text-gray-500">{work.date}</p>
        <ul className="list-disc space-y-4 ml-5 text-base ">
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
