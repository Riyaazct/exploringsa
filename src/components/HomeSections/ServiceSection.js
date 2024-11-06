import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

import data from "../../data/homepageServiceCardData.json";

const ServiceSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/crissXcross.png')" }}
      className="w-full h-full py-20"
    >
      <div className="pb-b">
        {/* TITLE */}
        <div>
          <h2 className="text-bluebg w-[85%] m-auto text-center mb-20 text-2xl font-extrabold md:text-orange sm:text-3xl sm:w-[90%] ">
            Tourist Transport, Charter Services, Airport Transfers,
            and More...
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-1 sm:justify-center">
          {data.map(({ image, title, description, alt }, i) => (
            //

            // CARDS

            <div>
              {/*
                CARD CONTAINER
              */}
              <div
                className="flex flex-col justify-center p-8 border-2 w-full rounded-lg border-[#04420C] border-opacity-30 bg-service-card-gradient shadow-xl max-w-sm  min-h-[22rem]"
                key={i}
              >
                {/* TITLE CONTENT */}
                <div className="flex gap-2 -ml-1 w-max">
                  <img
                    src={image}
                    alt={alt}
                    width={
                      i === 0 || i === 1 || i === 3 ? "60px" : "75px"
                    }
                    className={
                      i === 0 || i === 3 ? "h-14" : "h-[4.2rem]"
                    }
                  />
                  <h2
                    className={
                      i === 2 || i === 4 || i === 5
                        ? "mt-auto text-2xl font-extrabold text-gray -ml-2"
                        : "mt-auto text-2xl font-extrabold text-gray"
                    }
                  >
                    {title}
                  </h2>
                </div>

                {/* DESCRIPTION */}
                <p className="max-w-xs mt-5 text-lg text-blueText sm:min-h-[7rem]">
                  {description}
                </p>
                <div className="flex items-center gap-1 mt-3 ml-auto text-base font-extrabold text-orange w-max">
                  <Link to={"/services"} target="_blank">
                    Read More
                  </Link>
                  <FaLongArrowAltRight className="mt-1 text-2xl" />
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
