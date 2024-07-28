import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
import { Link, useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <Box className="flex-grow">
      <AppBar 
        position="static" 
        className="bg-gradient-to-r from-black to-green-900"
        sx={{ boxShadow: 'none' }} 
      >
        <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

                .courier-prime-regular {
                    font-family: 'Courier Prime', monospace;
                    font-weight: 400;
                    font-style: normal;
                }

                .courier-prime-bold {
                    font-family: 'Courier Prime', monospace;
                    font-weight: 700;
                    font-style: normal;
                }
                `}
            </style>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className="flex-grow text-white courier-prime-regular" align="center">
            RailTel Corporation of India Ltd.
          </Typography>
          <Link to="/page3" className="text-white text-opacity-80 hover:text-opacity-100" style={{ textDecoration: 'none' }}>
            <Button color="inherit" className='courier-prime-regular'>Home</Button>
          </Link>
          <Button color="inherit" onClick={handleLogout} className="text-white text-opacity-80 hover:text-opacity-100 courier-prime-regular">Logout</Button>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
