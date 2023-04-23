import React, { FC } from "react";

interface buttonProps {
  text: string;
  bg_color: string;
  f_color: string;
  onClick: () => void;
}

const Button: FC<buttonProps> = ({ text, onClick, f_color, bg_color }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`px-8 py-3 ${f_color} uppercase ${bg_color} w-[263px] `}
    >
      {text}
    </button>
  );
};

export default Button;
