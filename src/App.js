// src/App.js
import React, { useEffect, useState } from 'react'; // ✅ important
import WeatherChart from './components/WeatherChart';
import { fetchWeather } from './api/weather';
import { db } from './db/indexedDB';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const cities = ['Lagos', 'Abuja', 'Port Harcourt'];

  useEffect(() => {
    const getWeather = async () => {
      const allData = [];
      for (const city of cities) {
        const data = await fetchWeather(city);
        console.log('Fetched data for', city, data);
        if (data) {
          allData.push({ time: city, temperature: data.temperature });
          await db.weather.add({ ...data, timestamp: Date.now() });
        }
      }
      setWeatherData(allData);
    };

    getWeather();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Nigeria Weather Chart</h1>
      {weatherData.length > 0 ? (
        <WeatherChart data={weatherData} />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;
