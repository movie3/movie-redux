import React from "react";

import "./style.scss";

import { Link } from "react-router-dom";
import { useIsAuthenticated } from 'react-auth-kit';

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";

const Footer = () => {
  const isAuth = useIsAuthenticated()

  return (
    <div
      className="footer "
      style={{ backgroundImage: `url(${bg})`, height: 420 }}
    >
      <div className="footer__content container ">
        <div className="footer__content__logo mb-3">
          <div className="logo  ">
            B
            <img src={logo} alt="" />
            <Link to="/">X OFFICE</Link>
          </div>
        </div>
        <div className="footer__content__menus pl-16 ">
          <div className="footer__content__menu  pl-16 ">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact us</Link>
            {isAuth() ? (
              <Link to="/feed">Community</Link>
            ) : (
              <Link to="/login">Community</Link>

            )}
            <Link to="/about">About</Link>
          </div>
          <div className="footer__content__menu pl-16">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            {/* <Link to="/">Premium</Link> */}
            {/* <Link to="/">Pravacy policy</Link> */}
          </div>
          <div className="footer__content__menu ">
            {/* <Link to="/">You must watch</Link> */}
            <Link to="/movie">Recent release</Link>
            {/* <Link to="/">Top IMDB</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
