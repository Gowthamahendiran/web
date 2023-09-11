import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
const Test = () => {
    const navigate = useNavigate()
    const HandleChange = () => {
        navigate('/next-process')
    }
  return (
    <div>
      <h1 className="DivH">Barber Shop near you</h1>
      <br />
      <h2 className="DivH">Hey buddy! Choose your Shop to cut hair</h2>
      <br />
      <div className="container" onClick={HandleChange}>
        <div className="text">
          <h2>The Posh Affire Shop</h2>
          <h2>+91 90900909</h2>
          <h2>Allamrt road, Vellore, Tamil Nadu 632014</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.886664585312!2d79.1435534449678!3d12.95766291827793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47c1ef01fb89%3A0x74fae0f53fd4512a!2sThe%20POSH%20affaire%20(UNISEX%20MAKEOVER%20STUDIO)!5e0!3m2!1sen!2sin!4v1694433098508!5m2!1sen!2sin"
          className="map"
        ></iframe>
      </div>

      
      <div className="container">
        <div className="text">
          <h2>Dheebam Saloon</h2>
          <h2>+91 90797989</h2>
          <h2>X4GQ+W49, Anna Nagar, KRS Nagar, 632007</h2>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.660208240039!2d79.11879538715819!3d12.977284899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47172abcbc4f%3A0x30d465365c76620!2sDheebam%20Saloon!5e0!3m2!1sen!2sin!4v1694434644972!5m2!1sen!2sin" className="map"></iframe>
      </div>



      <div className="container" onClick={HandleChange}>
        <div className="text">
          <h2>The Posh Affire Shop</h2>
          <h2>+91 90900909</h2>
          <h2>Allamrt road, Vellore, Tamil Nadu 632014</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.886664585312!2d79.1435534449678!3d12.95766291827793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47c1ef01fb89%3A0x74fae0f53fd4512a!2sThe%20POSH%20affaire%20(UNISEX%20MAKEOVER%20STUDIO)!5e0!3m2!1sen!2sin!4v1694433098508!5m2!1sen!2sin"
          className="map"
        ></iframe>
      </div>



      <div className="container" onClick={HandleChange}>
        <div className="text">
          <h2>The Posh Affire Shop</h2>
          <h2>+91 90900909</h2>
          <h2>Allamrt road, Vellore, Tamil Nadu 632014</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.886664585312!2d79.1435534449678!3d12.95766291827793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47c1ef01fb89%3A0x74fae0f53fd4512a!2sThe%20POSH%20affaire%20(UNISEX%20MAKEOVER%20STUDIO)!5e0!3m2!1sen!2sin!4v1694433098508!5m2!1sen!2sin"
          className="map"
        ></iframe>
      </div>
    </div>
    
  );
};

export default Test;
