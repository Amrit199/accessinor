import PricingTable from "@/components/PricingTable";
import ReavealX from "@/components/ReavealX";
import React from "react";

const page = () => {
  return (
      <div className="w-full bg-slate-50 text-black py-24">
        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <PricingTable />
          </div>
        </div>
      </div>
  );
};

export default page;
