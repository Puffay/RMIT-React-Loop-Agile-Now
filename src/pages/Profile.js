import * as React from 'react';
import { useContext, useState } from 'react';
import Container from '@mui/system/Container';
import { Button, Stack, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar, TextField, Box } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import styled from '@mui/system/styled';
import { userContext } from '../App';
import { deleteUser } from '../data/database';
import { editUser, getUserName } from '../data/database';
import { useNavigate } from 'react-router-dom';

// Profile Page for editing profile and deleting account

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
            setUser(editUser(name, email));
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
            <Stack sx={{
                border: 1,
                borderRadius: '24px',
                borderColor: 'black',
                boxShadow: 20,
                mx: 'auto'
            }}>
                <Item>
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 170, height: 170, mx: 'auto' }}>
                        <Typography variant="h3" >
                            {getUserName(user.id).split(' ').map(str => str[0]).join('')}
                        </Typography>
                    </Avatar>
                </Item>
                <Item>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Box
                        sx={{
                                '& > :not(style)': { m: 2, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
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
                                type="email"
                                variant="filled"
                                required
                                error={emailError}
                            />
                            <TextField
                                name="dateofjoining"
                                label="Date of Joining"
                                disabled
                                defaultValue={new Date(user.date).toLocaleDateString("en-AU")}
                            />

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
                                    <Button onClick={handleDelete}>
                                        Yes
                                    </Button>
                                    <Button onClick={handleClose} autoFocus>
                                        No
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                        <Box alignItems={'center'} justifyContent={'space-between'}>
                            <Button variant="contained" color="primary" type="submit" onSubmit={handleSubmit} sx={{ mr: '20px' }}>
                                Save
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                Delete
                            </Button>
                        </Box>
                    </Box>
                </Item>
            </Stack>
        </Container >
    );
}


export default Profile;