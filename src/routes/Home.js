import React from "react";

const bgPath = "/images/home.jpg";

const Home = () => (
  <div>
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhite text-center z-10 w-full">
        <h1 className="font-semibold text-2xl ">
          Welcome to Exploring SA Transport and Tours, your premier
          transportation and tourism provider in South Africa
        </h1>
        <button className="px-3 py-2 mt-3 opacity-80 text-lg hover:opacity-100 font-semibold">
          Explore Our Services
        </button>
      </div>
      <div
        style={{ "--image-url": `url(${bgPath})` }}
        // reference: https://stackoverflow.com/a/70810692/19529897
        className="bg-[image:var(--image-url)] h-[75vh] bg-scroll bg-center bg-cover"
      ></div>
      <div className="w-full h-full bg-[#000000a7] absolute top-0"></div>
    </div>
    <h1 className="text-center my-16 text-3xl text-blueText font-semibold">
      "Unlock the treasures of South Africa with us"
    </h1>
  </div>
);

export default Home;
