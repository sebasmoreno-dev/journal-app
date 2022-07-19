import { useDispatch } from 'react-redux';
import { NothingSelectedView } from '../views/NothingSelectedView.jsx'
import { JournalLayout } from '../layout/JournalLayout.jsx'
import { NoteView } from '../views/NoteView.jsx'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { startNewNote } from '../../store/journal/thunks.js';
import { useSelector } from 'react-redux';

export const JournalPage = () => {

  const { isSaving, active } = useSelector(state => state.journal);

  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>

      {
        (!!active)
        ? <NoteView />
        : <NothingSelectedView />
      }

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 35}}/>
      </IconButton>

    </JournalLayout>


  )
}
