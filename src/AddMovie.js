import React from 'react'
import {useState} from 'react'
import './AddMovie.css'
import Banner from './Banner';

function MovieCrud() {

  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  
  async function addProduct(){
    console.warn(file,title,year,description)
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("year", year);
    formData.append("description", description); 
  }
  return (
    <div className='header'>
      <Banner/>
      <div className="product__container">
        <label htmlFor="">Choose File</label>
        <input 
         type="file"  
         className='form-control' 
         placeholder=''
         onChange={(e)=>setFile(e.target.value)}
         />
        <label htmlFor="">Enter Name</label>
        <input 
        type="text"
        className='form-control' 
        placeholder=''
        onChange={(e)=>setTitle(e.target.value)}
        />
        <label htmlFor="">Enter Year</label>  
        <input 
        type="text"  
        className='form-control' 
        placeholder=''
        onChange={(e)=>setYear(e.target.value)}
        />
        <label htmlFor="">Description</label>
        <input 
        type="text"  
        className='form-control' 
        placeholder=''
        onChange={(e)=>setDescription(e.target.value)}
        />

        <button className='add__btn' onClick={addProduct} >Add Movie</button>

      </div>
    
    </div>
  )
}

export default MovieCrud