//Tareas asincronas
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const startNewNote = () => {
  return  async (dispatch, getState) => {

    const { uid } = getState().auth;

    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
      }

    /* Creating a new document in the collection `notes` in the database. */
    const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`));
    const setDocResp = await setDoc( newDoc, newNote);
    console.log({newDoc, setDocResp});

      //! dispatch
      //! 1. dispatch( newnNote)
      //! 2. dispatch( activarNote)
    }
}
