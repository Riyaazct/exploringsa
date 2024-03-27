import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SiFacebook } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Modal from "../components/Modal";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(!showModal);
          // close Modal after 4 seconds
          setTimeout(() => {
            setShowModal(false);
          }, 4000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Exploring SA - Exploring SA - Charter services ||
          Cape Town tours || tourist service || airport transfers and
          corporate transfers.
        </title>
        <meta
          name="Contact Exploring SA Transport and Tours | South Africa Travel Contact | South Africa Tourism Contact"
          content="Contact Exploring SA Transport and Tours today to learn more about our services and how we can help you plan your trip to South Africa."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <section className="bg-lightGreen md:h-[55vh] lg:h-[70vh] w-full h-auto">
        {/*  */}

        {/* CONTAINER */}
        <div
          className="flex flex-col items-center w-full h-full p-2 gap-x-5 gap-y-10 py-8 px-2 mx-auto 
                     sm:max-w-[90%] md:flex-row md:mx-auto xl:gap-x-16 xl:max-w-[80rem]"
        >
          {/*  */}

          {/* IMAGE */}
          <div className="w-full h-auto">
            <img
              className="object-cover w-full h-auto rounded-xl"
              src="images/contact.jpg"
              alt=""
              width={"1250px"}
              height={"1050px"}
            />
          </div>

          {/* FORM */}
          <div className="w-full h-auto mb-5 md:max-w-[45%]">
            <h1 className="mb-3 text-2xl font-extrabold text-gray md:text-center lg:text-3xl xl:text-5xl">
              Get In Touch With Us
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg 
                       lg:my-2 lg:h-9 lg:placeholder:text-xl focus:outline-0 "
                type="text"
                name="name"
                required
                placeholder="Name"
              />
              <input
                className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
                name="email"
                type="email"
                required
                placeholder="Email"
              />
              <input
                className="my-2 w-full bg-lightGreen border-b-[2px] border-opacity-50  border-[#04420C] placeholder:text-[#2D334A] placeholder:opacity-50 placeholder:text-lg focus:outline-0
                       lg:my-2 lg:h-9 lg:placeholder:text-xl"
                name="number"
                type="number"
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
                  value="submit"
                  className="my-2 font-bold cursor-pointer button text-orange bg-opacity-20 border-orange lg:text-lg"
                />
                <a href="tel:+27 21 396 1145">
                  <BsTelephone
                    className="cursor-pointer text-blueText"
                    size={window.innerWidth >= 640 ? 26 : 20}
                  />
                </a>
                <a
                  href="https://web.facebook.com/avalonexpresstours"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiFacebook
                    className="cursor-pointer text-blueText"
                    size={window.innerWidth >= 640 ? 26 : 20}
                  />
                </a>
              </div>
            </form>
          </div>
        </div>

        <Modal showModal={showModal} setShowModal={setShowModal} />
      </section>
    </>
  );
};

export default Contact;
