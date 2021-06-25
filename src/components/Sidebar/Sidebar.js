import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    return (

        <div className="col-md-4 sidebar">
            <div className="">
                <div className="card card-body sidebar-card px-5 pt-5">
                    <div className="d-flex justify-content-center pt-2">
                        <div className="line-one"></div>
                        <h5 class="card-title mx-1">ABOUT ME</h5>
                        <div className="line-two"></div>
                    </div>
                    <p className="card-text text-justify"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eaque ullam aperiam laudantium aliquid magni suscipit accusantium perferendis, vero blanditiis iusto natus et velit temporibus debitis fugit ex quibusdam ratione ......</p>
                    <a href="/#" className="btn btn-normal border text-center mt-4">Read More</a>
                </div>


                <div className=" sidebar_categories mt-5">

                    <div className="card card-body sidebar-card px-5 py-5">
                        <div className="d-flex justify-content-center pt-2">
                            <div className="line-one"></div>
                            <h5 class="card-title mx-1">CATEGORIES</h5>
                            <div className="line-two"></div>
                        </div>
                        <div className="categories pt-3">
                            <div className="d-flex justify-content-center">
                                <span className="cat-1 border p-2">Cat 1</span>
                                <span className="cat-1 border p-2 mx-3">Cat 1</span>
                                <span className="cat-1 border p-2">Cat 1</span>
                            </div>
                            <div className="d-flex justify-content-center pt-3">
                                <span className="cat-1 border p-2">Cat 1</span>
                                <span className="cat-1 border p-2 mx-3">Cat 1</span>
                                <span className="cat-1 border p-2">Cat 1</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" sidebar mt-5">
                    <div className="card card-body sidebar-card px-5 py-5">
                        <div className="d-flex justify-content-center pt-2">
                            <div className="follow-one"></div>
                            <h5 class="card-title mx-1">FOLLOW US</h5>
                            <div className="follow-two"></div>
                        </div>
                        <div className="socialLink pt-3">
                            <div className="d-flex justify-content-center">
                                <span className="cat-1 border rounded  text-center"> <a href="/#"><i className="fab fa-facebook"></i></a> <p>Facebook</p></span>
                                <span className="cat-1 border  rounded text-center"> <a href="/#"><i className="fab fa-twitter"></i></a> <p>Twitter</p></span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <span className="cat-1 border rounded text-center"><a href="/#"><i className="fab fa-instagram"></i></a><p>Instagram</p></span>
                                <span className="cat-1 border rounded text-center"><a href="/#"><i className="fab fa-pinterest"></i></a><p>Pinterest</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
