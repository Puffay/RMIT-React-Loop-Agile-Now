import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navigate, Router, useNavigate } from 'react-router-dom';
import { fontWeight } from '@mui/system';
import { userContext } from './App';
import { removeUser } from './data/database';

function Navbar() {
    const [user, setUser] = React.useContext(userContext);
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" >
                        <Link to='/' style={{ textDecoration: 'none', color: 'White', fontWeight: 'Bold' }}>
                            Loop Agile Now
                        </Link>
                    </Typography>
                    {user === null ?
                        (<Button color="inherit" sx={{ ml: 'auto' }} onClick={(e) => navigate('/login')} >
                            Login
                        </Button>)
                        :
                        (<Button color="inherit" sx={{ ml: '30px' }} onClick={(e) => navigate('/profile')} >
                            Profile
                        </Button>)
                    }
                    {user !== null &&
                        (<Button color="inherit" onClick={(e) => navigate('/forum')}>
                            Forum
                        </Button>)
                    }
                    {user === null ?
                        (<Button color="inherit" onClick={(e) => navigate('/signup')} >
                            Signup
                        </Button>)
                        :
                        (<Button color="inherit" sx={{ ml: 'auto' }} onClick={(e) => {removeUser(); setUser(null); navigate('/');}}>
                            Logout
                        </Button>)
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;