import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { Button, Paper } from '@mui/material'
import { FormFirstStep } from './FormFirstStep'
import { FormSecondStep } from './FormSecondStep'
import { FormThirdStep } from './FormThirdStep'

const steps = ['Form One', 'Form Two', 'Form Three']

export const FormStep = () => {
  const [number, setNumber] = useState(0)
  const [input, setInput] = useState({})
  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log('Target Element......', e.target.value)
  }
  function getForm () {
    switch (number) {
      case 0:
        return <FormFirstStep handleChange={handleChange} />
      case 1:
        return <FormSecondStep handleChange={handleChange} />
      case 2:
        return <FormThirdStep handleChange={handleChange} />

      default:
    }
  }
  // steps.length <= number ? setInput('') : setInput({})
  return (
    <>
      <Paper
        sx={{
          width: '400px',
          margin: '4rem',
          padding: '10px',
          overflow: 'scroll'
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={number} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <div
          style={{
            background: '#e1bee7',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {getForm()}
        </div>
        <Button
          onClick={() => setNumber(prev => prev + 1)}
          disabled={steps.length <= number}
        >
          Next
        </Button>
        {steps.length <= number && (
          <Button onClick={() => setNumber(0)}>Reset</Button>
        )}
        <div className='inputData'>{JSON.stringify(input)}</div>
      </Paper>
    </>
  )
}
