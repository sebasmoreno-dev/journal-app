import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { useForm } from "../../hooks";
import { startGoogleSignIn, startLogintWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "./../layout/AuthLayout.jsx";
import { useMemo } from "react";

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "sebas123@gmail.com",
    password: "123456",
  });

  /* A hook that is used to memoize a value. It is used to avoid re-rendering the component when the
  value is not changed. */
  const isAuthenticated = useMemo(() => status === "checking", [status]);


  //Async task to login
  const onSubmit = (e) => {
    e.preventDefault();
    //
    dispatch(startLogintWithEmailPassword({ email, password }));
  };

  const onGoogleLogin = () => {
    dispatch(startGoogleSignIn());
  };


  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container sx={{ mt: 2}}>
            <Grid
                item
                xs={12}
                display={ !!errorMessage ? '' : 'none'}
              >
                <Alert severity="error">
                  {errorMessage}
                </Alert>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 2, mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticated}
                >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleLogin}
                variant="contained"
                fullWidth
                disabled={isAuthenticated}
                >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="primary" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
