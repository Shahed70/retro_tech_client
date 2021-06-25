import React from 'react'
import './SinglePost.css'
import TopNavbar from '../Header/TopNavbar'
import Sidebar from '../Sidebar/Sidebar'
const SinglePost = () => {
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid mx-auto my-4">
                <div className="row mx-auto">
                    <div className="col-md-8">
                        <div className="post-body">
                            <div className="post-img">
                                <img src="https://cdn.pixabay.com/photo/2015/05/31/10/51/acer-791027__340.jpg" alt="" />
                            </div>
                            <h2 className="singlePost_title text-center pt-2">Lorem ipsum dolor sit, amet consectetur </h2>
                            <div className="singlePost_description pt-5">
                                <p>Author : <strong>Shahed</strong> <span className="float-right"> 1 hour ago</span></p>
                                <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum tenetur repudiandae placeat harum quasi incidunt a, impedit natus, culpa praesentium voluptate earum doloremque in et expedita beatae autem mollitia libero dicta ea? Voluptates inventore, tenetur debitis praesentium mollitia porro quae molestiae officia sit veniam, sunt dolor neque iure magnam vel veritatis est. Laboriosam officiis, culpa quos cupiditate voluptatum fugit suscipit quam ea alias, eligendi minus aliquid. Adipisci, architecto! Ullam modi omnis quod similique at ratione soluta quis repudiandae, dolor sunt deserunt cupiditate ut! Ratione accusantium non ex cupiditate minus doloribus iste animi ducimus quo, odio sint, mollitia deleniti quaerat consequatur ab nobis. Ipsam voluptatem ea dolorum itaque nemo ipsum, ducimus vitae nulla asperiores non at earum sit porro dignissimos molestiae aperiam distinctio pariatur tenetur. Non odit facere deserunt laborum totam dolorum tempore fuga, sapiente, repellat quia recusandae voluptate nisi aliquid praesentium perferendis! Repellat aliquid porro dicta, totam harum, fuga, sunt doloremque tempora at ullam maiores nemo est nihil perspiciatis culpa atque? Veritatis soluta beatae ab nisi voluptas reprehenderit facilis maiores blanditiis autem molestiae dolorem nesciunt praesentium deleniti, recusandae dolore harum excepturi! Perspiciatis odit quam cum debitis doloribus velit illum quod possimus. Id reprehenderit fuga quas ipsam sequi aliquam distinctio!</p>
                            </div>
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default SinglePost
