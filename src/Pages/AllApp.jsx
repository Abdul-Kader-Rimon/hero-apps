import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";
import AppNotFound from "./AppNotFound";
import LoadingPage from "../Components/LoadingPage";

const AllApp = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedApps, setSearchedApps] = useState([]);

  useEffect(() => {
    if (!apps.length) return;
    setSearchLoading(true);
    const delay = setTimeout(() => {
      const term = search.trim().toLocaleLowerCase();
      const filtered = term
        ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
        : apps;
      setSearchedApps(filtered);
      setSearchLoading(false)
    },300);
    return () => clearTimeout(delay);

  }, [search , apps])
  

  if (loading) return <LoadingPage />

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-6 ">
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

      {searchLoading ? (<LoadingPage /> ) :
      searchedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchedApps.map((app) => (
          <AppsCard key={app.id} app={app} />
        ))}
        </div>
      ) : (
        <AppNotFound />
      )}
    </div>
  );
};

export default AllApp;
