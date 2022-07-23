import React from 'react'

import './forcastCard.css';

const ForcastCard = ({dayData}) => {
  return (
    <div>{new Date(dayData.dt * 1000).toLocaleDateString()}</div>
  )
}

export default ForcastCard