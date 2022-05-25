import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddProduct = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const availableQuantity = event.target.availableQuantity.value;
        const minimumQuantity = event.target.minimumQuantity.value;
        const part = { name, price, img, description, availableQuantity, minimumQuantity }
        console.log(part);
        fetch('http://localhost:5000/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(part)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast("Part Added Successfully!!");
                }
                else {
                    toast.error("Please try again");
                }
            })
    }
    return (
        <div className='p-12 mx-auto lg:w-[800px]'>
            <h2 className='text-center text-2xl font-bold text-primary'>ADD A PRODUCT</h2>
            <form onSubmit={(event) => handleSubmit(event)} className='bg-neutral  pl-10 p-10  rounded-2xl font-bold flex flex-col '>
                <div className='flex flex-col w-full'>
                    <label className='text-white label-text ' htmlFor="name">Name</label>
                    <input required type="text" name="name" id='name' placeholder='Name' className="w-full input input-bordered max-w-3xl mb-5" />
                </div>

                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="price">Price</label>
                    <input required type="text" name="price" id='price' placeholder="Price" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="img">Image URL</label>
                    <input required type="text" name="img" id='img' placeholder="Image URL" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="description">Description</label>
                    <input required type="text" name="description" id='description' placeholder="Description" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="availableQuantity">Available Quantity</label>
                    <input required type="text" name="availableQuantity" id='availableQuantity' placeholder="Available Quantity" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="minimumQuantity">Minimum Order Quantity</label>
                    <input required type="text" name="minimumQuantity" id='minimumQuantity' placeholder="Minimum Order Quantity" className="w-full input input-bordered max-w-3xl mb-5" />
                </div>
                <div>
                    <input className='w-full border border-3 text-center btn btn-primary text-white rounded-pill p-2 mb-3 bg-primary max-w-3xl fw-bolder' type="submit" value="ADD PART" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;