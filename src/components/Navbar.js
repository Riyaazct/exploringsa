import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [isActive, setIsActive] = useState("false");
  return (
    <nav className="flex items-center bg-bluebg w-screen text-[#DCDCDC] h-[60px]">
      <div
        className={
          !isActive
            ? "text-blueText font-bold p-2 flex items-center"
            : "font-bold p-2 flex items-center"
        }
      >
        <h2 className="text-2xl z-20">Exploring SA</h2>
        <p className="text-md ml-1 mt-1 z-20">Travel and Tours</p>
      </div>

      <div
        className="ml-auto mr-2 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <AiOutlineMenuUnfold color="#DCDCDC" size={30} />
      </div>

      <div
        className={
          !isActive
            ? "fixed w-full h-screen z-10  text-blueText bg-lightGreen bg-opacity-90 ease-in duration-500 left-0 top-0"
            : "absolute left-[-100%] w-full h-screen ease-in-out duration-700 z-10 top-0"
        }
      >
        <div
          className="right-2 top-4 absolute cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <AiOutlineMenuFold size={30} />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <ul>
            <li className="my-16 text-3xl font-bold ">Home</li>
            <li className="my-16 text-3xl font-bold ">About Us</li>
            <li className="my-16 text-3xl font-bold ">Services</li>
            <li className="my-16 text-3xl font-bold ">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
