import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { getUser, verifyUser } from '../data/database';
import { useNavigate } from "react-router-dom";
import { userContext } from '../App';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = React.useState('none');
    const [user, setUser] = React.useContext(userContext);

    const loginfunc = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        if (verifyUser(email, password)) {
            setUser(getUser());
            navigate('/profile');
        } else {
            setError('Invalid email or password');
        }
        console.log('login');
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper sx={{
                m: 3,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component='h1' variant='h5'>
                    Login
                </Typography>
                <Box component='form' onSubmit={loginfunc}> 
                    <TextField name='email' type='text' label='Email' fullWidth margin='normal' error={error !== 'none'} />
                    <TextField name='password' type='password' label='Password' fullWidth margin='normal' error={error !== 'none'} />
                    <Typography color='error' sx={{visibility: error === 'none' ? 'hidden' : 'visible'}} >{error}</Typography>
                    <Button type='submit' fullWidth variant='contained' color='primary' sx={{my: 2}}>
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>

    );
}



export default Login;