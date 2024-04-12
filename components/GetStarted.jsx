"use client";
import Link from "next/link";
import React from "react";
import ContactUsButton from "./Buttons/ContactUsButton";
import Reveal from "./Reaveal";

const GetStarted = () => {
  return (
    <div className="w-full h-full bg-primary flex flex-col items-center justify-center py-16 lg:py-32">
      <div className="w-[95%] md:w-[85%] lg:w-[70%] xl:w-[40%] mx-auto bg-white p-14 lg:p-10 rounded-3xl flex flex-col items-center justify-center gap-5">
        <div>
          <h2 className="text-2xl font-bold">
            Kom i gang med tilgjengelighet i dag!
          </h2>
          <p className="text-xl mt-4 mb-6">
            Ikke la nettstedet ditt være en barriere. La oss gjøre det
            tilgjengelig for alle.
          </p>
        </div>
        <ContactUsButton item="Kom i gang" />
      </div>
    </div>
  );
};

export default GetStarted;
