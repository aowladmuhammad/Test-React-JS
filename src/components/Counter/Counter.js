import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('You are not allowed to decrement it to " -1 ".');

  const increment = () => {
    const countIncrease = count + 1;
    setCount(countIncrease);
    setText();
    if(count >= 9 && count < 30) {
      setText('Increment it to 31 and get a surprise!');
    }
    if(count > 30) {
      setCount(count);
    }
  }

  const decrement = () => {
    setCount(count-1);
    if(count === 0) {
      setCount(0);
      setText('You are not allowed to decrement it anymore.');
    } else if ( count > 0) {
      setText();
     }
    if(count > 10 && count < 30) {
      setText('Increment it to 31 and get a surprise!');
    }
    if(count > 30) {
      setCount(count);
    }
  };

  let zero = 0;
  if(count >= 10) {
    zero = '';
  }

  if (count > 30) {
    document.getElementById('change-it').innerHTML = 'Ha Ha! Like this surprise? The counter is gone except the buttons.';
  }
  return(
    <div>
      <h3 style={{margin: "0"}}><span id='change-it'>Count:  {zero}{count}</span><br />{text}</h3>
      <button style={{margin: "20px"}} className="btn" onClick={increment}>Increase</button>
      <button style={{margin: "20px"}} className="btn" onClick={decrement}>Decrease</button>
    </div>
    
  );
};

export default Counter;