import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);
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