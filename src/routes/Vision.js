import React from "react";

const Vision = () => {
  return (
    <div className="flex flex-col text-center md:flex-row gap-2">
      <div className="mb-28">
        <h2 className="text-2xl text-blueText font-semibold">
          OUR VISION
        </h2>
        <img
          className="mx-auto h-[75px] my-4"
          src="images/icons/vision.svg"
          alt="binoculars icon"
        />
        <p className="w-2/3 mx-auto text-blueText  sm:text-lg">
          Our vision is to become the premier provider of
          transportation and tourism services in South Africa. We
          strive to continuously improve and innovate our services to
          exceed our clients' expectations, while also promoting
          sustainable and responsible tourism practices that benefit
          both our clients and the communities we serve.
        </p>
      </div>
      <div className="mb-28">
        <h2 className="text-2xl text-blueText font-semibold">
          OUR MISSION
        </h2>
        <img
          className="mx-auto h-[75px] my-4"
          src="images/icons/mission.svg"
          alt="compass icon"
        />
        <p className="w-2/3 mx-auto text-blueText sm:text-lg">
          To provide reliable and exceptional transportation and tour
          services that exceed our clients' expectations. We strive to
          showcase the diverse beauty of South Africa while ensuring
          the safety and comfort of our passengers. With a commitment
          to excellence, we aim to be the preferred choice for
          transportation and tour services nationwide, driven by a
          passion for creating unforgettable experiences for our
          clients.
        </p>
      </div>
      <div className="mb-28">
        <h2 className="text-2xl text-blueText font-semibold">
          OUR OBJECTIVE
        </h2>
        <img
          className="mx-auto h-[75px] my-4"
          src="images/icons/objective.svg"
          alt="bus icon"
        />
        <p className="w-2/3 mx-auto text-blueText sm:text-lg">
          Our objective is to continue to be a trusted partner in
          transportation and tourism, providing our clients with safe,
          reliable, and efficient services that exceed their
          expectations. We are committed to preserving the natural
          beauty of South Africa and to promoting sustainable tourism
          practices that benefit both our clients and the communities
          we serve
        </p>
      </div>
    </div>
  );
};

export default Vision;
