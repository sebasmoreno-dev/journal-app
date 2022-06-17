import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 1}}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Tu nombre"
                fullWidth
                />
            </Grid>

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

            <Grid container spacing={2}  sx={{ mt: 2, mb: 2}}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>



            </Grid>


            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1}} >¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink} color="primary" to="/auth/login">
                Ingresar
              </Link>

            </Grid>


          </Grid>
        </form>

    </AuthLayout>

  )
}

