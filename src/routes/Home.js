import React from "react";
const bgPath = "/images/home.jpg";

const Home = () => (
  <section className="md:flex">
    <div className="relative">
      {/*  */}

      {/* TEXT CONTENT & BUTTON */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhite text-center z-10 w-full max-w-[85%] md:top-52 ">
        <h1 className="font-semibold text-[1.1rem] sm:text-[1.3rem] 2xl:text-3xl xl:text-2xl md:hidden animate-fade-down animate-once animate-duration-1000 animate-ease-in">
          Welcome to Exploring SA Transport and Tours, your premier
          transportation and tourism provider in South Africa
        </h1>
        <button
          className="p-2 mt-4 text-sm opacity-80 hover:opacity-100 text-blueText font-semibold duration-500 animate-shake animate-twice animate-duration-[1000ms] animate-ease-in
                     sm:text-[1.4rem] sm:p-3
                     xl:p-4 xl:text-2xl 2xl:font-extrabold md:hidden"
        >
          Explore our Services
        </button>
      </div>
      {/*  */}

      {/* IMAGE */}
      <div className="relative ">
        <img
          src={bgPath}
          alt="Company vehicle"
          className="max-h-[90vh] min-w-full
                     md:max-h-[65vh] md:min-w-[55vw] 
                     xl:min-w-[45vw] xl:max-h-[100vh]"
        />
        <div className="w-full h-full bg-[#000000a7] absolute top-0 xl:min-w-[45vw] md:hidden"></div>
      </div>
    </div>

    {/* TEXT CONTENT FOR SCREENS > 768px */}
    <div className="text-center my-12 text-2xl text-blueText font-semibold md:flex md:items-center md:m-auto xl:mx-auto xl:text-3xl 2xl:text-4xl xl:max-w-[45vw] md:flex-col">
      <div className="hidden md:block">
        <h1 className="font-semibold text-[1.2rem] sm:text-[1.3rem] xl:text-2xl 2xl:text-3xl lg:max-w-[80%] lg:mx-auto md:mx-5 animate-fade-left animate-once animate-delay-200 animate-ease-in">
          Welcome to Exploring SA Transport and Tours, your premier
          transportation and tourism provider in South Africa
        </h1>
      </div>

      {/* TEXT CONTENT DISPLAYED ON THE MOBILE VIEW ONLY */}
      <h1 className="text-[1.0rem] sm:text-2xl font-extrabold md:hidden animate-fade-right animate-once animate-duration-[1500ms] animate-delay-500 animate-ease-in-out up">
        "Unlock the treasures of South Africa with us"
      </h1>
      <button className="hidden md:block md:p-2 md:mt-6 md:text-lg sm:text-[1.3rem] md:opacity-95 md:hover:opacity-100 md:text-blueText md:font-semibold xl:p-4 xl:text-2xl 2xl:font-extrabold animate-jump-in animate-once animate-duration-[1500ms] animate-ease-in-out">
        Explore our Services
      </button>
    </div>
  </section>
);

export default Home;
