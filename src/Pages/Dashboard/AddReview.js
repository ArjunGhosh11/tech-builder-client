import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>;
    }
    const handleSubmit = (event, user) => {
        event.preventDefault();
        const name = user.displayName;
        const place = event.target.place.value;
        const rating = event.target.rating.value;
        const img = event.target.img.value;
        const comment = event.target.comment.value;
        const review = { comment, name, place, rating, img }
        console.log(review);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast("Review Added Successfully!!");
                }
                else {
                    toast.error("Please try again");
                }
            })
    }
    return (
        <div className='p-12 mx-auto lg:w-[800px]'>
            <h2 className='text-center text-2xl font-bold text-primary'>Add Review</h2>
            <form onSubmit={(event) => handleSubmit(event, user)} className='bg-neutral  pl-10 p-10  rounded-2xl font-bold flex flex-col '>
                <div className='flex flex-col w-full'>
                    <label className='text-white label-text ' htmlFor="name">Name</label>
                    <input required type="text" name="name" id='name' disabled placeholder={user.displayName} className="w-full input input-bordered max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="place">Place</label>
                    <input required type="text" name="place" id='place' placeholder="Place" className="w-full input input-bordered max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="rating">Rating</label>
                    <input required type="number" max={5} min={1} name="rating" id='rating' placeholder="Rating" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="img">Image URL</label>
                    <input required type="text" name="img" id='img' placeholder="Image URL" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="comment">Comment</label>
                    <input required type="text" name="comment" id='comment' placeholder="Comment" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div>
                    <input className='w-full border border-3 text-center btn btn-primary text-white rounded-pill p-2 mb-3 bg-primary max-w-3xl fw-bolder' type="submit" value="UPDATE" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddReview;