import React from "react";

const Sidebar = ({ temperature, feelsLike, hourlyForecast, windSpeed, humidity }) => (
  <div className="sidebar">
    <h2 className="greeting">Good Morning</h2>
    <p className="time">12:27 PM</p>
    <div className="current-weather">
        <div className="temperature-container">
        <h1>{temperature}°</h1>
        <div className="sidebar-icon">
        <p>
        <span className="icon">💨</span> {windSpeed}
      </p>
      <p>
        <span className="icon">💧</span> {humidity}
      </p>
        </div>
        </div>
      <p>Feels like {feelsLike}°</p>
    </div>
    <h3>Cloudy</h3>
    <h3>Hourly Forecast</h3>
    <div className="hourly-forecast">
      {hourlyForecast.map((hour, index) => (
        <div key={index} className="hour">
          <p>{hour.time}</p>
          <p>{hour.temp}°</p>
          <p>{hour.weather}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
