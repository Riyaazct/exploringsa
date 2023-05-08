import React from "react";
import Vision from "./Vision";

const AboutUs = () => (
  <>
    <div className="relative pt-16">
      <h1 className="text-center my-6 text-2xl font-semibold text-blueText md:mt-16 md:text-3xl">
        OUR STORY
      </h1>
      <div className="flex flex-col-reverse justify-center items-center gap-5 md:flex-row md:gap-7 ">
        {/* TEXT */}
        <div className="max-w-[90%] sm:max-w-[80%] text-center rounded-lg mt-5 md:max-w-[45%] lg:max-w-[40%]">
          <p className="my-auto text-lg text-blueText font-semibold md:text-base md:px-4 lg:text-lg">
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
          <div className="bg-lightGreen absolute h-full max-h-[340px] w-[100%] left-0 bottom-4 -z-10 aboutBg sm:left-10 sm:max-w-[90%] md:-bottom-5 md:left-6 md:max-w-[80%] md:max-h-[400px] lg:min-w-[85vw] lg:min-h-[50vh]" />
        </div>
        {/* IMAGE */}
        <div className="relative max-w-[75%] md:max-w-[48%]">
          <img
            className=" m-auto rounded-lg md:max-h-[40%]"
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
