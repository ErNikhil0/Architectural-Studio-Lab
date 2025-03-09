import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import '../Stylesheet/Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-dark text-white container-fluid flex flex-md-row flex-col justify-between p-20 ps-5 pe-5">
 
            <div className="footer_dt">
                <div className="text-gray-400 text-xs">©2025 Chalk Studio Interiors. Website Designed by <a href="https://www.hintt.co/" target="_blank"><span className=" text-decoration-underline text-sm text-gray-200 call">
                    HINT </span></a></div>
            </div>
            <div className="footer_icon">
                <div className="flex  flex-md-row  icon_div">
                    <CiMail className=" text-gray-400 hover:text-white" size={20}/>
                    <CiLinkedin className=" text-gray-400  hover:text-white" size={20}/>
                    <CiInstagram className=" text-gray-400  hover:text-white" size={20}/>
                    <CiFacebook className=" text-gray-400  hover:text-white" size={20}/>
                    <FaWhatsapp className=" text-gray-400  hover:text-white" size={20}/>
                    <CiLocationOn className=" text-gray-400  hover:text-white" size={20}/>

                </div>
                <div >
                    <div className="text-gray-400 text-center pt-5">Call Us- <span className="call"><u>09599197669</u> </span></div>
                </div>

            </div>
            <div className="footer_back">
                <div className="text-gray-400"><em className="call">Back To Top</em></div>
            </div>

        </div>
    );
};

export default Footer;
