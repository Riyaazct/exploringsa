import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesForKombiCarousel.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Kombi = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center w-full h-[60vh] p-5 mb-20 text-center lg:ml-12 md:flex-row lg:gap-6 xl:gap-0 lg:p-10 lg:container 2xl:max-w-7xl xl:mx-auto 2xl:gap-16">
        <div>
          <h2 className="p-3 mb-5 text-3xl lg:text-3xl 2xl:text-4xl">
            7 Seater
          </h2>
        </div>
        <div className="mx-auto lg:max-w-5xl ">
          <h3 className="mb-3 text-lg font-semibold lg:text-xl 2xl:text-2xl">
            Your ideal choice for tourism:
          </h3>
          <ul className="mx-auto text-left list-disc list-inside lg:text-lg ">
            <li className="p-1 leading-tight 2xl:leading-7">
              Spacious Interior: Perfect for group tours, airport
              transfers, and charter services.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Safe Journeys: Advanced safety features ensure secure
              travel.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Scenic Views: Large windows for sightseeing adventures.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Comfortable Seating: Plush, adjustable seats for
              long-distance trips.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Climate Control: Enjoy comfort in all weather
              conditions.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Ample Luggage Space: Easily accommodate luggage for
              tourist.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Extra luggage trailer: Easily accommodate extra luggage
              for tourist.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Public Address System (PA): Keep tourist informed during
              the journey.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Full comprehensive insurance plus passenger liability
              and 3rd party cover.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Drivers have valid professional driving permits.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              All operating licenses in place and routinely inspected
              for road worthiness.
            </li>
          </ul>
        </div>
      </div>
      <h4 className="py-5 text-lg text-center md:text-2xl lg:text-3xl">
        "Choose the 7 Seater for memorable tours and excursions"
      </h4>
      <ImageGallery items={images} autoPlay={true} />
    </section>
  );
};

export default Kombi;
