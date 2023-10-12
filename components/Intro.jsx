"use client";
import React from "react";
import ContactUsButton from "./Buttons/ContactUsButton";
import Readmore from "./Buttons/Readmore";

const Intro = () => {
  return (
    <div className="w-full h-screen lg:bg-[url('/desktop.jpg')] bg-center bg-no-repeat bg-cover bg-local px-5 pt-32 lg:pt-0 border-t-[2px] flex flex-col items-center justify-center">
      <div className="w-full h-full relative text-center">
        <div className="lg:absolute w-full md:w-[70%] lg:w-[50%] mx-auto bg-white rounded-3xl px-2 py-3 lg:py-6 lg:top-1/4 lg:right-1/2 lg:transform lg:translate-x-1/2 lg:-translate-y-1/4 flex flex-col items-center justify-center gap-10">
          <h1 className="text-4xl font-bold text-[#76c3d0]">Why Accessinor?</h1>
          <p className="text-xl">
            AccessiNor is proud to introduce our primary offering, a
            comprehensive web accessibility checker. This innovative product has
            been carefully designed to assist website owners and developers in
            ensuring compliance with both web accessibility standards and the
            stringent regulations set by the Norwegian government. Our web
            accessibility checker goes beyond standard compliance checks by
            incorporating user experience and design considerations, with the
            ultimate aim of making the web more inclusive for all users
          </p>
          <Readmore item={"Read more about Accessinor here"} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
