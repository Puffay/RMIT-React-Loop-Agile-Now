import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Footer for the bottom of the page

function Footer() {
    return (
        <Box sx={{
            flexGrow: 1,
            position: "fixed",
            left: 0,
            bottom: 0,
            right: 0,
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