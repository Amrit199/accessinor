"use client"
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
      <div className="w-[30rem] mx-auto flex flex-col items-center justify-center gap-6">
        <LoginHeader
          heading="Create a new account"
          paragraph="Already have an account?"
          linkName="Log in"
          linkUrl="/login"
        />
        <form onSubmit={handleSubmit}
         className="w-full flex flex-col items-center justify-center gap-6 px-6">
            
        </form>
      </div>
    </div>
  );
};

export default page;
