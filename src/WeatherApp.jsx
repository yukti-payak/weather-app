import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import React, { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateWeather = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Weather App</h3>
      <SearchBox updateWeather={updateWeather} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
