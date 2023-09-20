import React from "react";
import "./CitySelector.css";


async function fetchCities(values) {
    
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
let cities = await fetchCities('fetch cities');



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

  let cityList = cities.map((city,index)=>{
    return(<button
        className="citys-selector-button"
        onClick={() => setType(city.name)}>
          {city.name}
    </button>)});

  return (
    
    <div className="city-selector-container">
      <h1 className="city-selector-header">Choose a City:</h1>
      <div className="city-selector-button-container">
        {cityList}
      </div>
    </div>
  );
};

export default CitySelector;