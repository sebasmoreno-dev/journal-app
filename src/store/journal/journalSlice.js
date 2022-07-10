import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
    },
    //Aqui no se pueden introducir funciones asincronas solo acciones sincronas.
    reducers: {
        addNewNote: (state, action) => {

        },

        setActiveNote: (state, action) => {

        },

        setNotes: (state, action) => {

        },

        setSaving: (state) => {

        },

        updateNote: (state, action) => {

        },

        deleteNoteById: (state, action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;