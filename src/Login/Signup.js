import React from "react";
import "./Login.css"
import imageOne from "../Image/Logo.png"
const Signup = () => {
    return(
        <>
        <br />
        <br />
        <div className="SignupDiv">
            <img src={imageOne} className="GifImage" />
            <br />
            <h2 className="loginHead">Sign Up</h2>
            <p className="LoginP">Already have an Account <a href="/login" className="CSSA">Login</a></p>
            <br />
            <input placeholder="Name" type="text" className="InputField"/>
            <br />
            <input placeholder="Email Id" type="text" className="InputField"/>
            <br />
            <input placeholder="Contact" type="number" className="InputField"/>
            <br />
            <input placeholder="Password" type="password" className="InputField" />
            <br />
            <label className="LoginP"><input type="checkbox"  style={{ transform: "scale(1.9)" }}/> Remember Me</label>
            <br />
            <button className="LoginSubmit">Submit</button>
            <br />
            <div>
            <a href="https://www.youtube.com/watch?v=AD4Bu6Tq6pE" target="_blank" className="CSSA">Terms</a> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.youtube.com/watch?v=AD4Bu6Tq6pE"  target="_blank" className="CSSA">Condition</a>
            </div>
            
        </div>
        </>
    )
}

export default Signup