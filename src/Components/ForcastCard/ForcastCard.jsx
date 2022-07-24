import React, { useRef } from 'react'
import correctImage from './../../Utils/correctWeatherImage';
import './forcastCard.css';

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const ForcastCard = ({dayData, isSelected, onDayChange}) => {
  const date =  useRef(new Date(dayData.dt * 1000));



  return (
    <div onClick={() => onDayChange(date.current.getDay())} className={isSelected? "forcastContainer selected": "forcastContainer"}>
      <p className='forcastDay'>{days[date.current.getDay()]}</p>
      <p className='temp'><span>{Math.round(dayData.temp.max)}</span><span>&#176;</span> <span>{Math.round(dayData.temp.min)}</span><span>&#176;</span></p>
      <img src={correctImage(dayData.weather[0].icon)} className="forcastImage" />
      <p>{dayData.weather[0].description}</p>
    </div>
  )
}

export default ForcastCard