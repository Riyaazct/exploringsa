import React from "react";

const OurFleet = () => {
  return (
    <section>
      <div className="relative mt-28 h-[32vh] mb-[5%] md:mb-[7rem] lg:mb-[10rem] 2xl:mb-[16rem] 2xl:max-w-[95rem] mx-auto">
        <div
          className="bg-lightGreen w-full h-56 absolute top-0 right-0 -z-20
                       sm:w-[65%] sm:h-[17rem]
                       md:h-[22rem] 
                       lg:h-[25rem]
                       2xl:h-[28rem]
                       "
        />
        <div
          className="bg-[#04420C] w-[45%] h-24 absolute top-[4.01rem] left-0 -z-10 flex
                       sm:h-36 sm:top-[4.2rem]
                       md:h-48 md:top-[5.2rem] md:w-[50%] 
                       lg:h-48 lg:top-[6.5rem]
                       2xl:top-[8.2rem]
                       "
        >
          <h1
            className="m-auto text-offWhite text-xl font-semibold 
                         sm:text-2xl
                         md:text-3xl
                         lg:text-4xl
                         xl:text-5xl
                         "
          >
            OUR FLEET
          </h1>
        </div>
        <div
          className="sm:bg-[#04420C] w-[60%] h-36 p-1 absolute top-[2.5rem] left-[40%] pl-8
                       sm:bg-opacity-50 -z-20 flex items-center justify-center 
                       sm:h-36 sm:top-[4.2rem] sm:w-[55%] sm:rounded-r-[3rem] sm:pr-6
                       md:h-48 md:top-[5.2rem] md:left-[48%] md:w-[50%] 
                       lg:h-48 lg:top-[6.5rem]
                       xl:w-[45%]
                       2xl:top-[8.2rem]
                       "
        >
          <p
            className="text-xs  text-blueText font-semibold
                       sm:text-sm sm:ml-2
                       md:text-lg 
                       lg:text-2xl 
                       "
          >
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
