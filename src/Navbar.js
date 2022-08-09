import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Box from '@mui/material/Box';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Loop Agile Now</h1>
            <Box className="links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </Box>
        </nav>
    );
}

export default Navbar;