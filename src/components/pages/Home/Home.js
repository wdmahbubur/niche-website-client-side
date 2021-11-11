import React from 'react';

import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>

            <Banner />
            <Products />
            <Reviews />
            <Contact />

        </div>
    );
};

export default Home;