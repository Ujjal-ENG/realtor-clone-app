import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPasword';
import Offers from './pages/Offers';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/sing-in" element={<SignIn />} />
                <Route exact path="/sing-up" element={<SignUp />} />
                <Route exact path="/forgot-password" element={<ForgotPassword />} />
                <Route exact path="/offers" element={<Offers />} />
            </Routes>
        </>
    );
};

export default App;
