import './TopHeader.css';
import { Link } from 'react-router-dom'
import React, { useContext} from 'react';

import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import { CreactUserContext } from '../../App';

const TopNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(CreactUserContext);
  const {email} = loggedInUser
  const logOutHandle = ()=>{
    setLoggedInUser({})
    window.location.replace('/')
  }
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
              <Nav.Link> <Link className="routeLink" to="/write">ADMIN</Link> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex justify-content-center align-items-center">
            {
              !email ? <div className="login">
                <Nav.Link className="text-dark"> <Link className="routeLink loginRoute" to="/login">LOGIN</Link></Nav.Link>
              </div> : <div style={{ width: "100%", height: 50, borderRadius: "50%", overflow: "hidden" }} className="avatar pr-3">
               <button className="btn btn-normal">{email}</button>
               <button onClick={logOutHandle} className="btn btn-normal">Logout</button>
              </div>
            }

          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
