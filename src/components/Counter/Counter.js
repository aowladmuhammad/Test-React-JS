import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  let addText = document.getElementById('addtext');

  const increment = () => {
    const countIncrease = count + 1;
    setCount(countIncrease);
    if(count > 30) {
      setCount(count);
    }
  }

  const decrement = () => {
    setCount(count-1);
    if(count === 0) {
      setCount(0);
      addText.style.display = 'block';
      addText.innerHTML = 'You are not allowed to decrement it anymore.';
    }
    if(count > 30) {
      setCount(count);
    }
  };

  if (count > 0) {
    addText.style.display = 'none';
  }
 

  let zero = 0;
  if(count >= 10) {
    zero = '';
    addText.style.display = 'block';
    addText.innerHTML = 'Increment it to 31 and get a surprise!';
  }

  if (count > 30) {
    document.getElementById('change-it').innerHTML = 'Ha Ha! Like this surprise? The counter is gone except the buttons.';
    addText.style.display = 'none';
  }

  return(
    <div>
      <h3 style={{margin: "0"}}><span id='change-it'>Count: {zero}{count}</span><br /><span id="addtext">You are not allowed to decrement it to " -1 ".</span></h3>
      <button style={{margin: "20px"}} className="btn" onClick={increment}>Increase</button>
      <button style={{margin: "20px"}} className="btn" onClick={decrement}>Decrease</button>
    </div>
    
  );
};

export default Counter;