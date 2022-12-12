import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './style.scss';

import logo from '../../assets/tmovie.png';
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit';



const Header = () => {
    const isAuth = useIsAuthenticated()
    const user = useAuthUser()
    console.log(user());
    const headerNav = [
        {
            display: 'Home',
            path: '/'
        },
        {
            display: 'Movies',
            path: '/movie'
        },
        {
            display: isAuth() ? user().first_name : 'Login',
            path: isAuth() ? '/profile' : '/login'
        },
        {
            display: isAuth() ? 'Iptv' : '',
            path: '/Iptv'
        },

    ];

    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const signOut = useSignOut()
    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <h1>B</h1>
                    <img src={logo} alt="" />
                    <Link to="/">X OFFICE</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                    {isAuth() ? (
                        <li>
                            <Link onClick={e => signOut()}>
                                Logout
                            </Link>
                        </li>

                    ) : ''}
                </ul>
            </div>
        </div>
    );
}

export default Header;
