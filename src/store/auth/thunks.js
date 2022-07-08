import { singInWithGoogle, registerUserWithEmailAndPassword, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
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

export const startLogintWithEmailPassword = ({email, password}) => {
  return async ( dispatch) => {
    dispatch(checkingCredential());

    const { ok, uid, photoURL, errorMessage, displayName } = await loginWithEmailPassword({email, password});

    if (!ok) return dispatch(logout({errorMessage}));


    dispatch(login({displayName, uid, photoURL, email }))
  }
}

export const startRegisterWithEmailAndPassword = ({ email, password, displayName }) => {
  return async ( dispatch) => {

    dispatch(checkingCredential());

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword({ email, password, displayName })

    if (!ok) return dispatch(logout({errorMessage}));

    dispatch(login({uid, photoURL, displayName, email}))

  }
}

export const startLogout = () => {
  return async ( dispatch ) => {
    await logoutFirebase();

    dispatch(logout());
  }
}


