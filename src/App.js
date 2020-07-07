import React, { Component } from "react";
import CitiesOutput from "./Components/CitiesOutput";
import Form from "./Components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <CitiesOutput />
      </div>
    );
  }
}

export default App;
