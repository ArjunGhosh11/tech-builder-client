import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        <Loading></Loading>
    }
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-center text-3xl font-bold text-accent'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-neutral font-bold  text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='btn-sm btn-primary mb-5' to="/dashboard">My Profile</Link></li>
                    {/* <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/makeAdmin">Make Admin</Link></li>
                    <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/addReview">Add a Review</Link></li>
                    <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/myOrders">My Orders</Link></li>
                    <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/addParts">Add a Part</Link></li>
                    <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/manageAllOrders">Manage All Orders</Link></li>
                    <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/manageProducts">Manage Parts</Link></li> */}
                    {
                        !admin && <>
                            <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/addReview">Add a Review</Link></li>
                            <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/myOrders">My Orders</Link></li>
                        </>
                    }
                    {admin && <>

                        <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/addParts">Add a Part</Link></li>
                        <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/manageAllOrders">Manage All Orders</Link></li>
                        <li><Link className='btn-sm btn-primary mb-5' to="/dashboard/manageProducts">Manage Parts</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;

