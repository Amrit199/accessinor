"use client";
import React from "react";
import accessibility from "../public/featureimg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactUsButton from "./Buttons/ContactUsButton";
import Readmore from "./Buttons/Readmore";

const AuditSection = () => {
  return (
    <div className="w-full h-screen flex bg-[#76c3d0] flex-col lg:flex-row items-center justify-center px-5 pt-32 lg:pt-0 gap-12 overflow-hidden">
      <div className="w-full">
        <Image
          src={accessibility}
          alt="accessibility checked image"
          aria-label="hand pointing to accessible icons"
          className="w-3/4 md:max-w-xl mx-auto lg:w-full"
        />
      </div>
      <div className=" w-full flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-3xl font-bold">
          We help you to make your website <span className="text-white text-4xl">Accessible</span> for everyone 
        </h1>
        <p className="text-xl mt-4">
          Our team of experts is ready to guide you in making your website ADA
          compliant.
        </p>
          <ContactUsButton item={"Contact Our team"}/>
      </div>
    </div>
  );
};

export default AuditSection;
