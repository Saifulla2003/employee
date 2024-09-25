import { Button,TextField } from '@mui/material'
import React from 'react'

const Addemployee = () => {
  return (
    <div align="center">
       <table id='table1' border="1">
      <TextField id="standard-basic" label="Employee name" variant="outlined" />
      <br /> <br />
      <TextField id="standard-basic" label="Age" variant="outlined" />
      <br /> <br />
      <TextField id="standard-basic" label="E-id" variant="outlined" />
      <br /> <br />
      <Button variant="contained">submit</Button>
      <br /> <br />
      </table> 
      <br /><br />
    </div>
  )
}

export default Addemployee
