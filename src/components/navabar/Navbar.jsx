import { useState } from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const [open, setOpen] = useState(false);

    const navLinks = [
        {
            title: 'Home', path: '/',
        },
        {
            title: 'Login', path: '/login',
        },
        {
            title: 'Register', path: '/register',
        },
    ]

  return (
    <>

        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    size="large"
                    onClick={() => setOpen(true)}
                    sx={{ display: { xs: 'flex', sm: "none" }}}
                    edge='start'
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1}}>News</Typography>
                <Box sx={{ display: {xs: "none", sm: "block"}}}>
                {
                    navLinks.map( item => (
                        <Button color="inherit" key={item.path} component={NavLink} to={item.path} >{item.title}</Button>
                    ))
                }
                </Box>
            </Toolbar>
        </AppBar>

        <Drawer
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            sx={{ display: { xs: 'flex', sm: "none" }}}
        >
            <NavListDrawer navLinks={navLinks} setOpen={setOpen}/>
        </Drawer>
    </>
  )
}

export default Navbar
