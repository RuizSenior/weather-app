# Simple Weather Application

A simple weather web app built with JavaScript that shows the current weather for any city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search weather by city name
- Shows temperature, feels like, weather description, humidity, and more
- Weather icon as emoji
- Responsive design

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RuizSenior/weather-app.git
```

### 2. Get your OpenWeatherMap API Key

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api) and sign up for a free account.
2. After signing in, go to the "API keys" section in your account.
3. Copy your API key.

### 3. Add your API key

Create a file named `config.js` in the `weather` folder with the following content:

```javascript
export const API_KEY = "YOUR_API_KEY_HERE";
```

Replace `"YOUR_API_KEY_HERE"` with your actual API key.

### 4. Run the app

Just open `index.html` in your browser.

> **Note:** If you open the app with the `file://` protocol and have issues with modules, use a local server. For example, with Python:

```bash
# Python 3.x
python3 -m http.server
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

