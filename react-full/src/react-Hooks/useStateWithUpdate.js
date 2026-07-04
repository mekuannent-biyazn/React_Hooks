import React from "react";
import { useState } from "react";

function useStateWithUpdate() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  return (
    <div>
      {count}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default useStateWithUpdate;
