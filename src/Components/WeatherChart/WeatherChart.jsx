import React, { useState } from 'react'
import Chart from 'react-apexcharts';

import './weatherChart.css';

const WeatherChart = ({series}) => {

  const [options] = useState({
    chart: {
      type: 'area',
      // height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    // labels: [1,2,3,4,5],
    
    legend: {
      horizontalAlign: 'left'
    }
  })

  return (
    <div><Chart options={options} type="area" series={[{name: "any", data: series}]}/></div>
  )
}

export default WeatherChart