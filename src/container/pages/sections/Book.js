import React from "react";

import { BsArrowRight } from "react-icons/bs";
const Book = () => {
  return (
    <div className="book w-screen h-screen" id="book">
      <div className="wrapper h-full w-full flex flex-col items-center justify-center py-20 px-10">
        <div className="text flex-3 flex flex-col items-center justify-start mt-12">
          <h1 className="text-3xl mb-3 xl:text-4xl xxl:text-7xl">
            Book an appointment
          </h1>
          <p className="text-md text-gray-400 xl:text-2xl xxl:text-3xl">
            Give us a call loday and book an appointment in one of our salons.
          </p>
        </div>
        <div className="form flex-1 flex flex-col items-center justify-start mt-20 xxl:w-8/12">
          <input
            className=" w-80 p-3 border-b-2 border-black outline-none xl:w-96 xxl:w-1/2"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className=" w-80 my-10 p-3 border-b-2 border-black outline-none xl:w-96 xxl:w-1/2"
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            className=" w-80 p-3 border-b-2 border-black outline-none xl:w-96 xxl:w-1/2"
            type="text"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="self-start xxl:self-center mt-10 flex items-center  justify-center bg-red-500 px-10 py-3 rounded text-xl"
          >
            Submit <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
