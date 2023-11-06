import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import post from "./sanity/schemas/post";
import { visionTool } from "@sanity/vision"
import service from "./sanity/schemas/service";
const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_PROJECT_KEY,
    dataset: process.env.NEXT_PUBLIC_DATASET_KEY,
    title: "AccessiNor Blogs",
    apiVersion: '2023-10-25',
    basePath: "/admin",
    plugins: [deskTool(), visionTool({defaultApiVersion: '2023-10-25'})],
    schema: { types: [post, service]}
})

export default config