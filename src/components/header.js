import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="static" color="primary" sx={{width:"100%",marginTop:"-10px",boxShadow:"none"}}>
      <Toolbar sx={{backgroundColor:"#313131",borderBottom:"1px solid white",}}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:"Poppins" }}>
          Comic Verse
        </Typography>
        <Button sx={{fontFamily:"Poppins" }} color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
