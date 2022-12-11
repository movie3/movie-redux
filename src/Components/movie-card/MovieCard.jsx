import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../API/tmdbApi";
import apiConfig from "../../API/apiConfig";
import { FaHeart } from "react-icons/fa";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const isAuth = useIsAuthenticated()
  const navigate = useNavigate()

  const item = props.item;
  // console.log(props.item);
  const link = '/movie/' + item.id;

  const handleNavigate = () => {
    return navigate('/login')
  }
  console.log(isAuth());
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <div>
      <Link to={link}>
        <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
          <Button>
            <i className="bx bx-play"></i>
          </Button>
        </div>
      </Link>
      {isAuth() ? (
        <>
          <div>
            <button className="bg-border hover:text-subMain transitions text-white px-4 py-3 rounded-full text-sm bg-opacity-30">
              <FaHeart />
            </button>
          </div>
          <div>
            <h3>{item.title || item.name}</h3>
          </div>
        </>
      ) : (
        <>
          <div>
            <button className="bg-border hover:text-subMain transitions text-white px-4 py-3 rounded-full text-sm bg-opacity-30" onClick={handleNavigate}>
              <FaHeart />
            </button>
          </div>
          <div>
            <h3>{item.title || item.name}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
