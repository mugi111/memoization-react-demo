import React from "react";
import moize from "moize";

export const TestRender = ({ text, num }) => {
  return (
    <span>
      {[...Array(num)].map(() => {
        return <span>{text}</span>;
      })}
    </span>
  )
}

export const MemorizedTestRender = moize.react(TestRender);