import { Link } from "react-router-dom";

import fleetSectionData from "../../data/fleetSectionData";

const OurFleetSection = () => {
  return (
    <section className="h-full bg-white">
      {/**/}

      {/* TITLE */}
      <h2 className="p-12 text-2xl font-extrabold text-center text-bluebg max-w-[80%] m-auto">
        Our Premium Fleet – Tailored to Your Needs
      </h2>

      {/* CARDS */}
      <div className="flex flex-col w-full gap-2 m-auto md:flex-row md:flex-wrap xl:max-w-7xl">
        {fleetSectionData.map(
          ({ image, alt, title, description, button, route }, i) => (
            <div
              className="drop-shadow-2xl bg-[#F2F2F2] flex flex-col items-center m-auto max-w-sm"
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
              <h3 className="mt-5 text-2xl font-extrabold text-blueText max-w-[95%]">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <div className="mt-5 max-w-[75%] min-h-[16rem]">
                {description}
              </div>

              {/* BUTTON */}
              <button className="w-full max-w-xs p-4 my-10 text-lg font-extrabold border-none text-blueText">
                <Link to={route} target="_blank">
                  {button}
                </Link>
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default OurFleetSection;
