import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './sideDrawer';
const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <AppBar position="static" color="primary" sx={{ width: "100%", marginTop: "-10px", boxShadow: "none" }}>
        <Toolbar sx={{ backgroundColor: "#313131", borderBottom: "1px solid white", }}>
          <IconButton onClick={toggleDrawer("left", true)}  
          size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Poppins" }}>
            Comic Verse
          </Typography>
          <Button sx={{ fontFamily: "Poppins" }} color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer setState={setState} state={state} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
