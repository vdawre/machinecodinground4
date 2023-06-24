import React from "react";
import { useGlobalContext } from "../context";
import { BiHomeAlt } from 'react-icons/bi'
import { BsRocket, BsBookmarkCheck, BsPerson } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const {db} = useGlobalContext();

    return (
        <>
            <nav className="sidebar">
                <div>
                    <BiHomeAlt className="icons"/>
                    <span><Link to='/'>Home</Link></span>
                </div>
                <div>
                    <BsRocket className="icons"/>
                    <span>Explore</span>
                </div>
                <div>
                    <BsBookmarkCheck className="icons"/>
                    <span>Bookmark</span>
                </div>
                <div>
                    <BsPerson className="icons"/>
                    <span>Profile</span>
                </div>
                <div className="profile-section">
                    <img src={db.picUrl} alt="" className="profile-image" />
                    <div>
                        <span className="name">{db.name}</span><br/>
                        <span className="username">@{db.username}</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;