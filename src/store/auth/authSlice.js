import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {},

        logout: (state, payload) => {},

        checkingCredential: (state) => {},
    }
});


// Action creators are generated for each case reducer function (action creators functions)
export const { login, logout, checkingCredential } = authSlice.actions;