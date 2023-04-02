import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const ProgressBar = () => {
  const percentage = 11
  return (
    <>
      <div className='circularProgressBar' style={{ width: '400px',margin:'4rem' }}>
        <CircularProgressbar
          styles={buildStyles({ rotation: 40,pathTransitionDuration: 3 })}
          value={percentage}
          text={`${percentage}%`}
        />
        
      </div>
    </>
  )
}
