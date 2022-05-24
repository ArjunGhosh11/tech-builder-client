import React from 'react';

const BusinessInfo = ({ info }) => {
    const { name, icon, quantity } = info;
    return (
        <div class="card w-96  text-neutral">
            <div class="card-body items-center text-center text-primary font-bold">
                <h2 class="card-title text-9xl text-neutral">{icon}</h2>
                <h2 className='text-3xl'>{quantity}</h2>
                <h2 className='text-3xl'>{name}</h2>
            </div>
        </div>
    );
};

export default BusinessInfo;