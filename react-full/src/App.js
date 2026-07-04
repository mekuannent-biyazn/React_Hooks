import "./App.css";
import DataFeatching from "./react-Hooks/DataFeatching";
import UseEffect from "./react-Hooks/UseEffect";
import UseStateHook from "./react-Hooks/useState";
import UseStateWithObject from "./react-Hooks/UseStateWithObject";
import UseStateWithUpdate from "./react-Hooks/useStateWithUpdate";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseStateWithUpdate />
      <UseStateWithObject /> */}
      {/* <UseEffect /> */}
      <DataFeatching />
    </div>
  );
}

export default App;
