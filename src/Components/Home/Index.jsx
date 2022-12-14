import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
// import { getPopularMovie } from '../../api'
import Hero from "./Hero";
import Slider from "./Slider";
import Subscribe from "./Subscribe";

const Home = () => {

  const [movies, setMovies] = useState();
  useEffect(() => {
    // axios.get(getPopularMovie()).then(res => setMovies(res.data.results))
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }, []);
  // if (movies == null) {
  //   return <h1>loading..... </h1>
  // }

  return (
    <>
      <Hero />
      <div className="container">
        <Slider title={"Top Rated Movies"} type={"top_rated"} />
        <Banner />
        <Slider title={"Up Coming Movies"} type={"up_coming"} />
      </div>
    </>
  );
};

export default Home;
