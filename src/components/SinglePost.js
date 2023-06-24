import React from "react";
import { useParams } from "react-router";
import { useGlobalContext } from "../context";
import Post from "./Post";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const SinglePost = () => {
    const { postId } = useParams();
    const {posts} = useGlobalContext();

    const singlePost = posts.find((post) => post.postId === postId)
    const [{picUrl, username, name, likes, comment, createdAt, commentId}] = singlePost.comments;

    return  (
        <div className="page-wrapper">
            <header className="title-bar">
                <h1><Link to='/'>MyForum</Link></h1>
            </header>
            <div className="sections">
                <Sidebar style={{display: 'block'}} />
                <div className="post-wrapper">
                    <Post post={singlePost} style={{display:'block'}}/>
                    <div className="comment-section">
                        <div className="profile-section">
                            <img src={picUrl} alt={name} className="profile-image" />
                            <div>
                                <span className="name">{name}</span><br/>
                                <span className="username">@{username}</span>
                            </div>
                        </div>
                        <div className="section">
                            <p>Likes: {likes}</p>
                            <p>Comment: {comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost;