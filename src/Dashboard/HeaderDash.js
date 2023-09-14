import React from "react";
import { Link } from "react-scroll";
import './Sidebar.css'
const HeaderDash = () => {
    return (
        <div className="DashboardDiv">
            <p></p>
          <ul className="NavListt">
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
}

export default HeaderDash