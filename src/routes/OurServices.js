import React from "react";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import OurFleet from "./OurFleet";
import { Helmet } from "react-helmet-async";
import Vehicles from "./Vehicles";

const OurServices = () => (
  <>
    <Helmet>
      <title>
        Exploring SA - Charter services || Cape Town tours || tourist
        service || airport transfers and corporate transfers.
      </title>
      <meta
        name="description"
        content="Exploring SA Transport and Tours provides an extensive range of transportation and tourism services in South Africa. Whether you're planning your trip or navigating South Africa, we're your trusted choice for charter services, Cape Town tours, tourist service, airport transfers, and corporate transfers."
      />
      <link rel="canonical" href="/services" />
    </Helmet>
    <section className="h-[55vh] relative mb-48 2xl:h-[95vh]">
      {/*  */}

      {/* IMAGE AND OVERLAY */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full lg:max-h-[65vh] 2xl:max-h-[95vh]">
        <img
          className="w-full h-full 2xl:h-[75vh]"
          src="images/services.jpg"
          alt="cape town view from table mountain"
          width={"1250px"}
          height={"1050px"}
        />
        <div className="bg-[#FFE4C4] bg-opacity-[50%] w-full h-full absolute top-0 left-0 z-10 2xl:h-[75vh]" />
      </div>
      {/*  */}

      {/* TEXT CONTENT */}
      <div
        className="mx-auto absolute -bottom-20 p-2 
           sm:left-9
           md:left-1
           lg:left-[5%] lg:max-w-[90%]
           xl:max-w-[80%] xl:left-[9.5%]
           2xl:bottom-[5%]
           "
      >
        <h1 className="mb-10 text-2xl font-extrabold text-blueText sm:text-3xl md:mb-12 lg:text-4xl lg:mb-20 xl:-ml-24 2xl:-ml-20 2xl:mb-20">
          OUR SERVICES
        </h1>
        <div className="bg-[#FFFFFF] w-[95%] h-full px-3 py-1 rounded-2xl sm:p-5 xl:p-6 mx-auto">
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:font-semibold ">
            Exploring SA Transport and Tours is a trusted provider of
            transportation and tourism services in South Africa. With
            over 20 years of experience, we offer a wide range of
            services, including charter services, tourist services,
            and more. Our fleet of well-maintained vehicles is perfect
            for any occasion, and our team of professional drivers and
            registered tour guides are committed to ensuring your
            safety and enjoyment. We look forward to serving you and
            creating a long-lasting relationship.
          </p>
        </div>
      </div>
    </section>
    {/*  */}

    <Services />
    <WhyChooseUs />
    <OurFleet />
    <Vehicles />
  </>
);

export default OurServices;
