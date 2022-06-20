import { NothingSelectedView } from '../views/NothingSelectedView.jsx'
import { JournalLayout } from '../layout/JournalLayout.jsx'
import { NoteView } from '../views/NoteView.jsx'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="body1">
        Ullamco nostrud reprehenderit nostrud non nostrud dolor elit aliqua exercitation velit labore elit.
      </Typography> */}
      {/* <NothingSelectedView /> */}

      <NoteView />



    </JournalLayout>


  )
}
