import React from 'react';

// import Loading from '../../globals/Loading';

const ChatBox = ({ msg }) => {
  console.log('this is the msg', msg);
  return (
    <div>{msg.map((singleLine, idx) => <div key={idx}>{singleLine}</div>)}</div>
  );
};

export default ChatBox;
