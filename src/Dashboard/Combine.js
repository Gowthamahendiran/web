import React from "react";
import Sidebar from "./Sidebar";
import HeaderDash from "./HeaderDash";
import "./Combaine.css"; // Create this file for your CSS
import Content from "./Content";
import { Route, Routes } from "react-router-dom";
import ContentTwo from "./ContentTwo";

const Combaine = () => {
  return (
    <div className="combaine">
      <Sidebar />
      <div className="content">
        <HeaderDash />
        <Content />
        <Routes>
          <Route path="/now" element={<ContentTwo />} />
        </Routes>
      </div>
    </div>
  );
}

export default Combaine;
