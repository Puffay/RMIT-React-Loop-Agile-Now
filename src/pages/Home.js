import { useState } from 'react';
import ForumList from '../component/ForumList';
import Container from '@mui/system/Container';
import { Typography } from '@mui/material';
import { getPosts } from '../data/repository';

// Home page that shows post from other users

const Home = () => {
    const [forums, setForums] = useState([]);

    useState(() => {
        getPosts().then((data) => {
            setForums(data);
        });
    });

    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Welcome to Loop Agile Now
            </Typography>
            <Container sx={{ mb: 2 }}>
                <Typography component='h1' variant='h7' align='left' fontSize={24}>
                    Post from other users
                </Typography>
            </Container>
            <ForumList forums={forums} />
        </Container>
    );
}


export default Home;