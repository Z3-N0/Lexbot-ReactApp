import React from "react";
import "./GenderSelector.css";

async function fetchDriverOptions(values) {
    
  return new Promise(async(resolve, reject) =>{
    fetch('https://vezdu12671.execute-api.us-east-1.amazonaws.com/Stage_1/color-fetch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
   .then(response => response.json())
    .then(data => {
      resolve(data)
      console.log(data)
    })
    .catch(error => console.error(error));

  })
};
let DriverOptions = await fetchDriverOptions('fetch driver');


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
  let DriverOptionsList = DriverOptions.map((option,index)=>{
    return(<button
        className="citys-selector-button"
        onClick={() => setType(option.name)}>
          {option.name}
    </button>)});

  return (
    <div className="gender-selector-container">
      <h1 className="gender-selector-header">Choose a Gender:</h1>
      <div className="gender-selector-button-container">
        {DriverOptionsList}
      </div>
    </div>
  );
};

export default GenderSelector;
