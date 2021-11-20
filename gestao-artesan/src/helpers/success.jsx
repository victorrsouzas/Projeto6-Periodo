import React from 'react'
import { Snackbar, Alert } from '@mui/material'
function Success({openSuccess, message, handleClose}) {
  return (
    <Snackbar open={openSuccess} autoHideDuration={4000} onClose={handleClose}  anchorOrigin={{vertical:"top", horizontal:"center"}}>
      <Alert  severity="success" >{message}</Alert>
    </Snackbar>
  )
}

export default Success