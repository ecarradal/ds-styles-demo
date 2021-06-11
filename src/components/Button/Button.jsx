import React from "react";
import Typography from "../Typography";

/**
 * @description Component Button
 * @prop {string} type 'primary' || 'secondary'
 * @prop {string} text to display in the button
 */
const Button = ({ type, text }) => {
  return (
    <div className="w-full flex justify-center">
    <button className={`px-20 ${type === 'primary' ? 'bg-green-300' : 'bg-transparent border-gray-600 border-solid border-1' } h-auto w-auto max-w-sm rounded-md`}>
      <Typography
        color={type === 'primary' ? 'text-white' : 'text-black'}
        as="button"
        content={text}
      />
    </button>
    </div>
  );
};

export default Button;
