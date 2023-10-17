'use client'

import GetStarted from "@/components/GetStarted"
import { posts } from "@/constants"
import Image from "next/image"
import { useEffect, useState } from "react"

const Page = ({ params }) => {
  const post = params.slug
  const [blog, setBlog] = useState(null)
  console.log(post)
  useEffect(() => {
    if(post) {
      const fetchedPost = posts.find((blog) => blog.slug == post);
      setBlog(fetchedPost);
    }
  }, [post])

  if (!blog) {
    return <div className="pt-28 pb-8">Loading...</div>;
  }
    return (
      <div className="w-full pt-24 pb-6 text-black bg-slate-50">
        <div className="w-full bg-green-200 p-8 md:p-16">
          <h2 className="text-2xl md:text-5xl font-bold">{blog.title}</h2>
          <div className="flex items-center justify-start gap-4 mt-4 md:mt-8">
          {blog.tags.map((tag, index) => (
            <span key={index} className="bg-green-900 text-white px-3 py-1 rounded-xl md:text-lg">{tag}</span>
          ))}
          </div>
        </div>
        <div className="w-full p-8 md:p-16 lg:px-24 flex flex-col items-start justify-start gap-5">
          <p>{blog.intro}</p>
          <Image
            src={blog.img}
            className="rounded-lg w-auto md:max-w-2xl self-center"
            alt={blog.alt}
          />
          <h3 className="text-xl font-bold">{blog.contentTitle}</h3>
          <p>{blog.contentdesc}</p>
          <h3 className="text-xl font-bold">{blog.contentTitle1}</h3>
          <p>{blog.contentdesc1}</p>
        </div>
        <GetStarted />
    </div>
    )
  }

export default Page