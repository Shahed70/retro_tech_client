import React from 'react'
import Posts from './../Posts/Posts'
import './Home.css'
import TopHeader from '../Header/TopHeader'
import TopNavbar from '../Header/TopNavbar'
import TopBanner from '../TopBanner/TopBanner'

const Home = () => {
    return (
        <div>
            <TopHeader/>
            <TopNavbar/>
            <TopBanner/>
            <Posts/>
        </div>
    )
}

export default Home
