import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Left from "./components/left";
import Right from "./components/right";
import Navbar from "./components/Navbar";
import Mid from "./components/mid";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Left />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Navbar />
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <Mid />
            <Right />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
