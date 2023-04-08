import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [ data, setData ] = useState(null);
  const [ location, setLocation ] = useState("");

  const apiKey = 'c77cdcea84c788c94cee82c4437464ee';

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="weather-app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter your city"
        type="text" 
        />
      </div>
      {data &&
      <div className="container">
        <div className="upper-element">
          <div className="location">
            <p>{data.name}, {data.sys.country}</p>
          </div>
          <div className="temperature">
            <h1>{Math.round(data.main.temp)}°C</h1>
          </div>
          <div className="description">
            <p>{data.weather[0].description}</p>
          </div>
        </div>
        <div className="bottom-element">
          <div className="feel">
            <p className="bold">{Math.round(data.main.feels_like)}°C</p>
            <p id="p-description">Real feel</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.main.humidtiy}%</p>
            <p id="p-description">Humidity</p>
          </div>
          <div className="wind-speed">
            <p className="bold">{data.wind.speed}m/s</p>
            <p id="p-description">Wind speed</p>
          </div>
        </div>
      </div>
      };  
    </div>
  );
}

export default App;