import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../API/tmdbApi";
import apiConfig from "../../API/apiConfig";
import { FaHeart } from "react-icons/fa";

const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <>
      <Link to={link}>
        <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
          <Button>
            <i className="bx bx-play"></i>
          </Button>
        </div>
      </Link>

      <div>
        {" "}
        <button className="bg-border hover:text-subMain transitions text-white px-4 py-3 rounded-full text-sm bg-opacity-30">
          <FaHeart />
        </button>
      </div>
      <div>
        <h3>{item.title || item.name}</h3>
      </div>
    </>
  );
};

export default MovieCard;
