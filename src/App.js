import Contact from './components/Contact';
import FestivalsFront from './components/FestivalsFront';
import GalleryFront from './components/GalleryFront';
import Hero from './components/Hero';
import NavbarBottom from './components/NavbarBottom';
import NavbarTop from './components/NavbarTop';
import News from './components/News';
import './styles/_globals.scss';

import React from 'react'


const App = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <Hero/>
      <News/>
      <GalleryFront/>
      <FestivalsFront/>
      <Contact/>
    </div>
  )
}

export default App

