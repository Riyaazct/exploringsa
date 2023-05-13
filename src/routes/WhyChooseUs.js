import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="mt-48">
      <h1 className="my-10 text-center text-2xl text-blueText font-semibold">
        WHY CHOOSE US ?
      </h1>
      <img
        className="w-full h-[55vh]"
        src="images/WhyChooseUs.jpg"
        alt=""
      />
      <div>
        {/* CARD #1 */}
        <div>
          <h2>Experience</h2>
          <h3>Over 20 Years of Experience</h3>
          <p>
            Our team has over 20 years of experience in transportation
            and tourism, ensuring that we have the knowledge and
            expertise to provide exceptional service and a seamless
            travel experience.
          </p>
        </div>
        {/* CARD #2 */}
        <div>
          <h2>Range of Vehicles</h2>
          <h3>Fleet of Vehicles to Meet Any Need</h3>
          <p>
            Our fleet of vehicles ranges from 4 seater sedans to 22
            seater buses, providing options for any group size and
            transportation needs.
          </p>
        </div>
        {/* CARD #3 */}
        <div>
          <h2>Quality Assurance</h2>
          <h3>Your Safety is Our Top Priority</h3>
          <p>
            All of our vehicles undergo regular inspections and
            maintenance to ensure they are in roadworthy condition,
            and our drivers have the proper licenses and public
            driving permits. We also have level 1 first aid training,
            ensuring your safety and well-being during your journey.
          </p>
        </div>
        {/* CARD #4 */}
        <div>
          <h2>Customized Service</h2>
          <h3>Services Tailored to Your Needs</h3>
          <p>
            We offer both charter and tourist services, and can
            customize our services to meet your specific needs and
            preferences.
          </p>
        </div>
        {/* CARD #5 */}
        <div>
          <h2> Trustworthy Partner</h2>
          <h3>Choose a Reliable and Trustworthy Partner</h3>
          <p>
            As a family-operated business, we take pride in providing
            exceptional service and earning the loyalty of our
            clients. You can trust us to provide reliable and
            high-quality transportation and tour services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
