import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h3>Elnara</h3>
        <p>Now I can create component!</p>
      </div>
    );
  }
}
const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
