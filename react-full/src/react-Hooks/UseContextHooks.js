import React, { useContext } from "react";
import { ChanelContext, OunerContext } from "../App";

function UseContextHooks() {
  const owner = useContext(OunerContext);
  const chanel = useContext(ChanelContext);
  return (
    <div>
      {" "}
      {owner}- {chanel}
    </div>
  );
}

export default UseContextHooks;
