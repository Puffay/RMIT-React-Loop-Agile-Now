import { Avatar, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { userContext } from "../App";
import { deepPurple } from '@mui/material/colors';
import MuiMarkdown from "mui-markdown";

// For Reply

const Reply = (props) => {
    const reply = props.reply;
    const handleDelete = props.handleDelete;
    const handleEdit = props.handleEdit;
    const [user] = React.useContext(userContext);

    return (
        <Container sx={{ pt: '30px' }}>
            <Paper sx={{ pb: '5px' }}>
                <Grid container spacing={3} >
                    <Grid item xs={8}>
                        <Stack spacing={2} direction="row">
                            <Avatar sx={{ bgcolor: deepPurple[500], mb: '16px', ml: '16px' }}>
                                {reply.user.name.split(' ').map(str => str[0]).join('')}
                            </Avatar>
                            <Typography variant="h6" component="h6">
                                {reply.user.name}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Container>
                    <MuiMarkdown>{reply.text}</MuiMarkdown>
                </Container>
            </Paper>
        </Container>
    );
}


export default Reply;