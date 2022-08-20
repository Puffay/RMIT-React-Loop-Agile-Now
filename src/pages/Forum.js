import { useContext, useState } from 'react';
import BlogList from '../BlogList';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';
import { Button, createTheme, Stack, TextField, Typography } from '@mui/material';
import { userContext } from '../App';

// TODO: make the forum post and delete functional

const Forum = () => {

    const [empty, setEmpty] = useState('');
    const [user, setUser] = useContext(userContext);
    const [name, setName] = useState('John Doe');
    const [blogs, setBlogs] = useState([
        { title: 'Title', body: 'Description', author: 'Username1', id: 1 },
        { title: 'Title', body: 'Description', author: 'Username2', id: 2 },
        { title: 'Title', body: 'Description', author: 'Username3', id: 3 },
    ]);

    const postForum = (e) => { // post on forum
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const post = data.get('post');

        setBlogs([...blogs, { title: name, body: 'Description', author: user.username, id: blogs.length + 1 }]);

        setEmpty('');
    }

    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Welcome {user.name}
            </Typography>
            <Box onSubmit={postForum} align='center' >
                <TextField
                    id="post"
                    label="New post"
                    multiline
                    rows={4}
                    margin="normal"
                    fullWidth
                    defaultValue="Write a post"
                />
                <Stack direction="row" spacing={2} sx={{ mb: 4, mt: 1 }}>
                    <Button variant="outlined" color="error" onClick={() => { setEmpty(''); }}>
                        Delete
                    </Button>
                    <Button variant="contained" color="success">
                        Post
                    </Button>
                </Stack>
            </Box>
            <Container>
                <Typography component='h1' variant='h7' align='left' fontSize={24}>
                    Post from other users
                </Typography>
            </Container>
            {blogs.map((blog) => (
                <Container key={blog.id} sx={{
                    px: '10px',
                    py: '16px'
                }}>
                    <Paper>
                        <Typography component='h3' variant='h3' sx={{ color: 'red', mb: '8px', fontSize: 25 }}>
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


export default Forum;