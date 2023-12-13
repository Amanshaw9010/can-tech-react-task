import React from "react";

function StoriesCard(props) {
  return (
    <div className="w-[90%] bg-[#f2f2f2] hover:border-2 hover:border-gray-300 shadow-custom p-6 rounded-xl m-4">
      <div className="flex">
        <img
          className="w-16 h-16 rounded-full mb-3 mr-4"
          src={props.profile}
          alt="profile"
        />
        <div>
          <h4 className="text-left">{props.name}</h4>
          <h5 className="text-left text-gray-600">{props.post}</h5>
        </div>
      </div>
      <p className="text-gray-500 text-left">{props.para}</p>
      <button className="bg-blue-700 py-2 px-3 text-blue-100 rounded-full font-semibold">
        {props.btn}
      </button>
    </div>
  );
}

export default StoriesCard;
