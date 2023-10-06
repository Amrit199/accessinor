"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navbar } from "@/constants";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleMenu = () => {
    setMobile(!mobile);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div className="w-full text-black">
      <div
        className={
          shadow
            ? "w-full shadow-lg shadow-gray-600 h-20 bg-[#ecf0f3] fixed z-[40] px-7 py-6 flex items-center justify-between"
            : "w-full h-20 bg-white fixed z-[40] px-7 py-6 flex items-center justify-between"
        }
      >
        <div className="w-full">
          <Link className="flex items-center gap-1 cursor-pointer" href="/">
            <h1 className="font-bold text-3xl">{navbar.logo}</h1>
          </Link>
        </div>
        {/* Nav link for < 800px screen */}
        <div className="w-full hidden lg:flex items-center justify-between gap-3 text-xl">
          {navbar.menus.map((menu, index) => (
            <Link
              href={`/${menu.name}`}
              key={index}
              className="hover:text-[#206e61] cursor-pointer uppercase text-base font-bold"
            >
              {menu.name}
            </Link>
          ))}
        </div>
        {/* mobile menu icon > 800 screen*/}
        <div className="w-full flex justify-end lg:hidden">
          {!mobile ? (
            <AiOutlineMenu
              onClick={handleMenu}
              size={30}
              color="black"
              className="cursor-pointer rounded-full transition-transform hover:scale-110 active:bg-slate-300"
            />
          ) : (
            <AiOutlineClose
              onClick={handleMenu}
              size={30}
              color="black"
              className="cursor-pointer rounded-full transition-transform hover:scale-110 active:bg-slate-300"
            />
          )}
        </div>
        <div className="hidden w-full lg:flex justify-end gap-8 text-lg">
          <div className="flex items-center gap-1 text-black hover:text-[#206e61] cursor-pointer">
            <BiPlayCircle size={35} title="Play button icon" />
            <p className="text-md font-normal">{navbar.demo}</p>
          </div>

          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-400 text-white rounded-lg px-3 py-2">
              {navbar.button}
            </button>
          </Link>
        </div>
      </div>
      {/* mobile menu list */}
      <div
        className={
          !mobile
            ? "fixed top-0 right-[-100%] w-[50%] h-full transition-all ease-in duration-500"
            : " fixed z-30 top-0 right-0 w-[50%] h-full lg:hidden bg-white transition-all ease-in duration-500"
        }
      >
        <div className="flex flex-col justify-center pt-24 pb-4 gap-14">
          <div className="flex flex-col items-center justify-center gap-6 text-xl">
            {navbar.menus.map((menu, index) => (
              <Link
                href={`/${menu.name}`}
                key={index}
                className="hover:text-[#206e61] cursor-pointer text-[1.2rem] font-semibold"
                onClick={handleMenu}
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-lg">
            <div className="flex items-center justify-center gap-1 text-black hover:text-[#206e61] cursor-pointer">
              <BiPlayCircle size={35} title="Play button icon" />
              <p className="text-md font-normal">Get Demo</p>
            </div>
            <div>
            <button className="uppercase bg-[#389f8e] text-white hover:bg-[#206e61] text-sm px-20 py-2 font-semibold rounded-full transition-all duration-300 active:bg-yellow-600">
              LOGIN
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
