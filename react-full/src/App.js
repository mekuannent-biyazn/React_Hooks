import "./App.css";
import DataFeatching from "./react-Hooks/DataFeatching";
import TimerWithRef from "./react-Hooks/TimerWithRef";
import UseContextHooks from "./react-Hooks/UseContextHooks";
import UseEffect from "./react-Hooks/UseEffect";
import UseRefInput from "./react-Hooks/UseRefInput";
import UseStateHook from "./react-Hooks/useState";
import UseStateWithObject from "./react-Hooks/UseStateWithObject";
import UseStateWithUpdate from "./react-Hooks/useStateWithUpdate";

import React from "react";

export const OunerContext = React.createContext();
export const ChanelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseStateWithUpdate />
      <UseStateWithObject /> */}
      {/* <UseEffect /> */}
      {/* <DataFeatching /> */}
      {/* <OunerContext.Provider value={"MK"}>
        <ChanelContext.Provider value={"MAK-Tech"}>
          <UseContextHooks />
        </ChanelContext.Provider>
      </OunerContext.Provider>*/}
      {/* <UseRefInput /> */}
      <TimerWithRef />
    </div>
  );
}

export default App;
