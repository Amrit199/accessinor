import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Readmore = ({ item, link }) => {
  return (
    <div className="relative inline-block text-xl">
      <Link href={link} className="group">
        <div className="flex items-center space-x-2">
          <span className="relative z-10">{item}</span>
          <AiOutlineArrowRight className="group-hover:translate-x-1 group-hover:text-blue-600 transition-all delay-150 duration-300" />
        </div>
        <div className="bottom-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
      </Link>
    </div>
  );
};

export default Readmore;
