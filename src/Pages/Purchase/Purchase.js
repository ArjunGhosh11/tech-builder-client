import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Purchase = () => {
    const [user] = useAuthState(auth);
    const [part, setPart] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/parts/${id.slice(1, id.length)}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, []);
    if (part === {}) {
        return <Loading></Loading>
    }
    const { img, name, minimumQuantity, description, availableQuantity, price } = part;
    const handlePurchase = (event, part, user) => {
        event.preventDefault();
        const customerName = user.displayName;
        const customer = user.email;
        const img = part.img;
        const partName = part.name;
        const address = event.target.address.value;
        const quantity = event.target.quantity.value;
        const totalCost = parseInt(quantity) * part.price;
        const order = { customer, img, partName, address, totalCost, customerName };
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('Order Placed Successfully!!')
                    event.target.reset();
                }
                else {
                    toast.error('Failed to place order.')
                }
            })

    }
    return (
        <div className='p-12 flex flex-col items-center'>
            <h2 className='font-bold text-5xl text-center text-accent'>Purchase</h2>
            <div class="hero man-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                    <div class="card-body flex flex-col items-center bg-base-200 rounded-2xl lg:ml-10">
                        <h2 class="card-title font-bold">{name}</h2>
                        <div className='text-left m-5'>
                            <p><small><strong>Minimum Order Quantity:</strong> {minimumQuantity}</small></p>
                            <p><small><strong>Price(per unit):</strong> ${price}</small></p>
                            <p><small><strong>Available Quantity:</strong> {availableQuantity}</small></p>
                            <p title={description}><small><strong>Description:</strong> {description}</small></p>
                            <p><small><strong>Minimum Order Quantity:</strong> {minimumQuantity}</small></p>
                            <p><small><strong>Customer's Name:</strong> {user?.displayName}</small></p>
                            <p><small><strong>Customer's:</strong> {user?.email}</small></p>
                        </div>
                        <div className='w-full flex-col flex '>
                            <form onSubmit={(event) => handlePurchase(event, part, user)} className='bg-neutral p-10 rounded-2xl font-bold flex flex-col w-full'>
                                <div className='flex flex-col'>
                                    <label className='text-white label-text ' htmlFor="quantity">Quantity</label>
                                    <input type="number" name="quantity" min={minimumQuantity} max={availableQuantity} id='quantity' placeholder="Quantity" defaultValue={minimumQuantity} className="w-full input input-bordered max-w-3xl mb-5" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-white label-text ' htmlFor="address">Address</label>
                                    <input type="text" name="address" id='address' placeholder="Address" className="input input-bordered w-full max-w-3xl mb-5" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-white label-text ' htmlFor="phone">Phone</label>
                                    <input type="text" name="phone" id='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-3xl mb-5" />
                                </div>
                                <div>
                                    <input className='w-full border border-3 text-center btn btn-primary text-white rounded-pill p-2 mb-3 bg-primary fw-bolder' type="submit" value="PURCHASE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Purchase;