import React from "react";

const ServicesCard = (services) => {
  return (
    <div className="max-w-sm mx-2 my-4  p-3 bg-[#151920] shadow-lg rounded-lg overflow-hidden border-[2px] border-slate-800">
      <img
        className="w-full h-50 object-cover rounded-lg"
        src={services.imageUrl}
        alt={services.title}
      />
      <div className="p-4 text-white">
        <div className="font-bold text-xl mb-2">{services.title}</div>
        <p className="text-gray-400 text-base">{services.description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
