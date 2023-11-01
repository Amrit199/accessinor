"use client";
import BlogsCard from "@/components/BlogsCard";
import ReavealX from "@/components/ReavealX";
import config from "@/sanity.config";
import { getPosts } from "@/sanity/sanity-utils";
import React, { useEffect, useState } from "react";

const page = () => {
  const [post, setPost] = useState(null)
  useEffect(() => {
    getPosts().then((data) => {
      setPost(data)
    }).catch((error) => {
      console.log("error fetchnig posts", error)
    })
  }, [])
  return (
    <ReavealX>
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 md:gap-12 py-40">
        {post?.map((post, index) => (
          <BlogsCard key={index} post={post} />
        ))}
      </div>
    </ReavealX>
  );
};

export default page;