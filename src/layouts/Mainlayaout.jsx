import React from "react";
import Header from "../components/Header/Header";
import FirstSection from "../container/pages/sections/FirstSection";
import SecondSection from "../container/pages/sections/SecondSection";
import ThirdSection from "../container/pages/sections/ThirdSection";
import Book from "../container/pages/sections/Book";
const Mainlayaout = () => {
  return (
    <div className="w-screen h-full relative bg-white   ">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Book />
    </div>
  );
};

export default Mainlayaout;
