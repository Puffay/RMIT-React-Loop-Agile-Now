import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const Login = () => {
    const loginfunc = (e) => {
        e.preventDefault();
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
                    <TextField name='email' type='text' label='Email' fullWidth margin='normal'/>
                    <TextField name='password' type='password' label='Password' fullWidth margin='normal'/>
                    <Button type='submit' fullWidth variant='contained' color='primary' sx={{my: 2}}>
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>

    );
}



export default Login;