import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, Loading] = useAuthState(auth);
    if (Loading) {
        return <Loading></Loading>;
    }

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>

        <li className='font-bold ml-5 text-xl'><Link to="/">Home</Link></li>
        <li className='font-bold ml-5 text-xl'><Link to="/blogs">Blogs</Link></li>
        <li className='font-bold ml-5 text-xl'><Link to="/myPortfolio">My Portfolio</Link></li>

        {
            user && <li className='font-bold text-xl sm:ml-5'><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ?
            <div className='sm:flex sm:flex-col sm:mr-5 lg:flex-row-reverse'>
                <p className='font-bold text-[red] sm:mr-5'>{user?.displayName}</p>
                <button className="btn btn-ghost lg:text-xl font-bold sm:mr-8" onClick={logout} >Sign Out</button>
            </div> : <Link className='font-bold lg:text-xl sm:ml-5' to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-primary ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/home' className="pl-20 normal-case text-3xl font-bold">Tech Builder <FontAwesomeIcon icon={faComputer} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;