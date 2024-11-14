import "./style.css";
import React from "react";
import BlackjackTutorial from "./components/Word";
import "./components/style.css";
import BlackjackGame from "./BlackjackGame";

function App() {
  return (
    <div className="App">
      <BlackjackTutorial />
      <BlackjackGame />
    </div>
  );
}

export default App;
