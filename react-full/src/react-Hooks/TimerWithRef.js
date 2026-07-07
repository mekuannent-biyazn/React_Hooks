import React, { useEffect, useRef, useState } from "react";

function TimerWithRef() {
  const [timer, setTimet] = useState(0);
  const intervalref = useRef(null);

  useEffect(() => {
    intervalref.current = setInterval(() => {
      setTimet((prevConter) => prevConter + 1);
    }, 1000);
    return () => {
      clearInterval(intervalref.current);
    };
  }, []);
  return (
    <div>
      Timer- {timer}
      <button
        onClick={() => {
          clearInterval(intervalref.current);
        }}
      >
        Stop Timer
      </button>
    </div>
  );
}

export default TimerWithRef;
