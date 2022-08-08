import { useState } from 'react';
import BlogList from './BlogList';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';

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
            <h1>Welcome to Loop Agile Now</h1>
            {blogs.map((blog) => (
                <Container className='userBlog' key={blog.id}>
                    <Paper><h3>{blog.title}</h3><p>{blog.body}</p><p>{blog.author}</p></Paper>
                </Container>
            ))}
           
        </Container>
     );
}
 
export default Home;