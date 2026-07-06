import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesForCrafterCarousel.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Crafter = () => {
  return (
    <section className="flex flex-col gap-10 my-16 ">
      <div className="flex flex-col items-center w-full p-5 text-center lg:ml-12 md:flex-row lg:gap-6 xl:gap-0 lg:p-10 lg:container xl:mx-auto 2xl:gap-16">
        <div>
          <h2 className="p-3 mb-5 text-3xl lg:text-3xl 2xl:text-4xl">
            20 Seater Minibus
          </h2>
        </div>
        <div className="mx-auto lg:max-w-5xl ">
          <div  className="xl:ml-16 md:flex">
          <h3 className="mb-6 text-lg font-semibold lg:text-xl 2xl:text-2xl ">
            Your top choice for group tours and charter services:
          </h3>
          </div>
          <ul className="mx-auto text-sm text-left lg:text-lg max-w-[90%] space-y-2">
  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Luxury 20-Seater:</strong> Comfortably seats up to 20
      passengers with spacious legroom.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Full Luxury Interior:</strong> Premium reclining seats
      provide exceptional comfort on every journey.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Safe Travels:</strong> Equipped with advanced safety
      features for secure journeys.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Panoramic Views:</strong> Large windows offer scenic vistas
      during trips.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Climate Control:</strong> Enjoy climate control for
      year-round comfort.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Generous Luggage Space:</strong> Easily accommodate luggage
      for tour groups.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Extra Luggage Trailer:</strong> Easily accommodate extra
      luggage for tourists.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Public Address System (PA):</strong> Keep tourists informed
      during the journey.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Comprehensive Insurance:</strong> Full comprehensive
      insurance plus passenger liability and third-party cover.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Professional Drivers:</strong> All drivers hold valid
      Professional Driving Permits (PrDPs).
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Fully Licensed & Roadworthy:</strong> All operating
      licences are in place and routinely inspected for roadworthiness.
    </span>
  </li>
</ul>
        </div>
      </div >
      
      <div>
      <h4 className="py-5 text-lg text-center md:text-2xl lg:text-3xl md:mt-0 max-w-[85%] mx-auto mb-10 ">
        Experience South Africa in our fully luxury 20-seater minibus, perfect for charter services, Cape Town tours, tourist transport, airport transfers, shuttle services, corporate transfers, and special events. Enjoy premium reclining seats, modern amenities, advanced safety, and exceptional comfort on every journey.
      </h4>
      <div className="mx-auto overflow-hidden shadow-xl rounded-2xl">

      <ImageGallery items={images}
        autoPlay
        lazyLoad
        slideDuration={450}
        slideInterval={5000}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={false}
         />
      </div>
      </div>
    </section>
  );
};

export default Crafter;
