import React from "react";
import Image from "next/image";
import responsive from "../../public/webchecker.png";
import codel from "../../public/pexels-markus-spiske-4439901.jpg";
import coder from "../../public/pexels-thisisengineering-3861976.jpg";
import DemoButton from "@/components/Buttons/DemoButton";
import ReavealX from "@/components/ReavealX";

const page = () => {
  return (
    <ReavealX>
      <div className="w-full h-full bg-white text-black py-24 md:py-48">
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-8 px-4 lg:px-14">
          <div className="w-full h-full flex flex-col items-start justify-center gap-4 p-4">
            <h1 className=" text-4xl font-bold text-primary">
              Automated Website Accessibility
            </h1>
            <h1 className=" text-4xl">Checker Powered by AI</h1>
            <p className="text-md">
              AccessiNor is a game-changer in web accessibility, simplifying and
              streamlining the process of becoming accessible and compliant
              using AI, machine learning, and computer vision.
            </p>
            <DemoButton
              item={"Get Demo"}
              classname={
                "flex items-center justify-center gap-1 cursor-pointer flex-nowrap bg-primary hover:bg-p-hover text-white px-6 py-1 rounded-full"
              }
            />
          </div>
          <div className="w-full flex items-center justify-center relative px-2">
            <Image
              src={responsive}
              alt="accessibility checked image"
              className="w-full sm:max-w-lg object-cover z-10"
              width={512}
              height={512}
            />
            <Image
              src={codel}
              alt="accessibility checked image"
              className="hidden md:max-w-md absolute left-7 blur-sm"
              width={512}
              height={512}
            />
            <Image
              src={coder}
              alt="accessibility checked image"
              className="hidden md:max-w-xs absolute right-7 blur-sm"
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>
    </ReavealX>
  );
};

export default page;
