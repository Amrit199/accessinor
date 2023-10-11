import React from "react";
import Link from "next/link";
import DemoButton from "@/components/Buttons/DemoButton";
import Image from "next/image";
import accessibility from "../public/webchecker.png";
import HeroSection from "@/components/HeroSection";
import AuditSection from "@/components/AuditSection";
import Intro from "@/components/Intro";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <div className="w-full bg-white text-black">
      {/* hero section */}
      <HeroSection />
      <Intro />
      <AuditSection />
      <GetStarted />
    </div>
  );
}
