import React, { useRef } from 'react'

import './forcastCard.css';
import Sunny from './../../images/sun.png';
import Rainy from './../../images/rain.png';
import FewClouds from './../../images/clouds.png';
import Clouds from './../../images/scattered_clouds.png';
import ThunderStorm from './../../images/thunderstorm.png';
import Snow from './../../images/snow.png';
import Haze from './../../images/mist.png';





var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const ForcastCard = ({dayData}) => {
  const date =  useRef(new Date(dayData.dt * 1000));

  function correctImage(){
    let icon = dayData.weather[0].icon;

    switch(icon){
      case '01d':
      case '01n':
        return Sunny;
      case '02d':
        return FewClouds;
      case '03d':
      case '04d':
        return Clouds;
      case '09d':
      case '10d':
        return Rainy;
      case '011d':
        return ThunderStorm;
      case '13d':
        return Snow;
      case '50d':
        return Haze;
    }
  }

  return (
    <div className='forcastContainer'>
      <p className='forcastDay'>{days[date.current.getDay()]}</p>
      <p className='temp'><span>{Math.round(dayData.temp.max)}</span><span>&#176;</span> <span>{Math.round(dayData.temp.min)}</span><span>&#176;</span></p>
      <img src={correctImage()} className="forcastImage" />
      <p>{dayData.weather[0].description}</p>
    </div>
  )
}

export default ForcastCard