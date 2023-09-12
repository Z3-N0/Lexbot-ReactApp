import React from "react";
import "./CarTypeSelector.css";

const CitySelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      carType: Type,
    }));

    actionProvider.handleResp(Type);
    actionProvider.sendResp(Type);
  };

  return (
    <div className="car-selector-container">
      <h1 className="car-selector-header">Choose a Type:</h1>
      <div className="car-selector-button-container">
        <button
          className="cars-selector-button"
          onClick={() => setType("Luxury")}
        >
          Luxury
        </button>
        <button
          className="cars-selector-button"
          onClick={() => setType("Midsize")}
        >
          Midsize
        </button>
        <button
          className="cars-selector-button"
          onClick={() => setType("Compact")}
        >
          Compact
        </button>
      </div>
    </div>
  );
};

export default CitySelector;
