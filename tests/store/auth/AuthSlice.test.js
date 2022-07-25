import { authSlice, checkingCredential, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";

describe('Pruebas en el AuthSlice', () => {

  test('debe de regresar el estado inicial y llamarse "auth "', () => {
    const state = authSlice.reducer( initialState, {} );

    expect( state ).toEqual( initialState );
    expect( authSlice.name ) .toBe('auth');
  });

  test('debe de realizar la autenticación', () => {

    const state = authSlice.reducer( initialState, login( demoUser ) );
    console.log(state);
    expect( state ).toEqual({
      status: 'authenticated',
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    } );
  });


  test('Debe realizar el logout', () => {

    const state = authSlice.reducer( authenticatedState, logout())

    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    })
  });

  test('Debe de realiar el logout y mostrar un mensaje de error', () => {

    const { errorMessage } = 'Las credenciales no son correctas'
    const state = authSlice.reducer( authenticatedState, logout(errorMessage))

    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    })
  });

  test('Debe cambiar el estado a checking', () => {

    const state = authSlice.reducer( authenticatedState, checkingCredential())
    expect( state.status).toBe('checking');

  })

});