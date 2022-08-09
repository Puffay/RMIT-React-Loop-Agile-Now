import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Login = () => {
    return (
            <Box sx={{ width: 100, height: 100, backgroundColor: 'primary.dark', left: '40%'}}>
                <Typography>
                    <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold', m: 1 }}>
                        Please fill in the required information to login
                    </Box>
                    <Box sx={{ '& .MuiTextField-root': { m: 2, width: '25', left: '40%' }, }} >
                        <div>
                            <TextField
                                required
                                id="outlined-Username"
                                label="Username"
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-Password"
                                label="Password"
                            />
                        </div>
                        <div>
                            <Button variant="outlined">Login</Button>
                        </div>
                    </Box>
                </Typography>
            </Box >
    );
}



export default Login;