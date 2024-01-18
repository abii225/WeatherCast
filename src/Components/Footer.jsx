import React from "react";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-gray-300 mt-[50px] flex justify-evenly">
      <div className="h-[50px] md:h-[60px]">
        <img
          className="h-[100%]"
          src="https://i.ibb.co/vVnMx6w/weathercast.png"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <FaRegCopyright className="text-[20px]" />
        <h1 className="text-[15px]">All Rights Reserved</h1>
      </div>
      <div key="icons" className="flex items-center justify-evenly text-white">
        <a href="https://www.linkedin.com/in/abhay-v-935738243/">
          <GrLinkedin className="text-blue-600 text-[25px]" />
        </a>
        <a href="mailto:abhayv225@gmail.com">
          <SiGmail className="text-red-600 text-[25px] ml-[5px]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
