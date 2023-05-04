import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav
      className="bg-bluebg border-b-[#DCDCDC] border-b-2 w-full flex p-3 text-[#DCDCDC] md:justify-between md:items-center lg:justify-around"
      data-testid="Navbar-1"
    >
      {/* TITLE */}
      <div className="flex md:pb-1">
        <h2
          className={
            isActive
              ? "text-blueText font-bold z-20 text-xl"
              : "text-xl font-bold xl:text-2xl"
          }
        >
          Exploring SA
        </h2>
        <p
          className={
            isActive
              ? "text-blueText font-bold z-20 text-sm pt-[7px] ml-1"
              : "ml-1 pt-[7px] text-sm xl:text-lg xl:pt-[3.8px]"
          }
        >
          Travel and Tours
        </p>
      </div>
      {/* MENU LINKS */}
      {/* LINKS */}
      <div
        className={
          isActive
            ? "w-screen fixed left-0 top-0 h-screen bg-lightGreen z-10 text-blueText flex justify-center items-center ease-in duration-300"
            : "w-full  absolute top-0 left-[-100%] h-full z-10 text-blueText flex justify-center items-center ease-in-out duration-700 md:static md:w-fit"
        }
      >
        <ul className="md:flex">
          <li className="my-14 text-4xl font-bold text-center md:my-[unset] md:font-normal md:text-sm md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-lg xl:px-5 ">
            HOME
          </li>
          <li className="my-14 text-4xl font-bold text-center md:my-[unset] md:font-normal md:text-sm md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-lg xl:px-5 ">
            ABOUT US
          </li>
          <li className="my-14 text-4xl font-bold text-center md:my-[unset] md:font-normal md:text-sm md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-lg xl:px-5 ">
            OUR SERVICES
          </li>
          <li className="my-14 text-4xl font-bold text-center md:my-[unset] md:font-normal md:text-sm md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-lg xl:px-5 ">
            CONTACT
          </li>
        </ul>
      </div>

      {/* MENU BUTTON OPEN */}
      <div
        className={
          isActive ? "hidden" : "absolute right-2 top-3 md:hidden"
        }
        onClick={() => setIsActive(!isActive)}
      >
        <AiOutlineMenuUnfold color="#DCDCDC" size={30} />
      </div>

      {/* CLOSE MENU BUTTON */}
      <div
        className={
          isActive
            ? "absolute right-2 top-3 text-blueText z-20 md:hidden"
            : "hidden"
        }
        onClick={() => setIsActive(!isActive)}
      >
        <AiOutlineMenuFold size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
