import React from "react";
import imageFour from "../Image/imageFour.png"
const About = () => {
    return(
        <div className="AboutDiv" id="about">
            <img src={imageFour}  className="ImageFour"/>
            <p className="AboutP"><h2 className="AboutH">About</h2> <br /> Discover a curated selection of premium salon products at Shoppy.
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
            <button className="ExploreNow">Explore Now</button>
            </p>
        </div>
    )
}


export default About