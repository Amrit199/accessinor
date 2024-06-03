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
            <span className="text-white text-5xl">AccessiNor</span> bidrar til å
            bygge tilgjengelige og inkluderende digitale løsninger.
          </h1>

          <p className="text-lg lg:text-xl">
            Tilgjengelige nettsider og applikasjoner er ikke bare et
            lovspørsmål, men også et etisk ansvar. Vårt oppdrag er å gjøre
            nettet til et inkluderende sted hvor funksjonshemmede kan engasjere
            seg fullt ut med innhold og tjenester på nettet.
          </p>
          <motion.div
            className="bg-primary hover:bg-p-hover text-white px-6 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 17 }}
          >
            <DemoButton
              item={"Få Demo"}
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
            role="region"
            aria-labelledby="inkluderende-design"
          >
            <span
              id="inkluderende-design"
              className=" text-lg font-bold text-center"
            >
              Inkluderende design
            </span>
            <FaUniversalAccess size={45} aria-hidden="true" />
          </div>
          <div
            className="absolute -bottom-20 left-[45%] w-48 h-52 rounded-2xl flex flex-col items-center justify-center flex-wrap border-2 border-white bg-gradient-to-r from-slate-300 to-white shadow-2xl shadow-gray-700"
            role="region"
            aria-labelledby="etiske-hensyn"
          >
            <span id="etiske-hensyn" className=" text-lg font-bold text-center">
              Juridiske og etiske hensyn
            </span>
            <GiInjustice size={45} aria-hidden="true" />
          </div>
          <div
            className="absolute -bottom-60 left-[25%] lg:left-[65%] w-48 h-52 rounded-2xl flex flex-col items-center justify-center flex-wrap border-2 border-white bg-gradient-to-r from-slate-300 to-white shadow-2xl shadow-gray-700"
            role="region"
            aria-labelledby="utvidet-publikum"
          >
            <span
              id="utvidet-publikum"
              className=" text-lg font-bold text-center"
            >
              Utvidet publikumsrekkevidde
            </span>
            <FaUsersLine size={45} aria-hidden="true" />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default HeroSection;
