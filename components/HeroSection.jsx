"use client";
import React from "react";
import DemoButton from "./Buttons/DemoButton";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reaveal";
import { FaArrowRight } from "react-icons/fa";
import responsive from "../public/responsive-website.png";

const HeroSection = () => {
  return (
    <Reveal>
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-5 py-32 gap-12 overflow-hidden">
        <div className=" w-full flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-2xl lg:text-3xl flex items-center justify-center flex-wrap">
            Welcome to Our Accessibility Checker
            <span className="text-3xl lg:text-4xl text-primary mx-2 animate-pulse">
              <FaArrowRight />
            </span>
            <span className="text-primary font-bold">AceessiNor AS</span>
          </h1>

          <p className="text-lg lg:text-xl">
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
            className="bg-primary hover:bg-p-hover text-white px-6 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 17 }}
          >
            <DemoButton
              item={"Get Demo"}
              classname={
                "flex items-center justify-center gap-1 cursor-pointer flex-nowrap"
              }
            />
          </motion.div>
        </div>
        <div className="w-full">
          <Image
            src={responsive}
            alt="accessibility checked image"
            aria-label="hand pointing to accessible icons"
            className="w-[90%] sm:max-w-md mx-auto"
          />
        </div>
      </div>
    </Reveal>
  );
};

export default HeroSection;
