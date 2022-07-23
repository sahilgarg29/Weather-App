import React, { useRef } from 'react'

import './forcastCard.css';
import Sunny from './../../images/sun.png';
import Rainy from './../../images/rain.png';


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
      case '03d':
      case '04d':
      case '09d':
      case '10d':
        return Rainy;
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