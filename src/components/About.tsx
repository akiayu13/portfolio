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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[550px]"
        />
        <div className="space-y-10 mt-20 px-0 md:px-10 md:mt-0">
          {" "}
          <h4 className="text-4xl font-semibold">
            Here's a little{" "}
            <span className="text-[#F7AB0A]">{" <Background />"}</span>
          </h4>
          <p className="text-base">
            Hi! I'am Ayush Gupta. I'm currently pursuing my BTech in Computer
            Science And Engineering from Silicon Institute of Technology,
            Bhubaneswar. I am a web developer and coder. I specialize in
            creating and maintaining websites and web applications using a
            variety of programming languages and libraries such as React, CSS,
            JavaScript, TypeScript, TailwindCSS and others. I am experienced in
            both front-end and back-end development, and have a strong
            understanding of web design principles and user experience. I am
            also proficient in coding languages such as C++, C and JAVA. I am
            passionate about creating innovative and user-friendly online
            experiences and am constantly learning new skills and technologies
            to stay up-to-date in the field.
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
