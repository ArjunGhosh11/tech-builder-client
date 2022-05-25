import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem('accessToken');
                        navigate('/');
                        console.log(res);
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                    console.log(data);
                });
        }
    }, [user])

    if (!orders) {
        return <Loading></Loading>;
    }
    return (
        <div className='p-12'>
            <h2 className='text-center text-2xl font-bold text-primary'>MANAGE ALL ORDERS</h2>
            <div class="overflow-x-auto font-bold">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Part Name</th>
                            <th>Total Cost</th>
                            <th>Shipment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr key={o._id}>
                                <th>
                                    <div class="avatar">
                                        <div class="w-8 rounded">
                                            <img src={o.img} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </th>
                                <td>{o.customerName}</td>
                                <td>{o.partName}</td>
                                <td>$ {o.totalCost}</td>
                                <td>
                                    {(o.totalCost && (o.paymentStatus === 'unpaid')) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>PENDING</button></Link>}
                                    {(o.totalCost && (o.paymentStatus === 'paid')) && <div>
                                        <button className='btn btn-xs btn-success'>Ship</button>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;