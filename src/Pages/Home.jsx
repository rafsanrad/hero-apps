import React from "react";
import useApps from "../Hooks/useApps";

import LoadingSpinner from "../Components/LoadingSpinner";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

const Home = () => {
  const { apps, loading } = useApps();
  const trendingApps = apps.slice(0, 8);
  return (
    <div>
        <Hero></Hero>
        <Banner></Banner>
      <div className="flex justify-between items-center py-5">
        <h1 className="font-semibold text-2xl ">Trending Apps</h1>
        <Link className="btn btn-outline" to="/apps">
          Show All
        </Link>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trendingApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
