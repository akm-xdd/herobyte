import React from "react";

function PostCard({ title, content }) {
    return (
        <div className="flex-shrink-0 w-1/3">
            <div className="bg-white border-4 border-white overflow-hidden shadow rounded-lg">
                <div className="p-4 bg-gray-500 hover:bg-gray-600 cursor-pointer">
                    <h3 className="text-lg font-primary text-offpink mb-2">{title}</h3>
                    <hr className="border-gray-300 my-2" />
                    <p className="mt-2 text-sm text-offpink font-secondary">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
