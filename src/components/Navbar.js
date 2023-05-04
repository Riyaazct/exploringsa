import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav
      className="bg-bluebg w-full flex p-4 text-[#DCDCDC]"
      data-testid="Navbar-1"
    >
      <div className="flex">
        {/* TITLE */}
        <div className="flex">
          <h2>Exploring SA</h2>
          <p>Travel and Tours</p>
        </div>

        {/* MENU LINKS */}
        {/* LINKS */}
        <div className="hidden">
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
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
