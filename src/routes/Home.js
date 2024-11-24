import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import WhyChooseUs from "../components/HomeSections/WhyChooseUsSection";
import ServiceSection from "../components/HomeSections/ServiceSection";
import OurFleetSection from "../components/HomeSections/OurFleetSection";

const bgPathSm = "/images/homeSm.webp";
const bgPathLg = "/images/homeLg.webp";

const Home = () => (
  <>
    <Helmet>
      <title>
        Exploring SA - Charter Services, Cape Town Tours & Transfers
      </title>
      <meta
        name="description"
        content="Exploring SA Transport and Tours offers premier transportation and tourism services in South Africa, including charters, airport transfers, and Cape Town tours."
      />
      <link rel="canonical" href="https://exploringsa.co.za/" />
      <link
        rel="preload"
        as="image"
        href="/images/homeSm.webp"
        type="image/webp"
        media="(max-width: 1024px)"
      />
      <link
        rel="preload"
        as="image"
        href="/images/homeLg.webp"
        type="image/webp"
        media="(min-width: 1025px)"
      />
    </Helmet>
    {/*  */}

    <section className="lg:flex">
      <div className="relative">
        {/*  */}

        {/* TEXT CONTENT & BUTTON */}
        <div className="absolute top-[14rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhite text-center z-10 w-full max-w-[85%] sm:top-[20rem] md:top-[24rem] lg:top-[20rem]">
          <h1 className="text-[1.4rem] leading-tight font-extrabold max-w-[90%] mx-auto md:text-4xl md:leading-tight sm:text-[2rem] xl:text-5xl ">
            {/* animate-fade-down animate-once animate-duration-1000 animate-ease-in */}
            Welcome to Exploring SA Transport and Tours
          </h1>
          <h2 className="text-[1rem] leading-tight font-bold max-w-[85%] mx-auto mt-4 sm:text-2xl md:max-w-lg md:my-3 xl:text-3xl xl:max-w-5xl xl:mt-6 ">
            Your premier transportation and tourism provider in South
            Africa
          </h2>
          <p className="mt-5 mb-4 text-[0.85rem] font-light leading-tight max-w-xs mx-auto px-2 md:text-xl md:max-w-lg md:leading-snug md:my-9 sm:text-base sm:max-w-md xl:text-2xl xl:max-w-[59rem] xl:mt-10">
            We offer charter services for Cape Town tours, corporate
            transfers, a shuttle service, and airport transfers.
            Whether you're visiting South Africa for leisure or
            business, our fleet of vehicles, including minibuses and
            executive sedans, ensures a comfortable and reliable
            experience for all your travel needs.
          </p>
          {/* BUTTON - <= 768px ONLY */}
          <Link to="/services">
            <button
              className="py-[0.6rem] px-4 mt-5 text-[0.8rem] mb-16 md:opacity-[80%] md:hover:opacity-100 text-bluebg font-extrabold
            sm:text-[1.1rem] sm:py-2
            duration-500 animate-pulse animate-duration-[2500ms] animate-ease-in animate-thrice md:px-6 md:py-[0.6rem] xl:text-2xl xl:py-3  "
            >
              View Our Services
            </button>
          </Link>
        </div>
        {/*  */}

        {/* IMAGE */}
        <div className="md:h-screen w-full lg:h-[92vh]">
          <picture>
            <source
              srcSet={bgPathSm}
              media="(max-width: 1024px)"
              type="image/jpeg"
              height="1280"
              width="960"
            />
            <source
              srcSet={bgPathLg}
              media="(min-width: 1025px)"
              type="image/jpeg"
              width="1689"
              height="719"
            />
            <img
              src={bgPathLg}
              alt="Company vehicle"
              title="Two Volkswagen vehicles side by side on one of the tour days in cape town"
              className="object-cover w-full md:h-full"
            />
          </picture>

          {/* <img
            src={bgPathSm}
            style={
              window.innerWidth <= 768
                ? { width: "100%", height: "100%" }
                : { width: "100%", height: "100%" }
            }
            alt="Company vehicle"
            title="Vw Crafter - 22 seater"
            width={"1250px"}
            height={"1050px"}
            className="object-bottom lg:hidden md:object-cover"
          />
          <img
            src={bgPathLg}
            style={
              window.innerWidth <= 768
                ? { width: "100%", height: "100%" }
                : { width: "100%", height: "100%" }
            }
            alt="Company vehicle"
            title="Two Volkswagen crafters parked side by side on one of the tour days in cape town"
            width={"1250px"}
            height={"1050px"}
            className="hidden lg:block"
          /> */}
          {/* background overlay */}
          <div className="w-full h-full bg-[#000000] bg-opacity-80 absolute top-0" />
          <div className="absolute w-full transform translate-x-[-50%] bottom-4 left-[50%] lg:bottom-6 ">
            {/* text-[#3CCF4E] 
                text-offWhite
            */}
            <h3
              className="font-semibold text-[#3CCF4E] leading-snug text-center mb-6 w-[70%] mx-auto
            animate-fade-right animate-once animate-duration-[1500ms] animate-delay-500 animate-ease-in-out up md:text-[1.625rem] md:w-full md:left-3 sm:text-[1.45rem] md:bottom-12 xl:text-3xl tracking-wider md:tracking-widest"
            >
              Unlock the treasures of South Africa with us
            </h3>
          </div>
        </div>
      </div>
    </section>
    <WhyChooseUs />
    <ServiceSection />
    <OurFleetSection />
  </>
);

export default Home;
