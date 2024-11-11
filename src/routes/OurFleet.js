const OurFleet = () => {
  return (
    <section className="flex mx-auto mt-20 bg-white rounded-lg mb-14 py-7 lg:mt-36 md md:container lg:justify-center">
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-28 ">
        <div>
          <h3 className="text-3xl font-extrabold text-gray lg:text-4xl xl:text-5xl">
            OUR FLEET
          </h3>
        </div>
        <div className="w-[70%] md:w-[85%] text-center md:max-w-3xl lg:text-left ">
          <p className="text-gray sm:ml-2 lg:text-2xl md:text-xl">
            At Exploring SA Transport and Tours, we have a range of
            vehicles to meet all your transportation needs. Whether
            you need a sedan for a business trip, a bus for a group
            tour, or something in between, we've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFleet;
