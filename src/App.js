import {useEffect, useState} from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'

// 56fb1784

const API_URL = 'http://www.omdbapi.com?apikey=56fb1784';

const movie1 = {
    
        "Title": "The Amazing Spiderman T4 Premiere Special",
        "Year": "2012",
        "imdbID": "tt2233044",
        "Type": "movie",
        "Poster": "N/A"
    
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
        }
        useEffect(() => {
            searchMovies('Spiderman');
    },[]);

    return (
     <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input placeholder="Search for movies"
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img 
            src={SearchIcon}
            alt='search'
            onClick={() => searchMovies(SearchTerm)}/>
        </div>

        {
            movies?.length > 0
            ?(
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
                </div>
            ) :
            (
                <div className="empty">
                 <h2>No Movies Found</h2>
                </div>

            )
        }

   
     </div>
    );
}

export default App;