import React from "react";

export const HistoryList = ({ history }) => {
  let outcome;
  return (
    <div>
      {console.log('this is the history', history)}
      {history.map(hist => {
        outcome = hist.outcome === 0 ? "Loss" : "Win";
        return (
          <li>
            <div>{outcome}</div>
            <div>Opponent: {hist.receiver.rows[0].username}</div>
            <div>Clout Earned: {hist.clout}</div>
          </li>
        );
      })}
    </div>
  );
};
