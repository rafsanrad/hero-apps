import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-6xl mt-10 font-bold">
          We Build <br /> <span className="text-purple-600">Productive</span>{" "}
          Apps
        </h1>
        <p className="mr-5 ml-5 md:mr-50 md:ml-50 mt-5 text-gray-500">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="gap-3 flex justify-center mt-3 mb-3">
          <button className="btn">Google Play</button>
          <button className="btn">App Store</button>
        </div>
        <img src="hero.png" className="ml-0 mt-5 md:ml-35" alt="" />
      </div>
    </div>
  );
};

export default Hero;
