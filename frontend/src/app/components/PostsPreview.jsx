import React from "react";
import { getPosts } from "../../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

async function PostsPreview() {
    const posts = await getPosts();

    return (
        <div className="bg-rose-600 h-auto py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-primary font-bold text-amber-100">
                        Check out some of my latest posts...
                    </h2>
                </div>
                <div className="max-w-lg  mx-auto mt-16">
                    {posts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post._id}
                            className="border-white border-4 bg-gray-800 hover:bg-gray-600 hover:scale-105 transition overflow-hidden shadow rounded-lg p-6 mb-4 flex items-center"
                        >
                            {post.image && (
                                <div className="mr-4">
                                    <Image
                                        src={post.image}
                                        alt={post.name}
                                        width={100}
                                        height={100}
                                        className="object-cover rounded-lg border border-gray-500"
                                    />
                                </div>
                            )}
                            <div>
                                <h3 className="text-lg font-primary text-offpink mb-2">
                                    {post.name}
                                </h3>
                                <hr className="border-white" />
                                <p className="mt-2 text-sm text-offpink font-secondary">
                                    {post.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostsPreview;
