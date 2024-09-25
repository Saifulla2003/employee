import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Viewemployee = () => {
  return (
    <div>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>E-id</TableCell>
            </TableRow>
            </TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
            </TableRow>
      </Table>
    </div>
  )
}

export default Viewemployee
