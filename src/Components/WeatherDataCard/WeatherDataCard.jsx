import React from 'react';
import './weatherDataCard.css';

const WeatherDataCard = ({title, value, symbol}) => {
  return (
    <div className='weatherDataContainer'>
      <p className='dataTitle'>{title}</p>
      <p><span>{value}</span> <span>{symbol}</span></p>
    </div>
  )
}

export default WeatherDataCard