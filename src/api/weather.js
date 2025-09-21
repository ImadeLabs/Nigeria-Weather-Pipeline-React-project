// src/api/weather.js
import axios from 'axios';

const API_KEY = '8f5187fefe270546788c646a09dce57f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Dummy fallback data if API fails
const fallbackData = {
  Lagos: { city: 'Lagos', temperature: 30, humidity: 75 },
  Abuja: { city: 'Abuja', temperature: 28, humidity: 70 },
  'Port Harcourt': { city: 'Port Harcourt', temperature: 31, humidity: 80 },
};

export async function fetchWeather(city) {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
    };
  } catch (error) {
    console.warn(`API failed for ${city}, using fallback data.`, error);
    return fallbackData[city] || { city, temperature: 25, humidity: 70 };
  }
}
