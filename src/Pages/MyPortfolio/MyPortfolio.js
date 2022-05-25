import React from 'react';
import Loading from '../Shared/Loading';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-accent'>MY PORTFOLIO</h2>
            <div className='p-10 '>
                <div className='bg-neutral text-white text-bold p-10 rounded-3xl'>
                    <ul>
                        <li><h2 className='text-2xl mb-3'>NAME: ARJUN GHOSH</h2></li>
                        <li><h2 className='text-2xl mb-3'>EMAIL: ghosh.rj11@gmail.com</h2></li>
                        <li><h2 className='text-2xl mb-3'>PRIMARY EDUCATION: DAFFODIL INTERNATIONAL SCHOOL, TANGAIL</h2></li>
                        <li><h2 className='text-2xl mb-3'>SECONDARY EDUCATION: ST. MICHAEL'S SCHOOL, SILIGURI (ICSE,2019(passed with 96%))</h2></li>
                        <li><h2 className='text-2xl mb-3'>HIGHER SECONDARY EDUCATION: THE MODERN ACADEMY, KOLKATA(ISC,2021(passed with 94%))</h2></li>
                        <li><h2 className='text-2xl mb-3'>CURRENTLY(UNDERGRADUATE): BRAC UNIVERSITY, DHAKA (CSE DEPARTMENT)</h2></li>
                    </ul>
                    <hr />
                    <div className='font-bold'>
                        <h2 className='text-xl my-3'>LIST OF TECHNOLOGIES</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>Bootstrap</p>
                        <p>Tailwind</p>
                        <p>React Router</p>
                        <p>React Firebase Hooks</p>
                        <p>Firebase</p>
                        <p>Stripe</p>
                        <p>Mongodb</p>
                        <p className='mb-3'>Nodejs</p>
                    </div>
                    <hr />
                    <div className='flex flex-col font-bold '>
                        <h2 className='text-xl my-3'>LIST OF WEBSITES</h2>
                        {/* <a className='text-accent' target='_blank' href="https://tech-builder-49d52.web.app/">TECH BUILDER</a>
                        <a className='text-accent' target='_blank' href="https://assignment-11-281bf.firebaseapp.com/">TECH DOWN</a>
                        <a className='text-accent' target='_blank' href="https://assignment-10-f82c0.web.app/">MEMORIES</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;