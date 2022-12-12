import React, { useState, useEffect, useCallback } from 'react';
// import { useHistory, useParams } from 'react-router';
import { Pagination } from "@mui/material"

import './movie-grid.scss';

import ReactPaginate from 'react-paginate';

import MovieCard from '../../movie-card/MovieCard';
import Button, { OutlineButton } from '../../button/Button';
// import Input from '../input/Input'

// import tmdbApi, { category, movieType, tvType } from '../../../api/tmdbApi';

import {getPopularMovie , getSearch , getCategory} from '../../../API/index'
import axios from 'axios';
import Filter from '../Filter';

const MovieGrid = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);

    const [totalPage , setTotalPage] = useState(1);

    const [search , setSearch] = useState('');

    const [filter , setFilter] = useState({
        "category" : 0 ,

    });

    useEffect(()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
    });
    },[])

    useEffect(() => {
        const getList = async () => {
            let response={};
            if(search === '' && filter.category==0) {
                response = await axios.get(getPopularMovie(page));
            }
            else if(search !== ''){
                response = await axios.get(getSearch(search , page));
            } 
            else if(filter.category != 0) {
                response = await axios.get(getCategory(filter.category));
            }
            setItems(response.data.results);
            setTotalPage(response.data.total_pages);
        }
        getList();
    }, [page]);

    useEffect(()=>{
        const getList = async () => {
            let response = {};
            if(search==='') {
                response = await axios.get(getPopularMovie(page));
            }
            else {
                response = await axios.get(getSearch(search))
                setPage(1);
            }
            setItems(response.data.results);
            setTotalPage(response.data.total_pages);
        }
        getList();
    } , [search])

    useEffect(()=>{
        const getList = async () => {
            let response = {};
            if(filter.category==0) {
                response = await axios.get(getPopularMovie());
                setPage(1);
                setSearch('');
            }
            else {
                response = await axios.get(getCategory(filter.category));
                setPage(1);
                setSearch('');
            }
            setItems(response.data.results);
            setTotalPage(response.data.total_pages);
        }
        getList();
    }, [filter])

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} setSearch={setSearch}/>
            </div>
            <Filter filter={filter} setFilter={setFilter}/>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
                }
            </div>
            <Pagination
                count={totalPage}
                color="primary"
                size='large'
                variant='outlined'
                className='mx-auto text-4xl text-center w-1/3 bg-white rounded'
                onChange={(e, page) => {
                    setPage(page);
                }}
                value={page}
            />
           {/* <video id='hls-example'  class="video-js vjs-default-skin" width="800" height="600" controls>
                <source type="application/x-mpegURL" src="https://shls-mbcdramaksa-ak.akamaized.net/out/v1/a79c9d7ef2a64a54a64d5c4567b3462a/index.m3u8" />
            </video> */}
            
        </>
    );
}

const MovieSearch = props => {

    const [keyword, setKeyword] = useState('');

    return (
        <div className="movie-search">
            <input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={()=>props.setSearch(keyword)}>Search</Button>
        </div>
    )
}

export default MovieGrid;
