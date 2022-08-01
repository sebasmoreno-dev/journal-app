import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredential, login, logout } from "../../../src/store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn, startLogintWithEmailPassword, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal/journalSlice"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock('./../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => {

  const dispatch = jest.fn()
  beforeEach( () => jest.clearAllMocks());

  test('debe de invocar el checkingCredential', async () => {

    await checkingAuthentication()( dispatch );
    expect( dispatch ).toHaveBeenCalledWith(checkingCredential())
  });

  test('startGoogleSignIn debe de llamar chekingCredentials y login - Exito', async () => {

    const loginData = { ok: true, ...demoUser };
    await singInWithGoogle.mockResolvedValue( loginData );

    //thunk
    await startGoogleSignIn()( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredential());
    expect( dispatch ).toHaveBeenCalledWith( login(loginData ));
  });

  test('startGoogleSignIn debe de llamar chekingCredentials y logout - Error', async () => {

    const loginData = { ok: false, errorMessage: 'Un error en Google' };
    await singInWithGoogle.mockResolvedValue( loginData );

    await startGoogleSignIn()( dispatch );

    expect( dispatch ).toHaveBeenCalledWith(checkingCredential());
    expect( dispatch ).toHaveBeenCalledWith(logout(loginData.errorMessage));

  });

  test('startLogout debe de llamar logout', async () => {
    //thunk
    await startLogout()( dispatch );

    expect( logoutFirebase ).toHaveBeenCalled();
    expect( dispatch ).toHaveBeenCalledWith(clearNotesLogout());
    expect( dispatch ).toHaveBeenCalledWith(logout());
  });


  test('startLogintWithEmailPassword debe llamar checkingCredential y login - exito', async () => {

    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: '123456'}

    await loginWithEmailPassword.mockResolvedValue( loginData );

    await startLogintWithEmailPassword(formData)(dispatch);

    expect( dispatch ).toHaveBeenCalledWith( checkingCredential());
    //expect( dispatch ).toHaveBeenCalledWith( login(loginData));
  });


})