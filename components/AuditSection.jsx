"use client";
import React from "react";
import accessibility from "../public/featureimg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactUsButton from "./Buttons/ContactUsButton";
import Readmore from "./Buttons/Readmore";
import Reveal from "./Reaveal";

const AuditSection = () => {
  return (
    <div className="w-full h-full flex bg-[#76c3d0] flex-col lg:flex-row items-center justify-center px-5 py-16 lg:py-32 gap-12">
      <div className="w-full">
        <Reveal>
          <Image
            src={accessibility}
            alt="accessibility checked image"
            aria-label="hand pointing to accessible icons"
            className="w-full md:w-[50%] mx-auto lg:w-full"
          />
        </Reveal>
      </div>
      <Reveal>
        <div className=" w-full flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl font-bold">
            Vi hjelper deg med å gjøre nettstedet ditt{" "}
            <span className="text-white text-4xl">tilgjengelig</span> for alle
          </h1>
          <p className="text-xl mt-4">
            Vårt team av eksperter er klare til å veilede deg for å gjøre
            nettstedet ditt ADA-kompatibelt.
          </p>
          <ContactUsButton item={"Kontakt vårt team"} />
        </div>
      </Reveal>
    </div>
  );
};

export default AuditSection;
