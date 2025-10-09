import React, { useEffect, useState } from "react";
import { loadInstalled, removeInstallation } from "../utils/installation";

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
            className="p-2 card card-side bg-base-100 shadow border"
          >
            <figure>
              <img
                className="w-40 h-32 object-cover"
                src={app.image}
                alt={app.title}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{app.title}</h3>
              <p className="text-base-content/70">{app.companyName}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <button
                onClick={() => handleRemove(app.id)}
                className="btn btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
       
    </div>
  );
};

export default Installation;
