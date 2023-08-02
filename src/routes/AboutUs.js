import React from "react";
import Vision from "./Vision";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutUs = () => (
  <>
    <Helmet>
      <title>
        Exploring SA Transport and Tours: Your Premier Transportation
        and Tourism Provider in South Africa
      </title>
      <meta
        name="Exploring SA Transport and Tours | South Africa Travel Agency | South Africa Tour Operator | South Africa executive car Service"
        content="Exploring SA Transport and Tours is your premier transportation and tourism provider in South Africa. We offer a range of services to meet your needs, including tourist services, charter services, airport transfers, and corporate transfers."
      />
      <link rel="canonical" href="/about" />
    </Helmet>
    <section>
      <div className="relative mb-52 sm:mb-36 md:mb-0 md:h-[80vh] lg:mb-[150px] 2xl:h-[90vh] ">
        <h1
          className="text-center my-12 text-2xl font-semibold text-blueText 
                     md:mt-0 md:pt-12 md:mb-12 md:text-3xl lg:text-4xl lg:mb-24 xl:text-5xl
                     animate-jump-in animate-once animate-duration-[2000ms] animate-ease-in"
        >
          OUR STORY
        </h1>
        <div
          className="flex flex-col-reverse justify-center items-center sm:mx-5 gap-5 sm:flex-row md:gap-7 
                      xl:mx-auto xl:max-w-[1650px] lg:max-w-[1000px] md:mx-auto md:max-w-[800px]
                      2xl:gap-10"
        >
          {/* TEXT */}
          <div
            className="max-w-[90%] sm:max-w-[50%] text-center rounded-lg mt-5 
                        md:max-w-[45%] lg:max-w-[55%] xl:max-w-[45%]"
          >
            <p
              className="my-auto text-blueText font-semibold 
          sm:text-left
          md:text-[1.06rem] md:px-4
          lg:text-lg
          xl:text-2xl
          animate-fade-right animate-once animate-duration-[1000ms] animate-ease-linear"
            >
              Exploring SA Transport and Tours was founded in 2018 by
              a team with over 20 years of experience in
              transportation and tourism. Our mission is to provide
              exceptional service while showcasing the beauty of South
              Africa. From our humble beginnings as a family-operated
              business, we've worked tirelessly to ensure that our
              services are of the highest quality and have earned the
              loyalty of many satisfied clients.
            </p>
            {/* BUTTON */}
            <Link to="/contact">
              <button className="h-12 mt-5 mb-6 text-sm font-semibold md:mb-0">
                Reserve your Spot
              </button>
            </Link>
            {/* Background div */}
            <div
              className="bg-lightGreen absolute h-full max-h-[550px] w-[100%] left-0 top-[300px] -z-10 
                          aboutBg 
                          sm:-top-[3rem] sm:left-0 
                          md:max-w-[80vw] md:max-h-[57vh] 
                          lg:max-h-[72vh] lg:max-w-[80vw] 
                          xl:max-h-[78vh] 
                          2xl:max-w-[75vw] 2xl:max-h-[82vh]"
            />
          </div>
          {/* IMAGE */}
          <div className="relative sm:mb-10 md:max-w-[58%] lg:max-w-[55%] animate-fade-left animate-once animate-duration-[1000ms] animate-ease-linear">
            <img
              className=" m-auto sm:min-h-[280px] sm:w-auto sm:rounded-lg md:max-h-[40%] lg:max-w-[480px] 
                        xl:max-w-[550px] 2xl:max-w-[650px] "
              src="images/our story 2.jpg"
              alt="the company tour guide and owner with some tourists"
            />
            <div className="absolute bg-[#000000] bg-opacity-[10%] top-0 w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
      <Vision />
    </section>
  </>
);

export default AboutUs;
