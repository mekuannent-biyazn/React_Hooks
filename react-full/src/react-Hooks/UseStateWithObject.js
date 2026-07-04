import React from "react";
import { useState } from "react";

function UseStateWithObject() {
  const initialState = { fName: "", lName: "" };
  const [user, setUser] = useState(initialState);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your FName"
        value={user.fName}
        onChange={(e) => setUser({ ...user, fName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter your LName"
        value={user.lName}
        onChange={(e) => setUser({ ...user, lName: e.target.value })}
      />
      <h2>First Name is: {user.fName}</h2>
      <h2>Last Name is: {user.lName}</h2>
      <button onClick={() => setUser(initialState)}>reset</button>
    </div>
  );
}

export default UseStateWithObject;
