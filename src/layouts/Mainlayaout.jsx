import React, { useState } from "react";
import Header from "../components/Header/Header";
import FirstSection from "../container/pages/sections/FirstSection";
import SecondSection from "../container/pages/sections/SecondSection";
import ThirdSection from "../container/pages/sections/ThirdSection";
import Book from "../container/pages/sections/Book";
import Locations from "../container/pages/sections/Locations";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/slices/userSlice";
const Mainlayaout = () => {
  let auth = false;
  const token = useSelector(selectToken);
  const [reg, setReg] = useState(false);
  if (token) {
    auth = true;
  } else {
    auth = false;
  }

  return (
    <>
      {auth ? (
        <div className="w-screen h-full relative bg-white   ">
          <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <Book />
          <Locations />
        </div>
      ) : reg ? (
        <Register />
      ) : (
        <Login reg={reg} setReg={setReg} />
      )}
    </>
  );
};

export default Mainlayaout;
