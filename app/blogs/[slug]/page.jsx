"use client";
// import { getPost } from "@/sanity/sanity-utils";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";

// const serilaizers = {
//   types: {
//     image: (props) => {
//       return (
//         <Image
//           src={props.node.asset.url}
//           alt={props.node.alt}
//           width={props.node.asset.metadata.dimensions.width}
//           height={props.node.asset.metadata.dimensions.height}
//         />
//       );
//     },
//   },
// };

// export default async function Page({ params }) {
//   const slug = params.slug;
//   const blog = await getPost(slug);

//   if (!blog) {
//     return <div className="pt-28 pb-8">Loading...</div>;
//   }
//   return (
//     <div className="w-full pt-24 pb-6 text-black bg-slate-50">
//       <div className="w-full bg-green-200 p-8 md:p-16">
//         <h2 className="text-2xl md:text-5xl font-bold">{blog.title}</h2>
//       </div>
//       <div className="w-full p-8 md:p-16 lg:px-24 flex flex-col items-start justify-start gap-5">
//         <p>{blog.intro}</p>
//         <Image
//           width={380}
//           height={350}
//           src={blog.mainImage}
//           className="rounded-lg w-auto md:max-w-2xl self-center"
//           alt={blog.mainImagealt}
//         />
//       </div>
//       <PortableText value={blog.body} serializers={serilaizers}/>
//     </div>
//   );
// }

import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function BlogPage({ blog }) {
  if (!blog) {
    return <div className="pt-28 pb-8">Loading...</div>;
  }

  return (
    <div className="w-full pt-24 pb-6 text-black bg-slate-50">
      <div className="w-full bg-green-200 p-8 md:p-16">
        <h2 className="text-2xl md:text-5xl font-bold">{blog.title}</h2>
      </div>
      <div className="w-full p-8 md:p-16 lg:px-24 flex flex-col items-start justify-start gap-5">
        <p>{blog.intro}</p>
        <Image
          width={380}
          height={350}
          src={blog.mainImage}
          className="rounded-lg w-auto md:max-w-2xl self-center"
          alt={blog.mainImagealt}
        />
      </div>
      <PortableText value={blog.body} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const blog = await getPost(params.slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  // Fetch all the slugs of your posts from Sanity
  // Replace this with your actual logic
  const allSlugs = await getAllPostSlugs();
  const paths = allSlugs.map(slug => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}


// import { useEffect, useState } from "react"

// const Page = ({ params }) => {
//   const post = params.slug
//   const blog = getPost(post)
//   // const [blog, setBlog] = useState(null)
//   console.log(blog)
//   // useEffect(() => {
//   //   if(post) {
//   //     const fetchedPost = posts.find((blog) => blog.slug == post);
//   //     setBlog(fetchedPost)
//   //   }
//   // }, [post])

//   if (!blog) {
//     return <div className="pt-28 pb-8">Loading...</div>;
//   }
//     return (
//       <div className="w-full pt-24 pb-6 text-black bg-slate-50">
//         <div className="w-full bg-green-200 p-8 md:p-16">
//           <h2 className="text-2xl md:text-5xl font-bold">{blog.title}</h2>
//           {/* <div className="flex items-center justify-start gap-4 mt-4 md:mt-8">
//           {blog.body.map((tag, index) => (
//             <span key={index} className="bg-green-900 text-white px-3 py-1 rounded-xl md:text-lg">{tag}</span>
//           ))}
//           </div> */}
//         </div>
//         <div className="w-full p-8 md:p-16 lg:px-24 flex flex-col items-start justify-start gap-5">
//           <p>{blog.intro}</p>
//           <Image
//             src={blog.mainImage}
//             className="rounded-lg w-auto md:max-w-2xl self-center"
//             alt={blog.mainImagealt}
//           />
//           {/* <h3 className="text-xl font-bold">{blog.contentTitle}</h3>
//           <p>{blog.contentdesc}</p>
//           <h3 className="text-xl font-bold">{blog.contentTitle1}</h3>
//           <p>{blog.contentdesc1}</p> */}
//         </div>
//         <GetStarted />
//     </div>
//     )
//   }

// export default Page
