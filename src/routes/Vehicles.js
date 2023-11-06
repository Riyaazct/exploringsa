import React from "react";
import data from "../data/carouselData.json";

const Vehicles = () => {
  return (
    <>
      <section className="mb-20 text-gray-600 body-font">
        <div className="flex flex-wrap p-5 mx-auto sm:container ">
          <div className="mx-auto lg:w-2/3 ">
            <div className="relative flex flex-wrap w-full px-10 py-32 mb-4 bg-gray-100">
              <img
                alt={data[0].alt}
                className="absolute inset-0 block object-cover object-center h-full opacity-30 w-[600px] mx-auto"
                src={data[0].image}
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
                  {data[0].vehicle}
                </h2>
                <p className="max-w-xl mx-auto leading-relaxed">
                  {data[0].description}
                </p>
                <a
                  className="inline-flex items-center mt-3 font-bold text-indigo-500 "
                  href="."
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                  <img
                    alt={data[1].alt}
                    className="absolute inset-0 block object-fill object-center w-full h-full opacity-30 md:object-cover"
                    src={data[1].image}
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">
                      {data[1].vehicle}
                    </h2>
                    <p className="leading-relaxed">
                      {data[1].description}
                    </p>
                    <a
                      className="inline-flex items-center mt-3 font-bold text-indigo-500 "
                      href="."
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                  <img
                    alt={data[2].alt}
                    className="absolute inset-0 block object-fill object-center w-full h-full opacity-30 md:object-cover"
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
                      className="inline-flex items-center mt-3 font-bold text-indigo-500 "
                      href="."
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
