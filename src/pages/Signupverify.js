import Container from '@mui/system/Container';
import { createTheme, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

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