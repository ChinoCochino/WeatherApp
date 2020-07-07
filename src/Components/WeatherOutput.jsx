import React, { Component } from "react";

const WeatherOutput = () => {
    const  minmaxTemp = (min,max) => {
        return(
          <h3>
              <span className="px-4">{min}&deg;</span>
              <span className="px-4">{max}&deg;</span>
        </h3>
        )
        };
      
        return (
          <div className="container">
            <div className="d-flex flex-row justify-content-center">
              <h1 className="py-4"> Nairobi</h1>
            </div>
            <div className="row d-flex flex-row justify-content-center">
              <i className="wi wi-day-sunny display-1"></i>
            </div>
            <div className="row d-flex flex-row justify-content-center">
              <h3 className="mt-4">25&deg;</h3>
            </div>
            <div className="row d-flex flex-row justify-content-center">
                {minmaxTemp(24, 30)}
            </div>
          </div>
        );
}

  

  
    

   


export default WeatherOutput;
