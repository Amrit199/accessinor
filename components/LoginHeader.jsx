import React from "react";
import Link from "next/link";
import { RiLoginBoxLine } from "react-icons/ri";

const LoginHeader = ({ heading, paragraph, linkUrl, linkName }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <RiLoginBoxLine
          className="h-14 w-14 text-[#389f8e]"
          aria-hidden="true"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mb-5">
        {paragraph}{" "}
        <Link
          href={linkUrl}
          className="font-medium text-[#389f8e] hover:text-[#206e61]"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default LoginHeader;
