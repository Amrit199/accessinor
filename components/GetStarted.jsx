"use client";
import Link from "next/link";
import React from "react";
import ContactUsButton from "./Buttons/ContactUsButton";

const GetStarted = () => {
  return (
    <div className="w-full h-screen bg-[url('/support.jpg')] bg-center bg-no-repeat bg-cover bg-fixed flex flex-col items-center justify-center text-center bg-gray-200 px-5 pt-32 lg:pt-0 gap-12">
      <div className="lg:w-[50%] mx-auto bg-white p-5 rounded-3xl flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl font-bold">
          Get Started with Accessibility Today!
        </h2>
        <p className="text-xl mt-4 mb-6">
          Don't let your website be a barrier. Let's make it accessible for all.
        </p>
        <ContactUsButton item="Get Started" />
      </div>
    </div>
  );
};

export default GetStarted;
