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
                <a href="https://www.facebook.com/" target="_blank"><BsFacebook className="ICONs" /></a>
                <a href="https://www.instagram.com/" target="_blank"><BsInstagram className="ICONs" /></a>
                <a href="https://www.twitter.com/" target="_blank"><AiOutlineTwitter className="ICONs" /></a>
                <a href="https://www.github.com/" target="_blank"><BsGithub className="ICONs" /></a>
            </div>
        </div>
    )
}

export default Footer;
