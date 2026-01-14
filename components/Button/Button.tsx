"use client";

import React from "react";

export type ButtonProps = {
  btnName: string;
  handleClick?: () => void;
};

export default function Button({ btnName, handleClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        bg-(--icons-color)
        px-8 py-4
        border border-(--icons-color)
        text-[1.1rem]
        text-(--shadow-light)
        transition-all duration-200 ease-in
        shadow-(--box-shadow)
        rounded-4xl
        hover:bg-(--main-bg-color)
        hover:text-(--icons-color)
      "
    >
      {btnName}
    </button>
  );
}
