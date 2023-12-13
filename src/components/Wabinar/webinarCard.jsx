import React from "react";

const WebinarCard = ({ image, timing, host, post, description, profile }) => {
  return (
    <div className="max-w-full mx-2 my-4  p-3 bg-[#151920] shadow-lg rounded-3xl overflow-hidden border-[2px] border-slate-800 cursor-pointer">
      <img
        src={image}
        alt="Webinar Thumbnail"
        className="w-full h-auto mb-4 rounded-2xl"
      />

      <p className="text-gray-100 mb-4 text-start">{timing}</p>
      <p className="text-white text-3xl text-start mb-4">{description}</p>
      <div className="flex items-center justify-start my-8">
        <img
          src={profile}
          alt="profile Image"
          className="w-16 h-16 rounded-full mx-4"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">{host}</h3>
          <h5 className="text-lg font-normal text-gray-400">{post}</h5>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;
