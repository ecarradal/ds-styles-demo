import React from "react";

/**
 * @description Component Button
 * @prop {string} type 'primary' || 'secondary'
 * @prop {string} text to display in the button
 */
const Button = ({ type, text }) => {
  return (
    <>
      <button>{`Button type ${type} with text ${text}`}</button>
    </>
  );
};

export default Button;
