import "./App.css";
import UseStateHook from "./react-Hooks/useState";
import UseStateWithObject from "./react-Hooks/UseStateWithObject";
import UseStateWithUpdate from "./react-Hooks/useStateWithUpdate";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}

      <UseStateWithUpdate />
      <UseStateWithObject />
    </div>
  );
}

export default App;
