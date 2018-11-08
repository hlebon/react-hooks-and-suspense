import React, { useState } from "react";

// const [count, setCount] = useState(0)
// const incrementCount = () => setCount(currentCount => currentCount + 1)
// return <button onClick={incrementCount}>{count}</button>

function Counter() {
  const [counter, setCounter] = useState(0);
  const IncrementCount = () => {
    setCounter(currentCount => {
      return currentCount + 1;
    });
  };

  return <button onClick={IncrementCount}>{counter}</button>;
}

export default Counter;
