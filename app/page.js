"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AuditSection from "@/components/AuditSection";
import Intro from "@/components/Intro";
import GetStarted from "@/components/GetStarted";
import Reaveal from "@/components/Reaveal";
import Offers from "@/components/Offers";

export default function Home() {
  return (
    <div className="w-full bg-white text-black">
      <HeroSection />
      <Intro />
      <AuditSection />
      <Offers />
      <GetStarted />
    </div>
  );
}
