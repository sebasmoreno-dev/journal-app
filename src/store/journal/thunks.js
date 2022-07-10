//Tareas asincronas
import React from 'react'

export const startNewNote = () => {
  return  async (dispatch) => {

    //uid
    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
      }
      
      //! dispatch
      //! 1. dispatch( newnNote)
      //! 2. dispatch( activarNote)
    }
}
