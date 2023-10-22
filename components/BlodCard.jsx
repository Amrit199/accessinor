import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlodCard = ({ post }) => {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <div className="w-full group flex max-w-xl flex-col items-start gap-2">
        <div className="w-full overflow-hidden rounded-2xl">
          <Image
            width={380}
            height={350}
            src={post.img}
            alt={post.alt}
            className="w-full h-full object-cover duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {post.tags.map((tag, index) => (
            <p
              key={index}
              className="w-fit rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {tag}
            </p>
          ))}
        </div>
        <h1 className="text-lg font-semibold leading-6 text-gray-900 px-2">
          {post.title}
        </h1>
      </div>
    </Link>
  );
};

export default BlodCard;
