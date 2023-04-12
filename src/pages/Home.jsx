import { useState } from "react"
import { Alert, Stack, Box, AlertTitle, Button, Collapse, Snackbar } from "@mui/material"
import { enqueueSnackbar } from 'notistack';

function Home() {

  const [ open, setOpen ] = useState(true);
  const [ snackBarOpen, setSnackBarOpen ] = useState(false);

  return (
    <>
      <Box sx={{ display: 'grid', gap: 2 }}>
          <Alert 
            severity="error"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
            
          >
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
          </Alert>
            <Alert onClose={ () => setOpen(false)} severity="warning">This is a warning alert — check it out!</Alert>
          <Collapse in={open}>
            Hola
          </Collapse>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert>
          <Button variant="contained" onClick={() => setSnackBarOpen(true)} size="small">Hola</Button>
          <Snackbar 
            open={snackBarOpen}
            message={'Hola'}
            autoHideDuration={1000}
            onClose={() => setSnackBarOpen(false)}
          >
            <Alert onClose={ () => setSnackBarOpen(false)} severity="warning">This is a warning alert — check it out!</Alert>
          </Snackbar>
          <button onClick={() => enqueueSnackbar('That was easy!', {variant:'success'})}>Show snackbar</button>
      </Box>
    </>
  )
}

export default Home