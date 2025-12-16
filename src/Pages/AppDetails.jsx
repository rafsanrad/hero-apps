import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { updateInstallation } from "../Utils/localStorage";

const AppDetails = () => {
  const { id } = useParams(); //useparams theke id ta string akare pabo.
  const { apps, loading } = useApps();

  const app = apps.find((a) => String(a.id) === id);

  if (loading) return <p>Loading...</p>;
  const { image, title, downloads, ratingAvg, description } = app || {}; //fallback banai rakhlam jate kono error na dey

  return (
    <div className="card bg-base-100 border shadow-sm ">
      <figure className="h-84 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Downloads:{downloads}</p>
        <p>Rating Average:{ratingAvg}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => updateInstallation(app)}
            className="btn btn-outline"
          >
            Install Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
