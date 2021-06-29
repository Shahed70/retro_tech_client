import React, { useContext } from "react";
import { CreactUserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import loginSvg from '../../assets/image/undraw_authentication_fsn5.svg'
import { useState } from "react";
import TopNavbar from "../Header/TopNavbar";
import Register from "./Register";
import axios from "axios";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(CreactUserContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [resgitered, setResgitered] = useState(true)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
 
  const handlLogin = async  (e) => {
       e.preventDefault()
      try{
        const config = {
          headers:{
            "Content-type": "application/json"
          }
        }
        const res = await axios.post('http://localhost:4000/api/auth/login', 
        {email, password}, config)
        setLoggedInUser(res.data)
        history.replace(from);
      }catch(err){
        console.log(err);
      }
  };

  return (
    <div>
      <div className="container-fluid px-0">
        <TopNavbar />
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-1 py-5 mt-5">
              {
                resgitered ? <>
                  <h1 className="display-4 py-3">Sign In</h1>
                  <div className="login">
                    <form onSubmit={handlLogin}>
                      <div className="form-group">
                        <input type="email" name="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} placeholder="Eamil" />
                      </div>
                      <div className="form-group">
                        <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)} className="form-control" placeholder="Password" />
                      </div>
                      <button type="submit" className="login-btn rounded">
                        Login
                      </button>
                    </form>

                    <p className="text-center">Have not registered yet? <small onClick={() => setResgitered(false)} className="register">Register Now</small></p>
                  </div>
                </>
                  : <Register setResgitered={setResgitered}/>
                 
              }
            </div>
            <div className="col-md-6 py-5">
              <img className="img-fluid" src={loginSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
<p className="d-none sr-only">{loggedInUser}</p>
    </div>
  );
};

export default Login;
