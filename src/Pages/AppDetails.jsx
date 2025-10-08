import React from "react";
import useApps from "../Hooks/useApps";
import { useParams } from "react-router";
import AppNotFound from "./AppNotFound";
import { FaDownload, FaStar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  if (loading) return <p>Loadding...</p>;

  const app = apps.find((a) => a.id === Number(id));
  if (!app) return <AppNotFound />;

  const { title, image, downloads, ratingAvg, reviews, companyName, size } =
    app;

  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row    ">
          <img
            src={image}
            className="w-full max-w-lg rounded-lg shadow-2xl mb-4 lg:mr-8"
          />
          <div>
            <div className="mb-2 border-b-2 border-gray-300">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="py-6 text-gray-500">
                Developed by :{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                  {companyName}
                </span>
              </p>
            </div>
            <div>
              <div className="grid  grid-rows-1 md:grid-cols-3 lg:grid-cols-3 gap-10 ">
                <div className="lg:p-12 text-center flex flex-col justify-center items-center ">
                  <p className="text-3xl mb-4 text-green-500">
                    <FaDownload />
                  </p>
                  <p className=" mb-4 opacity-50 ">Downloads</p>
                  <h1 className="text-6xl font-bold mb-4">{downloads}M</h1>
                </div>
                <div className="lg:p-12 text-center flex flex-col justify-center items-center ">
                  <p className="text-3xl mb-4 text-yellow-500">
                    <FaStar />
                  </p>
                  <p className="  mb-4 opacity-50">Average Ratings</p>
                  <h1 className="text-6xl font-bold mb-4">{ratingAvg}</h1>
                </div>
                <div className="lg:p-12 text-center flex flex-col  justify-center items-center ">
                  <p className="text-3xl mb-4 text-purple-600">
                    <GoCodeReview />
                  </p>
                  <p className="  mb-4 opacity-50">Total Reviews</p>
                  <h1 className="text-6xl font-bold mb-4">{reviews}K</h1>
                </div>
              </div>
            </div>
            <div>
              <button className="text-white text-lg font-semibold p-6 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                Install Now ( {size} MB ){" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
