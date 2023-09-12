import React, { useState } from "react";
import "./Login.css"
import imageOne from "../Image/Logo.png"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Contact, setContact] = useState();
    const [Password, setPassword] = useState();
    const HandleSubmit = async () => {
        const response = await fetch('http://localhost:5002/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({Name, Email, Contact, Password}),
        });
        
        if (response.status === 201) {
          console.log("Sign up Success")
    navigate("/login");
        }
        else{
          console.log("Error")
        }
      };

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
            <input placeholder="Name" type="text" className="InputField" value={Name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <input placeholder="Email Id" type="text" className="InputField" value={Email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input placeholder="Contact" type="number" className="InputField" value={Contact} onChange={(e) => setContact(e.target.value)}/>
            <br />
            <input placeholder="Password" type="password" className="InputField" value={Password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <label className="LoginP"><input type="checkbox"  style={{ transform: "scale(1.9)" }}/> Remember Me</label>
            <br />
            <button className="LoginSubmit" onClick={HandleSubmit}>Submit</button>
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