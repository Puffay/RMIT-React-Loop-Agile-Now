import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Router } from 'react-router-dom';
import { fontWeight } from '@mui/system';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'White', fontWeight:'Bold'}}>
                            Loop Agile Now
                        </Link>
                    </Typography>
                    <Button color="inherit" >
                        <Link to="/login" style={{ textDecoration: 'none', color: 'White' }}>
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'White' }}>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;