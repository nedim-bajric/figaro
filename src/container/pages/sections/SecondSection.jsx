import React from "react";

const SecondSection = () => {
  return (
    <div className="about-us w-screen h-screen bg-white xl:p-40 xxl:p-40 ">
      <div className="wrapper flex flex-col item-start justify-center px-10 py-20 md:h-full lg:h-full xl:max-h-lg  xl:max-w-4xl xl:mx-auto  xl:border-l-2 xl:border-black xxl:max-w-7xl xxl:m-auto xxl:border-l-2 xxl:border-black  xxl:max-h-xl">
        <span className="mt-1.5 mb-2.5 text-md font-sans text-gray-400 lg:text-2xl xxl:text-4xl">
          OUR STORY
        </span>
        <h1 className="text-2xl lg:text-4xl xxl:text-6xl">About us</h1>
        <p className="text-lg text-gray-400 my-5 xxl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          pretium quam vulputate dignissim suspendisse in est ante. Amet
          venenatis urna cursus eget nunc scelerisque viverra. Auctor neque
          vitae tempus quam pellentesque nec nam. Lacus vestibulum sed arcu non
          odio euismod. Aliquam etiam erat velit.
        </p>

        <p className="text-lg text-gray-400 my-5 xxl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          pretium quam vulputate dignissim suspendisse in est ante. Amet
          venenatis urna cursus eget nunc scelerisque viverra. Auctor neque
          vitae tempus quam pellentesque nec nam. Lacus vestibulum sed arcu non
          odio euismod. Aliquam etiam erat velit scelerisque in. Dignissim
          sodales ut eu sem integer vitae justo eget magna.
        </p>
        <span className="auth self-end text-3xl xxl:text-4xl">
          Harald Knives
        </span>
      </div>
    </div>
  );
};

export default SecondSection;
