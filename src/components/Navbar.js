import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <nav
      className="bg-bluebg w-full flex p-4 text-[#DCDCDC]"
      data-testid="Navbar-1"
    >
      <div className="flex">
        {/* TITLE */}
        <div className="flex">
          <h2 className="text-xl font-bold">Exploring SA</h2>
          <p className="ml-1 pt-[7px] text-sm">Travel and Tours</p>
        </div>

        {/* MENU LINKS */}
        {/* LINKS */}
        <div
          className={
            isActive
              ? "w-screen absolute top-0 left-0 h-screen bg-lightGreen z-10 text-blueText flex justify-center items-center"
              : "hidden"
          }
        >
          <ul className={isActive ? "" : ""}>
            <li
              className={
                isActive
                  ? " my-14 text-4xl font-bold text-center"
                  : "null"
              }
            >
              HOME
            </li>
            <li
              className={
                isActive
                  ? " my-14 text-4xl font-bold text-center"
                  : "null"
              }
            >
              ABOUT US
            </li>
            <li
              className={
                isActive
                  ? " my-14 text-4xl font-bold text-center"
                  : "null"
              }
            >
              OUR SERVICES
            </li>
            <li
              className={
                isActive
                  ? " my-14 text-4xl font-bold text-center"
                  : "null"
              }
            >
              CONTACT
            </li>
          </ul>
        </div>
      </div>
      {/* MENU BUTTON OPEN */}
      <div
        className="absolute right-2 top-3"
        onClick={() => setIsActive(!isActive)}
      >
        <AiOutlineMenuUnfold color="#DCDCDC" size={30} />
      </div>

      {/* CLOSE MENU BUTTON */}
      <div
        className={isActive ? "absolute right-2 top-3" : "hidden"}
        onClick={() => setIsActive(!isActive)}
      >
        <AiOutlineMenuFold size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
