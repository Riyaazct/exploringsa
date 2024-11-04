import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

import data from "../../data/homepageServiceCardData.json";

const ServiceSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/crissXcross.png')" }}
      className="h-full mb-20 bg-center"
    >
      <div>
        {/* TITLE */}
        <div>
          <h2 className="text-bluebg w-[85%] m-auto text-center my-20 text-4xl font-extrabold">
            Tourist Transport, Charter Services, Airport Transfers,
            and More...
          </h2>
        </div>

        {/* CARDS */}
        <div className="">
          {data.map(({ image, title, description }, i) => (
            <div className="p-6 " key={i}>
              <div className="flex gap-1">
                <img src={image} alt="camera icon" />
                <h2 className="mt-auto">{title}</h2>
              </div>
              <p>{description}</p>
              <div className="flex items-center gap-3">
                <Link>Read More</Link>
                <FaLongArrowAltRight className="mt-1 text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
