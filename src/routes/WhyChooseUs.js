import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="mt-48 w-full mx-auto">
      <h1 className="md:mb-20 mb-20 text-center text-2xl text-blueText font-bold md:text-3xl lg:text-4xl xl:text-5xl ">
        WHY CHOOSE US ?
      </h1>

      <div
        className="flex justify-center items-center relative w-full h-[43rem] bg-cover bg-center
        sm:h-[42rem]
        md:h-[52rem]
        lg:h-[56rem]
         mx-auto 2xl:h-[65rem]
        "
        style={{
          backgroundImage: `url(${"images/WhyChooseUs.jpg"})`,
        }}
      >
        {/* <img
          className="w-full object-cover  z-10 "
          src="images/WhyChooseUs.jpg"
          alt=""
        /> */}
        <div className="w-full h-full backdrop-brightness-50" />

        {/* CARDS CONTAINER */}
        <div
          className="absolute text-blueText top-5 grid grid-cols-1 p-1 z-20 w-full gap-2
                        sm:gap-y-5 sm:grid-cols-2
                        lg:max-w-[90%] lg:left-[5%] lg:top-[3rem]
                        xl:max-w-[85%] xl:left-[8%] 2xl:top-[10rem]"
        >
          {/* CARD #1 */}
          <div
            className="h-max w-full p-1 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl mx-auto hover:scale-105 hover:bg-opacity-100 duration-500
                        sm:max-w-[90%] sm:p-3
                        md:max-w-[95%] 
                        lg:max-w-[90%]
                        2xl:max-w-[95%]"
          >
            <h2 className="font-extrabold text-lg sm:text-xl mb-1 lg:text-3xl 2xl:text-4xl">
              Experience
            </h2>
            <h3 className="font-extrabold text-xs sm:text-sm mb-2 lg:text-xl 2xl:text-2xl">
              Over 20 Years of Experience
            </h3>
            <p className="text-xs sm:text-sm md:text-lg 2xl:text-2xl">
              Our team has over 20 years of experience in
              transportation and tourism, ensuring that we have the
              knowledge and expertise to provide exceptional service
              and a seamless travel experience.
            </p>
          </div>
          {/* CARD #2 */}
          <div
            className="h-max w-full p-1 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl mx-auto hover:scale-105 hover:bg-opacity-100 duration-500
                        sm:max-w-[90%] sm:p-3
                        md:max-w-[95%] 
                        lg:max-w-[90%]
                        2xl:max-w-[95%]"
          >
            <h2 className="font-extrabold text-lg sm:text-xl mb-1 lg:text-3xl 2xl:text-4xl">
              Range of Vehicles
            </h2>
            <h3 className="font-extrabold text-xs sm:text-sm mb-2 lg:text-xl 2xl:text-2xl">
              Fleet of Vehicles to Meet Any Need
            </h3>
            <p className="text-xs sm:text-sm md:text-lg 2xl:text-2xl">
              Our fleet of vehicles ranges from 4 seater sedans to 22
              seater buses, providing options for any group size and
              transportation needs.
            </p>
          </div>
          {/* CARD #3 */}
          <div
            className="h-max w-full p-1 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl mx-auto hover:scale-105 hover:bg-opacity-100 duration-500
                        sm:max-w-[90%] sm:p-3
                        md:max-w-[95%] 
                        lg:max-w-[90%]
                        2xl:max-w-[95%]"
          >
            <h2 className="font-extrabold text-lg sm:text-xl mb-1 lg:text-3xl 2xl:text-4xl">
              Quality Assurance
            </h2>
            <h3 className="font-extrabold text-xs sm:text-sm mb-2 lg:text-xl 2xl:text-2xl">
              Your Safety is Our Top Priority
            </h3>
            <p className="text-xs sm:text-sm md:text-lg 2xl:text-2xl">
              All of our vehicles undergo regular inspections and
              maintenance to ensure they are in roadworthy condition,
              and our drivers have the proper licenses and public
              driving permits. We also have level 1 first aid
              training, ensuring your safety and well-being during
              your journey.
            </p>
          </div>
          {/* CARD #4 */}
          <div
            className="h-max w-full p-1 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl mx-auto hover:scale-105 hover:bg-opacity-100 duration-500
                        sm:max-w-[90%] sm:p-3
                        md:max-w-[95%] 
                        lg:max-w-[90%]
                        2xl:max-w-[95%]"
          >
            <h2 className="font-extrabold text-lg sm:text-xl mb-1 lg:text-3xl 2xl:text-4xl">
              Customized Service
            </h2>
            <h3 className="font-extrabold text-xs sm:text-sm mb-2 lg:text-xl 2xl:text-2xl">
              Services Tailored to Your Needs
            </h3>
            <p className="text-xs sm:text-sm md:text-lg 2xl:text-2xl">
              We offer both charter and tourist services, and can
              customize our services to meet your specific needs and
              preferences.
            </p>
          </div>
          {/* CARD #5 */}
          <div
            className=" h-max w-full p-1 bg-[#FFFFFF] bg-opacity-[85%] rounded-xl mx-auto hover:scale-105 hover:bg-opacity-100 duration-500
                        sm:max-w-[90%] sm:p-3
                        md:max-w-[95%] 
                        lg:max-w-[90%]
                        2xl:max-w-[95%]"
          >
            <h2 className="font-extrabold text-lg sm:text-xl mb-1 lg:text-3xl 2xl:text-4xl">
              Trustworthy Partner
            </h2>
            <h3 className="font-extrabold text-xs sm:text-sm mb-2 lg:text-xl 2xl:text-2xl">
              Choose a Reliable and Trustworthy Partner
            </h3>
            <p className="text-xs sm:text-sm md:text-lg 2xl:text-2xl">
              As a family-operated business, we take pride in
              providing exceptional service and earning the loyalty of
              our clients. You can trust us to provide reliable and
              high-quality transportation and tour services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
