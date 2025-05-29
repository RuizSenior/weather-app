import { API_KEY } from './config.js';

const btn = document.getElementById('getWeatherBtn'); 
const weatherDiv = document.getElementById('weatherResult');

btn.addEventListener('click', getWeather);

async function getWeather() {
  try {
    const city = document.getElementById('cityInput').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    const iconCode = data.weather[0].icon;

    const iconEmojiMap = {
      "01d": "☀️",    
      "01n": "🌙",    
      "02d": "🌤️",   
      "02n": "🌤️",  
      "03d": "☁️",    
      "03n": "☁️",
      "04d": "☁️",   
      "04n": "☁️",
      "09d": "🌧️",  
      "09n": "🌧️",
      "10d": "🌦️",   
      "10n": "🌧️",   
      "11d": "⛈️",   
      "11n": "⛈️",
      "13d": "❄️",   
      "13n": "❄️",
      "50d": "🌫️",   
      "50n": "🌫️"
    };

    const emoji = iconEmojiMap[iconCode] || "🌈";

    weatherDiv.innerHTML = `
      <div id='weatherContent' style="display:flex;align-items:center;">
        <div style="font-size:10rem;">${emoji}</div>
        <div style="text-align:left; margin-left:20px;">
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temp:</strong> ${data.main.temp} °C</p>
          <p><strong>Feels like:</strong> ${data.main.feels_like} °C</p>
          <p><strong>Weather:</strong> ${data.weather[0].main}, ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>

        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherDiv.innerHTML = `<p style="color:red;">Could not get weather. Please try again.</p>`;
  }
}