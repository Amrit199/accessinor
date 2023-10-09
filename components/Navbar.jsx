"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navbar } from "@/constants";
import DemoButton from "./DemoButton";

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
            : "w-full h-20 bg-white fixed z-[40] px-7 py-6 flex items-center justify-between"
        }
      >
        <div className="w-full">
          <Link
            href="/"
            className="flex items-center gap-1 cursor-pointer"
            aria-label="Navigate to homepage"
          >
            <span className="font-bold text-3xl">{navbar.logo}</span>
          </Link>
        </div>
        {/* Nav link for < 800px screen */}
        <div className="w-full hidden lg:flex items-center justify-between gap-3 text-xl">
          {navbar.menus.map((menu, index) => (
            <Link
              href={`/${menu.name}`}
              key={index}
              className="hover:text-[#206e61] cursor-pointer uppercase text-base font-bold"
              aria-label={`Navigate to ${menu.name} page`}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        {/* mobile menu icon > 800 screen*/}

        <div className="hidden w-full md:flex justify-end gap-8 text-lg">
          <DemoButton />

          <Link href="/login">
            <button
              aria-label="Navigate to login page"
              className="bg-blue-600 hover:bg-blue-400 text-white rounded-lg px-3 py-2"
            >
              {navbar.button}
            </button>
          </Link>
        </div>
        <div className="w-full flex justify-end lg:hidden">
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
            <div>
              <button className="uppercase bg-[#389f8e] text-white hover:bg-[#206e61] text-sm px-20 py-2 font-semibold rounded-full transition-all duration-300 active:bg-yellow-600">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
