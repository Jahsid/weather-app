import React from "react";

const MainWeather = ({ temperature, weatherType, windSpeed, humidity }) => (
  <div className="main-weather">
    <div className="weather-container">
    <h1 className="temperature">{temperature}°</h1>
    <div className="weather-details">
      <p>
        <span className="icon">💨</span> {windSpeed}
      </p>
      <p>
        <span className="icon">💧</span> {humidity}
      </p>
    </div>
    </div>
    <p className="weather-type">{weatherType}</p>
    
  </div>
);

export default MainWeather;
