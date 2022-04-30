import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <header className="banner" 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/20-02-2020/netflix/Netflix-Banner_1080x419.jpg?impolicy=pqmedium")`,
        backgroundPosition: "center center",
    }}>
    <div className="banner__contents">

        <h1 className="banner__title">
            Movie Viewer
        </h1>
        <h1 className="banner__purpose">
            Demo For Internship
        </h1>
        <p className="banner__description">
        A film also called a movie, motion picture, moving pi  cture, or photoplay
        </p>
    </div>
        
    </header>
  )
}

export default Banner