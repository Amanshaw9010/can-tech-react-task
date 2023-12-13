import React from "react";

const ChooseCard = (choose) => {
  return (
    <div className="max-w-sm mx-2 my-4  p-3 bg-[#EEEDED] hover:shadow-md rounded-lg overflow-hidden border-[2px] hover:border-gray-300">
      <img
        className="w-full h-50 object-cover rounded-lg"
        src={choose.imageUrl}
        alt={choose.title}
      />
      <div className="p-4 text-black">
        <div className="font-bold text-xl mb-2">{choose.title}</div>
        <p className="text-gray-600 text-base">{choose.description}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
