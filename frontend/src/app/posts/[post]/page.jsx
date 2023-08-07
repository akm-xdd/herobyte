import { getPost } from "../../../../sanity/sanity-utils"

export default async function Post({ params }) {

    const slug = params.post
    const post = await getPost(slug)

    return <div>{post.name}</div>
}