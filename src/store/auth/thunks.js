import { checkingCredential } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {
  return async ( dispatch) => {
    dispatch(checkingCredential());
  }
}

export const startGoogleSignIn = () => {
  return async ( dispatch) => {
    dispatch(checkingCredential());
  }
}