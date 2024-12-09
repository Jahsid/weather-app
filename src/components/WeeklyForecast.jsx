import React from "react";

const WeeklyForecast = ({ weeklyForecast }) => (
  <div className="weekly-forecast">
    {weeklyForecast.map((day, index) => (
      <div key={index} className="day">
        <p className="day-name">{day.day}</p>
        <p className="temp">{day.temp}°</p>
        <p className="weather">{day.weather}</p>
      </div>
    ))}
  </div>
);

export default WeeklyForecast;
