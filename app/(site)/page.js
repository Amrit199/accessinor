"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AuditSection from "@/components/AuditSection";
import Intro from "@/components/Intro";
import Offers from "@/components/Offers";
import AiIntro from "../../components/AiIntro";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <div className="w-full bg-white text-black">
        <HeroSection />
        <Intro />
        <AuditSection />
        <Offers />
        <AiIntro />
      </div>
    </AnimatePresence>
  );
}
