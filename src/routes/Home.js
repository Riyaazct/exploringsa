import React from "react";

const bgPath = "/images/home.jpg";

const Home = () => (
  <div>
    <div className="relative">
      {/* TEXT CONTENT & BUTTON */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhite text-center z-10 w-full">
        <h1 className="font-semibold text-[1.2rem]">
          Welcome to Exploring SA Transport and Tours, your premier
          transportation and tourism provider in South Africa
        </h1>
        <button className="mt-4 text-lg opacity-80 hover:opacity-100 text-offWhite border-offWhite hover:transform hover:scale-105 hover:duration-700 w-[130px]">
          Explore our Services
        </button>
      </div>
      {/* IMAGE */}
      <div>
        <img src={bgPath} alt="" className="object-fill" />
        <div className="w-full h-full bg-[#000000a7] absolute top-0"></div>
      </div>
    </div>

    <h1 className="text-center my-12 text-2xl text-blueText font-semibold">
      "Unlock the treasures of South Africa with us"
    </h1>
  </div>
);

export default Home;
