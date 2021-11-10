import React from 'react';
import Header from '../../Header/Header';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
        </div>
    );
};

export default Home;