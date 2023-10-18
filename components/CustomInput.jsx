import React from "react";

const CustomInput = ({ title, type, name, value, placeholder, onChange }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={title} className="sr-only">{title}</label>
      <input
        type={type}
        className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;