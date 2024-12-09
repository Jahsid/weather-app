import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import MainWeather from "./components/MainWeather";
import Sidebar from "./components/Sidebar";
import WeeklyForecast from "./components/WeeklyForecast";
import "./App.css";

const App = () => {
  const weatherData = {
    location: "Multan",
    date: "21.04.2021",
    temperature: 20,
    weatherType: "Cloudy",
    windSpeed: "6.1 mph",
    humidity: "90%",
    feelsLike: 19,
    hourlyForecast: [
      { time: "1 PM", temp: 20, weather: "Cloudy" },
      { time: "2 PM", temp: 21, weather: "Rainy" },
      { time: "3 PM", temp: 21, weather: "Rainy" },
      { time: "4 PM", temp: 20, weather: "Cloudy" },
      { time: "5 PM", temp: 21, weather: "Rainy" },
      { time: "6 PM", temp: 21, weather: "Rainy" },
    ],
    weeklyForecast: [
      { day: "Today", temp: 20, weather: "Mist" },
      { day: "Tue", temp: 32, weather: "Sunny" },
      { day: "Wed", temp: 12, weather: "Rainy" },
      { day: "Thu", temp: 13, weather: "Rainy" },
      { day: "Fri", temp: 22, weather: "Mist" },
      { day: "Sat", temp: 22, weather: "Mist" },
    ],
  };

  return (
    <div className="app">
      <div className="content">
        <div className="main-content">
        <HeaderComponent location={weatherData.location} date={weatherData.date} />
          <MainWeather
            temperature={weatherData.temperature}
            weatherType={weatherData.weatherType}
            windSpeed={weatherData.windSpeed}
            humidity={weatherData.humidity}
          />
          <WeeklyForecast weeklyForecast={weatherData.weeklyForecast} />
        </div>
        <Sidebar
          className="sidebar"
          windSpeed={weatherData.windSpeed}
          humidity={weatherData.humidity}
          temperature={weatherData.temperature}
          feelsLike={weatherData.feelsLike}
          hourlyForecast={weatherData.hourlyForecast}
        />
      </div>
    </div>
  );
};

export default App;
