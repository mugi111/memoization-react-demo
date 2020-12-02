import React from "react";
import moize from "moize";

const TestAdd = ({ first, second }) => {
  return (
    <span>
      {Number(first) + Number(second)}
    </span>
  )
}

export const MemorizedTestAdd = moize(TestAdd, { isReact: true });