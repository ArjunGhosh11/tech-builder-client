import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2beLATJOBJSigD4DAbRQViDJPmiTSnm0xNuJlOsdcVBXExEO4OfyIPMzKJkRwY2nnNSu6Uc7RHI06smXwAW15R00YrWQDuce');

const Payment = () => {
    const { id } = useParams();
    const url = `https://shrouded-beach-53259.herokuapp.com/orders/${id}`;
    console.log(url);
    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' mt-10 mx-auto flex flex-col items-center lg:w-[800px]' >
            <div className='bg-neutral p-20 rounded-3xl'>
                <div class="card w-50 max-w-md bg-base-200 shadow-xl my-12">
                    <div class="card-body">
                        <p className="text-primary font-bold">Hello, {order.customerName}</p>
                        <h2 class="card-title">Please Pay for {order.partName}</h2>
                        <p>Please pay: ${order.totalCost}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-200">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;