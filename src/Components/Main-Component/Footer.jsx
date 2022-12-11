import React from "react";

import "./style.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";

const Footer = () => {
  return (
    <div
      className="footer "
      style={{ backgroundImage: `url(${bg})`, height: 420 }}
    >
      <div className="footer__content container ">
        <div className="footer__content__logo mb-3">
          <div className="logo  ">
            <img src={logo} alt="" />
            <Link to="/">tMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus pl-16 ">
          <div className="footer__content__menu  pl-16 ">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu pl-16">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu ">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
