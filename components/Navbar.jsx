"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navbar } from "@/constants";
import DemoButton from "./Buttons/DemoButton";
import LoginButton from "./Buttons/LoginButton";
import Image from "next/image";
import logo from "../public/checked.png";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [mobile, setMobile] = useState(false);
  const menuRef = useRef(null);
  const path = usePathname();

  const handleMenu = () => {
    setMobile(!mobile);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobile(false);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const moveY = window.scrollY;
      const direction = moveY > lastScrollY ? "down" : "up";
      if (
        direction !== shadow &&
        (moveY - lastScrollY > 10 || moveY - lastScrollY < -10)
      ) {
        setShadow(direction);
      }
      lastScrollY = moveY > 0 ? moveY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.addEventListener("scroll", updateScrollDirection);
      window.addEventListener("mousedown", handleClickOutside);
    };
    // const handleShadow = () => {
    //   if (window.scrollY >= 90) {
    //     setShadow(true);
    //   } else {
    //     setShadow(false);
    //   }
    // };
    // window.addEventListener("scroll", handleShadow);

    // return () => {
    //   window.removeEventListener("scroll", handleShadow);
    //   window.removeEventListener("mousedown", handleClickOutside);
    // };
  }, [shadow]);
  return (
    <header className="w-full text-black">
      <nav
        className={`fixed ${
          shadow === "down" ? "-top-24" : "top-0"
        } w-full h-20 bg-white py-4 px-6 md:px-14 z-40 flex items-center justify-between transition-all duration-500"`}
      >
        {/* // className={
      //   shadow
      //     ? "w-full shadow-lg shadow-gray-600 h-16 bg-[#ecf0f3] fixed z-[40] px-7 py-6"
      //     : "w-full h-16 bg-transparent fixed z-[40] px-7 py-6"
      // } */}
        <div className=" w-full xl:w-[80%] mx-auto flex items-center justify-between">
          <div className="basis-1/4 w-full">
            <Link
              href="/"
              className="flex items-center gap-1"
              aria-label="Navigate to homepage"
            >
              <Image src={logo} alt="logo" className="w-8 h-8 rounded-full" />
              <span className="font-bold text-3xl">{navbar.logo}</span>
            </Link>
          </div>
          {/* Nav link for < 800px screen */}
          <div className="basis-2/4 w-full hidden lg:flex items-center justify-between gap-5 text-xl">
            {navbar.menus.map((menu, index) => (
              <Link
                href={menu.link}
                key={index}
                className={`${
                  menu.link === path
                    ? "text-primary underline decoration-primary underline-offset-4"
                    : ""
                } hover:scale-110 hover:underline hover:decoration-primary hover:underline-offset-4 text-[1.2rem] font-semibold transition-all duration-200`}
                aria-label={`Navigate to ${menu.name} page`}
              >
                {menu.name}
              </Link>
            ))}
          </div>
          {/* mobile menu icon > 800 screen*/}
          <div className="w-full lg:basis-1/4 flex items-center justify-end gap-6">
            <div className="hidden w-full md:flex items-center justify-end gap-8 text-lg">
              <DemoButton
                item={"Get Demo"}
                classname={
                  "flex items-center justify-center gap-1 text-black cursor-pointer flex-nowrap hover:text-[#206e61]"
                }
              />
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
        </div>
      </nav>
      {/* mobile menu list */}
      <aside
        ref={menuRef}
        className={
          !mobile
            ? "fixed top-0 right-[-100%] w-[50%] h-full transition-all duration-500 delay-100"
            : " fixed z-30 top-0 right-0 w-[50%] h-full lg:hidden bg-white transition-all duration-500 delay-100"
        }
      >
        <div className={!mobile ? "hidden" : "flex flex-col justify-center pt-24 pb-4 gap-14 transition-all duration-500 delay-100 "}>
          <ul className="flex flex-col items-center justify-center gap-6 text-xl">
            {navbar.menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.link}
                  className="hover:text-[#206e61] cursor-pointer text-[1.2rem] font-semibold"
                  onClick={handleMenu}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-2 text-lg md:hidden">
            <div onClick={handleMenu}>
              <DemoButton
                item={"Get Demo"}
                classname={
                  "flex items-center justify-center gap-1 text-black cursor-pointer flex-nowrap hover:text-[#206e61]"
                }
              />
            </div>
            <div onClick={handleMenu}>
              <LoginButton />
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
