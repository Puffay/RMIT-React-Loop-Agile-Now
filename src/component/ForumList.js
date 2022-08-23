import { Avatar, Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { userContext } from "../App";

// This is for forum

//TODO: fix this so that delete post only shows user who created post and also don't show in home page

const ForumList = (props) => {
    const forums = props.forums;
    const handleDelete = props.handleDelete;
    const [user, setUser] = React.useContext(userContext);
    const title = props.title; // not needed unless i can think of something else to do with it

    return (
        <Container>
            {forums.map((forum) => (
                <Container key={forum.id} sx={{
                    px: '10px',
                    py: '16px'
                }}>
                    <Paper>
                        <Grid container spacing={2} >
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Avatar sx={{ color: 'red', mb: '16px', ml: '16px', fontSize: 25 }}>
                                    </Avatar>
                                    <Typography variant="h6" component="h6">
                                        {forum.author}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                {user === null || (!props.canDelete ?? false) ? (
                                    <div></div>)
                                    : (
                                        <Button onClick={() => handleDelete(forum.id)} sx={{ ml: '220px' }} >
                                            Delete Post
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
                            <Avatar src={forum.image} variant='square' sx={{ mb: '16px', ml: '16px', height: '100px', width: '100px' }}>
                            </Avatar>
                        )}
                    </Paper>
                </Container>
            ))}
        </Container>
    );
}


export default ForumList;