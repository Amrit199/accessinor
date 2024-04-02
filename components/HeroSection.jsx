"use client";
import React from "react";
import DemoButton from "./Buttons/DemoButton";
import { motion } from "framer-motion";
import Reveal from "./Reaveal";
import { FaUniversalAccess } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { FaUsersLine } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <Reveal>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-5 pt-32 pb-10 md:py-40 lg:px-10 xl:py-44 bg-gradient-to-r from-primary to-slate-400">
        <div className="w-full xl:w-[80%] mx-auto py-10 flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-4xl lg:text-4xl font-semibold">
            <span className="text-white text-5xl">AccessiNor</span> helps to
            build accessible and inclusive digital solutions.
          </h1>

          <p className="text-lg lg:text-xl">
            Accessible websites and applications are not only a matter of law,
            but also an ethical responsibility. Our mission is to make the web
            an inclusive place where people with disabilities can fully engage
            with online content and services.
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
                "flex items-center justify-center gap-1 cursor-pointer flex-nowrap py-2"
              }
            />
          </motion.div>
        </div>
        <div className="w-full h-full p-8 relative hidden md:flex">
          <div
            className="absolute bottom-16 left-[25%]
           w-48 h-52 rounded-2xl flex flex-col items-center justify-center flex-wrap border-2 border-white bg-gradient-to-r from-slate-300 to-white shadow-2xl shadow-gray-700"
          >
            <span className=" text-lg font-bold text-center">
              Inclusive Design
            </span>
            <FaUniversalAccess size={45} />
          </div>
          <div className="absolute -bottom-20 left-[45%] w-48 h-52 rounded-2xl flex flex-col items-center justify-center flex-wrap border-2 border-white bg-gradient-to-r from-slate-300 to-white shadow-2xl shadow-gray-700">
            <span className=" text-lg font-bold text-center">
              Legal and Ethical Considerations
            </span>
            <GiInjustice size={45} />
          </div>
          <div className="absolute -bottom-60 left-[25%] lg:left-[65%] w-48 h-52 rounded-2xl flex flex-col items-center justify-center flex-wrap border-2 border-white bg-gradient-to-r from-slate-300 to-white shadow-2xl shadow-gray-700">
            <span className=" text-lg font-bold text-center">
              Expanded Audience Reach
            </span>
            <FaUsersLine size={45} />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default HeroSection;
