"use client";

import React from "react";

export type ButtonProps = {
  btnName: string;
  handleClick?: () => void;
};

export default function Button({ btnName, handleClick }: ButtonProps) {
  return (
    <button type="button" onClick={handleClick}>
      {btnName}
    </button>
  );
}
