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

export async function getServices() {
  return createClient(config).fetch(groq`*[_type == "service"]{
    title,
    "slug": slug.current,
    intro,
    description,
    "image": image.asset->url,
    "alt": image.alt,
  }`);
}

export async function getService(slug) {
  return createClient(config).fetch(
    groq`*[_type == "service" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    intro,
    description,
    "image": image.asset->url,
    "alt": image.alt,
  }`,
    { slug }
  );
}
