import './Weather.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { WiDaySunny, WiCloud, WiRain, WiSnow } from 'react-icons/wi';

const CurrentWeather = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.weatherData || !state.cityName) {
    return <div>Error: Weather data not available.</div>;
  }

  const { weatherData, cityName } = state;

  const getWeatherIcon = (iconCode) => {
    const iconMappings = {
      '01d': <WiDaySunny size={96} />,
      '01n': <WiDaySunny size={96} />,
      '02d': <WiCloud size={96} />,
      '02n': <WiCloud size={96} />,
      '03d': <WiCloud size={96} />,
      '03n': <WiCloud size={96} />,
      '04d': <WiCloud size={96} />,
      '04n': <WiCloud size={96} />,
      '09d': <WiRain size={96} />,
      '09n': <WiRain size={96} />,
      '10d': <WiRain size={96} />,
      '10n': <WiRain size={96} />,
      '11d': <WiRain size={96} />,
      '11n': <WiRain size={96} />,
      '13d': <WiSnow size={96} />,
      '13n': <WiSnow size={96} />,
      '50d': <WiCloud size={96} />,
      '50n': <WiCloud size={96} />,
    };

    return iconMappings[iconCode] || null;
  };

  const TemperatureDisplay = () => {
    const [isCelsius, setIsCelsius] = React.useState(true);

    const toggleTemperatureUnit = () => {
      setIsCelsius((prevValue) => !prevValue);
    };

    const convertToFahrenheit = (celsius) => {
      return (celsius * 9) / 5 + 32;
    };

    const getTemperature = () => {
      if (isCelsius) {
        return `${weatherData.main.temp.toFixed(0)}°C`;
      } else {
        const fahrenheit = convertToFahrenheit(weatherData.main.temp).toFixed(0);
        return `${fahrenheit}°F`;
      }
    };

    return (
      <div>
        <div className="output-container" id="box">
          Temperature: {getTemperature()}
        </div>
        <button onClick={toggleTemperatureUnit} id="switch">
          {isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </button>
      </div>
    );
  };

  return (
    <div className="body">
      <div id="cityHeading">{cityName}</div>
      <div className="outputFloat">
        <div>
          <TemperatureDisplay />
        </div>
        <br />
        <div>
          <div className="output-container">Wind: {weatherData.wind.speed} m/s</div>
        </div>
        <br />
        <div className="output-container">
          <div>Precipitation: {weatherData.weather[0].description}</div>
          <div className="icon-container">{getWeatherIcon(weatherData.weather[0].icon)}</div>
        </div>
        <br />
        <div className="output-container">Humidity: {weatherData.main.humidity}%</div>
        <div className="back-container"><br/>
          <Link to="/" className="back-link" id='BackToHome'>Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
