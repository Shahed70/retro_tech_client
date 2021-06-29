import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import PostList from './PostList'
import './style.css'
import './Posts.css'
const Posts = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(10);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    useEffect(() => {

        const getPost = async () => {
            const res = await axios.get('http://localhost:4000/api/posts/allPosts')
            setLoader(false)
            setData(res.data)
        }
        getPost()
    }, []);

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }

    // const handleLoadMore = () => {
    //     setitemsPerPage(itemsPerPage + 5);
    // };

    return (

        <div className="container-fluid postContainer">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {loader ? <div class="spinner-border text-success mx-auto" style={{width: "3rem", height: "3rem"}} role="status">
                            <span class="sr-only">Loading...</span>
                        </div> : ""}
                        <PostList posts={currentItems} />
                    </div>
                    {
                        loader ? "" : <div className="pagination mt-4">
                            <ul className="pageNumbers">
                                <li>
                                    <button
                                        onClick={handlePrevbtn}
                                        disabled={currentPage === pages[0] ? true : false}
                                    >
                                        Prev
                                    </button>
                                </li>
                                {pageDecrementBtn}
                                {renderPageNumbers}
                                {pageIncrementBtn}

                                <li>
                                    <button
                                        onClick={handleNextbtn}
                                        disabled={currentPage === pages[pages.length - 1] ? true : false}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                            {/* <button onClick={handleLoadMore} className="loadmore">
                            Load More
                        </button> */}
                        </div>
                    }
                </div>
                <div className="col-md-4">
                    <Sidebar />
                </div>
            </div>
            <p className="d-none sr-only">{setitemsPerPage+setpageNumberLimit}</p>
        </div>

    )
}

export default Posts
