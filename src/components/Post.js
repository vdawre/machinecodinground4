import React, {useState} from "react";
import { useGlobalContext } from "../context";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill, BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import {GoComment} from 'react-icons/go';
import {GiShare} from 'react-icons/gi';
import { Link } from "react-router-dom";
import {Links, useNavigate} from 'react-router-dom';

const Post = ({post}) => {
    const {db, setDb} = useGlobalContext();
    const [vote, setVote] = useState(post.upvotes);
    const [bookmarked, setBookmarked] = useState(post.isBookmarked)

    const navigate = useNavigate();
    // const compareVote = ({upvotes, downvotes}) => {
    //     return upvotes > downvotes ? setVote(upvotes) : setVote(`-${downvotes}`)
    // }

    const addVote = () => {
        setVote(vote + 1)
    } 
    const subVote = () => {
        setVote(vote - 1)
    } 
    const handleBookmark = () => {
        setBookmarked(!bookmarked)
    }

    return (
        <div className="post">
            <div className="vote-section">
                <BsFillArrowUpCircleFill className="icons" onClick={addVote} />
                <br/><span>{vote}</span><br/>
                <BsFillArrowDownCircleFill className="icons" onClick={subVote} />
            </div>
            <div className="post-section">
                <div className="profile-section">
                    <img src={post.picUrl} alt="" className="profile-image" />
                    <div>
                        <span className="name">{post.name}</span><br/>
                        <span className="username">@{post.username}</span>
                    </div>
                </div>
                <h3>{post.post}</h3>
                <div className="tags-section">
                    {
                        post.tags.map((tag, index) => {
                            return <button className="tag" key={index}>{tag}</button>
                        })
                    }
                </div>
                <p>{post.postDescription}</p>
                <div className="divider"></div>
                <div className="post-btns-section">
                    <GoComment className="icons" onClick={() => navigate(`/${post.postId}`)} />
                    <GiShare className="icons"/>
                    {
                        bookmarked ? <BsBookmarkFill className="icons" onClick={handleBookmark}/> : <BsBookmark className="icons" onClick={handleBookmark} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Post;