import React from "react";
import aiintro from "../public/automatedai.jpg";
import Image from "next/image";
import Readmore from "./Buttons/Readmore";
import Reveal from "./Reaveal";

const AiIntro = () => {
  return (
    <Reveal>
    <div className="w-full xl:w-[80%] mx-auto flex flex-col lg:flex-row items-center px-5 gap-4 py-10">
      <div className="w-full flex items-start justify-center flex-col gap-4 px-2 lg:px-14">
        <h1 className="text-3xl">
          AI Integration for Effortless Accessibility
        </h1>
        <h1 className="text-primary text-3xl font-bold">
          Automated Accuracy Intelligence
        </h1>
        <p className="text-lg">
          Our website accessibility checker leverages the power of Artificial
          Intelligence to streamline the process of identifying and rectifying
          accessibility issues. With cutting-edge AI algorithms, we can quickly
          scan your website for potential barriers, and our intuitive reports
          provide clear, actionable insights. Millions of people with
          disabilities rely on assistive technologies to access the web, and
          your efforts can make a significant difference in their lives.
        </p>
        <Readmore item={"Read more AI integration"}/>
      </div>
      <div className="w-full flex items-center justify-center h-full">
        <Image
          src={aiintro}
          alt="accessibility checked image"
          className="object-fill"
          width={512}
          height={512}
        />
      </div>
    </div>
    </Reveal>
  );
};

export default AiIntro;
