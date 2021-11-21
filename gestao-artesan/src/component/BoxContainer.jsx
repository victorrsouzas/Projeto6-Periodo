import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import React from 'react'

function BoxContainer({title, align, children}) {
  return (
    <Card sx={{mb: "44px"}}>
      <CardHeader 
      sx={{textAlign:`${align}`}}
      title={
        <Typography  variant="h7" color="secondary" fontWeight="500" textAlign={align}>{title}</Typography>
        } />
      
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default BoxContainer
