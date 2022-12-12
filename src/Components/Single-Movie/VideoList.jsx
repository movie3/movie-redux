import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

// import { useParams } from 'react-router';

import { getMovieVideos } from '../../API';

const VideoList = props => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            // const res = await tmdbApi.getVideos(category, props.id);
            const res= await axios.get(getMovieVideos(props.id));
            // console.log(category);
            setVideos(res.data.results.slice(0, 3));
        }
        getVideos();
    }, [ props.id]);

    return (
        <>
        {videos.length > 0 ? 
        <>
        <h1 className='text-3xl font-bold'> Videos </h1>
        <div className='flex flex-row gap-3'>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            }
        </div>
        </> : ''
        }
        </>
    );
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video basis-1/3">
            <div className="video__title">
                {/* <h2>{item.name}</h2> */}
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;
