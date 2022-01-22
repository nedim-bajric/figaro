import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card w-11/12 h-11/12 border mx-auto my-5 xl:mx-2 xxl:mx-2 xxl:h-1/2">
      <div className="wrapper p-10 w-full h-full text-white flex flex-col items-start justify-start">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <p className="text-md my-5 text-left">{item.paragraph}</p>
        <span className="text-lg font-mono">{item.addres}</span>
        <span className="text-lg font-mono my-3">{item.mob}</span>
        <span className="text-lg font-mono">{item.email}</span>
      </div>
    </div>
  );
};

export default Card;
