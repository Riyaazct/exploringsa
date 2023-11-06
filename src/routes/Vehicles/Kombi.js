import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesForVehicleCarousel.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Kombi = () => {
  return (
    <section className="my-16">
      <div className="flex items-center p-5 mx-16 mb-20 text-4xl text-center">
        <div>
          <h2 className="p-3 text-5xl">VW Transporter Kombi (T6)</h2>
          <h3 className="pb-4 text-2xl">
            Explore the VW Transporter, your perfect partner in
            tourism:
          </h3>
        </div>
        <div className="max-w-5xl mx-auto">
          <ol className="max-w-2xl mx-auto text-xl text-left list-decimal list-inside ">
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
      <ImageGallery items={images} />
    </section>
  );
};

export default Kombi;
