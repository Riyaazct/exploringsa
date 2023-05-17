import React from "react";

const Vision = () => {
  return (
    <div>
      {/* cards container */}
      <div className="relative ml-5 md:ml-0 flex flex-col md:h-full md:text-center md:flex-row md:justify-center md:gap-2 lg:gap-5">
        {/*  */}

        {/* card #1 */}
        <div className="mb-16 max-w-[75%] md:mb-8 md:max-h-[500px] xl:max-w-[27%]">
          <h2 className="text-2xl xl:text-3xl text-blueText font-semibold animate-jump-in animate-once animate-duration-[1000ms] animate-ease-in">
            OUR VISION
          </h2>
          <img
            className="md:mx-auto h-[75px] md:h-[85px] lg:h-[95px] my-4 xl:h-[105px] 2xl:h-[115px]"
            src="images/icons/vision.svg"
            alt="binoculars icon"
          />
          <p className="md:max-w-[90%] text-left mx-auto text-blueText lg:text-lg xl:text-xl 2xl:ml-7 animate-fade-right animate-once animate-duration-[1000ms] animate-ease-linear">
            To become the premier provider of transportation and
            tourism services in South Africa. We strive to
            continuously improve and innovate our services to exceed
            our clients' expectations, while also promoting
            sustainable and responsible tourism practices that benefit
            both our clients and the communities we serve.
          </p>
        </div>
        {/*  */}

        {/* card #2 */}
        <div className="mb-16 max-w-[75%] md:mb-8 md:max-h-[500px] xl:max-w-[27%]">
          <h2
            className="text-2xl xl:text-3xl text-blueText font-semibold 
                         animate-jump-in animate-once animate-duration-[1000ms] animate-ease-in"
          >
            OUR MISSION
          </h2>
          <img
            className="md:mx-auto h-[75px] md:h-[85px] lg:h-[95px] my-4 xl:h-[105px] 2xl:h-[110px] 2xl:mt-5"
            src="images/icons/mission.svg"
            alt="compass icon"
          />
          <p
            className="md:max-w-[90%] text-left mx-auto text-blueText lg:text-lg xl:text-xl 2xl:ml-7 
                        animate-fade-right animate-once animate-duration-[1000ms] animate-ease-linear"
          >
            To provide reliable and exceptional transportation and
            tour services that exceed our clients' expectations. We
            strive to showcase the diverse beauty of South Africa
            while ensuring the safety and comfort of our passengers.
            With a commitment to excellence, we aim to be the
            preferred choice for transportation and tour services
            nationwide, driven by a passion for creating unforgettable
            experiences for our clients.
          </p>
        </div>
        {/*  */}

        {/* card #3 */}
        <div className="mb-16 max-w-[75%] md:mb-8 md:max-h-[500px] xl:max-w-[27%]">
          <h2
            className="text-2xl xl:text-3xl text-blueText font-semibold 
                         animate-jump-in animate-once animate-duration-[1000ms] animate-ease-in"
          >
            OUR OBJECTIVE
          </h2>
          <img
            className="md:mx-auto h-[75px] md:h-[85px] lg:h-[95px] my-4 xl:h-[105px] 2xl:h-[115px]"
            src="images/icons/objective.svg"
            alt="bus icon"
          />
          <p
            className="md:max-w-[90%] text-left mx-auto text-blueText lg:text-lg xl:text-xl 2xl:ml-7 
                        animate-fade-right animate-once animate-duration-[1000ms] animate-ease-linear"
          >
            To continue to be a trusted partner in transportation and
            tourism, providing our clients with safe, reliable, and
            efficient services that exceed their expectations. We are
            committed to preserving the natural beauty of South Africa
            and to promoting sustainable tourism practices that
            benefit both our clients and the communities we serve
          </p>
        </div>
        <div
          className="hidden md:block md:top-[90px] lg:top-[95px] xl:top-[105px] absolute bg-lightGreen w-full h-full border-t-[2px]
                   border-[#2D334A] -z-10"
        />
      </div>
    </div>
  );
};

export default Vision;
