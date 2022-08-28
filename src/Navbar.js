import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from './App';
import { removeUser } from './data/database';

// Shows the Navbar on the page that change depending on if the user is logged in or not

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