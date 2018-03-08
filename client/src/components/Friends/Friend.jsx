import React, { Component } from "react";

const Friend = props => {
  return (
    <li>
      {props.friend.username} ({props.friend.email}})
    </li>
  );
};

export default Friend;
