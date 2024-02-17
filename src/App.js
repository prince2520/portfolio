import { useContext } from "react";
import Home from "./pages/Home/Home.js";

import DarkContext from "./context/DarkModeContext.jsx";

import "./style.css";
import "./App.css";

function App() {
  const darkCtx = useContext(DarkContext);

  return (
    <div className={`flex-center App ${darkCtx.dark ? "dark" : ""} `}>
      <Home />
    </div>
  );
}

export default App;
