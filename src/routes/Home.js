import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// import WhyChooseUs from "../components/HomeSections/WhyChooseUs";

const bgPath = "/images/home.jpg";

const Home = () => (
  <>
    <Helmet>
      <title>
        Exploring SA - Exploring SA - Charter services || Cape Town
        tours || tourist service || airport transfers and corporate
        transfers.
      </title>
      <meta
        name="Exploring SA Transport and Tours | Tourist transport | charter services | Airport transfers | Cape town tours"
        content="Exploring SA Transport and Tours is your premier transportation and tourism provider in South Africa. We offer a range of services to meet your needs, including tourist services, charter services, airport transfers, and corporate transfers."
      />
      <link rel="canonical" href="/" />
    </Helmet>
    <section className="lg:flex">
      <div className="relative">
        {/*  */}

        {/* TEXT CONTENT & BUTTON */}
        <div className="absolute top-[16rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhite text-center z-10 w-full max-w-[85%] ">
          <h1 className="text-[1.625rem] leading-tight font-extrabold md:text-[1.5rem] max-w-[90%] lg:hidden mx-auto">
            {/* animate-fade-down animate-once animate-duration-1000 animate-ease-in */}
            Welcome to Exploring SA Transport and Tours
          </h1>
          <h2 className="text-[1rem] leading-tight font-bold max-w-[85%] mx-auto mt-2">
            Your premier transportation and tourism provider in South
            Africa
          </h2>
          <p className="mt-5 mb-3 text-[0.9375rem] font-light leading-tight max-w-xs mx-auto px-2 ">
            We offer charter services for Cape Town tours, corporate
            transfers, and airport transfers. Whether you're visiting
            South Africa for leisure or business, our fleet of
            vehicles, including minibuses and executive sedans,
            ensures a comfortable and reliable experience for all your
            travel needs.
          </p>
          {/* BUTTON - <= 768px ONLY */}
          <Link to="/services#services">
            <button
              className="p-2 mt-5 text-sm opacity-80 hover:opacity-100 text-blueText font-semibold 
            sm:text-[1.2rem] sm:p-3
            lg:hidden duration-500 animate-shake animate-once animate-duration-[1500ms] animate-ease-in"
            >
              Explore our Services
            </button>
          </Link>
        </div>
        {/*  */}

        {/* IMAGE */}
        <div className="relative ">
          <img
            src={bgPath}
            style={
              window.innerWidth <= 768
                ? { width: "100%", height: "auto" }
                : { width: "1080px", height: "1440px" }
            }
            alt="Company vehicle"
            className="w-full h-full max-h-[90vh]"
            width={"1250px"}
            height={"1050px"}
          />
          <div className="w-full h-full bg-[#000000] bg-opacity-80 absolute top-0 xl:min-w-[45vw] lg:hidden"></div>
        </div>
      </div>

      {/* TEXT CONTENT FOR SCREEN LG PLUS */}
      <div className="text-center my-12 text-2xl text-blueText font-semibold lg:flex lg:items-center lg:m-auto xl:mx-auto xl:text-3xl 2xl:text-4xl xl:max-w-[55vw] lg:flex-col">
        <div className="hidden lg:block">
          <h1
            className="font-semibold text-[1.2rem] sm:text-[1.3rem] xl:text-2xl 2xl:text-3xl lg:max-w-[80%] lg:mx-auto md:mx-5 
          animate-fade-left animate-once animate-delay-200 animate-ease-in"
          >
            Welcome to Exploring SA Transport and Tours, your premier
            transportation and tourism provider in South Africa
          </h1>
        </div>

        {/* TEXT CONTENT DISPLAYED ON screens <= 768px */}
        <h1
          className="text-[1.0rem] sm:text-2xl font-extrabold 
        lg:hidden animate-fade-right animate-once animate-duration-[1500ms] animate-delay-500 animate-ease-in-out up"
        >
          Unlock the treasures of South Africa with us
        </h1>
        {/* BUTTON FOR SCREENS LG PLUS */}
        <Link to="/services#services">
          <button className="hidden lg:block md:p-2 lg:mt-6 md:text-lg lg:text-[1.3rem] lg:opacity-95 md:hover:opacity-100 md:text-blueText md:font-semibold xl:p-3 xl:text-xl 2xl:font-extrabold lg:animate-jump-in lg:animate-once lg:animate-duration-[1500ms] lg:animate-ease-in-out">
            Explore our Services
          </button>
        </Link>
      </div>
    </section>
    {/* <WhyChooseUs /> */}
  </>
);

export default Home;
