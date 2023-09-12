import React, { useState } from "react";
import "./Login.css"
import imageOne from "../Image/Logo.png"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const navigate = useNavigate();
    const HandleHome = () => {
        navigate("/")
    }

    const HandleSubmit = async () => {
        const response = await fetch('http://localhost:5002/api/login', {
            method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Email, Password }),
        });
    
        if (response.status === 200) {
            const data = await response.json();
            console.log(data.Name);
            console.log(data.Email);
            navigate('/test', {state: {userName: data.Name, userEmail: data.Email}});
        } else {
            console.log("Error")
        }
    };
    
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
            <input placeholder="Email Id" type="text" className="InputField" value={Email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input placeholder="Password" type="password" className="InputField"  value={Password} onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <label className="LoginP"><input type="checkbox"  style={{ transform: "scale(1.9)" }}/> Remember Me</label>
            <br />
            <button className="LoginSubmit" onClick={HandleSubmit}>Submit</button>
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