import React from 'react'
import { TextField } from '@mui/material'

export const FormThirdStep = ({ handleChange }) => {
  return (
    <>
      <div style={{ padding: '5px' }}>
        <h2>Third Form</h2>
        <TextField
          id='outlined-basic'
          label='Cast'
          variant='outlined'
          placeholder='Enter Cast....'
          onChange={handleChange}
          name='Cast'
        />
        <br />
        <TextField
          id='filled-basic'
          label='Re-typePassword'
          type='password'
          variant='filled'
          placeholder='Enter Re-typePassword....'
          onChange={handleChange}
          name='Re-typePassword'
        />{' '}
        <br />
        <TextField
          id='standard-basic'
          label='Telephone'
          type='number'
          variant='standard'
          placeholder='Enter Telephone....'
          onChange={handleChange}
          name='Telephone'
        />
      </div>
    </>
  )
}
