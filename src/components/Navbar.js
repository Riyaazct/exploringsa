import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // onClick function for displaying or hiding the menu in mobile view
  const handleNav = () => {
    setActive(!active);
    if (!active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const handleClick = () => {
    setActive(!active);
  };

  // function to check which page is active
  function IsActive(routePath) {
    const location = useLocation();
    return location.pathname === routePath;
  }

  // FUNCTION TO MONITOR WINDOW SIZE THAT SETS ACTIVE STATE TO FALSE IF THE MENU IS OPEN AND STATE IS ACTIVE, TO FALSE IF WINDOW IS RESIZED WHILE THE MENU IS OPEN
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

  // Function for hiding and showing navbar on scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, setVisible]);

  return (
    <nav
      className={`fixed top-0 transition-all duration-1000 ${
        visible ? "opacity-100" : "opacity-0 -translate-y-full"
      } bg-bluebg h-16 items-center border-b-[#DCDCDC] border-b-2 md:border-none w-full flex p-3 text-[#DCDCDC] md:justify-between md:items-center lg:justify-around z-20 md:h-20`}
      data-testid="Navbar-1"
    >
      {/* TITLE */}
      <div className="flex md:pb-1">
        <h2
          className={
            active
              ? "text-blueText font-bold z-30 text-xl "
              : "text-xl font-bold xl:text-2xl "
          }
        >
          Exploring SA
        </h2>
        <p
          className={
            active
              ? "text-blueText font-bold z-30 text-sm pt-[7px] ml-1"
              : "ml-1 pt-[7px] text-sm xl:text-lg xl:pt-[3.8px]"
          }
        >
          Travel and Tours
        </p>
      </div>
      {/* MENU LINKS */}
      {/* LINKS */}
      <div
        className={
          active
            ? "w-full fixed !left-0 !top-0 h-screen bg-lightGreen bg-opacity-95 z-20 text-blueText flex justify-center items-center !ease-in !duration-300 flex-col"
            : "w-full absolute !top-0 !left-[-100%] h-full z-20 text-blueText flex flex-col justify-center items-center !ease-in-out !duration-700 md:static md:w-fit md:flex-row"
        }
      >
        <Link
          to="/"
          className={
            IsActive("/")
              ? "active my-9 text-2xl font-bold text-center md:my-[unset] md:font-normal md:text-lg md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7"
              : "my-9 text-2xl font-bold text-center md:my-[unset] md:font-normal md:text-lg md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7"
          }
          onClick={handleClick}
        >
          HOME
        </Link>
        <Link
          to="/about"
          className={
            IsActive("/about")
              ? " active my-9 text-2xl font-bold text-center md:my-[unset] md:font-normal md:text-lg md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7"
              : "my-9 text-2xl font-bold text-center md:my-[unset] md:font-normal md:text-lg md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7"
          }
          onClick={handleClick}
        >
          ABOUT US
        </Link>
        <Link
          to="/services"
          className={
            IsActive("/services")
              ? " active my-9 text-2xl font-bold text-center md:my-[unset] md:font-normal md:text-lg md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7"
              : "my-9 text-2xl font-bold text-center md:my-[unset] md:font-normal md:text-lg md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7"
          }
          onClick={handleClick}
        >
          OUR SERVICES
        </Link>

        <Link
          to="/contact"
          className={
            IsActive("/contact")
              ? " active my-9 text-2xl font-bold text-center md:my-[unset] md:font-normal md:text-lg md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7"
              : "my-9 text-2xl font-bold text-center md:my-[unset] md:font-normal md:text-lg md:mx-4 md:px-[unset] md:text-[#DCDCDC] xl:text-xl lg:mx-7"
          }
          onClick={handleClick}
        >
          CONTACT US
        </Link>
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
