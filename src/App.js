import React, { Component } from "react";
import CitiesOutput from "./Components/CitiesOutput";
import Form from "./Components/SearchBar";
import WeatherOutput from "./Components/WeatherOutput";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.min.css";

import "./App.css";

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
