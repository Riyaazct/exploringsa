import React from "react";
import { Link } from "react-router-dom";
const bgPath = "/images/home.jpg";

const Home = () => (
  <section className="lg:flex">
    <div className="relative">
      {/*  */}

      {/* TEXT CONTENT & BUTTON */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhite text-center z-10 w-full max-w-[85%]">
        <h1 className="font-semibold text-[1.1rem] md:text-[1.5rem] max-w-[90%] lg:hidden ">
          {/* animate-fade-down animate-once animate-duration-1000 animate-ease-in */}
          Welcome to Exploring SA Transport and Tours, your premier
          transportation and tourism provider in South Africa
        </h1>
        {/* BUTTON - <= 768px ONLY */}
        <Link to="/services#services">
          <button
            className="p-2 mt-5 text-sm opacity-80 hover:opacity-100 text-blueText font-semibold 
            sm:text-[1.2rem] sm:p-3
            lg:hidden duration-500 animate-shake animate-once animate-duration-[2000ms] animate-ease-in"
          >
            Explore our Services
          </button>
        </Link>
      </div>
      {/*  */}

      {/* IMAGE */}
      <div className="relative ">
        <img
          src={bgPath}
          style={
            window.innerWidth <= 768
              ? { width: "100%", height: "100vh" }
              : { width: "1080px", height: "1440px" }
          }
          alt="Company vehicle"
          className="w-full h-full max-h-[90vh]"
          width={"1250px"}
          height={"1050px"}
        />
        <div className="w-full h-full bg-[#000000a7] absolute top-0 xl:min-w-[45vw] lg:hidden"></div>
      </div>
    </div>

    {/* TEXT CONTENT FOR SCREEN LG PLUS */}
    <div className="text-center my-12 text-2xl text-blueText font-semibold lg:flex lg:items-center lg:m-auto xl:mx-auto xl:text-3xl 2xl:text-4xl xl:max-w-[55vw] lg:flex-col">
      <div className="hidden lg:block">
        <h1
          className="font-semibold text-[1.2rem] sm:text-[1.3rem] xl:text-2xl 2xl:text-3xl lg:max-w-[80%] lg:mx-auto md:mx-5 
                       animate-fade-left animate-once animate-delay-200 animate-ease-in"
        >
          Welcome to Exploring SA Transport and Tours, your premier
          transportation and tourism provider in South Africa
        </h1>
      </div>

      {/* TEXT CONTENT DISPLAYED ON screens <= 768px */}
      <h1
        className="text-[1.0rem] sm:text-2xl font-extrabold 
                     lg:hidden animate-fade-right animate-once animate-duration-[1500ms] animate-delay-500 animate-ease-in-out up"
      >
        "Unlock the treasures of South Africa with us"
      </h1>
      {/* BUTTON FOR SCREENS LG PLUS */}
      <Link to="/services#services">
        <button className="hidden lg:block md:p-2 lg:mt-6 md:text-lg lg:text-[1.3rem] lg:opacity-95 md:hover:opacity-100 md:text-blueText md:font-semibold xl:p-3 xl:text-xl 2xl:font-extrabold lg:animate-jump-in lg:animate-once lg:animate-duration-[1500ms] lg:animate-ease-in-out">
          Explore our Services
        </button>
      </Link>
    </div>
  </section>
);

export default Home;
