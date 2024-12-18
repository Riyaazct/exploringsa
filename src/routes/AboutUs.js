import React from "react";
import Vision from "./Vision";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutUs = () => (
  <>
    <Helmet>
      <title>Exploring SA - Tours & Transfers in Cape Town</title>
      <meta
        name="description"
        content="Learn more about Exploring SA Transport and Tours, South Africa's premier transportation provider offering tours, airport transfers, corporate and charter services."
      />
      <link rel="canonical" href="https://exploringsa.co.za/about" />
    </Helmet>
    <section>
      <div className="relative mb-36 md:mb-0 md:h-[80vh] lg:mb-[150px] 2xl:h-[90vh] ">
        <h1
          className="text-center my-12 text-2xl font-semibold text-blueText 
                     md:mt-0 md:pt-12 md:mb-12 md:text-3xl lg:text-4xl lg:mb-24 xl:text-5xl
                     animate-jump-in animate-once animate-duration-[1000ms] animate-ease-in"
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
                        md:max-w-[45%] lg:max-w-[55%] xl:max-w-[35%] lg:flex lg:flex-col"
          >
            <p
              className="my-auto text-blueText 
          sm:text-center
          md:text-[1.06rem] md:px-4
          lg:text-lg
          xl:text-2xl
          animate-fade-right animate-once animate-duration-[1000ms] animate-ease-linear
          lg:p-5"
            >
              Established in 2018 by a team with over 20 years of
              experience, Exploring SA Transport and Tours is a
              family-operated business that provides exceptional
              service while showcasing the beauty of South Africa. Our
              commitment to quality has earned us the loyalty of many
              satisfied clients.
            </p>
            {/* BUTTON */}
            <Link to="/contact">
              <button className="h-12 mt-5 mb-6 text-sm font-semibold md:mb-0 lg:text-lg ">
                Reserve your Spot
              </button>
            </Link>
            {/* Background div */}
            <div
              className="bg-lightGreen absolute h-full max-h-[500px] w-[100%] left-0 top-[280px] -z-10 
                          aboutBg bg-opacity-30
                          sm:-top-[5rem] sm:left-0 
                          md:max-w-[80vw] md:max-h-[55vh] md:top-10
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
              src="images/ourStory.webp"
              alt="the company tour guide and owner with some tourists"
              width={"1250px"}
              height={"1050px"}
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
