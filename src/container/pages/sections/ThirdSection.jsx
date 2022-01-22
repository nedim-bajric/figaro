import React from "react";
import data from "../../../data/services.data";
const ThirdSection = () => {
  return (
    <div className="services w-screen h-full bg-white" id="services  ">
      <div className="wrapper h-full w-full  py-32 px-12 flex flex-col items-center justify-center ">
        <h1 className="self-center text-4xl mb-20">Our Services</h1>
        <div className=" md:flex md:flex-wrap md:justify-between lg:flex lg:flex-wrap lg:justify-between xl:flex xl:flex-wrap xl:justify-between xxl:flex xxl:flex-wrap xxl:justify-center xxl:max-w-7xl">
          {data?.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col items-start justify-center mb-20 md:w-1/3 lg:w-1/3 xl:w-1/3 xxl:w-1/3 md:items-center lg:items-center xl:items-center"
            >
              <img src={item.img} alt="icon" className="w-8 " />
              <h4 className="uppercase  my-5 tracking-widest text-lg font-sans ">
                {item.title}
              </h4>
              <p className="text-gray-400 max-w-xs font-thin text-lg md:text-center lg:text-center xl:text-center ">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
