import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const nav = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'Red' }}>
                            Loop Agile Now
                        </Link>
                    </Typography>
                    <Button color="inherit" onClick={(e) => nav('/login')}>Login</Button>
                    <Button color="inherit" onClick={(e) => nav('/signup')}>Sign Up</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;