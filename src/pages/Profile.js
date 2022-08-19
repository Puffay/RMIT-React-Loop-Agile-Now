import { useState } from 'react';
import Container from '@mui/system/Container';
import { createTheme, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const Profile = () => {
    const [name, setName] = useState('John Doe');
    const [blogs, setBlogs] = useState([
        { title: 'Title', body: 'Description', author: 'Username1', id: 1 },
        { title: 'Title', body: 'Description', author: 'Username2', id: 2 },
        { title: 'Title', body: 'Description', author: 'Username3', id: 3 },
    ]);

    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Welcome ...username...
            </Typography>
            <Box sx={{  border: 1, borderRadius: '16px', borderColor: 'white', boxShadow: 20, width: 600, height: 300, backgroundColor: 'primary.dark' }}>
                <Container>
                    <Avatar align="centre" sx={{ bgcolor: deepPurple[500], width: 200, height: 200 }}>
                        <Typography variant="h3">
                            NAME
                        </Typography>
                    </Avatar>
                </Container>
                <Container>
                    <TextField name='name' type='text' label='Name' defaultValue="...name..." />
                    <TextField name='email' type='text' label='Email' defaultValue="...email..." />
                </Container>
            </Box>
        </Container >
    );
}


export default Profile;