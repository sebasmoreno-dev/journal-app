import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
  return (
    <>
      <Grid
      container
      direction="column"
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      >
        <Grid
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color='warning'/>
        </Grid>

      </Grid>
    </>
  )
}
