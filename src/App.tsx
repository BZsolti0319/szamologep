import React from "react";
import { useState } from "react";
import logo from "./112.gif";
import "./App.css";
import { getValue } from "@testing-library/user-event/dist/utils";

function App() {
  const [elso, setElso] = useState(0);
  const [masodik, setMasodik] = useState(0);
  const [muvelet, setMuvelet] = useState("+");
  const [eredmeny, setEredmeny] = useState(0);

  const Szamol = () => {
    if (muvelet == "+") {
      setEredmeny(elso + masodik);
    } else if (muvelet == "-") {
      setEredmeny(elso - masodik);
    } else if (muvelet == "*") {
      setEredmeny(elso * masodik);
    } else if (muvelet == "/") {
      setEredmeny(elso / masodik);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count with Snoop</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a>{eredmeny}</a>
        <input
          type="number"
          placeholder="Add meg az 1. számot"
          onChange={(e) => setElso(Number(e.target.value))}
        />
        <p>
          Műveletek:
          <select
            name="muveletek"
            onChange={(e) => setMuvelet(String(e.target.value))}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </p>
        <input
          type="text"
          placeholder="Add meg a 2. számot"
          onChange={(e) => setMasodik(Number(e.target.value))}
        />
        <br />
        <button onClick={Szamol}>Számolás</button>
      </header>
    </div>
  );
}

export default App;
