import { logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredential, login, logout } from "../../../src/store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn, startLogout } from "../../../src/store/auth/thunks"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock('./../../../src/firebase/providers')

describe('Pruebas eb AuthThunks', () => {

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

    const logoutData = { ok: true, errorMessage: "Un error en Google" };
    await logoutFirebase.mockResolvedValue( logoutData );

    //thunk
    await startLogout()( dispatch );

    expect( dispatch ).toHaveBeenCalledWith(logout());

  })
})