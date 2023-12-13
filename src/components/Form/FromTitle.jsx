import React from "react";

const FromTitle = (props) => {
  return (
    <div>
      <h1 className="text-2xl mb-1.5 font-semibold text-white">
        {props.title}
      </h1>
      <p className="text-xs  text-slate-200 ">{props.subTitle}</p>
    </div>
  );
};

export default FromTitle;
