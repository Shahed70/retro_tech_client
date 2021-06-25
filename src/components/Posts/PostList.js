import React from 'react'
import './PostList.css'
const PostList = () => {
    return (
        <>
            <div className="col-md-4 all-post">
                <div className="post-img">
                    <img src="https://cdn.pixabay.com/photo/2018/06/07/16/49/vr-3460451__340.jpg" alt="" />
                </div>
                <div className="post_info">
                    <div className="post-cats">
                        <span className="postCat">Computer</span>
                        <span className="postCat">AI</span>
                    </div>
                    <h5 className="post-title text-center">
                        Lorem ipsum dolor sit amet.
                    </h5>
                    <span className="dateTime">
                        1 hour ago
                    </span>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, fugit quisquam explicabo ratione blanditiis suscipit odit quidem eaque nulla reprehenderit ut doloribus mollitia, officia eveniet vitae, molestias dolor nesciunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, fugit quisquam explicabo ratione blanditiis suscipit odit quidem eaque nulla reprehenderit ut doloribus mollitia, officia eveniet vitae, molestias dolor nesciunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, fugit quisquam explicabo ratione blanditiis suscipit odit quidem eaque nulla reprehenderit ut doloribus mollitia, officia eveniet vitae, molestias dolor nesciunt.
                    </p>
                </div>
            </div>
            <div className="col-md-4 all-post">
            <div className="post-img">
                    <img src="https://cdn.pixabay.com/photo/2018/06/07/16/49/vr-3460451__340.jpg" alt="" />
                </div>
                <div className="post_info">
                    <div className="post-cats">
                        <span className="postCat">Computer</span>
                        <span className="postCat">AI</span>
                    </div>
                    <h5 className="post-title text-center">
                        Lorem ipsum dolor sit amet.
                    </h5>
                    <span className="dateTime">
                        1 hour ago
                    </span>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, fugit quisquam explicabo ratione blanditiis suscipit odit quidem eaque nulla reprehenderit ut doloribus mollitia, officia eveniet vitae, molestias dolor nesciunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, fugit quisquam explicabo ratione blanditiis suscipit odit quidem eaque nulla reprehenderit ut doloribus mollitia, officia eveniet vitae, molestias dolor nesciunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, fugit quisquam explicabo ratione blanditiis suscipit odit quidem eaque nulla reprehenderit ut doloribus mollitia, officia eveniet vitae, molestias dolor nesciunt.
                    </p>
                </div>
            </div>
        </>
    )
}

export default PostList
