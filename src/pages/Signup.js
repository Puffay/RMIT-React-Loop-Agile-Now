import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { addUser } from '../data/database';


const Signup = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const signupfunc = (e) => {
        e.preventDefault();
        addUser(email, name, password);
        console.log('Signup');
    }

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }
    function onChangeName(e) {
        setName(e.target.value)
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
                    <TextField name='name' label='Name' fullWidth margin='normal' onChange={onChangeName}/>
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