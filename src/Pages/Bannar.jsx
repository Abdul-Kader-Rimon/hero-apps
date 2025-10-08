import React from "react";
import appleStoreLogo from "../assets/applestore.png"
import playStoreLogo from "../assets/playstore.png"
const Bannar = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200  py-8 md:my-8 lg:py-20 ">
          <div className="hero-content text-center px-4 md:px-8 lg:px-16">
            <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                We Build <br />
                <span className="pr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                  Productive
                </span>
                Apps
              </h1>
              <p className="py-4 md:py-6 text-sm md:text-base lg:text-lg text-gray-600">
                At HERO.IO , we craft innovative apps designed to make everyday
                life simpler, smarter, and more exciting. Our goal is to turn
                your ideas into digital experiences that truly make an impact.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                <a
                  href="https://play.google.com/store/games?hl=en"
                  target="_blank"
                  className="py-6 btn border-1 border-gray-300 shadow-lg w-2/4 md:w-1/4 lg:w-1/5 rounded-lg"
                >
                  <img className="h-8 w-8'" src={playStoreLogo} alt="" />
                  Google Play
                </a>
                <a
                  href="https://www.apple.com/store"
                  target="_blank"
                  className="py-6 btn border-1 border-gray-300 shadow-lg w-2/4 md:w-1/4 lg:w-1/5 rounded-lg"
                >
                  <img className="h-8 w-8'" src={appleStoreLogo} alt="" />
                  App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
