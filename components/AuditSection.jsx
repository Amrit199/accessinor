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
      <div className=" w-full flex flex-col items-center justify-center gap-6 text-center">
        <Reveal>
          <h1 className="text-3xl font-bold">
            We help you to make your website{" "}
            <span className="text-white text-4xl">Accessible</span> for everyone
          </h1>
          <p className="text-xl mt-4">
            Our team of experts is ready to guide you in making your website ADA
            compliant.
          </p>
          <ContactUsButton item={"Contact Our team"} />
        </Reveal>
      </div>
    </div>
  );
};

export default AuditSection;
