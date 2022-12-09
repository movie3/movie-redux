import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getPopularMovie } from '../../API'
import Hero from './Hero'
import Slider from './Slider'
import Subscribe from './Subscribe'

const Home = () => {
  const [movies, setMovies] = useState()
  useEffect(() => {

    axios.get(getPopularMovie()).then(res => setMovies(res.data.results))

  }, [])
  if (movies == null) {
    return <h1>loading..... </h1>
  }
  return (
    <>
      <Hero />
      <Slider title={'Top Rating'} movies={movies} />
      <Slider title={'Up Coming '} />
      <Subscribe />
    </>
  )
}

export default Home