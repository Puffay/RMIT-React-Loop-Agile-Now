import { useState } from 'react';
import ForumList from '../component/ForumList';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';
import { createTheme, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';
import { getForums } from '../data/database';

const Home = () => {
    const [forums, setForums] = useState(getForums() ?? []);

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