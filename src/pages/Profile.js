import { useContext, useState } from 'react';
import Container from '@mui/system/Container';
import { Button, createTheme, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import { userContext } from '../App';

const Profile = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === '') {
            setNameError(true)
        }

        if (email === '') {
            setEmailError(true)
        }

        if (name && email) {
            console.log(name, email)
        }
    }

    const [user, setUser] = useContext(userContext);

    const Item = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        padding: theme.spacing(1),
        borderRadius: '24px',
        textAlign: 'center',
    }));

    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Welcome {user.name}
            </Typography>
            <Grid sx={{
                border: 1,
                borderRadius: '24px',
                borderColor: 'black',
                boxShadow: 20,
                width: 600,
                height: 370,
                mx: 'auto'
            }}>
                <Item>
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 170, height: 170, mx: 'auto'}}>
                        <Typography variant="h3" >
                            {user.name}
                        </Typography>
                    </Avatar>
                </Item>
                <Item>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            onChange={(e) => setName(e.target.value)} ///fix whatever this is constantly doing
                            id="name"
                            label="Name" 
                            variant="filled"
                            defaultValue={user.name}
                            required
                            error={nameError}
                        />
                        <TextField
                            onChange={(e) => setEmail(e.target.value)} ///fix whatever this is constantly doing
                            id="email"
                            label="Email" 
                            variant="filled"
                            defaultValue={user.email}
                            required
                            error={emailError}
                        />

                        <Button variant="contained" color="primary" type="submit" onSubmit={handleSubmit}>
                            Save
                        </Button>
                        <Button  variant="contained" color="primary">
                            Delete
                        </Button>
                    </Box>
                </Item>
            </Grid>
        </Container >
    );
}


export default Profile;

///<TextField id="lastname" label="Last Name" variant="filled" />