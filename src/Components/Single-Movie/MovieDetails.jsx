import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../API/tmdbApi';
import apiConfig from '../../API/apiConfig';

import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';

import { getMovieDetails } from '../../API';

import MovieList from '../movie-list/MovieList';
import axios from 'axios';
import MovieRates from './Reviews/Index';

const Detail = () => {

    const { id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await axios.get(getMovieDetails(id));
            setItem(response.data);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div>
                            <div className="section mb-3">
                              <MovieRates/>
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2 className='text-3xl font-bold'>Similar</h2>
                                </div>
                                <MovieList type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;
