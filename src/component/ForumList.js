import { Avatar, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { userContext } from "../App";
import { getUserName } from "../data/database";
import { deepPurple } from '@mui/material/colors';

// Forum page componenet for the forum page that shows the forum posts

const ForumList = (props) => {
    const forums = props.forums;
    const handleDelete = props.handleDelete;
    const handleEdit = props.handleEdit;
    const [user] = React.useContext(userContext);

    const getAuthorName = (author) => {
        return getUserName(author);
    }

    return (
        <Container>
            {forums.map((forum) => (
                <Container key={forum.id} sx={{
                    px: '10px',
                    py: '16px'
                }}>
                    <Paper>
                        <Grid container spacing={3} >
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Avatar sx={{ bgcolor: deepPurple[500], mb: '16px', ml: '16px' }}>
                                        {getAuthorName(forum.author).split(' ').map(str => str[0]).join('')}
                                    </Avatar>
                                    <Typography variant="h6" component="h6">
                                        {getAuthorName(forum.author)}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={4} >
                                {user === null || (!(props.canDelete && (user.id === forum.author)) ?? false) ? (
                                    <div></div>)
                                    : (
                                        <Button onClick={() => handleDelete(forum.id)} sx={{ ml: '220px' }} >
                                            Delete Post
                                        </Button>)
                                }
                                {user === null || (!(props.canEdit && (user.id === forum.author)) ?? false) ? (
                                    <div></div>)
                                    : (
                                        <Button onClick={() => handleEdit(forum.id)} sx={{ ml: '220px' }} >
                                            Edit Post
                                        </Button>)
                                }
                            </Grid>
                        </Grid>
                        <Typography component='p' variant='p' sx={{ mb: '8px', ml: '10px' }}>
                            {forum.body}
                        </Typography>
                        {forum.image === null ? (
                            <div></div>
                        ) : (
                            <div>
                                {(forum.image && forum.image.startsWith("data:video")) ? (
                                    <video controls loop>
                                        <source src={forum.image} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Avatar src={forum.image} variant='square' sx={{ mb: '16px', ml: '16px', height: '100px', width: '100px' }}>
                                    </Avatar>
                                )}
                            </div>
                        )}
                    </Paper>
                </Container>
            ))}
        </Container>
    );
}


export default ForumList;