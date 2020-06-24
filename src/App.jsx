import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { CardDisplay } from "./components/CardDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <CardDisplay />
    </div>
  );
}

export default App;
