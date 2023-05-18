import React from "react";

const Contact = () => (
  <section className="flex w-screen h-full gap-2 bg-lightGreen p-2">
    {/* IMAGE */}
    <div className="w-[45%] border-2">image</div>

    {/* FORM */}
    <div className="border-2 w-[45%] h-full">
      <h1 className="text-xl font-bold text-gray pl-1">
        Get in Touch
      </h1>
      <form action="">
        <input
          className="my-1 w-full bg-lightGreen border-b-[2px]  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:pl-1"
          type="text"
          placeholder="Name"
        />
        <input
          className="my-1 w-full bg-lightGreen border-b-[2px]  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:pl-1"
          type="text"
          placeholder="Email"
        />
        <input
          className="my-1 w-full bg-lightGreen border-b-[2px]  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:pl-1"
          type="text"
          placeholder="Phone Number"
        />
        <textarea
          className=" relative my-1 w-full bg-lightGreen border-b-[2px]  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:pl-1"
          name=""
          id=""
          cols="20"
          rows="10"
          placeholder="Message..."
        ></textarea>
      </form>
      <button className="mb-2 ml-2">Get in Touch</button>
    </div>
  </section>
);

export default Contact;
