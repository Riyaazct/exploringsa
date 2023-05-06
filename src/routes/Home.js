import React from "react";

const bgPath = "/images/home.jpg";

const Home = () => (
  <div className="md:flex">
    <div className="relative">
      {/* TEXT CONTENT & BUTTON */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhite text-center z-10 w-full max-w-[85%]">
        <h1 className="font-semibold text-[1.2rem] 2xl:text-3xl xl:text-2xl ">
          Welcome to Exploring SA Transport and Tours, your premier
          transportation and tourism provider in South Africa
        </h1>
        <button className="p-2 mt-4 text-lg opacity-80 hover:opacity-100 text-blueText font-semibold xl:p-4 xl:text-2xl 2xl:font-extrabold">
          Explore our Services
        </button>
      </div>
      {/* IMAGE */}
      <div className="relative">
        <img
          src={bgPath}
          alt="Company vehicle"
          className="max-h-[90vh] min-w-full object-fill xl:min-w-[45vw] xl:max-h-[92vh]"
        />
        <div className="w-full h-full bg-[#000000a7] absolute top-0 xl:min-w-[45vw]"></div>
      </div>
    </div>
    <div className="text-center my-12 text-2xl text-blueText font-semibold md:flex md:items-center md:m-auto xl:mx-auto xl:text-3xl 2xl:text-4xl xl:max-w-[45vw]">
      <h1>"Unlock the treasures of South Africa with us"</h1>
    </div>
  </div>
);

export default Home;
