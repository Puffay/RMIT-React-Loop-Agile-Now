import { useState } from 'react';
import BlogList from './BlogList';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Home = () => {

    const [name, setName] = useState('John Doe');
    const [age, setAge] = useState(20);
    const [blogs, setBlogs] = useState([
        { title: 'Title', body: 'Description', author: 'Username1', id: 1 },
        { title: 'Title', body: 'Description', author: 'Username2', id: 2 },
        { title: 'Title', body: 'Description', author: 'Username3', id: 3 },
    ]);

    const handleClick = () => {
        setName('Whoever this is');
        setAge(Math.random() * 10);
    }

    return ( 
        <Container>
            <Typography component='h1'variant='h7'>
                Welcome to Loop Agile Now
            </Typography>
            {blogs.map((blog) => (
                <Container className='userBlog' key={blog.id}>
                    <Paper>
                        <Typography component='h3' variant='h3'>
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