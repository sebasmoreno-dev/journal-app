import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredential, login, logout } from "./authSlice";

/**
 * It's a function that returns a function that takes a dispatch function as an argument
 * @param email - the email address of the user
 * @param password - The password of the user.
 * @returns An object with a type of CHECKING_CREDENTIAL
 */
export const checkingAuthentication = ( email, password ) => {
  return async ( dispatch) => {
    dispatch(checkingCredential());
  }
}

/**
 * It dispatches an action to the reducer to set the loading state to true, then it calls the
 * singInWithGoogle function, which returns a promise. If the promise is rejected, it dispatches an
 * action to the reducer to set the loading state to false and to set the error message
 * @returns A function that takes dispatch as an argument.
 */
export const startGoogleSignIn = () => {
  return async ( dispatch) => {
    dispatch(checkingCredential());

    const result = await singInWithGoogle()

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result))
  }
}