import GetStarted from "@/components/GetStarted";
import Offers from "@/components/Offers";
import ServiceCard from "@/components/ServcieCard";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full bg-white text-black py-10 px-5">
      <ServiceCard />
      <Offers />
    </div>
  );
};

export default page;
