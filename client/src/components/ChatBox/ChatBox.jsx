import React from 'react';

// import Loading from '../../globals/Loading';

const ChatBox = ({ msg }) => {
  return (
    <div>
      {console.log(msg)}
      {msg
        .map((messageObj, idx) => {
          let className = 'challengerMessage';
          if (messageObj.email === localStorage.getItem('email')) {
            className = 'userMessage';
          }
          return (
            <span>
              <span className={className} key={idx}>{`${messageObj.email} : ${
                messageObj.value
              }`}</span>{' '}
              <br />{' '}
            </span>
          );
        })
        .reverse()}
    </div>
  );
};

export default ChatBox;
