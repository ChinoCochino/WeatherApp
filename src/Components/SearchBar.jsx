import React from "react";

import "./SearchBar.css";

const Form = () => {
  return (
    <div className="container">
      <form>
        <div></div>
        <div className="box">
          <div className="">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
            />
          </div>
          <div className="">
            <button className="btn btn-info">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
