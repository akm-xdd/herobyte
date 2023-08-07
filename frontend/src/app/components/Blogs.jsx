import React from "react";
import BlogCard from "./BlogCard";

function Blogs() {
    return (
        <div className="bg-gray-800 mt-16 h-[100vh] flex items-center justify-center">
            <div className="flex flex-col space-y-6">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
}

export default Blogs;
