import React from 'react';
import "./HomeScreen.css";
import NavBar from './NavBar';
import Banner from './Banner';
import MovieCard from './MovieCard';

function HomeScreen() {
  return (
    <div className="homeScreen">
    <NavBar/>
    
    <Banner/>

    <MovieCard/>
    
    </div>
  )
}

export default HomeScreen;