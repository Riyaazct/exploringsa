import React from "react";

const OurServices = () => (
  <div className="mt-14 h-screen relative">
    <div className="absolute -z-10 top-0 left-0">
      <img src="images/services.jpg" alt="" />
      <div className="bg-[#FFE4C4] bg-opacity-[54%] w-full h-full absolute top-0 left-0 z-10" />
    </div>
    <div className="absolute top-96">
      <h1 className="text-2xl text-blueText font-bold ml-4 mb-4">
        OUR SERVICES
      </h1>
      <div className="bg-[#FFFFFF] w-full h-full p-3">
        <p>
          At Exploring SA Transport and Tours, we offer a range of
          transportation and tourism services to meet your needs. With
          over 20 years of experience in the industry, we take pride
          in providing high-quality and reliable services to our
          clients. Our fleet ranges from 4-seater sedans to 22-seater
          buses, all of which are well-maintained, roadworthy, and
          fully licensed. Whether you're looking for charter services
          or tourist services, we've got you covered. Our team of
          professional drivers and registered tour guides are
          committed to ensuring that you have a safe and enjoyable
          experience with us. We look forward to serving you and
          creating a long-lasting relationship.
        </p>
      </div>
    </div>
  </div>
);

export default OurServices;
