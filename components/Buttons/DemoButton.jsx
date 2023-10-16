"use client"
import Link from "next/link";
import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { motion } from "framer-motion";

const classtpo = "flex items-center justify-center gap-1 text-black cursor-pointer flex-nowrap hover:text-[#206e61]"

const DemoButton = ({ item, classname}) => {
  return (
    <Link href="https://web-accessibility-checker.vercel.app/dashboard/app">
      <motion.div
        className={classname}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 17 }}
      >
        <BiPlayCircle
          aria-label="Play demo"
          size={35}
          title="Play button icon"
        />
        <span className="text-md font-normal">{item}</span>
      </motion.div>
    </Link>
  );
};

export default DemoButton;
