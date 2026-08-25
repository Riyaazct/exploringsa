import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesFor13Seater.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Quantum = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center w-full h-[60vh] p-5 mb-20 text-center lg:ml-12 md:flex-row lg:gap-6 xl:gap-0 lg:p-10 lg:container 2xl:max-w-7xl xl:mx-auto 2xl:gap-16">
        <div>
          <h2 className="p-3 mb-5 text-3xl 2xl:text-4xl">
            13 Seater Minibus
          </h2>
        </div>
        <div className="mx-auto lg:max-w-5xl">
          <h3 className="mb-3 text-lg font-semibold lg:text-xl 2xl:text-2xl text-start">
            Discover the Toyota Quantum, Your Ideal Vehicle for
            Charter Services, Airport Transfers, and Tourist
            Transport:
          </h3>
          <ul className="mx-auto text-sm text-left lg:text-lg max-w-[90%] space-y-2">
  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Flexible Seating:</strong> Seats up to 13 passengers,
      perfect for medium-sized groups.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Robust Safety Features:</strong> Equipped with ABS,
      airbags, and stability control for safe travel.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Scenic Visibility:</strong> Large windows provide
      panoramic views, enhancing the travel experience.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Passenger Comfort:</strong> Ergonomic seats with ample
      legroom ensure a comfortable journey.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Efficient Climate Control:</strong> Maintain a pleasant
      temperature with advanced air conditioning.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Generous Storage Space:</strong> Adequate luggage space
      for group tours and airport transfers.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Entertainment Options:</strong> Multimedia system
      available to keep passengers engaged throughout the journey.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="text-[#3CCF4E] mt-1 shrink-0">✓</span>
    <span className="leading-tight 2xl:leading-7">
      <strong>Eco-Friendly Design:</strong> Engineered to minimize
      emissions while promoting sustainable travel.
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
      </div>
      <h4 className="py-5 text-lg text-center md:text-2xl lg:text-3xl mt-80 md:mt-0">
        "Choose the Toyota Quantum for Dependable, Comfortable, and
        Eco-Friendly Charter Services, Airport Transfers, and Tourist
        Transport."
      </h4>
      <ImageGallery items={images} autoPlay={true} />
    </section>
  );
};

export default Quantum;
