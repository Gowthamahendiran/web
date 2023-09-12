import React from "react";
import "./All.css";
import Logo from "../Image/Logo.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="HeaderDiv">
      <img src={Logo} className="Logo" alt="Logo" />
      <ul className="NavList">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="Linkto"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="product"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="Linkto"
          >
            Product
          </Link>
        </li>
        <li>
        <Link
            to="more"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="Linkto"
          >
            More
          </Link>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>

        </li>
      </ul>
    </div>
  );
};

export default Header;
