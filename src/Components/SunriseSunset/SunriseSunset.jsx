import React from 'react'
import './sunriseSunset.css'

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
    </div>
  )
}

export default SunriseSunset