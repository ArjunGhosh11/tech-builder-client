import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className=''>
            <footer class="footer p-10 bg-primary text-neutral font-bold flex flex-col items-center justify-center">
                <div className='flex flex-col text-center  justify-center items-center'>
                    <FontAwesomeIcon className='text-9xl' icon={faComputer} />
                    <p >TECH Builder Ltd.<br />Providing reliable tech since 1992</p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;