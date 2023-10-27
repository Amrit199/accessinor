import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import post from "./sanity/schemas/post";
import { visionTool } from "@sanity/vision"
const config = defineConfig({
    projectId: '7jdr2vdm',
    dataset: 'production',
    title: "AccessiNor Blogs",
    apiVersion: '2023-10-25',
    basePath: "/admin",
    plugins: [deskTool(), visionTool({defaultApiVersion: '2023-10-25'})],
    schema: { types: [post]}
})

export default config