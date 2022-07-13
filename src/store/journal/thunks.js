//Tareas asincronas
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewNote, setActiveNote, savingNewNote, setNotes } from './journalSlice';

export const startNewNote = () => {
  return  async (dispatch, getState) => {

    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
      }

    /* Creating a new document in the collection `notes` in the database. */
    const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`));
    await setDoc( newDoc, newNote);

    newNote.id = newDoc.id;

    // Dispatching the action to update the state with the new note data.

    dispatch( addNewNote( newNote ));
    dispatch( setActiveNote( newNote ));

    }
}


export const starLoadgingNotes = () => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth;
    if (!uid) throw new Error('El uid del usuario no existe');

    const notes = await loadNotes(uid);

    dispatch( setNotes( notes ));
  }
}