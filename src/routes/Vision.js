import React from "react";

const Vision = () => {
  return (
    <section>
      <div className="relative flex flex-col ml-5 md:ml-0 md:h-full md:text-center md:flex-row md:justify-center md:gap-2 lg:gap-5">
        {/* card #1 */}
        <div className="mb-16 max-w-[75%] md:mb-8 md:max-h-[500px] xl:max-w-[27%]">
          <h2 className="text-2xl xl:text-3xl text-blueText font-semibold animate-jump-in animate-once animate-duration-[1000ms] animate-ease-in">
            OUR VISION
          </h2>
          <img
            className="md:mx-auto h-[75px] md:h-[85px] lg:h-[95px] my-4 xl:h-[105px] 2xl:h-[115px]"
            src="images/icons/vision.svg"
            alt="Binoculars Icon - Exploring SA Transport and Tours Vision"
          />
          <p className="md:max-w-[90%] text-left mx-auto text-blueText lg:text-lg xl:text-xl 2xl:ml-7 animate-fade-right animate-once animate-duration-[1000ms] animate-ease-linear">
            Become the premier provider of transportation and tourism
            services in South Africa. We offer exceptional experiences
            that exceed clients' expectations, driven by a passion for
            sustainability and community benefit.
          </p>
        </div>

        {/* card #2 */}
        <div className="mb-16 max-w-[75%] md:mb-8 md:max-h-[500px] xl:max-w-[27%]">
          <h2 className="text-2xl xl:text-3xl text-blueText font-semibold animate-jump-in animate-once animate-duration-[1000ms] animate-ease-in">
            OUR MISSION
          </h2>
          <img
            className="md:mx-auto h-[75px] md:h-[85px] lg:h-[95px] my-4 xl:h-[105px] 2xl:h-[110px] 2xl:mt-5"
            src="images/icons/mission.svg"
            alt="Compass Icon - Exploring SA Transport and Tours Mission"
          />
          <p className="md:max-w-[90%] text-left mx-auto text-blueText lg:text-lg xl:text-xl 2xl:ml-7 animate-fade-right animate-once animate-duration-[1000ms] animate-ease-linear">
            Provide reliable and exceptional transportation and tour
            services exceeding clients' expectations. Showcase South
            Africa's diverse beauty, prioritize passenger safety and
            comfort, and create unforgettable experiences for our
            clients.
          </p>
        </div>

        {/* card #3 */}
        <div className="mb-16 max-w-[75%] md:mb-8 md:max-h-[500px] xl:max-w-[27%]">
          <h2 className="text-2xl xl:text-3xl text-blueText font-semibold animate-jump-in animate-once animate-duration-[1000ms] animate-ease-in">
            OUR OBJECTIVE
          </h2>
          <img
            className="md:mx-auto h-[75px] md:h-[85px] lg:h-[95px] my-4 xl:h-[105px] 2xl:h-[115px]"
            src="images/icons/objective.svg"
            alt="Bus Icon - Exploring SA Transport and Tours Objective"
          />
          <p className="md:max-w-[90%] text-left mx-auto text-blueText lg:text-lg xl:text-xl 2xl:ml-7 animate-fade-right animate-once animate-duration-[1000ms] animate-ease-linear">
            Be a trusted partner in transportation and tourism,
            providing safe, reliable, and efficient services exceeding
            clients' expectations. Preserve South Africa's natural
            beauty and champion sustainable tourism practices for the
            benefit of clients and communities.
          </p>
        </div>
        <div className="hidden md:block md:top-[90px] lg:top-[95px] xl:top-[105px] absolute bg-lightGreen w-full h-full border-t-[2px] border-[#2D334A] -z-10" />
      </div>
    </section>
  );
};

export default Vision;
