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
      className="flex flex-col w-full h-full gap-2 p-5 md:flex-row md:flex-wrap xl:gap-1"
    >
      {/* CARD #1 */}
      <div className="p-2 mx-auto text-center duration-500 border-2 w-80 border-darkGreen border-opacity-5 lg:hover:border-opacity-20 lg:hover:rounded-lg lg:hover:scale-105">
        <img
          className="h-16 mx-auto my-3 lg:h-20 lg:mb-5"
          src="images/icons/tourist.png"
          alt=""
          width={"250px"}
          height={"250px"}
        />
        <h2 className="my-3 text-xl font-semibold text-blueText lg:text-2xl">
          Tourist Service
        </h2>
        <p className="text-lg text-left lg:text-xl text-blueText">
          Exploring SA Transport and Tours offers personalized tours
          of South Africa. Our tours are tailored to your interests
          and preferences, and can be anything from a day trip to a
          longer excursion. One of our owners is a registered tour
          guide, so you can be sure that you are in good hands.
        </p>
      </div>
      {/* CARD #2 */}
      <div className="p-2 mx-auto text-center duration-500 border-2 w-80 border-darkGreen border-opacity-5 lg:hover:border-opacity-20 lg:hover:rounded-lg lg:hover:scale-105">
        <img
          className="h-16 mx-auto my-3 lg:h-20 lg:mb-5"
          src="images/icons/charter.png"
          alt=""
          width={"250px"}
          height={"250px"}
        />
        <h2 className="my-3 text-xl font-semibold text-blueText lg:text-2xl">
          Charter Service
        </h2>
        <p className="text-lg text-left lg:text-xl text-blueText">
          If you need to transport a group of people for any reason,
          we offer charter services that can be customized to your
          needs. Our vehicles are well-maintained and equipped with
          everything needed for a comfortable journey.
        </p>
      </div>
      {/* CARD #3 */}
      <div className="p-2 mx-auto text-center duration-500 border-2 w-80 border-darkGreen border-opacity-5 lg:hover:border-opacity-20 lg:hover:rounded-lg lg:hover:scale-105">
        <img
          className="h-16 mx-auto my-3 lg:h-20 lg:mb-5"
          src="images/icons/airport.png"
          alt=""
          width={"250px"}
          height={"250px"}
        />
        <h2 className="my-3 text-xl font-semibold text-blueText lg:text-2xl">
          Airport Transfers
        </h2>
        <p className="text-lg text-left lg:text-xl text-blueText">
          We offer reliable and affordable airport transfers to and
          from all major airports in South Africa. Our experienced
          drivers will ensure that you arrive at your destination on
          time and in comfort.
        </p>
      </div>
      {/* CARD #4 */}
      <div className="p-2 mx-auto text-center duration-500 border-2 w-80 border-darkGreen border-opacity-5 lg:hover:border-opacity-20 lg:hover:rounded-lg lg:hover:scale-105">
        <img
          className="h-16 mx-auto my-3 lg:h-20 lg:mb-5"
          src="images/icons/corporate.png"
          alt=""
          width={"250px"}
          height={"250px"}
        />
        <h2 className="my-3 text-xl font-semibold text-blueText lg:text-2xl">
          Corporate Transfers
        </h2>
        <p className="text-lg text-left lg:text-xl text-blueText">
          Our fleet of vehicles is perfect for corporate transport,
          whether you need to attend a business meeting or event, or
          transport clients or employees. We can provide customized
          transport solutions to meet your specific needs.
        </p>
      </div>
      {/* CARD #5 */}
      <div className="p-2 mx-auto text-center duration-500 border-2 w-80 border-darkGreen border-opacity-5 lg:hover:border-opacity-20 lg:hover:rounded-lg lg:hover:scale-105">
        <img
          className="h-16 mx-auto my-3 lg:h-20 lg:mb-5"
          src="images/icons/confetti.png"
          alt=""
          width={"250px"}
          height={"250px"}
        />
        <h2 className="my-3 text-xl font-semibold text-blueText lg:text-2xl">
          Special Events
        </h2>
        <p className="text-lg text-left lg:text-xl text-blueText">
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
