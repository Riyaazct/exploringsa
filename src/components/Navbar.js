import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("false");
  return (
    <nav className="flex items-center bg-bluebg w-screen text-[#DCDCDC]">
      <div className="p-2 flex items-center">
        <h2 className="text-2xl">Exploring SA</h2>
        <p className="text-md ml-1 mt-1 ">Travel and Tours</p>
      </div>

      <div className="ml-auto mr-2 cursor-pointer">
        <AiOutlineMenuUnfold color="#DCDCDC" size={30} />
      </div>

      <div
        className={
          !active
            ? "hidden"
            : "absolute w-full h-full top-0 text-blueText text-4xl bg-lightGreen flex"
        }
      >
        <div className="right-2 top-2 absolute cursor-pointer">
          <AiOutlineMenuFold /*color="#DCDCDC"*/ size={30} />
        </div>
        <ul className="w-fit m-auto">
          <li className="py-12 ">Home</li>
          <li className="py-12 ">About Us</li>
          <li className="py-12 ">Services</li>
          <li className="py-12 ">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
