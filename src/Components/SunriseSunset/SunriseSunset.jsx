import React from 'react'
import './sunriseSunset.css'
import Chart from './../../images/chart.png'
const SunriseSunset = ({sunriseTime, sunsetTime}) => {
  return (
    <div className='sunriseSunsetContainer'>
      <div className='timmingContainer'>
        <div>
          <p>Sunrise</p>
          <p>{sunriseTime}</p>
        </div>

        <div>
          <p>Sunset</p>
          <p>{sunsetTime}</p>
        </div>
      </div>
      <div>
        <img src={Chart} alt="" srcset="" className='chartImage'/>
      </div>
    </div>
  )
}

export default SunriseSunset