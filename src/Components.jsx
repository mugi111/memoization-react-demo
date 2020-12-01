import React from "react";
import moize from "moize";

export const TestAdd = (props) => {
  moize.react(
    <span>
      {props.first + props.second}
    </span>
  );
}