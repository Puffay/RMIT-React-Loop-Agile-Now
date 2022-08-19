import Container from '@mui/system/Container';
import { createTheme, Typography } from '@mui/material';

const Signupverify = () => {
    return (
        <Container>
            <Typography component='h1' variant='h7' align='center'>
                Your account has been created!
            </Typography>
            <Container>
                <Button color="inherit" sx={{ ml: 'auto' }} onClick={(e) => navigate('/home')}>
                    Return to Home Page
                </Button>
            </Container>
        </Container>
    );
}


export default Signupverify;