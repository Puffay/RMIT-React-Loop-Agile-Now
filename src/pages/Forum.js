import { useContext, useState } from 'react';
import ForumList from '../component/ForumList';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';
import { Button, Icon, IconButton, Stack, TextField, Typography } from '@mui/material';
import { userContext } from '../App';
import { PhotoCamera } from '@mui/icons-material';
import { addForum, getForums, deleteForum } from '../data/database';

// TODO: fix the uploading image that occurs when you pick an image AND THEN you type something in the text field

const Forum = () => {

    const [user, setUser] = useContext(userContext);
    const [forum, setForum] = useState('');
    const [error, setError] = useState('none');
    let image = null;
    const [forums, setForums] = useState(getForums() ?? []);

    // Post on forum
    const postForum = (e) => { 
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = data.get('post');
        const author = user.name;
        const id = forums.length + 1;
        const newForum = { body, author, id, image };
        setError(null)
        if (body === '') {
            setError('Please enter a post');
        } else if (forum.length > 250) {
            setError('Post cannot exceed 250 characters');
        }
        else {
            setForums([addForum(author, body, image), ...forums]);
            e.target.reset();
        }
        image = null;
        console.log('Did the post forum work?');
    }

    // Creates Forum
    const onChangeForum = (e) => {
        setForum(e.target.value);
    }

    // Delete Post
    const handleDelete = (id) => {
        const newForums = forums.filter(forum => forum.id !== id);
        setForums(newForums);
        deleteForum(id);
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
                    <Typography color='error' sx={{pt: 1, visibility: error === 'none' ? 'hidden' : 'visible'}} >{error}</Typography>
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