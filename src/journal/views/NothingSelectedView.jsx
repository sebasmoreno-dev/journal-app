import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12} color="white">
        <StarOutline />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
