import React from "react";

function Recruiter(props) {
  return (
    <div className="w-[90%] bg-[#f2f2f2] hover:border-2 hover:border-gray-300 p-6 rounded-xl shadow-custom m-4">
      <img
        className="w-16 h-16 rounded-full mb-3 mr-4"
        src={props.recCompany}
        alt="profile"
      />
      <p className="text-gray-700 text-left">{props.recPara}</p>
      <button className="bg-blue-700 my-2 py-2 px-3 text-blue-100 font-semibold rounded-full">
        {props.recBtn}
      </button>
      <div className="flex">
        <img
          className="w-16 h-16 rounded-full mb-3 mr-4"
          src={props.recProfile}
          alt="profile"
        />
        <div>
          <h4 className="text-left text-black">{props.recName}</h4>
          <h5 className="text-left text-blue-600  font-semibold text-base">
            {props.recPost}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Recruiter;
