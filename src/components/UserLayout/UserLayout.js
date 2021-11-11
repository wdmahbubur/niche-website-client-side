import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../pages/Home/Home';
const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default UserLayout;