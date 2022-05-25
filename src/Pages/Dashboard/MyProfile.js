import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const handleSubmit = (event, user) => {
        event.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const social = event.target.socialProfile.value;
        const updatedUser = { name, email, location, phone, social }
        console.log(updatedUser);
    }
    return (
        <div className='p-12 mx-auto lg:w-[800px]'>
            <h2 className='text-center text-2xl font-bold text-primary '>My Profile</h2>
            <form onSubmit={(event) => handleSubmit(event, user)} className='bg-neutral  pl-10 p-10  rounded-2xl font-bold flex flex-col '>
                <div className='flex flex-col w-full'>
                    <label className='text-white label-text ' htmlFor="name">Name</label>
                    <input type="text" name="name" id='name' disabled placeholder={user.displayName} className="w-full input input-bordered max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="email">Email</label>
                    <input type="text" name="email" id='email' disabled placeholder={user.email} className="w-full input input-bordered max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="location">Location</label>
                    <input type="text" name="location" id='location' placeholder="Location" className="w-full input input-bordered max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white label-text ' htmlFor="socialProfile">Social Profile Link</label>
                    <input type="text" name="socialProfile" id='socialProfile' placeholder="Social Profile Link" className="input input-bordered w-full max-w-3xl mb-5" />
                </div>
                <div>
                    <input className='w-full border border-3 text-center btn btn-primary text-white rounded-pill p-2 mb-3 bg-primary max-w-3xl fw-bolder' type="submit" value="UPDATE" />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;