import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="md:grid md:grid-cols-2 lg:grid-cols-[25%_35%_40%] lg:h-[70vh] lg:grid-rows-[50%_50%]">
      {/* TITLE */}
      <div className="w-full p-16 m-auto text-center text-bluebg md:col-span-2 md:max-w-4xl sm:max-w-xl lg:col-span-1 lg:text-right lg:p-8">
        <h2 className="text-2xl md:text-orange lg:text-darkGreen md:text-3xl xl:text-danger lg:text-4xl lg:w-56 lg:ml-auto ">
          <span className="font-light">WHY </span>
          <span className="font-extrabold ">CHOOSE US?</span>
        </h2>
        <p className="px-5 text-base md:text-xl sm:pt-2 lg:px-0 lg:text-base">
          Your Trusted Partner for{" "}
          <span className="font-semibold">
            Safe, Reliable, And Tailored Transportation
          </span>
          Across South Africa
        </p>
      </div>

      {/* IMAGE mobile to tablet */}
      <div className="relative md:col-span-2 lg:row-span-2 lg:col-span-1 lg:-order-2">
        <img
          src="images/sections/why choose us.jpg"
          alt="Tourists standing behind the cape of goodhope sign board "
          className="w-full h-full lg:object-cover"
        />

        {/* IMAGE FOR LG viewport */}
        <img
          src="images/sections/why choose us - md.jpg"
          alt="Tourists standing behind the cape of goodhope sign board "
          className="hidden w-full h-full "
        />
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-10 " />
      </div>

      {/* CARDS */}

      {/* CARD 1 */}

      <div className="bg-[#4CAF50] h-full w-full p-14 text-center text-[#212121] lg:px-5 lg:order-first lg:text-left">
        <div className="m-auto sm:max-w-md">
          <img
            className="w-24 h-24 m-auto mb-2 lg:h-14 lg:w-14 lg:mx-0"
            src="images/icons/sections/road.svg"
            alt="A stretched out road icon"
          />
          {/* CARD TEXT */}
          <div>
            <h4 className="px-12 text-xl font-extrabold leading-tight lg:text-base lg:px-4 lg:pl-0">
              Trusted Experts in Transportation:
            </h4>
            <p className="px-12 mt-1 mb-4 lg:text-sm lg:px-0">
              Years of experience trusted by clients for charter
              services, airport transfers, and corporate travel.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#FFF3E0] h-full w-full p-14 text-center text-[#212121] lg:px-5 lg:text-left">
        <div className="m-auto sm:max-w-md">
          <img
            className="w-24 h-24 m-auto mb-2 lg:h-14 lg:w-14 lg:mx-0"
            src="images/icons/sections/luggage.svg"
            alt="bags of luggage packed and ready for departure"
          />
          {/* CARD TEXT */}
          <div>
            <h4 className="px-12 text-xl font-extrabold leading-tight lg:leading-6 lg:text-base lg:px-4 lg:pl-0">
              Tailored Tours for Every Traveller:
            </h4>
            <p className="px-12 mt-1 mb-4 lg:text-sm lg:px-0">
              Personalized tours designed to meet the specific needs
              of every traveller, whether for business or leisure.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="h-full md:grid md:grid-cols-2 md:col-span-2 lg:col-span-1 ">
        <div className="bg-[#1B5E20] h-full w-full p-14 text-center text-[#E1E1E1] lg:px-0 lg:pt-10 lg:text-left">
          <div className="m-auto sm:max-w-md">
            <img
              className="m-auto -mb-2 h-28 lg:h-14 lg:w-14 lg:mx-0"
              src="images/icons/sections/van.svg"
              alt="bags of luggage packed and ready for departure"
            />
            {/* CARD TEXT */}
            <div>
              <h4 className="px-12 text-xl font-extrabold leading-tight lg:text-base lg:px-2 lg:pl-0">
                Reliable Fleet of Vehicles:
              </h4>
              <p className="m-auto mt-1 mb-4 lg:text-sm">
                Modern, safe, and comfortable vehicles, including the
                VW Crafter Minibus, tailored for group or individual
                transport.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#FFE0B2] h-full w-full p-14 text-center text-[#212121] lg:px-0 lg:pt-6 lg:text-left">
          <div className="m-auto sm:max-w-md">
            <img
              className="w-24 h-24 m-auto mb-2 lg:h-14 lg:w-14 lg:mx-0"
              src="images/icons/sections/headset.svg"
              alt="A call centre agent headset icon"
            />

            {/* CARD TEXT */}
            <div>
              <h4 className="px-12 text-xl font-extrabold leading-tight lg:text-base lg:px-2 lg:pl-0">
                Exceptional Customer Service:
              </h4>
              <p className="m-auto mt-1 mb-4 lg:text-sm">
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
