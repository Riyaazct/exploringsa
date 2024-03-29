import React, { useState } from "react";
import data from "../data/carouselData";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

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
    <section className="h-full mb-[10rem] mx-auto lg:max-w-4xl">
      {/*  */}

      {/* IMAGE */}
      <div
        className="relative group w-full
                   h-[400px]
                   sm:h-[550px]
                   md:h-[590px]
                   
                  "
      >
        {/* image */}

        {/* reference - https://csstailwind.com/add-overlay-on-background-image-in-tailwindcss/ */}
        <div
          className="w-full h-full duration-300 ease-out bg-bottom bg-cover lg:rounded-xl"
          style={{
            backgroundImage: `url(${data[currentIndex].image})`,
            width: "100%",
            height: "100%",
          }}
        />

        <div className="absolute w-full h-full bg-[black] top-0 opacity-20 lg:rounded-xl" />

        {/* First method used for the carousel, it works but the above method makes the use of the positioning the text over the image much easier  */}

        {/* <img
          className="w-full h-full "
          src={data[currentIndex].image}
          alt={data[currentIndex].alt}
        /> */}

        {/* LEFT AND RIGHT SCROLL BUTTON */}
        <BiChevronLeft
          size={75}
          color="white"
          className="absolute top-[50%] translate-x-0 translate-y-[-50%] opacity-20 group-hover:opacity-60 group-hover:scale-110 duration-500 cursor-pointer z-10 -left-4 "
          onClick={handleClickLeft}
        />
        <BiChevronRight
          size={75}
          color="white"
          className="absolute top-[50%] translate-x-0 translate-y-[-50%] opacity-20 group-hover:opacity-60 group-hover:scale-110 duration-500 cursor-pointer z-10 -right-4"
          onClick={handleClickRight}
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="flex items-end w-full px-2 mt-4 text-blueText">
        <div className="w-full">
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
        </div>

        {/* BUTTON */}
        <div>
          <Link to="/contact">
            <button className="p-2 font-semibold w-max opacity-95 hover:scale-105 hover:duration-500 hover:opacity-100">
              Book now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
