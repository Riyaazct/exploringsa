import React from "react";
import { SiFacebook } from "react-icons/si";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";

const Contact = () => (
  <section className="bg-lightGreen md:h-[55vh] lg:h-[70vh] w-full h-auto">
    {/*  */}

    {/* CONTAINER */}
    <div
      className="flex flex-col items-center w-full h-full p-2 gap-x-5 gap-y-10 py-8 px-2 mx-auto 
                     sm:max-w-[90%] md:flex-row md:mx-auto xl:gap-x-16 xl:max-w-[80rem]"
    >
      {/*  */}

      {/* IMAGE */}
      <div
        className="h-auto
                      "
      >
        <img
          className="object-cover rounded-xl h-auto w-full"
          src="/images/contact.jpg"
          alt=""
        />
      </div>

      {/* FORM */}
      <div className="w-full h-auto mb-5 md:max-w-[45%]">
        <h1
          className="text-2xl font-extrabold text-gray mb-3 md:text-center
                       lg:text-3xl xl:text-5xl"
        >
          Get in Touch
        </h1>
        <form action="">
          <input
            className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg
                       lg:my-2 lg:h-9 lg:placeholder:text-xl focus:outline-0"
            type="text"
            required
            placeholder="Name"
          />
          <input
            className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            type="text"
            required
            placeholder="Email"
          />
          <input
            className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
            type="text"
            required
            placeholder="Phone Number"
          />
          <textarea
            className=" relative my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
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
          <BsTelephone
            className="text-blueText cursor-pointer"
            size={window.innerWidth >= 768 ? 25 : 20}
          />
          <SiFacebook
            className="text-blueText cursor-pointer"
            size={window.innerWidth >= 768 ? 25 : 20}
          />
          <BsWhatsapp
            className="text-blueText cursor-pointer"
            size={window.innerWidth >= 768 ? 25 : 20}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
