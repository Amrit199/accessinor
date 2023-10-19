"use client";
import CustomInput from "@/components/CustomInput";
import LoginHeader from "@/components/LoginHeader";
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
  console.log(countries)
  return (
    <div className="w-full h-full text-black py-24 md:py-48">
      <div className="w-[30rem] mx-auto flex flex-col items-center justify-center gap-6">
        <LoginHeader
          heading="Create a new account"
          paragraph="Already have an account?"
          linkName="Log in"
          linkUrl="/login"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-center gap-6 px-6"
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
          <div className="w-full flex items-center justify-center">
            <div className="w-full flex flex-col items-start justify-center gap-1">
              <label htmlFor="Code">Country Code:</label>
              <select
                className="rounded-md w-40 overflow-hidden px-3 py-2 border-2 border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                id="country-code"
              >
                {countries.map((country, index) => (
                  <option key={index}>
                    {country.name.common}({country.idd.root}
                    {country.idd.suffixes[0]})
                  </option>
                ))}
              </select>
            </div>
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
        </form>
      </div>
    </div>
  );
};

export default page;
