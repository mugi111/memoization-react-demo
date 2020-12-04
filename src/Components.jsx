import React from "react";
import moize from "moize";

export const TestRender = ({ text, num }) => {
  return (
    <table>
      {[...Array(num)].map(() => {
        return (
          <td>
            {[...Array(num)].map(() => {
              return <tr>{text}</tr>
            })}
          </td>);
      })}
    </table>
  );
};

export const MemorizedTestRender = moize.react(TestRender);