import { Link } from "lucide-react";
import React from "react";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg} = app;
  //console.log(app)
  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{downloads}</p>
        <p>{ratingAvg}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default AppCard;
