import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h3>Elnara</h3>
        <p>Now I can create component!</p>
      </div>
    );
  }
}
const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
