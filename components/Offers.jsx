"use client";
import { serciser } from "@/constants";
import Image from "next/image";
import React from "react";
import Readmore from "./Buttons/Readmore";

const Offers = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div>
        <h3>AccessiNor Solutions</h3>
        <p>
          Empower your website's accessibility with our specialized services,
          designed to cater to every web accessibility need
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
        {serciser.map((item) => (
          <div key={item.name} className="w-full h-[28rem] rounded-3xl relative overflow-hidden group/img">
            <Image
              src={item.img}
              alt={item.alt}
              className="absolute top-0 left-0 h-full w-full object-cover rounded-3xl brightness-50 transform group-hover/img:scale-125 transition-all duration-300 delay-150"
            />
            <div className="relative w-full h-full z-10 text-white p-6 flex flex-col items-start justify-end gap-5">
              <h3 className="text-3xl font-bold">{item.name}</h3>
              <p className="text-lg">{item.desc}</p>
              <Readmore item={"Learn more"} />
            </div>
        </div>
        ))}
    </div>
    </div>
  );
};

export default Offers;
