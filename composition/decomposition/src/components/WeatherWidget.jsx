import React from 'react';
import PropTypes from 'prop-types';

//Виджет погоды
const WeatherWidget = ({weather}) => {
  return (
    <div>
      <h4><a href={weather.link}>Погода</a></h4>
      <img src={weather.img}/><h4>{weather.now}</h4>
      <p>Утром {weather.morning}</p>
      <p>Днем {weather.day}</p>
    </div>
  );
};

WeatherWidget.propTypes = {
  weather: PropTypes.object
};

export default WeatherWidget