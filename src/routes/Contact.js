import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SiFacebook } from "react-icons/si";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  console.log({ serviceId, userId, templateId });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-lightGreen md:h-[55vh] lg:h-[70vh] w-full h-auto">
      {/*  */}

      {/* CONTAINER */}
      <div
        className="flex flex-col items-center w-full h-full p-2 gap-x-5 gap-y-10 py-8 px-2 mx-auto 
                     sm:max-w-[90%] md:flex-row md:mx-auto xl:gap-x-16 xl:max-w-[80rem]"
      >
        {/*  */}

        {/* IMAGE */}
        <div className="h-auto w-full">
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
            Get In Touch With Us
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg
                       lg:my-2 lg:h-9 lg:placeholder:text-xl focus:outline-0"
              type="text"
              name="name"
              required
              placeholder="Name"
            />
            <input
              className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
              name="email"
              type="text"
              required
              placeholder="Email"
            />
            <input
              className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
              name="number"
              type="text"
              required
              placeholder="Phone Number"
            />
            <textarea
              className=" relative my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
              name="message"
              id="message"
              cols="20"
              rows="10"
              required
              placeholder="Message..."
            />
            <div className="flex items-center gap-5">
              <input
                type="submit"
                value="Submit"
                className="button my-2 text-orange bg-opacity-20 font-bold border-orange lg:text-lg"
              />
              <BsTelephone
                className="text-blueText cursor-pointer"
                size={window.innerWidth >= 640 ? 30 : 20}
              />
              <SiFacebook
                className="text-blueText cursor-pointer"
                size={window.innerWidth >= 640 ? 30 : 20}
              />
              <BsWhatsapp
                className="text-blueText cursor-pointer"
                size={window.innerWidth >= 640 ? 30 : 20}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
