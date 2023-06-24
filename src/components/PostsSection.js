import React from "react";
import Post from './Post';
import { useGlobalContext } from "../context";

const PostsSection = () => {
    const {db, posts} = useGlobalContext();

    return (
        <div className="post-wrapper">
            {
                posts.map((post, index) => {
                    return <Post post={post} />
                })
            }
        </div>
    )
}

export default PostsSection;