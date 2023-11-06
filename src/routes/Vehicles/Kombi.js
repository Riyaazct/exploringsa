import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesForVehicleCarousel.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Kombi = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center w-full h-[60vh] p-5 mb-20 text-center lg:ml-12 lg:flex-row lg:gap-6 xl:gap-0 lg:p-10 lg:container 2xl:max-w-7xl xl:mx-auto 2xl:gap-16">
        <div>
          <h2 className="p-3 mb-5 text-3xl lg:text-3xl 2xl:text-4xl">
            VW Transporter Kombi (T6)
          </h2>
          <h3 className="mb-3 text-xl lg:pb-4 lg:text-xl 2xl:text-2xl">
            Explore the VW Transporter, your perfect partner in
            tourism:
          </h3>
        </div>
        <div className="mx-auto lg:max-w-5xl ">
          <ol className="mx-auto text-left list-decimal list-inside lg:text-lg ">
            <li className="p-1 leading-tight 2xl:leading-7">
              Spacious Interior: Accommodate up to 9 passengers
              comfortably.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Safe Journeys: Equipped with advanced safety features.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Scenic Views: Large windows for sightseeing.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Comfortable Seating: Plush, adjustable seats for long
              trips.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Climate Control: Keep everyone cozy during all seasons.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Ample Luggage Space: Store your travel gear with ease.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Modern Infotainment: Keep your guests entertained.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Efficient Fuel Economy: Save on travel costs.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Eco-Friendly: Reduced emissions for responsible tourism.
            </li>
          </ol>
        </div>
      </div>
      <h4 className="py-5 text-lg text-center lg:text-3xl">
        "Embark on memorable journeys with the VW Transporter!"
      </h4>
      <ImageGallery items={images} autoPlay={true} />
    </section>
  );
};

export default Kombi;
