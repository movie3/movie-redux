import React, { useState, useEffect, useCallback } from 'react';
// import { useHistory, useParams } from 'react-router';

import './movie-grid.scss';

import MovieCard from '../../movie-card/MovieCard';
import Button, { OutlineButton } from '../../button/Button';
// import Input from '../input/Input'

// import tmdbApi, { category, movieType, tvType } from '../../../api/tmdbApi';

import {getPopularMovie} from '../../../API/index'
import axios from 'axios';

const MovieGrid = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);

    // const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = await axios.get(getPopularMovie(page));
            setItems(response.data.results);
        }
        getList();
    }, [page]);

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} />
            </div>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
                }
            </div>
        </>
    );
}

const MovieSearch = props => {

    // const history = useHistory();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    // const goToSearch = useCallback(
    //     () => {
    //         if (keyword.trim().length > 0) {
    //             history.push(`/${category[props.category]}/search/${keyword}`);
    //         }
    //     },
    //     [keyword, props.category, history]
    // );

    // useEffect(() => {
    //     const enterEvent = (e) => {
    //         e.preventDefault();
    //         if (e.keyCode === 13) {
    //             goToSearch();
    //         }
    //     }
    //     document.addEventListener('keyup', enterEvent);
    //     return () => {
    //         document.removeEventListener('keyup', enterEvent);
    //     };
    // }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            {/* <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            /> */}
            {/* <Button className="small" onClick={goToSearch}>Search</Button> */}
        </div>
    )
}

export default MovieGrid;
