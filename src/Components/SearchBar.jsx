import React from "react";

import "./SearchBar.css";

const Form = () => {
  return (
    <div className="container h-100">
      <form>
        <div></div>
        <div className="row">
          <div className="boxes col-md-3 offset-md-2 rgba-blue-strong">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-info">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
