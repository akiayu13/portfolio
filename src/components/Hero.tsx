"use client";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi! I'm Ayush Gupta",
      "I'm a Developer",
      // "A Graphics Designer",
      "And a <Coder/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden top-36">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://github.com/akiayu13/portfolio/assets/29685463/edf9aea4-6c2c-43e3-934a-cf387f1a3de2"
        alt=""
      />
      <div className="z-20">
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span> <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>{" "}
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>{" "}
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>{" "}
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>{" "}
          <a href="#contact">
            <button className="heroButton">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
