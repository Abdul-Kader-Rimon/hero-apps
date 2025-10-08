import React from "react";
import appleStoreLogo from "../assets/applestore.png"
import playStoreLogo from "../assets/playstore.png"
import heroImage from "../assets/hero.png"
const Bannar = () => {
  return (
    <div className="">
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

      <div>
        <div>
          <img className="mx-auto" src={heroImage} alt="" />
        </div>
        <div className=" lg:absolute w-full lg:left-0 lg:right-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center justify-center py-16 px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-white">
              Trusted by Millions, Built for You
            </h2>
            <div className="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
              <div className="lg:p-8 text-center text-white">
                <p className="text-sm mb-4 opacity-50">Total Downloads</p>
                <h1 className="text-6xl font-bold mb-4">29.6M</h1>
                <p className="text-sm mb-4 opacity-50">
                  21% more than last month
                </p>
              </div>
              <div className="lg:p-8 text-center text-white">
                <p className="text-sm mb-4 opacity-50">Total Reviews</p>
                <h1 className="text-6xl font-bold mb-4">906K</h1>
                <p className="text-sm mb-4 opacity-50">
                  46% more than last month
                </p>
              </div>
              <div className="lg:p-8 text-center text-white">
                <p className="text-sm mb-4 opacity-50">Active Apps</p>
                <h1 className="text-6xl font-bold mb-4">132+</h1>
                <p className="text-sm mb-4 opacity-50">31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
