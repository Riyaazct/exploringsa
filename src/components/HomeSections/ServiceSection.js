import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

import data from "../../data/homepageServiceCardData.json";

const ServiceSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/crissXcross.png')" }}
      className="w-full h-full py-20 xl:m-auto"
    >
      <div className="pb-b">
        {/* TITLE */}
        <div>
          <h2 className="text-bluebg w-[85%] m-auto text-center mb-20 text-2xl font-extrabold sm:text-3xl sm:w-[90%]">
            Tourist Transport, Charter Services, Airport Transfers,
            and More...
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-1 md:gap-4 sm:justify-center xl:max-w-[1450px] mx-auto">
          {data.map(({ image, title, description, alt }, i) => (
            //

            // CARDS

            <div>
              {/*
                CARD CONTAINER
              */}
              <div
                className="flex flex-col justify-center px-10 scroll border-2 w-full rounded-lg border-[#04420C] border-opacity-30 bg-service-card-gradient shadow-xl max-w-sm min-h-[15rem] xl:gap-3 xl:py-8 xl:min-w-[28rem] xl:min-h-[18rem]"
                key={i}
              >
                {/* TITLE CONTENT */}
                <div className="flex items-end gap-3">
                  <img
                    src={image}
                    alt={alt}
                    // width={
                    //   i === 0 || i === 1 || i === 3 ? "60px" : "75px"
                    // }
                    className={
                      i === 0
                        ? "h-12 w-10 sm:w-11 md:w-12 xl:lg:w-12 xl:w-14"
                        : i === 2 || i === 5
                        ? "sm:w-14 sm:-mx-1 xl:w-16"
                        : i === 3
                        ? "h-12 md:h-[4.2rem] w-11 sm:w-12 xl:w-14 lg:w-12 lg:h-12"
                        : i === 1
                        ? "h-12 md:h-[4.2rem] w-11 sm:w-12 xl:w-14 lg:h-12"
                        : i === 4
                        ? "sm:w-14 sm:-mx-1 xl:w-[5rem]"
                        : "h-12 md:h-[4.2rem] w-11 sm:w-12 xl:w-14"
                    }
                  />
                  <h2
                    className={
                      i === 2 || i === 4 || i === 5
                        ? "text-xl font-extrabold text-gray w-full xl:text-3xl"
                        : "text-xl font-extrabold text-gray xl:w-min w-full xl:whitespace-nowrap xl:text-3xl"
                    }
                  >
                    {title}
                  </h2>
                </div>

                {/* DESCRIPTION */}
                <p className="max-w-xs mt-2 text-base text-blueText xl:text-xl">
                  {description}
                </p>
                <div className="flex items-center gap-1 mt-3 ml-auto text-base font-extrabold text-orange w-max xl:text-lg xl:mt-0">
                  <Link to={"/services"} target="_blank">
                    Read More
                  </Link>
                  <FaLongArrowAltRight className="mt-1 text-2xl xl:text-3xl" />
                </div>
              </div>

              {/* LINE SEPARATOR */}
              <hr
                className={
                  i === data.length - 1
                    ? "m-auto mt-12 my-16  w-80 text-orange border-t-2 opacity-75 sm:w-96 md:hidden"
                    : "m-auto my-10  w-80 text-[#C9C9C9] border-t-2 opacity-25 md:hidden sm:w-96"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
