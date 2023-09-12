import React from "react";
import "./CitySelector.css";

const CitySelector = (props) => {
  const { setState, actionProvider } = props; 

  const setType = async (city) => {
    setState((state) => ({
      ...state,
      cityName: city,
    }));

    actionProvider.handleResp(city);
    actionProvider.sendResp(city);
  };

  return (
    
    <div className="city-selector-container">
      <h1 className="city-selector-header">Choose a City:</h1>
      <div className="city-selector-button-container">
        <button
          className="citys-selector-button"
          onClick={() => setType("Chennai")}
        >
          Chennai
        </button>
        <button
          className="citys-selector-button"
          onClick={() => setType("Banglore")}
        >
          Banglore
        </button>
        <button
          className="citys-selector-button"
          onClick={() => setType("Delhi")}
        >
          Delhi
        </button>
        <button
          className="citys-selector-button"
          onClick={() => setType("Mumbai")}
        >
          Mumbai
        </button>
        <button
          className="citys-selector-button"
          onClick={() => setType("Kolkata")}
        >
          Kolkata
        </button>
      </div>
    </div>
  );
};

export default CitySelector;
