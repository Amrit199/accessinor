"use client";
import { serciser } from "@/constants";
import Image from "next/image";
import React from "react";
import Readmore from "./Buttons/Readmore";
import { GrServices } from "react-icons/gr";
import Reveal from "./Reaveal";

const Offers = () => {
  return (
    <div className="w-full md:w-[85%] lg:w-[90%] mx-auto h-full">
      <div className="flex flex-col items-center justify-center gap-14 py-16 lg:py-24">
        <div className="flex flex-col items-start justify-center gap-4 px-4 lg:px-10">
          <h3 className="flex text-3xl lg:text-4xl items-center justify-center gap-3 flex-wrap">
            <span className="text-blue-700 font-bold text-4xl lg:text-5xl">
              AccessiNor
            </span>{" "}
            Solutions
            <GrServices />
          </h3>
          <p className="text-xl">
            Empower your website's accessibility with our specialized services,
            designed to cater to every web accessibility need
          </p>
        </div>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
            {serciser.map((item) => (
              <div
                key={item.name}
                className="w-full h-full lg:h-[28rem] pt-16 lg:pt-0 rounded-3xl relative overflow-hidden group/img"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  className="absolute top-0 left-0 h-full w-full object-cover rounded-3xl brightness-[0.4] transform group-hover/img:scale-125 transition-all duration-300 delay-150"
                />
                <div className="relative w-full h-full z-10 text-white p-6 flex flex-col items-start justify-end gap-5">
                  <h3 className="text-3xl font-bold">{item.name}</h3>
                  <p className="text-lg">{item.desc}</p>
                  <Readmore item={"Learn more"} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Offers;
