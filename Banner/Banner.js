import React, { useEffect, useState } from 'react'
import axios from '../axios'
import {API_KEY,imageUrl} from '../Constants/constant'
import './Banner.css'
function Banner(){
  const [movie,setMovie]=useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US'`).then(response=>{
      console.log(response.data)
            setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })

  },[])
  return (
    <div
       style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
     className='Banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='Netflix-button'>
                <button className='button'>Play</button>
                <button className='button'>+ My List</button>

            </div>
            <div className='description'>
                <h2>{movie?movie.release_date:""}</h2>
                <h4>{movie?movie.overview:""}</h4>
            </div>

        </div>
      
  </div>
)}


export default Banner
