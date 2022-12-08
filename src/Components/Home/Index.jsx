import React from 'react'
import Hero from './Hero'
import Slider from './Slider'
import Subscribe from './Subscribe'

const Home = () => {
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