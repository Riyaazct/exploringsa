import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

import data from "../../data/homepageServiceCardData.json";

const ServiceSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/crissXcross.png')" }}
      className="h-full pt-20"
    >
      <div>
        {/* TITLE */}
        <div>
          <h2 className="text-bluebg w-[85%] m-auto text-center mb-20 text-4xl font-extrabold">
            Tourist Transport, Charter Services, Airport Transfers,
            and More...
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-3">
          {data.map(({ image, title, description, alt }, i) => (
            <div>
              <div
                className="px-8 py-10 border-2 w-[85%] m-auto rounded-md border-[#04420C] border-opacity-30 bg-service-card-gradient shadow-lg"
                key={i}
              >
                <div className="flex gap-2 py-2 -ml-1">
                  <img src={image} alt={alt} width={"52px"} />
                  <h2 className="mt-auto text-2xl font-extrabold text-gray">
                    {title}
                  </h2>
                </div>
                <p className="max-w-xs pt-2 text-lg text-blueText">
                  {description}
                </p>
                <div className="flex items-center justify-end gap-1 text-lg font-extrabold mt-11 text-orange">
                  <Link to={"/services"} target="_blank">
                    Read More
                  </Link>
                  <FaLongArrowAltRight className="mt-1 text-2xl" />
                </div>
              </div>
              <hr
                className={
                  i === data.length - 1
                    ? "hidden"
                    : "m-auto my-10  w-80 text-[#C9C9C9]"
                }
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="" />
    </section>
  );
};

export default ServiceSection;
