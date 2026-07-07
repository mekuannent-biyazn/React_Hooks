import React, { useEffect, useRef } from "react";

function UseRefInput() {
  const userRef = useRef(null);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={userRef} type="text" />
    </div>
  );
}

export default UseRefInput;
