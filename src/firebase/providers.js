import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid,
    }


} catch (error) {

    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}


export const loginWithEmailPassword = async ({email, password}) => {
  try {
    
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { displayName, photoURL, uid } = result.user;

    return {
      ok: true,
      //user info
      displayName,
      photoURL,
      uid,
    }

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage: "Please check your email and password",
    }
  }
}


//provider email and password
export const registerUserWithEmailAndPassword = async ({email, password, displayName}) => {
  try {
    
    const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;
    console.log(resp);


    //TODO: add user info to firebase
    await updateProfile(FirebaseAuth.currentUser,{displayName})

    return {
      ok: true,
      uid,
      photoURL,
    }


  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage: "This email is already registered, try to another email",
    }
  }
}


