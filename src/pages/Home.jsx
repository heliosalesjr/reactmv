import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import '../css/Home.css'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getPopularMovies()
            setMovies(data)
        }
        fetchMovies()
    }
    , [])

    const handleSubmit = (e) => {
        e.preventDefault() //prevent behavior so it doesn't refresh the page
        alert(`Searching for ${searchTerm}`)
        setSearchTerm('') //clear the search term after submit
    }
  return (
    
    <div className="home">
    <form onSubmit={handleSubmit} className='search-form'>
        <input 
            type="text" 
            placeholder='Search for a movie' 
            className='search-input'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='search-button'>Search</button>
    </form>
        <div className='movies-grid'>
            {movies.map(movie => 
                movie.title.toLowerCase().startsWith(searchTerm) && <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                />)
            }
        </div>
    
    </div>
  )
}

export default Home