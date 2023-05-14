import React, { useState } from "react";
import data from "../data/carouselData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="m-auto p-5 rounded-xl">
      <img
        className="w-screen"
        src={data[currentIndex].image}
        alt={data[currentIndex].alt}
      />
    </div>
  );
};

export default Carousel;
