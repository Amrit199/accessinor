"use client";
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useEffect, useState } from "react";

const SampleImageComonent = ({ value, isInLine }) => {
  const { width, height } = getImageDimensions(value);
  const imageUrl = urlBuilder({ projectId: process.env.REACT_APP_PROJECT_KEY, dataset: process.env.REACT_APP_DATASET_KEY })
    .image(value)
    .width(isInLine ? 100 : 800)
    .fit("max")
    .auto("format")
    .url();
  return (
    <div className="rounded-lg w-full sm:w-[80%] lg:w-[50%] mx-auto self-center">
      <Image
        src={imageUrl}
        alt={value.alt || " "}
        width={width}
        height={height}
        loading="lazy"
        layout="responsive"
      />
    </div>
  );
};

export default function Page({ params }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPost(params.slug);
      setBlog(post);
    };
    fetchData();
  }, [params.slug]);

  const components = {
    types: {
      image: SampleImageComonent,
    },
    block: {
      h2: ({children}) => <h2 className="text-xl md:text-2xl font-bold">{children}</h2>,
      normal: ({children}) => <normal className="text-base md:text-lg">{children}</normal>,
    }
  };

  if (!blog) {
    return <div className="pt-28 pb-8">Loading...</div>;
  }
  return (
    <div className="w-full pt-24 pb-6 text-black bg-slate-50">
      <div className="bg-green-200">
        <div className="w-full lg:w-[70%] mx-auto p-8 md:p-16">
        <h2 className="text-2xl md:text-5xl font-bold">{blog.title}</h2>
        </div>
      </div>
      <div className="w-full lg:w-[70%] mx-auto p-8 md:p-16 flex flex-col items-start justify-start gap-5">
        <p>{blog.intro}</p>
        <Image
          width={380}
          height={350}
          src={blog.mainImage}
          className="rounded-lg w-full sm:w-[80%] mx-auto self-center"
          alt={blog.mainImagealt}
        />
        <PortableText value={blog.body} components={components} />
      </div>
    </div>
  );
}
