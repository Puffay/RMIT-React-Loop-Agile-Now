import { useContext, useState } from 'react';
import ForumList from '../component/ForumList';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';
import { Button, createTheme, Icon, IconButton, Stack, TextField, Typography } from '@mui/material';
import { userContext } from '../App';
import { PhotoCamera } from '@mui/icons-material';

// TODO: make the forum post and delete functional
// TODO: fix post so that its connected to the database

const Forum = () => {

    const [empty, setEmpty] = useState('');
    const [user, setUser] = useContext(userContext);
    const [name, setName] = useState('John Doe');
    const [forum, setForum] = useState('');
    const [error, setError] = useState('none');
    let image = null;
    const [forums, setForums] = useState([
        { body: 'Description', author: 'Username1', id: 1, image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
        { body: 'Description', author: 'Username2', id: 2, image: null },
        { body: 'Description', author: 'Username3', id: 3, image: 'data:image/webp;base64,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'},
    ]);

    const postForum = (e) => { // post on forum
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = data.get('post');
        const author = user.name;
        const id = forums.length + 1;
        const newForum = { body, author, id, image };
        if (body === '') {
            setError('Please enter a post');
        }
        setForums([newForum, ...forums]);
        image = null;
        e.target.reset();
        console.log('Did the post forum work?');
    }

    //TODO this is for the textboxs which creates forums
    const onChangeForum = (e) => {
        setForum(e.target.value);
    }

    // Delete Post
    const handleDelete = (id) => {
        const newForums = forums.filter(forum => forum.id !== id);
        setForums(newForums);
        console.log('delete forum');
    }

    // Create Image
    const handlePhoto = (e) => {
        var file = e.target.files[0];
        if (file !== null) {
            var reader = new FileReader();
            reader.onloadend = () => {
                image = reader.result;
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <Container>
            <Typography component='h1' variant='h7' align='left'>
                Welcome {user.name}
            </Typography>
            <Box onSubmit={postForum} component='form' align='center' >
                <TextField
                    name="post"
                    label="New post"
                    multiline
                    rows={4}
                    margin="normal"
                    fullWidth
                    onChange={onChangeForum}
                />
                <Stack direction="row" spacing={2} sx={{ mb: 4, mt: 1}}>
                    <Button type='submit' variant="contained" color="success">
                        Post
                    </Button>
                    <Icon sx={{width: 40, height: 40}}>
                        <IconButton
                            aria-label="Upload Picture"
                            component="label"
                            sx={{width: 40, height: 40}}
                        >
                            <input hidden accept="image/*" type="file" onChange={handlePhoto} />
                            <PhotoCamera />
                        </IconButton>
                    </Icon>
                </Stack>
            </Box>
            <Container>
                <Typography component='h1' variant='h7' align='left' fontSize={24}>
                    Post from other users
                </Typography>
            </Container>
            <ForumList forums={forums} handleDelete={handleDelete} canDelete />
        </Container>
    );
}


export default Forum;