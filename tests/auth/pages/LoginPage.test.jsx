import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from 'react-router-dom';

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
})


describe('Pruebas en LoginPage', () => {

  test('Debe de mostrar el componente correctamente', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect( screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);

  });

  test('Boton de google debe de llamar startGoogleSignIn' , () => {

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText('google-btn');
    fireEvent.click( googleBtn );

    screen.debug();
  })
})