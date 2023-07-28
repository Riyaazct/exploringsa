import React from "react";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import OurFleet from "./OurFleet";
import Carousel from "../components/Carousel";
import { Helmet } from "react-helmet-async";

const OurServices = () => (
  <>
    <Helmet>
      <title>Our Services</title>
      <meta
        name="description"
        content="Discover our comprehensive range of travel services, including tour packages, transportation options, and personalized itineraries. Start your dream adventure today!"
      />
    </Helmet>
    <section className="h-[55vh] relative mb-48 2xl:h-[95vh]">
      {/*  */}

      {/* IMAGE AND OVERLAY */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full lg:max-h-[65vh] 2xl:max-h-[95vh]">
        <img
          className="w-full h-full 2xl:h-[75vh]"
          src="images/services.jpg"
          alt=""
        />
        <div className="bg-[#FFE4C4] bg-opacity-[50%] w-full h-full absolute top-0 left-0 z-10 2xl:h-[75vh]" />
      </div>
      {/*  */}

      {/* TEXT CONTENT */}
      <div
        className="w-[90%] mx-auto absolute -bottom-36 left-6 
           sm:left-9
           md:left-11
           lg:left-[5%] lg:max-w-[90%]
           xl:max-w-[80%] xl:left-[9.5%]
           2xl:bottom-[12%]
           "
      >
        <h1 className="mb-10 text-2xl font-extrabold text-blueText sm:text-3xl md:mb-12 lg:text-4xl lg:mb-20 xl:-ml-24 2xl:-ml-20 2xl:mb-24">
          OUR SERVICES
        </h1>
        <div className="bg-[#FFFFFF] w-full h-full px-3 py-1 rounded-2xl sm:p-5 xl:p-6">
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:font-semibold ">
            At Exploring SA Transport and Tours, we offer a range of
            transportation and tourism services to meet your needs.
            With over 20 years of experience in the industry, we take
            pride in providing high-quality and reliable services to
            our clients. Our fleet ranges from 4-seater sedans to
            22-seater buses, all of which are well-maintained,
            roadworthy, and fully licensed. Whether you're looking for
            charter services or tourist services, we've got you
            covered. Our team of professional drivers and registered
            tour guides are committed to ensuring that you have a safe
            and enjoyable experience with us. We look forward to
            serving you and creating a long-lasting relationship.
          </p>
        </div>
      </div>
    </section>
    {/*  */}

    <Services />
    <WhyChooseUs />
    <OurFleet />
    <Carousel />
  </>
);

export default OurServices;
