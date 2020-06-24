import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { CardDisplay } from "./components/CardDisplay"; 
import { messages } from "./components/Messages"

function App() {
  return (
    <div className="App">
      <Header />
      <CardDisplay messages={messages}/>
    </div>
  );
}

export default App;
