import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="bg-bluebg p-10 flex justify-around text-[#F5F5F5]">
        <div>
          <p className="my-2">Singh's Farm</p>
          <p className="my-2">16 Schaap Road</p>
          <p className="my-2">Schaapkraal</p>
          <p className="my-2">Cape Town, 7941</p>
          <p className="my-2">Phone: +27 21 396 1145</p>
          <p className="flex items-center gap-3">
            Social Media:
            <SiFacebook size={25} color="#F5F5F5" />
            <BsInstagram size={25} color="#F5F5F5" />
            <BsWhatsapp size={25} color="#F5F5F5" />
          </p>
        </div>
        <div>
          <ul>
            <li className="my-2">HOME</li>
            <li className="my-2">ABOUT US</li>
            <li className="my-2">SERVICES</li>
            <li className="my-2">CONTACT</li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#1E1E1E] text-offWhite text-center text-xs p-1">
        <p>
          © Copyright Exploring SA Transport and Tours (PTY) LTD 2023
        </p>
      </div>
    </>
  );
};

export default Footer;
