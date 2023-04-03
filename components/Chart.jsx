import { ArcElement, Chart, Tooltip, Legend } from 'chart.js'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
Chart.register(ArcElement, Tooltip)

const config = {
  data: {
    // labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [100, 50, 100],
        backgroundColor: [
          'rgb(212, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 10,
        hoverBackgroundColor: 'black',
        hoverBorderJoinStyle: 'bevel'
      }
    ]
  },
  options: {
    cutout: 150,
    rotation: 360, //rotating chart at specific degree i.e. 50deg ,60 ......360deg
    circumference: 360, //Sweep to allow arcs to cove 0 .......360deg
    animateRotate: false
  }
}

export const ChartS = () => {
  return (
    <>
      <div className='chart' style={{ width: '400px' }}>
        <Doughnut {...config}></Doughnut>
      </div>
    </>
  )
}
