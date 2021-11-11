import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;