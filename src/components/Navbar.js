import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState(false);

  // onClick function for displaying or hiding the menu in mobile view
  const handleNav = () => {
    if (window.innerWidth <= 768) {
      setActive(!active);
      if (!active) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
    }
  };

  // function to check which page is active
  function IsActive(routePath) {
    const location = useLocation();
    return location.pathname === routePath;
  }

  // FUNCTION TO MONITOR WINDOW SIZE THAT SETS ACTIVE STATE TO FALSE IF THE MENU IS OPEN AND STATE IS ACTIVE,
  // TO FALSE IF WINDOW IS RESIZED WHILE THE MENU IS OPEN
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768 && active) {
        setActive(false);
        document.body.style.overflow = "scroll";
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [active]);

  return (
    <nav
      className="sticky top-0 bg-bluebg h-16 items-center border-b-[#DCDCDC] border-b-2 md:border-none w-full flex p-3 text-[#DCDCDC] 
                 md:justify-between md:items-center lg:justify-around z-30 md:h-[4.5rem]"
      data-testid="Navbar-1"
    >
      {/* TITLE */}
      <div className="flex md:pb-1">
        <h2
          className={
            active
              ? "text-blueText font-bold z-30 text-xl "
              : "text-[#DCDCDC] text-xl font-bold xl:text-3xl "
          }
        >
          Exploring SA
        </h2>
        <p
          className={
            active
              ? "text-blueText font-bold z-30 text-sm pt-[7px] ml-2"
              : "text-[#DCDCDC] ml-2 pt-[7px] text-sm xl:text-xl xl:pt-[3.8px]"
          }
        >
          Transport and Tours
        </p>
      </div>

      {/* MENU LINKS */}
      {/* LINKS */}
      <div
        className={
          active
            ? "w-full fixed left-0 top-0 h-screen bg-lightGreen bg-opacity-[0.98] z-20 text-blueText ease-in duration-300 flex-col"
            : "w-full absolute top-0 left-[-100%] h-screen z-20 text-blueText  ease-in-out duration-700 md:static md:w-fit md:flex-row md:h-max"
        }
      >
        <Link
          to={"/contact"}
          className="flex items-center justify-center w-full md:hidden"
          onClick={handleNav}
        >
          <button className="px-10 py-3 text-lg font-extrabold tracking-wider transition duration-500 transform border-0 rounded-sm mt-80 hover:scale-105">
            Get a quote
          </button>
        </Link>

        <div
          className={
            active
              ? "flex flex-col items-start w-max m-auto mt-6 gap-4 text-xl font-bold"
              : "md:flex-row flex md:items-center flex-col gap-4 w-max m-auto mt-6 text-xl font-bold md:mt-0 md:font-normal md:text-base"
          }
        >
          <Link
            to="/"
            className={
              IsActive("/")
                ? "active md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7 md:hover:text-[#FFFFFF] lg:px-2"
                : "md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7 md:hover:text-[#FFFFFF]"
            }
            onClick={handleNav}
            aria-label="a link to our home page"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={
              IsActive("/about")
                ? "active md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7 md:hover:text-[#FFFFFF] lg:px-2"
                : "md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7 md:hover:text-[#FFFFFF]"
            }
            onClick={handleNav}
            aria-label="a link to our about us page"
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className={
              IsActive("/services")
                ? "active md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7 md:hover:text-[#FFFFFF] lg:px-2"
                : "md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7 md:hover:text-[#FFFFFF]"
            }
            onClick={handleNav}
            aria-label="a link to our services page"
          >
            SERVICES
          </Link>

          <Link
            to="/contact"
            className={
              IsActive("/contact")
                ? "active md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7 md:hover:text-[#FFFFFF] lg:px-2"
                : "md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7 md:hover:text-[#FFFFFF]"
            }
            onClick={handleNav}
            aria-label="a link to our contact page"
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* MENU BUTTON OPEN */}
      <div
        className={
          active
            ? "hidden"
            : "absolute right-2 top-3 cursor-pointer md:hidden"
        }
        onClick={handleNav}
      >
        <AiOutlineMenuUnfold color="#DCDCDC" size={34} />
      </div>

      {/* CLOSE MENU BUTTON */}
      <div
        className={
          active
            ? "absolute right-2 top-3 cursor-pointer text-blueText z-30 md:hidden"
            : "hidden"
        }
        onClick={handleNav}
      >
        <AiOutlineMenuFold size={34} />
      </div>
    </nav>
  );
};

export default Navbar;
