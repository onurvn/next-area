import React from "react";

const Connect = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-[95%] h-fit items-center justify-center flex flex-col gap-8 border-y border-line md:px-[16rem] py-24">
        <h2
          id="contact"
          className="text-center md:text-start text-6xl crimson-regular"
        >
          Connect with us
        </h2>
        <p className="text-center md:text-start">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>
        <button className="w-[85%] bg-button-primary hover:bg-button-primary-hover text-white px-4 py-3 rounded-full dm-sans font-bold text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Connect;
