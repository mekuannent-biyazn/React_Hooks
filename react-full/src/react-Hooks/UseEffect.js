import React, { useState, useEffect } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log({ counter });
  }, []);
  return (
    <div>
      You clicked {counter} times{" "}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
