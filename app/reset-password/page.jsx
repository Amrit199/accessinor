"use client";
import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowLeftSLine } from 'react-icons/ri'

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full h-full text-black py-24 md:py-28">
      <div className="w-full min-[500px]:w-[30rem] mx-auto flex flex-col items-start justify-center gap-3 px-4">
        <h2 className="mt-6 text-center text-xl sm:text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 mb-5">
          <Link
            href="/login"
            className="font-medium text-primary hover:text-black flex items-center"
          >
            <RiArrowLeftSLine size={35} />
            Go back to login
          </Link>
          </p>
          <CustomInput
            title="Email address"
            type="email"
            name="email"
            redStar="*"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
      </div>
    </div>
  );
};

export default page;
