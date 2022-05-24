import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <BussinessSummary></BussinessSummary>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;