import axios from 'axios';
import React, { useState } from 'react'

const Register = ({ setResgitered }) => {
    const [signUp, setSignUp] = useState({ name: "", email: "", password: "" })
    console.log(signUp);
    const handleChange = (e) => {
        const newUser = { ...signUp, [e.target.name]: e.target.value }
        setSignUp(newUser)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name:signUp.name,
            email:signUp.email,
            password:signUp.password
        }
        const res = await axios.post(`http://localhost:4000/api/auth/register`, data)
        console.log(res);
    }
    return (
        <>
            <h1 className="display-4 py-3">Sign Up</h1>
            <div className="login">
                <form action="" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <input type="text" name="name" onChange={handleChange} className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="Eamil" />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="Password" />
                    </div>
                    <button className="login-btn rounded">
                        Sign Up
                    </button>
                </form>

                <p className="text-center">Already have an account? <small onClick={() => setResgitered(true)} className="register">Login Now</small></p>
            </div>
        </>
    )
}

export default Register
