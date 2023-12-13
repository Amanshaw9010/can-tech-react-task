import React from "react";

const ServicesCard = (services) => {
  return (
    <div className="max-w-sm mx-2 my-4  p-3 bg-[#EEEDED] ashadow-md rounded-lg overflow-hidden border-[2px] hover:border-gray-300">
      <img
        className="w-full h-50 object-cover rounded-lg"
        src={services.imageUrl}
        alt={services.title}
      />
      <div className="p-4 text-black">
        <div className="font-bold text-xl mb-2">{services.title}</div>
        <p className="text-gray-800 text-base">{services.description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
