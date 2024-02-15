/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ text, icon, classes }) => {
  return (
    <button
      className={`my-2 rounded border flex items-center justify-center gap-3 font-bold w-full py-2 ${classes}`}
    >
      <span className={`bi bi-${icon}`}></span> {text}
    </button>
  );
};

export default Button;
