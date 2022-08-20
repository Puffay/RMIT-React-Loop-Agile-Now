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
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { initUsers } from './data/database';
import { createContext, useState } from 'react';


export const userContext = createContext();

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const userState = useState(localStorage.getItem('user'));
  initUsers();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <userContext.Provider value={userState}>
        <BrowserRouter>
          <div>
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
            <Footer />
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </ThemeProvider>
  );
}

export default App;
