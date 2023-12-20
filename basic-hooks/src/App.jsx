import { createContext, useState } from "react";
import "./App.css";
import Hooks from "./components/Hooks";

export const ToggleContext = createContext();

function App() {
  const [dark, setDark] = useState(true);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ToggleContext.Provider value={{ dark }}>
      <div className="mainContainer">
        <button
          style={{ marginBottom: "30px" }}
          className="toggleBG"
          onClick={toggleDark}
        >
          T O G G L E
        </button>
        <Hooks />
      </div>
    </ToggleContext.Provider>
  );
}

export default App;
