import './TopHeader.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

import {
  Nav,
  Navbar,
} from 'react-bootstrap';

const TopNavbar = () => {
  const [avatar, setAvatar] = useState(false)
  return (
    <div className="header_nav border shadow-1">
      <Navbar bg="light" expand="md">
        <div className="container">
          <Navbar.Brand> <Link className="routeLink" to="/">RETRO TECH</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="mx-auto" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link> <Link className="routeLink" to="/"> HOME</Link></Nav.Link>
              <Nav.Link> <Link className="routeLink" to="/#">ABOUT</Link></Nav.Link>
              <Nav.Link> <Link className="routeLink" to="/#">CONTACT</Link></Nav.Link>
              <Nav.Link> <Link className="routeLink" to="/#">ADMIN</Link> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex justify-content-center align-items-center">
            {
              !avatar ? <div className="login">
                <Nav.Link className="text-dark"> <Link className="routeLink loginRoute" to="/login">LOGIN</Link></Nav.Link>
              </div> : <div style={{ width: 50, height: 50, borderRadius: "50%", overflow: "hidden" }} className="avatar">
                <img style={{ width: "100%" }} src={avatar} alt="Shahed owener" />
                <span> Logout </span>
              </div>
            }

          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
