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
    <section
      className="h-full mt-5 mx-auto mb-[15%] 
                        lg:flex lg:flex-row lg:justify-center lg:gap-5 lg:items-end lg:p-5 lg:mt-0 "
    >
      {/*  */}

      {/* IMAGE */}
      <div className="relative group ">
        <img
          className="w-full h-auto 
                       sm:h-[60vh] lg:h-[65vh] lg:rounded-xl
                       xl:max-w-[50vw] xl:h-[70%]"
          src={data[currentIndex].image}
          alt={data[currentIndex].alt}
        />
        <div className="absolute w-full h-full bg-[black] top-0 opacity-20 lg:rounded-xl" />

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
      </div>

      {/* TEXT CONTENT */}
      <div className=" m-1 p- text-blueText xl:max-w-[40%] ">
        {/* TITLE */}
        <h2 className="text-2xl font-extrabold lg:text-2xl">
          {data[currentIndex].vehicle}
        </h2>

        <h4 className="text-lg font-semibold ">
          Vehicle Specifications:
        </h4>

        {/*DETAILS */}
        <ul className="flex flex-row flex-wrap">
          {data[currentIndex].details.map((item, index) => (
            <li
              key={index}
              className="list-inside list-disc w-[45%] xl:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button
          className="ml-1 p-2 mt-3 font-semibold opacity-95 
                           hover:scale-105 hover:duration-500 hover:opacity-100
                           hover:text-orange hover:bg-offWhite hover:border-orange"
        >
          Book now
        </button>
      </div>
    </section>
  );
};

export default Carousel;
