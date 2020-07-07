import React, { Component } from "react";
import CitiesOutput from "./Components/CitiesOutput";
import Form from "./Components/SearchBar";
import WeatherOutput from "./Components/WeatherOutput";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const api = {
  key: "e54eb2678cb480bad40257e796ec99b2",
  base: "api.openweathermap.org/data/2.5/",
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <CitiesOutput />
        <WeatherOutput />
      </div>
    );
  }
}

export default App;
