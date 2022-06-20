import { SavedSearchOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
  return (
    <>
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography fontSize={ 39 } fontWeight="light" >28 de agoto, 2023</Typography>
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
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedio hoy?"
          minRows={5}
          sx={{ border: "none", mb: 1}}
        />
      </Grid>

      {/* Galeria de imagenes */}
      <ImageGallery />

    </Grid>
    </>
  )
}
