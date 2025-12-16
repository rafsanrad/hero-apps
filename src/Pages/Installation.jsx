import React, { useState } from "react";
import { loadInstallation, removeFromInstallation } from "../Utils/localStorage";
import { Download } from "lucide-react";

const Installation = () => {
  const [installation, setInstallation] = useState(() => loadInstallation());
  const [sortOrder, setSortOrder] = useState("none");

  if (!installation.length) return <p>No Data Available</p>;

  const sortedItem = (() => {
    //iffi function/ auto call function.
    if (sortOrder === "size-asc") {
      return [...installation].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installation].sort((a, b) => b.size - a.size);
    } else {
      return installation;
    }
  })();

  const handleRemove = (id) => {
    //remove from localstorage
    removeFromInstallation(id);
    //for ui instant update
    setInstallation((prev) => prev.filter((a) => a.id !== id));
  };

  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center py-5">
        <h1 className="font-semibold text-2xl">
          installation{" "}
          <span className="text-sm text-gray-500">
            ({sortedItem.length}) Apps Found
          </span>
        </h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {sortedItem.map((a) => (
          <div key={a.id} className="card card-side bg-base-100 shadow border">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={a.image}
                alt={a.image}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{a.title}</h2>
              <div className="flex gap-1">
                <Download />
              <p className="text-base-content/70">{a.downloads}</p>
              </div>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <div className="font-semibold">⭐️{a.ratingAvg}</div>
              <button
                onClick={() => handleRemove(a.id)}
                className="btn btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Installation;
