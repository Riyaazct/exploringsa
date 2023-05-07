import React from "react";

const AboutUs = () => (
  <div className="relative pt-16">
    <h1 className="text-center my-6 text-2xl font-semibold text-blueText">
      OUR STORY
    </h1>
    <div className="flex flex-col-reverse justify-center items-center gap-5">
      {/* Background div */}

      {/* TEXT */}
      <div className="max-w-[90%] sm:max-w-[80%] text-center relative rounded-lg">
        <p className="my-auto text-lg text-blueText font-semibold">
          Exploring SA Transport and Tours was founded in 2018 by a
          team with over 20 years of experience in transportation and
          tourism. Our mission is to provide exceptional service while
          showcasing the beauty of South Africa. From our humble
          beginnings as a family-operated business, we've worked
          tirelessly to ensure that our services are of the highest
          quality and have earned the loyalty of many satisfied
          clients.
        </p>
        <button className="mt-5 mb-6 h-12 text-sm font-semibold">
          Reserve your Spot
        </button>
        <div className="bg-lightGreen absolute h-full w-[95vw] -left-6 -top-2 -z-10 aboutBg" />
      </div>
      {/* IMAGE AND BUTTON */}
      <div className="relative ">
        <img
          className="min-w-screen"
          src="images/our story 2.jpg"
          alt="the company tour guide and owner with some tourists"
        />
        <div className="absolute bg-[#000000] bg-opacity-[10%] top-0 w-full h-full " />
      </div>
    </div>
  </div>
);

export default AboutUs;
