import React from 'react';

const Review = ({ review }) => {
    const { name, img, rating, place, comment } = review;
    return (
        <div className="card lg:max-w-lg bg-neutral shadow-xl">
            <div className="card-body text-white font-bold">
                <p>{'"' + comment + '"'}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl text-secondary'>{name}</h4>
                        <p><small>Rating: {rating}/5</small></p>
                        <p>{place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;