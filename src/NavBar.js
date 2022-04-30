import React, { useEffect } from 'react'
import "./NavBar.css";
import { useState } from 'react';

function NavBar() {
    const[show, handleshow] = useState(false);

    const transistionNavBar = () => {
        if(window.scrollY > 100){
            handleshow(true);
        } else{
            handleshow(false);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", transistionNavBar);
        return () => window.removeEventListener("scroll", transistionNavBar);
    }, []);


  return ( 
    <div className={`navBar ${show &&"nav__black"  }`}>
        <div className='nav__contents'>
           <img className='nav__logo'
           src=" https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png"
           alt="" 
           />
           <button className='add__button'
           >Add Movie
           </button>
           <img className='nav__avatar'
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&usqp=CAU" 
           alt="avatar" 
           />
     </div>

    </div>
  );
}

export default NavBar