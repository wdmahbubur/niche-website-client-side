import { Toolbar } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const UserLayout = () => {
    return (
        <div>
            <Header />
            <Toolbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default UserLayout;