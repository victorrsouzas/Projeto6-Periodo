import React from 'react'
import { Snackbar, Alert } from '@mui/material'
function Error({openError, message, handleClose}) {
  return (
    <Snackbar open={openError} autoHideDuration={4000} onClose={handleClose}  anchorOrigin={{vertical:"top", horizontal:"center"}}>
      <Alert  severity="error" >{message}</Alert>
    </Snackbar>
  )
}

export default Error