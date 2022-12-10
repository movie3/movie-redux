import React from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../button/Button'
import MovieList from '../movie-list/MovieList';

const Slider = (props) => {
  return (
    <div className="section mb-3">
      <div className="section__header mb-2">
          <h2>{props.title}</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
      </div>
            <MovieList type={props.type}/>
    </div>
  )
}

export default Slider