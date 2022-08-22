import { useContext, useState } from 'react';
import ForumList from '../component/ForumList';
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
    const [forum, setForum] = useState();
    const [forums, setForums] = useState([
        { title: 'Title', body: 'Description', author: 'Username1', id: 1 },
        { title: 'Title', body: 'Description', author: 'Username2', id: 2 },
        { title: 'Title', body: 'Description', author: 'Username3', id: 3 },
    ]);

    const postForum = (e) => { // post on forum
        e.preventDefault();
        console.log('forum');


    }

    // this is for the textboxs which creates forums
    const onChangeForum = (e) => {
        setForum(e.target.value);
        console.log(forum);
    }

    const handleClick = (e) => {
        console.log('clicked', e);
        // testing
    }

    const handleDelete = (id) => {
        const newForums = forum.filter(forum => forum.id !== id);
        setForums(newForums)
        console.log('delete forum');
    }

    // fixs buttons Delete and Post
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
                    onChange={onChangeForum}
                />
                <Stack direction="row" spacing={2} sx={{ mb: 4, mt: 1 }}>
                    <Button variant="outlined" color="error" onClick={() => { setEmpty(''); console.log('clicked delete') }}>
                        Delete
                    </Button>
                    <Button type='submit' variant="contained" color="success" onClick={handleClick}>
                        Post
                    </Button>
                </Stack>
            </Box>
            <Container>
                <Typography component='h1' variant='h7' align='left' fontSize={24}>
                    Post from other users
                </Typography>
            </Container>
            <ForumList forums={forums}  />
        </Container>
    );
}


export default Forum;