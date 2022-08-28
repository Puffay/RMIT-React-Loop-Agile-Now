import Container from '@mui/system/Container';
import { Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

// Moves sign up user to this page after signing up

const Signupverify = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Your account has been created!
            </Typography>
            <Container>
                <Button color="inherit" sx={{ ml: 'auto' }} onClick={(e) => navigate('/')}>
                    Return to Home Page
                </Button>
            </Container>
        </Container>
    );
}


export default Signupverify;