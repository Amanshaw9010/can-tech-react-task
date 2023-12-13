import React from "react";
import { MoveRight, Send } from "lucide-react";
const icons = {
  send: Send,
  next: MoveRight,
};

const Button = ({ text, icon }) => {
  const Icon = icons[icon || "send"];
  return (
    <>
      <button className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-500 bg-pink-700 p-2 text-white w-full justify-center rounded">
        <span>{text}</span>
        <Icon size="18" />
      </button>
    </>
  );
};

export default Button;
