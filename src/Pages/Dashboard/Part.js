import React from 'react';
import { toast } from 'react-toastify';

const Part = ({ part, index, refetch, setDeletingPart }) => {
    const { name, availableQuantity, img, price } = part;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td>$ {price}</td>
            <td>
                <label onClick={() => setDeletingPart(part)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default Part;