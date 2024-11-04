import { Link } from "react-router-dom";

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
            <div className="" key={i}>
              <img src={image} alt="camera icon" />
              <h2>{title}</h2>
              <p>{description}</p>
              <Link>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
