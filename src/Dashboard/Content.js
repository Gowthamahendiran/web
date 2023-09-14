import React from "react";
import './Sidebar.css'

const Content = () => {

    const HandleClick = () => {
        window.location.href = "http://localhost:5000/"
    }
    return(
        <div className="ContDiv">
            <h1 className="ContP">Hello user !
            </h1>
            <button className="ViewMore" onClick={HandleClick}>Click here</button>
        </div>
    )
}

export default Content