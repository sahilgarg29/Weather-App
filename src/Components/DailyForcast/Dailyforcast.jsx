import React from 'react'
import ForcastCard from '../ForcastCard';

import './dailyForcast.css';

const Dailyforcast = ({dailyData, onDayChange, selectedDay}) => {
  return (
    <div className='dailyForcastContainer'>{dailyData.map((e) => <ForcastCard dayData={e} key={e.dt} onDayChange={onDayChange} isSelected={selectedDay == new Date(e.dt*1000).getDay()}/>)}</div>
  )
}

export default Dailyforcast