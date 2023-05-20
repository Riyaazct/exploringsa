import React from "react";
import { SiFacebook } from "react-icons/si";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";

const Contact = () => (
  <section className="bg-lightGreen md:h-[55vh] lg:h-[70vh]">
    <div
      className="flex flex-col items-center w-full h-full p-2 gap-x-5 gap-y-10 max-w-7xl py-8
                     md:flex-row md:mx-auto xl:gap-x-16 xl:max-w-[80rem]"
    >
      {/*  */}

      {/* IMAGE */}
      <div
        className="h-[20rem] w-full
                      md:h-[rem]
                      lg:h-[30rem]
                      xl:h-[35rem]"
      >
        <img
          className="object-cover rounded-xl h-full w-auto"
          src="/images/contact.jpg"
          alt=""
        />
      </div>

      {/* FORM */}
      <div className="w-full h-auto mb-5">
        <h1
          className="text-2xl font-extrabold text-gray mb-3 md:text-center
                       lg:text-3xl xl:text-5xl"
        >
          Get in Touch
        </h1>
        <form action="">
          <input
            className="my-1 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg
                       lg:my-2 lg:h-9 lg:placeholder:text-xl focus:outline-0"
            type="text"
            required
            placeholder="Name"
          />
          <input
            className="my-1 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            type="text"
            required
            placeholder="Email"
          />
          <input
            className="my-1 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            type="text"
            required
            placeholder="Phone Number"
          />
          <textarea
            className=" relative my-1 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            name=""
            id=""
            cols="20"
            rows="1"
            required
            placeholder="Message..."
          ></textarea>
        </form>
        <div className="flex items-center gap-5">
          <button className="my-2 text-orange bg-opacity-20 font-bold border-orange lg:text-lg">
            Get in Touch
          </button>
          <BsTelephone className="text-blueText" size={25} />
          <SiFacebook className="text-blueText" size={25} />
          <BsWhatsapp className="text-blueText" size={25} />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
