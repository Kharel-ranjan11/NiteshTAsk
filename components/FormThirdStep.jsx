import React from 'react'
import { TextField } from '@mui/material'

export const FormThirdStep = () => {
  return (
    <>
      <div style={{ padding: '5px' }}>
        <h2>Third Form</h2>
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
        />{' '}
        <br />
        <TextField
          id='standard-basic'
          label='Number'
          type='number'
          variant='standard'
          placeholder='Enter Number....'
        />
      </div>
    </>
  )
}
