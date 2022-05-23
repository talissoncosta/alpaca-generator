import React from "react";
import "./App.css";
import { Generator, Header, Controlls } from "./components";
import { OptionsProvider } from "./contexts/optionsContext";

function App() {
  return (
    <div className="wrapper">
      <OptionsProvider>
        <Header />
        <Generator />
        <Controlls />
      </OptionsProvider>
    </div>
  );
}

export default App;
