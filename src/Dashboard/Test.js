import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const HandleChange = () => {
    navigate('/next-process');
  }

  const filteredContainers = [
    {
      name: "The Posh Affire Shop",
      phone: "+91 90900909",
      address: "Allamrt road, Vellore, Tamil Nadu 632014",
      avaliable: "Avaliable on Saturday and Sunday",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.886664585312!2d79.1435534449678!3d12.95766291827793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47c1ef01fb89%3A0x74fae0f53fd4512a!2sThe%20POSH%20affaire%20(UNISEX%20MAKEOVER%20STUDIO)!5e0!3m2!1sen!2sin!4v1694433098508!5m2!1sen!2sin"
    },
    {
      name: "Dheebam Saloon",
      phone: "+91 90797989",
      address: "Anna Nagar, KRS Nagar, 632007",
      avaliable: "Avaliable on Monday and Wednesday",

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.660208240039!2d79.11879538715819!3d12.977284899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47172abcbc4f%3A0x30d465365c76620!2sDheebam%20Saloon!5e0!3m2!1sen!2sin!4v1694434644972!5m2!1sen!2sin"
    },
    {
      name: "Titanic Hair Dresser",
      phone: "+91 8765309568",
      address: "Suthanthira Ponvizha Nagar, Gandhi Nagar",
      avaliable: "Avaliable on Tuesday and Thursday",

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.237590828569!2d79.12591658715819!3d12.952043100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47d20e1081ed%3A0xf9ec5a14f1586d2!2sTitanic%20Hair%20Dresser!5e0!3m2!1sen!2sin!4v1694515611965!5m2!1sen!2sin"
    },
    {
      name: "V4 Salon",
      phone: "+91 99765983",
      address: "Anjuman St, Sripuram, Vellore",
      avaliable: "Avaliable on all days",
      mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.31220693188!2d79.11624568715818!3d12.918770600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad39d2823a7a0d%3A0xc72749c0e9edf4d5!2sV4%20Salon!5e0!3m2!1sen!2sin!4v1694515778343!5m2!1sen!2sin"
    }
  ];

  const filteredContainersByName = filteredContainers.filter(container =>
    container.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    container.avaliable.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <h1 className="DivH">Barber Shop near you</h1>
      <br />
      <h2 className="DivH">Hey buddy! Choose your Shop to cut hair</h2>
      <br />
      <input
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="InputSearch"
      />
      <br />
      {filteredContainersByName.length > 0 ? (
        filteredContainersByName.map((container, index) => (
          <div className="container" key={index}>
            <div className="text">
              <h2>{container.name}</h2>
              <h2>{container.phone}</h2>
              <h2>{container.address}</h2>
              <h2>{container.avaliable}</h2>
            </div>
            <button className="Details" onClick={HandleChange}>Details</button>

            {container.mapSrc && (
              <iframe src={container.mapSrc} className="map"></iframe>
            )}
            
          </div>
        ))
      ) : (
        <p>No matching shops found</p>
      )}
      <button className="ViewMore">View More</button>
      <br />
    </div>
  );
};

export default Test;
