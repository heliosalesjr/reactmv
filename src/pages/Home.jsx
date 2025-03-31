import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const movies = [
        {
            id: 1,
            title: 'Sharknado',
            release_date: '2023-01-01',
            url: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            title: 'Jaws',
            release_date: '2023-02-01',
            url: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            title: 'Friday the 13th',
            release_date: '2023-03-01',
            url: 'https://via.placeholder.com/150'
        }
    ]
    
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