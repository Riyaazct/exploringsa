import React, { useState } from "react";
import data from "../data/carouselData";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickLeft = () => {
    currentIndex === 0
      ? setCurrentIndex(data.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const handleClickRight = () => {
    currentIndex === data.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="xl:bg-orange 2xl:bg-[#171717] w-full h-full -mt-5">
      {/* IMAGE */}
      <div className="relative group ">
        <img
          className="w-full h-[40vh] mx-auto
                     sm:h-[60vh]"
          src={data[currentIndex].image}
          alt={data[currentIndex].alt}
        />

        {/* LEFT AND RIGHT SCROLL BUTTON */}
        <BiChevronLeft
          size={75}
          color="white"
          className="absolute top-[50%] translate-x-0 translate-y-[-50%] opacity-20 group-hover:opacity-40 cursor-pointer z-10 -left-4"
          onClick={handleClickLeft}
        />
        <BiChevronRight
          size={75}
          color="white"
          className="absolute top-[50%] translate-x-0 translate-y-[-50%] opacity-20 group-hover:opacity-40 cursor-pointer z-10 -right-4"
          onClick={handleClickRight}
        />
        <div className="absolute w-full h-full bg-[black] top-0 opacity-25" />
      </div>

      {/* TEXT CONTENT */}
      <div className="p-2 text-blueText">
        {/* TITLE */}
        <h2 className="text-2xl font-semibold mt-2">
          {data[currentIndex].vehicle}
        </h2>

        {/* <h4 className="text-lg mt-2 font-semibold">
          Vehicle Details:
        </h4> */}

        {/* DETAILS */}
        <ul className="p-2 flex flex-row flex-wrap ">
          {data[currentIndex].details.map((item) => (
            <li className="list-inside list-disc w-[50%]">{item}</li>
          ))}
        </ul>
        <button className="ml-1 text-xl p-2 mt-3 font-semibold">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Carousel;
