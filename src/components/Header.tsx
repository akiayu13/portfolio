"use client";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { GrDocumentPdf } from "react-icons/gr";
type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/akiayu13"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/akiayu13"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/ayushgupta_13"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer mx-5"
      >
        <SocialIcon
          className="cursor-pointer"
          network="sharethis"
          fgColor="gray"
          url="https://drive.google.com/drive/folders/19SyD-8ZgjcRukCUK8RknGE2P5z_8edK8?usp=share_link"
          bgColor="transparent"
        />
        <a
          href="https://drive.google.com/drive/folders/19SyD-8ZgjcRukCUK8RknGE2P5z_8edK8?usp=share_link"
          target="_blank"
        >
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Resume
          </p>
        </a>

        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* <Link legacyBehavior href="#contact"> */}
        <a href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </a>

        {/* </Link> */}
      </motion.div>
    </div>
  );
}

export default Header;
