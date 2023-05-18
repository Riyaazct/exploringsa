import React from "react";

const Contact = () => (
  <section className="bg-lightGreen md:h-[55vh] lg:h-[70vh]">
    <div
      className="flex flex-col items-center w-full h-full p-2 gap-x-5 gap-y-10 max-w-7xl py-8
                     md:flex-row md:mx-auto xl:gap-x-20 border-2"
    >
      {/*  */}

      {/* IMAGE */}
      <div className="w-full h-auto">
        <img
          className="h-full w-full object-cover rounded-xl"
          src="/images/contact.jpg"
          alt=""
        />
      </div>

      {/* FORM */}
      <div className="w-full h-auto">
        <h1
          className="text-2xl font-extrabold text-gray mb-3 md:text-center
                       lg:text-3xl xl:text-5xl"
        >
          Get in Touch
        </h1>
        <form action="">
          <input
            className="my-1 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            type="text"
            placeholder="Name"
          />
          <input
            className="my-1 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            type="text"
            placeholder="Email"
          />
          <input
            className="my-1 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            type="text"
            placeholder="Phone Number"
          />
          <textarea
            className=" relative my-1 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            name=""
            id=""
            cols="20"
            rows="1"
            placeholder="Message..."
          ></textarea>
        </form>
        <button className="my-2 text-orange bg-opacity-20 font-bold border-orange lg:text-lg">
          Get in Touch
        </button>
      </div>
    </div>
  </section>
);

export default Contact;
