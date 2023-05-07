import React from "react";

const AboutUs = () => (
  <div>
    <h1 className="relative">OUR STORY</h1>
    <div>
      <div className="bg-lightGreen absolute h-full w-full top-0 -z-10" />
      <p>
        Exploring SA Transport and Tours was founded in 2018 by a team
        with over 20 years of experience in transportation and
        tourism. Our mission is to provide exceptional service while
        showcasing the beauty of South Africa. From our humble
        beginnings as a family-operated business, we've worked
        tirelessly to ensure that our services are of the highest
        quality and have earned the loyalty of many satisfied clients.
      </p>
      <img
        className="max-h-[400px]"
        src="images/our story.jpg"
        alt="the company tour guide and owner with some tourists"
      />
    </div>
  </div>
);

export default AboutUs;
