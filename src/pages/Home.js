import { useState } from 'react';
import ForumList from '../component/ForumList';
import Container from '@mui/system/Container';
import { Typography } from '@mui/material';
import { getForums } from '../data/database';

// Home page that shows post from other users

const Home = () => {
    const [forums, setForums] = useState([]);

    useState(() => {
        setForums(getForums() ?? []);
    });

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