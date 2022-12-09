import axios from 'axios'
import React from 'react'
import { getPopularMovie } from '../../API'
import Hero from './Hero'
import Slider from './Slider'
import Subscribe from './Subscribe'

const Home = () => {
  // axios.get(getPopularMovie()).then(res => console.log(res.data))
  return (
    <>
      <Hero />
      <Slider title={'Top Rating'} />
      <Slider title={'Up Coming '} />
      <Subscribe />
    </>
  )
}

export default Home