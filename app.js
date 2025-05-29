import { API_KEY } from './config.js';

const btn = document.getElementById('getWeatherBtn'); 
const weatherDiv = document.getElementById('weatherResult');

btn.addEventListener('click', getWeather);

async function getWeather() {
  try {
    const city = document.getElementById('cityInput').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log(data);

    weatherDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temp:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].main}, ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherDiv.innerHTML = `<p style="color:red;">No se pudo obtener el clima. Intenta de nuevo.</p>`;
  }
}