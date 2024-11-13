import './App.css';
import React from "react";
import Introduction from "./components/Intro";
import Rules from "./components/rules";
import Techniques from "./components/Techniques";
import Tips from "./components/Tips";
import Strategy from "./components/Strategy";
import './style.css';
import BlackjackGame from './BlackjackGame';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Rules />
      <Techniques />
      <Tips />
    
      <Strategy />
      <BlackjackGame />
    </div>
  );
}

export default App;

