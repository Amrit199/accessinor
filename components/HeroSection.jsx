"use client";
import React from "react";
import accessibility from "../public/webchecker.png";
import DemoButton from "./Buttons/DemoButton";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reaveal";

const HeroSection = () => {
  return (
    <Reveal>
      <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center px-5 pt-32 lg:pt-0 gap-12 overflow-hidden">
        <div className=" w-full flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-4xl font-bold">
            Welcome to Our Accessibility Checker
          </h1>

          <p className="text-xl mt-4">
            We believe in creating an inclusive digital world, where everyone,
            regardless of their abilities, can access and navigate the web
            effortlessly.
          </p>
          <motion.div
            className="bg-[#76c3d0] px-6 py-1 rounded-full"
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
            className="w-3/4 md:max-w-xl mx-auto lg:w-full"
          />
        </div>
      </div>
    </Reveal>
  );
};

export default HeroSection;
