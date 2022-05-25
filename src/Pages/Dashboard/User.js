import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { email, role, _id } = user;
    const makeAdmin = () => {
        fetch(`https://shrouded-beach-53259.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>{_id}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-primary">Make Admin</button>}</td>
        </tr>
    );
};

export default User;