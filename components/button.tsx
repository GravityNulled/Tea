import React, { FC } from "react";

interface buttonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<buttonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="px-8 py-3 text-white uppercase bg-primary w-[263px]"
    >
      {text}
    </button>
  );
};

export default Button;
