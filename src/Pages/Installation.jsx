import React, { useEffect, useState } from "react";
import { loadInstalled, removeInstallation } from "../utils/installation";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import LoadingPage from "../Components/LoadingPage";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    const apps = loadInstalled();
    setInstalledApps(apps);
    setLoading(false);
  }, []);

  const handleRemove = (id , title) => {
    removeInstallation(id);
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
    toast.success(`${title} Uninstalled Successfully !`)
  };

  const sortApps = (() => {
    if (sortOrder === "high-low") {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "low-high") {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installedApps;
    }
  })();

  if (!installedApps.length && loading) return <LoadingPage/>;

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-6 ">
        Your Installed Apps
      </h1>
      <p className="text-center mb-4 text-gray-500">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center my-6 px-4 space-y-4 md:space-y-1">
        <div>
          <h1 className="text-lg md:text-xl font-bold">
            ({sortApps.length}) Installed apps Found
          </h1>
        </div>
        <div>
          <label className="w-full max-w-xs py-3 bg-white px-4 text-gray-500 font-bold rounded-lg">
            <select value={sortOrder} className="outline-none border-none px-4" onChange={(e) => setSortOrder(e.target.value)}>
              <option value="none">Sort by Download</option>
              <option value="high-low">High - Low</option>
              <option value="low-high">Low - High</option>
            </select>
          </label>
        </div>
      </div>
      <div className="space-y-4">
        {sortApps.map((app) => (
          <div
            key={app.id}
            className="px-4 md:px-6 py-2 card card-side bg-base-100 shadow-lg overflow-hidden"
          >
            <figure>
              <img
                className="w-28 h-28 md:w-30  md:h-32 object-cover"
                src={app.image}
                alt={app.title}
              />
            </figure>
            <div className="card-body">
              <div className=" flex flex-col md:flex-row items-center gap-2">
                <h3 className="text-lg md:text-2xl font-bold">{app.title}: </h3>
                <h3 className=" md:text-2xl font-semibold">
                  {app.companyName}
                </h3>
              </div>
              <div className="flex flex-col-reverse md:flex-row  gap-1 md:gap-3 items-center mt-4">
                <h3 className="flex items-center gap-2  text-green-400  md:text-xl font-bold">
                  <FaDownload />
                  {app.downloads}M
                </h3>
                <h3 className="flex items-center gap-2 md:text-xl text-orange-400 font-bold">
                  <FaStar />
                  {app.ratingAvg}
                </h3>
                <h3 className="md:text-xl text-gray-400 font-semibold">
                  {app.size}MB
                </h3>
              </div>
            </div>
            <div className="md:pr-4 flex items-center gap-3">
              <button
                onClick={() => handleRemove(app.id , app.title)}
                className="btn bg-[#00D390] text-white font-semibold md:text-xl md:p-6 rounded-lg"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
