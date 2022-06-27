import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredential } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {
  return async ( dispatch) => {
    dispatch(checkingCredential());
  }
}

export const startGoogleSignIn = () => {
  return async ( dispatch) => {
    dispatch(checkingCredential());

    const result = await singInWithGoogle()

    console.log({result});
  }
}