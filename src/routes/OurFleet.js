import React from "react";

const OurFleet = () => {
  return (
    <>
      <div className="relative mt-28 h-[32vh] mb-[15%] md:mb-[20%] lg:mb-[15%]">
        <div
          className="bg-lightGreen w-[70%] h-72 absolute top-0 right-0 -z-20 
                       md:h-[22rem] md:w-[65%] 
                       lg:h-[28rem]"
        />
        <div
          className="bg-[#04420C] w-[45%] h-36 absolute top-[4.5rem] left-0 -z-10 flex 
                       md:h-48 md:top-[5.2rem] md:w-[50%] 
                       lg:h-56 lg:top-[7.08rem]"
        >
          <h1
            className="m-auto text-offWhite text-2xl font-semibold 
                         md:text-4xl
                         lg:text-4xl
                         2xl:text-6xl"
          >
            OUR FLEET
          </h1>
        </div>
        <div
          className="bg-[#04420C] w-[50%] h-36 p-2 absolute top-[4.5rem] left-[43%] rounded-r-[3rem] 
                       bg-opacity-[56%] -z-20 flex items-center justify-center 
                       md:h-48 md:top-[5.2rem] md:left-[48%] md:w-[50%] 
                       lg:h-56 lg:top-[7.08rem]
                       xl:w-[45%]"
        >
          <p
            className="text-xs max-w-[85%] text-blueText font-semibold sm:text-sm 
                        md:text-lg 
                        lg:text-2xl 
                        2xl:text-3xl"
          >
            At Exploring SA Transport and Tours, we have a range of
            vehicles to meet all your transportation needs. Whether
            you need a sedan for a business trip, a bus for a group
            tour, or something in between, we've got you covered.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurFleet;
