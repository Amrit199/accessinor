"use client";
import { getService } from "@/sanity/sanity-utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getService(params.slug);
      setService(data);
    };
    fetchData();
  }, [params.slug]);

  if (!service) {
    return <div className="pt-28 pb-8">Loading...</div>;
  }
  return (
    <div className="w-full pt-24 pb-6 text-black bg-slate-50">
      <div className="bg-green-200">
        <div className="w-full lg:w-[70%] mx-auto p-8 md:p-16">
          <h2 className="text-2xl md:text-5xl font-bold">{service.title}</h2>
        </div>
      </div>
      <div className="w-full lg:w-[70%] mx-auto p-8 md:p-16 flex flex-col items-start justify-start gap-5">
        <p>{service.intro}</p>
        <Image
          width={380}
          height={350}
          src={service.image}
          className="rounded-lg w-full sm:w-[80%] mx-auto self-center"
          alt={service.alt}
        />
        <p>{service.description}</p>
      </div>
    </div>
  );
}
