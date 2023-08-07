import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "qhhxzg6z",
    dataset: "production",
    title: "herobyte",
    apiVersion: '2023-08-06',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config