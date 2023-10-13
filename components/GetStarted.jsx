"use client";
import Link from "next/link";
import React from "react";
import ContactUsButton from "./Buttons/ContactUsButton";

const GetStarted = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 py-16">
      <div className="w-[95%] lg:w-[70%] mx-auto bg-white p-14 lg:p-10 rounded-3xl flex flex-col items-center justify-center gap-5">
        <div>
        <h2 className="text-3xl font-bold">
          Get Started with Accessibility Today!
        </h2>
        <p className="text-xl mt-4 mb-6">
          Don't let your website be a barrier. Let's make it accessible for all.
        </p>
        </div>
        <ContactUsButton item="Get Started" />
      </div>
    </div>
  );
};

export default GetStarted;
