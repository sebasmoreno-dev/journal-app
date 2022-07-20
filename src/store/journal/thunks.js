//Tareas asincronas
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { fileUpload } from '../../helpers/fileUpload';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from './journalSlice';

export const startNewNote = () => {
  return  async (dispatch, getState) => {

    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
        imageUrls: [],
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

    /* Destructuring the uid from the auth object. */
    const { uid } = getState().auth;
    if (!uid) throw new Error('El uid del usuario no existe');

    const notes = await loadNotes(uid);

    dispatch( setNotes( notes ));
  }
}


export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const noteToFireStore = {...note};
    delete noteToFireStore.id;

    /* Creating a reference to the document in the collection `notes` in the database. */
    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
    await setDoc( docRef, noteToFireStore, { merge: true });

    dispatch( updateNote( note ));

  }
}

export const startUploadingFiles = (files = []) => {
  return async ( dispatch ) => {
    dispatch(setSaving());

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);
    
    dispatch(setPhotosToActiveNote(photosUrls));

  }

}


export const startDeletingNote = () => {
  return async ( dispatch, getState ) => {

    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    /* Creating a reference to the document in the collection `notes` in the database. */
    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
    await deleteDoc( docRef );

    dispatch( deleteNoteById( note.id ));

  }
}