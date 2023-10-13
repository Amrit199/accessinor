"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navbar } from "@/constants";
import DemoButton from "./Buttons/DemoButton";
import LoginButton from "./Buttons/LoginButton";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [mobile, setMobile] = useState(false);
  const menuRef = useRef(null);

  const handleMenu = () => {
    setMobile(!mobile);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobile(false);
    }
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
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleShadow);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="w-full text-black">
      <nav
        className={
          shadow
            ? "w-full shadow-lg shadow-gray-600 h-20 bg-[#ecf0f3] fixed z-[40] px-7 py-6 flex items-center justify-between"
            : "w-full h-20 bg-transparent fixed z-[40] px-7 py-6 flex items-center justify-between"
        }
      >
        <div className="basis-1/4 w-full">
          <Link
            href="/"
            className="flex items-center gap-1 cursor-pointer"
            aria-label="Navigate to homepage"
          >
            <span className="font-bold text-3xl">{navbar.logo}</span>
          </Link>
        </div>
        {/* Nav link for < 800px screen */}
        <div className="basis-2/4 w-full hidden lg:flex items-center justify-between gap-5 text-xl">
          {navbar.menus.map((menu, index) => (
            <Link
              href={`/${menu.name}`}
              key={index}
              className="hover:text-[#206e61] cursor-pointer text-[1.2rem] font-semibold"
              aria-label={`Navigate to ${menu.name} page`}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        {/* mobile menu icon > 800 screen*/}
        <div className="w-full lg:basis-1/4 flex items-center justify-end gap-6">
          <div className="hidden w-full md:flex items-center justify-end gap-4 text-lg">
            <DemoButton />
            <LoginButton />
          </div>
          <div className="flex items-center justify-center lg:hidden">
            {!mobile ? (
              <AiOutlineMenu
                onClick={handleMenu}
                size={30}
                color="black"
                aria-label="Open menu"
                className="cursor-pointer rounded-full transition-transform hover:scale-110 active:bg-slate-300"
              />
            ) : (
              <AiOutlineClose
                onClick={handleMenu}
                size={30}
                color="black"
                aria-label="Close menu"
                className="cursor-pointer rounded-full transition-transform hover:scale-110 active:bg-slate-300"
              />
            )}
          </div>
        </div>
      </nav>
      {/* mobile menu list */}
      <aside
        ref={menuRef}
        className={
          !mobile
            ? "fixed top-0 right-[-100%] w-[50%] h-full transition-all ease-in duration-500"
            : " fixed z-30 top-0 right-0 w-[50%] h-full lg:hidden bg-white transition-all ease-in duration-500"
        }
      >
        <div className="flex flex-col justify-center pt-24 pb-4 gap-14">
          <ul className="flex flex-col items-center justify-center gap-6 text-xl">
            {navbar.menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={`/${menu.name}`}
                  className="hover:text-[#206e61] cursor-pointer text-[1.2rem] font-semibold"
                  onClick={handleMenu}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-2 text-lg md:hidden">
            <DemoButton />
            <LoginButton />
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
