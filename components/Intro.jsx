"use client"
import React from 'react'
import ContactUsButton from './Buttons/ContactUsButton'
import Readmore from './Buttons/Readmore'

const Intro = () => {
  return (
    <div className="w-full h-screen px-5 pt-32 lg:pt-0 border-t-[2px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold">Why Accessinor?</h1>
        <p className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto text-center text-xl">
        AccessiNor is proud to introduce our primary offering, a comprehensive web accessibility checker. This innovative product has been carefully designed to assist website owners and developers in ensuring compliance with both web accessibility standards and the stringent regulations set by the Norwegian government. Our web accessibility checker goes beyond standard compliance checks by incorporating user experience and design considerations, with the ultimate aim of making the web more inclusive for all users
        </p>
        <Readmore item={"Read more about Accessinor here"} />
      </div>
    </div>
  )
}

export default Intro