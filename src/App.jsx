import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { CardDisplay } from "./components/CardDisplay";
import { messages } from "./messages/messages";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <CardDisplay messages={messages} />
      </main>
    </div>
  );
}

export default App;
