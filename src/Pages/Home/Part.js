import React from 'react';

const Part = ({ part }) => {
    const { img, name, minimumQuantity, description, availableQuantity, price } = part;
    return (
        <div class="card w-96 bg-base-200 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold">{name}</h2>
                <div className='text-left m-5'>
                    <p><small><strong>Minimum Order Quantity:</strong> {minimumQuantity}</small></p>
                    <p><small><strong>Price(per unit):</strong> ${price}</small></p>
                    <p><small><strong>Available Quantity:</strong> {availableQuantity}</small></p>
                    <p title={description}><small><strong>Description:</strong> {description.length > 100 ? description.slice(0, 100) + '...' : description}</small></p>
                    <p><small><strong>Minimum Order Quantity:</strong> {minimumQuantity}</small></p>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;