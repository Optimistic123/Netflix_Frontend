import React,{ useState , useEffect } from 'react';
import axios from 'axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const API_KEY ='df7f7e19fa508c16271454c130cd7d39';
const fetchUrl =`https://api.themoviedb.org/3/https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


function Comedymovies({title}) {
    const [movies , setMovies] = useState([]);

    useEffect ( () => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
              
        }
        fetchData();
    },[]);

    console.log(movies);

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(movie => (
                <img 
                className="row_poster"
                key={movie.id}
                src={`${base_url}${movie.backdrop_path}`} 
                alt={movie.name} 
                />
            ))}
        </div>
      {/* title
      conatiner */}
    </div>
  )
}

export default Comedymovies;
