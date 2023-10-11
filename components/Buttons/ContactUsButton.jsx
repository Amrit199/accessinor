"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const ContactUsButton = ({ item }) => {
  return (
    <Link href="/login">
      <motion.button
        aria-label="Navigate to login page"
        className="bg-white font-bold rounded-full px-12 py-2 uppercase border-black border-[1px]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 17 }}
      >
        {item}
      </motion.button>
    </Link>
  )
}

export default ContactUsButton