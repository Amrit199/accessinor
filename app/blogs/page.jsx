"use client";
import BlodCard from "@/components/BlodCard";
import ReavealX from "@/components/ReavealX";
import { posts } from "@/constants";
import React from "react";

const page = () => {
  return (
    <ReavealX>
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 py-40">
        {posts.map((post, index) => (
          <BlodCard key={index} post={post} />
        ))}
      </div>
    </ReavealX>
  );
};

export default page;
