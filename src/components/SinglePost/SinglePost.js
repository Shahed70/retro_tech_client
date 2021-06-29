import React, { useEffect, useState } from 'react'
import './SinglePost.css'
import TopNavbar from '../Header/TopNavbar'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const SinglePost = () => {
    const { postId } = useParams()
    const [post, setPost] = useState([])
    const [loader, setLoader] = useState(true);
    const { title, dectn, photo, name, categories, createdAt } = post
    useEffect(() => {
        const getSinglePost = async () => {

            const res = await axios.get('https://shahed-blog.herokuapp.com/api/posts/' + postId)
            setLoader(false)
            setPost(res.data)
        }
        getSinglePost()
    }, [postId])
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid mx-auto my-4">
                <div className="row mx-auto">
                    {loader ? <div className="spinner-border text-success mx-auto mt-5" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div> : <div className="col-md-8">
                        <div className="post-body">
                            <div className="post-img">
                                <img src={photo} alt="" />
                            </div>
                            <h2 className="singlePost_title text-center pt-2">{title}</h2>
                            <p className="text-center">{categories}</p>
                            <div className="singlePost_description pt-5">
                                <p>Author : <strong>{name}</strong> <span className="float-right"> {new Date(createdAt).toDateString()}</span></p>
                                <p className="postDescription">{dectn}</p>
                            </div>
                        </div>
                    </div>}

                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
