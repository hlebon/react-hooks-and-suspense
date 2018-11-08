import React, { useState } from "react";

function UseCounter(initialState, step) {
  const [counter, setCount] = useState(initialState);
  const IncrementCount = () => setCount(currentCount => currentCount + step);
  return {
    IncrementCount,
    counter
  };
}

function Counter() {
  const { counter, IncrementCount } = UseCounter(0, 2);
  return <button onClick={IncrementCount}>{counter}</button>;
}

export default Counter;
