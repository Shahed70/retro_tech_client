import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TopNavbar from '../Header/TopNavbar'
import './Write.css'
const Write = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')
    const [dectn, setDectn] = useState('')
    const [photo, setPhoto] = useState('')
    const [loader, setLoader] = useState(true)
    //console.log(image);
    // const imgHandler = async (e) => {
    //     setImage(e.target.value)
    // }

    const getPost = async () => {
        const res = await axios.get('https://shahed-blog.herokuapp.com/api/posts/allPosts')
        setLoader(false)
        setPosts(res.data)
    }
    useEffect(() => {
        getPost()
    }, []);

    const handleDeleteImage = async (id) => {
        const res = await axios.delete(`https://shahed-blog.herokuapp.com/api/posts/${id}`)
        if (res.status === 200) {
            alert("Post deleted success fully")
            getPost()
        } else {
            console.log(res);
        }
    }
    const postSubmitHandler = async (e) => {
        e.preventDefault()
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
      const newPost = {title, dectn, name:user}
      const res = await  axios.post('https://shahed-blog.herokuapp.com/api/posts/create', newPost, config)
      if(res.status === 200){
          alert("Post has been created successfully")
          getPost()
      }
        e.target.reset()
    }
    return (

        <div className="writePost container-fluid px-0">
            <TopNavbar />
            <div className="container px-5 mt-5">
                <div className="postForm">
                    <h1 className="text-center text-uppercase py-4">Add New Post</h1>
                    <form action="" onSubmit={postSubmitHandler}>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" name="file" className="custom-file-input" id="inputGroupFile04" onChange={(e)=> setPhoto(e.target.files[0])} aria-describedby="inputGroupFileAddon04" />
                                <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file(Optional)</label>
                            </div>

                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleFormControlInput1">Your Name</label>
                            <input type="text" name="name" onChange={(e)=> setUser(e.target.value)} className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleFormControlInput1">Your Story Title</label>
                            <input type="text" name="title" onChange={(e)=> setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Write Your Story</label>
                            <textarea className="form-control" name="dectn"  onChange={(e)=> setDectn(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-success mb-2">ADD</button>
                        </div>
                    </form>
                </div>
                <div className="allPosts mt-5">
                    <h1 className="text-center py-4">ALL POSTS</h1>
                    <div className="row">

                        {
                            posts.map(post => (
                                <div className="col-md-4 text-center" key={post._id}>
                                    <div className="img-box">
                                        <img className="img-fluid" src={post.photo} alt="" />
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                       
                                        <button className="btn btn-danger" onClick={() => handleDeleteImage(post._id)}>DELETE POST</button>
                                    </div>
                                    <h5 className="imgTitle mt-3">{post.title}</h5>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <p className="sr-only d-none">{photo + loader}</p>
            </div>
        </div>
    )
}

export default Write
