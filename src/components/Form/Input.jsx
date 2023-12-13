import React from "react";

const Input = (props) => {

  let labelId = props.labelId;
  let placeHolder = props.placeHolder;

  return (
    <input
      className="bg-transparent outline-none pb-0.5 text-sm  text-white mb-2 mt-0 border-x-0  border-b-[1px] border-t-0 border-white w-full placeholder:text-slate-300 placeholder:font-normal font-normal"
      id={labelId}
      placeHolder={placeHolder}
      type="text"
    />
  );
};

export default Input;
