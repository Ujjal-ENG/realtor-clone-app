import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPasword';
import Offers from './pages/Offers';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/profile" element={<PrivateRoute />}>
                    <Route exact path="/profile" element={<Profile />} />
                </Route>
                <Route exact path="/sign-in" element={<SignIn />} />
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route exact path="/forgot-password" element={<ForgotPassword />} />
                <Route exact path="/offers" element={<Offers />} />
                <Route exact path="/create-listing" element={<CreateListing />} />
                <Route path="*" element="No Path FOund" />
            </Routes>

            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
        </>
    );
};

export default App;
