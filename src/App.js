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
          setBackground(response.data.weather[0].description);
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function setBackground(weather) {
    const container = document.querySelector('.container');
    if (weather === "Rain") {
      container.style.backgroundImage = "weather-app\src\assets\rainy.jpg";
    } else if (weather === "Snow") {
      container.style.backgroundImage = "weather-app\src\assets\snowy.jpg";
    } else if (weather === "Clear") {
      container.style.backgroundImage = "weather-app\src\assets\sunset.jpg";
    } else if (weather === "Clouds") {
      container.style.backgroundImage = "weather-app\src\assets\cloudy.jpg";
    } else if (weather === "Storm") {
      container.style.backgroundImage = "weather-app\src\assets\stormy.jpg";
    } else if (weather === "Wind") {
      container.style.backgroundImage = "weather-app\src\assets\windy.jpg";
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
            <img src={setBackground(data.weather[0].main)} alt="" />
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