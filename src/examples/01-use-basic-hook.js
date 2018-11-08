import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const IncrementCount = () => {
    setCounter(currentCount => {
      return currentCount + 1;
    });
  };

  return (
    <div>
      <button onClick={IncrementCount}>{counter}</button>
    </div>
  );
}

export default Counter;
