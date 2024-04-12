import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/checked.png";

const website = [
  { name: "Personvernerklæring", url: "/" },
  { name: "Retningslinjer for informasjonskapsler", url: "/" },
  { name: "Om oss", url: "/" },
  { name: "Kontakt oss", url: "/" },
];

const follow = [
  { name: "Facebook", icon: BiLogoFacebook },
  { name: "Twitter", icon: BiLogoTwitter },
  { name: "Instagram", icon: BiLogoInstagramAlt },
  { name: "LinkedIn", icon: BiLogoLinkedinSquare },
];

const Footer = () => {
  return (
    <div className="w-full p-12 bg-gray-900 text-white">
      <div className="w-full h-full xl:w-[80%] mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-6">
          <div className="basis-2/4 my-auto flex items-center justify-start gap-2">
            <Image src={logo} alt="logo" className="w-8 h-8 rounded-full" />
            <span className="font-bold text-3xl">AccessiNor</span>
          </div>
          <div className="basis-1/4 px-3 flex flex-col gap-6">
            <h4 className="text-[#7fafb1] text-xl">følg oss</h4>
            <div className="flex flex-col items-start gap-2">
              {follow.map((item, index) => (
                <Link key={index} href="/" className="group">
                  <div className="flex items-center space-x-2 text-base">
                    <item.icon className="group-hover:scale-125 group-hover:text-blue-600 transition-all delay-150 duration-300" />
                    <span className="relative z-10">{item.name}</span>
                  </div>
                  <div className="bottom-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
          <div className="basis-1/4 px-3 flex flex-col gap-6">
            <h4 className="text-[#7fafb1] text-xl">Nettsted</h4>
            <div className="flex flex-col items-start gap-2">
              {website.map((item, index) => (
                <Link href={item.url} key={index} className="group">
                  {item.name}
                  <div className="bottom-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="flex items-center text-sm font-titleFont gap-1 self-center">
          <AiOutlineCopyrightCircle className="mt-[1px]" />
          AccessiNor || alle rettigheter forbeholdes. &copy; 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
