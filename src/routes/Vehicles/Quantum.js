import React from "react";

import ImageGallery from "react-image-gallery";
import images from "../../data/imagesFor13Seater.json";

import "react-image-gallery/styles/css/image-gallery.css";

const Quantum = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center w-full h-[60vh] p-5 mb-20 text-center lg:ml-12 md:flex-row lg:gap-6 xl:gap-0 lg:p-10 lg:container 2xl:max-w-7xl xl:mx-auto 2xl:gap-16">
        <div>
          <h2 className="p-3 mb-5 text-3xl lg:text-3xl 2xl:text-4xl">
            13 Seater Minibus
          </h2>
        </div>
        <div className="mx-auto lg:max-w-5xl">
          <h3 className="mb-3 text-lg font-semibold lg:text-xl 2xl:text-2xl text-start">
            Discover the Toyota Quantum, Your Ideal Vehicle for
            Charter Services, Airport Transfers, and Tourist
            Transport:
          </h3>
          <ul className="mx-auto text-left list-disc list-inside lg:text-lg ">
            <li className="p-1 leading-tight 2xl:leading-7">
              Flexible Seating: Seats up to 13 passengers, perfect for
              medium-sized groups.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Robust Safety Features: Equipped with ABS, airbags, and
              stability control for safe travel.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Scenic Visibility: Large windows provide panoramic
              views, enhancing the travel experience.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Passenger Comfort: Ergonomic seats with ample legroom
              ensure a comfortable journey.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Efficient Climate Control: Maintain a pleasant
              temperature with advanced air conditioning.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Generous Storage Space: Adequate luggage space for group
              tours and airport transfers.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Entertainment Options: Available multimedia system to
              keep passengers engaged.
            </li>
            <li className="p-1 leading-tight 2xl:leading-7">
              Eco-Friendly Design: Engineered to minimize emissions,
              promoting sustainable travel.
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
