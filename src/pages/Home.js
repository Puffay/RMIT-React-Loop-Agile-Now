import { useState } from 'react';
import BlogList from '../BlogList';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';
import { createTheme, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

const Home = () => {
    const [name, setName] = useState('John Doe');
    const [blogs, setBlogs] = useState([
        { title: 'Title', body: 'Description', author: 'Username1', id: 1 },
        { title: 'Title', body: 'Description', author: 'Username2', id: 2 },
        { title: 'Title', body: 'Description', author: 'Username3', id: 3 },
    ]);

    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Welcome to Loop Agile Now
            </Typography>
            {blogs.map((blog) => (
                <Container key={blog.id} sx={{
                    px: '10px',
                    py: '16px',
                    mx: '20px',
                }}>
                    <Typography component='h1' variant='h7' align='left'>
                        These are post from other users
                    </Typography>
                    <Paper>
                        <Typography component='h3' variant='h3' sx={{color: 'red', mb: '8px', fontSize: 25}}>
                            {blog.title}
                        </Typography>
                        <Typography component='p' variant='p'>
                            {blog.body}
                        </Typography>
                        <Typography component='p' variant='p'>
                            {blog.author}
                        </Typography>
                    </Paper>
                </Container>
            ))}
        </Container>
    );
}


export default Home;