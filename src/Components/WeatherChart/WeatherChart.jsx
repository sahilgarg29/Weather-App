import React, { useState } from 'react'
import Chart from 'react-apexcharts';

import './weatherChart.css';

const WeatherChart = ({series, labels}) => {

  const [options] = useState({
    chart: {
      type: 'area',
      zoom: {
        enabled: true
      },
      
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    
    legend: {
      horizontalAlign: 'left'
    }
  })

  return (
    <div><Chart options={options} type="area" series={[{name: "", data: series}]} height={350}/></div>
  )
}

export default WeatherChart