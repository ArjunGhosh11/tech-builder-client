import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import Part from './Part';

const ManageProducts = () => {
    const [deletingPart, setDeletingPart] = useState(null);

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://shrouded-beach-53259.herokuapp.com/parts', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-center text-2xl font-bold text-primary">MANAGE PARTS</h2>
            <div class="overflow-x-auto font-bold">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Stock Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <Part
                                key={part._key}
                                part={part}
                                index={index}
                                refetch={refetch}
                                setDeletingPart={setDeletingPart}
                            ></Part>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingPart && <DeleteConfirmModal
                deletingPart={deletingPart}
                refetch={refetch}
                setDeletingPart={setDeletingPart}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProducts;