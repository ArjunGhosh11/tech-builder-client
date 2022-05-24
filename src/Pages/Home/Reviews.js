import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    if (!reviews) {
        return <Loading></Loading>
    }
    return (
        <section className=''>
            <h2 className='text-accent font-bold text-left text-3xl' >REVIEWS</h2>
            <h2 className='text-primary font-bold text-left text-5xl'>Let's Hear It From Our Customers </h2>
            <div className='my-20 flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Reviews;