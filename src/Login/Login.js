import React from "react";
import "./Login.css"
import imageOne from "../Image/Logo.png"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const HandleHome = () => {
        navigate("/")
    }
    return(
        <>
        <br />
        <br />
        <br />
        <br />
        <div className="LoginDiv">
            <img src={imageOne} className="GifImage" onClick={HandleHome} />
            <br />
            <h2 className="loginHead">Login</h2>
            <p className="LoginP">Do not have any Account <a href="/signup" className="CSSA">Sign up</a></p>
            <br />
            <input placeholder="Email Id" type="text" className="InputField"/>
            <br />
            <input placeholder="Password" type="password" className="InputField" />
            <br />
            <label className="LoginP"><input type="checkbox"  style={{ transform: "scale(1.9)" }}/> Remember Me</label>
            <br />
            <button className="LoginSubmit">Submit</button>
            <p className="LoginP">Have you <a href="/" className="CSSA">forgotten your password?</a></p>
            <div>
            <a href="https://www.youtube.com/watch?v=AD4Bu6Tq6pE"  target="_blank" className="CSSA">Terms</a> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/test" className="CSSA">Condition</a>
            </div>
        </div>
        </>
    )
}

export default Login