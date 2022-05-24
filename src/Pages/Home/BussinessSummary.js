import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGear, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import BusinessInfo from './BusinessInfo';
const BussinessSummary = () => {
    const infos = [
        {
            "id": 1,
            "icon": <FontAwesomeIcon icon={faGlobe} />,
            "quantity": "10+",
            "name": "Countries"
        },
        {
            "id": 2,
            "icon": <FontAwesomeIcon icon={faGear} />,
            "quantity": "2M+",
            "name": "Computer Parts"
        },
        {
            "id": 3,
            "icon": <FontAwesomeIcon icon={faUsers} />,
            "quantity": "5000+",
            "name": "Happy Clients"
        },
        {
            "id": 4,
            "icon": <FontAwesomeIcon icon={faThumbsUp} />,
            "quantity": "10000+",
            "name": "Feedbacks"
        }
    ]
    return (
        <div className='my-20 flex flex-col items-center justify-center'>
            <h2 className='text-accent font-bold text-center text-5xl'>BUILDING FOR MILLIONS OF TECH LOVERS</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
                {
                    infos.map(info => <BusinessInfo
                        key={info.id}
                        info={info}
                    ></BusinessInfo>)
                }
            </div>
        </div>
    );
};

export default BussinessSummary;