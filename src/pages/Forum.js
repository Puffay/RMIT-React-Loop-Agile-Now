import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ForumList from '../component/ForumList';
import { Avatar, Box, Container, Button, Icon, IconButton, Stack, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { userContext } from '../App';
import { PhotoCamera } from '@mui/icons-material';
import { deleteForum, setForums } from '../data/database';
import { getPosts, createPost } from '../data/repository';

// Forum page for user to post and view other users posts. can also edit and delete own posts

const Forum = () => {
    const navigate = useNavigate();
    const [user] = useContext(userContext);
    const [error, setError] = useState('none');
    const [image, setImage] = useState(null);
    const [forums, setForumsState] = useState([]);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editID, setEditID] = useState(null);
    const [editBody, setEditBody] = useState('');

    if (user === null) {
        navigate('/login');
    }

    useEffect(() => {
        getPosts().then((posts) => {
            setForumsState(posts);
        });
    }, []);

    // Post on forum
    const postForum = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = data.get('post');
        const author = user.id;
        setError(null)
        if (body === '') {
            setError('Please enter a post');
        } else if (body.length > 600) {
            setError('Post cannot exceed 600 characters');
        }
        else {
            createPost({ text: body, id: author, image: image }).then((res) => {
                setForumsState([res, ...forums]);
                setImage(null);
                e.target.reset();
            }).catch((error) => {
                setError(error.message);
            });
        }
    }

    // Delete Post
    const handleDelete = (id) => {
        const newForums = forums.filter(forum => forum.id !== id);
        setForumsState(newForums);
        deleteForum(id);
        console.log('delete forum');
    }

    // Create Image
    const handlePhoto = (e) => {
        var file = e.target.files[0];
        if (file !== null) {
            var reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    // Edit Post
    const handleEdit = (id) => {
        setEditID(id);
        setEditBody(forums.find(forum => forum.id === id).body);
        setEditDialogOpen(true);
    }

    // Reply Post
    const handleReply = (id) => {
        navigate(`/forum/${id}`);
        
    }

    // Close Edit post
    const handleEditClose = () => {
        setEditDialogOpen(false);
    }

    // Save Edit post
    const handleEditComplete = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = data.get('newForumData');
        const forum = forums.find(forum => forum.id === editID);
        forum.body = body;
        setForumsState([...forums]);
        setForums([...forums]);
        setEditDialogOpen(false);
    }

    return (
        <Container>
            <Typography component='h1' variant='h7' align='left'>
                Welcome {user.name}
            </Typography>
            <Box onSubmit={postForum} component='form' align='center' >
                <TextField
                    name="post"
                    id="post"
                    label="New post"
                    multiline
                    rows={4}
                    margin="normal"
                    fullWidth
                />
                <Stack direction="row" spacing={2} sx={{ mb: 4, mt: 1 }}>
                    <Button type='submit' variant="contained" color="success">
                        Post
                    </Button>
                    <Icon sx={{ width: 40, height: 40 }}>
                        <IconButton
                            aria-label="Upload Picture"
                            component="label"
                            sx={{ width: 40, height: 40 }}
                        >
                            <input hidden accept="image/*" type="file" onChange={handlePhoto} />
                            <PhotoCamera />
                        </IconButton>
                    </Icon>
                    {image && (<Avatar alt="Image" src={image} />)}
                    <Typography color='error' sx={{ pt: 1, visibility: error === 'none' ? 'hidden' : 'visible' }} >{error}</Typography>
                </Stack>
            </Box>
            <Container sx={{ mb: 2 }}>
                <Typography component='h1' variant='h7' align='left' fontSize={24}>
                    Post from other users
                </Typography>
            </Container>
            <ForumList forums={forums} handleDelete={handleDelete} handleEdit={handleEdit} handleReply={handleReply} canDelete canEdit />
            <Dialog open={editDialogOpen} onClose={handleEditClose}>
                <Box component='form' onSubmit={handleEditComplete}>
                    <DialogTitle>Edit Forum</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Edit your post
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="newForumData"
                            label="Forum"
                            fullWidth
                            variant="standard"
                            multiline
                            rows={4}
                            defaultValue={editBody}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleEditClose}>Cancel</Button>
                        <Button type='submit'>Edit</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </Container>
    );
}


export default Forum;