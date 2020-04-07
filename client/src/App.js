import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  async function fetchCurrentUser() {
    const currentUser = await axios.get("/backend/currentUser");
    const isItWorking = await axios.get("/backend/");
    console.log("currentUser", currentUser);
    console.log("isItWorking", isItWorking);
  }

  useEffect(() => {
    fetchCurrentUser();
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SAP ReactRouter</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please check the{" "}
          <code>
            <a className="App-link" target="_blank" href="#">
              documentation
            </a>
          </code>{" "}
          and ask any questions in the{" "}
          <code>
            <a className="App-link" target="_blank" href="#">
              issues
            </a>
          </code>{" "}
          section if you need help.
        </p>
      </header>
    </div>
  );
}

export default App;
