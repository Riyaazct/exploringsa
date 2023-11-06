import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import data from "../data/carouselData.json";

const VehicleCarousel = () => {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative max-h-screen w-full overflow-hidden after:clear-both after:block after:content-['']">
          {data.map(({ vehicle, alt, image, details }, id) => (
            <TECarouselItem
              // itemID={id}
              key={id}
              className="float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                width={"1440px"}
                height={"1050px"}
                src={image}
                className="block object-cover w-full"
                alt={alt}
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">{vehicle}</h5>
                {details.map((detail, index) => (
                  <p className="" key={index}>
                    {detail}
                  </p>
                ))}
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </>
  );
};

export default VehicleCarousel;
