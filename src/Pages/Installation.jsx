import React, { useEffect, useState } from "react";
import { loadInstalled, removeInstallation } from "../utils/installation";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    setInstalledApps(loadInstalled());
  }, []);

  const handleRemove = (id) => {
    removeInstallation(id);
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
  };

  if (!installedApps.length) return <p>No Installed App</p>;

  return (
    <div className="space-y-4">
      {installedApps.map((app) => (
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
              <h3 className=" md:text-2xl font-semibold">{app.companyName}</h3>
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
              onClick={() => handleRemove(app.id)}
              className="btn bg-[#00D390] text-white font-semibold md:text-xl md:p-6 rounded-lg"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;
