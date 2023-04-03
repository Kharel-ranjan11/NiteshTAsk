import { TextField } from '@mui/material'
import React from 'react'

export const FormFirstStep = ({ handleChange }) => {
  return (
    <div style={{ padding: '5px' }}>
      <h2>First Form</h2>
      <br />
      <TextField
        id='outlined-basic'
        label='FirsName'
        variant='outlined'
        placeholder='Enter Name....'
        onChange={handleChange}
        name='FirsName'
      />
      <br />
      <TextField
        id='filled-basic'
        label='Password'
        type='password'
        variant='filled'
        placeholder='Enter PAssword....'
        onChange={handleChange}
        name='password'
      />
      <br />
      <TextField
        id='standard-basic'
        label='Number'
        type='number'
        variant='standard'
        placeholder='Enter Number....'
        name='Number'
        onChange={handleChange}
      />
    </div>
  )
}
