import React from "react";

const OurFleet = () => {
  return (
    <section>
      <div className="relative mt-28 h-[32vh] mb-[15%] md:mb-[20%] lg:mb-[15%]">
        <div
          className="bg-lightGreen w-[75%] h-56 absolute top-0 right-0 -z-20
                       sm:w-[65%] sm:h-[17rem]
                       md:h-[22rem] md:w-[65%] 
                       lg:h-[28rem]"
        />
        <div
          className="bg-[#04420C] w-[45%] h-24 absolute top-[4.01rem] left-0 -z-10 flex
                       sm:h-36 sm:top-[4.2rem]
                       md:h-48 md:top-[5.2rem] md:w-[50%] 
                       lg:h-56 lg:top-[7.08rem]"
        >
          <h1
            className="m-auto text-offWhite text-xl font-semibold 
                         sm:text-2xl
                         md:text-3xl
                         lg:text-4xl
                         xl:text-5xl
                         2xl:text-6xl"
          >
            OUR FLEET
          </h1>
        </div>
        <div
          className="bg-[#04420C] w-[60%] h-36 p-1 absolute top-[2.5rem] left-[40%] pl-6
                       bg-opacity-[56%] -z-20 flex items-center justify-center 
                       sm:h-36 sm:top-[4.2rem] sm:w-[55%] sm:rounded-r-[3rem] sm:pr-6 sm:pl-8
                       md:h-48 md:top-[5.2rem] md:left-[48%] md:w-[50%] 
                       lg:h-56 lg:top-[7.08rem]
                       xl:w-[45%] 2xl:p-12"
        >
          <p
            className="text-xs  text-blueText font-semibold
                       sm:text-sm sm:ml-2
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
    </section>
  );
};

export default OurFleet;
