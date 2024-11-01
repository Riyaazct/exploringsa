import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="md:grid-cols-2 md:grid">
      {/* TITLE */}
      <div className="w-full p-16 m-auto text-center text-bluebg ">
        <h2 className="text-2xl md:text-orange lg:text-darkGreen md:text-3xl">
          <span className="font-light">WHY </span>
          <span className="font-extrabold ">CHOOSE US?</span>
        </h2>
        <p className="px-5 text-base md:text-xl md:pt-2">
          Your Trusted Partner for{" "}
          <span className="font-semibold">
            Safe, Reliable, And Tailored Transportation
          </span>
          Across South Africa
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative md:col-span-1 md:order-first ">
        <img
          src="images/sections/why choose us.jpg"
          alt="Tourists standing behind the cape of goodhope sign board "
          className="w-full"
        />
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-10" />
      </div>

      {/* CARDS */}

      {/* CARD 1 */}
      <div className="bg-[#4CAF50] h-full w-screen p-14 text-center text-[#212121] md:w-full">
        <img
          className="w-24 h-24 m-auto mb-2"
          src="images/icons/sections/road.svg"
          alt="A stretched out road icon"
        />
        <h4 className="px-12 text-xl font-extrabold leading-tight">
          Trusted Experts in Transportation:
        </h4>
        <p className="px-12 mt-1 mb-4">
          Years of experience trusted by clients for charter services,
          airport transfers, and corporate travel.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#FFF3E0] h-full w-screen p-14 text-center text-[#212121] md:w-full">
        <img
          className="w-24 h-24 m-auto mb-2"
          src="images/icons/sections/luggage.svg"
          alt="bags of luggage packed and ready for departure"
        />
        <h4 className="px-12 text-xl font-extrabold leading-tight">
          Tailored Tours for Every Traveller:
        </h4>
        <p className="px-12 mt-1 mb-4">
          Personalized tours designed to meet the specific needs of
          every traveller, whether for business or leisure.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-[#1B5E20] h-full w-screen p-14 text-center text-[#E1E1E1] md:w-full">
        <img
          className="m-auto -mb-2 h-28"
          src="images/icons/sections/van.svg"
          alt="bags of luggage packed and ready for departure"
        />
        <h4 className="px-12 text-xl font-extrabold leading-tight">
          Reliable Fleet of Vehicles:
        </h4>
        <p className="w-[76%] mt-1 mb-4 m-auto">
          Modern, safe, and comfortable vehicles, including the VW
          Crafter Minibus, tailored for group or individual transport.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-[#FFE0B2] h-full w-screen p-14 text-center text-[#212121] md:w-full">
        <img
          className="w-24 h-24 m-auto mb-2"
          src="images/icons/sections/headset.svg"
          alt="A call centre agent headset icon"
        />
        <h4 className="px-12 text-xl font-extrabold leading-tight">
          Exceptional Customer Service:
        </h4>
        <p className="w-[70%] mt-1 mb-4 m-auto">
          Dedicated support available 24/7 to assist with bookings,
          inquiries, and special requests, ensuring a seamless travel
          experience.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
