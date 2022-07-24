import React from 'react'

import './temperatureCard.css'

const TemperatureCard = ({temp, icon}) => {
  return (
    <div className='tempCardContainer'><h1>{temp}<span>&#176;</span>C </h1><img src={icon} /></div>
  )
}

export default TemperatureCard;