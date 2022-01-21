import React from "react";
import Header from "../components/Header/Header";
import FirstSection from "../container/pages/sections/FirstSection";
import SecondSection from "../container/pages/sections/SecondSection";

const Mainlayaout = () => {
  return (
    <div className="w-screen h-full relative bg-black ">
      <Header className="bg-black" />
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Mainlayaout;
