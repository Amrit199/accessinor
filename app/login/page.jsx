"use client";
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
    if ((formData.email, formData.password == "")) {
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
    <div className="w-full h-full text-black py-24 md:py-48">
      <div className=" w-[30rem] mx-auto flex flex-col justify-center items-center gap-4">
        <LoginHeader
          heading="Login to your account"
          paragraph="Don't have an account yet?"
          linkName="Register Now"
          linkUrl="/signup"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-center gap-6 px-6"
        >
          <CustomInput
            title="Email address"
            type="email"
            name="email"
            redStar="*"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <CustomInput
            title="Password"
            type="password"
            name="password"
            redStar="*"
            placeholder="Password"
            value={formData.name}
            onChange={handleChange}
          />
          <button className="w-full py-2 bg-primary hover:bg-primary/80 hover:text-black text-white rounded-lg text-lg font-bold">
            Login
          </button>
          <div className="w-full flex items-center justify-between ">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-primary"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
