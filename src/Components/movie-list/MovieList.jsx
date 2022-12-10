import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import {getTopRatedMovie , getUpcomingMovie} from '../../API/index'
import MovieCard from '../movie-card/MovieCard';
import axios from 'axios';

const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            // if (props.type !== 'similar') {
            //     switch(props.category) {
            //         case category.movie:
            //             response = await tmdbApi.getMoviesList(props.type, {params});
            //             break;
            //         default:
            //             response = await tmdbApi.getTvList(props.type, {params});
            //     }
            // } else {
            //     response = await tmdbApi.similar(props.category, props.id);
            // }
            if(props.type === 'top_rated') {
                response = await axios.get(getTopRatedMovie());
            } 
            else if(props.type === 'up_coming') {
                response = await axios.get(getUpcomingMovie());
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
