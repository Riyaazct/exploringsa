import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  // function to scroll into view upon cta click on homepage, implemented using the useLocation Hook
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView(
          window.innerWidth >= 768
            ? { behavior: "smooth", block: "center" }
            : { behavior: "smooth", block: "start" }
        );
      }
    }
  }, [location]);

  return (
    <section
      id="services"
      className="p-5 flex flex-col gap-2 md:flex-row md:flex-wrap w-full h-full xl:gap-1"
    >
      {/* CARD #1 */}
      <div
        className="w-80 mx-auto text-center p-2 border-2 
                    border-darkGreen border-opacity-5 hover:border-opacity-20
                    hover:rounded-lg hover:scale-105 duration-500"
      >
        <img
          className="mx-auto my-3 h-16 lg:h-20 lg:mb-5"
          src="images/icons/tourist.png"
          alt=""
        />
        <h2 className="text-blueText font-semibold text-xl lg:text-2xl my-3">
          Tourist Service
        </h2>
        <p className=" text-lg lg:text-xl text-blueText text-left">
          As a registered tour guide, one of our owners can offer
          personalized tours of South Africa's most popular tourist
          destinations. We can provide everything from day trips to
          longer tours, and can tailor the experience to suit your
          preferences.
        </p>
      </div>
      {/* CARD #2 */}
      <div className="w-80 mx-auto text-center p-2 border-2 border-darkGreen border-opacity-5 hover:border-opacity-20 hover:rounded-lg hover:scale-105 duration-500">
        <img
          className="mx-auto my-3 h-16 lg:h-20 lg:mb-5"
          src="images/icons/charter.png"
          alt=""
        />
        <h2 className="text-blueText font-semibold text-xl lg:text-2xl my-3">
          Charter Service
        </h2>
        <p className=" text-lg lg:text-xl text-blueText text-left">
          If you need to transport a group of people for any reason,
          we offer charter services that can be customized to your
          needs. Our vehicles are well-maintained and equipped with
          everything needed for a comfortable journey.
        </p>
      </div>
      {/* CARD #3 */}
      <div className="w-80 mx-auto text-center p-2 border-2 border-darkGreen border-opacity-5 hover:border-opacity-20 hover:rounded-lg hover:scale-105 duration-500">
        <img
          className="mx-auto my-3 h-16 lg:h-20 lg:mb-5"
          src="images/icons/airport.png"
          alt=""
        />
        <h2 className="text-blueText font-semibold text-xl lg:text-2xl my-3">
          Airport Transfers
        </h2>
        <p className=" text-lg lg:text-xl text-blueText text-left">
          We offer reliable and affordable airport transfers to and
          from all major airports in South Africa. Our experienced
          drivers will ensure that you arrive at your destination on
          time and in comfort.
        </p>
      </div>
      {/* CARD #4 */}
      <div className="w-80 mx-auto text-center p-2 border-2 border-darkGreen border-opacity-5 hover:border-opacity-20 hover:rounded-lg hover:scale-105 duration-500">
        <img
          className="mx-auto my-3 h-16 lg:h-20 lg:mb-5"
          src="images/icons/corporate.png"
          alt=""
        />
        <h2 className="text-blueText font-semibold text-xl lg:text-2xl my-3">
          Corporate Transfers
        </h2>
        <p className=" text-lg lg:text-xl text-blueText text-left">
          Our fleet of vehicles is perfect for corporate transport,
          whether you need to attend a business meeting or event, or
          transport clients or employees. We can provide customized
          transport solutions to meet your specific needs.
        </p>
      </div>
      {/* CARD #5 */}
      <div className="w-80 mx-auto text-center p-2 border-2 border-darkGreen border-opacity-5 hover:border-opacity-20 hover:rounded-lg hover:scale-105 duration-500">
        <img
          className="mx-auto my-3 h-16 lg:h-20 lg:mb-5"
          src="images/icons/confetti.png"
          alt=""
        />
        <h2 className="text-blueText font-semibold text-xl lg:text-2xl my-3">
          Special Events
        </h2>
        <p className=" text-lg lg:text-xl text-blueText text-left">
          Whether you're planning a wedding, conference, or other
          special event, we can provide transport services to ensure
          that everything runs smoothly. Our fleet includes vehicles
          of various sizes, so we can accommodate groups of any size.
        </p>
      </div>
    </section>
  );
};

export default Services;
