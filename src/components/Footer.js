import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center bg-bluebg text-navText dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div className="bg-[#0f1c34] flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div className="hidden mr-12 lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Social network icons container --> */}
          <div className="flex justify-center">
            <a
              href="https://web.facebook.com/avalonexpresstours"
              target="_blank"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
              rel="noreferrer"
              aria-label="connect with us on facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a
              href="#!"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
              aria-label="connect with us on instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="py-10 mx-6 text-center md:text-left">
          <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Tailwind Elements section --> */}
            <div className="">
              <h3 className="flex items-center justify-center mb-4 font-semibold uppercase md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-3"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
                Exploring SA Transport and Tours (PTY) Ltd
              </h3>
              <p>
                Your premier transportation and tourism provider in
                South Africa
              </p>
            </div>
            {/* <!-- services section --> */}
            <div className="hidden md:block">
              <p className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
                Services
              </p>

              <Link
                to="/services"
                className="text-neutral-600 dark:text-neutral-200"
                aria-label="view information about our tourist services"
                rel="nofollow"
              >
                <p className="mb-4">Tourist Service</p>
              </Link>
              <Link
                to="/services"
                className="text-neutral-600 dark:text-neutral-200"
                aria-label="view information about our charter services"
                rel="nofollow"
              >
                <p className="mb-4">Charter Service</p>
              </Link>
              <Link
                to="/services"
                className="text-neutral-600 dark:text-neutral-200"
                aria-label="view information about our airport transfers"
                rel="nofollow"
              >
                <p className="mb-4">Airport Transfers</p>
              </Link>
              <Link
                to="/services"
                className="text-neutral-600 dark:text-neutral-200"
                aria-label="view information about our corporate transfers"
                rel="nofollow"
              >
                <p className="mb-4">Corporate Transfers</p>
              </Link>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="hidden md:block">
              <p className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
                Site links
              </p>
              <Link
                to="/"
                className="text-neutral-600 dark:text-neutral-200"
                aria-label="go to our home page"
              >
                <p className="mb-4">Home</p>
              </Link>
              <Link
                to="/about"
                className="text-neutral-600 dark:text-neutral-200"
                aria-label="learn more about the company"
              >
                <p className="mb-4">About Us</p>
              </Link>
              <Link
                to="/services"
                className="text-neutral-600 dark:text-neutral-200"
                aria-label="go to our services page"
              >
                <p className="mb-4">Our Services</p>
              </Link>
              <Link
                to="/contact"
                className="text-neutral-600 dark:text-neutral-200"
                aria-label="go to our contact page"
              >
                <p className="mb-4">Contact Us</p>
              </Link>
            </div>
            {/* <!-- Contact section --> */}
            <div>
              <p className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
                Contact
              </p>
              <p className="flex items-center justify-center mb-4 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Singh's Farm, Schaap Road, Schaapkraal, Cape Town,
                7941
              </p>
              <a
                href="mailto: hr@exploringsa.co.za"
                target="_blank"
                className="flex items-center justify-center mb-4 md:justify-start"
                rel="noreferrer"
                aria-label="click to contact us via email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                hr@exploringsa.co.za
              </a>
              <a
                href="tel:+27 21 396 1145"
                className="flex items-center justify-center mb-4 md:justify-start"
                aria-label="click to give us a call"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                +27 21 396 1145
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="bg-[#0f1c34] p-6 text-center dark:bg-neutral-700">
          <span>© 2023: </span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="/"
            aria-label="our website link to take you back to the home page"
          >
            Exploring SA Transport and Tours (PTY) Ltd
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
