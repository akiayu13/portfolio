"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Skill({ img, title }) {
  // console.log(img);
  return (
    <div className="top-10 md:top-28 left-0 x-0 items-center group relative flex cursor-pointer   ">
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative w-16 h-16 xl:w-24 xl:h-24 object-contain rounded-full border border-gray-500
          filter group-hover:grayscale transition  duration-300 ease-in-out "
      >
        <Image
          src={img}
          alt=""
          className="object-contain rounded-full"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{title}</p>
        </div>
      </div>
    </div>
  );
}
