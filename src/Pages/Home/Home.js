import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Parts from './Parts';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <BussinessSummary></BussinessSummary>
        </div>
    );
};

export default Home;