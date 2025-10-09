import React from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";
import { Link } from "react-router";
import LoadingPage from "../Components/LoadingPage";
import ErrorPage from "./ErrorPage";

const AppsList = () => {
  const { apps, loading, error } = useApps();
  if (loading) return <LoadingPage />
  if(error) return <ErrorPage/>
  const featuredApps = apps.slice(0, 8);

  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-bold mb-4">Trending Apps</h1>
      <p className="text-center text-gray-500">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {featuredApps.map((apps) => (
          <AppsCard key={apps.id} app={apps} />
        ))}
      </div>
      <Link to={"/allapps"} >
        <div className="flex justify-center my-10">
          <button className="btn w-42 rounded-lg text-white  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Show All
          </button>
        </div>
      </Link>
    </div>
  );
};

export default AppsList;
