import React, { useState } from 'react'
import Chart from 'react-apexcharts';

import './weatherChart.css';

const WeatherChart = ({series, labels}) => {

  const [options] = useState({
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      },
      
    },
    dataLabels: {
      enabled: true
    },
    labels: labels,
    stroke: {
      curve: 'straight'
    },
    labels: labels,
    
    legend: {
      horizontalAlign: 'left'
    }
  })

  return (
    <div><Chart options={options} type="area" series={[{name: "", data: series}]} height={350}/></div>
  )
}

export default WeatherChart