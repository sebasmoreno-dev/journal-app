import { useDispatch } from 'react-redux';
import { NothingSelectedView } from '../views/NothingSelectedView.jsx'
import { JournalLayout } from '../layout/JournalLayout.jsx'
import { NoteView } from '../views/NoteView.jsx'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { startNewNote } from '../../store/journal/thunks.js';

export const JournalPage = () => {

  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {/* <Typography variant="body1">
        Ullamco nostrud reprehenderit nostrud non nostrud dolor elit aliqua exercitation velit labore elit.
      </Typography> */}
      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton
        onClick={onClickNewNote}
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
