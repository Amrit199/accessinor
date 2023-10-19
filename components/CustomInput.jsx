"use client";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const CustomInput = ({
  title,
  type,
  name,
  value,
  placeholder,
  onChange,
  redStar,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col items-start justify-center gap-1">
      <label htmlFor={title}>
        {title}
        {redStar && redStar.length > 0 && (
          <span className="text-red-700">{redStar}</span>
        )}
      </label>
      {type === "password" ? (
        <div className="w-full relative">
          <input
            type={showPassword ? "text" : type}
            className="rounded-md w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
      ) : (
        <input
          type={type}
          className="rounded-md w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default CustomInput;
