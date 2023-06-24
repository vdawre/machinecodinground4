import React from "react";
import Sidebar from './Sidebar';
import PostsSection from './PostsSection';
import SortSection from './SortSection';
import {Link } from 'react-router-dom'

const PageWrapper = () => {
    return (
        <div className="page-wrapper">
            <header className="title-bar">
                <h1><Link to='/'>MyForum</Link></h1>
            </header>
            <div className="sections">
                <Sidebar style={{display: 'block'}} />
                <PostsSection style={{display: 'block'}}/>
                <SortSection />
            </div>
        </div>
    )
}

export default PageWrapper;