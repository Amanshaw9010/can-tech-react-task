import React from "react";

const Label = (props) => {
  return (
    <label htmlFor={props.id} className="text-white text-xs">
      {props.name}
    </label>
  );
};

export default Label;
