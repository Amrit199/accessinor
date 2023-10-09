"use client";
import React from "react";
import accessibility from "../public/featureimg.jpg";
import DemoButton from "./DemoButton";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full h-screen my-auto flex bg-[#76c3d0] flex-col lg:flex-row items-center justify-center px-5 gap-4">
      <div className=" w-full flex flex-col items-center justify-center gap-6 text-center padding-x">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to Our Accessibility Checker
        </h1>
        <p className="text-xl mt-4">
          Helping make the web a more accessible place.
        </p>
        <motion.div
          className="bg-white px-6 py-1 rounded-full"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 17 }}
        >
          <DemoButton />
        </motion.div>
      </div>
      <div className="w-full ">
        <Image
          src={accessibility}
          alt="accessibility checked image"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
