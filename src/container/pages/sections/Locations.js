import React from "react";
import Card from "../../../components/Card/Card";
import data from "../../../data/location.data";
const Locations = () => {
  return (
    <div
      id="locations"
      className="locations w-screen height bg-black xxl:h-screen"
    >
      <div className="wrapper w-full h-full py-20 xl:flex xxl:flex xxl:items-center">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Locations;
