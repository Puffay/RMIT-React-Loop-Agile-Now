import { useContext, useState } from 'react';
import Container from '@mui/system/Container';
import { createTheme, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import { userContext } from '../App';

const Profile = () => {
    const [name, setName] = useState('John Doe');
    const [blogs, setBlogs] = useState([
        { title: 'Title', body: 'Description', author: 'Username1', id: 1 },
        { title: 'Title', body: 'Description', author: 'Username2', id: 2 },
        { title: 'Title', body: 'Description', author: 'Username3', id: 3 },
    ]);

    const [user, setUser] = useContext(userContext);

    const Item = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        padding: theme.spacing(1),
        borderRadius: '16px',
        textAlign: 'center',
    }));

    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Welcome {user.name}
            </Typography>
            <Grid sx={{
                border: 1,
                borderRadius: '16px',
                borderColor: 'black',
                boxShadow: 20,
                width: 600,
                height: 300,
                mx: 'auto'
            }}>
                <Item>
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 170, height: 170, mx:'auto'}}>
                        <Typography variant="h3" >
                            NAME
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
                    >
                        <TextField id="firstname" label="First Name" variant="filled" />
                        <TextField id="lastname" label="Last Name" variant="filled" />
                    </Box>
                </Item>
            </Grid>
        </Container >
    );
}


export default Profile;