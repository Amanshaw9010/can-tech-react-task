import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

function Card(props) {
  return (
    <div>
      <div className="w-[90%]  flex flex-col justify-center items-center shadow-custom bg-[#f2f2f2]  hover:border-2 hover:border-gray-300 rounded-lg  p-8 m-4 cursor-pointer">
        <img className="w-24 h-24 rounded-full" src={props.img} alt="profile" />
        <h1 className="my-2 text-black">{props.name}</h1>
        <p className="mb-2 text-gray-600">{props.position}</p>
        <div className="mb-2">
          <h5 className="text-gray-500 text-base">{props.position2}</h5>
          <h5 className="text-lg text-black">{props.company}</h5>
        </div>
        <FaAngleDoubleDown className="text-green-600 text-xl" />
        <div className="my-2">
          <h4 className="text-lg text-black">{props.position3}</h4>
          <h5 className="text-base text-gray-500">{props.company2}</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
