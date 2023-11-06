import React from "react";

const OurFleet = () => {
  return (
    <section className="flex p-4 m-20 mx-auto md md:container lg:justify-center ">
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-10 ">
        <div>
          <h1 className="text-3xl font-semibold text-gray lg:text-4xl xl:text-5xl ">
            OUR FLEET
          </h1>
        </div>
        <div className="w-[95%] md:w-[85%] text-center md:max-w-3xl lg:text-left ">
          <p className="text-lg font-semibold text-gray sm:ml-2 lg:text-2xl md:text-xl ">
            At Exploring SA Transport and Tours, we have a range of
            vehicles to meet all your transportation needs. Whether
            you need a sedan for a business trip, a bus for a group
            tour, or something in between, we've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFleet;
