import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps;
  console.log(searchedApps);
  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h1 className="font-semibold text-2xl">
          All Apps{" "}
          <span className="text-sm text-gray-500">
            ({searchedApps.length}) Apps Found
          </span>
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      {loading ? (
        <LoadingSpinner count={12} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
