import React from "react";
import data from "../data/carouselData.json";

const Vehicles = () => {
  return (
    <>
      <section className="mb-20 text-gray-600 body-font">
        <div className="flex flex-wrap h-screen mx-auto sm:container">
          {/*  */}

          {/* CARDS CONTAINER */}
          <div className="h-full m-auto bg-lightGreen lg:w-full xl:max-w-7xl">
            {/*  */}
            <div className="flex h-full ">
              {/* CARD 2 */}
              <div className="mb-16 md:px-2 md:w-1/2 md:mb-0">
                <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                  <img
                    alt={data[0].alt}
                    className="absolute inset-0 block object-fill object-center w-full h-full opacity-10 md:object-cover min-h-[350px] sm:min-h-[400px]"
                    src={data[0].image}
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">
                      {data[0].vehicle}
                    </h2>
                    <p className="leading-relaxed">
                      {data[0].description}
                    </p>
                    <a
                      className="inline-flex items-center mt-3 font-extrabold transition duration-500 transform text-bluebg hover:scale-105 "
                      href="/crafter01"
                      target="_blank"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="mb-10 md:mb-0 md:px-2 md:w-1/2">
                <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                  <img
                    alt={data[2].alt}
                    className="absolute inset-0 block object-fill object-center w-full h-full opacity-10 md:object-cover min-h-[350px] sm:min-h-[400px]"
                    src={data[2].image}
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">
                      {data[2].vehicle}
                    </h2>
                    <p className="leading-relaxed">
                      {data[2].description}
                    </p>
                    <a
                      className="inline-flex items-center mt-3 font-extrabold transition duration-500 transform text-bluebg hover:scale-105"
                      href="quantum01"
                      target="_blank"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicles;
