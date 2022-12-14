import React, { useEffect, useState } from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import apiConfig from "../../API/apiConfig";
import { FaHeart } from "react-icons/fa";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FavoritesMovies from "../Profile/FavoritesMovies";

const MovieCard = (props) => {
  const isAuth = useIsAuthenticated()
  const navigate = useNavigate()
  const user = useAuthUser()
  const item = props.item;
  // console.log(props.item);
  const link = '/movie/' + item.id;

  const addToFav = () => {
    const data = {
      user_id: user().id,
      movie_id: props.item.id
    }
    axios.post('http://127.0.0.1:8000/api/addfav', data).then(res => {
      console.log(res.data)
      props.setRender(!props.render)
    })
  }
  const deleteFav = () => {
    const data = {
      user_id: user().id,
      movie_id: props.item.id
    }
    axios.post('http://127.0.0.1:8000/api/delfav', data).then(res => {
      console.log(res.data)
      props.setRender(!props.render)
    })
  }


  const handleNavigate = () => {
    return navigate('/login')
  }
  // console.log(isAuth());
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
            {props.isFav ? (
              <button onClick={deleteFav} className="bg-border text-subMain transitions  px-4 py-3 rounded-full text-sm bg-opacity-30">
                <FaHeart />
              </button>) : (<button onClick={addToFav} className="bg-border hover:text-subMain transitions text-white px-4 py-3 rounded-full text-sm bg-opacity-30">
                <FaHeart />
              </button>)}

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
