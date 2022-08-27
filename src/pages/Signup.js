import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { addUser, existUser, getUser, verifyUser } from '../data/database';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('none');
    const [user, setUser] = React.useContext(userContext);

    const signupfunc = (e) => {
        e.preventDefault();

        if (email === '' || password === '' || name === '') { // Check if all fields are filled out
            setError('Please fill out all fields');
        } else if (existUser(email)) { //should check to see if user already exists
            setError('Account already exist');
        } else if (password.length < 8) { // Check if password is strong
            setError('Password should be at least 8 characters');
        } else {
            addUser(email, name, password);
            verifyUser(email, password);
            setUser(getUser()); // when user registers they are logged in
            navigate('/signupverify');
        }
        
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
                    <TextField name='email' type='email' label='Email' fullWidth margin='normal' onChange={onChangeEmail} error={error !== 'none'} />
                    <TextField name='name' label='Name' fullWidth margin='normal' onChange={onChangeName} error={error !== 'none'} />
                    <TextField name='password' type='password' label='Password' fullWidth margin='normal' onChange={onChangePassword} error={error !== 'none'} />
                    <Typography color='error' sx={{visibility: error === 'none' ? 'hidden' : 'visible'}} >{error}</Typography>
                    <Button type='submit' fullWidth variant='contained' color='primary' sx={{my: 2}}>
                        Register
                    </Button>
                </Box>
            </Paper>
        </Container>

    );
}



export default Signup;