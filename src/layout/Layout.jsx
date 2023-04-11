import { Container, Typography } from '@mui/material'
import Navbar from '../components/navabar/Navbar'
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
      <>
      <Navbar />
        <Container sx={{ mt: 5}} >
          <Outlet />
        </Container>
      </>
  )
}

export default Layout;
