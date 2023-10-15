"use client"
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const LoginButton = () => {
  return (
    <Link href="/login">
      <motion.button
        aria-label="Navigate to login page"
        className="bg-blue-700 text-white font-bold rounded-full md:rounded-xl px-12 md:px-3 py-1"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 17 }}
      >
        Login
      </motion.button>
    </Link>
  );
};

export default LoginButton;
