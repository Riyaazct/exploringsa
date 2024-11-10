import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="md:grid md:grid-cols-2 lg:grid-cols-[20%_35%_45%] lg:h-[95vh] xl:h-[91vh] xl:grid-cols-[25%_30%_45%]">
      {/* TITLE */}
      <div className="w-full p-16 m-auto text-center text-bluebg md:col-span-2 md:max-w-4xl sm:max-w-xl lg:col-span-1 lg:text-right lg:p-8 xl:px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl lg:w-48 lg:ml-auto xl:text-5xl xl:w-56 xl:mb-4">
          <span className="font-thin">WHY </span>
          <span className="font-extrabold ">CHOOSE US?</span>
        </h2>
        <p className="sm:text-base md:text-xl sm:pt-2 lg:px-0 lg:text-base xl:text-lg xl:max-w-[89%] xl:ml-auto mt-2">
          Your Trusted Partner for&nbsp;
          <span className="font-semibold">
            Safe, Reliable, And Tailored Transportation&nbsp;
          </span>
          Across South Africa
        </p>
      </div>

      {/* IMAGE mobile to tablet */}
      <div className="relative md:col-span-2 lg:row-span-2 lg:col-span-1 lg:-order-2">
        <img
          src="images/sections/why choose us.jpg"
          alt="business people packed and their way through the airport to board a flight"
          title="business people packed and their way through the airport to board a flight"
          className="w-full h-full xl:max-h-[900px] md:hidden lg:block"
          width={"532px"}
          height={"798px"}
        />

        {/* IMAGE FOR MD viewport */}
        <img
          src="images/sections/why choose us - md.jpg"
          alt="business people packed and their way through the airport to board a flight"
          title="business people packed and their way through the airport to board a flight"
          className="hidden w-full md:block lg:hidden"
          width={"532px"}
          height={"598px"}
        />
        <div className="absolute top-0 w-full h-full bg-white bg-opacity-10" />
      </div>

      {/* CARDS */}

      {/* CARD 1 */}

      <div className="bg-[#4CAF50] h-full w-full py-14 px-10 text-center text-[#212121] lg:px-5 lg:order-first lg:text-left lg:flex">
        <div className="m-auto sm:max-w-md">
          <img
            className="w-24 h-24 m-auto mb-2 lg:h-14 lg:w-14 lg:mx-0 xl:w-20 xl:h-20"
            src="images/icons/sections/road.svg"
            alt="A stretched out road icon"
            width={"30px"}
            height={"30px"}
          />
          {/* CARD TEXT */}
          <div>
            <h3 className="px-12 text-xl font-extrabold leading-tight lg:text-base lg:px-4 lg:pl-0 xl:text-xl xl:mb-2">
              Trusted Experts in Transportation:
            </h3>
            <p className="px-12 mt-1 mb-4 lg:text-sm lg:px-0 xl:text-lg">
              Years of experience trusted by clients for charter
              services, airport transfers, and corporate travel.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#FFF3E0] h-full w-full p-14 text-center text-[#212121] lg:px-5 lg:text-left lg:flex">
        <div className="m-auto sm:max-w-md">
          <img
            className="w-24 h-24 m-auto mb-2 lg:h-14 lg:w-14 lg:mx-0 xl:w-24 xl:h-24"
            src="images/icons/sections/luggage.svg"
            alt="bags of luggage packed and ready for departure"
            width={"150px"}
            height={"150px"}
          />
          {/* CARD TEXT */}
          <div>
            <h4 className="px-10 text-xl font-extrabold leading-tight lg:leading-6 lg:text-base lg:px-4 lg:pl-0 xl:text-xl xl:mb-2">
              Tailored Tours for Every Traveller:
            </h4>
            <p className="px-6 mt-1 mb-4 lg:text-sm lg:px-0 xl:text-lg ">
              Personalized tours designed to meet the specific needs
              of every traveller, whether for business or leisure.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="h-full md:grid md:grid-cols-2 md:col-span-2 lg:col-span-1">
        <div className="bg-[#1B5E20] h-full w-full p-14 text-center text-[#E1E1E1] lg:px-0 lg:pt-10 lg:text-left lg:flex">
          <div className="m-auto sm:max-w-md lg:px-5">
            <img
              className="m-auto -mb-2 h-28 lg:h-[4.5rem] lg:w-18 lg:mx-0 xl:w-24 xl:h-24 xl:-ml-2 lg:-ml-1"
              src="images/icons/sections/van.svg"
              alt="Icon of a van doing a transfer"
              width={"108px"}
              height={"110px"}
            />
            {/* CARD TEXT */}
            <div>
              <h4 className="px-12 text-xl font-extrabold leading-tight lg:text-base lg:px-2 lg:pl-0 xl:text-xl xl:mb-2">
                Reliable Fleet of Vehicles:
              </h4>
              <p className="m-auto mt-1 mb-4 lg:text-sm xl:text-lg">
                Modern, safe, and comfortable vehicles, including the
                VW Crafter Minibus, tailored for group or individual
                transport.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#FFE0B2] h-full w-full p-14 text-center text-[#212121] lg:px-0 lg:pt-10 lg:text-left lg:flex">
          <div className="m-auto sm:max-w-md lg:px-5">
            <img
              className="w-24 h-24 m-auto mb-2 lg:h-14 lg:w-14 lg:mx-0 lg:mb-0 xl:w-24 xl:h-24 lg:-ml-2"
              src="images/icons/sections/headset.svg"
              alt="A call centre agent headset icon"
              width={"150px"}
              height={"150px"}
            />

            {/* CARD TEXT */}
            <div className="">
              <h4 className="px-12 text-xl font-extrabold leading-tight lg:text-base lg:px-2 lg:pl-0 xl:text-xl xl:mb-2">
                Exceptional Customer Service:
              </h4>
              <p className="m-auto mt-1 mb-4 lg:text-sm xl:text-lg">
                Dedicated support available 24/7 to assist with
                bookings, inquiries, and special requests, ensuring a
                seamless travel experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
