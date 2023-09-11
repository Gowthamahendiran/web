import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className="FooterDiv">
            <div className="FooterSection">
                <h3 className="FooterHeader">SHOP</h3>
                <ul className="FooterList">
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                </ul>
            </div>

            <div className="FooterSection">
                <h3 className="FooterHeader">HELP</h3>
                <ul className="FooterList">
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                </ul>
            </div>

            <div className="FooterSection">
                <h3 className="FooterHeader">ABOUT</h3>
                <ul className="FooterList">
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                    <li><a href="/">Lorem</a></li>
                </ul>
            </div>

            <div className="FooterSocial">
                <BsFacebook className="ICONs" />
                <BsInstagram className="ICONs" />
                <AiOutlineTwitter className="ICONs" />
                <BsGithub className="ICONs" />
            </div>
        </div>
    )
}

export default Footer;
