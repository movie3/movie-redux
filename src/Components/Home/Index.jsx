import axios from "axios";
import React from "react";
import Banner from "./Banner";
// import { getPopularMovie } from '../../api'
import Hero from "./Hero";
import Slider from "./Slider";
import Subscribe from "./Subscribe";

const Home = () => {
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
