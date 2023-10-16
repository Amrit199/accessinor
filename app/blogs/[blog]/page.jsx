"use client"

import { posts } from "@/constants";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const page = () => {
    const router = useRouter();
    const post = router.query.blog;
    const [blog, setBlog] = useState(null);
  
    console.log(post);
  
    useEffect(() => {
      if (post) {
        const fetchedPost = posts.find((blog) => blog.title === post);
        setBlog(fetchedPost);
      }
    }, [post]);
  
    if (!blog) {
      return <div className="pt-28 pb-8">Loading...</div>;
    }
    return (
      <div>
        <header className="flex items-center justify-between">
          <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
            {blog.name}
          </h1>
          <a
            href={blog.name}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
          >
            View Project
          </a>
        </header>
  
        <div className="text-lg text-gray-700 mt-5">
          <p>{post.contentTitle}</p>
        </div>
  
        <Image
          src={post.img}
          alt={post.alt}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>
    );
  };

export default page