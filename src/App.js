import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const GEO_URL = 'https://api.openweathermap.org/geo/1.0/zip?zip=31000,HR&appid=c77cdcea84c788c94cee82c4437464ee'

  return (
    <div className="weather-app">
      <div className="container">
        <div className="upper-element">
          <div className="location">
            <p>Osijek</p>
          </div>
          <div className="temperature">
            <h1>23°C</h1>
          </div>
          <div className="description">
            <p>Clear</p>
          </div>
        </div>
        <div className="bottom-element">
          <div className="feel">
            <p className="bold">20°C</p>
            <p id="p-description">Real feel</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p id="p-description">Humidity</p>
          </div>
          <div className="wind-speed">
            <p className="bold">2m/s</p>
            <p id="p-description">Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;