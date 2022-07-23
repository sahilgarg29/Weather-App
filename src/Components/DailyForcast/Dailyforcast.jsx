import React from 'react'
import ForcastCard from '../ForcastCard';

import './dailyForcast.css';

const Dailyforcast = ({dailyData}) => {
  return (
    <div>{dailyData.map((e) => <ForcastCard dayData={e} key={e.dt}/>)}</div>
  )
}

export default Dailyforcast