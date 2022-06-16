import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
        >
        <Typography variant="h5" sx={{ mb:1 }}>Login</Typography>

        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 1}}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Correo@google.com"
                fullWidth
                />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                />
            </Grid>
          </Grid>
        </form>
      </Grid>

    </Grid>
  )
}

