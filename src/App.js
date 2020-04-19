import React, { useEffect, useState } from "react";
import ForecastToday from "./ForecastToday";
import { getWeatherForecast } from "./weatherService";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  const [forecast, setForecast] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await getWeatherForecast();
      setForecast(res);
      console.log(forecast);
    }

    fetchData();
  }, []);

  return <div>{forecast ? <ForecastToday {...forecast[0]} /> : null}</div>;
}

export default App;
