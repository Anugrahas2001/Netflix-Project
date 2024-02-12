import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import'./Row.css'
import axios from '../axios'
import {imageUrl} from '../Constants/constant'
function Row(props) {
  const [urlId,setUrlid]=useState('')
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=ae772fa74c4656703e2f80e4e6303fcd`).then(response=>{
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }
      else{
        console.log("array empty")
      }
    })
  }
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
          {
            movies.map((obj)=>
              <img onClick={()=>handlemovie(obj.id)} className={props.ismall?'smallposter':'poster'}alt='image' src={`${imageUrl+obj.backdrop_path}`} />
              )
          }





        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key} />}
      
    </div>
  )
}

export default Row
