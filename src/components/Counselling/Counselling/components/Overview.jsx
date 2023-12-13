import React from "react";

const Overview = (overview) => {
  return (
    <div className="max-w-sm mx-2 my-4  p-3 shadow-lg overflow-hidden">
      <div className=" flex justify-center items-center">
        <img
          className="w-60 object-cover rounded-lg invert"
          src={overview.imageUrl}
          alt={overview.title}
        />
      </div>
      <div className="p-4 text-white">
        <div className="font-bold text-xl mb-2">{overview.title}</div>
        <p className="text-gray-400 text-base">{overview.description}</p>
      </div>
    </div>
  );
};

export default Overview;
