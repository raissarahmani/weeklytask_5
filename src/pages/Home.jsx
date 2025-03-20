import React from 'react'

import Hero from "./Home/Hero";
import Intro from "./Home/Intro";
import Nowplaying from "./Home/NowPlaying";
import Upcoming from "./Home/Upcoming";
import NewsLetter from "../components/Newsletter"

function Home() {
  return (
    <>
    <Hero />
    <Intro />
    <Nowplaying />
    <Upcoming />
    <NewsLetter />
    </>
  )
}

export default Home
