import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { startRegisterWithEmailAndPassword } from '../../store/auth/thunks'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
  email: "",
  password: "",
  displayName: "",
}

//objeto que contiene las validaciones
const formValidations = {
  //arreglo de de dos valores
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage} = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm(formData, formValidations);


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startRegisterWithEmailAndPassword(formState));
  }


  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid: { isFormValid ? 'Valido' : 'Incorrecto'}</h1>
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 1}}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Tu nombre"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid }
                />
            </Grid>

            <Grid item xs={12} sx={{ mt: 1}}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid }
                />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid }
                />
            </Grid>

            <Grid container spacing={2}  sx={{ mt: 2, mb: 2}}>
              <Grid
                item
                xs={12}
                /*If it is falsy, then it will not display the element. */
                display={ !!errorMessage ? '' : 'none'}
              >
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid>

              <Grid item xs={12}>
                <Button
                  disabled={isCheckingAuthentication}
                  type="submit"
                  variant="contained"
                  fullWidth>
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

