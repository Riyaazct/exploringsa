import fleetSectionData from "../../data/fleetSectionData";

const OurFleetSection = () => {
  return (
    <section className="h-full bg-white">
      {/**/}

      {/* TITLE */}
      <h2 className="p-10">
        Our Premium Fleet – Tailored to Your Needs
      </h2>

      {/* CARDS */}
      <div className="flex flex-col gap-2">
        {fleetSectionData.map(
          ({ image, alt, title, description, button }, i) => (
            <div
              className="m-6 drop-shadow-2xl bg-[#F2F2F2] flex flex-col items-center"
              key={i}
            >
              {/*  */}

              {/* IMAGE AND OVERLAY */}
              <div className="relative">
                <img src={image} alt={alt} />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5" />
              </div>

              {/* TITLE */}
              <h3 className="p-10 mt-10">{title}</h3>

              {/* DESCRIPTION */}
              <div className="p-10 mt-10">{description}</div>

              {/* BUTTON */}
              <button className="w-full max-w-xs my-10">
                {button}
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default OurFleetSection;
