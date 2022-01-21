import React from "react";
import Header from "../components/Header/Header";
import FirstSection from "../container/pages/sections/FirstSection";

const Mainlayaout = () => {
  return (
    <div className="w-screen h-full relative bg-black ">
      <Header />
      <FirstSection />
    </div>
  );
};

export default Mainlayaout;
