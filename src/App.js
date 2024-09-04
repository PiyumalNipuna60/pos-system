import "./App.css";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incriment=()=> {
    setCount(count + 1);
  }

  const decriment=()=> {
    setCount(count - 1);
  }
  return (
    <>
      <h1 className="header">My Count</h1>
      <h2 className="count">count is {count}</h2>
      <button onClick={decriment} className="button">
        -
      </button>
      <button onClick={incriment} className="button">
        +
      </button>
    </>
  );
}

export default App;
