import { createClient, groq } from "next-sanity";

export async function getPosts() {
  const client = createClient({
    projectId: "qhhxzg6z",
    dataset: "production",
    apiVersion: "2023-08-06",
  });

  return client.fetch(
    groq`*[_type=='post' ]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        description

    }
    `
  );
}
export async function getPost(slug) {
  const client = createClient({
    projectId: "qhhxzg6z",
    dataset: "production",
    apiVersion: "2023-08-06",
  });

  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
