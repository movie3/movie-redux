import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import {getTopRatedMovie , getUpcomingMovie , getMovieSimilar} from '../../API/index'
import MovieCard from '../movie-card/MovieCard';
import axios from 'axios';

const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if(props.type === 'top_rated') {
                response = await axios.get(getTopRatedMovie());
            } 
            else if(props.type === 'up_coming') {
                response = await axios.get(getUpcomingMovie());
            }
            else if(props.type === 'similar') {
                response = await axios.get(getMovieSimilar(props.id));
            }
            setItems(response.data.results);
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;
