import React from "react";

const Navbar = () => (
  <nav className="flex justify-around items-center">
    <div>
      <h2>Exploring SA</h2>
      <p>Travel and Tours</p>
    </div>
    <div>
      <ul className="flex">
        <li className="p-2">Home</li>
        <li className="p-2">About Us</li>
        <li className="p-2">Services</li>
        <li className="p-2">Contact</li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
