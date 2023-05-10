import React from "react";
import Vision from "./Vision";

const AboutUs = () => (
  <>
    <div className="relative pt-16 md:mt-24 mb-24 md:mb-32">
      <h1 className="text-center my-12 text-2xl font-semibold text-blueText md:mt-16 md:text-3xl lg:text-4xl 2xl:mt-0 2xl:mb-28">
        OUR STORY
      </h1>
      <div className="flex flex-col-reverse justify-center items-center gap-5 md:flex-row md:gap-7 xl:mx-auto xl:max-w-[1650px] lg:max-w-[1000px] md:mx-auto md:max-w-[800px] 2xl:gap-10">
        {/* TEXT */}
        <div className="max-w-[80%] text-center rounded-lg mt-5 md:max-w-[45%] lg:max-w-[40%] xl:max-w-[35%]">
          <p className="my-auto text-lg text-blueText font-semibold md:text-base md:px-4 lg:text-lg xl:text-2xl text-left">
            Exploring SA Transport and Tours was founded in 2018 by a
            team with over 20 years of experience in transportation
            and tourism. Our mission is to provide exceptional service
            while showcasing the beauty of South Africa. From our
            humble beginnings as a family-operated business, we've
            worked tirelessly to ensure that our services are of the
            highest quality and have earned the loyalty of many
            satisfied clients.
          </p>
          {/* BUTTON */}
          <button className="mt-5 mb-6 h-12 text-sm font-semibold md:mb-0">
            Reserve your Spot
          </button>
          {/* Background div */}
          <div
            className="bg-lightGreen absolute h-full max-h-[540px] w-[100%] left-0 bottom-4 -z-10 
                          aboutBg sm:left-10 sm:max-w-[90%] md:-bottom-5 md:left-[2%] md:max-w-[65vw]
                          md:max-h-[42vh] lg:left-6 lg:max-h-[52vh] lg:max-w-[75vw] xl:max-h-[55vh] xl:max-w-[1000px] xl:left-[7%]
                          2xl:max-w-[1250px] 2xl:left-40"
          />
        </div>
        {/* IMAGE */}
        <div className="relative max-w-[75%] md:max-w-[48%] lg:max-w-[55%]">
          <img
            className=" m-auto rounded-lg md:max-h-[40%] lg:max-w-[480px] xl:max-w-[550px]"
            src="images/our story 2.jpg"
            alt="the company tour guide and owner with some tourists"
          />
          <div className="absolute bg-[#000000] bg-opacity-[10%] top-0 w-full h-full rounded-lg" />
        </div>
      </div>
    </div>
    <Vision />
  </>
);

export default AboutUs;
