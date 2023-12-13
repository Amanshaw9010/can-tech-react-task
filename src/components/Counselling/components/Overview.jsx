import React from "react";

const Overview = (overview) => {
  return (
    <div className="max-w-sm mx-2 my-4  p-3 hover:shadow-md overflow-hidden rounded-2xl">
      <div className=" flex justify-center items-center">
        <img
          className="w-60 object-cover rounded-lg"
          src={overview.imageUrl}
          alt={overview.title}
        />
      </div>
      <div className="p-4 text-black">
        <div className="font-bold text-xl mb-2">{overview.title}</div>
        <p className="text-gray-600 text-base">{overview.description}</p>
      </div>
    </div>
  );
};

export default Overview;
