import React, { useState } from "react";
import Logo from "../../assets/logo_white.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
const Header = ({ executeScroll }) => {
  const [dropdown, setDropdown] = useState(false);
  const [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <div
      className={`header fixed top-o w-screen h-16  ${
        scroll ? "bg-black" : null
      } duration-700`}
    >
      <div className="header-wrapper w-full h-full px-4 flex items-center justify-between ">
        <Link to="home" spy={true} smooth={true}>
          <img
            src={Logo}
            className="w-28 cursor-pointer hover:scale-90 duration-700"
          />
        </Link>
        <div className="sm:hidden md:hidden lg:hidden text-white text-xl  h-full w-full flex items-center justify-end ">
          <Link
            className="mx-3 cursor-pointer hover:scale-125 duration-700"
            to="about"
            spy={true}
            smooth={true}
            activeClass="active"
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            activeClass="active"
            className="mx-3 cursor-pointer hover:scale-125 duration-700"
          >
            Services
          </Link>
          <Link
            to="book"
            spy={true}
            smooth={true}
            activeClass="active"
            className="mx-3 cursor-pointer hover:scale-125 duration-700"
          >
            Book
          </Link>
          <Link
            to="locations"
            spy={true}
            smooth={true}
            activeClass="active"
            className="mx-3 cursor-pointer hover:scale-125 duration-700"
          >
            Locations
          </Link>
        </div>
        <div
          className="hamburger-menu-container xl:hidden xxl:hidden"
          onClick={() => setDropdown(!dropdown)}
        >
          <GiHamburgerMenu
            className="text-white active:scale-50 duration-700"
            size={25}
          />
        </div>
      </div>
      {dropdown ? (
        <div className="xl:hidden xxl:hidden dropdown w-screen h-64 bg-black text-white duration-700 flex flex-col items-center justify-center font-semibold text-2xl">
          <Link
            to="about"
            spy={true}
            smooth={true}
            className="my-3"
            activeClass="active"
            onClick={() => setDropdown(!dropdown)}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            className="my-3"
            activeClass="active"
            onClick={() => setDropdown(!dropdown)}
          >
            Services
          </Link>
          <Link
            to="book"
            spy={true}
            smooth={true}
            className="my-3"
            activeClass="active"
            onClick={() => setDropdown(!dropdown)}
          >
            Book
          </Link>
          <Link
            to="locations"
            spy={true}
            smooth={true}
            className="my-3"
            activeClass="active"
            onClick={() => setDropdown(!dropdown)}
          >
            Locations
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
