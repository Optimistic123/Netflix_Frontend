import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

// console.log(math.sqrt(-4).toString()) // 2i

const API_KEY ='df7f7e19fa508c16271454c130cd7d39';
const fetchUrl =`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`;

function Banner() {
    const [movie , setMovie] = useState([]);

    useEffect ( () =>{
        async function fetchData(){
            const response = axios.get(fetchUrl)
            setMovie(
                response.data.result[math.floor(math.random()* response.data.result.length)]
            );
            return response;
        }
        fetchData();
    },[]);

  return (
     <header>
         <div className="banner_contents">
             <h1>{movie?.title || movie?.name ||movie?.original_name}</h1>
             <div className="banner_buttons">
                 <button className="banner_button">Play</button>
                 <button className="banner_button">My List</button>
             </div>

         </div>

     </header>
  )
}

export default Banner;
