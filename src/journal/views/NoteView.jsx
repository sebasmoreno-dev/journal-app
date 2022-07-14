import { SavedSearchOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMemo } from 'react';
import { useSelector } from 'react-redux'
import { ImageGallery } from '../components/ImageGallery';
import { useForm } from './../../hooks/useForm';


export const NoteView = () => {

  //initial state of the form
  const { active:note } = useSelector(state => state.journal);

  const { body, title, date, onInputChange, formState } = useForm( note )

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date])



  return (
    <>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid item>
        <Typography fontSize={ 39 } fontWeight="light" >{ dateString }</Typography>
      </Grid>

      <Grid item>
        <Button sx={{ padding: 2}} color="primary">
          <SavedSearchOutlined sx={{ fontSize: 30, mr: 1}}/>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          label="Titulo"
          variant="filled"
          fullWidth
          placeholder="Ingresa un titulo"
          sx={{ border: "none", mb: 1}}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedio hoy?"
          minRows={5}
          sx={{ border: "none", mb: 1}}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* Galeria de imagenes */}
      <ImageGallery />

    </Grid>
    </>
  )
}
