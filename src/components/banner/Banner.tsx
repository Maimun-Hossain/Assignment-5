import React from "react";
import banner from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="w-full md:w-[60%]">
          <div className="pt-10 md:py-20 md:mx-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
              Build Your Ideal
              <br />
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,rgba(255,87,34,1)_0%,rgba(216,27,126,1)_50%,rgba(124,58,237,1)_100%)]">
                Development Stack
              </span>
            </h1>
            <p className="mt-5 mb-10 text-sm sm:text-base md:text-lg text-[#475569]">
              Explore frontend, backend, database, and tooling options,
              <br className="hidden sm:block" /> compare them side by side, and
              put together the stack that fits your next project.
            </p>
            <div className="flex justify-center gap-3 sm:flex-row md:justify-start sm:gap-3 md:gap-3">
                <button className="btn bg-[linear-gradient(to_right,rgba(255,87,34,1)_0%,rgba(216,27,126,1)_100%)] text-white rounded-lg mr-0 mb-3 md:mr-4 md:mb-0">
              Explore Technologies
            </button>
            <button className="btn border-2 border-[#e5e7ebFF] bg-transparent text-gray-500 rounded-lg">
              Learn More
            </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <img
            src={banner}
            alt="Banner"
            className="mx-auto w-full max-w-[420px] md:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
