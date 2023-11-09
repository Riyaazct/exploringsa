import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesForCrafterCarousel.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Crafter = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center w-full h-[60vh] p-5 mb-20 text-center lg:ml-12 md:flex-row lg:gap-6 xl:gap-0 lg:p-10 lg:container 2xl:max-w-7xl xl:mx-auto 2xl:gap-16">
        <div>
          <h2 className="p-3 mb-5 text-3xl lg:text-3xl 2xl:text-4xl">
            18/22 Seater Minibus
          </h2>
        </div>
        <div className="mx-auto lg:max-w-5xl ">
          <h3 className="mb-3 text-lg font-semibold lg:text-xl 2xl:text-2xl">
            Your top choice for group tours and charter services:
          </h3>
          <ul className="mx-auto text-left list-disc list-inside lg:text-lg ">
            <li className="p-1 leading-tight 2xl:leading-7">
              Spacious Capacity: Seats up to 22 passengers for larger
              groups.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Safe Travels: Equipped with advanced safety features for
              secure journeys.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Panoramic Views: Large windows offer scenic vistas
              during trips.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Premium Comfort: Comfortable and adjustable seats for
              extended travels.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Climate Control: Enjoy climate control for year-round
              comfort.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Generous Luggage Space: Easily accommodate luggage for
              tour groups.
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
      <h4 className="py-5 text-lg text-center md:text-2xl lg:text-3xl 2xl:mb-44">
        "Choose the 18/22 seater Minibus for remarkable tours and
        excursions, offering spacious seating, advanced safety,
        panoramic views, and more."
      </h4>
      <ImageGallery items={images} autoPlay={true} />
    </section>
  );
};

export default Crafter;
