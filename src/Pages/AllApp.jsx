import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";

const AllApp = () => {
  const { apps, loading } = useApps();
  const [ search, setSearch ] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div>
      <h1 className="text-center text-4xl font-bold ">
        Our All Applications
      </h1>
      <p className="text-center text-gray-500">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col mb-2 md:flex-row lg:flex-row justify-between py-5 items-center">
        <h1 className="text-xl my-2 font-bold">
          {" "}
          ({searchedApps.length}) Apps Found
        </h1>
        <label className="input my-4">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search App"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchedApps.map((app) => (
          <AppsCard key={app.id} apps={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApp;
