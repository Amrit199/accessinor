"use client";
import React, { useState } from "react";
import webchecker from "../public/webchecker.png";
import Reveal from "./Reaveal";
import Image from "next/image";

const AccessibilityCheck = () => {
  const [websiteLink, setWebsiteLink] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!websiteLink) {
      setError("Nettstedets lenke er påkrevd.");
      return;
    }
    console.log(`Submitting website link: ${websiteLink}`);
    // Add your code to submit the website link here
  };
  return (
    <div className="w-full relative h-full px-10 py-16 lg:py-40">
      <div className="isolate bg-white">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu blur-2xl sm:top-[8rem] overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[-15deg] bg-gradient-to-tr from-primary to-p-hover opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-12 text-primary">
          <div className="w-full">
            <Reveal>
              <Image
                src={webchecker}
                alt="accessibility checked image"
                aria-label="hand pointing to accessible icons"
                className="w-full md:w-[50%] mx-auto lg:w-full"
              />
            </Reveal>
          </div>
          <div className=" w-full flex flex-col items-center justify-center gap-6 text-center">
            <Reveal>
              <h1 className="text-3xl font-bold">
                Sjekk nettstedet ditt for tilgjengelighetsproblemer!
              </h1>
            </Reveal>
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center justify-center gap-4"
                aria-labelledby="form-heading"
              >
                <p id="form-heading" className="text-xl mt-4">
                  Finn ut om nettstedet ditt er inkluderende og tilgjengelig for
                  alle
                </p>
                <label htmlFor="website-link-input" className="sr-only">
                  Nettstedets lenke
                </label>
                <input
                  id="website-link-input"
                  type="text"
                  placeholder="Skriv inn lenken til nettstedet ditt f.eks. https://www.google.com/"
                  value={websiteLink}
                  onChange={(e) => {
                    setWebsiteLink(e.target.value);
                    setError(null);
                  }}
                  className="w-full text-lg border-gray-500 border-2 px-4 py-3 rounded-lg"
                  aria-invalid={error ? "true" : "false"}
                />
                {error && (
                  <p className="text-red-600" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="text-white bg-gray-800 rounded-lg px-10 py-3 text-xl font-semibold"
                >
                  Sjekk nå
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
    //
  );
};

export default AccessibilityCheck;
