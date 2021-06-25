import React, { useContext } from "react";
//import { CreactUserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import loginSvg from '../../assets/image/undraw_authentication_fsn5.svg'
import { useState } from "react";
import TopNavbar from "../Header/TopNavbar";

const Login = () => {
  //const [loggedInUser, setLoggedInUser] = useContext(CreactUserContext);
  const [resgitered, setResgitered] = useState(true)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  // }

  // const handleGoogleSignIn = () => {
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       const { displayName, email, photoURL } = result.user;
  //       const signedInUser = { name: displayName, email, img: photoURL };
  //       setLoggedInUser(signedInUser);
  //       history.replace(from);
  //       // ...
  //     })
  //     .catch(function (error) {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // };
 
  return (
    <div>
      <div className="container-fluid px-0">
        <TopNavbar/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-1 py-5 mt-5">
              {
                resgitered ? <>
                  <h1 className="display-4 py-3">Sign In</h1>
                  <div className="login">
                    <form action="">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Eamil" />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                      </div>
                    </form>
                    <button className="login-btn rounded">
                      Login
                    </button>
                    <p className="text-center">Have not registered yet? <small onClick={()=> setResgitered(false)} className="register">Register Now</small></p>
                  </div>
                </>
                : 
                <>
                <h1 className="display-4 py-3">Sign Up</h1>
                <div className="login">
                  <form action="">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Eamil" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                  </form>
                  <button className="login-btn rounded">
                    Sign Up
                  </button>
                  <p className="text-center">Already have an account? <small onClick={()=> setResgitered(true)} className="register">Login Now</small></p>
                </div>
              </>
              }
            </div>
            <div className="col-md-6 py-5">
              <img className="img-fluid" src={loginSvg} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
