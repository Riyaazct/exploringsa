import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesForVehicleCarousel.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Kombi = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center w-full p-5 mb-20 text-center lg:mx-16 lg:flex-row">
        <div>
          <h2 className="p-3 mb-5 text-3xl lg:text-5xl">
            VW Transporter Kombi (T6)
          </h2>
          <h3 className="mb-3 text-xl lg:pb-4 lg:text-2xl">
            Explore the VW Transporter, your perfect partner in
            tourism:
          </h3>
        </div>
        <div className="max-w-5xl mx-auto">
          <ol className="max-w-2xl mx-auto text-left list-decimal list-inside lg:text-xl ">
            <li className="p-1">
              Spacious Interior: Accommodate up to 9 passengers
              comfortably.
            </li>
            <li className="p-1">
              Safe Journeys: Equipped with advanced safety features.
            </li>
            <li className="p-1">
              Scenic Views: Large windows for sightseeing.
            </li>
            <li className="p-1">
              Comfortable Seating: Plush, adjustable seats for long
              trips.
            </li>
            <li className="p-1">
              Climate Control: Keep everyone cozy during all seasons.
            </li>
            <li className="p-1">
              Ample Luggage Space: Store your travel gear with ease.
            </li>
            <li className="p-1">
              Modern Infotainment: Keep your guests entertained.
            </li>
            <li className="p-1">
              Efficient Fuel Economy: Save on travel costs.
            </li>
            <li className="p-1">
              Eco-Friendly: Reduced emissions for responsible tourism.
            </li>
          </ol>
        </div>
      </div>
      <h4 className="py-5 text-4xl text-center">
        "Embark on memorable journeys with the VW Transporter!"
      </h4>
      <ImageGallery items={images} autoPlay={true} />
    </section>
  );
};

export default Kombi;
