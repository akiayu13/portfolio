"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-[calc(100vh-100px)] text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute text-center top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className=" mt-24 flex flex-col relative text-center md:mt-0 md:text-left md:top-20 md:flex-row max-w-7xl justify-evenly mx-auto items-center">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          //viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src="https://user-images.githubusercontent.com/29685463/214621071-55956388-d108-47c0-8303-09a0a9557d9b.jpeg"
          className="-mb-20 md:mb-0 flex-shrink-0 w-40  h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[550px]"
        />
        <div className="space-y-4 md:space-y-10 mt-20 px-0 md:px-10 md:mt-0">
          {" "}
          <h4 className="text-[26px] sm:text-3xl font-semibold">
            Here's a little{" "}
            <span className="text-[#F7AB0A]">{" <Background />"}</span>
          </h4>
          <p className="text-base">
            Hi! I'm Ayush Gupta, currently working as a Software Developer at
            Haber in Pune. I have a 4-star rating on CodeChef, Specialist status
            on Codeforces, and graduated with a CGPA of 9.18 from Silicon
            Institute of Technology, Bhubaneswar (2024).
            <br />
            I specialize in creating and maintaining websites and web
            applications using React, JavaScript, Tailwind CSS, and TypeScript.
            I have experience in both front-end and back-end development, with a
            strong focus on web design principles and user experience.
            <br />
            I'm also proficient in C++, C, and Java, and I'm passionate about
            crafting innovative, user-friendly online experiences while
            continuously learning new technologies.
          </p>
          <div className="items-center">
            <a
              href="https://drive.google.com/drive/folders/19SyD-8ZgjcRukCUK8RknGE2P5z_8edK8?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="aboutButton">Resume</button>
            </a>{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
