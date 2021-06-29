import React from 'react'
import './PostList.css'
import { Link } from 'react-router-dom';
const PostList = ({ posts }) => {
    return (
        <>
            {
                posts.map(post => (
                    <div className="col-md-6 my-4 all-post" key={post._id}>
                        <div className="post-img">
                            <img src={post.photo} alt="" />
                        </div>
                        <div className="post_info">
                            <div className="post-cats">
                                {
                                    post.categories.map((cat, index) => (
                                        <span key={index} className="postCat">{cat}</span>
                                    ))
                                }
                            </div>
                            <h5 className="post-title text-center py-4">
                                <Link className="routeLink" to={`/singlepost/${post._id}`}>{post.title}</Link>
                            </h5>
                            <div className="postWriteInfo">
                                <span className="dateTime">
                                    <p> <span className="float-left">Author : <strong>{post.name}</strong></span> <span className="float-right"> {new Date(post.createdAt).toDateString()} </span></p>

                                </span>
                            </div>

                            <p className="text-justify">
                                {
                                    post.dectn
                                }
                            </p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default PostList
