import Link from "next/link";
import React from "react";
import { BiPlayCircle } from "react-icons/bi";

const DemoButton = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-1 text-black hover:text-blue-900 cursor-pointer">
      <BiPlayCircle aria-label="Play demo" size={35} title="Play button icon" />
      <span className="text-md font-normal">Get Demo</span>
    </Link>
  );
};

export default DemoButton;
