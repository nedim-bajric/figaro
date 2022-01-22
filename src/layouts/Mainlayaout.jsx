import React from "react";
import Header from "../components/Header/Header";
import FirstSection from "../container/pages/sections/FirstSection";
import SecondSection from "../container/pages/sections/SecondSection";
import ThirdSection from "../container/pages/sections/ThirdSection";

const Mainlayaout = () => {
  return (
    <div className="w-screen h-full relative bg-white flex flex-col items-center  ">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Mainlayaout;
