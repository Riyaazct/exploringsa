import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section>
      <div className="w-full p-16 m-auto text-center text-bluebg bg-lightGreen">
        <h2 className="text-2xl ">
          <span className="font-light">WHY </span>
          <span className="font-extrabold ">CHOOSE US?</span>
        </h2>
        <p className="px-5 text-base ">
          Your Trusted Partner for{" "}
          <span className="font-semibold">
            Safe, Reliable, And Tailored Transportation{" "}
          </span>
          Across South Africa
        </p>
      </div>
      <div className="relative">
        <img src="images/sections/why choose us.jpg" alt="" />
        <div className="absolute top-0 w-screen h-full bg-black bg-opacity-10" />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
