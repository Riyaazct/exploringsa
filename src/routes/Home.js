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
    {/*  */}

    <section className="lg:flex">
      <div className="relative">
        {/*  */}

        {/* TEXT CONTENT & BUTTON */}
        <div className="absolute top-[15rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-offWhite text-center z-10 w-full max-w-[85%] ">
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
              className="py-[0.6rem] px-4 mt-5 text-[0.9375rem] opacity-[86%] hover:opacity-100 text-bluebg font-extrabold
            sm:text-[1.2rem] sm:p-3
            duration-500 animate-shake animate-once animate-duration-[1500ms] animate-ease-in"
            >
              View Our Services
            </button>
          </Link>
        </div>
        {/*  */}

        {/* IMAGE */}
        <div className="relative">
          <img
            src={bgPath}
            style={
              window.innerWidth <= 768
                ? { width: "100%", height: "auto" }
                : { width: "1080px", height: "1440px" }
            }
            alt="Company vehicle"
            className="w-full"
            width={"1250px"}
            height={"1050px"}
          />
          {/* background overlay */}
          <div className="w-full h-full bg-[#000000] bg-opacity-80 absolute top-0 xl:min-w-[45vw] lg:hidden" />

          <h3
            className="text-[1.2rem] font-semibold text-[#3CCF4E] w-[65%] mx-auto leading-snug text-center
        lg:hidden animate-fade-right animate-once animate-duration-[1500ms] animate-delay-500 animate-ease-in-out up absolute bottom-4 left-24"
          >
            Unlock the treasures of South Africa with us
          </h3>
        </div>
      </div>
    </section>
    {/* <WhyChooseUs /> */}
  </>
);

export default Home;
