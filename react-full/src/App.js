import "./App.css";
import DataFeatching from "./react-Hooks/DataFeatching";
import UseContextHooks from "./react-Hooks/UseContextHooks";
import UseEffect from "./react-Hooks/UseEffect";
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
      <OunerContext.Provider value={"MK"}>
        <ChanelContext.Provider value={"MAK-Tech"}>
          <UseContextHooks />
        </ChanelContext.Provider>
      </OunerContext.Provider>
    </div>
  );
}

export default App;
