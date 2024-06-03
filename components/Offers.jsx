"use client";
import { serciser } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Readmore from "./Buttons/Readmore";
import { GrServices } from "react-icons/gr";
import Reveal from "./Reaveal";
import { getServices } from "@/sanity/sanity-utils";

const Offers = () => {
  const [service, setService] = useState(null);
  useEffect(() => {
    getServices()
      .then((data) => {
        setService(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);
  return (
    <div className="w-full md:w-[90%] xl:w-[80%] 2xl:w-[70%]  mx-auto h-full">
      <div className="flex flex-col items-center justify-center gap-14 py-16 lg:py-32">
        <div className="flex flex-col items-start justify-center gap-4 px-4 lg:px-10">
          <h2 className="flex text-3xl lg:text-4xl items-center justify-center gap-3 flex-wrap">
            <span className="text-primary font-bold text-3xl lg:text-4xl">
              AccessiNor
            </span>{" "}
            Løsninger
            <GrServices />
          </h2>
          <p className="text-xl">
            Styrk nettstedets tilgjengelighet med våre spesialiserte tjenester,
            designet for å imøtekomme alle netttilgjengelighetsbehov
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
          {service?.map((item, index) => (
            <Reveal key={index}>
              <div className="w-full h-full lg:h-[28rem] pt-16 lg:pt-0 rounded-3xl relative overflow-hidden group/img">
                <Image
                  width={380}
                  height={350}
                  src={item.image}
                  alt={item.alt}
                  aria-label={item.alt}
                  className="absolute top-0 left-0 h-full w-full object-cover rounded-3xl brightness-[0.4] transform group-hover/img:scale-125 transition-all duration-300 delay-150"
                />
                <div className="relative w-full h-full z-10 text-white p-6 flex flex-col items-start justify-end gap-5">
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-lg">{item.intro}</p>
                  <Readmore
                    item={"Learn more"}
                    link={`/services/${item.slug}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
