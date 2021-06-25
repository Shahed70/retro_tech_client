import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import PostList from './PostList'
import './Posts.css'
const Posts = () => {
    return (
            <div className="container-fluid postContainer">
               <div className="row">
               <PostList/>
                <Sidebar/>
               </div>
            </div>
            
    )
}

export default Posts
