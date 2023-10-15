"use client";
import React from "react";
import accessibility from "../public/webchecker.png";
import DemoButton from "./Buttons/DemoButton";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reaveal";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Reveal>
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-5 pt-32 pb-8 lg:py-44 gap-12 overflow-hidden">
        <div className=" w-full flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl lg:text-4xl flex items-center justify-center flex-wrap">
            Welcome to Our Accessibility Checker
            <span className="text-3xl lg:text-4xl text-blue-700 mx-2 animate-pulse">
              <FaArrowRight />
            </span>
            <span className="text-blue-700 font-bold">AceessiNor AS</span>
          </h1>

          <p className="text-lg lg:text-xl lg:mt-4">
            AccessiNor is proud to introduce our primary offering, a
            comprehensive web accessibility checker. This innovative product has
            been carefully designed to assist website owners and developers in
            ensuring compliance with both web accessibility standards and the
            stringent regulations set by the Norwegian government. Our web
            accessibility checker goes beyond standard compliance checks by
            incorporating user experience and design considerations, with the
            ultimate aim of making the web more inclusive for all users
          </p>
          <motion.div
            className="bg-blue-200 px-6 py-1 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 17 }}
          >
            <DemoButton />
          </motion.div>
        </div>
        <div className="w-full">
          <Image
            src={accessibility}
            alt="accessibility checked image"
            aria-label="hand pointing to accessible icons"
            className="w-full md:max-w-xl mx-auto lg:w-full"
          />
        </div>
      </div>
    </Reveal>
  );
};

export default HeroSection;
