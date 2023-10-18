"use client"
import CustomInput from "@/components/CustomInput";
import LoginHeader from "@/components/LoginHeader";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (formData.email,
      formData.password == "")
    ) {
      alert("Please Fill out all the details");
      // return setError(!error)
    } else {
      alert("Thank you, your message has been sent");
      setFormData({
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className="w-full h-full bg-white text-black py-24 md:py-48">
      <div className=" w-[90%] md:w-[80%] md:py-9 lg:w-[50%] lg:p-12 mx-auto bg-slate-200 p-6 rounded-lg">
        <LoginHeader
          heading="Login to your account"
          paragraph="Don't have an account yet?"
          linkName="Register Now"
          linkUrl="/signup"
        />
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-start justify-center gap-3">
        <CustomInput
          title="Email"
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <CustomInput
          title="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.name}
          onChange={handleChange}
        />
        <button className="px-6 py-2 bg-[#7fafb1] rounded-lg text-lg font-bold">
          Login
        </button>
        </form>
      </div>
    </div>
  );
};

export default page;
