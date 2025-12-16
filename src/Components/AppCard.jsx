
import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg ,id} = app;
  //console.log(app)
  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between ">
          <div className="flex">
            <img className="w-5 h-5" src="icon-downloads.png" alt="" />
            <p>{downloads}</p>
          </div>
          <div className="flex">
            <img className="w-5 h-5" src="icon-ratings.png" alt="" />
            <p>{ratingAvg}</p>
          </div>
        </div>
        <div className="text-center">
            <Link to={`/app/${id}`} className="btn btn-outline">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
