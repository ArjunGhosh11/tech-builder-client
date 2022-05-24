import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            // fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);

    if (parts === []) {
        return <Loading></Loading>;
    }

    // const { data, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/parts'))
    console.log(parts);

    return (
        <section className='flex flex-col items-center justify-center'>
            <h2 className='font-bold text-5xl text-center text-accent'>PARTS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </section>
    );
};

export default Parts;