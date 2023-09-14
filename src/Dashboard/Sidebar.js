import React from 'react';
import './Sidebar.css'; // Create this file for your CSS
import imageone from "../Image/Logo.png"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='column'>
        <img src={imageone} className='Image'/>
      </div>
      <div className="dashboard">Dashboard</div>
      <div className="column">Column 1</div>
      <div className="column">Column 2</div>
      <div className="column">Column 3</div>
      <div className="column">Column 4</div>
      <div className="column">Column 5</div>
      <div className="column">Column 6</div>
      <div className="settings">Settings</div>
    </div>
  );
}

export default Sidebar;
