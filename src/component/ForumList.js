import { Avatar, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { userContext } from "../App";
import { deepPurple } from '@mui/material/colors';
import MuiMarkdown from "mui-markdown";
import Reply from "./Reply";

// Forum page componenet for the forum page that shows the forum posts

const ForumList = (props) => {
    const forums = props.forums;
    const handleDelete = props.handleDelete;
    const handleEdit = props.handleEdit;
    const handleReply = props.handleReply;
    const [user] = React.useContext(userContext);

    return (
        <Container>
            {forums.map((forum) => (
                <Container key={forum.post_id} sx={{
                    px: '10px',
                    py: '16px'
                }}>
                    <Paper sx={{ pb: '5px' }}>
                        <Grid container spacing={3} >
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Avatar sx={{ bgcolor: deepPurple[500], mb: '16px', ml: '16px' }}>
                                        {forum.user.name.split(' ').map(str => str[0]).join('')}
                                    </Avatar>
                                    <Typography variant="h6" component="h6">
                                        {forum.user.name}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={4} >
                                {user === null || (!(props.canDelete && (user.id === forum.user.id)) ?? false) ? (
                                    <div></div>)
                                    : (
                                        <Button onClick={() => handleDelete(forum.id)} sx={{ ml: '220px' }} >
                                            Delete Post
                                        </Button>)
                                }
                                {user === null || (!(props.canEdit && (user.id === forum.user.id)) ?? false) ? (
                                    <div></div>)
                                    : (
                                        <Button onClick={() => handleEdit(forum.id)} sx={{ ml: '220px' }} >
                                            Edit Post
                                        </Button>)
                                }
                                <Button onClick={() => handleReply(forum.post_id)} sx={{ ml: '216px' }} >
                                    Reply
                                </Button>
                            </Grid>
                        </Grid>
                        <Container>
                            <MuiMarkdown>{forum.text}</MuiMarkdown>
                        </Container>
                        {forum.image ? (
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
                        ) : (<div></div>)}
                    </Paper>
                    {forum.replies.map((reply) => (
                        <Reply key={reply.post_id} reply={reply} />
                    ))}
                </Container>
            ))}
        </Container>
    )
}


export default ForumList;