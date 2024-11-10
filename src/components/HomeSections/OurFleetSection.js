import { Link } from "react-router-dom";

import fleetSectionData from "../../data/fleetSectionData";

const OurFleetSection = () => {
  return (
    <section className="h-full bg-white pb-14">
      {/**/}

      {/* TITLE */}
      <h2 className="text-2xl font-extrabold text-center text-bluebg max-w-[80%] m-auto lg:text-4xl py-20 md:text-3xl xl:text-5xl xl:max-w-6xl">
        Our Premium Fleet – Tailored to Your Needs
      </h2>

      {/* CARDS */}
      <div className="flex flex-col w-full gap-2 m-auto md:flex-row md:flex-wrap xl:max-w-7xl">
        {fleetSectionData.map(
          ({ image, alt, title, description, button }, i) => (
            <div
              className="drop-shadow-2xl bg-[#F2F2F2] flex flex-col items-center mx-auto max-w-sm md:rounded-b-xl my-10 rounded-t-lg"
              key={i}
            >
              {/*  */}

              {/* IMAGE AND OVERLAY */}
              <div className="relative">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5" />
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-xl lg:text-2xl font-bold text-blueText max-w-[95%] lg:min-h-[rem]">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <div className="mt-5 max-w-[75%] lg:min-h-[23rem] ">
                {description}
              </div>

              {/* BUTTON */}
              <div className="w-full">
                <Link to="/contact" target="_blank">
                  <button className="w-full p-4 mx-auto mt-8 mb-auto text-base font-extrabold border-none rounded-t-none lg:text-lg text-blueText lg:mt-4">
                    {button}
                  </button>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default OurFleetSection;
