import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="mt-48 h-screen w-full relative">
      <h1 className="my-10 text-center text-2xl text-blueText font-bold md:text-3xl lg:text-4xl">
        WHY CHOOSE US ?
      </h1>
      <div className="relative">
        <img
          className="w-full h-screen object-cover z-10"
          src="images/WhyChooseUs.jpg"
          alt=""
        />
        <div className="w-full h-full bg-[black] absolute top-0 z-20 opacity-50" />
      </div>

      {/* CARDS CONTAINER */}
      <div className="text-blueText absolute top-32 grid grid-cols-2 md: gap-2 p-1 z-20">
        {/* CARD #1 */}
        <div className="h-full w-full p-3 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl md:bg-orange lg:bg-lightGreen">
          <h2 className="font-extrabold text-xl mb-2 md:text-2xl">
            Experience
          </h2>
          <h3 className="font-extrabold text-sm mb-2 md:text-lg">
            Over 20 Years of Experience
          </h3>
          <p className="text-sm md:text-lg">
            Our team has over 20 years of experience in transportation
            and tourism, ensuring that we have the knowledge and
            expertise to provide exceptional service and a seamless
            travel experience.
          </p>
        </div>
        {/* CARD #2 */}
        <div className="h-full w-full p-3 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl md:bg-orange lg:bg-lightGreen">
          <h2 className="font-extrabold text-xl mb-2 md:text-2xl">
            Range of Vehicles
          </h2>
          <h3 className="font-extrabold text-sm mb-2 md:text-lg">
            Fleet of Vehicles to Meet Any Need
          </h3>
          <p className="text-sm md:text-lg">
            Our fleet of vehicles ranges from 4 seater sedans to 22
            seater buses, providing options for any group size and
            transportation needs.
          </p>
        </div>
        {/* CARD #3 */}
        <div className="h-full w-full p-3 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl md:bg-orange lg:bg-lightGreen">
          <h2 className="font-extrabold text-xl mb-2 md:text-2xl">
            Quality Assurance
          </h2>
          <h3 className="font-extrabold text-sm mb-2 md:text-lg">
            Your Safety is Our Top Priority
          </h3>
          <p className="text-sm md:text-lg">
            All of our vehicles undergo regular inspections and
            maintenance to ensure they are in roadworthy condition,
            and our drivers have the proper licenses and public
            driving permits. We also have level 1 first aid training,
            ensuring your safety and well-being during your journey.
          </p>
        </div>
        {/* CARD #4 */}
        <div className="h-full w-full p-3 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl md:bg-orange lg:bg-lightGreen">
          <h2 className="font-extrabold text-xl mb-2 md:text-2xl">
            Customized Service
          </h2>
          <h3 className="font-extrabold text-sm mb-2 md:text-lg">
            Services Tailored to Your Needs
          </h3>
          <p className="text-sm md:text-lg">
            We offer both charter and tourist services, and can
            customize our services to meet your specific needs and
            preferences.
          </p>
        </div>
        {/* CARD #5 */}
        <div className="h-full w-full p-3 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl md:bg-orange lg:bg-lightGreen">
          <h2 className="font-extrabold text-xl mb-2 md:text-2xl">
            {" "}
            Trustworthy Partner
          </h2>
          <h3 className="font-extrabold text-sm mb-2 md:text-lg">
            Choose a Reliable and Trustworthy Partner
          </h3>
          <p className="text-sm md:text-lg">
            As a family-operated business, we take pride in providing
            exceptional service and earning the loyalty of our
            clients. You can trust us to provide reliable and
            high-quality transportation and tour services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
