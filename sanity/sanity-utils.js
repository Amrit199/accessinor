import config from "@/sanity.config";
import { createClient, groq } from "next-sanity";

export async function getPosts() {
  return createClient(config).fetch(groq`*[_type == "post"]{
        title,
            "slug": slug.current,
            author,
            "slug": slug.current,
            title,
            tags,
            "mainImage": mainImage.asset->url,
            "mainImagealt": mainImage.alt,
            _createdAt,
            body,
    }`);
}

export async function getPost(slug) {
  return createClient(config).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        title,
            "slug": slug.current,
            author,
            "slug": slug.current,
            title,
            tags,
            "mainImage": mainImage.asset->url,
            "mainImagealt": mainImage.alt,
            _createdAt,
            body,
    }`,
    { slug }
  );
}
