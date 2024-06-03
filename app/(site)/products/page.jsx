import React from "react";
import Image from "next/image";
import responsive from "../../../public/webchecker.png";
import DemoButton from "@/components/Buttons/DemoButton";
import ReavealX from "@/components/ReavealX";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <ReavealX>
        <section className="w-full h-full bg-white text-black py-24 md:py-48">
          <div className="w-full h-full xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-20 lg:gap-8 px-4 lg:px-14">
            {/* accessibility checker */}
            <div className="w-full max-h-96 flex flex-col items-start justify-center gap-4 p-4 bg-slate-100 rounded-2xl">
              <h1 className="text-2xl md:text-4xl font-bold text-primary">
                AI-Powered Automated Accessibility Checker
              </h1>
              <p className="text-md">
                AccessiNor revolutionizes web accessibility by leveraging AI,
                machine learning, and computer vision to simplify and expedite
                the process of achieving accessibility and compliance.
              </p>
              <DemoButton
                item={"Get Demo"}
                classname={
                  "flex items-center justify-center gap-1 cursor-pointer flex-nowrap bg-primary hover:bg-p-hover text-white px-6 py-1 rounded-full"
                }
              />
            </div>
            {/* color contrast checker */}
            <div className="w-full max-h-96 flex flex-col items-start justify-center gap-4 p-4 bg-primary rounded-2xl">
              <h1 className=" text-2xl md:text-4xl font-bold text-white">
                Color Contrast Checker for WCAG Compliance
              </h1>
              <p className="text-md text-white">
                When the hues of a webpage's background closely resemble those
                of text and interface components, certain users might encounter
                challenges in comprehending and navigating through your online
                platform.
              </p>
              <Link href={`/products/contrastchecker`}>
                <button className="flex items-center justify-center gap-1 cursor-pointer flex-nowrap bg-white text-p-hover px-6 py-2 rounded-full transition-all hover:scale-110">
                  skjekk nå
                </button>
              </Link>
            </div>
          </div>
        </section>
      </ReavealX>
    </div>
  );
};

export default page;
