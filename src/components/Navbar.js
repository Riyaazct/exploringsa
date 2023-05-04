import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav
      className="bg-bluebg w-full flex p-4 text-[#DCDCDC] md:justify-around"
      data-testid="Navbar-1"
    >
      {/* TITLE */}
      <div className="flex">
        <h2
          className={
            isActive
              ? "text-blueText font-bold z-20 text-xl"
              : "text-xl font-bold"
          }
        >
          Exploring SA
        </h2>
        <p
          className={
            isActive
              ? "text-blueText font-bold z-20 text-sm pt-[7px] ml-1"
              : "ml-1 pt-[7px] text-sm"
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
          <li className="my-14 text-4xl font-bold text-center md:my-0 md:font-normal md:text-sm md:p-2 md:text-[#DCDCDC]">
            HOME
          </li>
          <li className="my-14 text-4xl font-bold text-center md:my-0 md:font-normal md:text-sm md:p-2 md:text-[#DCDCDC]">
            ABOUT US
          </li>
          <li className="my-14 text-4xl font-bold text-center md:my-0 md:font-normal md:text-sm md:p-2 md:text-[#DCDCDC]">
            OUR SERVICES
          </li>
          <li className="my-14 text-4xl font-bold text-center md:my-0 md:font-normal md:text-sm md:p-2 md:text-[#DCDCDC]">
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
