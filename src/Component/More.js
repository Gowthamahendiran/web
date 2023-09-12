import React from "react";
import imageFour from "../Image/Why.jpg"
import { useNavigate } from "react-router-dom";

const More = () => {
    const navigate = useNavigate();
    const HandleLogin = () => {
        navigate('/login')
    }
    return(
        <div className="MoreDiv" id="more">
            <p className="AboutP"><h2 className="AboutH">Why Choose us?</h2> <br /> Discover a curated selection of premium salon products at Shoppy.
            From cutting-edge <br />trimmers to luxurious shaving creams, 
            find everything you need for your grooming routine.
            <br />
            <br />
            Book salon appointments effortlessly with a few clicks. Browse our network of partnered salons,
            <br /> select services, choose a convenient time, and your appointment is confirmed
            <br />
            <br />
            Experience salon-level pampering at home! Our expert salon owners and barbers are <br />ready to provide professional services in the comfort of your space
            <br />
            <br />
            Join us at Shoppy and upgrade your grooming routine. 
            Explore our products, book salon <br /> appointments, and experience on-demand services.
            <br />
            <br/>
            <br />
            <button className="ExploreNow" onClick={HandleLogin}>Know More</button>
            </p>
            <img src={imageFour}  className="ImageWhy"/>
        </div>
    )
}


export default More