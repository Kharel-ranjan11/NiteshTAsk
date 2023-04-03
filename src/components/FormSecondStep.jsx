import React from 'react'
import { TextField } from '@mui/material'

export const FormSecondStep = ({ handleChange }) => {
  return (
    <div style={{ padding: '5px' }}>
      <h2>Second Form</h2>
      <TextField
        id='outlined-basic'
        label='LastName'
        variant='outlined'
        placeholder='Enter LastName....'
        onChange={handleChange}
        name='LastName'
      />{' '}
      <br />
      <TextField
        id='filled-basic'
        label='ConfirmPassword'
        type='password'
        variant='filled'
        placeholder='Enter ConfirmPassword....'
        onChange={handleChange}
        name='ConfirmPassword'
      />
      <br />
      <TextField
        id='standard-basic'
        label='Contact'
        type='number'
        variant='standard'
        placeholder='Enter Contact....'
        onChange={handleChange}
        name='Contact'
      />
    </div>
  )
}
