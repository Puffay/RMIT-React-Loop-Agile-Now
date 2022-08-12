import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const Signup = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signupfunc = (e) => {
        e.preventDefault();
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        console.log('Signup');
    }

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function getData() {
        console.log(localStorage.getItem('email'));
        console.log(localStorage.getItem('password'))
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
                    Sign Up
                </Typography>
                <Box component='form' onSubmit={signupfunc}>
                    <TextField name='email' type='text' label='Email' fullWidth margin='normal' onChange={onChangeEmail}/>
                    <TextField name='password' type='password' label='Password' fullWidth margin='normal' onChange={onChangePassword}/>
                    <Button type='submit' fullWidth variant='contained' color='primary' sx={{my: 2}}>
                        Register
                    </Button>
                </Box>
            </Paper>
        </Container>

    );
}



export default Signup;