import React from 'react'
import TopNavbar from '../Header/TopNavbar'
import './Write.css'
const Write = () => {
    return (

        <div className="writePost container-fluid px-0">
            <TopNavbar />
            <div className="container px-5 mt-5">
                <div className="postForm">
                    <h1 className="text-center text-uppercase py-4">Add New Post</h1>
                    <form action="">
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                                <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                            </div>

                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleFormControlInput1">Your Story Title</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Write your story</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" class="btn btn-success mb-2">ADD</button>
                        </div>
                    </form>
                </div>
                <div className="allPosts mt-5">
                    <h1 className="text-center py-4">ALL POSTS</h1>
                    <div className="row">

                        <div className="col-md-4 text-center">
                            <div className="img-box">
                                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2018/01/17/04/14/industry-3087394__340.jpg" alt="" />
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <button className="btn btn-success">EDIT POST</button>
                                <button className="btn btn-danger">DELETE POST</button>
                            </div>
                            <h5 className="imgTitle mt-3">Lorem ipsum dolor sit amet.</h5>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="img-box">
                                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2018/01/17/04/14/industry-3087394__340.jpg" alt="" />
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <button className="btn btn-success">EDIT POST</button>
                                <button className="btn btn-danger">DELETE POST</button>
                            </div>
                            <h5 className="imgTitle pt-3">Lorem ipsum dolor sit amet.</h5>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="img-box">
                                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2018/01/17/04/14/industry-3087394__340.jpg" alt="" />
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <button className="btn btn-success">EDIT POST</button>
                                <button className="btn btn-danger">DELETE POST</button>
                            </div>
                            <h5 className="imgTitle pt-3">Lorem ipsum dolor sit amet.</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
