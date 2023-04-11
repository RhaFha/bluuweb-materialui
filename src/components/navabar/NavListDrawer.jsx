import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

function NavListDrawer({navLinks, setOpen}) {
  return (
    <Box sx={{  width: 250, maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav>
        <List>
            {
                navLinks.map( item => (
                    <ListItem disablePadding key={item.title}>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            onClick={() => setOpen(false)}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
      </nav>
    </Box>
  )
}

export default NavListDrawer
