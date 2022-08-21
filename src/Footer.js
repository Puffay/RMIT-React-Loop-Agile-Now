import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Navigate, Router, useNavigate } from 'react-router-dom';
import { userContext } from './App';

// TODO instead of contact us just create an about us, no page and include detail at the bottom of the page

function Footer() {
    const [user, setUser] = React.useContext(userContext);
    const navigate = useNavigate();
    return (
        <Box sx={{
            flexGrow: 1,
            position: "fixed",
            left: 0,
            bottom: 0,
            right: 0
        }} >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="caption" component="div" >
                        <Link to='/contact' style={{ textDecoration: 'none', color: 'White', fontWeight: 'Bold' }}>
                            About Us
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Footer;