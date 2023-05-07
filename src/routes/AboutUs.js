import React from "react";

const AboutUs = () => (
  <div className="relative">
    <h1 className="text-center my-4 text-2xl font-semibold text-blueText">
      OUR STORY
    </h1>
    <div className="flex flex-col-reverse justify-center items-center gap-5">
      {/* Background div */}
      <div className="bg-lightGreen absolute h-full w-full top-0 -z-10" />

      {/* TEXT */}
      <div className="max-w-[40%]">
        <p className="text-sm my-auto text-center">
          Exploring SA Transport and Tours was founded in 2018 by a
          team with over 20 years of experience in transportation and
          tourism. Our mission is to provide exceptional service while
          showcasing the beauty of South Africa. From our humble
          beginnings as a family-operated business, we've worked
          tirelessly to ensure that our services are of the highest
          quality and have earned the loyalty of many satisfied
          clients.
        </p>
        <button>Reserve your Spot</button>
      </div>
      {/* IMAGE AND BUTTON */}
      <div className="relative">
        <img
          className="w-screen"
          src="images/our story.jpg"
          alt="the company tour guide and owner with some tourists"
        />
        <div className="absolute bg-[#000000] bg-opacity-[26%] top-0 h-full w-screen" />
      </div>
    </div>
  </div>
);

export default AboutUs;
