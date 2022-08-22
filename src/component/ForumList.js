import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

// use this for forum

const ForumList = (props) => {
    const forums = props.forums;
    const handleDelete = props.handleDelete;
    const title = props.title; // not needed unless i can think of something else to do with it

    console.log(props, forums); //delete

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
                                <Typography component='h3' variant='h3' sx={{ color: 'red', mb: '16px', ml: '16px', fontSize: 25 }}>
                                    {forum.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={() => handleDelete(forum.id)} sx={{ ml: '220px' }} >
                                    Delete Post
                                </Button>
                            </Grid>
                        </Grid>
                        <Typography component='p' variant='p' sx={{mb: '8px', ml: '10px'}}>
                            {forum.body}
                        </Typography>
                        <Typography component='p' variant='p' sx={{mb: '8px', ml: '10px'}}>
                            {forum.author}
                        </Typography>
                    </Paper>
                </Container>
            ))}
        </Container>
    );
}


export default ForumList;