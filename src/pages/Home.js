import './Home.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const uppercaseCityName = cityName.toUpperCase(); 
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${uppercaseCityName}&appid=fbde9626b2d1d4c6fd52e822cfc5b2c5&units=metric`
      );
      const weatherData = response.data;
      navigate('/current-weather', { state: { weatherData, cityName: uppercaseCityName } });
    } catch (error) {
      console.log(error);
      alert('City not found. Please enter a valid city name.');
      setCityName('');
    }
  };

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div className="body">
      <div className="floating-box">
        <h1 id='heading-home'>Weather Forecast</h1>
        <div>
          <div className="input-container">
            <input
              type="text"
              className="textbox"
              placeholder="Enter A City Name"
              value={cityName}
              onChange={handleInputChange}
            />
            <button className="button" onClick={handleClick}>
              Show Weather
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;