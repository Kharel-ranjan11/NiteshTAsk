import { TextField } from '@mui/material'
import React from 'react'

export const FormFirstStep = () => {
  return (
    <div style={{padding:'5px'}}>
      <h2>First Form</h2> 
      <br />
      <TextField
        id='outlined-basic'
        label='Name'
        variant='outlined'
        placeholder='Enter Name....'
      />
      <br />
      <TextField
        id='filled-basic'
        label='Password'
        type='password'
        variant='filled'
        placeholder='Enter PAssword....'
      />
      <br />
      <TextField
        id='standard-basic'
        label='Number'
        type='number'
        variant='standard'
        placeholder='Enter Number....'
      />
    </div>
  )
}
