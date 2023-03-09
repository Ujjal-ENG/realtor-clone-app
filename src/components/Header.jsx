import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const Header = () => {
    const [pageState, setPageState] = useState('sign in');

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPageState('Profile');
            } else {
                setPageState('Sing In');
            }
        });
    }, [auth]);

    return (
        <div>
            <header>
                <nav className="navbar bg-base-100 shadow-2xl">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-3xl" to="/">
                            <FcHome />
                            <span className="text-red-500">real</span>tor.com
                        </Link>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="/offers">Offers</Link>
                                </li>

                                <li>
                                    <Link to="/sign-in">SignIn</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="navbar-end hidden lg:block">
                            <ul className="menu menu-horizontal px-8 gap-6">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="/offers">Offers</Link>
                                </li>

                                <li>
                                    <Link to={pageState === 'sign in' ? '/sing-in' : '/profile'}>{pageState}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
