import React from "react";

import "./GenderSelector.css";

const GenderSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (gender) => {
    setState((state) => ({
      ...state,
      DriverGender: gender,
    }));

    actionProvider.handleResp(gender);
    actionProvider.sendResp(gender);
  };

  return (
    <div className="gender-selector-container">
      <h1 className="gender-selector-header">Choose a Gender:</h1>
      <div className="gender-selector-button-container">
        <button
          className="genders-selector-button"
          onClick={() => setType("Male")}
        >
          male
        </button>
        <button
          className="genders-selector-button"
          onClick={() => setType("Female")}
        >
          female
        </button>
       
      </div>
    </div>
  );
};

export default GenderSelector;
