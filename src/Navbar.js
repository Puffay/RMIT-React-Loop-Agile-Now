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

function Navbar(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" >
                        <Link to='/' style={{ textDecoration: 'none', color: 'White', fontWeight: 'Bold' }}>
                            Loop Agile Now
                        </Link>
                    </Typography>
                    {props.username == null ?
                        (<Button color="inherit" sx={{ ml: 'auto' }} >
                            <Link to="/login" style={{ textDecoration: 'none', color: 'White' }} >
                                Login
                            </Link>
                        </Button>)
                        :
                        (<Button color="inherit" sx={{ ml: '30px' }} >
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'White' }}>
                                Profile
                            </Link>
                        </Button>)
                    }
                    {props.username != null &&
                        (<Button color="inherit" >
                            <Link to="/forum" style={{ textDecoration: 'none', color: 'White' }} >
                                Forum
                            </Link>
                        </Button>)
                    }
                    {props.username == null ?
                        (<Button color="inherit" >
                            <Link to="/signup" style={{ textDecoration: 'none', color: 'White' }}>
                                Sign Up
                            </Link>
                        </Button>)
                        :
                        (<Button color="inherit" sx={{ ml: 'auto' }}>
                            <Link to="/logout" style={{ textDecoration: 'none', color: 'White' }}>
                                Logout
                            </Link>
                        </Button>)
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;