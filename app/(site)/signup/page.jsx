"use client";
import CustomInput from "@/components/CustomInput";
import LoginHeader from "@/components/LoginHeader";
import Reveal from "@/components/Reaveal";
import React, { useState } from "react";
import countries from "world-countries";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    password: "",
    phone: "",
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
        name: "",
        business: "",
        email: "",
        password: "",
        phone: "",
      });
    }
  };
  return (
    <div className="w-full h-full text-black py-24 md:py-28">
      <div className="w-full min-[500px]:w-[30rem] mx-auto flex flex-col items-center justify-center gap-3">
        <Reveal>
        <LoginHeader
          heading="Create a new account"
          paragraph="Already have an account?"
          linkName="Log in"
          linkUrl="/login"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-center gap-6 px-6 text-xs min-[350px]:text-sm md:text-base"
        >
          <CustomInput
            title="Full name"
            type="text"
            name="name"
            redStar="*"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
          <CustomInput
            title="Business name"
            type="text"
            name="Business name"
            placeholder="Enter your company name"
            value={formData.business}
            onChange={handleChange}
          />
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
          <div className="w-full flex flex-col min-[350px]:flex-row items-center justify-center gap-2">
            <div className="w-[8rem] flex flex-col items-start justify-center gap-1">
              <label htmlFor="Code">Country Code:</label>
              <select
                className="rounded-md w-[8rem] overflow-hidden p-2 border-2 border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                id="country-code"
              >
                {countries.map((country, index) => (
                  <option key={index}>
                    ({country.idd.root}
                    {country.idd.suffixes[0]})
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
            <CustomInput
              title="Phone Number"
              type="text"
              name="Phone Number"
              redStar="*"
              placeholder="Enter your phone or mobile number"
              value={formData.phone}
              onChange={handleChange}
            />
            </div>
          </div>

          {/* Terms and Privacy */}
          <div className="text-sm flex items-center justify-center flex-wrap">
            By signing up, you agree to the accessiBe's
            <a href="#" className="text-green-600 px-2">
              terms of service
            </a>
            and
            <a href="#" className="text-green-600 px-2">
              privacy policy
            </a>
          </div>

          <button className="w-full py-2 bg-primary hover:bg-primary/80 hover:text-black text-white rounded-lg text-lg font-bold">
            Login
          </button>
        </form>
        </Reveal>
      </div>
    </div>
  );
};

export default page;
