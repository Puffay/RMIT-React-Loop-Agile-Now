import { useContext, useState } from 'react';
import Container from '@mui/system/Container';
import { Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import { userContext } from '../App';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteUser } from '../data/database';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../data/database';

const Profile = () => {
    const navigate = useNavigate();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = (e) => {
        const data = new FormData(e.currentTarget);
        const name = data.get("name");
        const email = data.get("email");
        e.preventDefault()

        if (name === '') {
            setNameError(true)
        }

        if (email === '') {
            setEmailError(true)
        }

        if (name && email) {
            console.log(name, email);
            editUser(name, email);
            navigate('/')
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


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setOpen(false);
        deleteUser(user.email);
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
    };

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
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 170, height: 170, mx: 'auto' }}>
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
                            defaultValue={user.name}
                            name="name"
                            label="Name"
                            variant="filled"
                            required
                            error={nameError}
                        />
                        <TextField
                            defaultValue={user.email}
                            name="email"
                            label="Email"
                            variant="filled"
                            required
                            error={emailError}
                        />

                        <Button variant="contained" color="primary" type="submit" onSubmit={handleSubmit}>
                            Save
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleClickOpen}>
                            Delete
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Delete Account Confirmation"} 
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Are you sure you want to delete your account? This includes all your account's existing posts.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDelete}>Yes</Button>
                                <Button onClick={handleClose} autoFocus>
                                    No
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Item>
            </Grid>
        </Container >
    );
}


export default Profile;