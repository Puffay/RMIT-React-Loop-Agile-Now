import { useState } from 'react';
import ForumList from '../component/ForumList';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';
import { createTheme, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

const Home = () => {
    const [name, setName] = useState('John Doe');
    const [forums, setForums] = useState([
        { title: 'Title', body: 'Description', author: 'Username1', id: 1 },
        { title: 'Title', body: 'Description', author: 'Username2', id: 2 },
        { title: 'Title', body: 'Description', author: 'Username3', id: 3 },
    ]);

    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Welcome to Loop Agile Now
            </Typography>
            <Container>
                <Typography component='h1' variant='h7' align='left' fontSize={24}>
                    Post from other users
                </Typography>
            </Container>
            <ForumList forums={forums} />
        </Container>
    );
}


export default Home;