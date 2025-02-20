import React from 'react';

function Message({ message, attempts }) {
  return (
    <div>
      <p>{message}</p>
      {attempts > 0 && <p>Bandymų skaičius: {attempts}</p>}
    </div>
  );
}

export default Message;
