import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ReactComponent as Chair } from "../../../assets/icon_chair.svg";
import { ReactComponent as Brush } from "../../../assets/icon_brush.svg";
import { ReactComponent as Cutter } from "../../../assets/icon_eq.svg";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
const FirstSection = () => {
  return (
    <div className="container w-screen h-screen ">
      <div className="header-wrapper w-screen h-full bg-banner1 bg-cover bg-center text-gray-200 flex items-center justify-center md:flex-col md:items-start md:justify-start  lg:flex-col lg:items-start lg:justify-start xl:flex-col xl:items-start xl:justify-start xxl:flex-col xxl:items-start xxl:justify-start py-10 px-7">
        <div className="header sm:hidden flex items-center justify-between w-full xl:mb-10 xxl:justify-around xxl:mt-5">
          <div className="left w-48 h-full  flex flex-col items-center justify-center text-gray-300 xxl:w-64">
            <div className="hair flex flex-col items-start justify-center my-6 text-sm">
              <Chair className="w-12  mb-2" />
              <span className="text-xl mb-2">Hair Styling</span>
              <span className="mb-2">Haircut</span>
              <span className="mb-2">Hair Coloring</span>
              <span className="mb-2">Hghlights</span>
            </div>
            <div className="beard flex flex-col items-start justify-center my-6 text-sm ">
              <Brush className="w-12 mb-2" />
              <span className="text-xl mb-2">Beard Styling</span>
              <span className="mb-2">Beard coloring</span>
              <span className="mb-2">Shave</span>
              <span className="mb-2">Beard trim</span>
            </div>
          </div>
          <div className="right w-48 h-full flex flex-col items-start justify-start p-5 xxl:w-64">
            <Cutter className="w-20" />
            <p className="my-2.5 text-xl xxl:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <span className="auth text-2xl mx-2.5 xxl:mt-20 xxl:text-3xl">
              Alfred Hordberg
            </span>
          </div>
        </div>
        <div className="footer flex items-center justify-between w-full xl:self-center  flex-1">
          <div className="social sm:hidden md:hidden lg:hidden flex items-end justify-center w-full h-full mb-20">
            <FaFacebook
              size={30}
              className="mx-5 cursor-pointer hover:scale-125 duration-700 hover:text-red-500"
            />
            <FaYoutube
              size={30}
              className="mx-5 cursor-pointer hover:scale-125 duration-700 hover:text-red-500"
            />
            <FaTwitter
              size={30}
              className="mx-5 cursor-pointer hover:scale-125 duration-700 hover:text-red-500"
            />
            <FaInstagram
              size={30}
              className="mx-5 cursor-pointer hover:scale-125 duration-700 hover:text-red-500"
            />
          </div>
          <div className="xl:max-w-xl xl:border-l xxl:border-l px-3 xxl:self-end xxl:mb-10">
            <h1 className="pb-2.5 text-4xl leading-10 xxl:text-6xl">
              We don`t cut, we style
            </h1>
            <p className="text-base pb-2.5 max-w-6xl xxl:text-2xl ">
              Velit deserunt do exercitation ad. Nisi dolore magna exercitation
              pariatur mollit est incididunt. Labore dolore quis id ullamco
              reprehenderit ut proident eu ut.
            </p>
            <span className="flex items-center justify-start text-red-500 text-2xl  cursor-pointer hover:translate-x-2 duration-700 ">
              Discover <BsArrowRight className="ml-2 mt-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
