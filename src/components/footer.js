import React from "react";

const footer = () => {
  return (
    <div className="bg-bluebg p-10 flex justify-around">
      <div>
        <p>Singh's Farm</p>
        <p>16 Schaap Road</p>
        <p>Schaapkraal</p>
        <p>Cape Town, 7941</p>
        <p>Phone: +27 21 396 1145</p>
        <p className="flex items-center gap-3">
          Social Media:
          <img
            className="w-8"
            src="/images/icons/facebook.svg"
            alt="facebook logo"
          />
          <img
            className="w-8"
            src="/images/icons/whatsapp.svg"
            alt="facebook logo"
          />
        </p>
      </div>
      <div>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
