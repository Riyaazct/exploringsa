import React, { useState } from "react";
import data from "../data/carouselData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="xl:bg-orange 2xl:bg-[#171717] w-screen h-full -mt-5">
      <img
        className="w-auto h-screen mx-auto"
        src={data[currentIndex].image}
        alt={data[currentIndex].alt}
      />
    </div>
  );
};

export default Carousel;
