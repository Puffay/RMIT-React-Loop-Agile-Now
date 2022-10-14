import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ForumList from '../component/ForumList';
import { Avatar, Box, Container, Button, Icon, IconButton, Stack, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { userContext } from '../App';
import { createReply } from '../data/repository';

const Reply = (params) => {
    const navigate = useNavigate();
    const [user] = useContext(userContext);
    const [error, setError] = useState('none');
    const post_id = useParams().id;
    
    if (user === null) {
        navigate('/login');
    }

    // Post
    const postReply = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const text = data.get('text');
        const author = user.id;
        setError(null)
        if (text === '') {
            setError('Please enter a post');
        } else if (text.length > 600) {
            setError('Post cannot exceed 600 characters');
        }
        else {
            createReply(post_id, text).then((reply) => {
                navigate(`/forum`);
            }).catch((error) => {
                setError(error.message);
            });
        }
    }

    return (
        <Container>
            <Box onSubmit={postReply} component='form' align='center' >
                <TextField
                    name="text"
                    id="text"
                    label="Reply"
                    multiline
                    rows={4}
                    margin="normal"
                    fullWidth
                />
                <Stack direction="row" spacing={2} sx={{ mb: 4, mt: 1 }}>
                    <Button type='submit' variant="contained" color="success">
                        Reply
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}


export default Reply;