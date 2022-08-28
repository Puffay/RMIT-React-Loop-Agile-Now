// import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Forum from './pages/Forum';
import Signupverify from './pages/Signupverify';
import Footer from './Footer';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { initUsers } from './data/database';
import { createContext, useState } from 'react';

export const userContext = createContext();

function App() {
  const userState = useState(JSON.parse(localStorage.getItem("user")));
  initUsers();
  return (
    <Box>
      <CssBaseline />
      <userContext.Provider value={userState}>
        <BrowserRouter>
          <Box>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/signupverify" element={<Signupverify />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Box sx={{ mb: '100px' }}></Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </userContext.Provider>
    </Box>
  );
}

export default App;
